export type ContactLinkIcon = "mail" | "github" | "linkedin";

export type ContactLink = {
  label: string;
  value: string;
  href: string;
  icon: ContactLinkIcon;
};

export const CONTACT = {
  heading: "Get in touch",
  subtitle: "Always happy to chat!",
  links: [
    {
      label: "Email",
      value: "aryakaml24@gmail.com",
      href: "mailto:aryakaml24@gmail.com",
      icon: "mail",
    },
    {
      label: "LinkedIn",
      value: "linkedin.com/in/muhammadaryakamal",
      href: "https://linkedin.com/in/muhammadaryakamal/",
      icon: "linkedin",
    },
    {
      label: "Portfolio",
      value: "aryakamal.vercel.app",
      href: "https://aryakamal.vercel.app",
      icon: "github",
    },
  ] satisfies ContactLink[],
} as const;
