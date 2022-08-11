import type { IconType } from "react-icons";
import { FiHome, FiCompass } from "react-icons/fi";
// FiSettings
// FiTrendingUp
interface LinkItemProps {
  href: string;
  icon: IconType;
  name: string;
}

export const LinkItems: Array<LinkItemProps> = [
  { name: "label.home", icon: FiHome, href: "/admin/home" },
  // { name: "label.dividends", icon: FiTrendingUp, href: "/admin/dividends" },
  { name: "label.b3Stocks", icon: FiCompass, href: "/admin/stocks" },
  // { name: "label.settings", icon: FiSettings, href: "/admin/settings" },
];
