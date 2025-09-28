//rfc สร้าง function componnet ทั่วๆไป
//np snippet สร้าง page componnet
import Menubar from "@/components/menubar";
export default function Page() {
  return (
    <>
      <Menubar />
      <h1 className="text-center pt-2.5">Hello to Dti-sau</h1>
      <h1 className="text-center pt-2.5 py-2.5 font-bold text-green-700">
        Tanatorn inpathom
      </h1>
      <hr />
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi earum necessitatibus iusto dicta inventore, blanditiis nisi libero praesentium velit quos?</p>
    </>
  );
}
