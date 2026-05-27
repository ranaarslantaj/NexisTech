import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Link href="/" className="logo" style={{ marginBottom: "1.5rem" }}>
            Nexis Tech <span className="logo-dot"></span>
          </Link>
          <p>
            Secure, scalable, and future-ready technology solutions that empower businesses, organizations, and government departments.
          </p>
        </div>

        <div>
          <h4 className="footer-title">Navigation</h4>
          <ul className="footer-links">
            <li>
              <Link href="/" className="footer-link">
                Home
              </Link>
            </li>
            <li>
              <Link href="/services" className="footer-link">
                Services
              </Link>
            </li>
            <li>
              <Link href="/projects" className="footer-link">
                Projects
              </Link>
            </li>
            <li>
              <Link href="/about" className="footer-link">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/contact" className="footer-link">
                Contact Us
              </Link>
            </li>
            <li>
              <Link href="/privacy-policy" className="footer-link">
                Privacy &amp; Policy
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="footer-title">Services</h4>
          <ul className="footer-links">
            <li>
              <Link href="/services" className="footer-link">
                Mobile Applications
              </Link>
            </li>
            <li>
              <Link href="/services" className="footer-link">
                Web Applications
              </Link>
            </li>
            <li>
              <Link href="/services" className="footer-link">
                Digital Governance
              </Link>
            </li>
            <li>
              <Link href="/services" className="footer-link">
                Monitoring Systems
              </Link>
            </li>
            <li>
              <Link href="/services" className="footer-link">
                Smart Management
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="footer-title">Contact Info</h4>
          <ul className="footer-contact-info">
            <li className="footer-contact-item">
              <span className="footer-contact-icon" aria-hidden="true">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{ width: "16px", height: "16px" }}
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </span>
              <span>136 D-Block, Near Jinnah Road, Vehari, Punjab, Pakistan</span>
            </li>
            <li className="footer-contact-item">
              <span className="footer-contact-icon" aria-hidden="true">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{ width: "16px", height: "16px" }}
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </span>
              <a href="mailto:contact@nexistechsolutions.com" className="footer-link">
                contact@nexistechsolutions.com
              </a>
            </li>
            <li className="footer-contact-item">
              <span className="footer-contact-icon" aria-hidden="true">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{ width: "16px", height: "16px" }}
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </span>
              <a href="tel:+923007722777" className="footer-link">
                +92-300-7722777
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="container footer-bottom">
        <div className="footer-copyright">
          &copy; {currentYear} Nexis Tech Solutions (Private) Limited. All rights reserved. |{" "}
          <Link href="/terms" className="footer-link" style={{ fontSize: "0.88rem", textDecoration: "underline" }}>
            Terms & Conditions
          </Link>{" "}
          |{" "}
          <Link href="/privacy-policy" className="footer-link" style={{ fontSize: "0.88rem", textDecoration: "underline" }}>
            Privacy &amp; Policy
          </Link>
        </div>
        <div className="footer-secp">
          SECP Corporate Unique Identification No. 0331157
        </div>
      </div>
    </footer>
  );
}