# GYM RESEARCH PACKAGE — Pulse 24 Fitness

Researched: Not explicitly stated in source report
Researcher: Gemini Deep Research
Phase: PROSPECT_DEMO
Source report: `Pulse 24 Fitness Research Dossier.pdf`

> This file is the schema-normalized research package for the BLOGSPAGE AI gym website factory.
> It preserves the source report's findings while separating verified/publicly reported/inferred information. Non-`VERIFIED_OFFICIAL` fields require owner verification before final-client production.

> Factory-level content excluded from this research package: Hero content/artwork, transformation data, Training Intelligence, Between Sessions education, section headings/labels, and discount percentages are intentionally excluded. This package records missing transformation evidence and does not supply factory/template copy.

**Normalization note:** The PDF references a provided Google Business Profile (GBP) screenshot as its primary identity anchor, but the actual screenshot and direct GBP URL are not embedded as a public URL in the dossier. `VERIFIED_OFFICIAL` below is reserved for facts explicitly identified as coming from that GBP/identity anchor. Third-party directory information is `PUBLICLY_REPORTED`; interpretations are `INFERRED`. Where the dossier recommends choosing one source despite a contradiction, this package preserves the contradiction and requires owner confirmation instead.

## 1. BUSINESS

```yaml
BUSINESS:
  name:
    value: "Pulse 24 Fitness"
    source: "Provided Google Business Profile screenshot (primary identity anchor); corroborated by Justdial, Magicpin, OnePass, Yappe"
    status: VERIFIED_OFFICIAL
  tagline:
    value: null
    source: "No official tagline identified in the source report"
    status: NOT_FOUND
  description:
    value: "An independent fitness center in the Asif Nagar / Dattatreya Nagar area of Hyderabad. The source report lists weight training, personal training, aerobics, dance fitness, kickboxing, CrossFit-style training, yoga/Vinyasa yoga, and diet counseling."
    source: "Provided GBP screenshot for core listing; Yappe, Justdial and OnePass for additional service corroboration; synthesized from dossier"
    status: PUBLICLY_REPORTED
  category:
    value: "Fitness center / Gym"
    source: "Provided GBP screenshot; Yappe and OnePass listings"
    status: VERIFIED_OFFICIAL
  primary_locality:
    value: "Asif Nagar; Dattatreya Nagar also reported"
    source: "Provided GBP screenshot and directory listings"
    status: VERIFIED_OFFICIAL
  branch_count:
    value: 1
    source: "Gemini Deep Research dossier's branch discovery across directories; no second branch found"
    status: PUBLICLY_REPORTED
  year_established:
    value: null
    source: "Dossier states founding year is not verified; reviews reportedly date back at least 47 months"
    status: NOT_FOUND
```

## 2. CONTACT

```yaml
CONTACT:
  phone:
    value: "+91 93932 38007"
    source: "Provided GBP screenshot; corroborated by NearMe, Justdial, Magicpin, OnePass and Yappe"
    status: VERIFIED_OFFICIAL
  whatsapp:
    value: null
    source: "Dossier explicitly says WhatsApp is not verified and no WhatsApp link was found"
    status: NOT_FOUND
  email:
    value: null
    source: "Dossier contact-information search"
    status: NOT_FOUND
  website:
    value: null
    source: "Dossier website discovery; no official Hyderabad branch website found and GBP website field reportedly not linked"
    status: NOT_FOUND
  instagram_url:
    value: null
    source: "Dossier social-profile discovery for this Hyderabad branch"
    status: NOT_FOUND
  instagram_handle:
    value: null
    source: "Dossier social-profile discovery for this Hyderabad branch"
    status: NOT_FOUND
  facebook_url:
    value: null
    source: "Dossier social-profile discovery; similarly named pages found belong to unrelated international entities"
    status: NOT_FOUND
  youtube_url:
    value: null
    source: "Dossier social-profile discovery for this Hyderabad branch"
    status: NOT_FOUND
  booking_url:
    value: null
    source: "Dossier reports no direct official booking portal; third-party inquiry forms are not an official booking URL"
    status: NOT_FOUND
```

## 3. LOCATION

```yaml
LOCATION:
  address_line:
    value: null
    source: "Conflicting address strings in GBP/Magicpin/OnePass versus Justdial/Yappe; see VERIFICATION_NOTES"
    status: CONFLICTING_SOURCES
  locality:
    value: "Asif Nagar / Dattatreya Nagar; Indira Nagar-Mangalhat also appears in directory listings"
    source: "GBP, Magicpin, OnePass, Justdial and Yappe as reported in dossier"
    status: CONFLICTING_SOURCES
  city:
    value: "Hyderabad"
    source: "GBP and directory listings"
    status: VERIFIED_OFFICIAL
  state:
    value: "Telangana"
    source: "GBP and directory listings"
    status: VERIFIED_OFFICIAL
  postal_code:
    value: null
    source: "500006 is the dominant GBP/Magicpin/OnePass listing; 500028 also appears in secondary directory data"
    status: CONFLICTING_SOURCES
  landmark:
    value: null
    source: "Gems School / Chandra Wines Shop versus Royal Regency Garden; see VERIFICATION_NOTES"
    status: CONFLICTING_SOURCES
  map_url:
    value: null
    source: "Dossier says a map link is present via the GBP interface but supplies no exact URL"
    status: NOT_FOUND
  latitude:
    value: null
    source: "No coordinates supplied in source report"
    status: NOT_FOUND
  longitude:
    value: null
    source: "No coordinates supplied in source report"
    status: NOT_FOUND
```

## 4. HOURS

