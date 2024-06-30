import Image from "next/image";
import Link from "next/link";

export default function Header({selected}) {
  
  return (
      <div className="flex h-1/6 items-center gap-4">
        <Image src="/logo.webp" alt="Master EDU logo" height={200} width={200}/>
        <Link href="#"><p className={`font-bold ${selected == 1 ? 'underline' : ''}`}>My Dashboard</p></Link>
        <Link href="/learningzone/123"><p className={`font-bold ${selected == 2 ? 'underline' : ''}`}>Learning Zone</p></Link>
        <Link href="#"><p className={`font-bold ${selected == 3 ? 'underline' : ''}`}>Resources</p></Link>
      </div>
  );
}
