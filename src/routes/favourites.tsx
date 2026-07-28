import { createFileRoute, Link } from "@tanstack/react-router";
import { Heart } from "lucide-react";
import { RECIPES } from "@/lib/recipes";
import { RecipeCard } from "@/components/RecipeCard";
import { Header } from "@/components/Header";
import { useFavorites } from "@/lib/favorites";

export const Route = createFileRoute("/favourites")({
  head: () => ({
    meta: [
      { title: "Your Favourites — EasyMeals" },
      { name: "description", content: "The recipes you've saved for later on EasyMeals." },
      { property: "og:title", content: "Your Favourites — EasyMeals" },
      { property: "og:description", content: "Recipes you've saved for later." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: FavouritesPage,
});

function FavouritesPage() {
  const { favorites, isFavorite, toggle, hydrated } = useFavorites();
  const saved = RECIPES.filter((r) => favorites.includes(r.id));

  return (
    <div className="min-h-screen">
      <Header />
      <section className="mx-auto max-w-6xl px-4 py-12 md:px-6">
        <div className="flex items-center gap-3">
          <span className="grid h-12 w-12 place-items-center rounded-2xl bg-primary text-primary-foreground shadow-md">
            <Heart className="h-6 w-6 fill-current" />
          </span>
          <div>
            <h1 className="font-display text-3xl font-bold md:text-4xl">Your favourites</h1>
            <p className="text-sm text-muted-foreground">The recipes you've saved for later.</p>
          </div>
        </div>

        <div className="mt-10">
          {!hydrated ? null : saved.length === 0 ? (
            <div className="rounded-3xl bg-card p-12 text-center ring-1 ring-border">
              <p className="font-display text-2xl font-semibold">No favourites yet</p>
              <p className="mt-2 text-sm text-muted-foreground">
                Tap the heart on any recipe to save it here.
              </p>
              <Link
                to="/"
                className="mt-6 inline-flex rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-md transition hover:brightness-110"
              >
                Browse recipes
              </Link>
            </div>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {saved.map((r) => (
                <RecipeCard
                  key={r.id}
                  recipe={r}
                  isFavorite={isFavorite(r.id)}
                  onToggleFavorite={toggle}
                />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
