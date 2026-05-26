"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const heroStats = [
  { value: "12+", label: "Digital products delivered" },
  { value: "24/7", label: "Support for mission-critical systems" },
  { value: "GovTech", label: "Built for public and enterprise teams" },
];

const orbitCards = [
  { title: "Web Platforms", text: "Scalable portals for modern operations.", className: "orbit-card orbit-card-top" },
  { title: "Mobile Apps", text: "Field-ready apps with smooth user flows.", className: "orbit-card orbit-card-left" },
  { title: "Live Dashboards", text: "Monitoring and governance visibility in real time.", className: "orbit-card orbit-card-right" },
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
            Future-ready systems for digital transformation
          </div>

          <h1 className="hero-title">
            Secure software experiences
            <span className="hero-title-accent"> shaped around the Nexis vision.</span>
          </h1>

          <p className="hero-description">
            We design and engineer powerful mobile apps, enterprise portals, monitoring dashboards, and
            governance platforms that look sharp, move smoothly, and stay dependable where performance matters.
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
              See Our Work
            </Link>
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
              animate={{ y: [0, -10, 0], rotate: [0, 1.2, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="hero-logo-panel">
                <div className="hero-logo-status">Brand-led product engineering</div>
                <Image
                  src="/images/logo/nexislogo.png"
                  alt="Nexis Tech Solutions logo"
                  width={540}
                  height={300}
                  className="hero-logo-image"
                  priority
                />
              </div>

              <div className="hero-signal-row">
                <div className="hero-signal-card">
                  <span>Build Speed</span>
                  <strong>Fast iteration</strong>
                </div>
                <div className="hero-signal-card">
                  <span>System Focus</span>
                  <strong>Elegant + reliable</strong>
                </div>
              </div>
            </motion.div>

            {orbitCards.map((card, index) => (
              <motion.div
                key={card.title}
                className={card.className}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1, y: [0, index % 2 === 0 ? -8 : 8, 0] }}
                transition={{
                  opacity: { delay: 0.2 + index * 0.1, duration: 0.4 },
                  scale: { delay: 0.2 + index * 0.1, duration: 0.4 },
                  y: { duration: 6 + index, repeat: Infinity, ease: "easeInOut" },
                }}
              >
                <span>{card.title}</span>
                <p>{card.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
