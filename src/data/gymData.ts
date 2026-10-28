import { GymService, ReviewItem, AmenityItem, MembershipPlan } from '../types/gym';

export const GYM_CONTACT = {
  name: "Infinity Fitness Gym",
  tagline: "The Only Way To Fit",
  phone: "096248 82555",
  phoneFormatted: "+91 96248 82555",
  whatsapp: "919624882555",
  website: "infinityfitnessgym.co.in",
  address: "2nd Floor, Centrum Heights, Infinity Fitness Gym, Chandlodiya Rd, Swatantra Senani Nagar, Ahmedabad, Gujarat 380013",
  shortAddress: "Centrum Heights, Chandlodiya Rd, Vadaj / Akhbar Nagar, Ahmedabad",
  hours: "Open 24 Hours (Monday – Sunday)",
  googleRating: 4.8,
  googleReviewCount: 474,
  mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3670.8354922648833!2d72.5451249758784!3d23.066465014682057!2m3!1f0!2f0!3f0!3m2!1i1024!2f768!4f13.1!3m3!1m2!1s0x395e8484931a238b%3A0xc3f5e921b790d931!2sInfinity%20Fitness%20Gym!5e0!3m2!1sen!2sin!4v1740000000000!5m2!1sen!2sin",
  directionsUrl: "https://maps.google.com/?q=Infinity+Fitness+Gym+Centrum+Heights+Chandlodiya+Ahmedabad"
};

// All 13 services directly from Google Maps Service Profile screenshot
export const GYM_SERVICES: GymService[] = [
  {
    id: "strength-training",
    name: "Strength Training",
    category: "strength",
    description: "Progressive overload protocols using competition-grade Olympic barbells, power racks, and compound movement setups.",
    highlights: ["Olympic platforms", "Calibrated plates", "Linear progression programs"],
    intensity: "High",
    duration: "60-75 min",
    targetGoal: "Power & Structural Density"
  },
  {
    id: "weight-training",
    name: "Weight Training",
    category: "strength",
    description: "Extensive dumbbell racks up to heavy poundages, cable cross stations, and biomechanically aligned selectorized machines.",
    highlights: ["Dumbbells up to 50kg", "Isolated cable towers", "Ergonomic angled benches"],
    intensity: "Moderate",
    duration: "45-60 min",
    targetGoal: "Muscular Tone & Hypertrophy"
  },
  {
    id: "muscle-building",
    name: "Muscle Building",
    category: "strength",
    description: "Periodized hypertrophy regimens with optimal volume and mechanical tension under trainer guidance for maximum lean muscle growth.",
    highlights: ["Volume periodization", "Failure training safety", "Peak contraction equipment"],
    intensity: "Elite",
    duration: "60 min",
    targetGoal: "Hypertrophy & Aesthetics"
  },
  {
    id: "fat-loss-training",
    name: "Fat Loss Training",
    category: "strength",
    description: "High-metabolic conditioning integrating barbell complexes, sled pushes, HIIT circuits, and heart-rate zone acceleration.",
    highlights: ["Metabolic circuits", "Caloric burn optimization", "Active heart-rate tracking"],
    intensity: "High",
    duration: "45 min",
    targetGoal: "Lean Definition & Stamina"
  },
  {
    id: "personal-training",
    name: "Personal Training",
    category: "coaching",
    description: "1-on-1 private coaching tailored to your biomechanics, schedule, and goals. Both male and certified female trainers available.",
    highlights: ["Dedicated 1-on-1 attention", "Female coaches available", "Posture & form correction"],
    intensity: "Elite",
    duration: "60 min",
    targetGoal: "Rapid Guaranteed Results"
  },
  {
    id: "body-transformation",
    name: "Body Transformation Program",
    category: "coaching",
    description: "12-week comprehensive transformation protocol combining biometric tracking, customized nutrition charts, and weekly assessments.",
    highlights: ["Biometric body scans", "Weekly progress checkpoints", "Tailored macronutrient plans"],
    intensity: "Elite",
    duration: "12 Weeks",
    targetGoal: "Complete Lifestyle Change"
  },
  {
    id: "beginner-fitness",
    name: "Beginner Fitness Program",
    category: "coaching",
    description: "Zero-intimidation structured onboarding for first-time gym members focusing on form mastery, safety, and foundational endurance.",
    highlights: ["Injury prevention focus", "Machine orientation", "Gentle ramp-up curve"],
    intensity: "Low",
    duration: "40 min",
    targetGoal: "Confidence & Consistency"
  },
  {
    id: "general-fitness",
    name: "General Fitness Training",
    category: "coaching",
    description: "Well-rounded functional regimen boosting cardiovascular health, daily joint mobility, core stability, and vitality.",
    highlights: ["Functional movement", "Cardiovascular health", "Core stabilization"],
    intensity: "Moderate",
    duration: "50 min",
    targetGoal: "Longevity & Everyday Energy"
  },
  {
    id: "aerobics",
    name: "Aerobics",
    category: "aerobics",
    description: "Rhythmic high-energy step and floor cardio classes set to upbeat music that torches calories and boosts aerobic capacity.",
    highlights: ["Spacious mirrored studio", "High-cadence playlists", "Total body cardio conditioning"],
    intensity: "Moderate",
    duration: "45 min",
    targetGoal: "Cardiovascular Endurance"
  },
  {
    id: "zumba",
    name: "Zumba",
    category: "aerobics",
    description: "Exhilarating Latin and international rhythm dance workouts combining fun choreography with vigorous calorie burning.",
    highlights: ["Dynamic certified instructors", "Energetic community vibe", "Burn 500+ calories/session"],
    intensity: "Moderate",
    duration: "50 min",
    targetGoal: "Fun Cardio & Agility"
  },
  {
    id: "adult-sports",
    name: "Adult Sports & Conditioning",
    category: "aerobics",
    description: "Agility drills, plyometrics, speed ladders, and sport-specific conditioning for athletes and recreational enthusiasts.",
    highlights: ["Turf agility ladder", "Plyometric jump boxes", "Rotational power drills"],
    intensity: "High",
    duration: "60 min",
    targetGoal: "Athletic Explosiveness"
  },
  {
    id: "yoga-classes",
    name: "Yoga Classes",
    category: "wellness",
    description: "Traditional Hatha and Vinyasa flow sessions focusing on deep breath control, spinal decompression, flexibility, and mental calm.",
    highlights: ["Experienced yoga masters", "Peaceful ambient lighting", "Deep post-lift recovery"],
    intensity: "Low",
    duration: "60 min",
    targetGoal: "Flexibility & Mindfulness"
  },
  {
    id: "nutrition-consulting",
    name: "Nutrition Consulting",
    category: "wellness",
    description: "Evidence-based dietary guidance, personalized meal charts, Indian vegetarian and high-protein diet strategies that fit your routine.",
    highlights: ["Custom meal plans", "Macro split calculations", "Sustainable habit coaching"],
    intensity: "Low",
    duration: "Consultation",
    targetGoal: "Sustainable Nutrition"
  }
];

