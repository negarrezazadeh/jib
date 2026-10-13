import { createFileRoute } from "@tanstack/react-router";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { JalaliDatePicker } from "@/components/JalaliDatePicker";
import { Button } from "@/components/ui/button";
import PageTitle from "@/components/PageTitle";

export const Route = createFileRoute("/add")({
  component: RouteComponent,
});

function RouteComponent() {
  const categories = [
    { label: "کمک به نیازمند", value: "help" },
    { label: "غذا", value: "food" },
    { label: "اجاره", value: "ejare" },
    { label: "قسط", value: "qest" },
  ];
  return (
    <>
      <PageTitle title="ثبت هزینه" />
      <form className="space-y-5">
        <div className="space-y-2">
          <Label htmlFor="amount">مبلغ</Label>
          <Input id="amount" placeholder="250,000 تومان" required />
        </div>

        <div className="space-y-2">
          <Label htmlFor="category">دسته بندی </Label>
          <Select items={categories}>
            <SelectTrigger className="w-full" id="category">
              <SelectValue placeholder="انتخاب" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {categories.map((item) => (
                  <SelectItem key={item.value} value={item.value}>
                    {item.label}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="desc">
            توضیحات <span className="text-gray-500">(اختیاری)</span>
          </Label>
          <Textarea id="desc" className="resize-none" />
        </div>

        <div className="space-y-2">
          <Label htmlFor="date">تاریخ</Label>
          <JalaliDatePicker
            id="date"
            value=""
            onChange={() => console.log("date :/")}
          />
        </div>

        <Button className="text-white w-full mt-3">ثبت هزینه</Button>
      </form>
    </>
  );
}
