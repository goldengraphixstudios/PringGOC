export interface PurchaseMethod {
  type: "live-selling" | "store-visit" | "warehouse" | "auction" | "facebook-group" | "email" | "online";
  label: string;
  schedule: string;
  note?: string;
  link?: string;
}

export interface Branch {
  name: string;
  address: string;
  waze?: string;
  googleMapsQuery?: string;
  auctionSchedule?: string;
  details?: string[];
}

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
  featured?: boolean;
  shipsNationwide?: boolean;
  purchaseMethods?: PurchaseMethod[];
  branches?: Branch[];
  address?: string;
  waze?: string;
  hours?: string;
  inquiryEmail?: string;
  extraLinks?: { label: string; url: string }[];
  photos?: string[];
  heroVideo?: string;
}

export const businesses: Business[] = [
  // ─── 1. RFG AUCTION HOUSE (MAIN — FEATURED) ───────────────────────────────
  {
    slug: "rfg-auction-house",
    name: "RFG Auction House",
    location: "Cabuyao, Laguna",
    description:
      "Your premier destination for exclusive auctions offering a wide range of valuable items imported from Korea, Japan, UK, and China. We specialize in actual bidding and auction-only sales, ensuring unique opportunities to bid on exceptional pieces. With three branches nationwide, we deliver a seamless and transparent experience for both seasoned bidders and first-timers.",
    facebook: "https://www.facebook.com/RFGauctionhouse",
    logo: "/logos/rfg-auction.jpg",
    colors: ["#181818", "#483030", "#784830", "#D86018", "#F09030"],
    category: "Retail & Auction",
    tagline: "Quality Surplus at Unbeatable Prices",
    featured: true,
    services: ["Live Auctions", "UK & Japan Imports", "Korea & China Imports", "Wholesale Deals", "Antiques & Collectibles", "Surplus Items"],
    highlights: [
      "Trusted auction house with multiple branches nationwide",
      "Imports from Korea, Japan, UK & China",
      "Expert guidance for first-timers and seasoned bidders",
      "Regular weekly auctions across all branches",
    ],
    theme: "dark",
    heroStyle: "diagonal",
    address: "Purok 5, Brgy Sala, Cabuyao, Laguna (near Gasoline Station & 7-Eleven)",
    waze: "HEMEDES GARAHE",
    purchaseMethods: [
      {
        type: "auction",
        label: "Auction — Cabuyao",
        schedule: "Every Saturday, 10:00 AM onwards",
      },
      {
        type: "auction",
        label: "Auction — Bulacan",
        schedule: "Every Friday, 10:00 AM onwards",
      },
      {
        type: "auction",
        label: "Auction — Davao",
        schedule: "Every Friday, 10:00 AM onwards",
      },
    ],
    branches: [
      {
        name: "RFG Auction House — Cabuyao",
        address: "Purok 5, Brgy Sala, Cabuyao, Laguna (near Gasoline Station & 7-Eleven)",
        waze: "HEMEDES GARAHE",
        auctionSchedule: "Every Saturday, 10:00 AM onwards",
      },
      {
        name: "RFG Auction House — Bulacan",
        address: "001 National Rd, Brgy. Camalig, Meycauayan, Bulacan",
        waze: "NORTHVIEW POINTE SUBDIVISION MEYCAUAYAN BULACAN",
        auctionSchedule: "Every Friday, 10:00 AM onwards",
      },
      {
        name: "RFG Auction House — Davao",
        address: "6J3F+98C, Km 18 Crossing Eliong Road, Bunawan, Davao City, Davao del Sur",
        auctionSchedule: "Every Friday, 10:00 AM onwards",
      },
    ],
    photos: [
      "/rfg-auction-house/items-bed-1.jpg",
      "/rfg-auction-house/items-bed-2.jpg",
      "/rfg-auction-house/items-kitchen-1.jpg",
      "/rfg-auction-house/items-toys-1.jpg",
      "/rfg-auction-house/items-toys-2.jpg",
      "/rfg-auction-house/items-electronics-65580.jpg",
    ],
  },

  // ─── 2. RFG EVENTS PLACE ──────────────────────────────────────────────────
  {
    slug: "rfg-events-place",
    name: "RFG Events Place",
    location: "Santa Rosa, Laguna",
    description:
      "The perfect venue for all types of events, offering a spacious and fully air-conditioned space with a capacity of 150–250 guests. Whether you're hosting a wedding, corporate event, birthday celebration, or any other special occasion, our venue provides the ideal setting to make your event truly memorable.",
    facebook: "https://www.facebook.com/officialRFGeventsplace",
    logo: "/logos/rfg-events.jpg",
    colors: ["#181818", "#604830", "#907848", "#F0C060", "#A89060"],
    category: "Events & Venues",
    tagline: "Your Perfect Event Starts Here",
    services: ["Event Venue Rental", "Corporate Events", "Weddings & Celebrations", "Birthday Parties", "Full Event Setup", "Private Gatherings"],
    highlights: [
      "150–250 pax capacity",
      "Fully air-conditioned venue",
      "All event types welcome",
      "Prime Santa Rosa, Laguna location",
    ],
    theme: "dark",
    heroStyle: "fullwidth",
    address: "VC2 Lot 11, Villa Caceres Commercial Center, Sta. Rosa, Laguna",
    waze: "RFG Events Place",
    purchaseMethods: [
      {
        type: "email",
        label: "Book via Email",
        schedule: "Send your inquiry anytime",
        link: "mailto:official.pringgroupofcompany@gmail.com",
      },
    ],
    photos: [
      "/rfg-events-place/venue-1.jpg",
      "/rfg-events-place/venue-2.jpg",
      "/rfg-events-place/venue-3.jpg",
      "/rfg-events-place/venue-4.jpg",
      "/rfg-events-place/venue-5.jpg",
      "/rfg-events-place/venue-6.jpg",
      "/rfg-events-place/event-birthday-500909.jpg",
      "/rfg-events-place/event-christening-473360.jpg",
    ],
  },

  // ─── 3. TOYZOONA IMPORTER (NEW) ───────────────────────────────────────────
  {
    slug: "toyzoona-importer",
    name: "Toyzoona Importer",
    location: "Cabuyao, Laguna",
    description:
      "The first in the South to offer high-quality imported toys sold by the kilogram, bringing fun, excitement, and creativity to children of all ages. We specialize in importing top-tier toys from the UK and China. A trusted supplier featured on national television and a proud participant in major toyfairs across the Philippines.",
    facebook: "https://www.facebook.com/groups/642834551000763",
    logo: "/logos/toyzoona-importer-logo-transparent.png",
    colors: ["#E8350A", "#FF6B35", "#FFD700", "#1A1A2E", "#16213E"],
    category: "Toys & Kids",
    tagline: "First in the South. As Seen on National TV.",
    shipsNationwide: true,
    services: ["UK Imported Toys", "China Imported Toys", "Toys Per Kilo", "Wholesale Supply", "Toyfair Participation", "Live Selling"],
    highlights: [
      "First in the South to sell toys per kilogram",
      "Featured on national television",
      "Participates in major toyfairs nationwide",
      "Safe, trendy & affordable imported toys",
    ],
    theme: "dark",
    heroStyle: "fullwidth",
    purchaseMethods: [
      {
        type: "auction",
        label: "Auction / Bidding",
        schedule: "Every Saturday, 10:00 AM onwards",
        note: "Bid per kilogram at competitive prices",
      },
      {
        type: "live-selling",
        label: "Live Selling",
        schedule: "Mon–Sat, 9:00 AM – 6:30 PM (sometimes until 12:00 AM)",
      },
      {
        type: "warehouse",
        label: "Warehouse Visit",
        schedule: "Mon–Sat, 9:00 AM – 6:30 PM",
        note: "Closed on Sundays",
      },
      {
        type: "facebook-group",
        label: "Facebook Group",
        schedule: "Exclusive offers & promotions",
        link: "https://www.facebook.com/groups/642834551000763",
      },
    ],
    extraLinks: [
      { label: "Join Facebook Group", url: "https://www.facebook.com/groups/642834551000763" },
    ],
    photos: [
      "/toyzoona-importer/tv-1.jpg",
      "/toyzoona-importer/tv-2.jpg",
      "/toyzoona-importer/tv-3.jpg",
      "/toyzoona-importer/toyfair-1.jpg",
      "/toyzoona-importer/toyfair-2.jpg",
      "/toyzoona-importer/toys-1.jpg",
      "/toyzoona-importer/toys-2.jpg",
      "/toyzoona-importer/toys-3.jpg",
    ],
  },

  // ─── 4. TOYS FOR LESS ─────────────────────────────────────────────────────
  {
    slug: "toys-for-less",
    name: "Toys for Less",
    location: "Cabuyao, Laguna",
    description:
      "Your go-to toy store for affordable, high-quality UK toys — with every item priced at no more than ₱280. We offer a wide selection of fun, safe, and engaging toys for children of all ages. Open for wholesalers and resellers. Because playtime should be enjoyable without breaking the bank.",
    facebook: "https://www.facebook.com/ToyssforLess",
    logo: "/logos/toys-for-less.jpg",
    colors: ["#F06018", "#F0D800", "#0060A8", "#181818"],
    category: "Toys & Kids",
    tagline: "Nothing Above ₱280",
    shipsNationwide: true,
    services: ["UK Imported Toys", "Affordable Toys (up to ₱280)", "Wholesale Supply", "Retail Sales", "Live Selling"],
    highlights: [
      "Every item priced ₱280 and below",
      "UK-imported quality toys",
      "Supplier since 2024",
      "Open for wholesalers and resellers",
    ],
    theme: "light",
    heroStyle: "split",
    purchaseMethods: [
      {
        type: "live-selling",
        label: "Live Selling",
        schedule: "Mon–Sat, 10:00 AM – 7:00 PM",
        note: "Open for wholesalers and resellers",
      },
      {
        type: "store-visit",
        label: "Visit Our Store",
        schedule: "Mon–Sat, 10:00 AM – 7:00 PM",
        note: "Closed on Sundays",
      },
    ],
    photos: [
      "/toys-for-less/toy-1.jpg",
      "/toys-for-less/toy-2.jpg",
      "/toys-for-less/toy-3.jpg",
      "/toys-for-less/toy-4.jpg",
      "/toys-for-less/toy-5.jpg",
    ],
  },

  // ─── 5. TOYLANDIA ─────────────────────────────────────────────────────────
  {
    slug: "toy-landia",
    name: "Toy Landia",
    location: "Cabuyao, Laguna",
    description:
      "Your ultimate destination for brand-new toys imported directly from China, proudly sold per kilogram. We offer a wide variety of high-quality, fun, and safe toys for children of all ages at unbeatable prices. Toylandia welcomes walk-in customers and also offers Live Selling. Whether in-store or online, toy shopping made easy, exciting, and affordable.",
    facebook: "https://www.facebook.com/officialtoylandia",
    logo: "/logos/toy-landia.jpg",
    colors: ["#FFD800", "#180000", "#F01800", "#900000"],
    category: "Toys & Kids",
    tagline: "More Toys, More Savings, More Fun",
    shipsNationwide: true,
    services: ["Toys Per Kilo", "Brand New Toys from China", "Live Selling", "Walk-in Store", "Wholesale Orders"],
    highlights: [
      "Toys sold per kilogram",
      "All brand-new items from China",
      "Most affordable toy shopping experience",
      "Open for wholesalers and resellers",
    ],
    theme: "light",
    heroStyle: "centered",
    hours: "Open Daily, 9:00 AM – 6:00 PM",
    purchaseMethods: [
      {
        type: "live-selling",
        label: "Live Selling",
        schedule: "Mon–Sat, 9:00 AM – 6:30 PM",
        note: "Open for wholesalers and resellers",
      },
      {
        type: "store-visit",
        label: "Visit Our Store / Warehouse",
        schedule: "Mon–Sat, 9:00 AM – 6:30 PM",
        note: "Closed on Sundays",
      },
    ],
    photos: [
      "/toy-landia/toy-1.jpg",
      "/toy-landia/toy-2.jpg",
      "/toy-landia/toy-3.jpg",
      "/toy-landia/toy-4.jpg",
      "/toy-landia/toy-5.jpg",
      "/toy-landia/toy-6.jpg",
    ],
  },

  // ─── 6. LUSSO ─────────────────────────────────────────────────────────────
  {
    slug: "lusso",
    name: "LUSSO",
    location: "Cabuyao, Laguna",
    description:
      "Exquisite fashion jewelry imported from the finest sources in China and Japan, available for purchase by the kilogram. Our collection features a variety of stylish, high-quality pieces — from bold statement necklaces to delicate rings and earrings. Whether elevating your personal style or starting a jewelry business, LUSSO offers affordable luxury without compromising on elegance and craftsmanship.",
    facebook: "https://www.facebook.com/vintagehubs",
    logo: "/logos/lusso.png",
    colors: ["#0A1A0A", "#C9A84C", "#E8D5A3", "#7A6030"],
    category: "Fashion & Jewelry",
    tagline: "Affordable Luxury. Sold Per Kilo.",
    shipsNationwide: true,
    services: ["Fashion Jewelry Per Kilo", "China & Japan Imports", "Wholesale Supply", "Retail Sales", "Live Selling"],
    highlights: [
      "Jewelry imported from China & Japan",
      "Sold per kilogram — incredible value",
      "Statement pieces to delicate accessories",
      "Open for wholesalers and resellers",
    ],
    theme: "dark",
    heroStyle: "split",
    purchaseMethods: [
      {
        type: "live-selling",
        label: "Live Selling",
        schedule: "Mon–Sat, 9:00 AM – 6:30 PM",
        note: "Open for wholesalers and resellers",
      },
      {
        type: "warehouse",
        label: "Visit Our Warehouse",
        schedule: "Mon–Sat, 9:00 AM – 6:00 PM",
        note: "Closed on Sundays",
      },
    ],
    photos: [
      "/lusso/jewelry-1.jpg",
      "/lusso/jewelry-2.jpg",
      "/lusso/jewelry-3.jpg",
      "/lusso/jewelry-4.jpg",
      "/lusso/jewelry-5.jpg",
      "/lusso/jewelry-6.jpg",
      "/lusso/jewelry-7.jpg",
      "/lusso/jewelry-8.jpg",
      "/lusso/jewelry-9.jpg",
      "/lusso/jewelry-10.jpg",
      "/lusso/jewelry-11.jpg",
    ],
  },

  // ─── 7. PRING TRUCKING (NEW) ──────────────────────────────────────────────
  {
    slug: "pring-trucking",
    name: "Pring Trucking",
    location: "Laguna",
    description:
      "Reliable truck rental services with nearly 10 units available for hire, ready to assist with all your hauling and transport needs. Whether you're moving goods, transporting materials, or need a dependable vehicle for any logistics task, we have a variety of trucks to suit your requirements. Well-maintained vehicles, professional service, safe and timely deliveries.",
    facebook: "https://www.facebook.com/RFGauctionhouse",
    logo: "/logos/pring-trucking.svg",
    colors: ["#1A3A5C", "#2B5A8C", "#C9A84C", "#E8C84A", "#0A1628"],
    category: "Logistics & Transport",
    tagline: "Reliable Hauling. On Time, Every Time.",
    services: ["Truck Rental", "Hauling Services", "Materials Transport", "Goods Delivery", "Logistics Solutions"],
    highlights: [
      "Fleet of ~10 well-maintained trucks",
      "Professional and reliable drivers",
      "Handles small to large-scale loads",
      "Safe and timely deliveries guaranteed",
    ],
    theme: "dark",
    heroStyle: "split",
    inquiryEmail: "official.pringgroupofcompany@gmail.com",
    purchaseMethods: [
      {
        type: "email",
        label: "Send an Inquiry",
        schedule: "Email us to book a truck",
        link: "mailto:official.pringgroupofcompany@gmail.com",
        note: "official.pringgroupofcompany@gmail.com",
      },
    ],
    photos: [
      "/pring-trucking/truck-1.jpg",
      "/pring-trucking/truck-2.jpg",
      "/pring-trucking/truck-3.jpg",
      "/pring-trucking/truck-4.jpg",
      "/pring-trucking/truck-5.jpg",
    ],
  },

  // ─── 8. AIRPND ────────────────────────────────────────────────────────────
  {
    slug: "airpnd",
    name: "AIRPND",
    location: "Santa Rosa & Cabuyao, Laguna",
    description:
      "Modern-style apartments located in the heart of Santa Rosa and Cabuyao, Laguna. Designed for comfort and convenience, our apartments feature sleek and stylish interiors, high-quality finishes, and a range of amenities. With 100% security and CCTV surveillance throughout the premises, you can feel at ease knowing your home is well-protected.",
    facebook: "https://www.facebook.com/modernapartment2023",
    logo: "/logos/airpnd-main.png",
    colors: ["#487860", "#303030", "#181818", "#C0C0C0", "#D8D8D8"],
    category: "Real Estate",
    tagline: "Modern Living, Designed for Comfort",
    services: ["Studio-Type Units", "One-Bedroom Units", "Short & Monthly Stays", "Fully Furnished Units", "24/7 CCTV Security"],
    highlights: [
      "100% security with 24/7 CCTV surveillance",
      "Free WiFi in all units",
      "Jetmatic water pumps in all units",
      "Prime Santa Rosa & Cabuyao locations",
    ],
    theme: "dark",
    heroStyle: "split",
    branches: [
      {
        name: "Macabling, Santa Rosa Laguna",
        address: "Macabling, Santa Rosa, Laguna",
        details: [
          "27 studio-type rooms available",
          "1 bathroom per unit",
          "24/7 CCTV security",
          "Jetmatic water pump",
          "Free WiFi",
        ],
      },
      {
        name: "Golden City, Santa Rosa Laguna",
        address: "Golden City, Santa Rosa, Laguna",
        details: [
          "4 one-bedroom units",
          "1 bathroom per unit",
          "24/7 CCTV security",
          "Jetmatic water pump",
          "Free WiFi",
        ],
      },
      {
        name: "Mamatid, Cabuyao Laguna",
        address: "Mamatid, Cabuyao, Laguna",
        details: [
          "10 one-bedroom units",
          "1 bathroom per unit",
          "24/7 CCTV security",
          "Jetmatic water pump",
          "Free WiFi",
        ],
      },
    ],
    purchaseMethods: [
      {
        type: "email",
        label: "Inquire via Email",
        schedule: "Send us your preferred location and unit type",
        link: "mailto:official.pringgroupofcompany@gmail.com",
      },
    ],
    photos: [
      "/airpnd/macabling-1.jpg",
      "/airpnd/macabling-2.jpg",
      "/airpnd/macabling-3.jpg",
      "/airpnd/macabling-4.jpg",
      "/airpnd/golden-city-1.jpg",
      "/airpnd/golden-city-2.jpg",
      "/airpnd/golden-city-3.jpg",
      "/airpnd/golden-city-4.jpg",
      "/airpnd/mamatid-1.jpg",
      "/airpnd/mamatid-2.jpg",
      "/airpnd/mamatid-3.jpg",
      "/airpnd/mamatid-4.jpg",
    ],
  },

  // ─── 9. NAMELESS BOOKS / NAMELESS ENTERPRISES ────────────────────────────
  {
    slug: "nameless-books",
    name: "Nameless Enterprises",
    location: "Cabuyao, Laguna",
    description:
      "A Philippine-based book retail and wholesale company specializing in affordable, surplus, and secondhand books. Established during the height of the pandemic, we have grown into a large-scale operation serving thousands of readers and resellers nationwide. Known as one of the first \"books per kilo\" suppliers in the Philippines.",
    facebook: "https://www.facebook.com/Nameless.books",
    logo: "/logos/nameless-books.jpg",
    colors: ["#A87878", "#D8C0C0", "#C0A8A8", "#F0D8D8"],
    category: "Books & Education",
    tagline: "First Books Per Kilo in the Philippines",
    shipsNationwide: true,
    services: ["Books Per Kilo", "Box Bundles", "Container-Level Supply", "Wholesale for Resellers", "Live Selling", "Book Fairs & Pop-up Events"],
    highlights: [
      "Pioneer of the books per kilo concept in the PH",
      "Retail & wholesale — walk-in, book fairs, live selling",
      "Facebook live selling multiple times weekly",
      "Nationwide shipping available",
    ],
    theme: "light",
    heroStyle: "split",
    purchaseMethods: [
      {
        type: "live-selling",
        label: "Live Selling on Facebook",
        schedule: "Multiple times weekly",
      },
      {
        type: "warehouse",
        label: "Warehouse Browse",
        schedule: "Visit our warehouse in Laguna",
      },
    ],
  },

  // ─── 10. NB LOUNGE (MAIN) ────────────────────────────────────────────────
  {
    slug: "nb-lounge",
    name: "NB Lounge (Main Branch)",
    location: "Cabuyao, Laguna",
    description:
      "The first books-per-kilo café bookstore in South Luzon — a hybrid space where coffee meets reading, book hunting meets lounging, and dining meets community. NB Lounge transforms the traditional bookstore into a lifestyle destination with specialty coffee, café meals, and an ever-rotating selection of affordable books.",
    facebook: "https://www.facebook.com/nblounge2023",
    logo: "/logos/nb-lounge.jpg",
    colors: ["#D8D8C0", "#181818", "#484848", "#C0C0A8", "#303030"],
    category: "Cafe & Bookstore",
    tagline: "Read. Sip. Relax.",
    services: ["Specialty Coffee & Beverages", "Café Meals (Pasta, Sandwiches, Rice Meals, Pastries)", "Books Per Kilo", "Dine-in Reading Experience", "Event Space for Small Gatherings"],
    highlights: [
      "First books-per-kilo café bookstore in South Luzon",
      "Cozy lifestyle destination — not just a bookstore",
      "Treasure-hunt browsing with new finds daily",
      "Open daily for students, readers & collectors",
    ],
    theme: "dark",
    heroStyle: "fullwidth",
    address: "Sala Commercial Center, Cabuyao, Philippines 4025 (near Wilcon)",
    hours: "Open Daily: 9:00 AM – 10:00 PM",
    photos: [
      "/nb-lounge/food-1.jpg",
      "/nb-lounge/food-2.jpg",
      "/nb-lounge/food-3.jpg",
      "/nb-lounge/food-4.jpg",
      "/nb-lounge/drink-1.jpg",
      "/nb-lounge/drink-2.jpg",
    ],
  },

  // ─── 11. NB LOUNGE GMA CAVITE ─────────────────────────────────────────────
  {
    slug: "nb-lounge-gma",
    name: "NB Lounge GMA Cavite",
    location: "GMA, Cavite",
    description:
      "NB Lounge's 2nd branch — bringing the beloved books-per-kilo café bookstore experience to GMA, Cavite. Enjoy specialty coffee, café meals, and affordable books in one immersive space. Ideal for students, casual readers, resellers, and collectors looking for their next great find.",
    facebook: "https://www.facebook.com/people/NB-Lounge-GMA-Cavite/61582687594838/",
    logo: "/logos/nb-lounge-gma.jpg",
    colors: ["#D8D8C0", "#181818", "#C0C0A8", "#303030", "#787878"],
    category: "Cafe & Bookstore",
    tagline: "Your Second Home for Books & Coffee",
    services: ["Specialty Coffee & Beverages", "Café Meals", "Books Per Kilo", "Relaxation Space", "Study Hub"],
    highlights: [
      "2nd branch expanding the NB Lounge experience",
      "Open daily in GMA, Cavite",
      "Near GMA PITX Terminal & DiviMall",
      "Same great books + coffee concept",
    ],
    theme: "dark",
    heroStyle: "split",
    address: "143 Luzon Avenue, Brgy. Gavino Maderan, GMA, Cavite",
    hours: "Open Daily: 10:00 AM – 10:00 PM",
    purchaseMethods: [
      {
        type: "store-visit",
        label: "Visit the Branch",
        schedule: "Open Daily, 10:00 AM – 10:00 PM",
        note: "Landmarks: GMA PITX Terminal • DiviMall GMA, Cavite",
      },
    ],
  },

  // ─── 12. LUCKY FINDS ──────────────────────────────────────────────────────
  {
    slug: "lucky-finds",
    name: "Lucky Finds",
    location: "Laguna",
    description:
      "Your trusted direct supplier of high-quality products imported from China and Japan. We specialize in a wide range of cookingwares, curtains, home decors, and other unique household items — all designed to enhance your home at affordable prices. No middleman markup, direct from supplier to you.",
    facebook: "https://www.facebook.com/Luckyyfinds",
    logo: "/logos/lucky-finds.jpg",
    colors: ["#F01818", "#D83030", "#F0D8D8", "#F0A8A8", "#D80000"],
    category: "Home & Kitchen",
    tagline: "Direct Supplier. Best Deals.",
    shipsNationwide: true,
    services: ["Cookingwares", "Curtains", "Home Decors", "Household Items", "China & Japan Imports", "Wholesale Supply"],
    highlights: [
      "Direct supplier from China & Japan — no middleman",
      "Wide range: cookware, curtains, home decor",
      "Affordable prices with fast delivery",
      "Ships nationwide",
    ],
    theme: "light",
    heroStyle: "split",
    purchaseMethods: [
      {
        type: "live-selling",
        label: "Live Selling",
        schedule: "Mon, Wed & Fri — 9:00 AM–12:00 PM and 1:00–5:00 PM",
      },
      {
        type: "warehouse",
        label: "Warehouse Visit",
        schedule: "Mon–Sat, 8:30 AM – 5:30 PM",
        note: "Closed on Sundays",
      },
    ],
  },

  // ─── 13. THE HOUSE OF GARMENTS PH ────────────────────────────────────────
  {
    slug: "house-of-garments",
    name: "The House of Garments PH",
    location: "Cabuyao, Laguna",
    description:
      "A trusted direct supplier offering a wide range of high-quality products imported from China — specializing in cookingwares and other household essentials. We guarantee 100% quality in every item. With no middleman, you get the best deals and the highest quality, all backed by our commitment to customer satisfaction.",
    facebook: "https://www.facebook.com/houseofgarmentsph",
    logo: "/logos/house-of-garments.jpg",
    colors: ["#301818", "#F0D878", "#483000", "#604818", "#F0C048"],
    category: "Home & Kitchen",
    tagline: "100% Quality. No Middleman.",
    shipsNationwide: true,
    services: ["Cookingwares", "Household Essentials", "China Imports", "Wholesale Supply", "Live Selling"],
    highlights: [
      "Direct supplier from China — no middleman markup",
      "100% quality guarantee on every item",
      "Premium cookware at competitive prices",
      "Open for wholesalers and resellers",
    ],
    theme: "dark",
    heroStyle: "diagonal",
    purchaseMethods: [
      {
        type: "live-selling",
        label: "Live Selling",
        schedule: "Tue, Thu & Sat — 9:00 AM–12:00 PM and 1:00–5:00 PM",
      },
      {
        type: "warehouse",
        label: "Warehouse Visit",
        schedule: "Mon–Sat, 8:30 AM – 5:30 PM",
        note: "Closed on Sundays",
      },
    ],
  },

  // ─── 14. UNIC'S COLLECTION ────────────────────────────────────────────────
  {
    slug: "unics-collection",
    name: "Unic's Collection",
    location: "Laguna",
    description:
      "A reliable direct supplier importing quality and trendy items from China — specializing in cookingwares and home decors. Our carefully curated selection of stylish and functional products is designed to enhance your living space and elevate your kitchen experience. Top-notch quality without the middleman markup.",
    facebook: "https://www.facebook.com/people/Unics-Collection/100086783301845/",
    logo: "/logos/unics-collection.jpg",
    colors: ["#C03048", "#F0D8D8", "#D8A8A8", "#A86060", "#C07878"],
    category: "Home & Kitchen",
    tagline: "Trendy Finds. Direct from China.",
    shipsNationwide: true,
    services: ["Cookingwares", "Home Decors", "China Imports", "Wholesale Supply", "Live Selling"],
    highlights: [
      "Direct supplier from China — no middleman",
      "Trendy & functional cookware and home decor",
      "Daily live selling sessions",
      "Open for wholesalers and resellers",
    ],
    theme: "light",
    heroStyle: "centered",
    hours: "Warehouse: Mon–Sat, 8:30 AM – 5:30 PM",
    purchaseMethods: [
      {
        type: "live-selling",
        label: "Live Selling",
        schedule: "Mon–Sat, 1:00–5:00 PM and 5:00–10:00 PM",
      },
      {
        type: "warehouse",
        label: "Warehouse Visit",
        schedule: "Mon–Sat, 8:30 AM – 5:30 PM",
        note: "Closed on Sundays",
      },
    ],
    photos: [
      "/unics-collection/product-1.jpg",
      "/unics-collection/product-2.jpg",
      "/unics-collection/product-3.jpg",
      "/unics-collection/product-4.jpg",
      "/unics-collection/product-5.jpg",
      "/unics-collection/product-6.jpg",
    ],
  },

  // ─── 15. INFINITY AUCTION HOUSE ──────────────────────────────────────────
  {
    slug: "infinity-auction-house",
    name: "Infinity Auction House",
    location: "Cabuyao, Laguna",
    description:
      "A premier destination for exclusive auctions specializing in high-quality cookingwares, home decors, and household goods imported from Japan and China. We offer a diverse selection of rare, valuable, and functional items — perfect for enhancing your home. In addition to in-person auctions, we also offer online auctions for your convenience.",
    facebook: "https://www.facebook.com/infinityauctionhousephofficial",
    logo: "/logos/infinity-auction.jpg",
    colors: ["#181878", "#F0F0F0", "#606090", "#C00030", "#C0C0D8"],
    category: "Retail & Auction",
    tagline: "Rare Finds. Unbeatable Auction Prices.",
    shipsNationwide: true,
    services: ["Live Auctions", "Online Auctions", "Japan & China Imports", "Cookingwares", "Home Decors", "Household Goods"],
    highlights: [
      "Premier auction for Japan & China imports",
      "In-person and online auctions available",
      "Wide variety: cookware, home decor, household items",
      "Seamless experience for new and seasoned bidders",
    ],
    theme: "dark",
    heroStyle: "centered",
    purchaseMethods: [
      {
        type: "live-selling",
        label: "Live Selling",
        schedule: "10:00 AM–12:00 PM and 1:00–5:30 PM",
      },
      {
        type: "warehouse",
        label: "Warehouse Visit",
        schedule: "Mon–Sat, 8:30 AM – 5:30 PM",
        note: "Closed on Sundays",
      },
    ],
    photos: [
      "/rfg-auction-davao/item-1.jpg",
      "/rfg-auction-davao/item-2.jpg",
      "/rfg-auction-davao/item-3.jpg",
      "/rfg-auction-davao/item-4.jpg",
    ],
  },

  // ─── 16. EXTREME GAINZ ────────────────────────────────────────────────────
  {
    slug: "extreme-gainz",
    name: "Extreme Gainz Fitness Gym",
    location: "San Pablo, Laguna",
    description:
      "From beginners to pros, we provide personalized workouts, state-of-the-art equipment, and a positive community to help you achieve your fitness goals. Whether you're just starting your fitness journey or pushing past your limits, Extreme Gainz is built for everyone — and built to make you better.",
    facebook: "https://www.facebook.com/profile.php?id=61586473550426",
    logo: "/logos/extreme-gainz.jpg",
    colors: ["#000000", "#F0C030", "#181818"],
    category: "Fitness",
    tagline: "Your Gains Start Here",
    services: ["Gym Membership", "Personal Training", "Group Classes", "Fitness Programs", "Multi-Branch Access"],
    highlights: [
      "State-of-the-art equipment",
      "Expert personal trainers",
      "Supportive and motivating community",
      "Programs for all fitness levels",
    ],
    theme: "dark",
    heroStyle: "fullwidth",
    branches: [
      {
        name: "Salawag",
        address: "Wincorp Building, Molino-Paliparan Rd., Brgy. Salawag, Dasmariñas City, Cavite",
        googleMapsQuery: "Wincorp Building, Molino-Paliparan Rd., Brgy. Salawag, Dasmariñas City, Cavite",
        details: [],
      },
      {
        name: "Paliparan",
        address: "Rijo Bldg 4th Floor, Blk 4 Lot 4,5,6,7 Mabuhay City Commercial, Paliparan 3, Dasmariñas City, Cavite",
        googleMapsQuery:
          "Rijo Bldg 4th Floor, Blk 4 Lot 4,5,6,7 Mabuhay City Commercial, Paliparan 3, Dasmariñas City, Cavite",
        details: [],
      },
      {
        name: "Cabuyao",
        address: "Unit 203 & 204 Sala Business Center Building, Brgy. Sala, Cabuyao City, Laguna",
        googleMapsQuery: "Unit 203 & 204 Sala Business Center Building, Brgy. Sala, Cabuyao City, Laguna",
        details: [],
      },
      {
        name: "Calamba",
        address: "B2 L1 2nd Floor, St. Christopher 1, Paciano, Calamba City, Laguna",
        googleMapsQuery: "B2 L1 2nd Floor, St. Christopher 1, Paciano, Calamba City, Laguna",
        details: [],
      },
      {
        name: "San Pablo",
        address: "Purok 2, Sitio Gitna, Maharlika Hwy, Brgy. San Ignacio, San Pablo City, Laguna",
        googleMapsQuery: "Purok 2, Sitio Gitna, Maharlika Hwy, Brgy. San Ignacio, San Pablo City, Laguna",
        details: [],
      },
      {
        name: "Tanza Cavite",
        address: "Tiffany's Place #9057, Antero Soriano Highway, Daang Amaya 3, Tanza, Cavite",
        googleMapsQuery: "Tiffany's Place #9057, Antero Soriano Highway, Daang Amaya 3, Tanza, Cavite",
        details: [],
      },
      {
        name: "San Pedro",
        address: "3rd Floor, Promenade Bldg., Pacita 1, Phase 1A, San Pedro, Laguna",
        googleMapsQuery: "3rd Floor, Promenade Bldg., Pacita 1, Phase 1A, San Pedro, Laguna",
        details: [],
      },
      {
        name: "Dasma Bayan",
        address: "2nd Floor, Don P. Campos Avenue, Brgy. San Jose, Dasmariñas City, Cavite",
        googleMapsQuery: "2nd Floor, Don P. Campos Avenue, Brgy. San Jose, Dasmariñas City, Cavite",
        details: [],
      },
    ],
    purchaseMethods: [
      {
        type: "online",
        label: "Contact / Inquire",
        schedule: "Fill out our contact form",
        link: "https://docs.google.com/forms/d/e/1FAIpQLSfi18lhUo0KSjcFDeVH81tmy7C4iiLqt9rksS0gRcSfUdKNHg/viewform",
        note: "For membership info, schedules, and branch inquiries",
      },
    ],
    extraLinks: [
      {
        label: "Membership Inquiry Form",
        url: "https://docs.google.com/forms/d/e/1FAIpQLSfi18lhUo0KSjcFDeVH81tmy7C4iiLqt9rksS0gRcSfUdKNHg/viewform",
      },
    ],
    photos: [
      "/extreme-gainz/gym-1.jpg",
      "/extreme-gainz/gym-2.jpg",
      "/extreme-gainz/gym-3.jpg",
      "/extreme-gainz/gym-4.jpg",
      "/extreme-gainz/gym-5.jpg",
      "/extreme-gainz/gym-6.jpg",
      "/extreme-gainz/gym-7.jpg",
      "/extreme-gainz/gym-8.jpg",
    ],
  },

  // ─── 17-18. RFG BRANCHES (sub-pages, kept for deep linking) ──────────────
  {
    slug: "rfg-auction-bulacan",
    name: "RFG Auction House Bulacan",
    location: "Meycauayan, Bulacan",
    description:
      "RFG Auction House branch in Brgy. Camalig, Meycauayan, Bulacan. Offering quality UK and Japan surplus items at unbeatable auction prices. Auctions held every Friday starting 10:00 AM.",
    facebook: "https://www.facebook.com/RFGauctionhousebulacan",
    logo: "/logos/rfg-auction-bulacan.jpg",
    colors: ["#180000", "#603018", "#481800", "#904818"],
    category: "Retail & Auction",
    tagline: "Bulacan's Best Surplus Destination",
    services: ["Surplus Items", "Weekly Auction Events", "Brand New Products", "Wholesale Supply"],
    highlights: [
      "Strategically located in Meycauayan, Bulacan",
      "Quality imported surplus from UK & Japan",
      "Weekly auctions every Friday",
      "Growing customer base in North Luzon",
    ],
    theme: "dark",
    heroStyle: "split",
    address: "001 National Rd, Brgy. Camalig, Meycauayan, Bulacan",
    waze: "NORTHVIEW POINTE SUBDIVISION MEYCAUAYAN BULACAN",
    purchaseMethods: [
      {
        type: "auction",
        label: "Weekly Auction",
        schedule: "Every Friday, 10:00 AM onwards",
      },
    ],
  },
  {
    slug: "rfg-auction-davao",
    name: "RFG Auction House Davao",
    location: "Davao City",
    description:
      "RFG Auction House in Davao City — offering quality UK and Japan surplus items at unbeatable prices. Auctions held every Friday starting 10:00 AM.",
    facebook: "https://www.facebook.com/rfgauctionhousedavao",
    logo: "/logos/rfg-auction-davao.jpg",
    colors: ["#181800", "#606000", "#909018", "#F0F018", "#C0C018"],
    category: "Retail & Auction",
    tagline: "UK & Japan Quality in Davao",
    services: ["UK Surplus Items", "Japan Surplus Items", "Retail Sales", "Bulk Orders"],
    highlights: [
      "UK & Japan imported goods",
      "Davao City location",
      "Premium surplus quality",
      "Affordable prices",
    ],
    theme: "dark",
    heroStyle: "centered",
    address: "6J3F+98C, Km 18 Crossing Eliong Road, Bunawan, Davao City, Davao del Sur",
    purchaseMethods: [
      {
        type: "auction",
        label: "Weekly Auction",
        schedule: "Every Friday, 10:00 AM onwards",
      },
    ],
  },
];

export function getBusinessBySlug(slug: string): Business | undefined {
  return businesses.find((business) => business.slug === slug);
}
