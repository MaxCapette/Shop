import Loader from "@/components/layout/loader/Loader";
import New4Products from "@/components/new4Products/new4Products";
import Image from "next/image";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between pt-40">
      <Image
        className="homeLogo"
        src="/images/burger.png"
        alt="logo burger"
        width={1024}
        height={1024}
      ></Image>
     
      <New4Products />
    </main>
  );
}
