/** @format */
import Footer from "@/components/footer";
import Header from "@/components/header";
import Advertising from "@/components/main/advertising";
import NawProducts from "@/components/main/naw";
import ListProducts from "@/components/main/products/list";

const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];

export default function Home() {
  return (
    <div className="flex flex-col">
      <Header />
      <main className="flex flex-col">
        <Advertising />
        <NawProducts />
        <ListProducts data={list} />
      </main>
      <Footer />
    </div>
  );
}