```yaml
HOURS:
  split_shifts_reported:
    value: null
    source: "No split-shift timetable reported; weekday listings show continuous hours"
    status: NOT_FOUND
  monday:
    open: "06:00"
    close: "00:00 (midnight)"
    source: "GBP / NearMe / Justdial as summarized in dossier; Yappe reports 16:00 close"
    status: CONFLICTING_SOURCES
  tuesday:
    open: "06:00"
    close: "00:00 (midnight)"
    source: "GBP / NearMe / Justdial as summarized in dossier; Yappe reports 16:00 close"
    status: CONFLICTING_SOURCES
  wednesday:
    open: "06:00"
    close: "00:00 (midnight)"
    source: "GBP / NearMe / Justdial as summarized in dossier; Yappe reports 16:00 close"
    status: CONFLICTING_SOURCES
  thursday:
    open: "06:00"
    close: "00:00 (midnight)"
    source: "GBP / NearMe / Justdial as summarized in dossier; Yappe reports 16:00 close"
    status: CONFLICTING_SOURCES
  friday:
    open: "06:00"
    close: "00:00 (midnight)"
    source: "GBP / NearMe / Justdial as summarized in dossier; Yappe reports 16:00 close"
    status: CONFLICTING_SOURCES
  saturday:
    open: "06:00"
    close: "00:00 (midnight)"
    source: "GBP / NearMe / Justdial as summarized in dossier; Yappe reports 16:00 close"
    status: CONFLICTING_SOURCES
  sunday:
    open: null
    close: null
    source: "GBP: 07:00–09:30; Justdial: 06:30–10:00; Yappe: 06:30–10:00"
    status: CONFLICTING_SOURCES
```

Times are recorded as reported, not approved for publication. The source report's argument that 16:00 closing is implausible is an inference, not sufficient evidence to erase the Yappe discrepancy.

## 5. ABOUT

```yaml
ABOUT:
  short_description:
    value: "Pulse 24 Fitness is an independent gym in the Asif Nagar area of Hyderabad. Public listings describe personal training, weight training, aerobics, dance fitness, kickboxing, CrossFit-style training, yoga/Vinyasa yoga, and diet counseling."
    source: "GBP, Yappe, Justdial and OnePass as summarized in dossier; normalized summary"
    status: PUBLICLY_REPORTED
  positioning:
    value: "Multi-disciplinary local fitness center combining conventional resistance training with group fitness, combat-sport conditioning and yoga."
    source: "Interpretation of reported service roster in GBP and third-party listings"
    status: INFERRED
  story:
    value: null
    source: "Dossier says founding year, founder biography and brand story were not found"
    status: NOT_FOUND
  zones:
    - id: "strength"
      label: "Strength training"
      value: "Free weights and strength machines are reported."
      source: "GBP and OnePass/Justdial details summarized in dossier"
      status: PUBLICLY_REPORTED
    - id: "cardio"
      label: "Cardio"
      value: "Cardiovascular machines and treadmills are reported."
      source: "GBP/NearMe and Justdial listings summarized in dossier"
      status: PUBLICLY_REPORTED
    - id: "functional-group"
      label: "Functional / group training"
      value: "An open group-training area is inferred from reported aerobics, dance fitness and kickboxing; exact floor layout is not documented."
      source: "Dossier facility analysis based on service listings"
      status: INFERRED
    - id: "yoga"
      label: "Yoga"
      value: "Yoga and Vinyasa Yoga are listed by a third-party directory. Dedicated yoga room/zone is not confirmed."
      source: "Justdial/Yappe service listings as summarized in dossier"
      status: PUBLICLY_REPORTED
  attributes:
    - id: "parking"
      label: "Parking"
      value: "Parking is listed as available for visitors and members."
      source: "Third-party directory listing summarized in dossier"
      status: PUBLICLY_REPORTED
    - id: "changing-rooms"
      label: "Changing rooms"
      value: "Changing rooms are reported in a third-party listing."
      source: "Justdial details summarized in dossier"
      status: PUBLICLY_REPORTED
    - id: "restrooms"
      label: "Restrooms"
      value: "On-site restrooms are reported in a third-party listing."
      source: "Third-party directory details summarized in dossier"
      status: PUBLICLY_REPORTED
    - id: "diet-counseling"
      label: "Personalized diet counseling"
      value: "Personalized diet counseling is stated on the GBP identity anchor and corroborated by directory content. Scope, qualifications and limitations are not specified."
      source: "GBP and directory listings summarized in dossier"
      status: VERIFIED_OFFICIAL
    - id: "trainer-guidance"
      label: "Trainer guidance"
      value: "Professional trainers are mentioned in GBP listing content; individual qualifications are not verified."
      source: "GBP screenshot and public reviews summarized in dossier"
      status: VERIFIED_OFFICIAL
    - id: "accessibility"
      label: "Accessibility"
      value: null
      source: "Dossier says wheelchair access, ramps and specialized elevators were not verified"
      status: NOT_FOUND
```

## 6. PROGRAMS

