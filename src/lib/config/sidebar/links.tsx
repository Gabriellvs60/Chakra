import type { IconType } from "react-icons";
import { FiHome, FiTrendingUp, FiCompass, FiSettings } from "react-icons/fi";

interface LinkItemProps {
  name: string;
  icon: IconType;
}

export const LinkItems: Array<LinkItemProps> = [
  { name: "label.home", icon: FiHome },
  { name: "label.dividends", icon: FiTrendingUp },
  { name: "label.b3Stocks", icon: FiCompass },
  { name: "label.settings", icon: FiSettings },
];
