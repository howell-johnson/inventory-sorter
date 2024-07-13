import { ModeToggle } from "./ModeToggle";

export function Header() {
  return (
    <div className="flex h-16 items-center justify-between border-b px-4">
      <h1 className="text-4xl">Inventory</h1>
      <ModeToggle />
    </div>
  );
}
