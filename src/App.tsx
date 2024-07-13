import { ThemeProvider } from "./components/ThemeProvider";
import { Toaster } from "./components/ui/toaster";
import { Header } from "./components/Header";
import { MobileForm } from "./components/MobileForm";

export default function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="theme">
      <div className="flex min-h-screen flex-col bg-background dark:text-white">
        <Header />
        <MobileForm />
      </div>
      <Toaster />
    </ThemeProvider>
  );
}