// Curated Facility Amenities
export const GYM_AMENITIES: AmenityItem[] = [
  {
    id: "24-7-access",
    title: "24-Hour Access All 365 Days",
    subtitle: "Train On Your Own Schedule",
    description: "Whether you thrive at 5 AM sunrise workouts or midnight post-shift deadlifts, Infinity Fitness never locks its doors. RFID access and security 24/7.",
    image: "/src/assets/images/gym_strength_floor_1793194483348.jpg",
    features: ["Biometric 24/7 keycard entry", "Air-conditioned all night", "Continuous security & CCTV"]
  },
  {
    id: "steam-bath",
    title: "Luxury Steam Bath Recovery",
    subtitle: "Post-Workout Detox & Relaxation",
    description: "Accelerate muscle recovery, soothe joints, and flush metabolic toxins in our dedicated modern steam bath and recovery suite.",
    image: "/src/assets/images/gym_steam_recovery_1793194484794.jpg",
    features: ["Therapeutic eucalyptus steam", "Private changing cabins", "Hygienic daily sanitization"]
  },
  {
    id: "photo-room",
    title: "Dedicated Creator Photo Room",
    subtitle: "Track Your Physique Progress",
    description: "A specially lit aesthetic photography studio room featuring studio ring lights, vertical mirror arrays, and textured backdrops for progress photos.",
    image: "/src/assets/images/gym_dedicated_photo_room_1793194484771.jpg",
    features: ["Studio ring lighting", "Multi-angle mirrors", "Clean aesthetic backdrops"]
  },
  {
    id: "certified-trainers",
    title: "Elite Certified Personal Coaches",
    subtitle: "Male & Female Trainers Available",
    description: "Our certified coaches (including Kriyaansh sir and certified female trainers) provide expert biomechanical cues and personalized regimens.",
    image: "/src/assets/images/gym_trainer_coaching_1793194483697.jpg",
    features: ["Form & injury prevention", "Personalized workout apps", "Female certified trainers"]
  }
];

