// src/data/nav.ts
export type NavItem = {
  label: string;
  href: string;
};

export const navItems: NavItem[] = [
  { label: "THE MENUS", href: "/menus" },
  { label: "EVENTS", href: "/events" },
  { label: "GALLERY", href: "/gallery" },
  { label: "LOGO", href: "/home" },
  { label: "ABOUT US", href: "/about" },
  { label: "RESERVATION", href: "/reservation" },
  { label: "CONTACT", href: "/contact" },
];