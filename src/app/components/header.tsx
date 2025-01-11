import Link from "next/link";
import { FaYoutube, FaGithub } from "react-icons/fa";
export default function Header() {
  return (
    <header className=" flex bg-gray-700 text-white items-center justify-between xs:flex-row py-2 border-b-2 border-accentDarkSecondary sticky top-0 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-10">
      <nav className=" flex md:flex md:items-center md:justify-center md:gap-x-24 font-bold uppercase">
        <Link
          href={"/"}
          className="text-2xl"
        >
          BLOG WEB
        </Link>
      </nav>

      <nav className="flex gap-2  ">
        <Link href={""} target="">
          <FaYoutube className={`w-6 h-6 hover:text-red-600`} />
        </Link>

        <Link href={""} target="_blank">
          <FaGithub
            className={`w-6 h-6 fill-dark dark:fill-light hover:text-black`}
          />
        </Link>
      </nav>
    </header> 
  );
}
