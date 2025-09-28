import Menubar from "@/components/menubar";
import Menumajor from "@/components/menumajor";
import { Itim,Bungee } from 'next/font/google';
const bungee = Bungee({
  subsets: ["latin"],
  weight: ["400"],
});
const itim = Itim({
  subsets: ["thai"],
  weight: ["400"],
});
export default function Page() {
  return (
    <>
      <Menubar />
      <h1 className={`${itim.className} text-center pt-2.5`}>สาขาวิชาต่างๆ ในมหาวิทยาลัย</h1>
      {/* ----------------ลิงค์แสดงเมนูไปยังวิชาสาขาวิชาต่างๆ-------------------- */}

      <Menumajor />

      {/* ---------------------------------------------------------------- */}
      <hr /><p className= {`${bungee.className}`}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut sequi repellat et ut minima optio aspernatur ducimus veniam quos dignissimos.</p>
    </>
  );
}