import pancakes from "@/assets/pancakes.jpg";
import avocadoToast from "@/assets/avocado-toast.jpg";
import grainBowl from "@/assets/grain-bowl.jpg";
import tomatoPasta from "@/assets/tomato-pasta.jpg";
import grilledSalmon from "@/assets/grilled-salmon.jpg";
import energyBalls from "@/assets/energy-balls.jpg";
import hummus from "@/assets/hummus.jpg";
import buddhaBowl from "@/assets/buddha-bowl.jpg";

export type Category = "breakfast" | "lunch" | "dinner" | "snacks" | "vegetarian";
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
  { id: "dinner", label: "Dinner", emoji: "🍝" },
  { id: "snacks", label: "Snacks", emoji: "🍪" },
  { id: "vegetarian", label: "Vegetarian", emoji: "🥬" },
];

export const RECIPES: Recipe[] = [
  {
    id: "berry-pancakes",
    title: "Fluffy Berry Pancakes",
    description: "Golden pancakes stacked high with fresh berries and warm maple syrup.",
    image: pancakes,
    categories: ["breakfast", "vegetarian"],
    time: 25,
    difficulty: "Easy",
    servings: 4,
    ingredients: [
      "1½ cups all-purpose flour",
      "2 tbsp sugar",
      "2 tsp baking powder",
      "½ tsp salt",
      "1¼ cups milk",
      "1 large egg",
      "3 tbsp melted butter",
      "1 cup mixed berries",
      "Maple syrup, to serve",
    ],
    steps: [
      "Whisk flour, sugar, baking powder and salt in a large bowl.",
      "In another bowl, mix milk, egg and melted butter until combined.",
      "Fold wet into dry ingredients — lumps are fine.",
      "Cook ¼-cup scoops on a buttered skillet until bubbles form, then flip.",
      "Stack with berries and pour over the maple syrup.",
    ],
  },
  {
    id: "avocado-toast",
    title: "Sunny Avocado Toast",
    description: "Sourdough with smashed avocado, poached egg and heirloom tomatoes.",
    image: avocadoToast,
    categories: ["breakfast", "vegetarian"],
    time: 15,
    difficulty: "Easy",
    servings: 2,
    ingredients: [
      "2 thick slices sourdough",
      "1 ripe avocado",
      "2 eggs",
      "1 tsp lemon juice",
      "Cherry tomatoes, halved",
      "Chili flakes, salt & pepper",
    ],
    steps: [
      "Toast the sourdough until deeply golden.",
      "Mash avocado with lemon juice, salt and pepper.",
      "Poach eggs in gently simmering water for 3 minutes.",
      "Spread avocado on toast, top with egg and tomatoes.",
      "Finish with chili flakes and flaky salt.",
    ],
  },
  {
    id: "mediterranean-bowl",
    title: "Mediterranean Grain Bowl",
    description: "Herby quinoa with chickpeas, roasted peppers and creamy feta.",
    image: grainBowl,
    categories: ["lunch", "vegetarian"],
    time: 30,
    difficulty: "Easy",
    servings: 2,
    ingredients: [
      "1 cup quinoa, cooked",
      "1 can chickpeas, drained",
      "1 roasted red pepper, chopped",
      "½ cup feta cheese",
      "Handful mint & parsley",
      "2 tbsp olive oil",
      "1 tbsp lemon juice",
    ],
    steps: [
      "Toss warm quinoa with olive oil and lemon juice.",
      "Fold through chickpeas, peppers and herbs.",
      "Top generously with crumbled feta.",
      "Season with salt, pepper and a final drizzle of olive oil.",
    ],
  },
  {
    id: "tomato-basil-pasta",
    title: "Tomato Basil Pasta",
    description: "Silky tomato sauce clinging to al-dente linguine with fresh basil.",
    image: tomatoPasta,
    categories: ["dinner", "vegetarian"],
    time: 35,
    difficulty: "Medium",
    servings: 4,
    ingredients: [
      "400g linguine",
      "800g ripe tomatoes",
      "4 garlic cloves",
      "Fresh basil, torn",
      "¼ cup olive oil",
      "Parmesan, to serve",
    ],
    steps: [
      "Sauté sliced garlic in olive oil until fragrant.",
      "Add chopped tomatoes and simmer 20 minutes until jammy.",
      "Cook linguine to al dente, reserving ½ cup pasta water.",
      "Toss pasta in the sauce with a splash of water.",
      "Finish with basil and generous parmesan.",
    ],
  },
  {
    id: "grilled-salmon",
    title: "Lemon Herb Grilled Salmon",
    description: "Tender salmon with charred asparagus and bright lemon.",
    image: grilledSalmon,
    categories: ["dinner"],
    time: 25,
    difficulty: "Medium",
    servings: 2,
    ingredients: [
      "2 salmon fillets",
      "1 bunch asparagus",
      "1 lemon, sliced",
      "2 tbsp olive oil",
      "Fresh thyme & dill",
      "Salt & pepper",
    ],
    steps: [
      "Rub salmon with olive oil, thyme, salt and pepper.",
      "Heat a grill pan over medium-high heat.",
      "Grill salmon 4 minutes per side, topped with lemon slices.",
      "Char asparagus alongside for the last 5 minutes.",
      "Rest a minute and serve with fresh dill.",
    ],
  },
  {
    id: "energy-balls",
    title: "No-Bake Energy Balls",
    description: "Chewy oat and date bites studded with dark chocolate chips.",
    image: energyBalls,
    categories: ["snacks", "vegetarian"],
    time: 15,
    difficulty: "Easy",
    servings: 12,
    ingredients: [
      "1 cup rolled oats",
      "½ cup peanut butter",
      "⅓ cup honey",
      "½ cup pitted dates",
      "¼ cup dark chocolate chips",
      "1 tsp vanilla",
    ],
    steps: [
      "Blend dates into a paste.",
      "Mix all ingredients in a bowl until sticky.",
      "Chill 10 minutes for easier rolling.",
      "Roll into tablespoon-sized balls.",
      "Store in an airtight container up to a week.",
    ],
  },
  {
    id: "hummus-platter",
    title: "Creamy Hummus Platter",
    description: "Silky hummus swirled with olive oil, warm pita and crunchy veg.",
    image: hummus,
    categories: ["snacks", "vegetarian"],
    time: 10,
    difficulty: "Easy",
    servings: 4,
    ingredients: [
      "1 can chickpeas",
      "¼ cup tahini",
      "2 tbsp lemon juice",
      "1 garlic clove",
      "3 tbsp olive oil",
      "Paprika, warm pita, crudités",
    ],
    steps: [
      "Blend chickpeas, tahini, lemon and garlic until smooth.",
      "Stream in olive oil while blending for extra silkiness.",
      "Spoon into a bowl and swirl the top.",
      "Drizzle with olive oil and dust with paprika.",
      "Serve with warm pita and fresh vegetables.",
    ],
  },
  {
    id: "buddha-bowl",
    title: "Sweet Potato Buddha Bowl",
    description: "Roasted sweet potato, massaged kale and creamy tahini drizzle.",
    image: buddhaBowl,
    categories: ["lunch", "vegetarian"],
    time: 40,
    difficulty: "Medium",
    servings: 2,
    ingredients: [
      "2 sweet potatoes, cubed",
      "1 bunch kale",
      "½ cup cooked barley",
      "¼ red cabbage, sliced",
      "3 tbsp tahini",
      "1 tbsp maple syrup",
      "Lemon juice, salt",
    ],
    steps: [
      "Roast sweet potato at 200°C for 25 minutes.",
      "Massage kale with olive oil and lemon.",
      "Whisk tahini, maple syrup and water into a dressing.",
      "Layer barley, greens, potato and cabbage in a bowl.",
      "Drizzle over the tahini dressing and top with seeds.",
    ],
  },
];
