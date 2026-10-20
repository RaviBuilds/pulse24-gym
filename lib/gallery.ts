import type { GalleryItem } from "./types";

/**
 * Master gallery data. This array is authoritative for display order —
 * filename order is not a data dependency. Every item requires alt text
 * describing the actual image.
 *
 * PULSE 24 FITNESS — operator-supplied photographs of the training floor
 * (public/assets/gallery/pulse-24-fitness-asif-nagar-gallery-<subject>.jpg).
 * Alt text describes only what is visible in each frame: no facility claim,
 * count, award or superlative is encoded here. Replacing a photograph in
 * place keeps its filename and this file unchanged.
 *
 * ORDER is editorial: wide floor views first, then strength stations, then
 * cardio.
 */
const GALLERY = "/assets/gallery/pulse-24-fitness-asif-nagar-gallery";

export const galleryItems: GalleryItem[] = [
  {
    src: `${GALLERY}-training-floor-turf-lane.jpg`,
    alt: "Pulse 24 Fitness training floor with benches, plate-loaded stations and a turf lane",
  },
  {
    src: `${GALLERY}-strength-floor-members-training.jpg`,
    alt: "Members training on the strength floor at Pulse 24 Fitness",
  },
  {
    src: `${GALLERY}-turf-area-barbells-dumbbells.jpg`,
    alt: "Turf area with a barbell and dumbbells at Pulse 24 Fitness",
  },
  {
    src: `${GALLERY}-turf-area-members-training.jpg`,
    alt: "Members training on the turf area at Pulse 24 Fitness",
  },
  {
    src: `${GALLERY}-yellow-machines-training-floor.jpg`,
    alt: "Yellow plate-loaded machines and benches on the Pulse 24 Fitness training floor",
  },
  {
    src: `${GALLERY}-plate-loaded-machines-treadmills.jpg`,
    alt: "Plate-loaded machines with treadmills and a punching bag at Pulse 24 Fitness",
  },
  {
    src: `${GALLERY}-plate-loaded-machines-wall-graphics.jpg`,
    alt: "Plate-loaded machines in front of wall graphics at Pulse 24 Fitness",
  },
  {
    src: `${GALLERY}-punching-bag-plate-loaded-station.jpg`,
    alt: "Punching bag and a plate-loaded station on the Pulse 24 Fitness floor",
  },
  {
    src: `${GALLERY}-squat-rack-leg-press-area.jpg`,
    alt: "Squat rack and leg press area at Pulse 24 Fitness",
  },
  {
    src: `${GALLERY}-lat-pulldown-station.jpg`,
    alt: "Member using a lat pulldown station at Pulse 24 Fitness",
  },
  {
    src: `${GALLERY}-members-at-mirror-training-floor.jpg`,
    alt: "Two members at the mirror on the Pulse 24 Fitness training floor",
  },
  {
    src: `${GALLERY}-cardio-area-treadmills-members.jpg`,
    alt: "Members using treadmills in the cardio area at Pulse 24 Fitness",
  },
  {
    src: `${GALLERY}-treadmills-window-view.jpg`,
    alt: "Row of treadmills beside a window at Pulse 24 Fitness",
  },
  {
    src: `${GALLERY}-cross-trainer-bike-cardio-corner.jpg`,
    alt: "Cross trainer and exercise bike in the cardio corner at Pulse 24 Fitness",
  },
];
