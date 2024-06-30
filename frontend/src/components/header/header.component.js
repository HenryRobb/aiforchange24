import Image from "next/image";

export default function Header() {

  return (
      <div className="flex h-1/6 items-center gap-4">
        <Image src="/logo.webp" alt="Master EDU logo" height={200} width={200}/>
        <p className="font-bold">My Dashboard</p>
        <p className="font-bold underline">Learning Zone</p>
        <p className="font-bold">Resources</p>
      </div>
  );
}
