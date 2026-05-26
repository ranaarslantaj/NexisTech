"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const heroStats = [
  { value: "12+", label: "Products delivered" },
  { value: "24/7", label: "Long-term support" },
  { value: "GovTech", label: "Enterprise + public sector" },
];

const servicePills = ["Enterprise Portals", "Mobile Apps", "Dashboards", "Automation"];

const heroPanels = [
  { label: "Premium UI direction", value: "Modern, polished interfaces with strong visual trust." },
  { label: "Operational reliability", value: "Systems built for real adoption, not just presentation." },
];

export default function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-backdrop" aria-hidden="true">
        <div className="hero-orb hero-orb-primary" />
        <div className="hero-orb hero-orb-secondary" />
        <div className="hero-grid" />
      </div>

      <div className="container hero-layout">
        <motion.div
          className="hero-copy"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="hero-kicker">Nexis Tech Solutions</span>
          <div className="hero-badge">
            <span className="hero-badge-pulse" />
            Premium digital solutions for modern organizations
          </div>

          <h1 className="hero-title">
            Premium digital products
            <span className="hero-title-accent"> designed to elevate serious brands.</span>
          </h1>

          <p className="hero-description">
            Nexis delivers elegant web platforms, mobile products, dashboards, and automation systems for
            teams that want refined design, dependable engineering, and a service experience that feels premium.
          </p>

          <div className="hero-actions">
            <Link href="/contact" className="btn btn-primary hero-primary-btn">
              Start a Project
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{ width: "16px", height: "16px" }}
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12,5 19,12 12,19" />
              </svg>
            </Link>
            <Link href="/projects" className="btn btn-secondary hero-secondary-btn">
              View Portfolio
            </Link>
          </div>

          <div className="hero-service-pills">
            {servicePills.map((pill) => (
              <span key={pill} className="hero-service-pill">
                {pill}
              </span>
            ))}
          </div>

          <div className="hero-stats">
            {heroStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="hero-stat"
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 + index * 0.08, duration: 0.55 }}
              >
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.92, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
        >
          <div className="hero-visual-shell">
            <motion.div
              className="hero-spotlight-card"
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="hero-card-header">
                <div>
                  <span className="hero-logo-status">Nexis Signature</span>
                  <h3 className="hero-card-title">A premium service partner for product, operations, and growth.</h3>
                </div>
                <div className="hero-card-chip">Reliable</div>
              </div>

              <div className="hero-premium-media">
                <div className="hero-dashboard-frame">
                  <div className="hero-screen-bar">
                    <span />
                    <span />
                    <span />
                  </div>
                  <Image
                    src="/images/site images/image1 (60).jpg"
                    alt="Nexis dashboard interface preview"
                    width={1024}
                    height={768}
                    className="hero-dashboard-image"
                    priority
                  />
                </div>

                <motion.div
                  className="hero-portrait-card"
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Image
                    src="/images/site images/image1 (53).png"
                    alt="Customer success and service support visual"
                    width={684}
                    height={442}
                    className="hero-portrait-image"
                    priority
                  />
                  <div className="hero-portrait-copy">
                    <span>Client-first delivery</span>
                    <strong>Thoughtful service with modern execution.</strong>
                  </div>
                </motion.div>
              </div>

              <div className="hero-signal-row hero-panel-grid">
                {heroPanels.map((panel) => (
                  <div key={panel.label} className="hero-signal-card">
                    <span>{panel.label}</span>
                    <strong>{panel.value}</strong>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
