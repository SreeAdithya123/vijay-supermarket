export interface Product {
  id: string;
  name: string;
  category: string;
  price: string;
  originalPrice?: string;
  unit: string;
  image: string;
  discountBadge?: string;
  description: string;
  aisle: string;
  inStock: boolean;
  highlights: string[];
}

export interface Category {
  id: string;
  name: string;
  description: string;
  image: string;
  itemCount: string;
  featuredItems: string[];
}

export interface Offer {
  id: string;
  title: string;
  category: string;
  discount: string;
  description: string;
  validity: string;
  image: string;
  terms: string[];
  bannerBg: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'exterior' | 'interior' | 'aisles' | 'produce' | 'staff';
  image: string;
  caption: string;
}

export interface Testimonial {
  id: string;
  name: string;
  locality: string;
  rating: number;
  comment: string;
  avatar: string;
  date: string;
}

export interface FestivalCampaign {
  id: string;
  name: string;
  season: string;
  headline: string;
  description: string;
  discountHighlight: string;
  image: string;
  bannerColor: string;
}

export interface LoyaltyTier {
  name: string;
  badgeColor: string;
  pointsRate: string;
  perks: string[];
  minMonthlySpend: string;
}

export const STORE_INFO = {
  name: "Vijay Supermarket",
  tagline: "Fresh Groceries. Better Value. Right Around the Corner.",
  subtitle: "Your trusted neighbourhood supermarket for everyday essentials, fresh produce, household needs and great offers.",
  phone: "+91 98765 43210",
  whatsapp: "+91 98765 43210",
  landline: "044 2845 9988",
  email: "contact@vijaysupermarket.com",
  address: "Plot No. 14, Main Commercial Complex, Opposite Green View Apartments, Velachery Main Road, Chennai - 600042",
  landmark: "Opposite Green View Apartments, Near Central Metro Station",
  mapsUrl: "https://maps.app.goo.gl/EL4e1UmsFNuSo8ZU9",
  hours: "Monday – Sunday: 7:00 AM – 10:00 PM",
  openTime: 7, // 7 AM
  closeTime: 22, // 10 PM
  establishedYear: 2014,
  stats: {
    yearsInService: "10+",
    productsCount: "5,000+",
    happyFamilies: "1,000+",
    dailyFreshDeliveries: "Daily 7 AM"
  }
};

export const TRUST_VALUES = [
  {
    id: "fresh",
    title: "Fresh Products",
    description: "Daily farm-fresh vegetables, organic fruits, and premium quality dairy delivered every morning at 7:00 AM.",
    icon: "Apple"
  },
  {
    id: "value",
    title: "Great Value",
    description: "Guaranteed competitive MRP discounts, weekly special offers, and budget family combo deals.",
    icon: "Tag"
  },
  {
    id: "location",
    title: "Convenient Location",
    description: "Ample parking, ground-floor wheelchair accessibility, and right at your neighbourhood's doorstep.",
    icon: "MapPin"
  },
  {
    id: "variety",
    title: "Wide Variety",
    description: "Over 5,000 items covering South & North Indian staples, international snacks, personal care, and household items.",
    icon: "ShoppingBag"
  },
  {
    id: "family",
    title: "Family Friendly",
    description: "Spacious air-conditioned aisles, wide shopping trolleys, kid-friendly snack zones, and helpful store staff.",
    icon: "Users"
  },
  {
    id: "trusted",
    title: "Trusted Locally",
    description: "Serving nearby residential communities & apartment associations with dedicated loyalty savings for over 10 years.",
    icon: "ShieldCheck"
  }
];

