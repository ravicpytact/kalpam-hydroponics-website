/**
 * Verified Google reviews — Kalpam Landscaping Google Business Profile.
 * Displayed on homepage Testimonials section (reviews with written text).
 *
 * Last updated: 2026-07-27
 */

export type GoogleReview = {
  id: string;
  author: string;
  rating: number;
  /** Omitted when Google shows rating only (no written review). */
  quote?: string;
  /** Relative time from Google, e.g. "10 months ago" */
  postedAgo?: string;
  /** Google reviewer badge, if any */
  badge?: string;
  source: "Google";
};

/** Client-supplied Google reviews — add new entries to the end of this list. */
export const GOOGLE_REVIEWS: readonly GoogleReview[] = [
  {
    id: "rambha-vaghela",
    author: "Rambha Vaghela",
    rating: 5,
    postedAgo: "11 months ago",
    badge: "Local Guide · 3 reviews · 3 photos",
    quote:
      "Kalpam Landscaping truly stands out with their creativity, professionalism, and dedication. The team doesn't just build gardens – they transform spaces into living artworks that feel refreshing and inspiring. Every detail, from design planning to execution, was handled with care and precision. I was especially impressed with their innovative ideas and timely service. If you're looking for a landscaping company that delivers more than just plants – but a complete experience of beauty, quality, and trust – Kalpam Landscaping is the name to go with.",
    source: "Google",
  },
  {
    id: "mehul-jetani",
    author: "Mehul Jetani",
    rating: 5,
    postedAgo: "10 months ago",
    badge: "Local Guide · 70 reviews · 327 photos",
    quote:
      "Overall, a great experience with Kalpam Landscaping! The staff is friendly and helpful, and they provide excellent maintenance. My garden looks fantastic now. Highly recommend!",
    source: "Google",
  },
  {
    id: "hitesh-kheni",
    author: "Hitesh Kheni",
    rating: 5,
    postedAgo: "7 months ago",
    badge: "Local Guide · 97 reviews · 5 photos",
    quote:
      "Outstanding landscaping service from start to finish. The team arrived on time, worked efficiently, and executed the design perfectly. Their knowledge of plants, layout ideas, and maintenance tips was impressive. My garden looks stunning now. I highly recommend KALPAM'S services!",
    source: "Google",
  },
  {
    id: "vishwa-vaniawala",
    author: "Vishwa Vaniawala",
    rating: 5,
    postedAgo: "9 months ago",
    badge: "Local Guide · 23 reviews · 2 photos",
    quote:
      "Got my new home's balcony design from Kalpam landscaping. Been a very good experience, right choice of plants and sustainable guidance. Thanks 😊",
    source: "Google",
  },
  {
    id: "patel-mitesh",
    author: "Patel Mitesh",
    rating: 5,
    postedAgo: "a year ago",
    badge: "8 reviews",
    quote:
      "It has been great experience with kalpam landscaping. Its service was amazing. Especially vandan italia has good knowledge and experience whenever i have any kind of questions. He always ready to provide me genuine answer with explanations. If anyone looking any kind landscaping or hydroponic related work, I would highly recommend to kalpam landscaping.",
    source: "Google",
  },
  {
    id: "vivek-akbari",
    author: "Vivek Akbari",
    rating: 5,
    postedAgo: "a year ago",
    badge: "4 reviews · 2 photos",
    quote:
      "One of the best garden and landscaping services we have seen and received. Vandanbhai and entire Kalpam team is highly experienced, Honestly, I have never seen someone doing with such experience and grace in entire gujarat.",
    source: "Google",
  },
  {
    id: "ridhdhi-patel",
    author: "Ridhdhi Patel",
    rating: 5,
    postedAgo: "a year ago",
    badge: "2 reviews",
    quote:
      "They have a true talent for creating the perfect picture of your dream landscapes. Their personnel wear company uniforms, so I can identify everyone in my yard. We highly recommend it without any hesitation.",
    source: "Google",
  },
  {
    id: "hasanabbas-masi",
    author: "Hasanabbas Masi",
    rating: 5,
    postedAgo: "a year ago",
    badge: "3 reviews",
    quote:
      "We were very impressed with the quality of work and the professionalism of the crew from kalpam landscaping. They were always on time, courteous, and responsive to our questions.",
    source: "Google",
  },
  {
    id: "vishnu-prajapati",
    author: "Vishnu Prajapati",
    rating: 5,
    postedAgo: "a year ago",
    badge: "2 reviews",
    quote:
      "Very good experience with Kalpam landscaping. Their work is too good and excellent design of garden in terms of all garden perspectives. Kalpam landscaping gives our House new esthetic look in nature way 🏡🏡🏡",
    source: "Google",
  },
  {
    id: "vaibhav-vaghasiya",
    author: "Vaibhav Vaghasiya",
    rating: 5,
    postedAgo: "a year ago",
    badge: "Local Guide · 24 reviews · 2 photos",
    quote:
      "From thoughtful planning to seamless implementation, work combines artistic vision with dependable service. An excellent option for transforming any outdoor space into a refined and inviting setting.",
    source: "Google",
  },
  {
    id: "dhruvi-shah",
    author: "Dhruvi Shah",
    rating: 5,
    postedAgo: "a year ago",
    badge: "4 reviews",
    quote:
      "They were professional, efficient, went above and beyond and created a beautiful garden as per our dreams and imagination. I highly recommend them.",
    source: "Google",
  },
  {
    id: "yash-trivedi",
    author: "Yash Trivedi",
    rating: 5,
    postedAgo: "a year ago",
    badge: "Local Guide · 25 reviews · 1 photo",
    quote:
      "Excellent landscaping knowledge and best garden creation company. Prices are affordable too.",
    source: "Google",
  },
  {
    id: "bhautik-sachapara",
    author: "Bhautik Sachapara",
    rating: 5,
    postedAgo: "a year ago",
    badge: "3 reviews",
    quote:
      "Great service of hydroponics along with landscaping, kalpam helps us with their extraordinary service.",
    source: "Google",
  },
  {
    id: "kruti-patel",
    author: "Kruti Patel",
    rating: 5,
    postedAgo: "2 months ago",
    badge: "Local Guide · 19 reviews · 10 photos",
    quote: "Their product and service are great",
    source: "Google",
  },
  {
    id: "pratik-sabhadiya",
    author: "Pratik Sabhadiya",
    rating: 5,
    postedAgo: "a year ago",
    badge: "8 reviews",
    quote:
      "Excellent Service, product and management by Mr. Vandan. Highly recommend...",
    source: "Google",
  },
  {
    id: "dashrath-chaudhary",
    author: "Dashrath Chaudhary",
    rating: 5,
    postedAgo: "a year ago",
    badge: "Local Guide · 21 reviews · 28 photos",
    quote:
      "Unimaginable landscaping expertise, never thought of these kind services I can get thoroughly.",
    source: "Google",
  },
  {
    id: "dhrumeshkumar-chavda",
    author: "Dhrumeshkumar Chavda",
    rating: 5,
    postedAgo: "a year ago",
    badge: "3 reviews",
    quote: "Very excellent service and dynamic views of design in the landscaping.",
    source: "Google",
  },
  {
    id: "bhavik-patel",
    author: "Bhavik Patel",
    rating: 5,
    postedAgo: "a year ago",
    badge: "Local Guide · 96 reviews · 173 photos",
    quote:
      "The ideas they brought to redevelopment of gardens and private spaces are mesmerizing.",
    source: "Google",
  },
  {
    id: "mit-borda",
    author: "Mit Borda",
    rating: 5,
    postedAgo: "a year ago",
    badge: "1 review",
    quote: "Best garden services in surat and best Landscaping service in surat",
    source: "Google",
  },
  {
    id: "mital-akbari",
    author: "Mital Akbari",
    rating: 5,
    postedAgo: "a year ago",
    badge: "3 reviews",
    quote: "Superb knowledge of plants and landscaping. Great experience!",
    source: "Google",
  },
  {
    id: "shivanta-polyplast",
    author: "Shivanta Polyplast",
    rating: 5,
    postedAgo: "a year ago",
    badge: "2 reviews",
    quote: "Kalpam landscaping is perfect to choice for any landscaping service.",
    source: "Google",
  },
  {
    id: "ruchir-patel",
    author: "Ruchir Patel",
    rating: 5,
    postedAgo: "a year ago",
    badge: "Local Guide · 6 reviews · 19 photos",
    quote: "Very good service and knowledge, professional work",
    source: "Google",
  },
  {
    id: "dhruv-savaliya",
    author: "Dhruv Savaliya",
    rating: 5,
    postedAgo: "a year ago",
    badge: "6 reviews · 4 photos",
    quote: "Excellent Service with Polite staff",
    source: "Google",
  },
  {
    id: "lovis",
    author: "Lovis",
    rating: 5,
    postedAgo: "a year ago",
    badge: "2 reviews",
    quote: "Unique Landscaping desgin Amazing Work",
    source: "Google",
  },
  {
    id: "sagar-halwawala",
    author: "Sagar Halwawala",
    rating: 5,
    postedAgo: "9 months ago",
    badge: "9 reviews",
    quote: "Best customer service",
    source: "Google",
  },
  {
    id: "jeel-kachhadiya",
    author: "Jeel Kachhadiya",
    rating: 5,
    postedAgo: "a year ago",
    badge: "4 reviews · 3 photos",
    quote: "Best service",
    source: "Google",
  },
  {
    id: "prince-umaretiya",
    author: "Prince Umaretiya",
    rating: 5,
    postedAgo: "a year ago",
    badge: "4 reviews",
    quote: "Best service",
    source: "Google",
  },
  {
    id: "naitik-italiya",
    author: "Naitik Italiya",
    rating: 5,
    postedAgo: "a month ago",
    badge: "5 reviews",
    source: "Google",
  },
  {
    id: "krupa-pawar",
    author: "Krupa Pawar",
    rating: 5,
    postedAgo: "8 months ago",
    badge: "3 reviews · 5 photos",
    source: "Google",
  },
  {
    id: "harsh-patel",
    author: "Harsh Patel",
    rating: 5,
    postedAgo: "a year ago",
    badge: "7 reviews · 2 photos",
    source: "Google",
  },
  {
    id: "vithlapara-mahesh",
    author: "Vithlapara Mahesh",
    rating: 5,
    postedAgo: "a year ago",
    badge: "5 reviews",
    source: "Google",
  },
] as const;

/** Reviews with written text — used for homepage testimonials grid. */
export const GOOGLE_REVIEWS_WITH_TEXT = GOOGLE_REVIEWS.filter(
  (review): review is GoogleReview & { quote: string } => Boolean(review.quote?.trim()),
);

/** Testimonials grid — excludes featured review shown in credibility section. */
export const GOOGLE_REVIEWS_FOR_TESTIMONIALS = GOOGLE_REVIEWS_WITH_TEXT.filter(
  (review) => review.id !== "rambha-vaghela",
);
