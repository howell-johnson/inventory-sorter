import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@radix-ui/react-label";
import { Button } from "./ui/button";

type MobileFormProps = {
  filterFunction: (beds: string, baths: string, sqft: string) => void;
};

export function MobileForm({ filterFunction }: MobileFormProps) {
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const beds = formData.get("beds");
    const baths = formData.get("baths");
    const sqft = formData.get("sqft");
    if (
      typeof beds !== "string" ||
      typeof baths !== "string" ||
      typeof sqft !== "string"
    ) {
      return;
    }
    filterFunction(beds, baths, sqft);
  }
  return (
    <form onSubmit={handleSubmit} className="mt-2 border-b px-4 pb-4">
      <div className="flex flex-wrap gap-4">
        <div className="flex w-fit items-baseline gap-2">
          <Label className="text-lg" htmlFor="beds">
            Beds
          </Label>
          <Select name="beds" defaultValue="1">
            <SelectTrigger className="p-2 pr-1">
              <SelectValue placeholder="1" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1">1</SelectItem>
              <SelectItem value="2">2</SelectItem>
              <SelectItem value="3">3</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex w-fit items-baseline gap-2">
          <Label className="text-lg" htmlFor="baths">
            Baths
          </Label>
          <Select name="baths" defaultValue="1">
            <SelectTrigger className="p-2 pr-1">
              <SelectValue placeholder="1" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1">1</SelectItem>
              <SelectItem value="2">2</SelectItem>
              <SelectItem value="3">3</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex w-fit items-baseline gap-2">
          <Label className="text-lg" htmlFor="sqft">
            Sqft
          </Label>
          <Select name="sqft" defaultValue="800">
            <SelectTrigger className="p-2 pr-1">
              <SelectValue placeholder="800+" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="800">800+</SelectItem>
              <SelectItem value="1000">1000+</SelectItem>
              <SelectItem value="1200">1200+</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <Button type="submit" className="mt-4">
        Find homes
      </Button>
    </form>
  );
}