export const CATEGORIES: Category[] = [
  {
    id: "fruits-veg",
    name: "Fruits & Vegetables",
    description: "Farm-picked crisp apples, fresh leafy greens, sweet mangoes & daily cooking veggies.",
    image: "https://images.unsplash.com/photo-1610832958506-aa56368176cf?auto=format&fit=crop&w=800&q=80",
    itemCount: "350+ Items",
    featuredItems: ["Fresh Tomatoes", "Shimla Apples", "Organic Spinach", "Robusta Bananas"]
  },
  {
    id: "groceries",
    name: "Groceries & Staples",
    description: "Premium Sona Masoori & Basmati rice, Aashirvaad atta, lentils, dal, and refined oils.",
    image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=800&q=80",
    itemCount: "1,200+ Items",
    featuredItems: ["Sona Masoori Rice 25kg", "Whole Wheat Atta", "Toor Dal Premium", "Sunpure Oil"]
  },
  {
    id: "dairy-bakery",
    name: "Dairy & Bakery",
    description: "Fresh Aavin/Amul milk, fresh butter, artisan bread, fresh paneer, yoghurt & eggs.",
    image: "https://images.unsplash.com/photo-1628088062854-d1870b4553da?auto=format&fit=crop&w=800&q=80",
    itemCount: "250+ Items",
    featuredItems: ["Fresh Cow Milk", "Amul Butter 500g", "Soft Milk Bread", "Fresh Malai Paneer"]
  },
  {
    id: "snacks",
    name: "Snacks & Namkeen",
    description: "Traditional South Indian murukku, branded potato chips, biscuits & evening bites.",
    image: "https://images.unsplash.com/photo-1621939514649-280e2ee25f60?auto=format&fit=crop&w=800&q=80",
    itemCount: "600+ Items",
    featuredItems: ["Butter Murukku", "Dark Fantasy Biscuits", "Lays Family Pack", "Roasted Cashews"]
  },
  {
    id: "beverages",
    name: "Beverages & Drinks",
    description: "Filter coffee powder, premium tea leaves, fresh fruit juices, energy drinks & sodas.",
    image: "https://images.unsplash.com/photo-1527661591475-527312dd65f5?auto=format&fit=crop&w=800&q=80",
    itemCount: "400+ Items",
    featuredItems: ["Narasu Filter Coffee", "Tata Tea Gold", "Tropicana Orange Juice", "Real Fruit Drinks"]
  },
  {
    id: "personal-care",
    name: "Personal Care",
    description: "Soaps, herbal shampoos, oral care toothpaste, skincare creams & grooming essentials.",
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=800&q=80",
    itemCount: "750+ Items",
    featuredItems: ["Mysore Sandal Soap", "Sunsilk Shampoo", "Colgate Total", "Nivea Soft Cream"]
  },
  {
    id: "household",
    name: "Household Essentials",
    description: "Plasticware, storage containers, cookware, aluminum foils & kitchen accessories.",
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80",
    itemCount: "500+ Items",
    featuredItems: ["Steel Flasks", "Airtight Containers", "Aluminum Foil Roll", "Garbage Bags"]
  },
  {
    id: "cleaning",
    name: "Cleaning Products",
    description: "Detergent powders, floor cleaners, dishwashing bars, hand wash & room fresheners.",
    image: "https://images.unsplash.com/photo-1585421514738-01798e348b17?auto=format&fit=crop&w=800&q=80",
    itemCount: "300+ Items",
    featuredItems: ["Surf Excel Matic", "Lizol Floor Cleaner 2L", "Pril Dishwash Liquid", "Dettol Liquid"]
  },
  {
    id: "baby-care",
    name: "Baby Care",
    description: "Diapers, baby wipes, baby soaps, Cerelac food & gentle baby lotion.",
    image: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?auto=format&fit=crop&w=800&q=80",
    itemCount: "200+ Items",
    featuredItems: ["Pampers Pants L", "Huggies Wipes", "Himalaya Baby Soap", "Nestle Cerelac"]
  },
  {
    id: "stationery",
    name: "Stationery & Office",
    description: "School notebooks, pens, markers, drawing sheets & office stationery items.",
    image: "https://images.unsplash.com/photo-1456735190827-d1262f71b8a3?auto=format&fit=crop&w=800&q=80",
    itemCount: "150+ Items",
    featuredItems: ["Classmate Long Books", "Cello Ball Pens", "Color Pencil Sets", "Glue Sticks"]
  },
  {
    id: "spices-staples",
    name: "Spices & Masalas",
    description: "Aromatic turmeric, chilli powder, sambar masala, cardamom & whole Indian spices.",
    image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=800&q=80",
    itemCount: "300+ Items",
    featuredItems: ["Aachi Sambar Masala", "MTR Garam Masala", "Kashmir Red Chilli", "Green Cardamom"]
  },
  {
    id: "daily-essentials",
    name: "Daily Essentials",
    description: "Quick daily needs including batteries, pooja items, matches & camphor.",
    image: "https://images.unsplash.com/photo-1583947215259-38e31be8751f?auto=format&fit=crop&w=800&q=80",
    itemCount: "200+ Items",
    featuredItems: ["Pooja Oil 1L", "Camphor Pack", "Duracell AA Batteries", "Incense Sticks"]
  }
];

