"use client";

import { Link } from "@heroui/react";

export default function Footer() {
  const productLinks = [
    { label: "Job discovery", href: "/jobs" },
    { label: "Worker AI", href: "/worker-ai" },
    { label: "Companies", href: "/companies" },
    { label: "Salary data", href: "/salary" },
  ];

  const navigationLinks = [
    { label: "Help center", href: "/help" },
    { label: "Career library", href: "/career-library" },
    { label: "Contact", href: "/contact" },
  ];

  const resourceLinks = [
    { label: "Brand Guideline", href: "/brand" },
    { label: "Newsroom", href: "/newsroom" },
  ];

  return (
    <footer
      style={{
        backgroundColor: "#080d1a",
        borderTop: "1px solid #151e2e",
      }}
    >
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0 2rem",
        }}
      >
        {/* Main Footer Content */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "2.5rem",
            paddingTop: "3rem",
            paddingBottom: "3rem",
          }}
        >
          {/* Brand Column */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {/* Logo */}
            <Link href="/" style={{ textDecoration: "none", display: "inline-flex", alignItems: "center" }}>
              <span
                style={{
                  fontSize: "1.5rem",
                  fontWeight: "700",
                  color: "#ffffff",
                  letterSpacing: "-0.5px",
                }}
              >
                hire
              </span>
              <span
                style={{
                  fontSize: "1.5rem",
                  fontWeight: "700",
                  color: "#f97316",
                  letterSpacing: "-0.5px",
                }}
              >
                loop
              </span>
            </Link>

            {/* Tagline */}
            <p
              style={{
                fontSize: "0.8125rem",
                color: "#8a96a8",
                lineHeight: "1.6",
                maxWidth: "200px",
                margin: 0,
              }}
            >
              The AI-native career platform. Built for people who take their work seriously.
            </p>

            {/* Social Icons */}
            <div style={{ display: "flex", alignItems: "center", gap: "0.625rem", marginTop: "0.5rem" }}>
              {/* Facebook */}
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "2.125rem",
                  height: "2.125rem",
                  borderRadius: "50%",
                  border: "1px solid #1e2d42",
                  color: "#8a96a8",
                  textDecoration: "none",
                  transition: "opacity 0.2s",
                }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>

              {/* Pinterest */}
              <a
                href="https://pinterest.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Pinterest"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "2.125rem",
                  height: "2.125rem",
                  borderRadius: "50%",
                  backgroundColor: "#6d28d9",
                  color: "#ffffff",
                  textDecoration: "none",
                  transition: "opacity 0.2s",
                }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 0 1 .083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "2.125rem",
                  height: "2.125rem",
                  borderRadius: "50%",
                  border: "1px solid #1e2d42",
                  color: "#8a96a8",
                  textDecoration: "none",
                  transition: "opacity 0.2s",
                }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
            </div>
          </div>

          {/* Product Links */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <h3
              style={{
                fontSize: "0.875rem",
                fontWeight: "600",
                color: "#93c5fd",
                margin: 0,
              }}
            >
              Product
            </h3>
            <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {productLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    style={{
                      fontSize: "0.8125rem",
                      color: "#c8d0dc",
                      textDecoration: "none",
                      transition: "color 0.2s",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#f97316")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "#c8d0dc")}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation Links */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <h3
              style={{
                fontSize: "0.875rem",
                fontWeight: "600",
                color: "#93c5fd",
                margin: 0,
              }}
            >
              Navigations
            </h3>
            <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {navigationLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    style={{
                      fontSize: "0.8125rem",
                      color: "#c8d0dc",
                      textDecoration: "none",
                      transition: "color 0.2s",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#f97316")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "#c8d0dc")}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <h3
              style={{
                fontSize: "0.875rem",
                fontWeight: "600",
                color: "#93c5fd",
                margin: 0,
              }}
            >
              Resources
            </h3>
            <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {resourceLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    style={{
                      fontSize: "0.8125rem",
                      color: "#c8d0dc",
                      textDecoration: "none",
                      transition: "color 0.2s",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#f97316")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "#c8d0dc")}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            borderTop: "1px solid #151e2e",
            paddingTop: "1.25rem",
            paddingBottom: "1.25rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <p style={{ fontSize: "0.75rem", color: "#4a5568", margin: 0 }}>
            Copyright 2024 —Programming Hero
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <a
              href="/terms"
              style={{ fontSize: "0.75rem", color: "#4a5568", textDecoration: "none" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#c8d0dc")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#4a5568")}
            >
              Terms &amp; Policy
            </a>
            <span style={{ fontSize: "0.75rem", color: "#2a3a4a" }}>–</span>
            <a
              href="/privacy"
              style={{ fontSize: "0.75rem", color: "#4a5568", textDecoration: "none" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#c8d0dc")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#4a5568")}
            >
              Privacy Guideline
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}