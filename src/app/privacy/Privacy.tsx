import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

interface Subsection {
  subtitle: string;
  content?: string;
  items?: string[];
  note?: string;
}

interface Section {
  title: string;
  content?: string;
  items?: string[];
  subsections?: Subsection[];
  highlight?: string;
  note?: string;
}

const sections: Section[] = [
  {
    title: "1. Introduction",
    content:
      "WeCare (Application) is a digital public service platform developed and managed by Nexis Tech Solutions (Private) Limited in collaboration with District Administration Vehari to facilitate citizen services, complaint management, public safety initiatives, and operational efficiency. Nexis Tech Solutions is committed to protecting the privacy, confidentiality, and security of all users. By downloading, accessing, or using the Application, you agree to the practices described in this Privacy Policy.",
  },
  {
    title: "2. Information We Collect",
    subsections: [
      {
        subtitle: "Personal Information",
        items: [
          "Full name",
          "Mobile number",
          "CNIC (if required for specific government services)",
          "Email address",
          "Residential address",
          "Profile details",
        ],
      },
      {
        subtitle: "Location Data",
        content:
          "The application may collect real-time geographic location to route complaints to the relevant municipal authority, enable accurate service delivery, improve emergency response, and provide location-based government services. Location data is collected only when necessary for service functionality.",
      },
      {
        subtitle: "Device & Technical Information",
        items: [
          "Device type",
          "Operating system",
          "App version",
          "IP address",
          "Crash reports",
          "Usage analytics",
        ],
        note: "This data helps us improve system reliability and performance.",
      },
      {
        subtitle: "Uploaded Content",
        items: [
          "Complaint details",
          "Images",
          "Documents",
          "Service requests",
        ],
      },
    ],
  },
  {
    title: "3. How We Use Your Information",
    items: [
      "Processing complaints and service requests",
      "Communicating status updates",
      "Improving public service delivery",
      "Enhancing application functionality",
      "Maintaining system security",
      "Generating anonymized statistical insights for administrative planning",
    ],
    highlight: "We do NOT sell, rent, or trade personal data.",
  },
  {
    title: "4. Data Sharing & Disclosure",
    content:
      "User data may be shared only with District Administration Vehari, authorized government departments, and law enforcement agencies when legally required. Data is never shared with unauthorized third parties for marketing or commercial purposes.",
  },
  {
    title: "5. Data Ownership",
    content:
      "All citizen and operational data collected through the WeCare platform is the property of District Administration Vehari. Nexis Tech Solutions (Private) Limited acts solely as the authorized technology provider and data processor, implementing strict safeguards to prevent unauthorized access.",
  },
  {
    title: "6. Data Security",
    items: [
      "Encrypted data transmission",
      "Secure cloud infrastructure",
      "Role-based access controls",
      "Continuous monitoring",
      "Protection against unauthorized access",
    ],
    note: "While we strive for maximum security, no digital platform can guarantee absolute protection.",
  },
  {
    title: "7. Data Retention",
    content:
      "Information is retained only for as long as necessary to fulfill operational requirements, comply with legal obligations, and support government record-keeping policies. Data may be securely deleted or anonymized when no longer required.",
  },
  {
    title: "8. Your Rights",
    content: "Users may have the right to:",
    items: [
      "Request access to their data",
      "Request corrections",
      "Update profile information",
      "Request deletion (subject to government record requirements)",
    ],
    note: "Requests can be submitted through official support channels listed below.",
  },
  {
    title: "9. Children's Privacy",
    content:
      "The WeCare application is not intended for children under the age of 13. We do not knowingly collect personal information from minors without appropriate authorization.",
  },
  {
    title: "10. Third-Party Services",
    content:
      "The application may utilize trusted third-party services such as cloud hosting, mapping services, analytics providers, or notification platforms. These providers are contractually obligated to maintain confidentiality and data protection standards.",
  },
  {
    title: "11. Changes to This Privacy Policy",
    content:
      "This Privacy Policy may be updated periodically to reflect technological, legal, or operational changes. Users are encouraged to review it regularly. Continued use of the application constitutes acceptance of any updates.",
  },
  {
    title: "13. Legal Basis & Compliance",
    content:
      "This policy is designed to align with applicable Pakistani laws and internationally recognized data protection principles, ensuring responsible handling of citizen information.",
  },
];