export const FEATURED_PRODUCTS: Product[] = [
  {
    id: "prod-1",
    name: "Royal Heritage Sona Masoori Rice (25kg)",
    category: "Groceries & Staples",
    price: "₹1,450",
    originalPrice: "₹1,650",
    unit: "25 kg Bag",
    image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=800&q=80",
    discountBadge: "SAVE ₹200",
    description: "Aged premium short-grain Sona Masoori rice. Light, aromatic, easy to digest, and perfect for daily family meals.",
    aisle: "Aisle 1 - Rice & Grains",
    inStock: true,
    highlights: ["100% Aged Grain", "Zero Moisture", "Best In-Store Price"]
  },
  {
    id: "prod-2",
    name: "Farm Fresh Shimla Red Apples",
    category: "Fruits & Vegetables",
    price: "₹160",
    originalPrice: "₹190",
    unit: "1 kg",
    image: "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?auto=format&fit=crop&w=800&q=80",
    discountBadge: "15% OFF",
    description: "Crispy, sweet Himachal apples handpicked daily. Packed with natural vitamins and antioxidant goodness.",
    aisle: "Fresh Produce Section",
    inStock: true,
    highlights: ["Handpicked Daily", "Wax-Free Natural", "Crispy & Juicy"]
  },
  {
    id: "prod-3",
    name: "Aashirvaad Shuddha Chakki Atta",
    category: "Groceries & Staples",
    price: "₹285",
    originalPrice: "₹320",
    unit: "5 kg Pack",
    image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&w=800&q=80",
    discountBadge: "STORE SPECIAL",
    description: "Made from 100% pure whole wheat grains ground in traditional chakkis. Ensures soft, fluffy rotis for your family.",
    aisle: "Aisle 1 - Atta & Flours",
    inStock: true,
    highlights: ["100% Whole Wheat", "High Fiber Content", "Soft Rotis Guaranteed"]
  },
  {
    id: "prod-4",
    name: "Gold Winner Refined Sunflower Oil",
    category: "Groceries & Staples",
    price: "₹142",
    originalPrice: "₹165",
    unit: "1 Litre Pouch",
    image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=800&q=80",
    discountBadge: "SAVE ₹23",
    description: "Enriched with Vitamin A and D. Light oil that retains natural taste and nutrient values in traditional cooking.",
    aisle: "Aisle 2 - Cooking Oils",
    inStock: true,
    highlights: ["Vitamin A & D Enriched", "Low Absorption", "Heart Healthy"]
  },
  {
    id: "prod-5",
    name: "Fresh Amul Taza Tonked Milk & Paneer Combo",
    category: "Dairy & Bakery",
    price: "₹115",
    originalPrice: "₹130",
    unit: "500ml Milk + 200g Paneer",
    image: "https://images.unsplash.com/photo-1528750997573-59b89d66f4f7?auto=format&fit=crop&w=800&q=80",
    discountBadge: "FRESH TODAY",
    description: "Pure dairy fresh milk and soft malai paneer delivered every morning at 7 AM. Perfect for daily tea and evening curry.",
    aisle: "Chilled Dairy Counter",
    inStock: true,
    highlights: ["7 AM Morning Delivery", "100% Pure Milk", "Rich Protein Source"]
  },
  {
    id: "prod-6",
    name: "Surf Excel Easy Wash Detergent Powder",
    category: "Cleaning Products",
    price: "₹340",
    originalPrice: "₹395",
    unit: "3 kg Pack + 1kg Free",
    image: "https://images.unsplash.com/photo-1585421514738-01798e348b17?auto=format&fit=crop&w=800&q=80",
    discountBadge: "+ 1KG FREE",
    description: "Removes tough stains like tea, mud, and oil in a single wash. Keeps clothes bright and fragrant.",
    aisle: "Aisle 4 - Detergents & Cleaners",
    inStock: true,
    highlights: ["1kg Extra Free", "Tough Stain Remover", "Fabric Safe"]
  },
  {
    id: "prod-7",
    name: "Narasu Insta Filter Coffee Powder",
    category: "Beverages & Drinks",
    price: "₹185",
    originalPrice: "₹210",
    unit: "500g Pack",
    image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80",
    discountBadge: "TOP SELLER",
    description: "Authentic South Indian chicory blend filter coffee. Rich aroma and thick golden decoction for true coffee lovers.",
    aisle: "Aisle 3 - Tea & Coffee",
    inStock: true,
    highlights: ["80:20 Blend", "Rich South Indian Aroma", "Sealed Freshness"]
  },
  {
    id: "prod-8",
    name: "Traditional Crunchy Butter Murukku",
    category: "Snacks & Namkeen",
    price: "₹90",
    originalPrice: "₹110",
    unit: "400g Family Pack",
    image: "https://images.unsplash.com/photo-1621939514649-280e2ee25f60?auto=format&fit=crop&w=800&q=80",
    discountBadge: "LOCAL FAVORITE",
    description: "Mouth-watering handmade butter murukku made with pure ghee and rice flour. Ideal for evening coffee time.",
    aisle: "Snack Zone - Bay 2",
    inStock: true,
    highlights: ["Pure Ghee Recipe", "No Preservatives", "Crispy & Crunchy"]
  },
  {
    id: "prod-9",
    name: "Mysore Sandal Premium Herbal Soap (Pack of 3)",
    category: "Personal Care",
    price: "₹210",
    originalPrice: "₹240",
    unit: "3 x 125g",
    image: "https://images.unsplash.com/photo-1607006344380-b6775a0824a7?auto=format&fit=crop&w=800&q=80",
    discountBadge: "VALUE TRIO",
    description: "Infused with pure natural sandalwood oil. Gentle on skin, leaves a lasting natural fragrance.",
    aisle: "Aisle 5 - Cosmetics & Soaps",
    inStock: true,
    highlights: ["100% Sandalwood Oil", "Dermatologist Tested", "Classic Fragrance"]
  },
  {
    id: "prod-10",
    name: "Organic Country Eggs (Farm Fresh)",
    category: "Dairy & Bakery",
    price: "₹95",
    originalPrice: "₹110",
    unit: "Tray of 12",
    image: "https://images.unsplash.com/photo-1506976785307-8732e854ad03?auto=format&fit=crop&w=800&q=80",
    discountBadge: "DAILY FRESH",
    description: "Nutritious free-range country eggs with thick golden yolks. Daily tested for freshness and quality.",
    aisle: "Dairy & Poultry Section",
    inStock: true,
    highlights: ["Free Range", "Rich in Omega 3", "Daily Farm Tested"]
  },
  {
    id: "prod-11",
    name: "Aachi Sambar & Rasam Powder Combo",
    category: "Spices & Masalas",
    price: "₹120",
    originalPrice: "₹140",
    unit: "200g + 200g Pack",
    image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=800&q=80",
    discountBadge: "COMBO DISCOUNT",
    description: "Authentic spice blend made with roasted coriander, red chilli, and aromatic curry leaves. Brings traditional taste.",
    aisle: "Aisle 2 - Spices",
    inStock: true,
    highlights: ["Traditional Tamil Recipe", "Aromatic Spices", "No Artificial Colors"]
  },
  {
    id: "prod-12",
    name: "Pampers All-Round Protection Diapers",
    category: "Baby Care",
    price: "₹799",
    originalPrice: "₹999",
    unit: "Large (54 Pants)",
    image: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?auto=format&fit=crop&w=800&q=80",
    discountBadge: "SAVE ₹200",
    description: "Anti-rash lotion infused diaper pants with ultra-absorbent core for up to 12 hours of dry comfort.",
    aisle: "Baby Care Zone",
    inStock: true,
    highlights: ["12 Hr Dryness", "Aloe Vera Lotion", "Soft Elastic Fit"]
  }
];

