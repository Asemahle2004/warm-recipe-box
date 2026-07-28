import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, Clock, Flame, Heart, Users } from "lucide-react";
import { RECIPES, type Recipe } from "@/lib/recipes";
import { Header } from "@/components/Header";
import { useFavorites } from "@/lib/favorites";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/recipe/$id")({
  loader: ({ params }) => {
    const recipe = RECIPES.find((r) => r.id === params.id);
    if (!recipe) throw notFound();
    return { recipe };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Recipe not found — EasyMeals" }, { name: "robots", content: "noindex" }] };
    }
    const { recipe } = loaderData;
    return {
      meta: [
        { title: `${recipe.title} — EasyMeals` },
        { name: "description", content: recipe.description },
        { property: "og:title", content: `${recipe.title} — EasyMeals` },
        { property: "og:description", content: recipe.description },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: RecipeDetail,
});

function RecipeDetail() {
  const { recipe } = Route.useLoaderData() as { recipe: Recipe };
  const { isFavorite, toggle } = useFavorites();
  const fav = isFavorite(recipe.id);

  return (
    <div className="min-h-screen">
      <Header />

      <div className="mx-auto max-w-4xl px-4 py-8 md:px-6 md:py-12">
        <Link
          to="/"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-muted-foreground transition hover:text-primary"
        >
          <ArrowLeft className="h-4 w-4" /> Back to recipes
        </Link>

        <div className="mt-6 overflow-hidden rounded-3xl bg-card shadow-sm ring-1 ring-border">
          <div className="relative aspect-[16/9] md:aspect-[21/9]">
            <img
              src={recipe.image}
              alt={recipe.title}
              width={1024}
              height={576}
              className="h-full w-full object-cover"
            />
          </div>

          <div className="p-6 md:p-10">
            <div className="flex flex-wrap gap-2">
              {recipe.categories.map((c) => (
                <span
                  key={c}
                  className="rounded-full bg-accent px-3 py-1 text-xs font-semibold capitalize text-accent-foreground"
                >
                  {c}
                </span>
              ))}
            </div>

            <div className="mt-4 flex items-start justify-between gap-4">
              <div>
                <h1 className="font-display text-4xl font-bold leading-tight md:text-5xl">
                  {recipe.title}
                </h1>
                <p className="mt-3 max-w-2xl text-muted-foreground">
                  {recipe.description}
                </p>
              </div>
              <button
                type="button"
                onClick={() => toggle(recipe.id)}
                aria-label={fav ? "Remove favourite" : "Save favourite"}
                className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-background shadow-md ring-1 ring-border transition hover:scale-105"
              >
                <Heart className={cn("h-6 w-6", fav ? "fill-primary text-primary" : "text-foreground/60")} />
              </button>
            </div>

            <div className="mt-6 grid grid-cols-3 gap-3 rounded-2xl bg-warm/60 p-4">
              <Stat icon={<Clock className="h-4 w-4" />} label="Time" value={`${recipe.time} min`} />
              <Stat icon={<Flame className="h-4 w-4" />} label="Difficulty" value={recipe.difficulty} />
              <Stat icon={<Users className="h-4 w-4" />} label="Serves" value={`${recipe.servings}`} />
            </div>

            <div className="mt-10 grid gap-10 md:grid-cols-[1fr_1.4fr]">
              <div>
                <h2 className="font-display text-2xl font-bold">Ingredients</h2>
                <ul className="mt-4 space-y-2.5">
                  {recipe.ingredients.map((ing) => (
                    <li key={ing} className="flex items-start gap-3 text-sm">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" />
                      <span>{ing}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h2 className="font-display text-2xl font-bold">Preparation</h2>
                <ol className="mt-4 space-y-4">
                  {recipe.steps.map((step, i) => (
                    <li key={i} className="flex gap-4">
                      <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-primary font-display text-sm font-bold text-primary-foreground">
                        {i + 1}
                      </span>
                      <p className="pt-1 text-sm leading-relaxed text-foreground/90">{step}</p>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Stat({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="text-center">
      <div className="mx-auto flex items-center justify-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
        {icon} {label}
      </div>
      <div className="mt-1 font-display text-lg font-bold text-foreground">{value}</div>
    </div>
  );
}
