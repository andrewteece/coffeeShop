export type Product = {
  id: string;
  title: string;
  description: string;
  image: string;
  ingredients: string[];
  price: number;
};

export async function fetchCoffees(): Promise<Product[]> {
  const res = await fetch('https://api.sampleapis.com/coffee/hot');
  if (!res.ok) throw new Error('...');
  const data = await res.json(); // add price-generator if missing
  return data.map((r: any) => ({
    id: r.id.toString(),
    title: r.title,
    description: r.description,
    image: r.image,
    ingredients: r.ingredients,
    price: Math.random() * 5 + 2, // replace with your randomPrice logic
  }));
}
