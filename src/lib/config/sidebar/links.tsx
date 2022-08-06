import type { IconType } from "react-icons";
import { FiHome, FiTrendingUp, FiCompass, FiSettings } from "react-icons/fi";

interface LinkItemProps {
  name: string;
  icon: IconType;
}

export const LinkItems: Array<LinkItemProps> = [
  { name: "Home", icon: FiHome },
  { name: "Proventos", icon: FiTrendingUp },
  { name: "Stocks B3", icon: FiCompass },
  { name: "Settings", icon: FiSettings },
];
