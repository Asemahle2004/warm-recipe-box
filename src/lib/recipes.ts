import bobotie from "@/assets/bobotie.jpg";
import bunnyChow from "@/assets/bunny-chow.jpg";
import boerewors from "@/assets/boerewors.jpg";
import chakalaka from "@/assets/chakalaka.jpg";
import malvaPudding from "@/assets/malva-pudding.jpg";
import papWors from "@/assets/pap-wors.jpg";
import melktert from "@/assets/melktert.jpg";
import umngqusho from "@/assets/umngqusho.jpg";
import pancakes from "@/assets/pancakes.jpg";
import avocadoToast from "@/assets/avocado-toast.jpg";
import grainBowl from "@/assets/grain-bowl.jpg";
import tomatoPasta from "@/assets/tomato-pasta.jpg";
import grilledSalmon from "@/assets/grilled-salmon.jpg";
import energyBalls from "@/assets/energy-balls.jpg";
import hummus from "@/assets/hummus.jpg";
import buddhaBowl from "@/assets/buddha-bowl.jpg";

export type Category =
  | "breakfast"
  | "lunch"
  | "dinner"
  | "snacks"
  | "vegetarian"
  | "healthy";
export type Difficulty = "Easy" | "Medium" | "Hard";

export interface Recipe {
  id: string;
  title: string;
  description: string;
  image: string;
  categories: Category[];
  time: number; // minutes
  difficulty: Difficulty;
  servings: number;
  ingredients: string[];
  steps: string[];
}

export const CATEGORIES: { id: Category | "all"; label: string; emoji: string }[] = [
  { id: "all", label: "All", emoji: "🍽️" },
  { id: "breakfast", label: "Breakfast", emoji: "🥞" },
  { id: "lunch", label: "Lunch", emoji: "🥗" },
  { id: "dinner", label: "Dinner", emoji: "🍲" },
  { id: "snacks", label: "Snacks", emoji: "🍪" },
  { id: "vegetarian", label: "Vegetarian", emoji: "🥬" },
  { id: "healthy", label: "Healthy", emoji: "🌿" },
];

