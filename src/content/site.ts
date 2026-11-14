/**
 * NEXORA CONTENT SETTINGS
 * Edit the text, links, services, projects and FAQs here.
 * The layout and styling live separately in src/components and src/app/globals.css.
 */

export const site = {
  name: "NEXORA",
  descriptor: "DIGITAL STUDIO",
  tagline: "We Shape Digital. We Build What's Next.",
  description:
    "A strategic digital studio combining creative thinking, purposeful design, and modern technology to shape meaningful digital experiences.",
  navigation: [
    { label: "Home", href: "#home" },
    { label: "Services", href: "#services" },
    { label: "Work", href: "#work" },
    { label: "About", href: "#about" }
  ],
  contact: {
    email: "hello@nexora.studio",
    emailSubject: "Let's talk about a project",
    cta: "Let's Talk"
  },
  hero: {
    eyebrow: "STRATEGY  ·  DESIGN  ·  TECHNOLOGY",
    title: "We Shape Digital.",
    titleAccent: "We Build What's Next.",
    body:
      "We help ambitious businesses turn complex ideas into clear, distinctive, and purposeful digital experiences.",
    primaryCta: { label: "Explore Our Work", href: "#work" },
    secondaryCta: { label: "Discover Our Services", href: "#services" },
    visualLabel: "DIGITAL EXPERIENCE / 001"
  },
  intro: {
    eyebrow: "A BETTER PERSPECTIVE",
    title: "Digital experiences begin with a better perspective.",
    body:
      "Good digital work is more than a polished interface. It is the result of clear thinking, thoughtful design, and technology working together with purpose."
  },
  services: [
    {
      number: "01",
      title: "Digital Experience",
      description:
        "Websites and digital platforms designed to make every interaction feel clear, useful, and considered.",
      tags: ["Web Design", "Web Development", "Landing Pages"]
    },
    {
      number: "02",
      title: "UI/UX Design",
      description:
        "Human-centered interfaces shaped by structure, usability, and a strong understanding of the people using them.",
      tags: ["UX Strategy", "Interface Design", "Prototyping"]
    },
    {
      number: "03",
      title: "Brand Identity",
      description:
        "Distinctive visual systems that give ambitious ideas a consistent and recognizable expression.",
      tags: ["Visual Identity", "Brand Guidelines", "Art Direction"]
    },
    {
      number: "04",
      title: "Digital Creative",
      description:
        "Purposeful creative assets and visual storytelling that help brands communicate with clarity.",
      tags: ["Creative Direction", "Motion Concepts", "Digital Campaigns"]
    }
  ],
  work: [
    {
      number: "01",
      category: "DIGITAL EXPERIENCE",
      title: "A clearer way to move forward.",
      type: "Concept Project",
      description: "A responsive digital experience exploring clarity, structure, and confident navigation.",
      visual: "workOne",
      year: "2026"
    },
    {
      number: "02",
      category: "BRAND IDENTITY",
      title: "An identity built around possibility.",
      type: "Concept Project",
      description: "A visual identity study balancing expressive forms with a precise design system.",
      visual: "workTwo",
      year: "2026"
    },
    {
      number: "03",
      category: "UI/UX DESIGN",
      title: "Making complex feel simple.",
      type: "Concept Project",
      description: "A product interface concept focused on hierarchy, usability, and everyday momentum.",
      visual: "workThree",
      year: "2026"
    }
  ],
  principles: [
    {
      number: "01",
      title: "Strategy Before Design",
      body: "We start by understanding the problem, the people, and the outcome—not by decorating a blank screen."
    },
    {
      number: "02",
      title: "Creativity With Purpose",
      body: "Every visual decision has a role. Distinctive design should make the experience more meaningful, not more complicated."
    },
    {
      number: "03",
      title: "Technology That Matters",
      body: "We choose modern tools to build experiences that are useful, accessible, and ready to grow."
    }
  ],
  process: [
    { number: "01", title: "Discovery", body: "Understand the business, audience, goals, and real challenge." },
    { number: "02", title: "Strategy", body: "Set direction, priorities, structure, and a clear path forward." },
    { number: "03", title: "Design", body: "Shape the experience, visual system, and meaningful interactions." },
    { number: "04", title: "Development", body: "Build a responsive, accessible, and maintainable digital product." },
    { number: "05", title: "Launch", body: "Review the details, prepare the handoff, and take it live." }
  ],
  faqs: [
    {
      question: "What kind of projects does NEXORA work on?",
      answer: "NEXORA focuses on digital experiences, UI/UX design, brand identity, and digital creative projects. The right scope depends on your goals and the challenge you need to solve."
    },
    {
      question: "Can you work with an existing brand?",
      answer: "Yes. A project can begin with an existing identity, a partial design system, or a new direction. The starting point is always understanding what already works and what needs to change."
    },
    {
      question: "How does a project usually begin?",
      answer: "It begins with a conversation about your business, audience, goals, timeline, and available materials. From there, the scope and next steps can be defined clearly."
    },
    {
      question: "Is every project custom-designed?",
      answer: "The approach is shaped around the project rather than forcing every business into the same template. Structure and components are reused where they improve consistency, not to make every website look alike."
    }
  ],
  footer: {
    statement: "Have an ambitious idea?",
    body: "Let's give it a digital experience built with purpose.",
    copyright: "NEXORA DIGITAL STUDIO"
  }
} as const;
