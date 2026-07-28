import { Link } from "@tanstack/react-router";
import { Clock, Flame, Heart, Users } from "lucide-react";
import type { Recipe } from "@/lib/recipes";
import { cn } from "@/lib/utils";

interface Props {
  recipe: Recipe;
  isFavorite: boolean;
  onToggleFavorite: (id: string) => void;
}

export function RecipeCard({ recipe, isFavorite, onToggleFavorite }: Props) {
  return (
    <article className="group relative overflow-hidden rounded-3xl bg-card shadow-sm ring-1 ring-border/60 transition hover:-translate-y-1 hover:shadow-xl">
      <Link
        to="/recipe/$id"
        params={{ id: recipe.id }}
        className="block"
      >
        <div className="relative aspect-[4/3] overflow-hidden">
          <img
            src={recipe.image}
            alt={recipe.title}
            loading="lazy"
            width={1024}
            height={768}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/50 to-transparent" />
          <div className="absolute left-3 top-3 flex flex-wrap gap-1.5">
            {recipe.categories.slice(0, 2).map((c) => (
              <span
                key={c}
                className="rounded-full bg-background/90 px-2.5 py-1 text-xs font-semibold capitalize text-foreground backdrop-blur"
              >
                {c}
              </span>
            ))}
          </div>
        </div>
        <div className="space-y-3 p-5">
          <h3 className="font-display text-xl font-semibold leading-tight text-foreground">
            {recipe.title}
          </h3>
          <p className="line-clamp-2 text-sm text-muted-foreground">
            {recipe.description}
          </p>
          <div className="flex items-center gap-4 text-xs text-muted-foreground">
            <span className="inline-flex items-center gap-1">
              <Clock className="h-3.5 w-3.5 text-primary" />
              {recipe.time} min
            </span>
            <span className="inline-flex items-center gap-1">
              <Flame className="h-3.5 w-3.5 text-primary" />
              {recipe.difficulty}
            </span>
            <span className="inline-flex items-center gap-1">
              <Users className="h-3.5 w-3.5 text-primary" />
              {recipe.servings}
            </span>
          </div>
        </div>
      </Link>
      <button
        type="button"
        onClick={(e) => {
          e.preventDefault();
          onToggleFavorite(recipe.id);
        }}
        aria-label={isFavorite ? "Remove from favourites" : "Add to favourites"}
        className="absolute right-3 top-3 grid h-10 w-10 place-items-center rounded-full bg-background/95 shadow-md ring-1 ring-border/60 backdrop-blur transition hover:scale-110"
      >
        <Heart
          className={cn(
            "h-5 w-5 transition",
            isFavorite ? "fill-primary text-primary" : "text-foreground/60",
          )}
        />
      </button>
    </article>
  );
}