export const OFFERS: Offer[] = [
  {
    id: "off-1",
    title: "Weekend Mega Grocery Bonanza",
    category: "Weekend Specials",
    discount: "UP TO 30% OFF",
    description: "Special weekend discounts on Rice 25kg bags, Sunflower Oils, and Kitchen Staples. Save up to ₹500 on family shopping bill!",
    validity: "Valid Saturday & Sunday",
    image: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=800&q=80",
    terms: ["Applicable on purchases above ₹1,500", "Available for physical walk-in store customers", "Offer valid till stocks last"],
    bannerBg: "from-emerald-600 to-green-800"
  },
  {
    id: "off-2",
    title: "Apartment Community Savings Pass",
    category: "Apartment Community Offers",
    discount: "EXTRA 5% OFF TOTAL BILL",
    description: "Exclusive discount for residents of Green View, Oakwood, and Sunshine apartment complexes! Show your society ID at checkout.",
    validity: "Valid All Month",
    image: "https://images.unsplash.com/photo-1578916171728-46686eac8d58?auto=format&fit=crop&w=800&q=80",
    terms: ["Must present registered apartment resident ID card", "Cannot be combined with clearance sales", "Valid for all household groceries"],
    bannerBg: "from-amber-600 to-yellow-700"
  },
  {
    id: "off-3",
    title: "Fresh Morning Veggie Rush",
    category: "Fresh Produce Specials",
    discount: "BUY 2KG GET 1/2KG FREE",
    description: "Visit us between 7:00 AM – 10:00 AM for fresh farm veggies directly unloaded from rural green farms.",
    validity: "Daily 7:00 AM - 10:00 AM",
    image: "https://images.unsplash.com/photo-1610832958506-aa56368176cf?auto=format&fit=crop&w=800&q=80",
    terms: ["Valid on selected seasonal vegetables", "First-come, first-served fresh stock"],
    bannerBg: "from-lime-600 to-green-700"
  },
  {
    id: "off-4",
    title: "Monthly Family Grocery Basket",
    category: "Family Grocery Deals",
    discount: "FLAT ₹350 SAVINGS",
    description: "Buy the curated monthly basket containing Rice 25kg, Atta 10kg, Toor Dal 2kg, Cooking Oil 3L & Sugar 2kg at a bulk bundle price.",
    validity: "Till 30th of Every Month",
    image: "https://images.unsplash.com/photo-1588964895597-cfccd6e2dbf9?auto=format&fit=crop&w=800&q=80",
    terms: ["Pre-packed high quality items", "Free heavy box bag included"],
    bannerBg: "from-blue-600 to-indigo-800"
  },
  {
    id: "off-5",
    title: "Festive Sweet & Snack Pack Combo",
    category: "Festival Offers",
    discount: "BUY 3 SNACK PACKS AT ₹249",
    description: "Stock up on Mysore Pak, Mixture, Murukku, and Dry Fruits gift boxes for family celebrations.",
    validity: "Festive Season Special",
    image: "https://images.unsplash.com/photo-1599785209707-a456fc1337bb?auto=format&fit=crop&w=800&q=80",
    terms: ["Includes decorative festive box", "Customization available at store counter"],
    bannerBg: "from-orange-600 to-red-700"
  },
  {
    id: "off-6",
    title: "Super Cleaner Household Combo",
    category: "Combo Offers",
    discount: "SAVE ₹180 ON COMBO",
    description: "Surf Excel 3kg Powder + Lizol Floor Cleaner 2L + Harpic Clean Pack bundled together at special price.",
    validity: "Limited Stock Deal",
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80",
    terms: ["Includes complimentary scrubber pad", "Available at Cleaning Aisle"],
    bannerBg: "from-teal-600 to-emerald-800"
  }
];

