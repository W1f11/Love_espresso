// Espresso Love — full drink menu
// Each category id is used for tab filtering in Menu.jsx

export const menuCategories = [
  { id: 'black-coffee', label: 'Black Coffee' },
  { id: 'white-coffee', label: 'White Coffee' },
  { id: 'iced-coffee', label: 'Iced Coffee' },
  { id: 'frappe', label: 'Frappé' },
  { id: 'tea', label: 'Tea' },
  { id: 'iced-tea-juice', label: 'Iced Tea, Juice & Mojito' },
  { id: 'extras', label: 'Extras' },
]

export const menuItems = [
  // BLACK COFFEE
  { id: 'espresso', name: 'Espresso', category: 'black-coffee', price: 18 },
  { id: 'double-espresso', name: 'Double Espresso', category: 'black-coffee', price: 20 },
  { id: 'americano', name: 'Americano', category: 'black-coffee', price: 21 },
  { id: 'arabica-100', name: 'Arabica 100', category: 'black-coffee', price: 25 },

  // WHITE COFFEE
  { id: 'latte', name: 'Latte', category: 'white-coffee', price: 25 },
  { id: 'cortado', name: 'Cortado', category: 'white-coffee', price: 23 },
  { id: 'piccolo', name: 'Piccolo', category: 'white-coffee', price: 22 },
  { id: 'cappuccino', name: 'Cappuccino', category: 'white-coffee', price: 24 },
  { id: 'flat-white', name: 'Flat White', category: 'white-coffee', price: 26 },
  { id: 'spanish-latte', name: 'Spanish Latte', category: 'white-coffee', price: 36 },
  { id: 'caramel-macchiato', name: 'Caramel Macchiato', category: 'white-coffee', price: 40 },
  { id: 'mocha', name: 'Mocha', category: 'white-coffee', price: 45 },
  { id: 'hot-chocolate', name: 'Hot Chocolate', category: 'white-coffee', price: 38 },
  { id: 'matcha', name: 'Matcha', category: 'white-coffee', price: 50 },

  // ICED COFFEE
  { id: 'iced-americano', name: 'Iced Americano', category: 'iced-coffee', price: 21 },
  { id: 'iced-latte', name: 'Iced Latte', category: 'iced-coffee', price: 30 },
  { id: 'iced-spanish-latte', name: 'Iced Spanish Latte', category: 'iced-coffee', price: 45 },
  { id: 'iced-caramel-macchiato', name: 'Iced Caramel Macchiato', category: 'iced-coffee', price: 40 },
  { id: 'iced-mocha', name: 'Iced Mocha', category: 'iced-coffee', price: 45 },
  { id: 'iced-matcha', name: 'Iced Matcha', category: 'iced-coffee', price: 55 },
  { id: 'iced-v60', name: 'Iced V60', category: 'iced-coffee', price: 50 },

  // FRAPPÉ
  { id: 'caramel-frappe', name: 'Caramel Frappé', category: 'frappe', price: 38 },
  { id: 'chocolate-frappe', name: 'Chocolate Frappé', category: 'frappe', price: 38 },
  { id: 'milkshake-caramel', name: 'Milkshake Caramel', category: 'frappe', price: 40 },
  { id: 'milkshake-strawberry', name: 'Milkshake Strawberry', category: 'frappe', price: 40 },
  { id: 'milkshake-vanilla', name: 'Milkshake Vanilla', category: 'frappe', price: 35 },
  { id: 'milkshake-oreo', name: 'Milkshake Oreo', category: 'frappe', price: 45 },
  { id: 'milkshake-kitkat', name: 'Milkshake KitKat', category: 'frappe', price: 45 },
  { id: 'milkshake-pistachio', name: 'Milkshake Pistachio', category: 'frappe', price: 45 },

  // TEA
  { id: 'moroccan-tea', name: 'Moroccan Tea', category: 'tea', price: 22 },
  { id: 'black-tea', name: 'Black Tea', category: 'tea', price: 22 },
  { id: 'verbena-tea', name: 'Verbena Tea', category: 'tea', price: 22 },
  { id: 'verbena-milk', name: 'Verbena with Milk', category: 'tea', price: 24 },

  // ICED TEA, FRESH JUICE & MOJITO
  { id: 'raspberry-iced-tea', name: 'Raspberry Iced Tea', category: 'iced-tea-juice', price: 35 },
  { id: 'peach-iced-tea', name: 'Peach Iced Tea', category: 'iced-tea-juice', price: 33 },
  { id: 'hibiscus', name: 'Hibiscus', category: 'iced-tea-juice', price: 28 },
  { id: 'fresh-orange-juice', name: 'Fresh Orange Juice', category: 'iced-tea-juice', price: 25 },
  { id: 'mango-juice', name: 'Mango Juice', category: 'iced-tea-juice', price: 35 },
  { id: 'classic-mojito', name: 'Classic Mojito', category: 'iced-tea-juice', price: 30 },
  { id: 'fruit-mojito', name: 'Fruit Mojito', category: 'iced-tea-juice', price: 35 },

  // EXTRAS
  { id: 'syrup', name: 'Vanilla, Caramel or Hazelnut Syrup', category: 'extras', price: 5 },
  { id: 'alt-milk', name: 'Alternative Milk (Oat, Almond, etc.)', category: 'extras', price: 10 },
  { id: 'fruit-puree', name: 'Fruit Purée', category: 'extras', price: 15 },
]
