import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { faBook } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center h-screen text-xl bg-white">
      <Image src="/masteredu.webp" alt="Master EDU logo" height={400} width={400}/>
      <Link href={"/learningzone/123"}> 
        <button className=" p-1 w-96 rounded-2xl border border-black m-8 hover:text-themeBlue hover:border-themeBlue">
          <FontAwesomeIcon icon={faGraduationCap} className="mr-4" />
          I am a student
        </button>
      </Link>
      <Link href={"/learningzone/123"}>
        <button className="text-white rounded-2xl bg-blue-600 border border-blue-600 p-1 w-96 hover:shadow-white hover:bg-blue-500 hover:border-blue-500">
          <FontAwesomeIcon icon={faBook} className="mr-4" />
          I am a teacher
        </button>
      </Link>
    </main>
  );
}
