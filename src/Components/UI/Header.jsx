import Navigation from "./Navigation/Navigation";

export default function Header() {
  return (
    <header>
      <nav className="bg-primary text-white p-4">
        <div className="container mx-auto flex justify-center sm:items-center sm:justify-between">
          <div className="hidden sm:block font-bold text-lg">Logo</div>
          <Navigation />
        </div>
      </nav>
    </header>
  );
}
