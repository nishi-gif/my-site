import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <nav className="mt-3 flex gap-6 text-sm sm:text-base">
      <Link className="hover:underline" to="/">Home</Link>
      <Link className="hover:underline" to="/about">About</Link>
      <Link className="hover:underline" to="/contact">Contact</Link>
      <Link className="hover:underline" to="/news">News</Link>
      <Link className="hover:underline" to="/products">Products</Link>
    </nav>
  );
}
