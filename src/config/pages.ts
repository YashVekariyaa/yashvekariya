import { ValidPages } from "./constants";

type PagesConfig = {
  [key in ValidPages]: {
    title: string;
    description: string;
    metadata: {
      title: string;
      description: string;
    };
    // featuredDescription: string;
  };
};


export const pagesConfig: PagesConfig = {
  home: {
    title: "Home",
    description: "Welcome to my portfolio website.",
    metadata: {
      title: "Home",
      description: "Yash Vekariya's portfolio website.",
    },
  },
  skills: {
    title: "Skills",
    description: "Key skills that define my professional identity.",
    metadata: {
      title: "Skills",
      description:
        "Yash Vekariya's key skills that define his professional identity.",
    },
  },
  portfolio: {
    title: "Portfolio",
    description: "Highlighting career journey and impactful projects.",
    metadata: {
      title: "Portfolio",
      description: "Yash Vekariya's experience in building web applications.",
    },
  },
  contact: {
    title: "Contact",
    description: "Have a project in mind? Let’s connect and explore how we can collaborate!",
    metadata: {
      title: "Contact",
      description: "Contact Yash Vekariya.",
    },
  },
  company: {
    title: "Companies I've Worked With",
    description: "Some amazing brands I've been honored to partner with on impactful digital projects.",
    metadata: {
      title: "Companies",
      description:
        "Yash Vekariya's open-source contributions and community involvement.",
    },
  },
  resume: {
    title: "Contact",
    description: "Yash Vekariya's resume.",
    metadata: {
      title: "Resume",
      description: "Yash Vekariya's resume.",
    },
  },
  career: {
    title: "Career Timeline",
    description: "Professional journey and experience timeline.",
    metadata: {
      title: "Career Timeline",
      description: "Yash Vekariya's professional journey and career timeline.",
    },
  },
};