export const WHY_CHOOSE_US = [
  {
    icon: "ShieldCheck",
    title: "100% Quality Assurance",
    description: "Every grain, fruit, and packet passes our stringent store fresh check before reaching your trolley."
  },
  {
    icon: "Tag",
    title: "Unbeatable Everyday Prices",
    description: "We work directly with regional suppliers to pass maximum MRP savings directly to your family."
  },
  {
    icon: "Clock",
    title: "Early 7 AM Opening Hours",
    description: "Need milk, fresh bread or daily veggies early? We are open 7:00 AM – 10:00 PM every day of the week."
  },
  {
    icon: "Truck",
    title: "Convenient In-Store Pickup & Parking",
    description: "Ample parking area right outside our wide double-door supermarket entrance."
  },
  {
    icon: "HeartHandshake",
    title: "Friendly Neighbourhood Staff",
    description: "Our store team is always ready to assist senior citizens, help carry heavy rice bags, and find your favorite items."
  },
  {
    icon: "Sparkles",
    title: "Hygienic & Air-Conditioned Store",
    description: "Clean, well-lit, sanitized shopping environment with wide aisles for easy pram & wheelchair movement."
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "g1",
    title: "Supermarket Modern Exterior",
    category: "exterior",
    image: "https://images.unsplash.com/photo-1578916171728-46686eac8d58?auto=format&fit=crop&w=800&q=80",
    caption: "Spacious entrance with clean signage and ample parking facility."
  },
  {
    id: "g2",
    title: "Fresh Produce & Greens Counter",
    category: "produce",
    image: "https://images.unsplash.com/photo-1610832958506-aa56368176cf?auto=format&fit=crop&w=800&q=80",
    caption: "Freshly harvested organic vegetables and crisp fruits refreshed daily at 7 AM."
  },
  {
    id: "g3",
    title: "Spacious Grocery Aisles",
    category: "aisles",
    image: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=800&q=80",
    caption: "Air-conditioned wide aisles organized clearly for seamless family shopping."
  },
  {
    id: "g4",
    title: "Dairy & Chilled Foods Section",
    category: "interior",
    image: "https://images.unsplash.com/photo-1628088062854-d1870b4553da?auto=format&fit=crop&w=800&q=80",
    caption: "Temperature-controlled display for fresh milk, cheese, paneer, and yoghurt."
  },
  {
    id: "g5",
    title: "Rice & Atta Bulk Bay",
    category: "aisles",
    image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=800&q=80",
    caption: "Neatly stacked 25kg & 10kg premium Sona Masoori & Basmati rice sacks."
  },
  {
    id: "g6",
    title: "Friendly Store Customer Support Staff",
    category: "staff",
    image: "https://images.unsplash.com/photo-1556742049-0a67dd6a7b77?auto=format&fit=crop&w=800&q=80",
    caption: "Our courteous store personnel assist you with billing, packing, and product navigation."
  },
  {
    id: "g7",
    title: "Snacks & Festival Gift Display",
    category: "interior",
    image: "https://images.unsplash.com/photo-1621939514649-280e2ee25f60?auto=format&fit=crop&w=800&q=80",
    caption: "Vibrant festive snack corners with traditional sweets and dry fruit boxes."
  },
  {
    id: "g8",
    title: "Clean Quick-Billing Counters",
    category: "interior",
    image: "https://images.unsplash.com/photo-1556740758-90de374c12ad?auto=format&fit=crop&w=800&q=80",
    caption: "Multiple checkout billing counters ensuring zero long waiting lines."
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    name: "Suresh Kumar",
    locality: "Resident, Green View Apartments",
    rating: 5,
    comment: "Vijay Supermarket is a true blessing for our apartment residents. Their morning fresh veggies and monthly grocery rates are unbeatable compared to online delivery apps!",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    date: "August 2026"
  },
  {
    id: "t2",
    name: "Meenakshi Sundaram",
    locality: "Oakwood Heights Society",
    rating: 5,
    comment: "Clean aisles, fresh milk at 7 AM, and super helpful store staff who carry heavy 25kg rice bags right to my car. Highly recommend Vijay Supermarket to all nearby families!",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80",
    date: "July 2026"
  },
  {
    id: "t3",
    name: "Rajesh & Priya Verma",
    locality: "Sunshine Colony Residents",
    rating: 5,
    comment: "The festival offers during Diwali and Ugadi are fantastic. We get quality sweets, dry fruits, and kitchen essentials all under one roof at very reasonable prices.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
    date: "August 2026"
  },
  {
    id: "t4",
    name: "Kavitha R.",
    locality: "Velachery Main Road",
    rating: 5,
    comment: "The Vijay Family Savings Card saves us around ₹600 every month on our regular monthly shopping. Store is always clean, well stocked, and pleasant to visit.",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80",
    date: "August 2026"
  }
];

