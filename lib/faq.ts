import type { FaqItem } from "./types";

/**
 * Master FAQ data. Generated only from real, known business information.
 * If the answer to a potential question isn't actually known, don't create
 * that FAQ entry.
 *
 * PULSE 24 FITNESS — from docs/Gym-research.md (FAQ.*). Only entries the
 * research answers are used. Entries whose answer is `null` (opening hours,
 * membership prices, wheelchair accessibility) are deliberately NOT created:
 * hours are CONFLICTING_SOURCES, pricing is not publicly disclosed, and
 * accessibility was not verified. The location answer keeps to the agreed
 * area only — the street number, landmark and postal code are
 * CONFLICTING_SOURCES (see lib/business.ts). No cancellation / freeze /
 * trial / joining-fee / guest / refund FAQ is added because the research
 * supports none of them.
 *
 * Statuses: phone and diet counseling are VERIFIED_OFFICIAL; services and
 * parking are PUBLICLY_REPORTED, so answers are worded as "listed / reported"
 * and owner verification is required before final-client production.
 */
export const faq: FaqItem[] = [
  {
    id: "01",
    question: "What is the gym's phone number?",
    answer: "+91 93932 38007 is the listed business phone number.",
  },
  {
    id: "02",
    question: "Where is Pulse 24 Fitness located?",
    answer:
      "The gym is in the Asif Nagar area of Hyderabad, Telangana. Call or message the team to confirm the exact address before you visit.",
  },
  {
    id: "03",
    question: "What training services are listed?",
    answer:
      "Public listings mention personal training, weight training, aerobics, dance fitness, kickboxing, CrossFit-style training, adult sports, yoga, Vinyasa yoga and diet counseling. Confirm current availability and class schedules with the gym.",
  },
  {
    id: "04",
    question: "Is parking available?",
    answer:
      "A public listing reports parking for visitors and members. Confirm current parking availability and any restrictions with the gym.",
  },
  {
    id: "05",
    question: "Does the gym provide diet counseling?",
    answer:
      "Personalized diet counseling is listed for the gym. Ask the team what it includes and who provides it.",
  },
];
