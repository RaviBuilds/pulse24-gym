import type { Service } from "./types";

/**
 * Master services data. Only services with verified:true render on the live
 * site. A service can exist here and remain disabled — this is the direct
 * mechanism that prevents an unverified/discontinued program from silently
 * appearing on a gym website.
 *
 * PULSE 24 FITNESS — from docs/Gym-research.md (PROGRAMS.*). Personal
 * training, weight training, aerobics, dance fitness, kickboxing,
 * CrossFit-style training, adult sports and diet counseling are listed on the
 * Google Business Profile; yoga and Vinyasa yoga are PUBLICLY_REPORTED
 * (Justdial / Yappe). Owner verification of current availability and class
 * schedules is required before final-client production. Descriptions are kept
 * to what the research states: no schedule, trainer credential, equipment
 * list, outcome or health claim is added.
 *
 * NOT RENDERED: "Weight Management" (research status PUBLICLY_REPORTED, no
 * description, and the GBP service roster does not list it as a named
 * program). Kept below with verified:false until the owner confirms it.
 *
 * STABLE IDs: `strength-training`, `conditioning` and `personal-training`
 * are cross-referenced by id from the frozen educational module
 * lib/training-intelligence.ts (`programId`, see
 * components/sections/trainingLoadout.ts). These three ids must not be
 * renamed even though the gym-facing names differ: `strength-training` is
 * "Weight Training" and `conditioning` is "CrossFit-style Training".
 *
 * Images are placeholders occupying their final filenames
 * (docs/MASTER-GYM-ASSET-CONTRACT.md); the operator replaces the files in
 * place with real Pulse 24 Fitness photography — no code change.
 * Kickboxing, adult sports, Vinyasa yoga and dance fitness currently share
 * copied placeholder artwork.
 */
const ASSET = "/assets/programs/pulse-24-fitness-asif-nagar-program";

export const services: Service[] = [
  {
    id: "strength-training",
    name: "Weight Training",
    description: "Resistance training with free weights and strength machines.",
    icon: "strength",
    image: `${ASSET}-weight-training.jpg`,
    verified: true,
    ctaLabel: "Ask about weight training",
    ctaHref: undefined,
  },
  {
    id: "personal-training",
    name: "Personal Training",
    description: "One-to-one training with trainer guidance.",
    icon: "coaching",
    image: `${ASSET}-personal-training.jpg`,
    verified: true,
    ctaLabel: "Ask about personal training",
    ctaHref: undefined,
  },
  {
    id: "kickboxing",
    name: "Kickboxing",
    description: "Kickboxing training.",
    icon: "equipment",
    image: `${ASSET}-kickboxing.jpg`,
    verified: true,
    ctaLabel: "Ask about kickboxing",
    ctaHref: undefined,
  },
  {
    id: "conditioning",
    name: "CrossFit-style Training",
    description: "CrossFit-style functional conditioning.",
    icon: "equipment",
    image: `${ASSET}-crossfit-style.jpg`,
    verified: true,
    ctaLabel: "Ask about CrossFit-style training",
    ctaHref: undefined,
  },
  {
    id: "aerobics",
    name: "Aerobics",
    description: "Group aerobics classes.",
    icon: "cardio",
    image: `${ASSET}-aerobics.jpg`,
    verified: true,
    ctaLabel: "Ask about aerobics",
    ctaHref: undefined,
  },
  {
    id: "dance-fitness",
    name: "Dance Fitness",
    description: "Group dance-fitness classes.",
    icon: "cardio",
    image: `${ASSET}-dance-fitness.jpg`,
    verified: true,
    ctaLabel: "Ask about dance fitness",
    ctaHref: undefined,
  },
  {
    id: "yoga",
    name: "Yoga",
    description: "Yoga practice.",
    icon: "floor",
    image: `${ASSET}-yoga.jpg`,
    verified: true,
    ctaLabel: "Ask about yoga",
    ctaHref: undefined,
  },
  {
    id: "vinyasa-yoga",
    name: "Vinyasa Yoga",
    description: "Vinyasa yoga practice.",
    icon: "floor",
    image: `${ASSET}-vinyasa-yoga.jpg`,
    verified: true,
    ctaLabel: "Ask about Vinyasa yoga",
    ctaHref: undefined,
  },
  {
    id: "adult-sports",
    name: "Adult Sports",
    description: "Adult sports activities.",
    icon: "equipment",
    image: `${ASSET}-adult-sports.jpg`,
    verified: true,
    ctaLabel: "Ask about adult sports",
    ctaHref: undefined,
  },
  {
    id: "diet-counseling",
    name: "Diet Counseling",
    description: "Personalized diet counseling.",
    icon: "coaching",
    image: `${ASSET}-diet-counseling.jpg`,
    verified: true,
    ctaLabel: "Ask about diet counseling",
    ctaHref: undefined,
  },
  {
    // Research: no description; not a named program on the GBP roster.
    id: "weight-management",
    name: "Weight Management",
    description: "",
    icon: "coaching",
    image: undefined,
    verified: false,
    ctaLabel: undefined,
    ctaHref: undefined,
  },
];
