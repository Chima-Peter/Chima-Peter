export const NAV_LINKS = [
  { name: "About", href: "#about", id: "about" },
  { name: "Projects", href: "#projects", id: "projects" },
  { name: "Experience", href: "#experience", id: "experience" },
  { name: "Stack", href: "#stack", id: "stack" },
  { name: "Contact", href: "#contact", id: "contact" },
] as const;

/** Served from /public - also linked from the GitHub profile README */
export const RESUME_HREF = "/Chima_Ojimma_Resume.pdf";

export const RESUME_DOWNLOAD_NAME = "Chima_Ojimma_Resume.pdf";

export const SOCIAL_LINKS = [
  {
    name: "GitHub",
    href: "https://github.com/chima-peter",
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/chimaojimma",
  },
  {
    name: "Email",
    href: "mailto:chimaojimma@gmail.com",
  },
  {
    name: "Resume",
    href: RESUME_HREF,
  },
] as const;
