import Menubar from "@/components/menubar";
import Menumajor from "@/components/menumajor";
export default function Page() {
  return (
    <>
      <Menubar />
      <h1 className="text-center pt-2.5">สาขาวิชาต่างๆ ในมหาวิทยาลัย</h1>
      {/* ----------------ลิงค์แสดงเมนูไปยังวิชาสาขาวิชาต่างๆ-------------------- */}

      <Menumajor />

      {/* ---------------------------------------------------------------- */}
      <hr /><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut sequi repellat et ut minima optio aspernatur ducimus veniam quos dignissimos.</p>
    </>
  );
}