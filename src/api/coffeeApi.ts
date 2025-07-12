import { randomPrice } from '../utils/price';

export type Product = {
  id: string;
  title: string;
  description: string;
  image: string;
  ingredients: string[];
  price: number;
};

interface Recipe {
  id: number;
  title: string;
  description: string;
  image: string;
  ingredients: string[];
}

export async function fetchCoffees(): Promise<Product[]> {
  const res = await fetch('https://api.sampleapis.com/coffee/hot');
  if (!res.ok) throw new Error('Failed to fetch coffee recipes');

  const data: Recipe[] = await res.json();
  return data.map((r) => ({
    id: r.id.toString(),
    title: r.title,
    description: r.description,
    image: r.image,
    ingredients: r.ingredients,
    price: randomPrice(),
  }));
}
