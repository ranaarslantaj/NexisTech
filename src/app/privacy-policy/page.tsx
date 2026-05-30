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
      "Nexis Tech Solutions (Private) Limited (\"Nexis Tech Solutions,\" \"Company,\" \"we,\" \"our,\" or \"us\") develops, manages, and operates digital solutions including mobile applications, web portals, dashboards, SaaS platforms, automation systems, WhatsApp API services, cloud-based systems, citizen service platforms, enterprise solutions, e-commerce systems, AI-powered applications, and other technology services for government departments, private organizations, businesses, institutions, and public-sector entities. We are committed to protecting the privacy, confidentiality, and security of all users, customers, clients, and stakeholders who interact with our platforms and services. By downloading, accessing, using, or interacting with any application, portal, dashboard, website, or service developed or operated by Nexis Tech Solutions (Private) Limited, you agree to the practices described in this Privacy Policy.",
  },
  {
    title: "2. Information We Collect",
    subsections: [
      {
        subtitle: "Personal Information",
        content: "Depending on the nature of the service or platform, we may collect:",
        items: [
          "Full name",
          "Mobile number",
          "CNIC, National ID, Passport Number, or Business Registration Information (where applicable)",
          "Email address",
          "Residential or business address",
          "Organization details",
          "User profile information",
          "Account credentials and login information",
        ],
      },
      {
        subtitle: "Location Data",
        content:
          "Certain applications or services may collect real-time or approximate geographic location data to route complaints or service requests, enable location-based services, improve operational efficiency, support emergency response systems, and enhance logistics, tracking, mapping, or public service functionality. Location data is collected only when required for service functionality or user-approved features.",
      },
      {
        subtitle: "Device & Technical Information",
        content: "We may automatically collect technical and diagnostic information including:",
        items: [
          "Device type",
          "Operating system",
          "Browser type",
          "Application version",
          "IP address",
          "Device identifiers",
          "Crash reports",
          "Performance logs",
          "Usage analytics",
        ],
        note: "This information helps improve security, reliability, performance, and user experience.",
      },
      {
        subtitle: "Uploaded Content & User Submissions",
        content: "Users may submit or upload:",
        items: [
          "Complaints and feedback",
          "Images and media files",
          "Documents and attachments",
          "Service requests",
          "Forms and application data",
          "Messages and communication records",
        ],
      },
    ],
  },
  {
    title: "3. How We Use Your Information",
    content: "We use collected information for purposes including:",
    items: [
      "Processing requests, complaints, or transactions",
      "Delivering digital services and platform functionality",
      "Providing customer support and communication",
      "Improving system performance and user experience",
      "Maintaining operational security and fraud prevention",
      "Sending notifications, alerts, and updates",
      "Generating anonymized analytics and statistical insights",
      "Enabling integrations with authorized third-party systems",
      "Complying with legal, regulatory, and contractual obligations",
    ],
    highlight: "We do NOT sell, rent, or trade personal information to unauthorized third parties.",
  },
  {
    title: "4. Data Sharing & Disclosure",
    content: "Information may be shared only with:",
    items: [
      "Authorized client organizations",
      "Government departments or regulatory authorities",
      "Service providers and technology partners",
      "Cloud hosting and infrastructure providers",
      "Law enforcement agencies when legally required",
    ],
    note: "Data is never shared with unauthorized parties for advertising, marketing, or unrelated commercial purposes.",
  },
  {
    title: "5. Data Ownership",
    content:
      "Data ownership may vary depending on the nature of the project, service agreement, or client relationship. For custom-developed platforms, enterprise systems, or government solutions, operational and user data may remain the property of the respective client organization or authority. Nexis Tech Solutions (Private) Limited acts as an authorized technology provider, processor, developer, or system operator, implementing strict safeguards to protect data confidentiality and integrity.",
  },
  {
    title: "6. Data Security",
    content: "We implement industry-standard security measures including:",
    items: [
      "Encrypted data transmission",
      "Secure cloud and server infrastructure",
      "Role-based access controls",
      "Authentication and authorization systems",
      "Continuous monitoring and logging",
      "Backup and disaster recovery measures",
      "Protection against unauthorized access, misuse, or disclosure",
    ],
    note: "While we strive to maintain maximum security standards, no digital platform or online transmission method can guarantee absolute security.",
  },
  {
    title: "7. Data Retention",
    content: "Information is retained only for as long as necessary to:",
    items: [
      "Fulfill operational or contractual requirements",
      "Provide requested services",
      "Comply with applicable laws and regulations",
      "Support organizational record-keeping and auditing requirements",
    ],
    note: "Data may be securely deleted, archived, or anonymized when no longer required.",
  },
  {
    title: "8. Your Rights",
    content: "Depending on applicable laws and service arrangements, users may have the right to:",
    items: [
      "Request access to their personal data",
      "Request correction or updates",
      "Update account or profile information",
      "Request deletion of personal data (subject to legal or contractual obligations)",
      "Withdraw certain permissions where applicable",
    ],
    note: "Requests may be submitted through official support channels.",
  },
  {
    title: "9. Children's Privacy",
    content:
      "Our services are generally not intended for children under the age of 13 unless specifically designed for educational or authorized institutional purposes. We do not knowingly collect personal information from minors without appropriate consent or authorization.",
  },
  {
    title: "10. Third-Party Services",
    content: "Our platforms may integrate or utilize trusted third-party services including:",
    items: [
      "Cloud hosting providers",
      "Payment gateways",
      "Mapping and geolocation services",
      "Analytics platforms",
      "Notification and messaging services",
      "WhatsApp API providers",
      "Authentication systems",
      "AI or automation services",
    ],
    note: "Such providers are contractually or technically required to maintain confidentiality and appropriate data protection standards.",
  },
  {
    title: "11. Changes to This Privacy Policy",
    content: "This Privacy Policy may be updated periodically to reflect:",
    items: [
      "Technological advancements",
      "Legal or regulatory requirements",
      "Operational or service changes",
      "Security improvements",
    ],
    note: "Users are encouraged to review this policy regularly. Continued use of our services constitutes acceptance of any updates or modifications.",
  },
  {
    title: "12. Legal Basis & Compliance",
    content: "This Privacy Policy is designed to align with:",
    items: [
      "Applicable laws of Pakistan",
      "Internationally recognized privacy and data protection principles",
      "Industry-standard cybersecurity and compliance practices",
    ],
    note: "Nexis Tech Solutions (Private) Limited is committed to responsible, ethical, and secure handling of information across all sectors and projects.",
  },
];

export default function Privacy() {
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
                  13. Contact Information
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
                <div>
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
                    Vehari, Punjab, Pakistan
                  </p>
                  <p
                    style={{
                      fontSize: "0.9rem",
                      color: "var(--text-secondary)",
                      marginBottom: "4px",
                    }}
                  >
                    Email: contact@nexistechsolutions.com
                  </p>
                  <p
                    style={{
                      fontSize: "0.9rem",
                      color: "var(--text-secondary)",
                    }}
                  >
                    Phone: +92 300 7722777
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
                  digital products, services, applications, dashboards, portals,
                  websites, SaaS systems, WhatsApp API services, automation
                  platforms, and technology solutions developed, operated,
                  managed, or maintained by Nexis Tech Solutions (Private)
                  Limited unless otherwise stated in a project-specific agreement
                  or policy.
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