import { ThemeProvider } from "./components/ThemeProvider";
import { Toaster } from "./components/ui/toaster";
import { Header } from "./components/Header";
import { FilterForm } from "./components/FilterForm";
import { Output } from "./components/Output";
import data from "./data/new_homes.json";
import { useState } from "react";
import { useToast } from "./components/ui/use-toast";

export default function App() {
  const [homes, setHomes] = useState(data);
  const { toast } = useToast();

  function filterHomes(beds: number, baths: number, sqft: number) {
    const filteredHomes = data.filter((home) => {
      return (
        (home.beds === beds || beds === "Any") &&
        (home.baths === baths || baths === "Any") &&
        (parseInt(home.sqft) >= sqft || sqft === "Any")
      );
    });
    setHomes(filteredHomes);
    if (filteredHomes.length === 0) {
      toast({
        className: "w-fit ml-auto",
        title: "Search results",
        description: "No homes found with the selected filters",
      });
    }
    if (filteredHomes.length > 0) {
      toast({
        className: "w-fit ml-auto",
        title: "Search results",
        description: "Found " + filteredHomes.length + " homes",
      });
    }
  }

  return (
    <ThemeProvider defaultTheme="system" storageKey="theme">
      <div className="flex min-h-screen flex-col bg-background dark:text-white">
        <Header />
        <FilterForm filterFunction={filterHomes} />
        <Output data={homes} />
      </div>
      <Toaster />
    </ThemeProvider>
  );
}
