import type { Project, Track } from "../types";
import projects from "./projects";

const byTrack = (track: Track): Project[] =>
  projects.filter((p) => p.track === track).sort((a, b) => a.order - b.order);

export const gtm = byTrack("gtm");
export const caseStudies = byTrack("case-study");
export const dataWork = byTrack("data");
export const lab = byTrack("lab");
