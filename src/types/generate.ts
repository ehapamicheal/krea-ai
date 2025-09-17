import { IconType } from "react-icons";

export interface GenerateItem {
  id: number;
  title: string;
  description: string;
  icon: IconType;
  badge?: string;
}