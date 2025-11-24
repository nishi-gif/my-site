import Navigation from "./Navigation";

export default function Header() {
  return (
    <header className="bg-blue-600 text-white p-4 shadow">
      <h1 className="text-xl font-bold">My React Site</h1>
      <Navigation />
    </header>
  );
}
