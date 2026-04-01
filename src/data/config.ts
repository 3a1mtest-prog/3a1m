const config = {
  title: "HANI SELMI  | Visual Design • Motion • Social Media",
  description: {
    long: "Explore the portfolio of HANI, Visual Design • Motion • Social Media and creative technologist specializing in interactive web experiences, 3D animations, and innovative projects. Discover my latest work, including Coding Ducks, The Booking Desk, Ghostchat, and more. Let's build something amazing together!",
    short:
      "Discover the portfolio of HANI, Visual Design • Motion • Social Media creating interactive web experiences and innovative projects.",
  },
  keywords: [
    "HANI",
    "portfolio",
    "Visual Design • Motion • Social Media",
    "creative technologist",
    "web development",
    "3D animations",
    "interactive websites",
    "Coding Ducks",
    "The Booking Desk",
    "Ghostchat",
    "web design",
    "GSAP",
    "React",
    "Next.js",
    "Spline",
    "Framer Motion",
  ],
  author: "HANI SELMI",
  email: "haniselmi84@gmail.com",
  site: "https://www.instagram.com/haniselmi.design/",

  // for github stars button
  githubUsername: "HANI SELMI",
  githubRepo: "",

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
  social: {
    twitter: "https://x.com/hani.selmi",
    linkedin: "https://www.instagram.com/haniselmi.design/",
    instagram: "https://www.instagram.com/haniselmi.design/",
    facebook: "https://www.facebook.com/hani.selmi.71927",
    github: "https://github.com",
  },
};
export { config };
