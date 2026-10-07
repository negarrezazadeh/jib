import { Card, CardContent } from "@/components/ui/card";

interface DashboardItem {
  title: string;
  amount: number;
  className: string;
}

interface DashboardSummaryProps {
  items: DashboardItem;
}

export default function DashboardSummary({
  items: { title, amount, className },
}: DashboardSummaryProps) {
  return (
    <>
      <Card className={`${className} ring-0`}>
        <CardContent className="flex flex-col items-center">
          <p className="text-base font-black text-gray-600">{title}</p>
          <p className="text-xl">{amount}</p>
          <p className="text-base font-black text-gray-600">تومان</p>
        </CardContent>
      </Card>
    </>
  );
}
