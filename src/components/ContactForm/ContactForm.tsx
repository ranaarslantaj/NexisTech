"use client";

import { useState } from "react";
import { db, isFirebaseConfigured } from "@/lib/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "Web Application Development",
    message: "",
  });

  const [status, setStatus] = useState<{
    type: "idle" | "loading" | "success" | "error";
    message: string;
  }>({ type: "idle", message: "" });

  const [errors, setErrors] = useState<{
    name?: string;
    email?: string;
    message?: string;
  }>({});

  const services = [
    "Mobile Application Development",
    "Web Application Development",
    "Government Digital Solutions",
    "Dashboard & Monitoring Systems",
    "Cloud-Based Platforms",
    "E-Commerce Solutions",
    "Smart Management Systems",
    "UI/UX & Digital Branding",
  ];

  const validate = () => {
    const tempErrors: typeof errors = {};
    if (!formData.name.trim()) tempErrors.name = "Name is required";
    if (!formData.email.trim()) {
      tempErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Email is invalid";
    }
    if (!formData.message.trim()) tempErrors.message = "Message cannot be empty";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus({ type: "loading", message: "Sending query..." });

    try {
      if (isFirebaseConfigured && db) {
        // Firebase Submission
        await addDoc(collection(db, "contacts"), {
          ...formData,
          createdAt: serverTimestamp(),
        });
        setStatus({
          type: "success",
          message: "Thank you! Your message has been sent. Our team will contact you shortly.",
        });
      } else {
        // Fallback Demo Submission
        console.log("Mock Firestore submission triggered: ", formData);
        
        // Save locally to simulate storage
        const submissions = JSON.parse(localStorage.getItem("nexis_contact_submissions") || "[]");
        submissions.push({ ...formData, createdAt: new Date().toISOString() });
        localStorage.setItem("nexis_contact_submissions", JSON.stringify(submissions));

        // Simulate network latency
        await new Promise((resolve) => setTimeout(resolve, 800));

        setStatus({
          type: "success",
          message: "Demo Mode Success! Your query has been logged locally. (Configure Firebase keys to enable live submissions).",
        });
      }
      setFormData({ name: "", email: "", service: "Web Application Development", message: "" });
    } catch (error) {
      console.error("Submission failed: ", error);
      setStatus({
        type: "error",
        message: "Failed to send message. Please try again or contact us directly at contact@nexistechsolutions.com.",
      });
    }
  };

  return (
    <div style={{ backgroundColor: "var(--surface)", border: "1px solid var(--border)", borderRadius: "var(--border-radius)", padding: "40px", boxShadow: "var(--shadow)" }}>
      {status.type === "success" ? (
        <div style={{ textAlign: "center", padding: "20px 0" }}>
          <div style={{ color: "#4caf50", marginBottom: "20px" }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ width: "64px", height: "64px", margin: "0 auto" }}
            >
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
              <polyline points="22 4 12 14.01 9 11.01" />
            </svg>
          </div>
          <h3 style={{ fontSize: "1.4rem", marginBottom: "12px" }}>Submission Received</h3>
          <p style={{ color: "var(--text-secondary)", fontSize: "1rem", lineHeight: "1.6", marginBottom: "24px" }}>
            {status.message}
          </p>
          <button onClick={() => setStatus({ type: "idle", message: "" })} className="btn btn-secondary">
            Send Another Message
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name" className="form-label">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Muneer Ahmad"
              className="form-input"
            />
            {errors.name && <span style={{ color: "#ff4d4f", fontSize: "0.82rem" }}>{errors.name}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="email" className="form-label">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="contact@nexistechsolutions.com"
              className="form-input"
            />
            {errors.email && <span style={{ color: "#ff4d4f", fontSize: "0.82rem" }}>{errors.email}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="service" className="form-label">
              Project Domain
            </label>
            <select
              id="service"
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="form-input"
              style={{ appearance: "none", backgroundImage: "url(\"data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e\")", backgroundRepeat: "no-repeat", backgroundPosition: "right 18px center", backgroundSize: "16px" }}
            >
              {services.map((service, index) => (
                <option key={index} value={service}>
                  {service}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="message" className="form-label">
              Message / Requirements
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="How can we help your organization?"
              className="form-textarea"
            />
            {errors.message && <span style={{ color: "#ff4d4f", fontSize: "0.82rem" }}>{errors.message}</span>}
          </div>

          {status.type === "error" && (
            <div style={{ padding: "14px", backgroundColor: "#fff2f0", border: "1px solid #ffccc7", borderRadius: "6px", color: "#ff4d4f", fontSize: "0.9rem", marginBottom: "20px", lineHeight: "1.5" }}>
              {status.message}
            </div>
          )}

          <button
            type="submit"
            disabled={status.type === "loading"}
            className="btn btn-primary"
            style={{ width: "100%", padding: "16px" }}
          >
            {status.type === "loading" ? "Sending..." : "Submit Project Inquiry"}
          </button>
        </form>
      )}
    </div>
  );
}
