export type SubMenuItem = {
  href: string;
  label: string;
};

export type NavItem = {
  href: string;
  label: string;
  submenu?: SubMenuItem[];
};

export const MENU_ITEMS: NavItem[] = [
  {
    href: "/chi-siamo",
    label: "Chi Siamo",
    submenu: [
      { href: "/chi-siamo/regionale", label: "Regionale" },
      {
        href: "/chi-siamo/commissione-garanzia",
        label: "Commissione di Garanzia",
      },
      { href: "/chi-siamo/udine", label: "Udine" },
      { href: "/chi-siamo/pordenone", label: "Pordenone" },
      { href: "/chi-siamo/trieste", label: "Trieste" },
      { href: "/chi-siamo/gorizia", label: "Gorizia" },
    ],
  },
  { href: "/news", label: "News" },
  { href: "/iscriviti", label: "Iscriviti" },
  { href: "/documenti", label: "Documenti" },
  { href: "/contatti", label: "Contatti" },
];



