import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@radix-ui/react-label";
import { Button } from "./ui/button";
import { useState } from "react";

type FilterFormProps = {
  filterFunction: (beds: string, baths: string, sqft: string) => void;
};

export function FilterForm({ filterFunction }: FilterFormProps) {
  const [beds, setBeds] = useState("Any");
  const [baths, setBaths] = useState("Any");
  const [sqft, setSqft] = useState("Any");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    filterFunction(beds, baths, sqft);
  }

  function handleReset() {
    setBeds("Any");
    setBaths("Any");
    setSqft("Any");
    filterFunction("Any", "Any", "Any");
  }

  return (
    <form onSubmit={handleSubmit} className="mt-2 border-b px-4 pb-4">
      <div className="flex flex-wrap gap-4">
        <div className="flex w-fit items-baseline gap-2">
          <Label className="text-lg" htmlFor="beds">
            Beds
          </Label>
          <Select
            name="beds"
            value={beds}
            onValueChange={(value) => {
              setBeds(value);
            }}
          >
            <SelectTrigger className="p-2 pr-1">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Any">Any</SelectItem>
              <SelectItem value="1">1</SelectItem>
              <SelectItem value="2">2</SelectItem>
              <SelectItem value="3">3</SelectItem>
              <SelectItem value="4">4</SelectItem>
              <SelectItem value="5">5</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex w-fit items-baseline gap-2">
          <Label className="text-lg" htmlFor="baths">
            Baths
          </Label>
          <Select
            name="baths"
            value={baths}
            onValueChange={(value) => {
              setBaths(value);
            }}
          >
            <SelectTrigger className="p-2 pr-1">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Any">Any</SelectItem>
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
          <Select
            name="sqft"
            value={sqft}
            onValueChange={(value) => {
              setSqft(value);
            }}
          >
            <SelectTrigger className="p-2 pr-1">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Any">Any</SelectItem>
              <SelectItem value="800">800+</SelectItem>
              <SelectItem value="1000">1000+</SelectItem>
              <SelectItem value="1200">1200+</SelectItem>
              <SelectItem value="1400">1400+</SelectItem>
              <SelectItem value="1600">1600+</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <Button type="submit" className="mt-4">
        Find homes
      </Button>
      {/* reset button */}
      <Button type="reset" className="ml-4 mt-4" onClick={handleReset}>
        Reset
      </Button>
    </form>
  );
}
