import { ThemeProvider } from "./components/ThemeProvider";
import { Toaster } from "./components/ui/toaster";
import { Header } from "./components/Header";
import { MobileForm } from "./components/MobileForm";
import { Output } from "./components/Output";
import data from "./data/homes.json";
import { useState } from "react";
import { useToast } from "./components/ui/use-toast";

export default function App() {
  const [homes, setHomes] = useState(data);
  const { toast } = useToast();

  function filterHomes(beds: string, baths: string, sqft: string) {
    const filteredHomes = data.filter((home) => {
      return (
        (home.beds === beds || beds === "Any") &&
        (home.baths === baths || baths === "Any") &&
        (parseInt(home.sqft) >= parseInt(sqft) || sqft === "Any")
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
  }

  return (
    <ThemeProvider defaultTheme="system" storageKey="theme">
      <div className="flex min-h-screen flex-col bg-background dark:text-white">
        <Header />
        <MobileForm filterFunction={filterHomes} />
        <Output data={homes} />
      </div>
      <Toaster />
    </ThemeProvider>
  );
}