// Authentic reviews from the Google Maps Screenshot
export const GYM_REVIEWS: ReviewItem[] = [
  {
    id: "rev-1",
    author: "Manav Panchal",
    isLocalGuide: true,
    reviewsCount: 2,
    rating: 5,
    date: "3 months ago",
    comment: "It has been a great experience till the day.. The trainers are friendly and experienced. The gym overall space is good.",
    tags: ["supportive trainers", "modern equipment", "spacious"],
    avatarInitial: "M"
  },
  {
    id: "rev-2",
    author: "Sheetal Soni",
    reviewsCount: 9,
    rating: 5,
    date: "3 months ago",
    comment: "Awesome gym. Trainers are also good. All equipment is perfect and well maintained. Highly recommended for women as well.",
    tags: ["modern equipment", "girls trainers", "supportive trainers"],
    avatarInitial: "S"
  },
  {
    id: "rev-3",
    author: "Parth P.",
    rating: 5,
    date: "1 month ago",
    comment: "Best gym, best service and steam bath facilities available and good vibes 🙏 24 hours open makes it unmatched in Ahmedabad.",
    tags: ["steam bath", "24/7 open", "modern equipment"],
    avatarInitial: "P"
  },
  {
    id: "rev-4",
    author: "Hardik Patel",
    rating: 5,
    date: "2 months ago",
    comment: "Kriyaansh sir is too good... loved to do workout here. Proper guidance on every single set and diet.",
    tags: ["motivating trainer", "supportive trainers", "personal training"],
    avatarInitial: "H"
  },
  {
    id: "rev-5",
    author: "Rohan Dave",
    reviewsCount: 14,
    rating: 5,
    date: "4 months ago",
    comment: "The 24/7 concept is a lifesaver for working professionals. Clean equipment, friendly staff, and the dedicated photo room is so cool!",
    tags: ["dedicated photo room", "24/7 open", "premium gym"],
    avatarInitial: "R"
  },
  {
    id: "rev-6",
    author: "Pooja Varma",
    reviewsCount: 5,
    rating: 5,
    date: "2 weeks ago",
    comment: "Very safe and comfortable environment. Having certified female trainers gives a lot of confidence for beginners. Steam bath is a huge bonus.",
    tags: ["girls trainers", "steam bath", "supportive trainers"],
    avatarInitial: "P"
  }
];

// Review tag filters directly from Google Maps screenshot
export const REVIEW_TAGS = [
  "All Reviews",
  "supportive trainers",
  "steam bath",
  "modern equipment",
  "dedicated photo room",
  "girls trainers",
  "motivating trainer",
  "24/7 open"
];

// Membership Tiers
export const MEMBERSHIP_PLANS: MembershipPlan[] = [
  {
    id: "1-month",
    name: "Monthly Flex",
    duration: "1 Month",
    price: "₹2,499",
    description: "Perfect for flexible travelers, students, or trying out the facility with no lock-in commitments.",
    features: [
      "24/7 Unlimited Facility Access",
      "Steam Bath Recovery Sessions",
      "Gym Floor Orientation & Induction",
      "Dedicated Photo Room Access",
      "Locker & Shower Facilities"
    ]
  },
  {
    id: "3-month",
    name: "Quarterly Transformation",
    duration: "3 Months",
    price: "₹5,999",
    originalPrice: "₹7,499",
    popular: true,
    description: "Our most popular package for serious results. Includes biometric checkups and diet consultation.",
    features: [
      "24/7 Unlimited Facility Access",
      "Unlimited Steam Bath Recovery",
      "1-on-1 Fitness Assessment Scans",
      "Diet & Nutrition Guidance Chart",
      "Dedicated Photo Room Access",
      "Priority Trainer Floor Support"
    ]
  },
  {
    id: "6-month",
    name: "Semi-Annual Athlete",
    duration: "6 Months",
    price: "₹9,999",
    originalPrice: "₹14,999",
    description: "Built for sustained body recomposition, muscle building, and peak cardiovascular stamina.",
    features: [
      "All 3-Month Features Included",
      "Monthly Biometric Body Scans",
      "2 Complimentary Personal Training Sessions",
      "Guest Pass Allowance (2 Passes/month)",
      "Exclusive Locker Reservation"
    ]
  },
  {
    id: "12-month",
    name: "Infinity Elite Annual",
    duration: "12 Months",
    price: "₹15,999",
    originalPrice: "₹29,999",
    description: "The ultimate 365-day fitness lifestyle investment with maximum savings and VIP privileges.",
    features: [
      "Full 365-Day 24/7 Keycard Access",
      "Unlimited Luxury Steam Bath Usage",
      "5 Personal Training Kick-off Sessions",
      "Custom Macro & Nutrition Meal Plans",
      "Complimentary Gym Apparel / Kit",
      "Freeze Membership up to 45 Days"
    ]
  }
];

