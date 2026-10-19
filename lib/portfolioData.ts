export interface PortfolioProject {
  id: string
  title: string
  category: string
  description: string
  image: string
  tags: string[]
  year: string
}

export const portfolioProjects: PortfolioProject[] = [
  {
    id: 'hotline',
    title: 'Hotline',
    category: 'Cine',
    description: 'Efectista de maquillaje FX para largometraje.',
    image: '/hotline.jpg',
    tags: ['Efectos Especiales', 'Cine', 'FX'],
    year: '2025',
  },
  {
    id: 'rockstar',
    title: 'Rockstar',
    category: 'Publicidad',
    description: 'Maquillaje FX para publicidad.',
    image: '/rockstar.jpeg',
    tags: ['Efectos Especiales', 'Publicidad', 'FX'],
    year: '2023',
  },
  {
    id: 'proj-1',
    title: 'Zombie Apocalypse',
    category: 'Cine',
    description: 'Transformación completa con prótesis de espuma y sangre artificial para producción cinematográfica independiente.',
    image: 'https://picsum.photos/seed/zombie1/600/800',
    tags: ['Prótesis', 'Sangre FX', 'Cine'],
    year: '2025',
  },
  {
    id: 'proj-2',
    title: 'The Ancient Witch',
    category: 'Teatro',
    description: 'Envejecimiento de 40 años con látex líquido y pintura especializada para obra de teatro del circuito independiente.',
    image: 'https://picsum.photos/seed/witch1/600/800',
    tags: ['Envejecimiento', 'Látex', 'Teatro'],
    year: '2025',
  },
  {
    id: 'proj-3',
    title: 'Burn Victim SFX',
    category: 'Publicidad',
    description: 'Efectos de quemaduras realistas con gelatina y pigmentos para campaña de concientización sobre seguridad vial.',
    image: 'https://picsum.photos/seed/burn1/600/800',
    tags: ['Quemaduras', 'Gelatina', 'Publicidad'],
    year: '2024',
  },
  {
    id: 'proj-4',
    title: 'Alien Prosthetics',
    category: 'Fotografía',
    description: 'Diseño y aplicación de prótesis alien con silicona platinada para sesión de fotografía artística.',
    image: 'https://picsum.photos/seed/alien1/600/800',
    tags: ['Silicona', 'Prótesis', 'Fotografía'],
    year: '2024',
  },
  {
    id: 'proj-5',
    title: 'Horror Short Film',
    category: 'Cine',
    description: 'Dirección de arte y maquillaje FX completo para cortometraje de terror independiente, 6 personajes.',
    image: 'https://picsum.photos/seed/horror2/600/800',
    tags: ['Dirección Arte', 'Terror', 'Cine'],
    year: '2024',
  },
  {
    id: 'proj-6',
    title: 'Decomposition Study',
    category: 'Fotografía',
    description: 'Serie fotográfica artística explorando estados de descomposición con materiales FX de alta gama.',
    image: 'https://picsum.photos/seed/decomp1/600/800',
    tags: ['Artístico', 'Fotografía', 'FX'],
    year: '2025',
  },
]
