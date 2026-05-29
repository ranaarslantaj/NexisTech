import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

interface Section {
  title: string;
  content?: string;
  steps?: string[];
  items?: string[];
  highlight?: string;
  note?: string;
}

const sections: Section[] = [
  {
    title: "1. How to Delete Your Account",
    content:
      "You can request account deletion directly from within the WeCare mobile application:",
    steps: [
      "Open the WeCare app.",
      "Sign in to your account.",
      "Navigate to Profile.",
      "Select Delete Account.",
      "Confirm your deletion request.",
    ],
  },
  {
    title: "2. What Happens After Deletion?",
    content: "When you request account deletion:",
    items: [
      "Your account will be deactivated immediately.",
      "The account will remain recoverable for 30 days from the deletion request date.",
      "During this period, you may restore your account by logging back into the application.",
      "After the 30-day recovery period, your account and associated personal data will be permanently deleted from our active systems.",
    ],
    highlight:
      "You have 30 days to change your mind — simply log back in to restore your account.",
  },
  {
    title: "3. Data Deleted",
    content: "The following information may be permanently removed:",
    items: [
      "Full Name",
      "Email Address",
      "Mobile Number",
      "CNIC (if provided)",
      "Profile Photograph",
      "Residential Address",
      "User Profile Information",
      "Authentication Credentials",
      "Other personal information associated with your account",
    ],
  },
  {
    title: "4. Data Retention",
    content:
      "Certain information may be retained for a limited period where required by applicable laws, regulations, government requirements, fraud prevention measures, security investigations, dispute resolution, or legal compliance obligations.",
  },
];

const supportFields: string[] = [
  "Full Name",
  "Registered Email Address",
  "Registered Mobile Number",
  "Reason for Account Deletion (Optional)",
];

export default function WeCareAccountDeletion() {
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
            <span className="section-subtitle">WeCare Account Deletion Policy</span>
            <h1 style={{ fontSize: "2.8rem", marginBottom: "16px" }}>
              Delete Your WeCare Account
            </h1>
            <p style={{ fontSize: "1.1rem", margin: "0" }}>
              At WeCare, we respect your privacy and provide users with the
              ability to delete their account and associated personal
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
                    marginBottom: "36px",
                    paddingBottom: "36px",
                    borderBottom: "1px solid var(--border)",
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
                          section.steps || section.items || section.highlight
                            ? "16px"
                            : "0",
                      }}
                    >
                      {section.content}
                    </p>
                  )}

                  {/* Ordered steps (numbered badges) */}
                  {section.steps && (
                    <ul
                      style={{
                        listStyle: "none",
                        display: "flex",
                        flexDirection: "column",
                        gap: "12px",
                        marginBottom: section.highlight || section.note ? "16px" : "0",
                      }}
                    >
                      {section.steps.map((step: string, iIdx: number) => (
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
                            {step}
                          </span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Bulleted items (dot markers) */}
                  {section.items && (
                    <ul
                      style={{
                        listStyle: "none",
                        display: "flex",
                        flexDirection: "column",
                        gap: "12px",
                        marginBottom: section.highlight || section.note ? "16px" : "0",
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
                              backgroundColor: "var(--accent)",
                              width: "8px",
                              height: "8px",
                              borderRadius: "50%",
                              flexShrink: 0,
                              marginTop: "9px",
                            }}
                          />
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

                  {/* Highlight badge */}
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
                </div>
              ))}

              {/* Unable to Access the App? — Support request */}
              <div
                style={{
                  backgroundColor: "var(--surface)",
                  border: "1px solid var(--border)",
                  borderRadius: "var(--border-radius)",
                  padding: "28px",
                  marginTop: "4px",
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
                  5. Unable to Access the App?
                </h2>
                <p
                  style={{
                    fontSize: "0.95rem",
                    color: "var(--text-secondary)",
                    marginBottom: "16px",
                    lineHeight: "1.7",
                  }}
                >
                  If you cannot access your account through the application, you
                  may request account deletion by contacting our support team.
                </p>

                <div
                  style={{
                    backgroundColor: "var(--accent-light)",
                    border: "1px solid var(--accent)",
                    borderRadius: "8px",
                    padding: "14px 18px",
                    marginBottom: "20px",
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
                    Support Email:{" "}
                    <a
                      href="mailto:info@nexistechsolutions.com"
                      style={{ color: "var(--accent)", textDecoration: "underline" }}
                    >
                      info@nexistechsolutions.com
                    </a>
                  </p>
                </div>

                <p
                  style={{
                    fontSize: "0.95rem",
                    color: "var(--text-secondary)",
                    marginBottom: "16px",
                  }}
                >
                  Please include the following information in your email:
                </p>
                <ul
                  style={{
                    listStyle: "none",
                    display: "flex",
                    flexDirection: "column",
                    gap: "12px",
                    marginBottom: "20px",
                  }}
                >
                  {supportFields.map((field: string, iIdx: number) => (
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
                          backgroundColor: "var(--accent)",
                          width: "8px",
                          height: "8px",
                          borderRadius: "50%",
                          flexShrink: 0,
                          marginTop: "9px",
                        }}
                      />
                      <span
                        style={{
                          fontSize: "1rem",
                          color: "var(--text-secondary)",
                          lineHeight: "1.6",
                        }}
                      >
                        {field}
                      </span>
                    </li>
                  ))}
                </ul>
                <p
                  style={{
                    fontSize: "0.88rem",
                    color: "var(--text-secondary)",
                    fontStyle: "italic",
                    margin: "0",
                  }}
                >
                  Our team will verify your identity and process your request in
                  accordance with applicable privacy and security requirements.
                </p>
              </div>

              {/* Application info note */}
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
                    fontSize: "0.9rem",
                    color: "var(--text-secondary)",
                    margin: "0",
                    lineHeight: "1.7",
                  }}
                >
                  <strong>Application:</strong> WeCare
                  <br />
                  <strong>Developer:</strong> Nexis Tech Solutions (Private)
                  Limited
                  <br />
                  <strong>Support Email:</strong>{" "}
                  <a href="mailto:info@nexistechsolutions.com">
                    info@nexistechsolutions.com
                  </a>
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