```yaml
PROGRAMS:
  - id: "personal-training"
    name: "Personal Training"
    description: "Personal training is listed; session structure, coach assignment and qualifications are not confirmed."
    category: "personal"
    image_opportunity: "Authentic one-to-one coaching image from the operator-approved photo set."
    source: "GBP and Yappe/OnePass directory information summarized in dossier"
    status: VERIFIED_OFFICIAL
  - id: "weight-training"
    name: "Weight Training"
    description: "Resistance training using free weights and machines is reported."
    category: "strength"
    image_opportunity: "Training-floor or free-weight image from the operator-approved photo set."
    source: "GBP and directory information summarized in dossier"
    status: VERIFIED_OFFICIAL
  - id: "aerobics"
    name: "Aerobics"
    description: "Aerobics is listed as a group exercise service; schedule is not available."
    category: "group"
    image_opportunity: "Group aerobics image from the operator-approved photo set."
    source: "GBP listing as summarized in dossier"
    status: VERIFIED_OFFICIAL
  - id: "dance-fitness"
    name: "Dance Fitness"
    description: "Dance fitness classes are listed; style and schedule are not specified."
    category: "group"
    image_opportunity: "Dance-fitness class image from the operator-approved photo set."
    source: "GBP listing as summarized in dossier"
    status: VERIFIED_OFFICIAL
  - id: "kickboxing"
    name: "Kickboxing"
    description: "Kickboxing is listed; instructor credentials, equipment and class schedule are not specified."
    category: "martial_arts"
    image_opportunity: "Kickboxing / martial-arts action image from the operator-approved photo set."
    source: "GBP and Yappe listing details summarized in dossier"
    status: VERIFIED_OFFICIAL
  - id: "crossfit-style"
    name: "CrossFit-style Training"
    description: "CrossFit is named in the listing; the source does not establish affiliation or certification by CrossFit, Inc."
    category: "conditioning"
    image_opportunity: "Functional-training image from the operator-approved photo set; avoid third-party trademarks unless approved."
    source: "GBP and Yappe service listing summarized in dossier"
    status: VERIFIED_OFFICIAL
  - id: "yoga"
    name: "Yoga"
    description: "Yoga is reported in third-party directory content."
    category: "recovery"
    image_opportunity: "Yoga practice image from the operator-approved photo set."
    source: "Justdial/Yappe listing information summarized in dossier"
    status: PUBLICLY_REPORTED
  - id: "vinyasa-yoga"
    name: "Vinyasa Yoga"
    description: "Vinyasa Yoga is reported in third-party directory content; schedule is not supplied."
    category: "recovery"
    image_opportunity: "Vinyasa yoga class image from the operator-approved photo set."
    source: "Justdial listing information summarized in dossier"
    status: PUBLICLY_REPORTED
  - id: "adult-sports"
    name: "Adult Sports"
    description: "Adult sports appears in the GBP service roster; the specific activities are not identified."
    category: "conditioning"
    image_opportunity: "Authentic adult sports-conditioning image from the operator-approved photo set, once the activity is confirmed."
    source: "GBP listing as summarized in dossier"
    status: VERIFIED_OFFICIAL
  - id: "weight-management"
    name: "Weight Management"
    description: null
    category: "other"
    image_opportunity: "Do not assign an image until the operator confirms this is an actual named program."
    source: "Dossier labels this program medium-confidence; explicit GBP service roster does not list it as a named program"
    status: PUBLICLY_REPORTED
  - id: "diet-counseling"
    name: "Diet Counseling"
    description: "Personalized diet counseling is reported; provider qualifications, scope and service format are not specified. Do not make medical or guaranteed-results claims."
    category: "other"
    image_opportunity: "Operator-approved consultation image, only if this service and setting are confirmed."
    source: "GBP and directory details summarized in dossier"
    status: VERIFIED_OFFICIAL
```

## 7. WHY_CHOOSE_US

```yaml
WHY_CHOOSE_US:
  - title: "Multiple training formats"
    description: "The reported service roster includes resistance training, aerobics, dance fitness, kickboxing, CrossFit-style training and yoga."
    basis: "Service variety reported across GBP and directory listings; availability and current schedules require confirmation."
    source: "GBP, Yappe and Justdial as summarized in dossier"
    status: PUBLICLY_REPORTED
  - title: "Personal training and trainer guidance"
    description: "Personal training and professional trainer support are listed; individual credentials have not been verified."
    basis: "GBP listing and public directory/review mentions"
    source: "GBP and OnePass/Yappe review/listing summaries"
    status: VERIFIED_OFFICIAL
  - title: "Diet counseling listed"
    description: "The GBP listing describes personalized diet counseling. Qualifications and exact scope need owner confirmation."
    basis: "Explicit service description in GBP anchor"
    source: "Provided GBP screenshot as summarized in dossier"
    status: VERIFIED_OFFICIAL
  - title: "Extended reported hours"
    description: "Most sources summarized in the dossier report 06:00 to midnight Monday through Saturday, but another directory reports a 16:00 close. Do not publish until confirmed."
    basis: "Conflicting public schedules"
    source: "GBP, NearMe, Justdial and Yappe as summarized in dossier"
    status: CONFLICTING_SOURCES
  - title: "Positive comments on cleanliness and equipment"
    description: "Some public reviews praise hygiene, maintenance and equipment; other feedback is critical about floor discipline and customer communication."
    basis: "Mixed review evidence; avoid an absolute cleanliness guarantee."
    source: "OnePass/Yappe review excerpts summarized in dossier"
    status: PUBLICLY_REPORTED
```

## 8. REVIEWS

```yaml
REVIEWS:
  google_rating:
    value: 4.7
    source: "Provided GBP screenshot, as recorded in dossier"
    status: VERIFIED_OFFICIAL
  google_review_count:
    value: 132
    source: "Provided GBP screenshot, as recorded in dossier"
    status: VERIFIED_OFFICIAL
  google_profile_url:
    value: null
    source: "Dossier says the profile can be found via a standard Google Maps search but does not supply the exact URL"
    status: NOT_FOUND
  rating_read_on:
    value: null
    source: "Dossier says rating/count were checked against the provided GBP screenshot but gives no calendar date"
    status: NOT_FOUND
  selected_reviews:
    - reviewer: "Athher Mohammed"
      text: "This gym is so hygenic and well maintained and the best thing is trainer Ajay bhai is so much supportive...if you are looking for a gym near by and want to buit ur body body in a good environment then what are you waiting for.!"
      source: "Yappe/public review reproduced in dossier"
      status: PUBLICLY_REPORTED
      publication_note: "Obtain explicit permission before using the reviewer's name or quotation in commercial marketing. Preserve original spelling if quoted."
    - reviewer: "Mohd Shaifan"
      text: "Best gym please do visit. If i speak about coach tbh if we make a mind for one muscle you will do 2 that kind of motivation and environment they have. Thank to Ajay bhai Who is helping me to transform..."
      source: "Yappe/public review reproduced in dossier"
      status: PUBLICLY_REPORTED
      publication_note: "Obtain explicit permission before using the reviewer's name or quotation in commercial marketing. The wording is not quantitative transformation evidence."
    - reviewer: "Hamilpur Vamshi kiran"
      text: "Excellent gym to workout peacefully. Wonderful management response. Experienced trainers."
      source: "Yappe/public review reproduced in dossier"
      status: PUBLICLY_REPORTED
      publication_note: "Obtain explicit permission before using the reviewer's name or quotation in commercial marketing."
    - reviewer: "T. (via OnePass)"
      text: "Brand new equipment with good qualified trainer and management this gym is completely made for fitness."
      source: "OnePass review reproduced in dossier"
      status: PUBLICLY_REPORTED
      publication_note: "Obtain permission if reusing the quotation; reviewer identity is abbreviated in the source."
  sentiment_summary:
    value: "Review themes include praise for trainer Ajay, trainer motivation, equipment, hygiene and a spacious/peaceful workout environment. The dossier also records criticism about scattered dumbbells/hygiene and customer communication."
    source: "Synthesis of review excerpts from Yappe and OnePass reproduced in dossier"
    status: INFERRED
  other_platform_ratings:
    value: "Justdial reportedly shows 5.0 from 132 ratings; Yappe reportedly shows 4.80 from 112 reviews."
    source: "Dossier's review comparison"
    status: PUBLICLY_REPORTED
```

