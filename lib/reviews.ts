import type { GoogleReviews } from "./types";

/**
 * Master Google Reviews data. Manually curated, never scraped at runtime.
 * Do not invent review content, reviewer names, ratings, or counts.
 *
 * PULSE 24 FITNESS — rating/reviewCount are VERIFIED_OFFICIAL (Google
 * Business Profile screenshot described in docs/Gym-research.md REVIEWS:
 * 4.7 / 132 reviews). The research supplies no calendar date for that
 * observation (`rating_read_on` NOT_FOUND). Other platforms report different
 * figures (Justdial 5.0 / 132 ratings, Yappe 4.80 / 112 reviews); those are
 * platform-specific and are never combined with or substituted for the
 * Google figures here.
 *
 * The three reviews below are REVIEWS.selected_reviews, PUBLICLY_REPORTED
 * (Yappe public reviews), reproduced exactly as supplied, including the
 * original spelling and punctuation. They are NOT Google reviews even though
 * the Reviews section's card styling is Google-native — that is a fixed
 * template treatment. The research's publication note applies: OBTAIN
 * EXPLICIT PERMISSION from each reviewer before final-client production, or
 * replace them with Google reviews the owner can confirm. A fourth supplied
 * review (OnePass, abbreviated reviewer "T.") is left out because the
 * template shows exactly three. None carries a star rating because none was
 * supplied.
 *
 * `tagline` restates themes visible in the displayed reviews (trainer
 * support, equipment, environment). It is not a quotation and not the
 * research's INFERRED sentiment summary, which also records criticism and is
 * deliberately not reproduced.
 *
 * REVIEWS.google_profile_url is NOT_FOUND — no direct Google Business
 * Profile URL exists. Never invent one and never substitute a Justdial or
 * Yappe URL for the Google review CTA. googleBusinessProfileUrl uses a Google
 * Maps search-by-name-and-locality query (the same safe fallback pattern as
 * lib/business.ts mapUrl). No Place ID or profile slug is invented.
 */
export const googleReviews: GoogleReviews = {
  rating: 4.7,
  reviewCount: 132,
  tagline:
    "Reviewers mention supportive trainers, good equipment and a peaceful place to work out.",
  googleBusinessProfileUrl:
    "https://www.google.com/maps/search/?api=1&query=Pulse+24+Fitness+Asif+Nagar+Hyderabad+Telangana",
  // Fill these two once the owner supplies the Google "write a review" link
  // (Google Business Profile -> Get more reviews -> share link). The footer
  // trust card then adds a "Write a review" link and, if reviewQrSrc points at
  // a QR image of that link, the scan-to-review QR. Left unset = not rendered.
  reviewUrl: undefined,
  reviewQrSrc: undefined,
  reviews: [
    {
      name: "Athher Mohammed",
      text: "This gym is so hygenic and well maintained and the best thing is trainer Ajay bhai is so much supportive...if you are looking for a gym near by and want to buit ur body body in a good environment then what are you waiting for.!",
    },
    {
      name: "Mohd Shaifan",
      text: "Best gym please do visit. If i speak about coach tbh if we make a mind for one muscle you will do 2 that kind of motivation and environment they have. Thank to Ajay bhai Who is helping me to transform...",
    },
    {
      name: "Hamilpur Vamshi kiran",
      text: "Excellent gym to workout peacefully. Wonderful management response. Experienced trainers.",
    },
    {
      name: "Mohd Sohail",
      text: "Pulse 24 Gym offers a great ambience with well-maintained workout machines. I highly recommend Mr. Ajay Singh, who is not only experienced but also very friendly, making the gym experience even better.",
    },
  ],
};
