import Link from "next/link";
import ProductCard from "./components/ProductCard";
import Navbar from "./components/Navbar";
import NavBarMovile from "./components/NavBarMovile";

export default function Home() {
  return (
    <main>
      <Navbar />
      <NavBarMovile />
      <h1>hello world!</h1>
      <Link href="/users">Users</Link>
      <ProductCard />
    </main>
  );
}