## 9. PRICING

```yaml
PRICING:
  currency:
    value: "INR"
    source: "Dossier identifies pricing context in Indian rupees; currency is not an actual gym quote"
    status: INFERRED
  publishes_pricing_publicly:
    value: false
    source: "Dossier says exact current tiers are not publicly disclosed on primary sources"
    status: PUBLICLY_REPORTED
  plans:
    daily:
      value: null
      source: "Dossier action checklist; no gym-specific amount found"
      status: NOT_FOUND
    weekly:
      value: null
      source: "No gym-specific weekly price reported"
      status: NOT_FOUND
    monthly:
      value: null
      source: "Dossier says exact current membership tiers are not publicly disclosed"
      status: NOT_FOUND
    quarterly:
      value: null
      source: "Dossier says exact current membership tiers are not publicly disclosed"
      status: NOT_FOUND
    half_year:
      value: null
      source: "Dossier says exact current membership tiers are not publicly disclosed"
      status: NOT_FOUND
    annual:
      value: null
      source: "Dossier says exact current membership tiers are not publicly disclosed"
      status: NOT_FOUND
    special_training:
      value: null
      source: "No verified personal training / kickboxing / class price list found"
      status: NOT_FOUND
  other_listed_prices:
    value: null
    source: "No gym-specific published prices found. The dossier mentions INR 1,500–4,000 monthly as general market context only; it is not a Pulse 24 Fitness quote and must not be used as pricing."
    status: NOT_FOUND
  admission_or_joining_fee:
    value: null
    source: "No gym-specific admission or joining fee found"
    status: NOT_FOUND
```

## 10. INSTAGRAM

```yaml
INSTAGRAM:
  profile_url:
    value: null
    source: "Dossier's branch-specific social profile search"
    status: NOT_FOUND
  handle:
    value: null
    source: "Dossier's branch-specific social profile search"
    status: NOT_FOUND
  follower_count:
    value: null
    source: "No verified official Instagram profile or count identified"
    status: NOT_FOUND
  items:

   - url:
        value: "https://www.instagram.com/reel/Dee54x8Ngue/?utm_source=ig_web_copy_link&cplk=MzRlODBiNWFlZA==&srtk=MzRlODBiNWFlZA=="
        source: "Official Instagram"
        status: VERIFIED_OFFICIAL
      type: "reel"
      posted_on:
        value: null
        source: null
        status: NOT_FOUND
      subject:
        value: "Strength training session inside the gym"
        source: "Official Instagram Reel"
        status: VERIFIED_OFFICIAL

    - url:
        value: "https://www.instagram.com/reel/Dededm2BFa2/?utm_source=ig_web_copy_link&srtk=MzRlODBiNWFlZA=="
        source: "Official Instagram"
        status: VERIFIED_OFFICIAL
      type: "reel"
      posted_on:
        value: null
        source: null
        status: NOT_FOUND
      subject:
        value: "Gym interior and equipment walkthrough"
        source: "Official Instagram Reel"
        status: VERIFIED_OFFICIAL

 - url:
        value: "https://www.instagram.com/reel/DdLOUWNR3UK/?utm_source=ig_web_copy_link&xtok=MzRlODBiNWFlZA==&srtk=MzRlODBiNWFlZA=="
        source: "Official Instagram"
        status: VERIFIED_OFFICIAL
      type: "reel"
      posted_on:
        value: null
        source: null
        status: NOT_FOUND
      subject:
        value: "Gym interior and equipment walkthrough"
        source: "Official Instagram Reel"
        status: VERIFIED_OFFICIAL
```

No individual Reel URLs were included in the report. Unrelated international accounts/pages using the same or similar name must not be assigned to this Hyderabad gym.

## 11. FAQ

```yaml
FAQ:
  - question: "What is the gym's phone number?"
    answer: "+91 93932 38007 is listed as the business phone number. Confirm it is still current before launch."
    topic: "contact"
    source: "GBP and matching third-party directory listings summarized in dossier"
    status: VERIFIED_OFFICIAL
  - question: "Where is Pulse 24 Fitness located?"
    answer: "The gym is listed in the Asif Nagar / Dattatreya Nagar area of Hyderabad, Telangana. The exact street number and landmark conflict across sources and must be confirmed before publication."
    topic: "location"
    source: "GBP, Magicpin, OnePass, Justdial and Yappe as summarized in dossier"
    status: CONFLICTING_SOURCES
  - question: "What are the opening hours?"
    answer: null
    topic: "hours"
    source: "GBP/NearMe/Justdial and Yappe report conflicting closing times; Sunday opening and closing times also differ"
    status: CONFLICTING_SOURCES
  - question: "What training services are listed?"
    answer: "Public listings mention personal training, weight training, aerobics, dance fitness, kickboxing, CrossFit-style training, adult sports, yoga/Vinyasa yoga and diet counseling. Confirm current availability and class schedules with the gym."
    topic: "programs"
    source: "GBP, Yappe and Justdial service listings summarized in dossier"
    status: PUBLICLY_REPORTED
  - question: "Is parking available?"
    answer: "A third-party listing reports parking for visitors and members. Confirm current parking availability and any restrictions with the gym."
    topic: "amenities"
    source: "Directory details summarized in dossier"
    status: PUBLICLY_REPORTED
  - question: "Does the gym provide diet counseling?"
    answer: "Personalized diet counseling is listed in the GBP content summarized by the report. The service's scope and provider qualifications are not documented in the report and should be confirmed."
    topic: "member_support"
    source: "GBP and directory content summarized in dossier"
    status: VERIFIED_OFFICIAL
  - question: "What are the membership prices?"
    answer: null
    topic: "pricing"
    source: "Dossier states exact pricing is not publicly disclosed"
    status: NOT_FOUND
  - question: "Is the gym wheelchair accessible?"
    answer: null
    topic: "accessibility"
    source: "Dossier says accessibility features were not verified"
    status: NOT_FOUND
```

