import type { AboutConfiguration, BusinessHours } from "./types";

/**
 * Section 01 — facility / training-floor story content.
 *
 * Customizable per gym (labels, image, attributes, headline). The narrative
 * paragraph is deliberately NOT duplicated here: Section 01 renders
 * `business.description`, so the facility description has exactly one source
 * of truth.
 *
 * Source-First rules that apply to this file:
 * - A zone or attribute with `verified: false` does not render. Leave it in
 *   the file as documentation of what was checked and found absent.
 * - Never add a claim, statistic, equipment count, award or superlative here
 *   to make the section look fuller. The composition carries the density.
 *
 * PULSE 24 FITNESS — populated from docs/Gym-research.md (ABOUT.zones,
 * ABOUT.attributes). Strength and cardio zones, parking, changing rooms,
 * restrooms are PUBLICLY_REPORTED (GBP / Justdial / OnePass as summarized in
 * the research); diet counseling and trainer guidance are VERIFIED_OFFICIAL
 * (GBP). Owner verification is required before final-client production.
 *
 * No station counts, floor counts or equipment numbers exist in the research,
 * so no `metric` is set anywhere.
 *
 * Not rendered (checked, not verifiable):
 *  - "Functional / group training" zone is INFERRED from the service roster;
 *    the exact floor layout is not documented.
 *  - "Yoga" zone: yoga is listed, but a dedicated room/zone is not confirmed.
 *  - Accessibility: wheelchair access, ramps and lifts are NOT_FOUND.
 *
 * Opening schedule: `business.hours` is empty because the research hours are
 * CONFLICTING_SOURCES (see lib/business.ts), so `scheduleWindows` returns
 * nothing and the schedule block does not render.
 */
export const aboutConfiguration: AboutConfiguration = {
  index: "01",
  eyebrow: "About the gym",
  headlineLines: ["The floor behind", "the brand."],
  accentLastLine: true,
  image: {
    src: "/assets/about/pulse-24-fitness-asif-nagar-about-gym-interior.jpg",
    alt: "Pulse 24 Fitness training floor in Asif Nagar, Hyderabad",
  },
  imageLabel: "Training floor",
  frameLabel: "Facility",
  zonesLabel: "Training environment",
  attributesLabel: "Floor & support",
  scheduleLabel: "Opening schedule",
  zones: [
    {
      id: "strength",
      label: "Strength training",
      detail: "Free weights and strength machines.",
      icon: "strength",
      verified: true,
    },
    {
      id: "cardio",
      label: "Cardio",
      detail: "Cardiovascular machines and treadmills.",
      icon: "cardio",
      verified: true,
    },
    // INFERRED from the service roster; exact layout not documented.
    {
      id: "functional-group",
      label: "Functional / group training",
      detail: "Open area for group and functional training.",
      icon: "floor",
      verified: false,
    },
    // Yoga is listed; a dedicated room or zone is not confirmed.
    {
      id: "yoga",
      label: "Yoga",
      detail: "Yoga and Vinyasa yoga.",
      icon: "floor",
      verified: false,
    },
  ],
  attributes: [
    { id: "parking", label: "Parking for visitors and members", verified: true },
    { id: "changing-rooms", label: "Changing rooms", verified: true },
    { id: "restrooms", label: "On-site restrooms", verified: true },
    { id: "diet-counseling", label: "Personalized diet counseling", verified: true },
    { id: "trainer-guidance", label: "Trainer guidance", verified: true },
    // NOT_FOUND in the research — never rendered.
    { id: "accessibility", label: "Wheelchair-accessible entrance", verified: false },
  ],
  showSchedule: true,
};

/** One grouped opening window, e.g. `Mon–Fri / 05:00 AM – 11:00 PM`. */
export interface ScheduleWindow {
  label: string;
  value: string;
}

/**
 * Beyond this many distinct windows the readout stops being a compact
 * technical module and starts being a timetable, so Section 01 renders
 * nothing and the full hours stay with the location section instead.
 */
const MAX_SCHEDULE_GROUPS = 3;

function shortDay(day: string): string {
  return day.trim().slice(0, 3);
}

/**
 * Collapse a week of opening hours into consecutive day ranges that share the
 * same open/close window. Derived, never authored: the caller passes
 * `business.hours`, so Section 01 can only ever show hours that already exist
 * in lib/business.ts (and therefore in the LocalBusiness structured data) —
 * it cannot invent a schedule. Hours are taken as an explicit argument rather
 * than imported here so this module stays pure and directly testable.
 */
export function scheduleWindows(hours: BusinessHours[]): ScheduleWindow[] {
  if (hours.length === 0) return [];

  const groups: { days: string[]; open: string; close: string }[] = [];

  for (const entry of hours) {
    if (!entry.day || !entry.open || !entry.close) return [];
    const current = groups[groups.length - 1];
    if (current && current.open === entry.open && current.close === entry.close) {
      current.days.push(entry.day);
    } else {
      groups.push({ days: [entry.day], open: entry.open, close: entry.close });
    }
  }

  if (groups.length > MAX_SCHEDULE_GROUPS) return [];

  return groups.map((group) => ({
    label:
      group.days.length === 1
        ? shortDay(group.days[0])
        : `${shortDay(group.days[0])}\u2013${shortDay(group.days[group.days.length - 1])}`,
    value: `${group.open} \u2013 ${group.close}`,
  }));
}
