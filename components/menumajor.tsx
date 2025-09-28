import Link from "next/link";

export default function Menumajor() {
  return (
    <>
      <div className="flex justify-center gap-4 py-6 text-blue-800">
        <Link href="/major">หน้าหลักสาขาวิชา</Link>
        <Link href="/major/accont">สาขาวิชา Accont</Link>
        <Link href="/major/dm">สาขาวิชา Digital Media</Link>
        <Link href="/major/dti">สาขาวิชา Digital Technology & Innovation</Link>
        <Link href="/major/marketing">สาขาวิชา Marketing</Link>
      </div>
    </>
  );
}