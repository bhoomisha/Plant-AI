export interface Disease {
  name: string;
  severity: 'low' | 'medium' | 'high';
  symptoms: string[];
  treatment: string;
}

export interface Plant {
  id: string;
  name: string;
  scientificName: string;
  type: 'succulent' | 'tropical' | 'herb' | 'flowering' | 'tree' | 'fern' | 'cactus' | 'vegetable' | 'aquatic';
  difficulty: 'beginner' | 'intermediate' | 'expert';
  sunlight: 'full-sun' | 'partial-sun' | 'shade' | 'indirect';
  wateringFrequency: string;
  wateringTips: string;
  soilType: string;
  temperature: string;
  humidity: string;
  description: string;
  careInstructions: string[];
  diseases: Disease[];
  imageKeyword: string;
  tags: string[];
  healthScore: number;
  popularityScore: number;
  youtubeKeyword: string;
}

export const PLANTS: Plant[] = [
  {
    id: 'p001',
    name: 'Monstera Deliciosa',
    scientificName: 'Monstera deliciosa',
    type: 'tropical',
    difficulty: 'beginner',
    sunlight: 'indirect',
    wateringFrequency: 'Every 1-2 weeks',
    wateringTips: 'Water when top 2 inches of soil are dry. Avoid overwatering.',
    soilType: 'Well-draining potting mix',
    temperature: '65-85°F (18-29°C)',
    humidity: 'High (60%+)',
    description: 'The iconic Swiss Cheese Plant with dramatic split leaves.',
    careInstructions: [
      'Place in bright indirect light',
      'Mist leaves weekly for humidity',
      'Wipe leaves monthly to remove dust',
      'Fertilize monthly in growing season'
    ],
    diseases: [
      { name: 'Root Rot', severity: 'high', symptoms: ['Yellow leaves', 'Mushy stems', 'Foul smell'], treatment: 'Remove affected roots, repot in fresh soil, reduce watering' },
      { name: 'Spider Mites', severity: 'medium', symptoms: ['Tiny webs', 'Stippled leaves', 'Leaf drop'], treatment: 'Spray with neem oil solution, increase humidity' }
    ],
    imageKeyword: 'monstera',
    tags: ['popular', 'air-purifying', 'statement'],
    healthScore: 92,
    popularityScore: 98,
    youtubeKeyword: 'monstera deliciosa care'
  },
  {
    id: 'p002',
    name: 'Snake Plant',
    scientificName: 'Sansevieria trifasciata',
    type: 'tropical',
    difficulty: 'beginner',
    sunlight: 'shade',
    wateringFrequency: 'Every 2-6 weeks',
    wateringTips: 'Very drought tolerant. Water only when soil is completely dry.',
    soilType: 'Cactus or succulent mix',
    temperature: '60-80°F (15-27°C)',
    humidity: 'Low to moderate',
    description: 'Nearly indestructible plant perfect for beginners.',
    careInstructions: [
      'Tolerates low light conditions',
      'Let soil dry completely between waterings',
      'Clean leaves occasionally',
      'Repot every 2-3 years'
    ],
    diseases: [
      { name: 'Root Rot', severity: 'high', symptoms: ['Soft mushy base', 'Yellow leaves', 'Wilting'], treatment: 'Remove rot, dry roots, use well-draining soil' },
      { name: 'Leaf Scorch', severity: 'low', symptoms: ['Brown tips', 'Crispy edges'], treatment: 'Move away from direct sun, increase humidity' }
    ],
    imageKeyword: 'snake plant',
    tags: ['low-maintenance', 'air-purifying', 'beginner-friendly'],
    healthScore: 88,
    popularityScore: 95,
    youtubeKeyword: 'snake plant care guide'
  },
  {
    id: 'p003',
    name: 'Fiddle Leaf Fig',
    scientificName: 'Ficus lyrata',
    type: 'tropical',
    difficulty: 'expert',
    sunlight: 'indirect',
    wateringFrequency: 'Every 1-2 weeks',
    wateringTips: 'Water consistently when top inch is dry. Dislikes inconsistency.',
    soilType: 'Rich, well-draining potting mix',
    temperature: '65-75°F (18-24°C)',
    humidity: 'Moderate to high',
    description: 'A dramatic statement plant with large violin-shaped leaves.',
    careInstructions: [
      'Keep in consistent bright indirect light',
      'Avoid moving once settled',
      'Wipe large leaves regularly',
      'Feed monthly with balanced fertilizer'
    ],
    diseases: [
      { name: 'Bacterial Infection', severity: 'high', symptoms: ['Brown spots with yellow halo', 'Leaf drop'], treatment: 'Remove infected leaves, improve air circulation, reduce watering' },
      { name: 'Root Rot', severity: 'high', symptoms: ['Yellowing', 'Wilting', 'Mushy roots'], treatment: 'Repot with fresh soil, trim rotten roots' }
    ],
    imageKeyword: 'fiddle leaf fig',
    tags: ['statement', 'indoor-tree', 'dramatic'],
    healthScore: 75,
    popularityScore: 90,
    youtubeKeyword: 'fiddle leaf fig care'
  },
  {
    id: 'p004',
    name: 'Peace Lily',
    scientificName: 'Spathiphyllum wallisii',
    type: 'tropical',
    difficulty: 'beginner',
    sunlight: 'shade',
    wateringFrequency: 'Every 1-2 weeks',
    wateringTips: 'Keep soil consistently moist but not waterlogged.',
    soilType: 'Rich, loamy potting mix',
    temperature: '65-85°F (18-29°C)',
    humidity: 'High',
    description: 'Elegant white blooms and excellent air purifier.',
    careInstructions: [
      'Thrives in low to medium light',
      'Keep away from cold drafts',
      'Mist regularly to boost humidity',
      'Deadhead spent flowers'
    ],
    diseases: [
      { name: 'Brown Tips', severity: 'low', symptoms: ['Tips turn brown', 'Crispy edges'], treatment: 'Improve humidity, use filtered water, avoid fluoride' },
      { name: 'Fungal Leaf Spot', severity: 'medium', symptoms: ['Dark spots', 'Yellow halos'], treatment: 'Remove affected leaves, apply fungicide, improve drainage' }
    ],
    imageKeyword: 'peace lily',
    tags: ['air-purifying', 'flowering', 'low-light'],
    healthScore: 90,
    popularityScore: 88,
    youtubeKeyword: 'peace lily care tips'
  },
  {
    id: 'p005',
    name: 'Aloe Vera',
    scientificName: 'Aloe barbadensis miller',
    type: 'succulent',
    difficulty: 'beginner',
    sunlight: 'full-sun',
    wateringFrequency: 'Every 2-3 weeks',
    wateringTips: 'Water deeply but infrequently. Soil must dry out completely.',
    soilType: 'Sandy, well-draining cactus mix',
    temperature: '55-80°F (13-27°C)',
    humidity: 'Low',
    description: 'Medicinal succulent with healing gel in its leaves.',
    careInstructions: [
      'Give plenty of bright light',
      'Use terracotta pots for drainage',
      'Avoid wetting the leaves',
      'Repot when rootbound'
    ],
    diseases: [
      { name: 'Aloe Rust', severity: 'medium', symptoms: ['Orange/brown spots', 'Powdery coating'], treatment: 'Remove spotted leaves, apply copper fungicide' },
      { name: 'Mealybugs', severity: 'medium', symptoms: ['White cottony clusters', 'Sticky residue'], treatment: 'Wipe with alcohol, apply neem oil' }
    ],
    imageKeyword: 'aloe vera',
    tags: ['medicinal', 'drought-tolerant', 'sunloving'],
    healthScore: 94,
    popularityScore: 92,
    youtubeKeyword: 'aloe vera plant care'
  },
  {
    id: 'p006',
    name: 'Pothos',
    scientificName: 'Epipremnum aureum',
    type: 'tropical',
    difficulty: 'beginner',
    sunlight: 'indirect',
    wateringFrequency: 'Every 1-2 weeks',
    wateringTips: 'Water when top inch of soil is dry. Tolerates some drought.',
    soilType: 'Standard potting mix',
    temperature: '60-80°F (15-27°C)',
    humidity: 'Low to moderate',
    description: 'The ultimate trailing vine, perfect for shelves and hanging baskets.',
    careInstructions: [
      'Adapts to almost any light condition',
      'Trim to encourage bushy growth',
      'Can grow in water propagation',
      'Fertilize monthly in spring/summer'
    ],
    diseases: [
      { name: 'Root Rot', severity: 'high', symptoms: ['Yellowing leaves', 'Wilting', 'Mushy stems'], treatment: 'Repot in fresh soil, trim roots, reduce watering' },
      { name: 'Bacterial Wilt', severity: 'medium', symptoms: ['Sudden wilting', 'Dark stems'], treatment: 'Remove affected stems, improve drainage' }
    ],
    imageKeyword: 'pothos plant',
    tags: ['trailing', 'beginner-friendly', 'versatile'],
    healthScore: 91,
    popularityScore: 97,
    youtubeKeyword: 'pothos plant care'
  },
  {
    id: 'p007',
    name: 'Spider Plant',
    scientificName: 'Chlorophytum comosum',
    type: 'tropical',
    difficulty: 'beginner',
    sunlight: 'indirect',
    wateringFrequency: 'Every 1-2 weeks',
    wateringTips: 'Keep soil moist during growing season, reduce in winter.',
    soilType: 'Well-draining potting mix',
    temperature: '55-80°F (13-27°C)',
    humidity: 'Moderate',
    description: 'Fast-growing plant that produces adorable plantlet offshoots.',
    careInstructions: [
      'Place in bright indirect light',
      'Use filtered water to prevent tip burn',
      'Propagate babies easily in water',
      'Divide when rootbound'
    ],
    diseases: [
      { name: 'Brown Tips', severity: 'low', symptoms: ['Brown leaf tips', 'Crispy ends'], treatment: 'Use rainwater, increase humidity, reduce fertilizer' },
      { name: 'Scale Insects', severity: 'medium', symptoms: ['Bumps on stems', 'Yellowing'], treatment: 'Scrape off scales, apply insecticidal soap' }
    ],
    imageKeyword: 'spider plant',
    tags: ['easy-care', 'propagating', 'hanging'],
    healthScore: 89,
    popularityScore: 86,
    youtubeKeyword: 'spider plant care propagation'
  },
  {
    id: 'p008',
    name: 'ZZ Plant',
    scientificName: 'Zamioculcas zamiifolia',
    type: 'tropical',
    difficulty: 'beginner',
    sunlight: 'shade',
    wateringFrequency: 'Every 2-4 weeks',
    wateringTips: 'Extremely drought tolerant. Less is more with watering.',
    soilType: 'Well-draining, sandy mix',
    temperature: '65-75°F (18-24°C)',
    humidity: 'Low',
    description: 'Glossy, architectural plant that thrives on neglect.',
    careInstructions: [
      'Works in very low light',
      'Water sparingly, especially in winter',
      'Wipe glossy leaves for shine',
      'Very slow grower'
    ],
    diseases: [
      { name: 'Yellow Leaves', severity: 'low', symptoms: ['Yellowing foliage', 'Leaf drop'], treatment: 'Reduce watering, check for root rot' },
      { name: 'Root Rot', severity: 'high', symptoms: ['Mushy rhizomes', 'Collapse'], treatment: 'Dry out completely, repot in well-draining mix' }
    ],
    imageKeyword: 'zz plant',
    tags: ['ultra-low-maintenance', 'glossy', 'architectural'],
    healthScore: 93,
    popularityScore: 89,
    youtubeKeyword: 'zz plant care'
  },
  {
    id: 'p009',
    name: 'Bird of Paradise',
    scientificName: 'Strelitzia reginae',
    type: 'tropical',
    difficulty: 'intermediate',
    sunlight: 'full-sun',
    wateringFrequency: 'Every 1-2 weeks',
    wateringTips: 'Water regularly in summer, reduce significantly in winter.',
    soilType: 'Rich, well-draining potting mix',
    temperature: '65-85°F (18-29°C)',
    humidity: 'Moderate',
    description: 'Exotic plant with dramatic orange and blue flowers.',
    careInstructions: [
      'Needs bright, direct sun to flower',
      'Feed heavily during growing season',
      'Repot every few years',
      'Patience required for blooms (3-5 years)'
    ],
    diseases: [
      { name: 'Root Rot', severity: 'high', symptoms: ['Drooping', 'Yellow leaves', 'Soft base'], treatment: 'Improve drainage, reduce watering, trim rot' },
      { name: 'Scale', severity: 'medium', symptoms: ['Sticky deposits', 'Black sooty mold'], treatment: 'Treat with horticultural oil' }
    ],
    imageKeyword: 'bird of paradise plant',
    tags: ['exotic', 'flowering', 'statement'],
    healthScore: 82,
    popularityScore: 84,
    youtubeKeyword: 'bird of paradise care'
  },
  {
    id: 'p010',
    name: 'Rubber Plant',
    scientificName: 'Ficus elastica',
    type: 'tropical',
    difficulty: 'beginner',
    sunlight: 'indirect',
    wateringFrequency: 'Every 1-2 weeks',
    wateringTips: 'Water when top inch is dry. Consistent moisture preferred.',
    soilType: 'Well-draining loamy mix',
    temperature: '60-75°F (15-24°C)',
    humidity: 'Moderate',
    description: 'Bold, glossy leaves in rich burgundy and deep green.',
    careInstructions: [
      'Wipe leaves regularly',
      'Pinch tips to encourage branching',
      'Avoid cold drafts',
      'Wear gloves when pruning (milky sap)'
    ],
    diseases: [
      { name: 'Anthracnose', severity: 'medium', symptoms: ['Dark water-soaked spots', 'Leaf drop'], treatment: 'Apply copper fungicide, improve air circulation' },
      { name: 'Spider Mites', severity: 'medium', symptoms: ['Fine webbing', 'Stippled leaves'], treatment: 'Spray neem oil, increase humidity' }
    ],
    imageKeyword: 'rubber plant ficus',
    tags: ['bold-foliage', 'statement', 'indoor-tree'],
    healthScore: 87,
    popularityScore: 87,
    youtubeKeyword: 'rubber plant ficus elastica care'
  },
  {
    id: 'p011',
    name: 'Lavender',
    scientificName: 'Lavandula angustifolia',
    type: 'herb',
    difficulty: 'intermediate',
    sunlight: 'full-sun',
    wateringFrequency: 'Every 2 weeks',
    wateringTips: 'Drought tolerant. Water deeply but infrequently.',
    soilType: 'Sandy, alkaline, well-draining',
    temperature: '60-80°F (15-27°C)',
    humidity: 'Low',
    description: 'Fragrant purple herb beloved for aromatherapy and culinary use.',
    careInstructions: [
      'Full sun is essential (6+ hours)',
      'Never let roots sit in water',
      'Prune after flowering',
      'Protect from frost in cold climates'
    ],
    diseases: [
      { name: 'Powdery Mildew', severity: 'medium', symptoms: ['White powdery coating', 'Stunted growth'], treatment: 'Improve air circulation, apply sulfur spray' },
      { name: 'Leaf Spot', severity: 'low', symptoms: ['Small brown spots', 'Yellow halos'], treatment: 'Remove infected leaves, avoid overhead watering' }
    ],
    imageKeyword: 'lavender plant',
    tags: ['fragrant', 'culinary', 'pollinator-friendly'],
    healthScore: 85,
    popularityScore: 91,
    youtubeKeyword: 'growing lavender care guide'
  },
  {
    id: 'p012',
    name: 'Basil',
    scientificName: 'Ocimum basilicum',
    type: 'herb',
    difficulty: 'beginner',
    sunlight: 'full-sun',
    wateringFrequency: 'Every 2-3 days',
    wateringTips: 'Keep soil consistently moist. Water at the base.',
    soilType: 'Rich, moist potting mix',
    temperature: '65-85°F (18-29°C)',
    humidity: 'Moderate to high',
    description: 'Essential culinary herb with aromatic leaves.',
    careInstructions: [
      'Pinch flowers to extend harvest',
      'Harvest regularly to encourage growth',
      'Keep away from cold windows',
      'Water frequently in hot weather'
    ],
    diseases: [
      { name: 'Downy Mildew', severity: 'high', symptoms: ['Yellow top leaves', 'Gray fuzz underneath'], treatment: 'Remove infected plants, improve airflow, avoid wetting leaves' },
      { name: 'Fusarium Wilt', severity: 'high', symptoms: ['Wilting', 'Brown streaks in stem'], treatment: 'No cure, remove plant, sterilize soil' }
    ],
    imageKeyword: 'basil herb plant',
    tags: ['culinary', 'aromatic', 'fast-growing'],
    healthScore: 79,
    popularityScore: 93,
    youtubeKeyword: 'basil plant growing care'
  },
  {
    id: 'p013',
    name: 'Echeveria',
    scientificName: 'Echeveria elegans',
    type: 'succulent',
    difficulty: 'beginner',
    sunlight: 'full-sun',
    wateringFrequency: 'Every 2-3 weeks',
    wateringTips: 'Soak and dry method. Water thoroughly, let dry completely.',
    soilType: 'Cactus/succulent mix with perlite',
    temperature: '65-80°F (18-27°C)',
    humidity: 'Low',
    description: 'Beautiful rosette-forming succulent in silver-blue tones.',
    careInstructions: [
      'Needs bright light to maintain rosette shape',
      'Water into soil, not the rosette',
      'Remove dead lower leaves',
      'Propagate by leaves or offsets'
    ],
    diseases: [
      { name: 'Etiolation', severity: 'low', symptoms: ['Stretching toward light', 'Pale color'], treatment: 'Move to brighter location' },
      { name: 'Fungal Rot', severity: 'high', symptoms: ['Mushy center', 'Black spots'], treatment: 'Remove affected areas, dry out, treat with fungicide' }
    ],
    imageKeyword: 'echeveria succulent',
    tags: ['rosette', 'compact', 'colorful'],
    healthScore: 91,
    popularityScore: 85,
    youtubeKeyword: 'echeveria succulent care'
  },
  {
    id: 'p014',
    name: 'Calathea',
    scientificName: 'Calathea orbifolia',
    type: 'tropical',
    difficulty: 'expert',
    sunlight: 'indirect',
    wateringFrequency: 'Every 1-2 weeks',
    wateringTips: 'Use distilled or rainwater. Keep soil moist but not soggy.',
    soilType: 'Well-draining peat-based mix',
    temperature: '65-85°F (18-29°C)',
    humidity: 'High (70%+)',
    description: 'Striking patterned leaves that move throughout the day.',
    careInstructions: [
      'Never use tap water directly',
      'High humidity is critical',
      'Keep away from cold and drafts',
      'Never let soil dry out completely'
    ],
    diseases: [
      { name: 'Leaf Curl', severity: 'medium', symptoms: ['Curling leaves', 'Crispy edges'], treatment: 'Increase humidity, use distilled water' },
      { name: 'Root Rot', severity: 'high', symptoms: ['Yellow leaves', 'Soft stems'], treatment: 'Repot, improve drainage, reduce watering' }
    ],
    imageKeyword: 'calathea plant',
    tags: ['patterned-leaves', 'living-art', 'humidity-loving'],
    healthScore: 72,
    popularityScore: 83,
    youtubeKeyword: 'calathea care humidity'
  },
  {
    id: 'p015',
    name: 'Orchid',
    scientificName: 'Phalaenopsis amabilis',
    type: 'flowering',
    difficulty: 'intermediate',
    sunlight: 'indirect',
    wateringFrequency: 'Every 1-2 weeks',
    wateringTips: 'Soak roots, drain completely. Never let sit in water.',
    soilType: 'Orchid bark mix (no regular soil)',
    temperature: '65-80°F (18-27°C)',
    humidity: 'Moderate to high',
    description: 'Elegant blooms that last months with proper care.',
    careInstructions: [
      'Bright indirect light is key',
      'Let roots dry between waterings',
      'Feed with orchid fertilizer',
      'Cut spike after flowering for reblooming'
    ],
    diseases: [
      { name: 'Crown Rot', severity: 'high', symptoms: ['Mushy crown', 'Yellow leaves'], treatment: 'Remove rot, apply hydrogen peroxide, improve airflow' },
      { name: 'Botrytis', severity: 'medium', symptoms: ['Gray mold on flowers', 'Spotting'], treatment: 'Remove affected parts, reduce humidity, improve air circulation' }
    ],
    imageKeyword: 'phalaenopsis orchid',
    tags: ['flowering', 'elegant', 'long-blooming'],
    healthScore: 80,
    popularityScore: 94,
    youtubeKeyword: 'orchid care reblooming'
  },
  {
    id: 'p016',
    name: 'Cactus (Golden Barrel)',
    scientificName: 'Echinocactus grusonii',
    type: 'cactus',
    difficulty: 'beginner',
    sunlight: 'full-sun',
    wateringFrequency: 'Every 3-4 weeks (summer), monthly (winter)',
    wateringTips: 'Water deeply in summer, barely at all in winter.',
    soilType: 'Cactus mix with extra grit',
    temperature: '50-80°F (10-27°C)',
    humidity: 'Very low',
    description: 'Iconic golden globe cactus with pronounced ribs and spines.',
    careInstructions: [
      'Maximum sun exposure needed',
      'Excellent drainage essential',
      'Minimal water in winter dormancy',
      'Handle with thick gloves'
    ],
    diseases: [
      { name: 'Soft Rot', severity: 'high', symptoms: ['Soft mushy areas', 'Discoloration'], treatment: 'Cut out rot, dry completely, apply fungicide' },
      { name: 'Scale Insects', severity: 'medium', symptoms: ['Brown bumps', 'Cotton masses'], treatment: 'Remove manually, treat with isopropyl alcohol' }
    ],
    imageKeyword: 'golden barrel cactus',
    tags: ['desert', 'sculptural', 'drought-tolerant'],
    healthScore: 95,
    popularityScore: 78,
    youtubeKeyword: 'golden barrel cactus care'
  },
  {
    id: 'p017',
    name: 'Fern (Boston)',
    scientificName: 'Nephrolepis exaltata',
    type: 'fern',
    difficulty: 'intermediate',
    sunlight: 'indirect',
    wateringFrequency: 'Every 3-5 days',
    wateringTips: 'Keep soil consistently moist. Never let dry out.',
    soilType: 'Peat-based moisture-retaining mix',
    temperature: '60-75°F (15-24°C)',
    humidity: 'Very high (80%+)',
    description: 'Lush, arching fronds that bring a tropical jungle feel.',
    careInstructions: [
      'High humidity is absolutely critical',
      'Keep evenly moist at all times',
      'Mist daily or use humidity tray',
      'Avoid direct sunlight'
    ],
    diseases: [
      { name: 'Frond Browning', severity: 'low', symptoms: ['Brown fronds', 'Crispy tips'], treatment: 'Increase humidity, check watering, avoid drafts' },
      { name: 'Scale', severity: 'medium', symptoms: ['Sticky residue', 'Yellowing'], treatment: 'Treat with neem oil or insecticidal soap' }
    ],
    imageKeyword: 'boston fern plant',
    tags: ['lush', 'humidity-loving', 'classic'],
    healthScore: 78,
    popularityScore: 82,
    youtubeKeyword: 'boston fern care humidity'
  },
  {
    id: 'p018',
    name: 'Jade Plant',
    scientificName: 'Crassula ovata',
    type: 'succulent',
    difficulty: 'beginner',
    sunlight: 'full-sun',
    wateringFrequency: 'Every 2-3 weeks',
    wateringTips: 'Allow soil to dry out fully before watering.',
    soilType: 'Succulent/cactus mix',
    temperature: '65-75°F (18-24°C)',
    humidity: 'Low',
    description: 'Long-lived succulent that resembles a miniature tree.',
    careInstructions: [
      'Bright light for best growth',
      'Let soil dry completely',
      'Repot every 2-3 years',
      'Prune to shape desired'
    ],
    diseases: [
      { name: 'Powdery Mildew', severity: 'medium', symptoms: ['White powdery spots', 'Distorted growth'], treatment: 'Improve air circulation, apply neem oil' },
      { name: 'Overwatering', severity: 'high', symptoms: ['Mushy leaves', 'Black stems'], treatment: 'Reduce watering immediately, improve drainage' }
    ],
    imageKeyword: 'jade plant succulent',
    tags: ['long-lived', 'bonsai-like', 'lucky-plant'],
    healthScore: 92,
    popularityScore: 88,
    youtubeKeyword: 'jade plant care'
  },
  {
    id: 'p019',
    name: 'String of Pearls',
    scientificName: 'Senecio rowleyanus',
    type: 'succulent',
    difficulty: 'intermediate',
    sunlight: 'partial-sun',
    wateringFrequency: 'Every 2-3 weeks',
    wateringTips: 'Very prone to rot. Water sparingly.',
    soilType: 'Sandy, well-draining cactus mix',
    temperature: '70-80°F (21-27°C)',
    humidity: 'Low',
    description: 'Cascading succulent with spherical pearl-like leaves.',
    careInstructions: [
      'Hang in bright indirect light',
      'Water only when pearls begin to pucker',
      'Use pots with drainage holes',
      'Propagate by stem cuttings'
    ],
    diseases: [
      { name: 'Overwatering Rot', severity: 'high', symptoms: ['Mushy pearls', 'String collapse'], treatment: 'Cut affected sections, let dry, reduce water' },
      { name: 'Mealybugs', severity: 'medium', symptoms: ['White fluff in joints', 'Sticky mess'], treatment: 'Wipe with alcohol swabs, apply systemic insecticide' }
    ],
    imageKeyword: 'string of pearls succulent',
    tags: ['trailing', 'unique', 'statement'],
    healthScore: 76,
    popularityScore: 86,
    youtubeKeyword: 'string of pearls care'
  },
  {
    id: 'p020',
    name: 'Tomato',
    scientificName: 'Solanum lycopersicum',
    type: 'vegetable',
    difficulty: 'intermediate',
    sunlight: 'full-sun',
    wateringFrequency: 'Daily to every other day',
    wateringTips: 'Consistent watering prevents blossom end rot. Water at base.',
    soilType: 'Rich, fertile, well-draining',
    temperature: '70-85°F (21-29°C)',
    humidity: 'Moderate',
    description: 'Classic garden vegetable producing juicy red fruits.',
    careInstructions: [
      'Support with stakes or cages',
      'Remove suckers for better yield',
      'Feed with tomato fertilizer',
      'Rotate crops yearly'
    ],
    diseases: [
      { name: 'Blight', severity: 'high', symptoms: ['Dark water-soaked spots', 'White mold', 'Fruit rot'], treatment: 'Remove infected parts, apply copper fungicide' },
      { name: 'Blossom End Rot', severity: 'medium', symptoms: ['Dark sunken bottom of fruit'], treatment: 'Consistent watering, add calcium to soil' }
    ],
    imageKeyword: 'tomato plant garden',
    tags: ['edible', 'productive', 'garden-essential'],
    healthScore: 77,
    popularityScore: 95,
    youtubeKeyword: 'tomato plant growing guide'
  },
  {
    id: 'p021',
    name: 'Lavender Mint',
    scientificName: 'Mentha × piperita',
    type: 'herb',
    difficulty: 'beginner',
    sunlight: 'partial-sun',
    wateringFrequency: 'Every 2-3 days',
    wateringTips: 'Likes consistently moist soil.',
    soilType: 'Rich, moist potting mix',
    temperature: '65-70°F (18-21°C)',
    humidity: 'Moderate',
    description: 'Vigorous aromatic herb with refreshing fragrance.',
    careInstructions: [
      'Contain in pots to prevent spreading',
      'Harvest frequently to keep bushy',
      'Keep moist but not waterlogged',
      'Divide every 2-3 years'
    ],
    diseases: [
      { name: 'Rust', severity: 'medium', symptoms: ['Orange pustules on leaves'], treatment: 'Remove affected leaves, apply fungicide, improve air flow' },
      { name: 'Aphids', severity: 'low', symptoms: ['Sticky residue', 'Curling leaves'], treatment: 'Blast off with water, apply insecticidal soap' }
    ],
    imageKeyword: 'mint herb plant',
    tags: ['culinary', 'aromatic', 'spreading'],
    healthScore: 88,
    popularityScore: 90,
    youtubeKeyword: 'mint plant care growing'
  },
  {
    id: 'p022',
    name: 'Chinese Money Plant',
    scientificName: 'Pilea peperomioides',
    type: 'tropical',
    difficulty: 'beginner',
    sunlight: 'indirect',
    wateringFrequency: 'Every 1-2 weeks',
    wateringTips: 'Allow top soil to dry before watering. Avoid overwatering.',
    soilType: 'Well-draining potting mix',
    temperature: '60-75°F (15-24°C)',
    humidity: 'Moderate',
    description: 'Trendy coin-shaped leaves on elegant stems.',
    careInstructions: [
      'Rotate regularly for even growth',
      'Propagate offsets (pups) easily',
      'Avoid direct harsh sun',
      'Feed monthly in growing season'
    ],
    diseases: [
      { name: 'Curling Leaves', severity: 'low', symptoms: ['Downward curling'], treatment: 'Check soil moisture, look for overwatering' },
      { name: 'Fungus Gnats', severity: 'medium', symptoms: ['Small flies', 'Larvae in soil'], treatment: 'Let soil dry out, use sticky traps' }
    ],
    imageKeyword: 'pilea peperomioides money plant',
    tags: ['trendy', 'propagating', 'cheerful'],
    healthScore: 90,
    popularityScore: 89,
    youtubeKeyword: 'pilea money plant care'
  },
  {
    id: 'p023',
    name: 'Philodendron Heartleaf',
    scientificName: 'Philodendron hederaceum',
    type: 'tropical',
    difficulty: 'beginner',
    sunlight: 'indirect',
    wateringFrequency: 'Every 1-2 weeks',
    wateringTips: 'Allow top 2 inches to dry between waterings.',
    soilType: 'Well-draining, airy potting mix',
    temperature: '65-80°F (18-27°C)',
    humidity: 'Moderate to high',
    description: 'Heart-shaped velvety leaves on fast-growing vines.',
    careInstructions: [
      'Thrives in almost any indoor condition',
      'Train up a moss pole or trail down',
      'Prune for bushier growth',
      'Clean leaves monthly'
    ],
    diseases: [
      { name: 'Root Rot', severity: 'high', symptoms: ['Yellowing', 'Wilting', 'Smell'], treatment: 'Repot in dry soil, trim rot' },
      { name: 'Erwinia Blight', severity: 'high', symptoms: ['Mushy stems', 'Foul odor'], treatment: 'Remove affected parts, sterilize tools' }
    ],
    imageKeyword: 'heartleaf philodendron',
    tags: ['trailing', 'fast-growing', 'heart-shaped'],
    healthScore: 91,
    popularityScore: 92,
    youtubeKeyword: 'heartleaf philodendron care'
  },
  {
    id: 'p024',
    name: 'Rosemary',
    scientificName: 'Salvia rosmarinus',
    type: 'herb',
    difficulty: 'intermediate',
    sunlight: 'full-sun',
    wateringFrequency: 'Every 1-2 weeks',
    wateringTips: 'Drought tolerant. Let soil dry between waterings.',
    soilType: 'Sandy, alkaline, well-draining',
    temperature: '65-80°F (18-27°C)',
    humidity: 'Low',
    description: 'Fragrant Mediterranean herb essential in cooking.',
    careInstructions: [
      'Maximum sun exposure',
      'Excellent drainage required',
      'Prune regularly for bushy growth',
      'Bring indoors when frost threatens'
    ],
    diseases: [
      { name: 'Root Rot', severity: 'high', symptoms: ['Yellowing', 'Wilting', 'Black roots'], treatment: 'Improve drainage dramatically, reduce watering' },
      { name: 'Powdery Mildew', severity: 'medium', symptoms: ['White coating on leaves'], treatment: 'Improve air circulation, apply neem' }
    ],
    imageKeyword: 'rosemary herb plant',
    tags: ['culinary', 'Mediterranean', 'fragrant'],
    healthScore: 84,
    popularityScore: 88,
    youtubeKeyword: 'rosemary herb care growing'
  },
  {
    id: 'p025',
    name: 'Alocasia Polly',
    scientificName: 'Alocasia × amazonica',
    type: 'tropical',
    difficulty: 'expert',
    sunlight: 'indirect',
    wateringFrequency: 'Every 1-2 weeks',
    wateringTips: 'Keep moist but never waterlogged. High humidity essential.',
    soilType: 'Chunky, well-draining aroid mix',
    temperature: '65-85°F (18-29°C)',
    humidity: 'Very high',
    description: 'Dramatic arrow-shaped leaves with white veining.',
    careInstructions: [
      'High humidity is non-negotiable',
      'Bright indirect light',
      'Goes dormant in winter',
      'Use distilled water if possible'
    ],
    diseases: [
      { name: 'Spider Mites', severity: 'high', symptoms: ['Fine webbing', 'Pale stippled leaves'], treatment: 'Shower plant, apply neem, increase humidity' },
      { name: 'Root Rot', severity: 'high', symptoms: ['Yellowing', 'Collapse'], treatment: 'Repot immediately, trim roots, dry out' }
    ],
    imageKeyword: 'alocasia polly amazonica',
    tags: ['dramatic', 'statement', 'demanding'],
    healthScore: 70,
    popularityScore: 87,
    youtubeKeyword: 'alocasia care guide'
  },
  {
    id: 'p026',
    name: 'Dracaena Marginata',
    scientificName: 'Dracaena marginata',
    type: 'tropical',
    difficulty: 'beginner',
    sunlight: 'indirect',
    wateringFrequency: 'Every 2 weeks',
    wateringTips: 'Water when top half of soil is dry. Sensitive to fluoride in tap water.',
    soilType: 'Loose, well-draining potting mix',
    temperature: '65-80°F (18-27°C)',
    humidity: 'Low to moderate',
    description: 'Architectural spiky-leaved plant with red-edged foliage.',
    careInstructions: [
      'Use filtered water',
      'Remove yellow/brown leaves',
      'Tolerates low light well',
      'Slow grower, patient required'
    ],
    diseases: [
      { name: 'Fluoride Toxicity', severity: 'medium', symptoms: ['Brown leaf tips', 'Yellow edges'], treatment: 'Use rainwater or distilled water' },
      { name: 'Scale', severity: 'medium', symptoms: ['Brown bumps on stems'], treatment: 'Wipe with alcohol, apply systemic insecticide' }
    ],
    imageKeyword: 'dracaena marginata',
    tags: ['architectural', 'air-purifying', 'stylish'],
    healthScore: 86,
    popularityScore: 84,
    youtubeKeyword: 'dracaena marginata care'
  },
  {
    id: 'p027',
    name: 'Chrysanthemum',
    scientificName: 'Chrysanthemum morifolium',
    type: 'flowering',
    difficulty: 'intermediate',
    sunlight: 'full-sun',
    wateringFrequency: 'Every 2-3 days',
    wateringTips: 'Keep soil moist. Water at base to avoid fungal issues.',
    soilType: 'Rich, well-draining garden soil',
    temperature: '60-75°F (15-24°C)',
    humidity: 'Moderate',
    description: 'Cheerful autumn blooms in a rainbow of colors.',
    careInstructions: [
      'Pinch back for bushier growth',
      'Deadhead spent flowers',
      'Feed every 2 weeks during blooming',
      'Protect from hard frost'
    ],
    diseases: [
      { name: 'Botrytis Blight', severity: 'high', symptoms: ['Gray mold on flowers', 'Stem rot'], treatment: 'Remove affected parts, apply fungicide, improve airflow' },
      { name: 'Aphids', severity: 'low', symptoms: ['Curled leaves', 'Sticky residue'], treatment: 'Spray with water or insecticidal soap' }
    ],
    imageKeyword: 'chrysanthemum flowers',
    tags: ['seasonal', 'colorful', 'cut-flower'],
    healthScore: 80,
    popularityScore: 83,
    youtubeKeyword: 'chrysanthemum growing care'
  },
  {
    id: 'p028',
    name: 'African Violet',
    scientificName: 'Saintpaulia ionantha',
    type: 'flowering',
    difficulty: 'intermediate',
    sunlight: 'indirect',
    wateringFrequency: 'Every 5-7 days',
    wateringTips: 'Water from below! Wet leaves cause spots.',
    soilType: 'African violet mix or peat-based',
    temperature: '65-75°F (18-24°C)',
    humidity: 'Moderate',
    description: 'Compact plant with cheerful blooms year-round.',
    careInstructions: [
      'Water from below only',
      'Use room-temperature water',
      'Remove spent blooms',
      'Feed with African violet fertilizer'
    ],
    diseases: [
      { name: 'Crown Rot', severity: 'high', symptoms: ['Mushy crown', 'Collapsed center'], treatment: 'Remove rot, dry out, replant healthy sections' },
      { name: 'Powdery Mildew', severity: 'medium', symptoms: ['White powder on leaves'], treatment: 'Improve air circulation, apply fungicide' }
    ],
    imageKeyword: 'african violet flowering plant',
    tags: ['flowering', 'compact', 'year-round-blooms'],
    healthScore: 82,
    popularityScore: 79,
    youtubeKeyword: 'african violet care blooming'
  },
  {
    id: 'p029',
    name: 'Bamboo (Lucky)',
    scientificName: 'Dracaena sanderiana',
    type: 'tropical',
    difficulty: 'beginner',
    sunlight: 'indirect',
    wateringFrequency: 'Change water every 2 weeks (hydroponic)',
    wateringTips: 'Can grow in water or soil. Change water regularly if water-grown.',
    soilType: 'Soil or pebbles in water',
    temperature: '65-90°F (18-32°C)',
    humidity: 'Moderate',
    description: 'Symbolic good luck plant often grown in water.',
    careInstructions: [
      'Keep out of direct sun',
      'Change water every 2 weeks',
      'Add liquid fertilizer monthly',
      'Keep away from cold'
    ],
    diseases: [
      { name: 'Yellow Stalks', severity: 'medium', symptoms: ['Yellowing stalks'], treatment: 'Remove yellow stalks, check for root rot, improve drainage' },
      { name: 'Algae Growth', severity: 'low', symptoms: ['Green water', 'Slippery vase'], treatment: 'Clean vase, use opaque container, change water often' }
    ],
    imageKeyword: 'lucky bamboo plant',
    tags: ['feng-shui', 'water-growing', 'gift-plant'],
    healthScore: 88,
    popularityScore: 86,
    youtubeKeyword: 'lucky bamboo care water'
  },
  {
    id: 'p030',
    name: 'Croton',
    scientificName: 'Codiaeum variegatum',
    type: 'tropical',
    difficulty: 'intermediate',
    sunlight: 'partial-sun',
    wateringFrequency: 'Every 1-2 weeks',
    wateringTips: 'Keep evenly moist. Likes consistent watering.',
    soilType: 'Rich, well-draining potting mix',
    temperature: '60-80°F (15-27°C)',
    humidity: 'Moderate to high',
    description: 'Blazing tropical foliage in reds, oranges, yellows, and greens.',
    careInstructions: [
      'Bright light maintains coloration',
      'Avoid moving once established',
      'Mist regularly for humidity',
      'Protect from temperature extremes'
    ],
    diseases: [
      { name: 'Spider Mites', severity: 'high', symptoms: ['Stippled leaves', 'Webbing'], treatment: 'Shower plant, neem oil, increase humidity' },
      { name: 'Scale', severity: 'medium', symptoms: ['Brown waxy bumps'], treatment: 'Scrape, apply horticultural oil' }
    ],
    imageKeyword: 'croton colorful plant',
    tags: ['colorful', 'tropical', 'drama'],
    healthScore: 79,
    popularityScore: 81,
    youtubeKeyword: 'croton plant care'
  },
  {
    id: 'p031',
    name: 'English Ivy',
    scientificName: 'Hedera helix',
    type: 'tropical',
    difficulty: 'beginner',
    sunlight: 'partial-sun',
    wateringFrequency: 'Every 1-2 weeks',
    wateringTips: 'Keep evenly moist. Allow top inch to dry.',
    soilType: 'All-purpose potting mix',
    temperature: '50-70°F (10-21°C)',
    humidity: 'Moderate',
    description: 'Classic trailing vine perfect for hanging baskets.',
    careInstructions: [
      'Prefers cooler temperatures',
      'Keep away from heat sources',
      'Mist occasionally',
      'Prune regularly to prevent legginess'
    ],
    diseases: [
      { name: 'Bacterial Leaf Spot', severity: 'medium', symptoms: ['Water-soaked spots', 'Yellow halos'], treatment: 'Remove infected leaves, improve air circulation' },
      { name: 'Spider Mites', severity: 'medium', symptoms: ['Fine webbing', 'Yellow stippling'], treatment: 'Spray neem, increase humidity' }
    ],
    imageKeyword: 'english ivy hanging plant',
    tags: ['trailing', 'classic', 'cool-loving'],
    healthScore: 83,
    popularityScore: 80,
    youtubeKeyword: 'english ivy care indoor'
  },
  {
    id: 'p032',
    name: 'Gardenia',
    scientificName: 'Gardenia jasminoides',
    type: 'flowering',
    difficulty: 'expert',
    sunlight: 'partial-sun',
    wateringFrequency: 'Every 3-4 days',
    wateringTips: 'Keep evenly moist. Acidic water preferred.',
    soilType: 'Acidic, humus-rich mix',
    temperature: '65-70°F (18-21°C)',
    humidity: 'High',
    description: 'Intoxicatingly fragrant white flowers.',
    careInstructions: [
      'Consistent temperature essential',
      'Acidic fertilizer monthly',
      'High humidity required',
      'Avoid moving during budding'
    ],
    diseases: [
      { name: 'Sooty Mold', severity: 'medium', symptoms: ['Black coating', 'Following scale/aphids'], treatment: 'Treat pests first, then wipe mold with damp cloth' },
      { name: 'Bud Drop', severity: 'medium', symptoms: ['Buds falling before opening'], treatment: 'Consistent temperature, humidity, and moisture' }
    ],
    imageKeyword: 'gardenia white flowers plant',
    tags: ['fragrant', 'demanding', 'beautiful'],
    healthScore: 68,
    popularityScore: 76,
    youtubeKeyword: 'gardenia plant care blooming'
  },
  {
    id: 'p033',
    name: 'Prickly Pear Cactus',
    scientificName: 'Opuntia ficus-indica',
    type: 'cactus',
    difficulty: 'beginner',
    sunlight: 'full-sun',
    wateringFrequency: 'Monthly',
    wateringTips: 'Very drought tolerant. Water even less in winter.',
    soilType: 'Gritty, well-draining cactus mix',
    temperature: '45-90°F (7-32°C)',
    humidity: 'Very low',
    description: 'Paddle-shaped cactus producing edible pads and fruits.',
    careInstructions: [
      'Maximum sun required',
      'Handle with tongs (glochid spines)',
      'No water in winter dormancy',
      'Repot carefully'
    ],
    diseases: [
      { name: 'Phyllosticta Pad Spot', severity: 'medium', symptoms: ['Black spots on pads'], treatment: 'Remove affected pads, apply copper fungicide' },
      { name: 'Cochineal Scale', severity: 'high', symptoms: ['White cottony masses'], treatment: 'Remove with strong water spray, apply insecticide' }
    ],
    imageKeyword: 'prickly pear cactus opuntia',
    tags: ['edible', 'desert', 'hardy'],
    healthScore: 94,
    popularityScore: 74,
    youtubeKeyword: 'prickly pear cactus growing'
  },
  {
    id: 'p034',
    name: 'Hosta',
    scientificName: 'Hosta plantaginea',
    type: 'flowering',
    difficulty: 'beginner',
    sunlight: 'shade',
    wateringFrequency: 'Every 3-5 days',
    wateringTips: 'Keep consistently moist. Deep watering preferred.',
    soilType: 'Rich, humus-rich, moisture-retaining',
    temperature: '50-75°F (10-24°C)',
    humidity: 'Moderate to high',
    description: 'Bold, architectural shade garden favorite with textured foliage.',
    careInstructions: [
      'Perfect for dark gardens',
      'Divide every 3-4 years',
      'Watch for slugs',
      'Dies back in winter'
    ],
    diseases: [
      { name: 'Slug Damage', severity: 'medium', symptoms: ['Ragged holes in leaves'], treatment: 'Use slug traps, apply diatomaceous earth' },
      { name: 'Virus X', severity: 'high', symptoms: ['Mosaic patterns', 'Distorted growth'], treatment: 'No cure, remove infected plants' }
    ],
    imageKeyword: 'hosta shade plant',
    tags: ['shade-tolerant', 'bold-foliage', 'garden'],
    healthScore: 85,
    popularityScore: 79,
    youtubeKeyword: 'hosta plant care shade'
  },
  {
    id: 'p035',
    name: 'Ponytail Palm',
    scientificName: 'Beaucarnea recurvata',
    type: 'tree',
    difficulty: 'beginner',
    sunlight: 'full-sun',
    wateringFrequency: 'Every 3-4 weeks',
    wateringTips: 'Store water in bulbous trunk. Very drought tolerant.',
    soilType: 'Sandy, well-draining cactus mix',
    temperature: '65-85°F (18-29°C)',
    humidity: 'Low',
    description: 'Unique desert tree with swollen water-storing trunk.',
    careInstructions: [
      'Drought-tolerant, resist overwatering',
      'Bright direct sun ideal',
      'Very slow grower',
      'Low maintenance overall'
    ],
    diseases: [
      { name: 'Root Rot', severity: 'high', symptoms: ['Soft trunk base', 'Yellow fronds'], treatment: 'Reduce watering immediately, improve drainage' },
      { name: 'Scale Insects', severity: 'medium', symptoms: ['Bumps on trunk', 'Sticky residue'], treatment: 'Remove manually, apply neem oil' }
    ],
    imageKeyword: 'ponytail palm plant',
    tags: ['unique', 'desert', 'architectural'],
    healthScore: 93,
    popularityScore: 82,
    youtubeKeyword: 'ponytail palm care'
  },
  {
    id: 'p036',
    name: 'Prayer Plant',
    scientificName: 'Maranta leuconeura',
    type: 'tropical',
    difficulty: 'intermediate',
    sunlight: 'indirect',
    wateringFrequency: 'Every 1-2 weeks',
    wateringTips: 'Use distilled water. Keep moist but well-drained.',
    soilType: 'Well-draining peat-based mix',
    temperature: '65-80°F (18-27°C)',
    humidity: 'High',
    description: 'Leaves fold upward at night like praying hands.',
    careInstructions: [
      'Observe leaf movement for health check',
      'High humidity crucial',
      'Use filtered water',
      'Bright indirect light only'
    ],
    diseases: [
      { name: 'Leaf Curl', severity: 'medium', symptoms: ['Tightly curled leaves'], treatment: 'Increase humidity, check for root problems' },
      { name: 'Spider Mites', severity: 'medium', symptoms: ['Webbing, stippled leaves'], treatment: 'Increase humidity, apply neem oil' }
    ],
    imageKeyword: 'prayer plant maranta',
    tags: ['movement', 'patterned', 'fascinating'],
    healthScore: 81,
    popularityScore: 84,
    youtubeKeyword: 'prayer plant care'
  },
  {
    id: 'p037',
    name: 'Anthurium',
    scientificName: 'Anthurium andraeanum',
    type: 'tropical',
    difficulty: 'intermediate',
    sunlight: 'indirect',
    wateringFrequency: 'Every 1-2 weeks',
    wateringTips: 'Water when top 2 inches are dry. Overwatering is deadly.',
    soilType: 'Chunky, well-draining aroid mix',
    temperature: '65-85°F (18-29°C)',
    humidity: 'High',
    description: 'Glossy heart-shaped spathe in vivid reds and pinks.',
    careInstructions: [
      'Keep away from direct sun',
      'High humidity needed',
      'Feed monthly with balanced fertilizer',
      'Wipe waxy spathes to maintain shine'
    ],
    diseases: [
      { name: 'Bacterial Blight', severity: 'high', symptoms: ['Water-soaked spots, yellowing'], treatment: 'Remove infected leaves, copper bactericide' },
      { name: 'Root Rot', severity: 'high', symptoms: ['Yellowing', 'Wilting', 'Soft roots'], treatment: 'Repot, trim, well-draining mix' }
    ],
    imageKeyword: 'anthurium red flower plant',
    tags: ['flowering', 'glossy', 'long-lasting'],
    healthScore: 83,
    popularityScore: 86,
    youtubeKeyword: 'anthurium plant care blooming'
  },
  {
    id: 'p038',
    name: 'Parlor Palm',
    scientificName: 'Chamaedorea elegans',
    type: 'tree',
    difficulty: 'beginner',
    sunlight: 'indirect',
    wateringFrequency: 'Every 1-2 weeks',
    wateringTips: 'Allow top inch to dry between waterings.',
    soilType: 'Peat-based well-draining mix',
    temperature: '65-80°F (18-27°C)',
    humidity: 'Moderate',
    description: 'Elegant compact palm perfect for low-light interiors.',
    careInstructions: [
      'Tolerates low light well',
      'Avoid direct sun (burns fronds)',
      'Feed lightly during growing season',
      'Remove dead fronds'
    ],
    diseases: [
      { name: 'Spider Mites', severity: 'medium', symptoms: ['Yellow stippling', 'Webbing'], treatment: 'Increase humidity, spray neem oil' },
      { name: 'Root Rot', severity: 'medium', symptoms: ['Brown tips', 'Yellowing fronds'], treatment: 'Improve drainage, reduce watering' }
    ],
    imageKeyword: 'parlor palm indoor',
    tags: ['tropical', 'elegant', 'low-light'],
    healthScore: 87,
    popularityScore: 83,
    youtubeKeyword: 'parlor palm care'
  },
  {
    id: 'p039',
    name: 'Yucca',
    scientificName: 'Yucca elephantipes',
    type: 'tree',
    difficulty: 'beginner',
    sunlight: 'full-sun',
    wateringFrequency: 'Every 2-4 weeks',
    wateringTips: 'Drought tolerant. Let soil dry completely between waterings.',
    soilType: 'Sandy, gritty, well-draining',
    temperature: '50-80°F (10-27°C)',
    humidity: 'Low',
    description: 'Bold architectural plant with sword-like leaves.',
    careInstructions: [
      'Loves direct sun',
      'Water very sparingly',
      'Tolerates neglect well',
      'Wear gloves when pruning'
    ],
    diseases: [
      { name: 'Cane Rot', severity: 'high', symptoms: ['Soft mushy canes', 'Collapse'], treatment: 'Cut away rot, let dry, treat with fungicide' },
      { name: 'Brown Leaf Tips', severity: 'low', symptoms: ['Crispy tips'], treatment: 'Trim with sterile scissors, increase humidity slightly' }
    ],
    imageKeyword: 'yucca plant indoor',
    tags: ['architectural', 'drought-tolerant', 'bold'],
    healthScore: 90,
    popularityScore: 78,
    youtubeKeyword: 'yucca plant care indoor'
  },
  {
    id: 'p040',
    name: 'Begonia Rex',
    scientificName: 'Begonia rex-cultorum',
    type: 'flowering',
    difficulty: 'intermediate',
    sunlight: 'indirect',
    wateringFrequency: 'Every 1-2 weeks',
    wateringTips: 'Water when top inch is dry. Avoid wetting leaves.',
    soilType: 'Well-draining, peat-rich mix',
    temperature: '60-75°F (15-24°C)',
    humidity: 'Moderate (40-50%)',
    description: 'Spectacular metallic-patterned foliage in swirling designs.',
    careInstructions: [
      'Bright indirect light only',
      'Never mist (causes leaf spots)',
      'Humidity tray for moisture',
      'Fertilize lightly monthly'
    ],
    diseases: [
      { name: 'Powdery Mildew', severity: 'medium', symptoms: ['White powder on leaves'], treatment: 'Improve air circulation, apply fungicide' },
      { name: 'Rhizome Rot', severity: 'high', symptoms: ['Mushy base', 'Collapse'], treatment: 'Cut to healthy tissue, treat with fungicide' }
    ],
    imageKeyword: 'rex begonia colorful plant',
    tags: ['ornamental-foliage', 'colorful', 'showy'],
    healthScore: 77,
    popularityScore: 80,
    youtubeKeyword: 'rex begonia care'
  },
  {
    id: 'p041',
    name: 'Watermelon Peperomia',
    scientificName: 'Peperomia argyreia',
    type: 'tropical',
    difficulty: 'beginner',
    sunlight: 'indirect',
    wateringFrequency: 'Every 1-2 weeks',
    wateringTips: 'Allow soil to dry slightly between waterings. Stores water in leaves.',
    soilType: 'Well-draining, peat-perlite mix',
    temperature: '65-80°F (18-27°C)',
    humidity: 'Moderate',
    description: 'Adorable watermelon-striped leaves on red stems.',
    careInstructions: [
      'Easy care for beginners',
      'Avoid overwatering',
      'Moderate light ideal',
      'Compact, stays small'
    ],
    diseases: [
      { name: 'Root Rot', severity: 'high', symptoms: ['Mushy stems', 'Yellow leaves'], treatment: 'Repot immediately, dry out roots' },
      { name: 'Ring Spot Virus', severity: 'medium', symptoms: ['Ring patterns on leaves'], treatment: 'No cure, remove plant to prevent spread' }
    ],
    imageKeyword: 'watermelon peperomia plant',
    tags: ['cute', 'compact', 'beginner-friendly'],
    healthScore: 89,
    popularityScore: 88,
    youtubeKeyword: 'watermelon peperomia care'
  },
  {
    id: 'p042',
    name: 'Oxalis',
    scientificName: 'Oxalis triangularis',
    type: 'flowering',
    difficulty: 'beginner',
    sunlight: 'indirect',
    wateringFrequency: 'Every 1-2 weeks',
    wateringTips: 'Keep lightly moist. Goes dormant when stressed.',
    soilType: 'Well-draining potting mix',
    temperature: '60-75°F (15-24°C)',
    humidity: 'Moderate',
    description: 'Purple shamrock with delicate pink flowers.',
    careInstructions: [
      'Closes at night and when light is low',
      'Allow dormancy when needed',
      'Bulb will regrow after dormancy',
      'Fertilize monthly in growing season'
    ],
    diseases: [
      { name: 'Powdery Mildew', severity: 'low', symptoms: ['White powder', 'Distorted growth'], treatment: 'Improve airflow, neem oil spray' },
      { name: 'Aphids', severity: 'low', symptoms: ['Sticky residue', 'Stunted growth'], treatment: 'Blast with water, insecticidal soap' }
    ],
    imageKeyword: 'oxalis purple shamrock plant',
    tags: ['unique', 'purple', 'movement'],
    healthScore: 88,
    popularityScore: 79,
    youtubeKeyword: 'oxalis triangularis care'
  },
  {
    id: 'p043',
    name: 'Bird\'s Nest Fern',
    scientificName: 'Asplenium nidus',
    type: 'fern',
    difficulty: 'beginner',
    sunlight: 'shade',
    wateringFrequency: 'Every 1-2 weeks',
    wateringTips: 'Keep soil moist. Water at the edge, not into the center.',
    soilType: 'Peat-based, moisture-retaining',
    temperature: '65-80°F (18-27°C)',
    humidity: 'High',
    description: 'Elegant wavy fronds forming a nest-like rosette.',
    careInstructions: [
      'Water around the edge, not the center',
      'High humidity needed',
      'No direct sun',
      'Remove damaged fronds carefully'
    ],
    diseases: [
      { name: 'Scale Insects', severity: 'medium', symptoms: ['Brown bumps on fronds', 'Yellowing'], treatment: 'Wipe with alcohol, apply neem oil' },
      { name: 'Bacterial Rot', severity: 'high', symptoms: ['Mushy center fronds', 'Foul smell'], treatment: 'Remove affected fronds, improve airflow' }
    ],
    imageKeyword: 'birds nest fern asplenium',
    tags: ['fern', 'elegant', 'low-light'],
    healthScore: 85,
    popularityScore: 81,
    youtubeKeyword: 'birds nest fern care'
  },
  {
    id: 'p044',
    name: 'Succulent (Haworthia)',
    scientificName: 'Haworthia fasciata',
    type: 'succulent',
    difficulty: 'beginner',
    sunlight: 'partial-sun',
    wateringFrequency: 'Every 2-3 weeks',
    wateringTips: 'Soak and dry method. Very tolerant of drought.',
    soilType: 'Cactus mix with added perlite',
    temperature: '65-80°F (18-27°C)',
    humidity: 'Low',
    description: 'Architectural striped succulent tolerating low light better than most.',
    careInstructions: [
      'One of few succulents for low light',
      'Excellent drainage essential',
      'Propagate by offsets',
      'Never water into the rosette'
    ],
    diseases: [
      { name: 'Root Rot', severity: 'high', symptoms: ['Mushy base', 'Shriveled leaves'], treatment: 'Remove from soil, dry roots, repot' },
      { name: 'Mealybugs', severity: 'medium', symptoms: ['White fluffy spots'], treatment: 'Wipe with alcohol, isolate plant' }
    ],
    imageKeyword: 'haworthia succulent striped',
    tags: ['compact', 'low-light-succulent', 'beginner'],
    healthScore: 93,
    popularityScore: 82,
    youtubeKeyword: 'haworthia care'
  },
  {
    id: 'p045',
    name: 'Venus Flytrap',
    scientificName: 'Dionaea muscipula',
    type: 'tropical',
    difficulty: 'expert',
    sunlight: 'full-sun',
    wateringFrequency: 'Constantly moist (tray method)',
    wateringTips: 'Use only distilled or rainwater. NEVER tap or fertilizers.',
    soilType: 'Sphagnum moss or peat/perlite (no nutrients)',
    temperature: '70-95°F (21-35°C)',
    humidity: 'Very high',
    description: 'Carnivorous plant with snap-trap leaves that catch insects.',
    careInstructions: [
      'Use ONLY distilled or rainwater',
      'No fertilizers ever',
      'Full sun 6+ hours',
      'Allow winter dormancy'
    ],
    diseases: [
      { name: 'Black Trap Rot', severity: 'high', symptoms: ['Blackening traps'], treatment: 'Normal after feeding (turn black naturally), excessive = root rot' },
      { name: 'Aphids', severity: 'medium', symptoms: ['Stunted growth', 'Distorted leaves'], treatment: 'Rinse with distilled water, no pesticides' }
    ],
    imageKeyword: 'venus flytrap carnivorous plant',
    tags: ['carnivorous', 'fascinating', 'unique'],
    healthScore: 70,
    popularityScore: 91,
    youtubeKeyword: 'venus flytrap care feeding'
  },
  {
    id: 'p046',
    name: 'Tradescantia',
    scientificName: 'Tradescantia zebrina',
    type: 'tropical',
    difficulty: 'beginner',
    sunlight: 'indirect',
    wateringFrequency: 'Every 1-2 weeks',
    wateringTips: 'Keep evenly moist. Tolerates some dryness.',
    soilType: 'Standard potting mix',
    temperature: '60-80°F (15-27°C)',
    humidity: 'Moderate',
    description: 'Fast-growing trailing plant with striking purple-silver striped leaves.',
    careInstructions: [
      'Pinch to encourage bushy growth',
      'Easy propagation in water',
      'Bright light maintains variegation',
      'Very forgiving'
    ],
    diseases: [
      { name: 'Botrytis', severity: 'medium', symptoms: ['Gray mold', 'Rotting stems'], treatment: 'Remove affected parts, improve airflow' },
      { name: 'Root Rot', severity: 'medium', symptoms: ['Wilting', 'Yellow leaves'], treatment: 'Repot in fresh dry soil' }
    ],
    imageKeyword: 'tradescantia zebrina purple plant',
    tags: ['fast-growing', 'colorful', 'trailing'],
    healthScore: 90,
    popularityScore: 85,
    youtubeKeyword: 'tradescantia zebrina care'
  },
  {
    id: 'p047',
    name: 'Cast Iron Plant',
    scientificName: 'Aspidistra elatior',
    type: 'tropical',
    difficulty: 'beginner',
    sunlight: 'shade',
    wateringFrequency: 'Every 2-3 weeks',
    wateringTips: 'Extremely tolerant. Water when soil is dry.',
    soilType: 'Any well-draining mix',
    temperature: '50-75°F (10-24°C)',
    humidity: 'Low to moderate',
    description: 'Nearly indestructible with bold dark green strap leaves.',
    careInstructions: [
      'Survives almost any condition',
      'Perfect for dark corners',
      'Very slow grower',
      'Wipe leaves occasionally'
    ],
    diseases: [
      { name: 'Leaf Scorch', severity: 'low', symptoms: ['Brown patches', 'Bleached areas'], treatment: 'Move to shade, eliminate direct sun exposure' },
      { name: 'Scale', severity: 'medium', symptoms: ['Bumps on leaves'], treatment: 'Wipe with alcohol solution' }
    ],
    imageKeyword: 'cast iron plant aspidistra',
    tags: ['indestructible', 'shade-tolerant', 'bold'],
    healthScore: 95,
    popularityScore: 70,
    youtubeKeyword: 'cast iron plant care'
  },
  {
    id: 'p048',
    name: 'Lemon Tree (Dwarf)',
    scientificName: 'Citrus × limon',
    type: 'tree',
    difficulty: 'intermediate',
    sunlight: 'full-sun',
    wateringFrequency: 'Every 1-2 weeks',
    wateringTips: 'Keep evenly moist. Water when top 2 inches are dry.',
    soilType: 'Citrus/potting mix, slightly acidic',
    temperature: '65-85°F (18-29°C)',
    humidity: 'Moderate',
    description: 'Fragrant indoor citrus tree producing real lemons.',
    careInstructions: [
      'Maximum sun (south-facing window)',
      'Fertilize with citrus fertilizer',
      'Hand-pollinate flowers indoors',
      'Bring outdoors in summer'
    ],
    diseases: [
      { name: 'Citrus Greening', severity: 'high', symptoms: ['Yellow mottled leaves', 'Misshapen fruit'], treatment: 'No cure, remove infected plant' },
      { name: 'Leaf Miners', severity: 'medium', symptoms: ['Silvery trails on leaves'], treatment: 'Remove affected leaves, apply neem oil' }
    ],
    imageKeyword: 'dwarf lemon tree indoor',
    tags: ['edible', 'fragrant', 'productive'],
    healthScore: 78,
    popularityScore: 85,
    youtubeKeyword: 'dwarf lemon tree care indoor'
  },
  {
    id: 'p049',
    name: 'Sago Palm',
    scientificName: 'Cycas revoluta',
    type: 'tree',
    difficulty: 'intermediate',
    sunlight: 'partial-sun',
    wateringFrequency: 'Every 2 weeks',
    wateringTips: 'Allow soil to dry between waterings. Drought tolerant.',
    soilType: 'Sandy, well-draining mix',
    temperature: '65-75°F (18-24°C)',
    humidity: 'Low to moderate',
    description: 'Ancient cycad with dramatic feathery fronds.',
    careInstructions: [
      'Very slow grower (1 leaf/year)',
      'All parts are toxic to pets',
      'Remove pups to propagate',
      'Fertilize in growing season only'
    ],
    diseases: [
      { name: 'Scale', severity: 'high', symptoms: ['Yellow fronds', 'Sticky deposits'], treatment: 'Apply horticultural oil, repeat treatments' },
      { name: 'Frizzle Top', severity: 'medium', symptoms: ['Deformed new growth'], treatment: 'Apply manganese sulfate, acidify soil' }
    ],
    imageKeyword: 'sago palm cycas',
    tags: ['ancient', 'dramatic', 'slow-growing'],
    healthScore: 82,
    popularityScore: 75,
    youtubeKeyword: 'sago palm care guide'
  },
  {
    id: 'p050',
    name: 'Nerve Plant',
    scientificName: 'Fittonia albivenis',
    type: 'tropical',
    difficulty: 'intermediate',
    sunlight: 'shade',
    wateringFrequency: 'Every 3-4 days',
    wateringTips: 'Never let dry out completely. Wilts dramatically when thirsty (recovers quickly).',
    soilType: 'Moist, well-draining peat mix',
    temperature: '65-80°F (18-27°C)',
    humidity: 'Very high',
    description: 'Intricate pink or white network of veins on small leaves.',
    careInstructions: [
      'Terrarium perfect plant',
      'Never let dry out',
      'High humidity essential',
      'Pinch flowers to maintain foliage'
    ],
    diseases: [
      { name: 'Root Rot', severity: 'high', symptoms: ['Collapse', 'Brown roots'], treatment: 'Cut rot, repot in fresh moist mix' },
      { name: 'Mealybugs', severity: 'medium', symptoms: ['White fluff', 'Stunted growth'], treatment: 'Remove manually, apply neem oil' }
    ],
    imageKeyword: 'nerve plant fittonia',
    tags: ['colorful-veins', 'terrarium', 'compact'],
    healthScore: 76,
    popularityScore: 78,
    youtubeKeyword: 'nerve plant fittonia care'
  },
  {
    id: 'p051',
    name: 'Catnip',
    scientificName: 'Nepeta cataria',
    type: 'herb',
    difficulty: 'beginner',
    sunlight: 'full-sun',
    wateringFrequency: 'Every 1-2 weeks',
    wateringTips: 'Allow to dry slightly between waterings. Drought tolerant.',
    soilType: 'Well-draining potting mix',
    temperature: '55-85°F (13-29°C)',
    humidity: 'Low to moderate',
    description: 'Aromatic herb beloved by cats and useful for humans too.',
    careInstructions: [
      'Deadhead to prevent spreading',
      'Cut back after flowering',
      'Keep cats away if for human use',
      'Harvest in morning for best oils'
    ],
    diseases: [
      { name: 'Powdery Mildew', severity: 'medium', symptoms: ['White powder on leaves'], treatment: 'Improve air circulation, neem oil' },
      { name: 'Aphids', severity: 'low', symptoms: ['Curled leaves', 'Sticky honeydew'], treatment: 'Strong water spray, insecticidal soap' }
    ],
    imageKeyword: 'catnip herb plant',
    tags: ['herb', 'cats', 'aromatic'],
    healthScore: 89,
    popularityScore: 76,
    youtubeKeyword: 'catnip herb growing care'
  },
  {
    id: 'p052',
    name: 'Swiss Chard',
    scientificName: 'Beta vulgaris subsp. cicla',
    type: 'vegetable',
    difficulty: 'beginner',
    sunlight: 'partial-sun',
    wateringFrequency: 'Every 2-3 days',
    wateringTips: 'Keep soil consistently moist. Mulch to retain moisture.',
    soilType: 'Rich, well-draining vegetable mix',
    temperature: '50-75°F (10-24°C)',
    humidity: 'Moderate',
    description: 'Colorful leafy green with rainbow stalks.',
    careInstructions: [
      'Cut outer leaves for continuous harvest',
      'Tolerates light frost',
      'Fertilize every 3 weeks',
      'Great for containers'
    ],
    diseases: [
      { name: 'Cercospora Leaf Spot', severity: 'medium', symptoms: ['Round tan spots', 'Purple borders'], treatment: 'Improve airflow, apply copper fungicide' },
      { name: 'Downy Mildew', severity: 'medium', symptoms: ['Yellow leaves', 'Purple fuzz below'], treatment: 'Reduce moisture, apply fungicide' }
    ],
    imageKeyword: 'rainbow swiss chard plant',
    tags: ['edible', 'colorful', 'productive'],
    healthScore: 88,
    popularityScore: 74,
    youtubeKeyword: 'swiss chard growing harvest'
  },
  {
    id: 'p053',
    name: 'Clivia',
    scientificName: 'Clivia miniata',
    type: 'flowering',
    difficulty: 'intermediate',
    sunlight: 'shade',
    wateringFrequency: 'Every 2-3 weeks',
    wateringTips: 'Reduce water significantly in winter to trigger blooming.',
    soilType: 'Rich, fast-draining mix',
    temperature: '60-80°F (15-27°C)',
    humidity: 'Low to moderate',
    description: 'Winter dormancy triggers spectacular spring orange blooms.',
    careInstructions: [
      'Dry winter period essential for blooms',
      'Never overwater',
      'Feed in spring and summer',
      'Do not repot often (likes to be rootbound)'
    ],
    diseases: [
      { name: 'Mealybugs', severity: 'medium', symptoms: ['White cottony masses', 'Leaf yellowing'], treatment: 'Alcohol wipe, neem oil treatment' },
      { name: 'Root Rot', severity: 'high', symptoms: ['Yellowing', 'Collapse'], treatment: 'Repot in dry conditions, reduce watering' }
    ],
    imageKeyword: 'clivia orange flower plant',
    tags: ['flowering', 'low-light', 'seasonal'],
    healthScore: 83,
    popularityScore: 72,
    youtubeKeyword: 'clivia plant care blooming'
  }
];

export const PLANT_TYPES = ['succulent', 'tropical', 'herb', 'flowering', 'tree', 'fern', 'cactus', 'vegetable', 'aquatic'] as const;
export const DIFFICULTY_LEVELS = ['beginner', 'intermediate', 'expert'] as const;
export const SUNLIGHT_NEEDS = ['full-sun', 'partial-sun', 'shade', 'indirect'] as const;