## 12. SEO

```yaml
SEO:
  gym_name:
    value: "Pulse 24 Fitness"
    source: "GBP identity anchor"
    status: VERIFIED_OFFICIAL
  locality:
    value: "Asif Nagar / Dattatreya Nagar, Hyderabad"
    source: "GBP and directory listings summarized in dossier"
    status: VERIFIED_OFFICIAL
  city:
    value: "Hyderabad"
    source: "GBP and directory listings"
    status: VERIFIED_OFFICIAL
  natural_location_wording:
    value:
      - "gym in Asif Nagar, Hyderabad"
      - "fitness centre near Asif Nagar"
      - "gym near Dattatreya Nagar, Hyderabad"
      - "gym near Gems School"
      - "gym near Royal Regency Garden"
    source: "Location terms and address variants documented in source dossier; landmark terms remain conflicting"
    status: INFERRED
  title_candidate:
    value: "Pulse 24 Fitness | Gym in Asif Nagar, Hyderabad"
    source: "Normalized from researched business name, category and locality; excludes unsupported premium claims"
    status: INFERRED
  description_candidate:
    value: "Explore the training services listed for Pulse 24 Fitness in Asif Nagar, Hyderabad, including weight training, personal training, aerobics, dance fitness and kickboxing. Confirm current hours and class availability with the gym."
    source: "Normalized from dossier service and locality information"
    status: INFERRED
  alt_text_context:
    value: "Use only operator-approved images of the actual Pulse 24 Fitness facility, equipment, classes, trainers or exterior. Describe only visible, confirmed content; do not imply unsupported facilities or outcomes."
    source: "Dossier identifies need for high-resolution actual facility photography; normalization rule"
    status: INFERRED
```

## 13. ASSET_MANIFEST

```yaml
ASSET_MANIFEST:
  logo:
    value: null
    source: "Dossier says a high-resolution vector logo should be collected from the gym; no verified official logo file or URL is supplied in the PDF"
    usable: "unknown"
    status: NOT_FOUND
  candidates:
    - role: "about_interior"
      url: null
      subject: "Actual gym interior / training floor photo to be collected manually from the operator"
      source: "Operator to collect manually; dossier states high-resolution facility photography is missing"
      usable: "unknown"
      status: NOT_FOUND
    - role: "why_choose_anchor"
      url: null
      subject: "Operator-approved photo of a confirmed training service or coaching interaction"
      source: "Operator to collect manually"
      usable: "unknown"
      status: NOT_FOUND
    - role: "gallery"
      url: null
      subject: "Authentic gym floor, equipment, group classes and exterior signage photographs"
      source: "Operator to collect manually; requested in dossier action checklist"
      usable: "unknown"
      status: NOT_FOUND
    - role: "pricing_background"
      url: null
      subject: "Dark training-floor or equipment image to be collected manually by operator, if a pricing section is later approved"
      source: "Operator to collect manually"
      usable: "unknown"
      status: NOT_FOUND
    - role: "faq_background"
      url: null
      subject: "Operator-approved authentic facility image, if needed by the design system"
      source: "Operator to collect manually"
      usable: "unknown"
      status: NOT_FOUND
    - role: "og_image"
      url: null
      subject: "Approved gym brand artwork or authentic facility image; do not use unrelated namesake assets"
      source: "Operator to provide approved asset"
      usable: "unknown"
      status: NOT_FOUND
```

The dossier includes third-party image/social references for unrelated Pulse 24 namesakes only for disambiguation. They are not approved assets for this gym and are not included as candidates.

## 14. SOURCE_LOG

Access dates are not stated in the source PDF. They are therefore recorded as `null`; no access dates or direct GBP URL have been invented. Source priority is relative to suitability for this gym-specific package (1 is highest).

