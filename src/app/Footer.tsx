import {
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-soft-background mt-[500px] flex h-36 flex-col items-center justify-center gap-6 text-primary">
      <h1 className="text-center text-base">Made With ❤️ and NextJs</h1>
      <div className="flex items-center gap-6 text-2xl transition-all  ease-in-out">
        <Link
          href={"/"}
          className="duration-500 hover:-translate-y-1 hover:text-[#f5f5f5]"
        >
          <FontAwesomeIcon className="" icon={faGithub} />
        </Link>
        <Link
          href={"/"}
          className="duration-500 hover:-translate-y-1 hover:text-[#0077B5]"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </Link>
        <Link
          href={"/"}
          className="duration-500 hover:-translate-y-1 hover:text-[#d62976]"
        >
          <FontAwesomeIcon icon={faInstagram} />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