export default function Privacy(): JSX.Element {
  return (
    <>
      <Navbar />

      <main className="animate-fade-in">
        {/* Hero Section */}
        <section
          className="section"
          style={{
            padding: "80px 0 40px 0",
            borderBottom: "1px solid var(--border)",
            backgroundColor: "var(--surface)",
          }}
        >
          <div
            className="container"
            style={{ maxWidth: "800px", textAlign: "center" }}
          >
            <span className="section-subtitle">Legal Agreement</span>
            <h1 style={{ fontSize: "2.8rem", marginBottom: "16px" }}>
              Privacy &amp; Policy
            </h1>
            <p style={{ fontSize: "1.1rem", margin: "0" }}>
              Please read this policy carefully to understand how Nexis Tech
              Solutions (Private) Limited collects, uses, and protects your
              information.
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="section">
          <div className="container" style={{ maxWidth: "720px" }}>
            <div
              style={{
                backgroundColor: "var(--surface)",
                border: "1px solid var(--border)",
                borderRadius: "var(--border-radius)",
                padding: "40px",
                boxShadow: "var(--shadow)",
              }}
            >
              {sections.map((section: Section, sIdx: number) => (
                <div
                  key={sIdx}
                  style={{
                    marginBottom: sIdx < sections.length - 1 ? "36px" : "0",
                    paddingBottom: sIdx < sections.length - 1 ? "36px" : "0",
                    borderBottom:
                      sIdx < sections.length - 1
                        ? "1px solid var(--border)"
                        : "none",
                  }}
                >
                  <h2
                    style={{
                      fontSize: "1.25rem",
                      marginBottom: "14px",
                      color: "var(--text-primary, inherit)",
                    }}
                  >
                    {section.title}
                  </h2>

                  {section.content && (
                    <p
                      style={{
                        fontSize: "0.98rem",
                        color: "var(--text-secondary)",
                        lineHeight: "1.7",
                        marginBottom:
                          section.items || section.subsections || section.highlight
                            ? "16px"
                            : "0",
                      }}
                    >
                      {section.content}
                    </p>
                  )}

                  {/* Top-level items list */}
                  {section.items && (
                    <ul
                      style={{
                        listStyle: "none",
                        display: "flex",
                        flexDirection: "column",
                        gap: "12px",
                        marginBottom:
                          section.highlight || section.note ? "16px" : "0",
                      }}
                    >
                      {section.items.map((item: string, iIdx: number) => (
                        <li
                          key={iIdx}
                          style={{
                            display: "flex",
                            gap: "12px",
                            alignItems: "flex-start",
                          }}
                        >
                          <span
                            style={{
                              backgroundColor: "var(--accent-light)",
                              color: "var(--accent)",
                              width: "24px",
                              height: "24px",
                              borderRadius: "50%",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              fontSize: "0.8rem",
                              fontWeight: "700",
                              flexShrink: 0,
                              marginTop: "2px",
                            }}
                          >
                            {iIdx + 1}
                          </span>
                          <span
                            style={{
                              fontSize: "1rem",
                              color: "var(--text-secondary)",
                              lineHeight: "1.6",
                            }}
                          >
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Highlight badge (e.g. "We do NOT sell...") */}
                  {section.highlight && (
                    <div
                      style={{
                        backgroundColor: "var(--accent-light)",
                        border: "1px solid var(--accent)",
                        borderRadius: "8px",
                        padding: "12px 16px",
                        marginTop: "8px",
                      }}
                    >
                      <p
                        style={{
                          fontSize: "0.95rem",
                          color: "var(--accent)",
                          fontWeight: "600",
                          margin: "0",
                        }}
                      >
                        {section.highlight}
                      </p>
                    </div>
                  )}

                  {/* Note */}
                  {section.note && !section.highlight && (
                    <p
                      style={{
                        fontSize: "0.88rem",
                        color: "var(--text-secondary)",
                        fontStyle: "italic",
                        marginTop: "8px",
                        marginBottom: "0",
                      }}
                    >
                      {section.note}
                    </p>
                  )}

                  {/* Subsections (used in section 2) */}
                  {section.subsections &&
                    section.subsections.map((sub: Subsection, subIdx: number) => (
                      <div key={subIdx} style={{ marginBottom: "20px" }}>
                        <h3
                          style={{
                            fontSize: "1rem",
                            fontWeight: "600",
                            marginBottom: "10px",
                            color: "var(--text-primary, inherit)",
                          }}
                        >
                          {sub.subtitle}
                        </h3>
                        {sub.content && (
                          <p
                            style={{
                              fontSize: "0.98rem",
                              color: "var(--text-secondary)",
                              lineHeight: "1.7",
                              marginBottom: "0",
                            }}
                          >
                            {sub.content}
                          </p>
                        )}
                        {sub.items && (
                          <ul
                            style={{
                              listStyle: "none",
                              display: "flex",
                              flexDirection: "column",
                              gap: "10px",
                              marginBottom: sub.note ? "10px" : "0",
                            }}
                          >
                            {sub.items.map((item: string, iIdx: number) => (
                              <li
                                key={iIdx}
                                style={{
                                  display: "flex",
                                  gap: "12px",
                                  alignItems: "flex-start",
                                }}
                              >
                                <span
                                  style={{
                                    backgroundColor: "var(--accent-light)",
                                    color: "var(--accent)",
                                    width: "24px",
                                    height: "24px",
                                    borderRadius: "50%",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    fontSize: "0.8rem",
                                    fontWeight: "700",
                                    flexShrink: 0,
                                    marginTop: "2px",
                                  }}
                                >
                                  {iIdx + 1}
                                </span>
                                <span
                                  style={{
                                    fontSize: "1rem",
                                    color: "var(--text-secondary)",
                                    lineHeight: "1.6",
                                  }}
                                >
                                  {item}
                                </span>
                              </li>
                            ))}
                          </ul>
                        )}
                        {sub.note && (
                          <p
                            style={{
                              fontSize: "0.88rem",
                              color: "var(--text-secondary)",
                              fontStyle: "italic",
                              marginTop: "8px",
                              marginBottom: "0",
                            }}
                          >
                            {sub.note}
                          </p>
                        )}
                      </div>
                    ))}
                </div>
              ))}

              {/* Contact Section */}
              <div
                style={{
                  backgroundColor: "var(--surface)",
                  border: "1px solid var(--border)",
                  borderRadius: "var(--border-radius)",
                  padding: "28px",
                  marginTop: "40px",
                }}
              >
                <h2
                  style={{
                    fontSize: "1.25rem",
                    marginBottom: "16px",
                    borderBottom: "1px solid var(--border)",
                    paddingBottom: "12px",
                  }}
                >
                  12. Contact Information
                </h2>
                <p
                  style={{
                    fontSize: "0.95rem",
                    color: "var(--text-secondary)",
                    marginBottom: "16px",
                  }}
                >
                  For questions, concerns, or privacy-related requests, please
                  contact:
                </p>
                <div style={{ marginBottom: "20px" }}>
                  <p
                    style={{
                      fontSize: "0.95rem",
                      fontWeight: "600",
                      marginBottom: "6px",
                    }}
                  >
                    Nexis Tech Solutions (Private) Limited
                  </p>
                  <p
                    style={{
                      fontSize: "0.9rem",
                      color: "var(--text-secondary)",
                      marginBottom: "4px",
                    }}
                  >
                    136-D, Vehari, Pakistan
                  </p>
                  <p
                    style={{
                      fontSize: "0.9rem",
                      color: "var(--text-secondary)",
                      marginBottom: "4px",
                    }}
                  >
                    contact@nexistechsolutions.com
                  </p>
                  <p
                    style={{
                      fontSize: "0.9rem",
                      color: "var(--text-secondary)",
                    }}
                  >
                    +923007722777
                  </p>
                </div>
                <div
                  style={{
                    borderTop: "1px solid var(--border)",
                    paddingTop: "16px",
                  }}
                >
                  <p
                    style={{
                      fontSize: "0.95rem",
                      fontWeight: "600",
                      marginBottom: "6px",
                    }}
                  >
                    District Administration Vehari
                  </p>
                  <p
                    style={{
                      fontSize: "0.9rem",
                      color: "var(--text-secondary)",
                    }}
                  >
                    +923334554854
                  </p>
                </div>
              </div>

              {/* Footer note */}
              <div
                style={{
                  backgroundColor: "var(--background)",
                  borderRadius: "8px",
                  padding: "20px",
                  marginTop: "24px",
                  border: "1px solid var(--border)",
                }}
              >
                <p
                  style={{
                    fontSize: "0.88rem",
                    color: "var(--text-secondary)",
                    margin: "0",
                    lineHeight: "1.5",
                  }}
                >
                  <strong>Note:</strong> This Privacy Policy applies to all
                  users of the WeCare application. Developed by Nexis Tech
                  Solutions (Private) Limited in collaboration with District
                  Administration Vehari.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