```yaml
SOURCE_LOG:
  - id: "S1"
    priority: 1
    type: "Owner-managed Google Business Profile evidence supplied as screenshot / identity anchor"
    url: null
    accessed: null
    fields_supplied:
      [
        "business name",
        "category",
        "phone",
        "primary address variant",
        "primary locality",
        "reported opening-hours evidence",
        "service roster",
        "diet counseling",
        "Google rating",
        "Google review count",
      ]
  - id: "S2"
    priority: 5
    type: "Third-party directory: Gym-India NearMe"
    url: "https://gym-india.nears.me/listings/india/telangana/hyderabad/highly-rated-pulse-24-fitness-hyderabad-ts/"
    accessed: null
    fields_supplied:
      [
        "phone",
        "hours",
        "equipment details",
        "general listing and pricing context",
      ]
  - id: "S3"
    priority: 5
    type: "Third-party directory: Justdial"
    url: "https://www.justdial.com/Hyderabad/Pulse-24-Fitness-Behind-Royal-Regency-Garden-Indira-Nagar-Mangalhat/040PXX40-XX40-221003205718-U1B2_BZDET"
    accessed: null
    fields_supplied:
      [
        "alternate address and landmark",
        "locality",
        "service listings",
        "amenities",
        "Yoga/Vinyasa Yoga",
        "pricing context",
      ]
  - id: "S4"
    priority: 5
    type: "Third-party directory: Magicpin"
    url: "https://magicpin.in/Hyderabad/Dattatreya-Colony/Fitness/Pulse-24-Fitness/store/1868c31"
    accessed: null
    fields_supplied:
      ["business name", "phone", "locality", "primary address variant"]
  - id: "S5"
    priority: 5
    type: "Third-party fitness platform: OnePass"
    url: "https://onepassgym.com/space/pulse-24-fitness-hyderabad-telangana-india"
    accessed: null
    fields_supplied:
      [
        "business name",
        "phone",
        "locality",
        "review excerpts",
        "rating/count comparison",
        "equipment and trainer commentary",
      ]
  - id: "S6"
    priority: 5
    type: "Third-party directory/review aggregator: Yappe"
    url: "https://yappe.in/telangana/hyderabad/pulse-24-fitness/237341"
    accessed: null
    fields_supplied:
      [
        "business name",
        "phone",
        "alternate address",
        "hours conflict",
        "service listings",
        "review excerpts",
        "rating/count comparison",
      ]
  - id: "S7"
    priority: 7
    type: "Third-party directory used only for namesake disambiguation: LyfSkills, Kolkata entity"
    url: "https://discover.lyfskills.com/gyms/listing/7843"
    accessed: null
    fields_supplied:
      ["excluded namesake comparison only; no Hyderabad business fields used"]
  - id: "S8"
    priority: 7
    type: "Facebook pages/posts used only for unrelated international namesake disambiguation"
    url: "https://www.facebook.com/fitworldfitness/photos/780930980699509/"
    accessed: null
    fields_supplied: ["excluded namesake comparison only"]
  - id: "S9"
    priority: 7
    type: "Facebook post used only for unrelated trainer/name disambiguation"
    url: "https://www.facebook.com/61551736442253/posts/thank-you-so-much-coach-aldrine-pablico-hernan-visca-lagan-kristopher-jin-cling-/122256430364057881/"
    accessed: null
    fields_supplied: ["excluded unrelated profile comparison only"]
  - id: "S10"
    priority: 7
    type: "DesignCrowd portfolio used only for unrelated Australian namesake disambiguation"
    url: "https://www.designcrowd.com/design/3624209"
    accessed: null
    fields_supplied: ["excluded namesake logo context only"]
  - id: "S11"
    priority: 7
    type: "Zarla gym website inspiration/template page; not a business source"
    url: "https://www.zarla.com/inspiration/gym"
    accessed: null
    fields_supplied:
      ["excluded mockup/domain false-positive disambiguation only"]
  - id: "S12"
    priority: 7
    type: "DesignCrowd portfolio used only for unrelated logo/namesake disambiguation"
    url: "https://www.designcrowd.com/design/3564065"
    accessed: null
    fields_supplied: ["excluded namesake asset context only"]
  - id: "S13"
    priority: 7
    type: "Justdial category page used for contextual equipment/service corroboration"
    url: "https://www.justdial.com/Hyderabad/Crossfit-Gyms-For-Men-in-Asif-Nagar/nct-12151248"
    accessed: null
    fields_supplied:
      ["contextual CrossFit/equipment details; not treated as official source"]
  - id: "S14"
    priority: 7
    type: "Justdial category page used for contextual service/amenity listings"
    url: "https://www.justdial.com/Hyderabad/Gyms-in-Asif-Nagar/nct-11575244"
    accessed: null
    fields_supplied:
      [
        "contextual gym category and amenity details; not treated as official source",
      ]
  - id: "S15"
    priority: 7
    type: "WTF Gyms / Deloitte / HFA India fitness market context"
    url: "https://wtfgymsfranchise.com/fitness-industry-india"
    accessed: null
    fields_supplied:
      ["general market context only; excluded from gym-specific facts"]
  - id: "S16"
    priority: 7
    type: "India fitness market report (macroeconomic context)"
    url: "https://www.healthandfitness.org/wp-content/uploads/India-Fitness-Market-2025_FINAL_Print.pdf"
    accessed: null
    fields_supplied:
      ["industry-wide statistics only; excluded from gym-specific facts"]
  - id: "S17"
    priority: 7
    type: "Dizi Solutions article used for web-development market context"
    url: "https://dizisolutions.in/posts/gym-fitness-website-hyderabad.php"
    accessed: null
    fields_supplied: ["context only; no gym-specific facts"]
  - id: "S18"
    priority: 7
    type: "Fast CA Help article used for Telangana trade-license context"
    url: "https://inventiontax.com/trade-license-registration-in-telangana/"
    accessed: null
    fields_supplied:
      [
        "general compliance context only; not used as evidence of this gym's licensing status",
      ]
  - id: "S19"
    priority: 7
    type: "Invention Tax Solutions article used for GHMC licensing context"
    url: "https://inventiontax.in/trade-license-registration-in-telangana/"
    accessed: null
    fields_supplied: ["general compliance context only"]
  - id: "S20"
    priority: 7
    type: "CleverCoins article used for Shops and Establishments Act context"
    url: "https://clevercoins.org/shop-establishment-license/"
    accessed: null
    fields_supplied: ["general legal context only"]
  - id: "S21"
    priority: 7
    type: "Medium article on gym member churn analytics"
    url: "https://medium.com/@dmitriy.bolotov/predicting-gym-member-churn-to-support-targeted-retention"
    accessed: null
    fields_supplied:
      ["general behavioral context only; excluded from gym-specific facts"]
```

The PDF's numbered source index contains some numbering/formatting ambiguity. The log above uses the identifiable source names and exact URLs reproduced in its Works Cited section; no missing URL has been reconstructed.

## 15. VERIFICATION_NOTES

### conflicts

