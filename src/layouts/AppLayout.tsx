import { Link } from "@tanstack/react-router";
import {
  Home,
  LayoutFreeform,
  ArrowLeftRight,
  Plus,
  Ellipsis,
} from "lucide-react";
import type { ReactNode } from "react";

const navItems = [
  { label: "خانه", to: "/", icon: Home },
  { label: "دسته بندی", to: "/categories", icon: LayoutFreeform },
  { label: "", to: "/add", icon: Plus },
  { label: "تراکنش ها", to: "/transactions", icon: ArrowLeftRight },
  { label: "بیشتر", to: "/more", icon: Ellipsis },
];

export default function AppLayout({ children }: { children: ReactNode }) {
  return (
    <div className="h-dvh">
      <div className="flex flex-col justify-around h-full">
        <header className="md:hidden shrink-0 flex items-center justify-between px-4 py-3 bg-card border-b border-border">
          <p className="text-3xl text-primary">جیب</p>
        </header>

        {/* page content */}
        <main className="flex-1 overflow-y-auto p-4 md:p-6 space-y-4 bg-background">
          {children}
        </main>

        {/* mobile navbar */}
        <nav className="md:hidden bg-white shrink-0 flex justify-around border-t border-border py-2 items-center">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={`${item.to === "/add" ? "bg-primary-foreground text-white rounded-full p-3.5" : "flex flex-col gap-1 items-center"} text-secondary`}>
              <item.icon
                className={`${item.icon === Plus ? "h-6 w-6" : "h-5 w-5"}`}
              />
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
}