export const FESTIVAL_CAMPAIGNS: FestivalCampaign[] = [
  {
    id: "fest-sankranti",
    name: "Pongal & Sankranti Mahotsav",
    season: "January Festival",
    headline: "Celebrate Harvest Joy with Pure Sugarcane, Jaggery & Rice Combos!",
    description: "Get special discounts on raw rice, traditional brass vessels, pure ghee, organic jaggery, and festive sweet hampers.",
    discountHighlight: "FLAT 20% OFF ON FESTIVE STAPLES",
    image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=800&q=80",
    bannerColor: "from-amber-500 via-orange-600 to-red-600"
  },
  {
    id: "fest-ugadi",
    name: "Ugadi & Gudi Padwa Feast",
    season: "Spring Festival",
    headline: "Welcome the New Year with Sweetness & Savings!",
    description: "Special stock of raw mangoes, neem flowers, tamarind, fresh coconut, and festive puja essential kits.",
    discountHighlight: "SPECIAL FESTIVE FAMILY BASKET AT ₹499",
    image: "https://images.unsplash.com/photo-1610832958506-aa56368176cf?auto=format&fit=crop&w=800&q=80",
    bannerColor: "from-green-600 via-emerald-600 to-teal-700"
  },
  {
    id: "fest-diwali",
    name: "Grand Diwali Light & Sweets Mela",
    season: "Autumn Festival",
    headline: "Light Up Your Celebration with Premium Sweets & Gift Boxes!",
    description: "Customized dry fruit gift packs, pure ghee sweets, brass lamps, fireworks savings vouchers & oil combo offers.",
    discountHighlight: "BUY 2 DRY FRUIT BOXES GET 1 FREE",
    image: "https://images.unsplash.com/photo-1599785209707-a456fc1337bb?auto=format&fit=crop&w=800&q=80",
    bannerColor: "from-yellow-500 via-amber-600 to-orange-700"
  },
  {
    id: "fest-christmas",
    name: "Christmas & New Year Joy",
    season: "December Celebration",
    headline: "Bake, Celebrate & Save Big on Winter Treats!",
    description: "Special discounts on baking flours, plum cake ingredients, chocolates, beverages, and party snacks.",
    discountHighlight: "UP TO 25% OFF BAKING & BEVERAGES",
    image: "https://images.unsplash.com/photo-1512474932049-78ac69eed880?auto=format&fit=crop&w=800&q=80",
    bannerColor: "from-red-600 via-emerald-700 to-green-900"
  },
  {
    id: "fest-summer",
    name: "Summer Chill & Beverage Blast",
    season: "April - June",
    headline: "Beat the Heat with Fresh Mangoes & Coolers!",
    description: "Banganapalli & Alphonso mangoes, coconut water, ice creams, cold drinks & summer fruit baskets.",
    discountHighlight: "MANGO MANIA: FLAT ₹40 OFF PER KG",
    image: "https://images.unsplash.com/photo-1553279768-865429fa0078?auto=format&fit=crop&w=800&q=80",
    bannerColor: "from-orange-400 via-amber-500 to-yellow-600"
  },
  {
    id: "fest-monsoon",
    name: "Monsoon Hot Snacks & Immunity Boosters",
    season: "July - September",
    headline: "Crispy Evening Snacks & Herbal Immunity Teas!",
    description: "Special discounts on herbal green tea, honey, immunity spices, hot bajjis batter & crunchy namkeens.",
    discountHighlight: "BUY 1 GET 1 ON SELECT TEAS & SNACKS",
    image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80",
    bannerColor: "from-sky-600 via-blue-700 to-indigo-900"
  }
];

