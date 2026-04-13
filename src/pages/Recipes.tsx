import { useState } from "react";
import PageWrapper from "@/components/PageWrapper";
import SectionDivider from "@/components/SectionDivider";
import heroImage from "@/assets/hero-potjie.jpg";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const recipes = [
  {
    title: "Classic Oxtail Potjie",
    time: "3–4 hours",
    serves: "6–8",
    intro: "A rich, slow-cooked stew that falls off the bone. The king of potjiekos.",
    ingredients: ["1.5kg oxtail", "2 onions, chopped", "4 carrots, chunked", "4 potatoes, quartered", "2 cups red wine", "2 tbsp tomato paste", "Rosemary, thyme, bay leaves", "Salt, pepper, paprika"],
    steps: ["Brown oxtail in hot oil in the potjie.", "Add onions and cook until soft.", "Pour in red wine and tomato paste. Stir.", "Layer vegetables on top — do not stir.", "Season, cover, and cook on low coals for 3–4 hours.", "Serve with rice or fresh bread."],
  },
  {
    title: "Chicken & Vegetable Potjie",
    time: "2 hours",
    serves: "6",
    intro: "A lighter, family-friendly favourite. Perfect for weeknight fires.",
    ingredients: ["8 chicken pieces", "1 onion, sliced", "3 potatoes, diced", "2 sweet potatoes, diced", "Green beans, peas", "1 cup chicken stock", "Garlic, ginger, turmeric"],
    steps: ["Brown chicken in a little oil.", "Add onions and garlic, sauté briefly.", "Layer potatoes, sweet potato, then greens.", "Pour stock over, season, and cover.", "Cook on gentle coals for 2 hours.", "Serve straight from the pot."],
  },
  {
    title: "Lamb Shank Potjie",
    time: "3 hours",
    serves: "4–6",
    intro: "Hearty, warming, and deeply satisfying. A winter favourite.",
    ingredients: ["4 lamb shanks", "2 onions", "4 potatoes", "2 cups beef stock", "1 cup red wine", "Cinnamon stick, cloves", "Dried apricots (optional)"],
    steps: ["Sear lamb shanks until browned.", "Soften onions in the rendered fat.", "Add stock, wine, and spices.", "Layer potatoes and apricots on top.", "Cover tightly and cook 3 hours on low heat.", "The meat should fall off the bone."],
  },
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
                className="font-heading text-sm text-primary uppercase tracking-widest mb-8 inline-flex items-center gap-2 hover:opacity-70 transition-opacity"
              >
                ← Back to Recipes
              </button>

              <div className="bg-card border border-primary/15 rounded overflow-hidden scroll-reveal">
                <div className="h-64 md:h-80 overflow-hidden">
                  <img
                    src={heroImage}
                    alt={recipe.title}
                    className="w-full h-full object-cover"
                    width={1920}
                    height={1080}
                  />
                </div>
                <div className="p-8 md:p-12">
                  <h1 className="font-heading text-3xl md:text-4xl text-primary mb-2">{recipe.title}</h1>
                  <div className="flex gap-6 text-foreground/50 text-sm font-body mb-6">
                    <span>⏱ {recipe.time}</span>
                    <span>🍽 Serves {recipe.serves}</span>
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
            <h1 className="font-heading text-4xl md:text-5xl text-primary mb-4">Recipes</h1>
            <p className="font-body text-foreground/70 text-lg">
              Time-tested favourites from our family fire to yours.
            </p>
          </div>

          <SectionDivider text="Our Favourites" />

          <div className="container mx-auto max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 scroll-reveal">
            {recipes.map((recipe, i) => (
              <div
                key={i}
                className="bg-card border border-primary/20 rounded overflow-hidden flex flex-col group hover:border-primary/60 transition-all duration-300 hover:shadow-[0_0_30px_hsl(43,52%,54%,0.1)] hover:-translate-y-1"
              >
                <div className="h-52 overflow-hidden bg-secondary">
                  <img
                    src={heroImage}
                    alt={recipe.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                    width={1920}
                    height={1080}
                  />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-heading text-xl text-primary mb-2">{recipe.title}</h3>
                  <div className="flex gap-4 text-foreground/40 text-xs font-body mb-3">
                    <span>⏱ {recipe.time}</span>
                    <span>🍽 Serves {recipe.serves}</span>
                  </div>
                  <p className="font-body text-foreground/60 text-sm mb-6 flex-1 leading-relaxed">
                    {recipe.intro}
                  </p>
                  <button
                    onClick={() => setSelectedRecipe(i)}
                    className="w-full px-6 py-3 border border-primary text-primary font-heading text-sm uppercase tracking-widest rounded transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
                  >
                    View Recipe
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </PageWrapper>
  );
};

export default Recipes;
