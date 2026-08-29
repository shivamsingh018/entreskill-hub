// EntreSkill Hub - Skill & Business Idea Recommendation Matrix

export const SKILL_CATEGORIES = [
  {
    id: "tailoring",
    name: "Tailoring & Textile Crafts",
    icon: "scissors",
    description: "Stitching, alteration, boutique design, embroidery, and custom garment creation.",
    examples: ["Custom Stitching", "Embroidery", "Alterations", "Pattern Making"]
  },
  {
    id: "food_prep",
    name: "Culinary & Food Preparation",
    icon: "utensils",
    description: "Home-cooked meals, regional snacks, baking, tiffin service, and catering.",
    examples: ["Daily Tiffin", "Baking & Pastry", "Pickles & Preserves", "Street Food"]
  },
  {
    id: "tech_repair",
    name: "Electronics & Appliance Repair",
    icon: "wrench",
    description: "Smartphone repair, computer troubleshooting, home appliance servicing, and wiring.",
    examples: ["Mobile Repair", "PC Assembly", "AC & Fridge Service", "Solar Maintenance"]
  },
  {
    id: "handicrafts",
    name: "Handicrafts & Artisanal Goods",
    icon: "palette",
    description: "Pottery, candle making, jewelry, eco-friendly tote bags, and wooden items.",
    examples: ["Jute Bags", "Soy Candles", "Clay Pottery", "Handmade Jewelry"]
  },
  {
    id: "digital_services",
    name: "Digital & Freelance Skills",
    icon: "laptop",
    description: "Graphic design, social media management, video editing, local SEO, and bookkeeping.",
    examples: ["Social Media Graphics", "Data Entry", "Local SEO", "Canva Design"]
  },
  {
    id: "wellness_beauty",
    name: "Beauty & Wellness Services",
    icon: "sparkles",
    description: "Herbal skincare, bridal makeup, hair styling, henna art, and home spa packages.",
    examples: ["Bridal Makeup", "Herbal Products", "Hair Styling", "Nail Art"]
  },
  {
    id: "agriculture",
    name: "Urban Farming & Organic Gardening",
    icon: "sprout",
    description: "Microgreens cultivation, organic compost, terrace gardening kits, and medicinal plants.",
    examples: ["Microgreens", "Vermicompost", "Terrace Setup", "Plant Nursery"]
  }
];

