import type { WhyChooseUsConfiguration, WhyChooseUsItem } from "./types";

/**
 * Why Choose Us reasons. Mandatory section — always present.
 *
 * CONTENT RULE: this file states REASONS — method, support, nutrition, how
 * the services connect. It never repeats facility metrics, amenities, opening
 * hours or program names. Those facts have an owner already:
 *   - Section 01 (lib/about.ts) owns facility zones, amenities and hours;
 *   - Section 02 (lib/services.ts) owns individual programs and classes.
 * Repeating them here would make three sections say the same thing.
 *
 * PULSE 24 FITNESS — from docs/Gym-research.md (WHY_CHOOSE_US.*).
 *   - "Multiple training formats": PUBLICLY_REPORTED service roster.
 *   - "Personal training and trainer guidance": VERIFIED_OFFICIAL (GBP);
 *     individual trainer credentials are NOT verified, so none are stated.
 *   - "Diet counseling listed": VERIFIED_OFFICIAL (GBP); scope and provider
 *     qualifications are unknown, so no outcome or medical claim is made.
 *
 * Not used:
 *   - "Extended reported hours": CONFLICTING_SOURCES — blocked from
 *     publication until the owner confirms hours.
 *   - "Positive comments on cleanliness and equipment": mixed review
 *     evidence, so no cleanliness guarantee is stated.
 */
export const whyChooseUs: WhyChooseUsItem[] = [
  {
    title: "More than one way to train",
    description:
      "Resistance training, group classes, combat conditioning and yoga are all part of the listed services.",
  },
  {
    title: "Personal training and trainer guidance",
    description:
      "One-to-one training and trainer support are available alongside the main floor.",
  },
  {
    title: "Diet counseling",
    description:
      "Personalized diet counseling is listed next to training. Ask the team how it works.",
  },
];

/**
 * Section 03 composition data — "The Roof".
 *
 * A single accent-colour poster: the eyebrow, one headline, and the reasons
 * above as equal columns. The headline is built only from the listed reasons
 * (training, trainer support, diet counseling, "under one roof"); it is never
 * a superlative. A clone edits this object and the array, never the
 * composition.
 */
export const whyChooseUsConfiguration: WhyChooseUsConfiguration = {
  eyebrow: "Why choose us",
  headline: "Training, coaching and diet counseling. Under one roof.",
};
