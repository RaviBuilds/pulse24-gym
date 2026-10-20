import type { Business } from "./types";

/**
 * Master business data. Public business information only — never put API
 * keys, tokens, or server credentials here.
 *
 * PULSE 24 FITNESS (Asif Nagar, Hyderabad) — populated from
 * docs/Gym-research.md. VERIFIED_OFFICIAL: name, category, phone, city,
 * state, primary locality (Asif Nagar). PUBLICLY_REPORTED (owner
 * verification required before final-client production): description,
 * services.
 *
 * ADDRESS — CONFLICTING_SOURCES, NOT RESOLVED: GBP / Magicpin / OnePass give
 * "12-1-645/7/4, beside Gems School, near Chandra Wines Shop, Dattatreya
 * Nagar", while Justdial / Yappe give "12-1-844/1, behind Royal Regency
 * Garden, Indira Nagar-Mangalhat". Postal code is 500006 vs 500028. The
 * research says not to publish a street number, landmark or postal code
 * until management confirms, so `addressLine`, `postalCode` and `landmark`
 * are left empty. The template already omits empty address parts. Only the
 * agreed locality (Asif Nagar), city and state are published.
 *
 * HOURS — CONFLICTING_SOURCES, NOT RESOLVED: Mon–Sat close is 12:00 AM
 * (GBP / NearMe / Justdial) vs 4:00 PM (Yappe); Sunday is 07:00–09:30 (GBP)
 * vs 06:30–10:00 (Justdial / Yappe). The research says not to resolve this by
 * reasoning, so `hours` is left empty. Every consumer (Location, About
 * schedule, structured data, /start, /first-30-days) already handles an
 * empty list by omitting it. Restore seven entries once management
 * confirms. (Mon–Sat opening of 06:00 is the same in every source; it is not
 * published alone because the template renders open + close together.)
 *
 * WHATSAPP: CONTACT.whatsapp is NOT_FOUND — the research could not verify
 * that the phone number is a WhatsApp number. The template's WhatsApp
 * actions need a number, so the verified business phone is used for the
 * wa.me deep link. OWNER QUESTION: confirm it is a WhatsApp number.
 *
 * TAGLINE: NOT_FOUND (no official tagline). `tagline` feeds the closing CTA,
 * footer and the kinetic strip, so a plain locality statement is used. It is
 * template copy, not a researched slogan, and makes no claim.
 *
 * EMAIL / WEBSITE: not found. `email` is omitted.
 *
 * mapUrl: no verified Google Maps / Place URL in the research. This is a
 * standard Google Maps search by name + agreed locality. No latitude,
 * longitude or Place ID has been invented.
 */
export const business: Business = {
  name: "Pulse 24 Fitness",
  tagline: "Train in Asif Nagar, Hyderabad.",
  description:
    "An independent gym in Asif Nagar, Hyderabad, offering weight training, personal training, aerobics, dance fitness, kickboxing, CrossFit-style training, yoga and diet counseling.",
  phone: "+919393238007",
  whatsapp: {
    number: "+919393238007",
    message: "Hi, I'd like to know more about membership and training at Pulse 24 Fitness, Asif Nagar.",
  },
  email: undefined,
  address: {
    addressLine: "",
    locality: "Asif Nagar",
    city: "Hyderabad",
    state: "Telangana",
    postalCode: "",
    landmark: undefined,
  },
  hours: [],
  mapUrl:
    "https://www.google.com/maps/search/?api=1&query=Pulse+24+Fitness+Asif+Nagar+Hyderabad+Telangana",
  // Prompt A — PRIMARY "Pulse Yellow" #FFD400. Entered here exactly once;
  // app/globals.css derives every variant from --accent, and
  // app/layout.tsx derives the text colour on a yellow fill (dark, because
  // white on yellow fails WCAG) via lib/color.ts.
  accentColor: "#FFD400",
  // Prompt A — SECONDARY "Pulse Red" #F21D24. Entered here exactly once.
  // Foreground on a red fill is derived in app/layout.tsx (lib/color.ts).
  secondaryColor: "#F21D24",
};
