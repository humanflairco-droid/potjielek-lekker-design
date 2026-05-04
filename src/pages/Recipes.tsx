import { useState } from "react";
import PageWrapper from "@/components/PageWrapper";
import SectionDivider from "@/components/SectionDivider";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

import recipePlaceholder from "@/assets/recipe-placeholder.svg";
const recipe1 = recipePlaceholder;
const recipe2 = recipePlaceholder;
const recipe3 = recipePlaceholder;
const recipe4 = recipePlaceholder;
const recipe5 = recipePlaceholder;
const recipe6 = recipePlaceholder;
const recipe7 = recipePlaceholder;
const recipe8 = recipePlaceholder;
const recipe9 = recipePlaceholder;

interface Recipe {
  title: string;
  time: string;
  serves: string;
  intro: string;
  image: string;
  category: "starters" | "mains" | "desserts";
  ingredients: string[];
  steps: string[];
}

const recipes: Recipe[] = [
  {
    title: "Spiced Butternut Soup",
    time: "30 min",
    serves: "1",
    intro: "Velvety warmth in every spoonful.",
    image: recipe1,
    category: "starters",
    ingredients: [
      "150g butternut, cubed",
      "½ small onion, chopped",
      "1 garlic clove, minced",
      "50ml cream",
      "½ tsp cinnamon",
      "Pinch chilli flakes",
      "1 tsp butter",
      "100ml vegetable stock",
      "Salt and pepper",
    ],
    steps: [
      "Melt butter in pot over gel flame.",
      "Sauté onion and garlic until soft.",
      "Add butternut and stock. Simmer with lid on 20 minutes until tender.",
      "Mash smooth.",
      "Stir in cream, cinnamon and chilli.",
      "Season and serve.",
    ],
  },
  {
    title: "Garlic Mushroom Potjie",
    time: "15 min",
    serves: "1",
    intro: "Golden butter, wild mushrooms, pure magic.",
    image: recipe2,
    category: "starters",
    ingredients: [
      "150g button mushrooms, halved",
      "2 garlic cloves, minced",
      "1 tbsp butter",
      "1 tsp fresh thyme",
      "2 tbsp cream",
      "Salt and pepper",
      "Crusty bread to serve",
    ],
    steps: [
      "Melt butter in pot over gel flame.",
      "Add garlic and sauté 1 minute.",
      "Add mushrooms and thyme. Cook with lid off 5 minutes stirring occasionally.",
      "Stir in cream and season.",
      "Serve with bread for dipping.",
    ],
  },
  {
    title: "Boerewors & Tomato Bredie",
    time: "25 min",
    serves: "1",
    intro: "A South African classic, slow-cooked with love.",
    image: recipe3,
    category: "starters",
    ingredients: [
      "150g boerewors, cut into chunks",
      "1 medium tomato, chopped",
      "½ small onion, sliced",
      "1 bay leaf",
      "½ tsp sugar",
      "Salt and pepper",
      "50ml water",
    ],
    steps: [
      "Brown boerewors in pot over gel flame.",
      "Remove and set aside.",
      "Sauté onion until golden.",
      "Add tomato, water, sugar and bay leaf.",
      "Return boerewors to pot. Simmer with lid on 15 minutes.",
      "Remove bay leaf and serve.",
    ],
  },
  {
    title: "Classic Beef & Vegetable Potjie",
    time: "1 hour",
    serves: "1",
    intro: "The original. The ultimate. The one that started it all.",
    image: recipe4,
    category: "mains",
    ingredients: [
      "150g beef chuck, cubed",
      "1 small potato, cubed",
      "1 small carrot, sliced",
      "½ small onion, chopped",
      "1 garlic clove, minced",
      "50ml red wine",
      "100ml beef stock",
      "1 tsp oil",
      "1 bay leaf",
      "Salt and pepper",
      "Fresh thyme",
    ],
    steps: [
      "Heat oil in pot over gel flame. Brown beef and set aside.",
      "Sauté onion and garlic.",
      "Return beef to pot. Add wine and reduce slightly.",
      "Add stock, potato, carrot, bay leaf and thyme.",
      "Lid on. Simmer 45 minutes until beef is tender.",
      "Season and serve.",
    ],
  },
  {
    title: "Chicken & Sweet Potato Potjie",
    time: "45 min",
    serves: "1",
    intro: "Golden coconut warmth meets South African fire.",
    image: recipe5,
    category: "mains",
    ingredients: [
      "1 chicken thigh, bone in",
      "100g sweet potato, cubed",
      "½ small onion, chopped",
      "1 garlic clove",
      "100ml coconut milk",
      "½ tsp coriander",
      "½ tsp turmeric",
      "1 tsp oil",
      "Salt and pepper",
      "Fresh coriander to garnish",
    ],
    steps: [
      "Heat oil in pot. Brown chicken thigh on both sides. Remove and set aside.",
      "Sauté onion and garlic with spices 1 minute.",
      "Return chicken to pot. Add sweet potato and coconut milk.",
      "Simmer with lid on 35 minutes until chicken is cooked through.",
      "Garnish with fresh coriander.",
    ],
  },
  {
    title: "Lamb Neck Karoo Style",
    time: "1 hr 20 min",
    serves: "1",
    intro: "Slow-cooked until it falls off the bone.",
    image: recipe6,
    category: "mains",
    ingredients: [
      "200g lamb neck, bone in",
      "½ small onion, chopped",
      "1 garlic clove",
      "3 dried apricots",
      "1 sprig rosemary",
      "4 pearl onions",
      "50ml red wine",
      "100ml lamb or beef stock",
      "1 tsp oil",
      "Salt and pepper",
    ],
    steps: [
      "Heat oil in pot. Brown lamb neck well on all sides. Remove and set aside.",
      "Sauté onion and garlic.",
      "Return lamb to pot. Add red wine and reduce slightly.",
      "Add stock, apricots, pearl onions and rosemary.",
      "Lid on, simmer low and slow 1 hour until lamb is falling off the bone.",
      "Season and serve.",
    ],
  },
  {
    title: "Malva Pudding Potjie",
    time: "35 min",
    serves: "1",
    intro: "South Africa's most loved dessert, straight from the fire.",
    image: recipe7,
    category: "desserts",
    ingredients: [
      "3 tbsp flour",
      "3 tbsp sugar",
      "1 egg",
      "1 tbsp apricot jam",
      "½ tsp bicarbonate of soda",
      "1 tsp butter, melted",
      "3 tbsp milk",
      "Pinch of salt",
      "Sauce: 3 tbsp cream, 1 tbsp butter, 1 tbsp sugar",
    ],
    steps: [
      "Mix all pudding ingredients into a smooth batter.",
      "Pour into lightly greased pot.",
      "Lid on, cook over gel flame on lowest setting 25 minutes.",
      "Heat sauce ingredients until sugar dissolves.",
      "Pour warm sauce over pudding immediately.",
      "Serve hot.",
    ],
  },
  {
    title: "Cinnamon Koeksister Pot",
    time: "10 min",
    serves: "1",
    intro: "Sticky, sweet, utterly South African.",
    image: recipe8,
    category: "desserts",
    ingredients: [
      "4 mini koeksisters (store bought)",
      "100ml golden syrup",
      "1 tbsp water",
      "½ tsp cinnamon",
      "Pinch ground ginger",
    ],
    steps: [
      "Combine syrup, water, cinnamon and ginger in pot over gel flame.",
      "Stir until warm and combined.",
      "Add koeksisters and gently simmer 5 minutes turning once until warmed through and coated in syrup.",
      "Serve warm with vanilla ice cream.",
    ],
  },
  {
    title: "Chocolate Lava Potjie",
    time: "20 min",
    serves: "1",
    intro: "Break the surface. Find the magic inside.",
    image: recipe9,
    category: "desserts",
    ingredients: [
      "50g dark chocolate, chopped",
      "40g butter",
      "1 egg",
      "1 egg yolk",
      "40g castor sugar",
      "20g flour",
      "Pinch of salt",
      "Butter and cocoa powder to grease pot",
    ],
    steps: [
      "Grease pot with butter and dust with cocoa powder.",
      "Melt chocolate and butter together until smooth.",
      "Whisk egg, egg yolk and sugar until pale.",
      "Fold chocolate mixture into egg mixture. Fold in flour and salt gently.",
      "Pour into pot. Lid on, cook over gel flame 12 minutes — edges set but centre still molten.",
      "Serve immediately with cream or ice cream.",
    ],
  },
];

