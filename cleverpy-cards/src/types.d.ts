import { IconType } from "react-icons";

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface SideBarMenuItem {
  id: string;
  label: string;
  icon: IconType;
  url: string;
}
