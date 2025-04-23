import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DisplayProducts from "./components/DisplayProducts";

export default function ShopPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[var(--background)]">
      <Header />
      <main className="flex-1 flex flex-col">
        <DisplayProducts />
      </main>
      <Footer />
    </div>
  );
}
