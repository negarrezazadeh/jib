import { Card, CardContent } from "@/components/ui/card";
import transactions from "@/data/transactions.json";

export default function TransactionSummary() {
  return (
    <>
      <h1 className="text-2xl mb-4">هزینه های اخیر</h1>

      <Card>
        <CardContent className="px-0">
          <div>
            {transactions.map((trans) => (
              <div
                key={trans.id}
                className="flex items-center justify-between border-b last:border-none px-5 py-3">
                <div className="flex items-center gap-3">
                  <div className="flex size-10 items-center justify-center rounded-full bg-muted text-lg">
                    {/* {trans.icon} */}
                  </div>

                  <div>
                    <p className="font-medium">{trans.title}</p>
                    <p className="text-sm text-muted-foreground">
                      {trans.category} • {trans.date}، {trans.time}
                    </p>
                  </div>
                </div>

                <p className="font-semibold">
                  {trans.amount.toLocaleString("fa-IR")} تومان
                </p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </>
  );
}
