import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { faBook } from "@fortawesome/free-solid-svg-icons";
import { masterEDU } from '../../public/masteredu.webp'
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center h-screen text-xl bg-white">
      <Image src="/masteredu.webp" alt="Master EDU logo" height={400} width={400}/>
      <button className="bg-white text-black p-1 w-96 rounded-2xl border border-black m-8 hover:text-blue-600 hover:border-blue-600">
        <FontAwesomeIcon icon={faGraduationCap} className="mr-4"/>
        I am a student
      </button>
      <button className="rounded-2xl bg-black border-black p-1 w-96 hover:shadow-white hover:border-blue-600 hover:text-blue-600">
        <FontAwesomeIcon icon={faBook} className="mr-4"/>
        I am a teacher
      </button>
    </main>
  );
}
