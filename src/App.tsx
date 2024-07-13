import { Header } from "./components/Header";
import { ThemeProvider } from "./components/ThemeProvider";

export default function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="theme">
      <div className="flex min-h-screen flex-col bg-background dark:text-white">
        <Header />
      </div>
    </ThemeProvider>
  );
}
