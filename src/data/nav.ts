// src/data/nav.ts
export type NavItem = {
  label: string;
  href: string;
};

export const navItems: NavItem[] = [
  { label: "HOME", href: "/" },
  { label: "THE MENUS", href: "/menus" },
  { label: "EVENTS", href: "/events" },
  { label: "GALLERY", href: "/gallery" },
  { label: "ABOUT US", href: "/about" },
  { label: "BLOG", href: "/blog" },
  { label: "CAREERS", href: "/careers" },
  { label: "RESERVATION", href: "/reservation" },
  { label: "CONTACT", href: "/contact" },
];