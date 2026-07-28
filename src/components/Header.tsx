import { Link } from "@tanstack/react-router";
import { Heart, UtensilsCrossed } from "lucide-react";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 md:px-6">
        <Link to="/" className="flex items-center gap-2.5">
          <span className="grid h-10 w-10 place-items-center rounded-2xl bg-primary text-primary-foreground shadow-md">
            <UtensilsCrossed className="h-5 w-5" />
          </span>
          <span className="font-display text-2xl font-bold tracking-tight text-foreground">
            EasyMeals
          </span>
        </Link>
        <nav className="flex items-center gap-1">
          <Link
            to="/"
            activeOptions={{ exact: true }}
            activeProps={{ className: "text-primary" }}
            className="rounded-full px-4 py-2 text-sm font-medium text-foreground/70 transition hover:text-foreground"
          >
            Recipes
          </Link>
          <Link
            to="/favourites"
            activeProps={{ className: "bg-primary text-primary-foreground" }}
            className="inline-flex items-center gap-1.5 rounded-full bg-accent px-4 py-2 text-sm font-semibold text-accent-foreground transition hover:bg-primary hover:text-primary-foreground"
          >
            <Heart className="h-4 w-4" />
            Favourites
          </Link>
        </nav>
      </div>
    </header>
  );
}