const sections = [
  { key: "starters" as const, label: "Starters" },
  { key: "mains" as const, label: "Mains" },
  { key: "desserts" as const, label: "Desserts" },
];

const Recipes = () => {
  const [selectedRecipe, setSelectedRecipe] = useState<number | null>(null);
  const scrollRef = useScrollReveal();

  if (selectedRecipe !== null) {
    const recipe = recipes[selectedRecipe];
    return (
      <PageWrapper>
        <div ref={scrollRef}>
          <section className="py-20 px-6">
            <div className="container mx-auto max-w-4xl">
              <button
                onClick={() => setSelectedRecipe(null)}
                className="font-heading text-sm text-primary uppercase tracking-widest mb-8 inline-flex items-center gap-2 hover:opacity-70 transition-opacity btn-gold-glow"
              >
                ← Back to Recipes
              </button>

              <div className="bg-card border border-primary/15 rounded overflow-hidden scroll-reveal">
                <div className="h-64 md:h-80 overflow-hidden">
                  <img
                    src={recipe.image}
                    alt={`Placeholder image for ${recipe.title} — ${recipe.intro}`}
                    className="w-full h-full object-cover"
                    width={800}
                    height={600}
                  />
                </div>
                <div className="p-8 md:p-12">
                  <h1 className="font-heading text-3xl md:text-4xl text-primary mb-2">{recipe.title}</h1>
                  <div className="flex gap-6 text-foreground/50 text-sm font-body mb-6">
                    <span>⏱ {recipe.time}</span>
                    <span>🍽 Serves {recipe.serves} (¼ Potjie)</span>
                  </div>
                  <p className="font-body text-foreground/80 text-lg italic mb-10">{recipe.intro}</p>

                  <SectionDivider text="Ingredients & Method" />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-8 scroll-reveal">
                    <div>
                      <h3 className="font-heading text-lg text-primary mb-4">Ingredients</h3>
                      <ul className="space-y-2">
                        {recipe.ingredients.map((ing, j) => (
                          <li key={j} className="font-body text-foreground/70 text-sm flex items-start gap-2">
                            <span className="text-primary mt-1">•</span> {ing}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-heading text-lg text-primary mb-4">Method</h3>
                      <ol className="space-y-3">
                        {recipe.steps.map((step, j) => (
                          <li key={j} className="font-body text-foreground/70 text-sm flex items-start gap-3">
                            <span className="font-heading text-primary font-bold text-lg leading-none">{j + 1}</span>
                            <span>{step}</span>
                          </li>
                        ))}
                      </ol>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </PageWrapper>
    );
  }

  return (
    <PageWrapper>
      <div ref={scrollRef}>
        <section className="py-20 px-6">
          <div className="container mx-auto max-w-3xl text-center mb-16 scroll-reveal">
            <h1 className="font-heading text-4xl md:text-5xl text-primary mb-4 reveal-child">Recipes</h1>
            <p className="font-body text-foreground/70 text-lg reveal-child">
              Time-tested favourites from our family fire to yours. All recipes serve 1 person using a ¼ potjie pot.
            </p>
          </div>

          {sections.map((section) => {
            const sectionRecipes = recipes.filter((r) => r.category === section.key);
            return (
              <div key={section.key} className="container mx-auto max-w-6xl mb-16">
                <h2
                  className="font-heading text-2xl md:text-3xl mb-2 text-center scroll-reveal"
                  style={{ color: "#C9A84C" }}
                >
                  {section.label}
                </h2>
                <SectionDivider text="" />

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 scroll-reveal">
                  {sectionRecipes.map((recipe) => {
                    const globalIndex = recipes.indexOf(recipe);
                    return (
                      <div
                        key={globalIndex}
                        className="border border-primary/20 rounded overflow-hidden flex items-center justify-center reveal-child h-80"
                        style={{ backgroundColor: "#3A2A1F" }}
                      >
                        <span className="font-heading text-lg uppercase tracking-widest" style={{ color: "#C9A84C" }}>
                          Coming Soon
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </section>
      </div>
    </PageWrapper>
  );
};

export default Recipes;