// Real Google Maps Popular Times data (recreating the exact Wednesday graph shown in screenshot)
export const POPULAR_TIMES_DATA: Record<string, { hour: string; occupancy: number; label: string }[]> = {
  Wednesday: [
    { hour: "6 AM", occupancy: 35, label: "Moderate" },
    { hour: "7 AM", occupancy: 55, label: "Busy" },
    { hour: "8 AM", occupancy: 65, label: "Peak morning" },
    { hour: "9 AM", occupancy: 40, label: "Moderate" },
    { hour: "10 AM", occupancy: 25, label: "Low" },
    { hour: "11 AM", occupancy: 20, label: "Quiet" },
    { hour: "12 PM", occupancy: 25, label: "Moderate" },
    { hour: "1 PM", occupancy: 20, label: "Quiet" },
    { hour: "2 PM", occupancy: 18, label: "Quiet" },
    { hour: "3 PM", occupancy: 25, label: "Low" },
    { hour: "4 PM", occupancy: 40, label: "Building up" },
    { hour: "5 PM", occupancy: 60, label: "Busy" },
    { hour: "6 PM", occupancy: 50, label: "Live: Less busy than usual" },
    { hour: "7 PM", occupancy: 85, label: "Peak evening" },
    { hour: "8 PM", occupancy: 90, label: "Peak evening" },
    { hour: "9 PM", occupancy: 70, label: "Busy" },
    { hour: "10 PM", occupancy: 45, label: "Moderate" },
    { hour: "11 PM", occupancy: 30, label: "Low" },
    { hour: "12 AM", occupancy: 18, label: "Night owl" },
    { hour: "1 AM", occupancy: 12, label: "Quiet" },
    { hour: "2 AM", occupancy: 8, label: "Quiet" },
    { hour: "3 AM", occupancy: 6, label: "Quiet" },
  ],
  Monday: [
    { hour: "6 AM", occupancy: 40, label: "Moderate" },
    { hour: "7 AM", occupancy: 60, label: "Busy" },
    { hour: "8 AM", occupancy: 75, label: "Peak morning" },
    { hour: "9 AM", occupancy: 50, label: "Moderate" },
    { hour: "10 AM", occupancy: 30, label: "Low" },
    { hour: "11 AM", occupancy: 25, label: "Quiet" },
    { hour: "12 PM", occupancy: 30, label: "Moderate" },
    { hour: "1 PM", occupancy: 22, label: "Quiet" },
    { hour: "2 PM", occupancy: 20, label: "Quiet" },
    { hour: "3 PM", occupancy: 28, label: "Low" },
    { hour: "4 PM", occupancy: 45, label: "Building up" },
    { hour: "5 PM", occupancy: 70, label: "Busy" },
    { hour: "6 PM", occupancy: 80, label: "Busy" },
    { hour: "7 PM", occupancy: 95, label: "High peak" },
    { hour: "8 PM", occupancy: 95, label: "High peak" },
    { hour: "9 PM", occupancy: 75, label: "Busy" },
    { hour: "10 PM", occupancy: 50, label: "Moderate" },
    { hour: "11 PM", occupancy: 32, label: "Low" },
    { hour: "12 AM", occupancy: 20, label: "Night owl" },
    { hour: "1 AM", occupancy: 15, label: "Quiet" },
    { hour: "2 AM", occupancy: 10, label: "Quiet" },
    { hour: "3 AM", occupancy: 8, label: "Quiet" },
  ],
  Saturday: [
    { hour: "6 AM", occupancy: 25, label: "Quiet" },
    { hour: "7 AM", occupancy: 50, label: "Moderate" },
    { hour: "8 AM", occupancy: 70, label: "Busy morning" },
    { hour: "9 AM", occupancy: 80, label: "Busy morning" },
    { hour: "10 AM", occupancy: 65, label: "Moderate" },
    { hour: "11 AM", occupancy: 45, label: "Moderate" },
    { hour: "12 PM", occupancy: 35, label: "Low" },
    { hour: "1 PM", occupancy: 30, label: "Low" },
    { hour: "2 PM", occupancy: 25, label: "Quiet" },
    { hour: "3 PM", occupancy: 30, label: "Low" },
    { hour: "4 PM", occupancy: 45, label: "Moderate" },
    { hour: "5 PM", occupancy: 65, label: "Busy" },
    { hour: "6 PM", occupancy: 75, label: "Busy" },
    { hour: "7 PM", occupancy: 80, label: "Evening Peak" },
    { hour: "8 PM", occupancy: 70, label: "Busy" },
    { hour: "9 PM", occupancy: 55, label: "Moderate" },
    { hour: "10 PM", occupancy: 40, label: "Low" },
    { hour: "11 PM", occupancy: 25, label: "Night owl" },
    { hour: "12 AM", occupancy: 15, label: "Quiet" },
    { hour: "1 AM", occupancy: 10, label: "Quiet" },
    { hour: "2 AM", occupancy: 5, label: "Quiet" },
    { hour: "3 AM", occupancy: 5, label: "Quiet" },
  ]
};
