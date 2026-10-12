import type dynamicIconImports from "lucide-react/dynamicIconImports";

export type CategoryIconName = keyof typeof dynamicIconImports;

export interface Category {
  id: string;
  name: string;
  type: "expense" | "income";
  icon: CategoryIconName;
  color: string;
  bgColor: string;
  total: number;
  percent: number;
}
