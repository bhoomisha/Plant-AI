import { PLANTS, Plant } from '../data/plants';

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

const simulateError = () => Math.random() < 0.1;

export interface ApiResponse<T> {
  data: T;
  success: boolean;
  message?: string;
}

export const plantApi = {
  async getAllPlants(): Promise<ApiResponse<Plant[]>> {
    await delay(800 + Math.random() * 400);
    if (simulateError()) throw new Error('Network error. Please try again.');
    return { data: PLANTS, success: true };
  },

  async searchPlants(query: string, filters: { type?: string; difficulty?: string; sunlight?: string }): Promise<ApiResponse<Plant[]>> {
    await delay(300 + Math.random() * 300);
    let results = [...PLANTS];

    if (query.trim()) {
      const q = query.toLowerCase();
      results = results.filter(p =>
        p.name.toLowerCase().includes(q) ||
        p.scientificName.toLowerCase().includes(q) ||
        p.tags.some(t => t.includes(q)) ||
        p.description.toLowerCase().includes(q)
      );
    }

    if (filters.type) results = results.filter(p => p.type === filters.type);
    if (filters.difficulty) results = results.filter(p => p.difficulty === filters.difficulty);
    if (filters.sunlight) results = results.filter(p => p.sunlight === filters.sunlight);

    return { data: results, success: true };
  },

  async getPlantById(id: string): Promise<ApiResponse<Plant | null>> {
    await delay(200 + Math.random() * 200);
    const plant = PLANTS.find(p => p.id === id) || null;
    return { data: plant, success: true };
  },

  async scanPlant(imageFile: File): Promise<ApiResponse<{
    plantId: string;
    plantName: string;
    confidence: number;
    careSummary: string;
  }>> {
    await delay(2000 + Math.random() * 1500);
    if (simulateError()) throw new Error('Scan failed. Please try again with a clearer image.');

    // Mock AI matching - pick a plant based on file name or randomly
    const randomIndex = Math.floor(Math.random() * PLANTS.length);
    const plant = PLANTS[randomIndex];
    const confidence = 70 + Math.floor(Math.random() * 28);

    return {
      data: {
        plantId: plant.id,
        plantName: plant.name,
        confidence,
        careSummary: `${plant.name} (${plant.scientificName}). Water ${plant.wateringFrequency.toLowerCase()}. Needs ${plant.sunlight.replace('-', ' ')} light. Difficulty: ${plant.difficulty}. ${plant.description}`
      },
      success: true,
    };
  },
};
