const Items = [
  { count: 0, product: "Handwash", id: 123123, instock: 8 },
  { count: 0, product: "Rice", id: 654321, instock: 4 },
  { count: 0, product: "PaperRoll", id: 123456, instock: 5 },
  { count: 0, product: "Spinach", id: 125678, instock: 7 },
  { count: 0, product: "Tomatoes", id: 121234, instock: 9 },
  { count: 0, product: "Sanitizer", id: 567890, instock: 16 },
];

export function getItems() {
  return Items;
}

export function getItem(id) {
  return Items.find((i) => i._id === id);
}
