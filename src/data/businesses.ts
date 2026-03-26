export interface Business {
  slug: string;
  name: string;
  location: string | null;
  description: string;
  facebook: string;
  logo: string;
  colors: string[];
  category: string;
  tagline: string;
  services: string[];
  highlights: string[];
  theme: "dark" | "light";
  heroStyle: "centered" | "split" | "fullwidth" | "diagonal";
}

export const businesses: Business[] = [
  {
    slug: "airpnd",
    name: "AIRPND",
    location: "Santa Rosa",
    description:
      "We are offering rentals in a modern design with an affordable price.",
    facebook: "https://www.facebook.com/modernapartment2023",
    logo: "/logos/airpnd.jpg",
    colors: ["#487860", "#303030", "#181818", "#C0C0C0", "#D8D8D8"],
    category: "Real Estate",
    tagline: "Modern Living, Affordable Price",
    services: ["Short-term Rentals", "Modern Apartments", "Furnished Units", "Monthly Stays"],
    highlights: ["Modern design interiors", "Affordable daily & monthly rates", "Prime Santa Rosa location", "Fully furnished units"],
    theme: "dark",
    heroStyle: "split",
  },
  {
    slug: "extreme-gainz",
    name: "Extreme Gainz Fitness Gym",
    location: "San Pablo",
    description:
      "From beginners to pros, we provide personalized workouts, state-of-the-art equipment, and a positive community to help you achieve your fitness goals.",
    facebook:
      "https://www.facebook.com/profile.php?id=61586473550426",
    logo: "/logos/extreme-gainz.jpg",
    colors: ["#000000", "#F0C030", "#181818"],
    category: "Fitness",
    tagline: "Your Gains Start Here",
    services: ["Gym Membership", "Personal Training", "Group Classes", "Fitness Programs"],
    highlights: ["State-of-the-art equipment", "Expert personal trainers", "Supportive community", "Programs for all levels"],
    theme: "dark",
    heroStyle: "fullwidth",
  },
  {
    slug: "infinity-auction-house",
    name: "Infinity Auction House",
    location: "Cabuyao",
    description:
      "Online Supplier and Seller of Brand New Items. Good Customer Service, Quality Items, AFFORDABLE products.",
    facebook:
      "https://www.facebook.com/infinityauctionhousephofficial",
    logo: "/logos/infinity-auction.jpg",
    colors: ["#181878", "#F0F0F0", "#606090", "#C00030", "#C0C0D8"],
    category: "Retail & Auction",
    tagline: "Brand New Finds, Unbeatable Prices",
    services: ["Online Auctions", "Brand New Items", "Wholesale Supply", "Retail Sales"],
    highlights: ["Quality brand new items", "Best customer service", "Affordable pricing", "Online & in-store shopping"],
    theme: "dark",
    heroStyle: "centered",
  },
  {
    slug: "lucky-finds",
    name: "Lucky Finds",
    location: null,
    description:
      "Lucky Finds offers brand-new kitchenwares with quality you can trust, providing stylish and practical essentials for every home at affordable prices.",
    facebook: "https://www.facebook.com/Luckyyfinds",
    logo: "/logos/lucky-finds.jpg",
    colors: ["#F01818", "#D83030", "#F0D8D8", "#F0A8A8", "#D80000"],
    category: "Home & Kitchen",
    tagline: "Quality Kitchenware You Can Trust",
    services: ["Kitchen Essentials", "Cookware Sets", "Home Organization", "Kitchen Gadgets"],
    highlights: ["Brand new quality items", "Stylish designs", "Affordable for every home", "Wide product selection"],
    theme: "light",
    heroStyle: "split",
  },
  {
    slug: "lusso",
    name: "LUSSO",
    location: "Cabuyao",
    description:
      "Trendy. Stylish. Affordable. Your go-to for fashion jewelry that elevates any outfit. From casual looks to glam nights out.",
    facebook: "https://www.facebook.com/vintagehubs",
    logo: "/logos/lusso.jpg",
    colors: ["#001818", "#304830", "#F0D8A8", "#A89060"],
    category: "Fashion & Jewelry",
    tagline: "Elevate Every Outfit",
    services: ["Fashion Jewelry", "Accessories", "Trendy Collections", "Gift Items"],
    highlights: ["Trendy & stylish pieces", "Affordable luxury", "Curated collections", "Perfect for any occasion"],
    theme: "dark",
    heroStyle: "centered",
  },
  {
    slug: "nameless-books",
    name: "Nameless Books",
    location: "Cabuyao",
    description:
      "FIRST BOOKS PER KILO SUPPLIER IN THE PHILIPPINES. Affordable books for everyone.",
    facebook: "https://www.facebook.com/Nameless.books",
    logo: "/logos/nameless-books.jpg",
    colors: ["#A87878", "#D8C0C0", "#C0A8A8", "#F0D8D8"],
    category: "Books & Education",
    tagline: "First Books Per Kilo in the Philippines",
    services: ["Books Per Kilo", "Wholesale Books", "Educational Materials", "Book Sourcing"],
    highlights: ["Pioneer of books per kilo concept", "Massive selection", "Nationwide supplier", "Most affordable books in PH"],
    theme: "light",
    heroStyle: "split",
  },
  {
    slug: "nb-lounge",
    name: "NB Lounge (Main Branch)",
    location: "Cabuyao",
    description:
      "The FIRST Books per Kilo Cafe Bookstore in the South! Open Daily: 9 AM - 10 PM.",
    facebook: "https://www.facebook.com/nblounge2023",
    logo: "/logos/nb-lounge.jpg",
    colors: ["#D8D8C0", "#181818", "#484848", "#C0C0A8", "#303030"],
    category: "Cafe & Bookstore",
    tagline: "Read. Sip. Relax.",
    services: ["Books Per Kilo Cafe", "Coffee & Beverages", "Cozy Reading Space", "Study Area"],
    highlights: ["First books per kilo cafe in the South", "Cozy ambiance", "Open daily 9AM-10PM", "Coffee meets literature"],
    theme: "dark",
    heroStyle: "fullwidth",
  },
  {
    slug: "nb-lounge-gma",
    name: "NB Lounge GMA Cavite",
    location: "GMA, Cavite",
    description:
      "NB Lounge 2nd Branch! The FIRST Books per Kilo Cafe Bookstore in the South! Open Daily: 10 AM - 10 PM.",
    facebook:
      "https://www.facebook.com/people/NB-Lounge-GMA-Cavite/61582687594838/",
    logo: "/logos/nb-lounge-gma.jpg",
    colors: ["#D8D8C0", "#181818", "#C0C0A8", "#303030", "#787878"],
    category: "Cafe & Bookstore",
    tagline: "Your Second Home for Books & Coffee",
    services: ["Books Per Kilo Cafe", "Coffee & Beverages", "Relaxation Space", "Study Hub"],
    highlights: ["2nd branch expanding the experience", "Open daily 10AM-10PM", "GMA Cavite location", "Same great concept, new home"],
    theme: "dark",
    heroStyle: "split",
  },
  {
    slug: "rfg-auction-house",
    name: "RFG Auction House",
    location: "Cabuyao",
    description:
      "Your trusted local auction house offering quality surplus and brand new items at unbeatable prices.",
    facebook: "https://www.facebook.com/RFGauctionhouse",
    logo: "/logos/rfg-auction.jpg",
    colors: ["#181818", "#483030", "#784830", "#D86018", "#F09030"],
    category: "Retail & Auction",
    tagline: "Quality Surplus at Unbeatable Prices",
    services: ["Surplus Auctions", "Brand New Items", "UK & Japan Imports", "Wholesale Deals"],
    highlights: ["Trusted since establishment", "Quality surplus items", "Multiple branches nationwide", "Unbeatable prices"],
    theme: "dark",
    heroStyle: "diagonal",
  },
  {
    slug: "rfg-auction-bulacan",
    name: "RFG Auction House Bulacan",
    location: "Meycauayan, Bulacan",
    description:
      "RFG Auction House branch in Brgy. Pajo, Meycauayan, Bulacan. Quality surplus items.",
    facebook: "https://www.facebook.com/RFGauctionhousebulacan",
    logo: "/logos/rfg-auction-bulacan.jpg",
    colors: ["#180000", "#603018", "#481800", "#904818"],
    category: "Retail & Auction",
    tagline: "Bulacan's Best Surplus Destination",
    services: ["Surplus Items", "Auction Events", "Brand New Products", "Wholesale Supply"],
    highlights: ["Strategically located in Meycauayan", "Quality imported surplus", "Regular auction events", "Growing customer base"],
    theme: "dark",
    heroStyle: "split",
  },
  {
    slug: "rfg-auction-davao",
    name: "RFG Auction House Davao",
    location: "Davao City",
    description:
      "UK AND JAPAN SURPLUS ITEMS. Quality imported goods at great prices.",
    facebook: "https://www.facebook.com/rfgauctionhousedavao",
    logo: "/logos/rfg-auction-davao.jpg",
    colors: ["#181800", "#606000", "#909018", "#F0F018", "#C0C018"],
    category: "Retail & Auction",
    tagline: "UK & Japan Quality in Davao",
    services: ["UK Surplus Items", "Japan Surplus Items", "Retail Sales", "Bulk Orders"],
    highlights: ["UK & Japan imported goods", "Davao City location", "Premium surplus quality", "Affordable prices"],
    theme: "dark",
    heroStyle: "centered",
  },
  {
    slug: "rfg-events-place",
    name: "RFG Events Place",
    location: "Santa Rosa",
    description:
      "We accept all kinds of events. Venue capacity 150-250 pax! Fully air conditioned!",
    facebook: "https://www.facebook.com/officialRFGeventsplace",
    logo: "/logos/rfg-events.jpg",
    colors: ["#181818", "#604830", "#907848", "#F0C060", "#A89060"],
    category: "Events & Venues",
    tagline: "Your Perfect Event Starts Here",
    services: ["Event Venue Rental", "Corporate Events", "Private Celebrations", "Full Event Setup"],
    highlights: ["150-250 pax capacity", "Fully air conditioned", "All event types welcome", "Prime Santa Rosa location"],
    theme: "dark",
    heroStyle: "fullwidth",
  },
  {
    slug: "house-of-garments",
    name: "The House of Garments PH",
    location: "Cabuyao",
    description:
      "We offer high-quality European items at affordable prices \u2013 sold per retail and bundle.",
    facebook: "https://www.facebook.com/houseofgarmentsph",
    logo: "/logos/house-of-garments.jpg",
    colors: ["#301818", "#F0D878", "#483000", "#604818", "#F0C048"],
    category: "Fashion & Apparel",
    tagline: "European Quality, Philippine Prices",
    services: ["European Clothing", "Retail & Bundle Sales", "Fashion Accessories", "Wholesale Supply"],
    highlights: ["High-quality European items", "Retail and bundle options", "Affordable pricing", "Trendy selections"],
    theme: "dark",
    heroStyle: "diagonal",
  },
  {
    slug: "toy-landia",
    name: "Toy Landia",
    location: "Cabuyao",
    description:
      "Brand new toys sold per kilogram \u2014 mas marami kang maiuuwi, mas sulit ang presyo, at mas masaya ang bawat shopping experience!",
    facebook: "https://www.facebook.com/officialtoylandia",
    logo: "/logos/toy-landia.jpg",
    colors: ["#FFD800", "#180000", "#F01800", "#900000"],
    category: "Toys & Kids",
    tagline: "More Toys, More Savings, More Fun",
    services: ["Toys Per Kilo", "Brand New Toys", "Party Supplies", "Bulk Toy Orders"],
    highlights: ["Toys sold per kilogram", "All brand new items", "Most sulit toy shopping", "Wide variety for all ages"],
    theme: "light",
    heroStyle: "centered",
  },
  {
    slug: "toys-for-less",
    name: "Toys for Less - UK Toys",
    location: "Cabuyao",
    description:
      "SUPPLIER OF UK TOYS IN THE PH SINCE 2024. Nothing above P200.00!",
    facebook: "https://www.facebook.com/ToyssforLess",
    logo: "/logos/toys-for-less.jpg",
    colors: ["#F06018", "#F0D800", "#0060A8", "#181818"],
    category: "Toys & Kids",
    tagline: "Nothing Above P200",
    services: ["UK Imported Toys", "Affordable Toys", "Wholesale Toy Supply", "Retail Toy Sales"],
    highlights: ["Nothing above P200", "UK imported quality", "Supplier since 2024", "Largest affordable toy selection"],
    theme: "light",
    heroStyle: "split",
  },
  {
    slug: "unics-collection",
    name: "Unic's Collection",
    location: null,
    description:
      "Cookwares and more! Live Selling: 1PM-10PM. Open Monday-Saturday (8AM-5:30PM).",
    facebook:
      "https://www.facebook.com/people/Unics-Collection/100086783301845/",
    logo: "/logos/unics-collection.jpg",
    colors: ["#C03048", "#F0D8D8", "#D8A8A8", "#A86060", "#C07878"],
    category: "Home & Kitchen",
    tagline: "Cookwares and So Much More",
    services: ["Cookware", "Kitchen Essentials", "Live Selling", "Home Items"],
    highlights: ["Daily live selling 1PM-10PM", "Quality cookwares", "Open Mon-Sat 8AM-5:30PM", "Affordable home essentials"],
    theme: "light",
    heroStyle: "centered",
  },
];

export function getBusinessBySlug(slug: string): Business | undefined {
  return businesses.find((business) => business.slug === slug);
}
