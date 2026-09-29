export const SERVICES_DATA = [
  {
    id: 'wedding',
    title: 'Wedding & Muhurtham Photography',
    subtitle: 'Capturing Timeless Traditions & Candid Emotions',
    priceStarting: 25000,
    iconName: 'Camera',
    features: [
      'Full Day Traditional & Candid Photography',
      'High-Resolution Master Retouched Photos',
      'Custom Canvera Premium Photo Album',
      'Cinematic Teaser & Highlight Reel',
      'Full Raw File Delivery on USB Drive'
    ],
    popular: true,
    coverImage: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'prewedding',
    title: 'Pre-Wedding & Outdoor Couple Shoots',
    subtitle: 'Cinematic Stories in Scenic Outdoor Locations',
    priceStarting: 15000,
    iconName: 'Heart',
    features: [
      '4-6 Hours Outdoor Location Shoot (ECR, Beach, Resorts)',
      'Multiple Outfit & Styling Changes',
      'Drone Aerial Shots Included',
      '25+ Edited Master Portraits',
      'Instagram Reels & Music Video Edit'
    ],
    popular: false,
    coverImage: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'baby',
    title: 'Maternity, Baby & Kids Portraits',
    subtitle: 'Gentle, Safe, & Adorable Childhood Memories',
    priceStarting: 8000,
    iconName: 'Smile',
    features: [
      'Climate-Controlled Studio Environment',
      'Sanitized Props, Costumes & Backgrounds',
      'Cake Smash & Theme Decor Options',
      'Parents & Sibling Family Portraits Included',
      'Digital Album & Framed Print'
    ],
    popular: true,
    coverImage: 'https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'studio',
    title: 'Studio & Commercial Product Shoots',
    subtitle: 'High-Impact Visuals for Brands & Models',
    priceStarting: 5000,
    iconName: 'Sliders',
    features: [
      'Professional Lighting & Multi-color Backdrops',
      'Model Portfolios & Acting Headshots',
      'E-Commerce & Amazon/Flipkart Product Photography',
      'Color-Corrected High-Res Files',
      'Fast 48-Hour Delivery Turnaround'
    ],
    popular: false,
    coverImage: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=800&q=80'
  }
];

export const CALCULATOR_OPTIONS = {
  services: [
    { id: 'wedding', name: 'Wedding Photography', basePrice: 25000 },
    { id: 'prewedding', name: 'Pre-Wedding Shoot', basePrice: 15000 },
    { id: 'baby', name: 'Baby / Maternity Shoot', basePrice: 8000 },
    { id: 'studio', name: 'Studio & Model Shoot', basePrice: 5000 },
    { id: 'event', name: 'Birthday / Private Event', basePrice: 10000 }
  ],
  addOns: [
    { id: 'drone', name: '4K Drone Aerial Coverage', price: 6000 },
    { id: 'album', name: 'Canvera Flush Mount Album (40 Pgs)', price: 8000 },
    { id: 'reels', name: 'Cinematic Instagram Reels Edit (3 Videos)', price: 4000 },
    { id: 'ledwall', name: 'Live LED Display Wall Setup', price: 7000 }
  ]
};
