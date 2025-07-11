export function randomPrice(min = 2, max = 6): number {
  const raw = Math.random() * (max - min) + min;
  return Math.ceil(raw);
}
