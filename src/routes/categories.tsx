import { createFileRoute } from "@tanstack/react-router";
import { Card, CardContent } from "@/components/ui/card";
import categoriesData from "@/data/categories.json";
import { DynamicIcon } from "lucide-react/dynamic";
import type { Category } from "@/types/categories";
import { ChevronLeft } from "lucide-react";

const categories = categoriesData as Category[];

export const Route = createFileRoute("/categories")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <Card>
      <CardContent className="px-0">
        <div>
          {categories.map((category) => (
            <div
              key={category.id}
              className="flex items-center justify-between border-b last:border-none px-5 py-3">
              <div className="flex items-center gap-3">
                <div
                  style={{ backgroundColor: category.bgColor }}
                  className="flex size-12 items-center justify-center rounded-full text-lg">
                  <DynamicIcon
                    name={category.icon}
                    size={24}
                    color={category.color}
                  />
                </div>

                <div>
                  <p className="font-medium">{category.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {category.total.toLocaleString("fa-IR")} تومان
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <p className="font-semibold">{category.percent}%</p>
                <ChevronLeft color="#b8b8b8" size={18} />
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