export const RECIPES: Recipe[] = [
  {
    id: "bobotie",
    title: "Classic Cape Bobotie",
    description:
      "A South African favourite — spiced beef mince baked under a golden egg custard with bay leaves, served with yellow rice.",
    image: bobotie,
    categories: ["dinner"],
    time: 75,
    difficulty: "Medium",
    servings: 6,
    ingredients: [
      "1 slice white bread, soaked in ¼ cup milk",
      "1 kg beef mince",
      "2 onions, finely chopped",
      "2 tbsp mild curry powder",
      "1 tsp turmeric",
      "2 tbsp chutney (Mrs Ball's)",
      "2 tbsp brown vinegar",
      "¼ cup sultanas",
      "2 tbsp flaked almonds",
      "3 bay leaves",
      "2 eggs + 1 cup milk (topping)",
      "Salt, pepper, oil",
    ],
    steps: [
      "Fry onions in oil until soft, add curry powder and turmeric.",
      "Add mince and brown well, breaking up any lumps.",
      "Stir in chutney, vinegar, sultanas, almonds, salt and pepper.",
      "Squeeze out the soaked bread and mix in; press mixture into a baking dish.",
      "Whisk eggs and milk, pour over the mince and tuck bay leaves on top.",
      "Bake at 180°C for 30–35 minutes until the topping is set and golden.",
    ],
  },
  {
    id: "bunny-chow",
    title: "Durban Bunny Chow",
    description:
      "A hollowed half-loaf of white bread filled with a fiery Durban-style lamb curry — an iconic South African street food.",
    image: bunnyChow,
    categories: ["lunch", "dinner"],
    time: 90,
    difficulty: "Medium",
    servings: 4,
    ingredients: [
      "800 g lamb, cubed",
      "2 onions, chopped",
      "4 garlic cloves, crushed",
      "1 tbsp ginger, grated",
      "3 tbsp Durban masala curry powder",
      "1 tsp turmeric",
      "1 stick cinnamon",
      "3 tomatoes, grated",
      "3 potatoes, cubed",
      "2 loaves unsliced white bread",
      "Fresh coriander, oil, salt",
    ],
    steps: [
      "Brown the lamb in oil; remove and set aside.",
      "Fry onions, garlic, ginger and cinnamon until golden.",
      "Add masala and turmeric, stir 30 seconds.",
      "Return lamb, add tomato and 2 cups water; simmer 45 minutes.",
      "Add potatoes and simmer 25 minutes more until tender.",
      "Halve loaves, scoop out centre, fill with curry and top with coriander.",
    ],
  },
  {
    id: "pap-wors",
    title: "Pap & Wors with Sheba",
    description:
      "Braaied boerewors with creamy maize meal pap and a tangy tomato and onion sheba — the ultimate SA weekend plate.",
    image: papWors,
    categories: ["dinner"],
    time: 45,
    difficulty: "Easy",
    servings: 4,
    ingredients: [
      "1 kg boerewors coil",
      "2 cups white maize meal",
      "4 cups water",
      "1 tsp salt",
      "2 tbsp butter",
      "2 onions, sliced",
      "4 tomatoes, chopped",
      "1 green chilli, chopped",
      "1 tsp paprika, oil",
    ],
    steps: [
      "Bring salted water to a boil, rain in maize meal and whisk smooth.",
      "Cover and simmer on low for 30 minutes, stirring occasionally.",
      "Stir in butter and keep warm.",
      "Braai or pan-fry the boerewors 12–15 minutes, turning once.",
      "For sheba: fry onions until soft, add tomato, chilli and paprika; simmer 10 minutes.",
      "Serve pap topped with wors and a generous spoon of sheba.",
    ],
  },
  {
    id: "chakalaka",
    title: "Spicy Chakalaka",
    description:
      "Vibrant, spicy vegetable relish with beans, carrots and peppers — the perfect braai side or with pap.",
    image: chakalaka,
    categories: ["snacks", "vegetarian", "healthy"],
    time: 30,
    difficulty: "Easy",
    servings: 6,
    ingredients: [
      "2 tbsp oil",
      "1 onion, chopped",
      "3 garlic cloves",
      "1 tbsp curry powder",
      "3 carrots, grated",
      "1 green pepper, chopped",
      "1 red pepper, chopped",
      "2 tomatoes, chopped",
      "1 tin baked beans in tomato",
      "1 chilli, chopped",
      "Salt & pepper",
    ],
    steps: [
      "Fry onion and garlic in oil until soft.",
      "Add curry powder and cook 30 seconds.",
      "Stir in carrots and peppers; cook 5 minutes.",
      "Add tomatoes and chilli; simmer until saucy.",
      "Fold through baked beans, warm through and season.",
    ],
  },
  {
    id: "umngqusho",
    title: "Umngqusho (Samp & Beans)",
    description:
      "Nelson Mandela's favourite — slow-cooked samp and sugar beans, simmered with onion and spices until creamy.",
    image: umngqusho,
    categories: ["lunch", "vegetarian", "healthy"],
    time: 120,
    difficulty: "Easy",
    servings: 6,
    ingredients: [
      "2 cups samp, soaked overnight",
      "1 cup sugar beans, soaked overnight",
      "1 onion, chopped",
      "2 garlic cloves",
      "1 potato, cubed",
      "2 tbsp oil",
      "1 stock cube",
      "Salt & pepper",
    ],
    steps: [
      "Drain samp and beans; boil in fresh water for 1½ hours until tender.",
      "In another pot, fry onion and garlic until golden.",
      "Add potato and stock cube with a splash of water; cook 10 minutes.",
      "Combine with samp and beans, season and simmer 15 minutes more.",
      "Serve warm as a hearty main or side.",
    ],
  },
  {
    id: "cape-malay-curry",
    title: "Cape Malay Chicken Curry",
    description:
      "Fragrant, mildly sweet chicken curry with apricots and warming spices from Cape Town's Bo-Kaap.",
    image: tomatoPasta,
    categories: ["dinner"],
    time: 60,
    difficulty: "Medium",
    servings: 4,
    ingredients: [
      "8 chicken thighs",
      "2 onions, sliced",
      "3 garlic cloves, ginger",
      "2 tbsp Cape Malay curry powder",
      "1 cinnamon stick, 3 cardamom pods",
      "1 tin chopped tomatoes",
      "½ cup dried apricots",
      "1 cup chicken stock",
      "2 potatoes, cubed",
      "Coriander, oil, salt",
    ],
    steps: [
      "Brown chicken thighs in oil; set aside.",
      "Fry onions with cinnamon and cardamom until soft.",
      "Add garlic, ginger and curry powder; toast 1 minute.",
      "Add tomatoes, stock, apricots and chicken; simmer 30 minutes.",
      "Add potatoes; cook 20 minutes until tender.",
      "Finish with fresh coriander and serve with basmati rice.",
    ],
  },
  {
    id: "sosaties",
    title: "Cape Sosaties",
    description:
      "Marinated lamb, onion and apricot skewers grilled over coals — sweet, spiced and smoky.",
    image: grilledSalmon,
    categories: ["dinner"],
    time: 50,
    difficulty: "Medium",
    servings: 4,
    ingredients: [
      "800 g lamb, cubed",
      "12 dried apricots",
      "2 onions, quartered",
      "2 tbsp curry powder",
      "2 tbsp apricot jam",
      "3 tbsp brown vinegar",
      "2 garlic cloves",
      "1 tsp turmeric",
      "Wooden skewers, soaked",
    ],
    steps: [
      "Blend curry, jam, vinegar, garlic and turmeric with ¼ cup oil.",
      "Marinate lamb overnight in the mixture.",
      "Thread lamb, onion and apricots onto skewers.",
      "Braai over medium coals 12–15 minutes, turning often.",
      "Baste with reserved marinade for the last few minutes.",
    ],
  },
  {
    id: "vetkoek-mince",
    title: "Vetkoek with Curried Mince",
    description:
      "Golden, pillowy fried dough split and stuffed with saucy curried mince — a beloved SA comfort food.",
    image: hummus,
    categories: ["lunch"],
    time: 60,
    difficulty: "Medium",
    servings: 6,
    ingredients: [
      "4 cups flour",
      "1 sachet instant yeast",
      "1 tsp salt, 1 tsp sugar",
      "1½ cups warm water",
      "Oil for deep frying",
      "500 g beef mince",
      "1 onion, chopped",
      "2 tbsp curry powder",
      "1 tomato, grated",
      "1 carrot, grated",
      "2 tbsp chutney",
    ],
    steps: [
      "Mix flour, yeast, salt, sugar and water into a soft dough; prove 1 hour.",
      "Shape into balls and rest 10 minutes.",
      "Deep-fry at 170°C until golden and puffed, 4 minutes per side.",
      "For mince: fry onion, add curry, then mince and brown.",
      "Add tomato, carrot, chutney and simmer 15 minutes.",
      "Split vetkoek and spoon in the curried mince.",
    ],
  },
  {
    id: "morogo-pap",
    title: "Morogo with Pap",
    description:
      "Wild African spinach cooked simply with onion and tomato, served with soft mieliepap — humble and nourishing.",
    image: buddhaBowl,
    categories: ["lunch", "vegetarian", "healthy"],
    time: 40,
    difficulty: "Easy",
    servings: 4,
    ingredients: [
      "2 bunches morogo (or Swiss chard/spinach)",
      "1 onion, chopped",
      "1 tomato, chopped",
      "2 tbsp oil",
      "1 tsp salt",
      "1½ cups maize meal",
      "3 cups water",
    ],
    steps: [
      "Boil water with salt, whisk in maize meal and simmer 25 minutes covered.",
      "Fry onion in oil until golden.",
      "Add tomato and cook to a soft relish.",
      "Add washed, chopped morogo; cover and steam 8 minutes.",
      "Season and serve alongside soft pap.",
    ],
  },
  {
    id: "durban-mutton-curry",
    title: "Durban Mutton Curry",
    description:
      "Fiery Durban-style mutton curry rich with masala, tomato and potatoes — best mopped up with roti.",
    image: grainBowl,
    categories: ["dinner"],
    time: 100,
    difficulty: "Medium",
    servings: 4,
    ingredients: [
      "1 kg mutton on the bone",
      "3 tbsp Durban masala",
      "1 tsp turmeric",
      "2 onions, chopped",
      "4 garlic cloves, ginger",
      "3 tomatoes, grated",
      "1 stick cinnamon, 4 curry leaves",
      "3 potatoes, halved",
      "Fresh coriander, oil",
    ],
    steps: [
      "Fry onion, cinnamon and curry leaves until soft.",
      "Add garlic, ginger, masala and turmeric; toast 1 minute.",
      "Add mutton and sear on all sides.",
      "Add tomato and 2 cups water; simmer covered 60 minutes.",
      "Add potatoes and simmer 30 minutes until tender.",
      "Finish with coriander and serve with roti or rice.",
    ],
  },
  {
    id: "braaied-snoek",
    title: "Braaied Snoek with Apricot Glaze",
    description:
      "West-coast favourite — butterflied snoek grilled over coals and basted with apricot, garlic and lemon.",
    image: grilledSalmon,
    categories: ["dinner", "healthy"],
    time: 30,
    difficulty: "Easy",
    servings: 4,
    ingredients: [
      "1 whole snoek, butterflied",
      "3 tbsp apricot jam",
      "3 tbsp butter, melted",
      "3 garlic cloves, crushed",
      "Juice of 1 lemon",
      "Salt & pepper",
    ],
    steps: [
      "Whisk jam, butter, garlic and lemon into a baste.",
      "Season snoek and place skin-side down on a braai grid.",
      "Braai over medium coals, basting often, 10 minutes.",
      "Flip briefly to crisp the skin, 2 minutes.",
      "Serve with roosterkoek and a green salad.",
    ],
  },
  {
    id: "mieliepap-porridge",
    title: "Creamy Mieliepap Porridge",
    description:
      "Warm breakfast porridge made from white maize meal — cook it soft with milk, honey and cinnamon.",
    image: pancakes,
    categories: ["breakfast", "vegetarian", "healthy"],
    time: 20,
    difficulty: "Easy",
    servings: 4,
    ingredients: [
      "1 cup maize meal",
      "2 cups water",
      "2 cups milk",
      "Pinch of salt",
      "2 tbsp honey",
      "1 tsp cinnamon",
      "Butter, to serve",
    ],
    steps: [
      "Bring water and salt to a boil.",
      "Whisk in maize meal, cover and simmer 10 minutes.",
      "Stir in milk and simmer 5 minutes more until creamy.",
      "Serve topped with honey, cinnamon and a knob of butter.",
    ],
  },
  {
    id: "amagwinya",
    title: "Amagwinya (Fat Cakes)",
    description:
      "Fluffy fried dough balls — SA's classic street breakfast, delicious with polony, jam or grated cheese.",
    image: hummus,
    categories: ["breakfast"],
    time: 90,
    difficulty: "Easy",
    servings: 12,
    ingredients: [
      "4 cups cake flour",
      "1 sachet instant yeast",
      "2 tbsp sugar",
      "1 tsp salt",
      "1½ cups warm water",
      "Oil for deep frying",
    ],
    steps: [
      "Combine flour, yeast, sugar and salt.",
      "Add warm water and knead into a soft dough.",
      "Cover and let rise 1 hour until doubled.",
      "Scoop tablespoons of dough into 170°C oil.",
      "Fry until deep golden, about 6 minutes, turning once.",
    ],
  },
  {
    id: "rooibos-smoothie-bowl",
    title: "Rooibos Berry Smoothie Bowl",
    description:
      "Chilled rooibos-infused smoothie bowl with banana, berries and seeds — a bright, healthy SA-style breakfast.",
    image: buddhaBowl,
    categories: ["breakfast", "vegetarian", "healthy"],
    time: 10,
    difficulty: "Easy",
    servings: 2,
    ingredients: [
      "½ cup strong brewed rooibos, chilled",
      "1 frozen banana",
      "1 cup frozen mixed berries",
      "½ cup plain yoghurt",
      "1 tbsp honey",
      "Granola, chia seeds, fresh berries to top",
    ],
    steps: [
      "Blend rooibos, banana, berries, yoghurt and honey until thick.",
      "Spoon into bowls.",
      "Top with granola, chia seeds and fresh berries.",
    ],
  },
  {
    id: "butternut-lentil-soup",
    title: "Butternut & Lentil Soup",
    description:
      "Silky roasted butternut soup with brown lentils, ginger and a hint of curry — warming and nutrient-packed.",
    image: tomatoPasta,
    categories: ["lunch", "vegetarian", "healthy"],
    time: 50,
    difficulty: "Easy",
    servings: 4,
    ingredients: [
      "1 medium butternut, cubed",
      "1 onion, chopped",
      "2 garlic cloves, ginger",
      "1 tsp mild curry powder",
      "½ cup brown lentils",
      "4 cups vegetable stock",
      "Olive oil, salt & pepper",
    ],
    steps: [
      "Roast butternut with olive oil at 200°C for 25 minutes.",
      "Sauté onion, garlic and ginger until soft.",
      "Add curry, lentils and stock; simmer 25 minutes.",
      "Add roasted butternut and blend smooth.",
      "Season and finish with a swirl of olive oil.",
    ],
  },
  {
    id: "avo-toast-biltong",
    title: "Avo Toast with Biltong",
    description:
      "Sourdough loaded with smashed avo, sliced biltong and cracked pepper — a proudly SA twist on the classic.",
    image: avocadoToast,
    categories: ["breakfast", "healthy"],
    time: 10,
    difficulty: "Easy",
    servings: 2,
    ingredients: [
      "2 slices sourdough",
      "1 ripe avocado",
      "50 g sliced biltong",
      "1 tsp lemon juice",
      "Chilli flakes, salt & pepper",
      "Micro herbs (optional)",
    ],
    steps: [
      "Toast sourdough until deeply golden.",
      "Mash avo with lemon, salt and pepper.",
      "Spread on toast and top with biltong slices.",
      "Finish with chilli flakes and micro herbs.",
    ],
  },
  {
    id: "malva-pudding",
    title: "Warm Malva Pudding",
    description:
      "Sticky apricot-jam sponge drenched in a buttery cream sauce — the ultimate South African dessert.",
    image: malvaPudding,
    categories: ["snacks"],
    time: 55,
    difficulty: "Easy",
    servings: 8,
    ingredients: [
      "1 cup sugar",
      "2 eggs",
      "2 tbsp apricot jam",
      "1 cup flour",
      "1 tsp bicarb",
      "Pinch of salt",
      "1 tbsp butter, 1 tsp vinegar",
      "⅓ cup milk",
      "Sauce: 1 cup cream, ½ cup butter, ½ cup sugar, ½ cup hot water, 1 tsp vanilla",
    ],
    steps: [
      "Beat sugar and eggs pale, then beat in jam.",
      "Melt butter with vinegar and milk; alternate with dry ingredients into the batter.",
      "Bake at 180°C for 30 minutes in a greased dish.",
      "Melt sauce ingredients together until smooth.",
      "Pour hot sauce over pudding straight from the oven.",
    ],
  },
  {
    id: "melktert",
    title: "Cinnamon Melktert",
    description:
      "Silky milk tart with a soft cinnamon crust — Cape Dutch heritage in every slice.",
    image: melktert,
    categories: ["snacks", "vegetarian"],
    time: 60,
    difficulty: "Medium",
    servings: 8,
    ingredients: [
      "1 blind-baked short-crust pastry case",
      "4 cups milk",
      "1 stick cinnamon",
      "½ cup sugar",
      "3 tbsp cornflour",
      "2 tbsp flour",
      "3 eggs",
      "2 tbsp butter",
      "1 tsp vanilla",
      "Ground cinnamon, to dust",
    ],
    steps: [
      "Bring milk and cinnamon stick to a gentle boil, then remove stick.",
      "Whisk sugar, cornflour, flour and eggs into a paste.",
      "Temper with hot milk, then return to the pot.",
      "Cook, whisking, until thick; stir in butter and vanilla.",
      "Pour into pastry case, cool and dust generously with cinnamon.",
    ],
  },
  {
    id: "koeksister-bites",
    title: "Syrupy Koeksister Bites",
    description:
      "Plaited fried dough dunked in ice-cold spiced syrup — crunchy outside, dripping sweet inside.",
    image: energyBalls,
    categories: ["snacks"],
    time: 60,
    difficulty: "Hard",
    servings: 12,
    ingredients: [
      "2 cups flour",
      "2 tsp baking powder",
      "Pinch of salt",
      "2 tbsp butter",
      "1 egg, ½ cup milk",
      "Syrup: 3 cups sugar, 1½ cups water, 1 cinnamon stick, ½ tsp ginger, lemon juice",
      "Oil for deep frying",
    ],
    steps: [
      "Boil syrup ingredients 5 minutes; chill overnight in the fridge.",
      "Rub butter into flour, baking powder and salt.",
      "Mix in egg and milk to a soft dough; rest 1 hour.",
      "Roll, cut into strips and plait each koeksister.",
      "Deep-fry at 180°C until golden, 2 minutes.",
      "Plunge hot koeksisters straight into the ice-cold syrup for 1 minute.",
    ],
  },
];