```yaml
conflicts:
  - field: "LOCATION.address_line"
    values:
      - value: "12-1-645/7/4, beside Gems School, near Chandra Wines Shop, Dattatreya Nagar, Asif Nagar, Hyderabad, Telangana 500006"
        source: "GBP / Magicpin / OnePass, as summarized in the dossier"
      - value: "12-1-844/1, behind Royal Regency Garden, Indira Nagar-Mangalhat, Hyderabad, Telangana; postal code reported as 500006 or 500028"
        source: "Justdial / Yappe, as summarized in the dossier"
    note: "Do not publish a definitive street number or landmark until gym management confirms the current physical address. The dossier's preference for the GBP version is a source hierarchy recommendation, not owner confirmation."
    status: CONFLICTING_SOURCES
  - field: "LOCATION.postal_code"
    values:
      - value: "500006"
        source: "GBP / Magicpin / OnePass and majority of listings"
      - value: "500028"
        source: "Secondary address listing in Justdial/Yappe data"
    note: "Confirm the correct postal code with management before final production."
    status: CONFLICTING_SOURCES
  - field: "HOURS.monday through HOURS.saturday.close"
    values:
      - value: "12:00 AM (midnight)"
        source: "GBP / NearMe / Justdial, as summarized in dossier"
      - value: "04:00 PM"
        source: "Yappe, as summarized in dossier"
    note: "Do not resolve this by reasoning that a 16:00 close seems unlikely. Obtain current owner-confirmed hours."
    status: CONFLICTING_SOURCES
  - field: "HOURS.sunday"
    values:
      - value: "07:00–09:30"
        source: "GBP, as summarized in dossier"
      - value: "06:30–10:00"
        source: "Justdial and Yappe, as summarized in dossier"
    note: "Confirm Sunday opening and closing times with management."
    status: CONFLICTING_SOURCES
  - field: "REVIEWS.google_rating / REVIEWS.google_review_count versus other platforms"
    values:
      - value: "Google: 4.7 stars, 132 reviews"
        source: "Provided GBP screenshot as recorded in dossier"
      - value: "Justdial: 5.0 from 132 ratings; Yappe: 4.80 from 112 reviews"
        source: "Third-party directories as recorded in dossier"
    note: "These are platform-specific measurements, not necessarily a direct contradiction. Label each platform clearly and do not combine counts."
    status: CONFLICTING_SOURCES
```

### not_found

```yaml
not_found:
  - field: "BUSINESS.tagline"
    note: "No official tagline found in the report."
    sources_searched:
      ["GBP evidence", "directory listings summarized in dossier"]
    status: NOT_FOUND
  - field: "BUSINESS.year_established"
    note: "Founding year not verified; review history alone is not an establishment date."
    sources_searched:
      ["GBP", "public directory/review sources listed in dossier"]
    status: NOT_FOUND
  - field: "CONTACT.website"
    note: "No official website identified for this Hyderabad branch; do not use same-name mockups or unrelated entities."
    sources_searched:
      [
        "GBP website field",
        "domain searches described in dossier",
        "directory/social references",
      ]
    status: NOT_FOUND
  - field: "CONTACT.email"
    note: "No business email identified."
    sources_searched: ["Contact section and directories summarized in dossier"]
    status: NOT_FOUND
  - field: "CONTACT.whatsapp"
    note: "Phone number exists, but WhatsApp ownership/link was not verified."
    sources_searched: ["Dossier contact search"]
    status: NOT_FOUND
  - field: "CONTACT.instagram_url / CONTACT.instagram_handle / INSTAGRAM.items"
    note: "No official branch Instagram profile or individual Reel URLs identified. Keep items empty."
    sources_searched: ["Social profile discovery described in dossier"]
    status: NOT_FOUND
  - field: "CONTACT.facebook_url / CONTACT.youtube_url"
    note: "No official profile for this Hyderabad branch identified. Same-name international pages are excluded."
    sources_searched: ["Social profile discovery described in dossier"]
    status: NOT_FOUND
  - field: "CONTACT.booking_url"
    note: "No direct official booking URL identified; third-party lead forms are not an official booking portal."
    sources_searched: ["Justdial/Magicpin inquiry references in dossier"]
    status: NOT_FOUND
  - field: "LOCATION.map_url / LOCATION.latitude / LOCATION.longitude"
    note: "The report mentions a Google Maps link through the GBP interface but does not reproduce the exact URL or coordinates."
    sources_searched: ["GBP interface evidence as described in dossier"]
    status: NOT_FOUND
  - field: "PRICING.plans / PRICING.admission_or_joining_fee"
    note: "No exact gym-specific price list or joining fee. Do not use general Hyderabad market ranges as the gym's price."
    sources_searched:
      ["GBP and directory pricing information summarized in dossier"]
    status: NOT_FOUND
  - field: "PROGRAMS.class_schedules"
    note: "No exact days/times, class capacities or intensity levels for aerobics, CrossFit-style training, yoga or kickboxing."
    sources_searched:
      ["GBP and directory service listings summarized in dossier"]
    status: NOT_FOUND
  - field: "ABOUT.story / BUSINESS.owner_founder"
    note: "Founder, ownership, management names, establishment year, mission and brand story are not verified."
    sources_searched: ["Dossier business-level research"]
    status: NOT_FOUND
  - field: "TRAINERS.qualifications"
    note: "Ajay is named in reviews, but formal qualifications, certifications, experience duration and full name are not verified."
    sources_searched:
      ["Public review excerpts and directory information summarized in dossier"]
    status: NOT_FOUND
  - field: "ASSET_MANIFEST.logo / ASSET_MANIFEST.candidates"
    note: "No operator-approved high-resolution logo or authentic gym photography URL/file is supplied by the PDF. Collect assets from the operator."
    sources_searched: ["Dossier asset/action checklist"]
    status: NOT_FOUND
  - field: "TRANSFORMATION_DATA"
    note: "No verified, consented quantitative transformation cases, clinical/body metrics or approved before/after photographs are available."
    sources_searched: ["Dossier transformation-data review"]
    status: NOT_FOUND
  - field: "REVIEWS.google_profile_url"
    note: "Exact GBP URL is not reproduced in the source report."
    sources_searched: ["Dossier review-data section"]
    status: NOT_FOUND
  - field: "ABOUT.accessibility"
    note: "Wheelchair access, ramps and specialized elevators are not verified."
    sources_searched: ["Dossier branch-level facts"]
    status: NOT_FOUND
```

### publicly_reported_only

