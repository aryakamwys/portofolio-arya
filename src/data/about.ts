import type { WindowId } from "@/store/useWindowStore";

export type AboutTextPart = { text: string };

/** Shared Tailwind class for inline About links */
export const ABOUT_LINK_CLASS = "cursor-pointer";

export type AboutExternalLink = {
  href: string;
  label: string;
  className: typeof ABOUT_LINK_CLASS;
};

export type AboutWindowLink = {
  windowId: WindowId;
  label: string;
  className: typeof ABOUT_LINK_CLASS;
};

export type AboutParagraph =
  | { type: "plain"; text: string }
  | {
      type: "rich";
      parts: (AboutTextPart | { external: AboutExternalLink } | { window: AboutWindowLink })[];
    };

export const ABOUT = {
  name: "Arya",
  fullName: "Muhammad Arya Kamal",
  tagline: "Software Engineer & IT GRC",
  currentlyDoing: ["Software Development", "IT Governance", "Problem Solving"],
  links: {
    github: "https://github.com/muhammadaryakamal",
    ubc: "https://telkomuniversity.ac.id/",
    writing: "/blog",
  },
  paragraphs: [
    {
      type: "plain",
      text: "Hi! I'm Arya Kamal. Welcome to my portfolio.",
    },
    {
      type: "rich",
      parts: [
        { text: "I study Information Systems at " },
        {
          external: {
            href: "https://telkomuniversity.ac.id/",
            label: "Telkom University",
            className: ABOUT_LINK_CLASS,
          },
        },
        { text: " in Bandung, Indonesia, and I " },
        {
          window: {
            windowId: "projects",
            label: "build applications",
            className: ABOUT_LINK_CLASS,
          },
        },
        {
          text: ".",
        },
      ],
    },
    {
      type: "plain",
      text: "I enjoy building reliable systems and finding solutions that bridge the gap between technology and business processes. I'm passionate about full-stack development and IT Governance.",
    },
  ] satisfies AboutParagraph[],
} as const;
