import type { Metadata, Site, Socials } from "@types";

export const SITE: Site = {
  TITLE: "Jean-Gabriel Gaudreault",
  DESCRIPTION: "My personal website showcasing my projects and thoughts on machine learning, software development, and education.",
  EMAIL: "jg.gaudreault@outlook.com",
  NUM_POSTS_ON_HOMEPAGE: 3,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
  NUM_PUBLICATIONS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "My personal website showcasing my projects and thoughts on machine learning, software development, and education.",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "A collection of articles on topics I am passionate about.",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION:
    "A collection of my projects with links to repositories and demos.",
};

export const PUBLICATIONS: Metadata = {
  TITLE: "Publications",
  DESCRIPTION:
    "A collection of my academic papers and publications.",
};

export const SOCIALS: Socials = [
  {
    NAME: "GitHub",
    HREF: "https://github.com/jgaud",
  },
  {
    NAME: "LinkedIn",
    HREF: "https://www.linkedin.com/in/jean-gabriel-gaudreault",
  },
];