```yaml
publicly_reported_only:
  - field: "BUSINESS.branch_count"
    note: "Single location is a conclusion from public directory/branch searches, not owner confirmation."
  - field: "BUSINESS.description"
    note: "Normalized from listing content; approve final wording with owner."
  - field: "CONTACT.phone"
    note: "Consistent across GBP and directories; reconfirm current number before production."
  - field: "LOCATION.locality"
    note: "Locality variants differ across sources; owner confirmation required."
  - field: "HOURS.*"
    note: "Owner verification required because weekday closing and Sunday hours conflict."
  - field: "ABOUT.*"
    note: "Positioning and service-zone interpretations are not an owner-provided brand story."
  - field: "PROGRAMS.*"
    note: "Confirm each listed service remains active and verify schedules; Yoga/Vinyasa Yoga and Weight Management rely on directory-level evidence."
  - field: "WHY_CHOOSE_US.*"
    note: "Anchors derive from public listings/reviews; approve claims and avoid absolute promises."
  - field: "REVIEWS.selected_reviews"
    note: "Publicly reported quotations only; obtain explicit commercial-use consent before displaying names or quotes."
  - field: "REVIEWS.sentiment_summary"
    note: "Synthesis of multiple public reviews, including negative feedback; it is not an official business statement."
  - field: "FAQ.*"
    note: "FAQs are limited to facts reported by the source; resolve address and hours conflicts before publishing."
  - field: "ASSET_MANIFEST.*"
    note: "Operator must supply approved brand and facility assets; third-party images are not presumed licensed or approved."
```

### owner_questions

1. What is the exact current address, including building number, landmark and postal code: `12-1-645/7/4` near Gems School/Chandra Wines Shop, or `12-1-844/1` behind Royal Regency Garden? Has the gym moved?
2. What are the current opening and closing hours for Monday through Saturday, and the exact Sunday hours?
3. Is `+91 93932 38007` still the correct public phone number? Is it also an official WhatsApp Business number, and if so, what link should be used?
4. What official email address should appear on the website?
5. Does the gym have an official website, Instagram, Facebook or YouTube profile? Please provide exact official URLs/handles.
6. What are the exact current prices for day passes, weekly, monthly, quarterly, half-yearly and annual memberships, joining/admission fees, personal training and special classes?
7. Which services are currently active: personal training, weight training, aerobics, dance fitness, kickboxing, CrossFit-style training, adult sports, yoga, Vinyasa yoga, weight management and diet counseling?
8. What are the class days/times, capacity limits and level requirements for each group program?
9. Is Coach Ajay currently on staff? What is his full name, role, approved biography, experience and verifiable qualifications/certifications? Who else should be profiled?
10. What exactly does diet counseling include, who provides it, and what qualifications may be accurately stated? Are there boundaries or disclaimers the gym wants reflected?
11. Are parking, changing rooms and restrooms currently available? What are the parking arrangements and any relevant limitations?
12. What accessibility features are present, including step-free access, ramps and accessible restrooms?
13. Can management provide the exact Google Business Profile URL and current confirmation of rating/review count?
14. Can the gym obtain written permission from reviewers before using the named review quotations commercially?
15. Can the operator supply the final high-resolution/vector logo (SVG/EPS or transparent PNG) and approved photographs of the actual interior, equipment, trainers, group classes and exterior signage?
16. Are there approved Instagram Reel URLs or other content URLs to add later? Do not create placeholder Reel URLs.
17. What is the establishment year, founder/owner name and approved brand story, if the owner wants these published?
18. Are there member transformation cases with verifiable metrics and explicit written photo/testimonial consent? If not, leave transformation content absent.
19. What are the official membership cancellation, freeze, locker, age and payment policies? Which payment methods are actually accepted?

````

## 16. EXCLUDED_BY_CONTRACT

```yaml
EXCLUDED_BY_CONTRACT:
  - item: "Transformations"
    handling: "No gym-specific transformation copy, metrics or before/after claims are supplied. Source report says verified, consented quantitative cases are unavailable."
  - item: "Hero copy and artwork"
    handling: "Factory/template layer. Use only approved real gym assets and separately approved copy; do not turn inferred differentiators into verified claims."
  - item: "Training Intelligence"
    handling: "Factory/template layer; no gym-specific module content included."
  - item: "Between Sessions educational content"
    handling: "Factory/template layer; no gym-specific educational articles included."
  - item: "Section headings and labels"
    handling: "Factory/template layer; not normalized as gym facts."
  - item: "Discount percentages"
    handling: "No discounts or promotional percentages supplied; do not invent."
  - item: "Promotional terms"
    handling: "No offers, trial terms, deadlines or promotions supplied; do not invent."
  - item: "Health, nutrition or physiological claims"
    handling: "Do not claim guaranteed weight/fat loss, injury prevention, posture correction, recovery benefits, calorie expenditure or medical outcomes. Any educational content must be handled separately and must not imply a gym-specific medical service without evidence."
  - item: "Generic industry statistics"
    handling: "Industry-wide statistics in the dossier are not facts about Pulse 24 Fitness and are excluded from website business claims."
  - item: "Unrelated namesake assets"
    handling: "Do not use logos, websites, social profiles or imagery associated with Pulse 24 entities in Kolkata, Australia or other regions."
````

## Final build guardrails

- Treat `CONFLICTING_SOURCES` as blocked from publication until owner resolution.
- Treat `NOT_FOUND` as `null`; do not fill from general knowledge or competitor benchmarks.
- `VERIFIED_OFFICIAL` identifies information attributed by the source dossier to the supplied GBP identity anchor. It does not mean that a current owner re-confirmed it during this normalization task.
- Third-party reviews are not owner testimonials; obtain consent before commercial reuse.
- The dossier's descriptions of Coach Ajay's impact are review-based. Do not publish his qualifications, experience duration or guaranteed transformation outcomes without evidence.
- Do not publish the general market monthly range cited in the dossier as Pulse 24 Fitness pricing.
- The report supplies no exact source access dates or exact Google Maps/GBP URLs; these remain `null`.
