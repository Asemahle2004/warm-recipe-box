import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Search, ChefHat } from "lucide-react";
import { RECIPES, CATEGORIES, type Category } from "@/lib/recipes";
import { RecipeCard } from "@/components/RecipeCard";
import { Header } from "@/components/Header";
import { useFavorites } from "@/lib/favorites";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "EasyMeals — Warm, simple recipes for every meal" },
      {
        name: "description",
        content:
          "Discover breakfast, lunch, dinner, snack and vegetarian recipes with ingredients, steps, cook time and difficulty.",
      },
      { property: "og:title", content: "EasyMeals — Warm, simple recipes" },
      {
        property: "og:description",
        content: "Cozy recipes with ingredients, steps, times and favourites.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<Category | "all">("all");
  const { isFavorite, toggle } = useFavorites();

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    return RECIPES.filter((r) => {
      const inCat = category === "all" || r.categories.includes(category);
      if (!inCat) return false;
      if (!q) return true;
      return (
        r.title.toLowerCase().includes(q) ||
        r.description.toLowerCase().includes(q) ||
        r.ingredients.some((i) => i.toLowerCase().includes(q))
      );
    });
  }, [query, category]);

  return (
    <div className="min-h-screen">
      <Header />

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-warm via-cream to-background" />
        <div className="absolute -right-24 -top-24 -z-10 h-96 w-96 rounded-full bg-primary/15 blur-3xl" />
        <div className="absolute -left-24 top-40 -z-10 h-96 w-96 rounded-full bg-secondary/15 blur-3xl" />

        <div className="mx-auto max-w-6xl px-4 py-14 md:px-6 md:py-20">
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-background/70 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary ring-1 ring-primary/20">
              <ChefHat className="h-3.5 w-3.5" /> Cook something lovely
            </span>
            <h1 className="mt-5 font-display text-5xl font-bold leading-[1.05] tracking-tight text-foreground md:text-6xl">
              Warm recipes for every kind of hungry.
            </h1>
            <p className="mx-auto mt-4 max-w-lg text-base text-muted-foreground md:text-lg">
              From breezy breakfasts to slow-cooked dinners — find a dish you'll
              love, save your favourites, and cook with confidence.
            </p>

            <div className="mx-auto mt-8 max-w-xl">
              <div className="flex items-center gap-3 rounded-full bg-card p-2 pl-5 shadow-lg ring-1 ring-border">
                <Search className="h-5 w-5 shrink-0 text-muted-foreground" />
                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search recipes or ingredients…"
                  aria-label="Search recipes"
                  className="w-full bg-transparent py-2 text-base outline-none placeholder:text-muted-foreground"
                />
                {query && (
                  <button
                    onClick={() => setQuery("")}
                    className="rounded-full px-3 py-1.5 text-xs font-semibold text-muted-foreground hover:text-foreground"
                  >
                    Clear
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="scrollbar-none -mx-1 flex gap-2 overflow-x-auto px-1 pb-2">
          {CATEGORIES.map((c) => {
            const active = category === c.id;
            return (
              <button
                key={c.id}
                onClick={() => setCategory(c.id)}
                className={cn(
                  "shrink-0 rounded-full px-4 py-2 text-sm font-semibold transition ring-1",
                  active
                    ? "bg-primary text-primary-foreground ring-primary shadow-md"
                    : "bg-card text-foreground/80 ring-border hover:bg-accent",
                )}
              >
                <span className="mr-1.5">{c.emoji}</span>
                {c.label}
              </button>
            );
          })}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-10 md:px-6 md:py-12">
        {results.length === 0 ? (
          <div className="rounded-3xl bg-card p-12 text-center ring-1 ring-border">
            <p className="font-display text-2xl font-semibold">No recipes found</p>
            <p className="mt-2 text-sm text-muted-foreground">
              Try a different search or category.
            </p>
          </div>
        ) : (
          <>
            <div className="mb-6 flex items-end justify-between">
              <h2 className="font-display text-2xl font-bold md:text-3xl">
                {category === "all"
                  ? "All recipes"
                  : CATEGORIES.find((c) => c.id === category)?.label}
              </h2>
              <span className="text-sm text-muted-foreground">
                {results.length} {results.length === 1 ? "recipe" : "recipes"}
              </span>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {results.map((r) => (
                <RecipeCard
                  key={r.id}
                  recipe={r}
                  isFavorite={isFavorite(r.id)}
                  onToggleFavorite={toggle}
                />
              ))}
            </div>
          </>
        )}
      </section>

      <footer className="border-t border-border/60 bg-card/50 py-8">
        <div className="mx-auto max-w-6xl px-4 text-center text-sm text-muted-foreground md:px-6">
          Made with 🧡 by EasyMeals ·{" "}
          <Link to="/favourites" className="text-primary hover:underline">
            Your favourites
          </Link>
        </div>
      </footer>
    </div>
  );
}