export const BUSINESS_IDEAS = [
  {
    id: "idea_tiffin_cloud_kitchen",
    title: "Homemade Healthy Tiffin & Cloud Kitchen",
    categoryId: "food_prep",
    skillIds: ["food_prep"],
    badge: "High Demand",
    shortDescription: "Deliver fresh, home-cooked daily lunch & dinner boxes to working professionals and students.",
    targetMarket: "Office workers, university students, bachelors, hospital staff",
    investmentRange: "₹8,000 - ₹25,000 ($100 - $300)",
    estimatedMargin: "40% - 55%",
    difficulty: "Beginner",
    timeToLaunch: "10 - 14 Days",
    requiredTools: ["Kitchen Utensils", "Insulated Delivery Containers", "FSSAI License", "WhatsApp Business"],
    keyMilestones: [
      "FSSAI Basic Registration",
      "Menu & Weekly Plan Finalization",
      "Trial Run with 10 Local Customers",
      "Packaging & Delivery Setup"
    ]
  },
  {
    id: "idea_custom_boutique",
    title: "Custom Tailoring & Designer Boutique",
    categoryId: "tailoring",
    skillIds: ["tailoring"],
    badge: "Popular with Women",
    shortDescription: "Offer bespoke garment stitching, blouse design, alterations, and festive wear crafting.",
    targetMarket: "Local residents, wedding shoppers, boutique resellers",
    investmentRange: "₹15,000 - ₹45,000 ($180 - $550)",
    estimatedMargin: "50% - 70%",
    difficulty: "Intermediate",
    timeToLaunch: "7 - 10 Days",
    requiredTools: ["Sewing Machine", "Overlock Machine", "Measuring Tape & Scissors", "Mannequin", "Social Media"],
    keyMilestones: [
      "Workshop & Trial Fabric Showcase",
      "Catalog Creation on Instagram/WhatsApp",
      "Local Pamphlet & Word-of-Mouth Campaign",
      "Pricing Structure Setup"
    ]
  },
  {
    id: "idea_mobile_repair",
    title: "On-Demand Mobile & Tablet Repair Hub",
    categoryId: "tech_repair",
    skillIds: ["tech_repair"],
    badge: "Tech Skill",
    shortDescription: "Provide doorstep screen replacement, battery upgrades, and software troubleshooting for smartphones.",
    targetMarket: "Students, working professionals, local shop owners",
    investmentRange: "₹20,000 - ₹60,000 ($240 - $720)",
    estimatedMargin: "45% - 65%",
    difficulty: "Intermediate",
    timeToLaunch: "14 Days",
    requiredTools: ["Precision Tool Kit", "Heat Gun / Soldering Station", "Spare Parts Inventory", "Multimeter"],
    keyMilestones: [
      "Supplier Tie-ups for Genuine Parts",
      "Service Rate Card Setup",
      "Doorstep Service Booking Page",
      "First 25 Successful Repairs"
    ]
  },
  {
    id: "idea_eco_jute_bags",
    title: "Eco-Friendly Jute & Canvas Bag Manufacturing",
    categoryId: "handicrafts",
    skillIds: ["handicrafts", "tailoring"],
    badge: "Eco-Friendly",
    shortDescription: "Design durable, reusable tote bags, gift pouches, and custom corporate event carry bags.",
    targetMarket: "Retail stores, event planners, eco-conscious consumers, corporate gifting",
    investmentRange: "₹12,000 - ₹35,000 ($150 - $420)",
    estimatedMargin: "35% - 50%",
    difficulty: "Beginner",
    timeToLaunch: "10 Days",
    requiredTools: ["Heavy-duty Sewing Machine", "Jute Fabric & Zippers", "Screen Printing Kit", "E-commerce Page"],
    keyMilestones: [
      "Sample Design Portfolio (5 Styles)",
      "Bulk Material Sourcing",
      "Local Retailer Partnership Pitches",
      "Online Order Catalog"
    ]
  },
  {
    id: "idea_digital_design_agency",
    title: "Micro Digital Media & Canva Design Studio",
    categoryId: "digital_services",
    skillIds: ["digital_services"],
    badge: "Work from Home",
    shortDescription: "Create social media posters, promotional flyers, menu cards, and Google Business profiles for local shops.",
    targetMarket: "Restaurants, clothing stores, tuition classes, local clinics",
    investmentRange: "₹5,000 - ₹15,000 ($60 - $180)",
    estimatedMargin: "75% - 90%",
    difficulty: "Beginner",
    timeToLaunch: "3 - 5 Days",
    requiredTools: ["Laptop / Smartphone", "Canva Pro Subscription", "High-speed Internet", "Portfolio Website"],
    keyMilestones: [
      "Portfolio of 10 Sample Design Templates",
      "Google Business Profile Setup",
      "Outreach to 20 Local Businesses",
      "Monthly Retainer Packages"
    ]
  },
  {
    id: "idea_organic_microgreens",
    title: "Urban Microgreens & Organic Compost Farm",
    categoryId: "agriculture",
    skillIds: ["agriculture"],
    badge: "High Growth",
    shortDescription: "Grow nutrient-rich microgreens in small indoor spaces and supply fresh harvests to health cafe & households.",
    targetMarket: "Health-conscious consumers, organic cafes, salad bars, gym goers",
    investmentRange: "₹6,000 - ₹20,000 ($75 - $240)",
    estimatedMargin: "60% - 75%",
    difficulty: "Beginner",
    timeToLaunch: "12 Days",
    requiredTools: ["Growing Trays & Coco Peat", "Non-GMO Seeds", "LED Grow Lights / Sunlight", "Spray Bottles"],
    keyMilestones: [
      "7-Day Harvest Trial Batch",
      "Nutritional Tagging & Food Grade Trays",
      "Subscription Model for Weekly Deliveries",
      "Cafe Pitch Samples"
    ]
  }
];

export function recommendIdeas(selectedSkills, budgetRange = 'all', timeCommitment = 'all') {
  if (!selectedSkills || selectedSkills.length === 0) {
    return BUSINESS_IDEAS;
  }
  
  return BUSINESS_IDEAS.filter(idea => {
    const matchesSkill = idea.skillIds.some(id => selectedSkills.includes(id)) || 
                         selectedSkills.includes(idea.categoryId);
    return matchesSkill;
  });
}
