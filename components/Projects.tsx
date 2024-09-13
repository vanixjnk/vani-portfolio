import Image from "next/image";
import Link from "next/link";
import React from "react";

const Projects: React.FC<{}> = () => {
  return (
    <section id="projects">
      <h2 className="text-white font-semibold text-center text-6xl pt-[35px]">
        PROJECTS
      </h2>
      <p className=" tracking-[0.5em] text-center text-transparent font-light pb-5  bg-clip-text bg-gradient-to-r from-purple-700 to-orange-500  text-1xl ">
        EXPLORE NOW
      </p>
      <div className=" container mx-auto 2xl  ">
        <div className="flex-col flex md:flex-row  mt-7">
          <Link
            href="https://msv.vn/"
            rel="noopener noreferrer"
            target="_blank"
            className="z-[1]"
          >
            <div className="flex-row flex mb-5">
              <Image
                src="/msvvn.png"
                height={150}
                width={150}
                alt="MSV.VN"
              />
              <div className="p-3">
                <p className="text-white font-semibold text-xl">MSV.VN</p>
                <p className="text-gray-500 text-[10px]">
                  Website tăng tương tác mạng xã hội số một Việt Nam.
                  Cung cấp giải pháp cho sự nổi tiếng của bạn.
                </p>
              </div>
            </div>
          </Link>
          <Link
            href="https://tricker.vn/"
            rel="noopener noreferrer"
            target="_blank"
            className="z-[1]"
          >
            <div className="flex-row flex mb-5">
              <Image
                src="/trickervn.png"
                height={150}
                width={150}
                alt="Tricker.VN"
              />
              <div className="p-3">
                <p className="text-white font-semibold text-xl">Tricker.VN</p>
                <p className="text-gray-500 text-[10px]">
                  Diễn đàn trao đổi, giao lưu, mua bán giữa Trickers Việt Nam.
                  Là cộng đồng lớn mạnh chuyên về mảng dịch vụ Facebook
                </p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;
