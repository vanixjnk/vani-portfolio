"use client";
import React from "react";
import { Social_Icons } from "@/constant";
import Image from "next/image";
import Link from "next/link";

const Footer: React.FC<{}> = () => {
  return (
    <div className="container mx-auto 2xl pt-[50px] pb-8">
      <div className="pb-10 flex justify-center">
        {Social_Icons.map((social) => (
          <Link
            href={social.link}
            rel="noopener noreferrer"
            target="_blank"
            key={social.alt}
            className="z-[1] mx-5"
          >
            <Image
              src={social.image}
              height={30}
              width={30}
              alt={social.alt}
              sizes="100vw"
            />
          </Link>
        ))}
      </div>
      <p className="text-gray-300 text-center text-sm">
        Developed by Vani using Next.js
      </p>
    </div>
  );
};

export default Footer;
