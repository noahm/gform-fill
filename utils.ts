export function randomItemOf<Item>(list: Array<Item>): Item {
  const idx = Math.floor(Math.random() * list.length);
  return list[idx];
}

/** Shuffles `list` in place */
export function shuffle<Item>(list: Array<Item>): Array<Item> {
  for (let i = list.length - 1; i > 0; i--) {
    const k = Math.floor(Math.random() * (i + 1));
    const temp = list[k];
    list[k] = list[i];
    list[i] = temp;
  }
  return list;
}
