import { createFileRoute } from "@tanstack/react-router";
import DashboardSummary from "../features/dashboard/components/DashboardSummary";
import TransactionCard from "@/features/transactions/TransactionSummary";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

const dashboardItems = [
  {
    title: "هزینه این ماه",
    amount: 12895550,
    className: "bg-rose-100 border border-rose-200",
  },
  {
    title: "درآمد این ماه",
    amount: 12895550,
    className: "bg-emerald-100 border border-emerald-200",
  },
  {
    title: "باقی مانده",
    amount: 12895550,
    className: "bg-violet-100 border border-violet-200",
  },
];

function RouteComponent() {
  return (
    <div>
      <div>
        <p className="text-2xl text-gray-700 font-semibold">سلام نگار</p>
        <p className="text-base text-primary-foreground">
          امیدوارم روز خوبی داشته باشی.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 my-5">
        {dashboardItems.map((items) => (
          <DashboardSummary key={items.title} items={items} />
        ))}
      </div>

      <div>
        <TransactionCard />
      </div>
    </div>
  );
}
