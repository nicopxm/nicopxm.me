import type { CSSProperties } from "react";

export type Track = "gtm" | "case-study" | "data" | "lab";
export type Status = "live" | "in-progress" | "shipped";

export interface Metric {
  label: string;
  value: string;
}

export interface Project {
  name?: string;
  filename?: string;
  link?: string;
  role?: string;
  dates?: string;
  tags?: string[];
  imageStyle?: CSSProperties;
  postID?: string;

  track: Track;
  order: number;
  client?: string;
  problem?: string;
  system?: string;
  outcome?: string;
  status?: Status;
  metrics?: Metric[];
}