export const LOYALTY_TIERS: LoyaltyTier[] = [
  {
    name: "Vijay Family Silver",
    badgeColor: "bg-slate-200 text-slate-800 border-slate-300",
    pointsRate: "1 Point per ₹100 spent",
    minMonthlySpend: "No Minimum Spend",
    perks: [
      "Instant 2% discount on weekly fresh produce",
      "Digital receipt via SMS/WhatsApp",
      "Birthday bonus points multiplier"
    ]
  },
  {
    name: "Vijay Gold Savings Card",
    badgeColor: "bg-amber-100 text-amber-900 border-amber-300 shadow-sm",
    pointsRate: "2 Points per ₹100 spent",
    minMonthlySpend: "₹3,000 / month",
    perks: [
      "Flat 5% discount on all store monthly groceries",
      "Priority check-out counter privileges on weekends",
      "Exclusive access to Apartment Community Offers",
      "Free doorstep bag carry assistance for senior citizens"
    ]
  },
  {
    name: "Vijay Platinum Community VIP",
    badgeColor: "bg-emerald-100 text-emerald-900 border-emerald-400 shadow-md",
    pointsRate: "3 Points per ₹100 spent",
    minMonthlySpend: "₹6,000 / month",
    perks: [
      "Flat 7% extra savings on festive hampers & dry fruits",
      "Reserved parking slot during festival rush hours",
      "Dedicated Whatsapp assistance for stock inquiries",
      "Complimentary festival gift hamper every Deepavali"
    ]
  }
];
