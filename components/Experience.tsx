import Image from "next/image";
import React from "react";

const Experience: React.FC<{}> = () => {
  return (
    <section id="experience">
      <h2 className="text-white font-semibold text-center text-6xl   pt-[35px]">
        EXPERIENCE
      </h2>
      <p className=" tracking-[0.5em] text-center text-transparent font-light pb-5  bg-clip-text bg-gradient-to-r from-purple-700 to-orange-500  text-1xl ">
        EXPLORE NOW
      </p>
      <div className=" container mx-auto 2xl ">
        <div className="md:flex md:flex-row md:justify-between pt-5">
          <div className="flex items-center gap-3">
            <Image
              src={"/1.svg"}
              height={30}
              width={30}
              alt={"experience"}
            />
            <p className="text-gray-300 ">
              <span className="font-semibold">MSV.VN /</span> Developer 
            </p>
          </div>
          <p className="text-gray-300 md:pt-0 pt-3">
            September 2023 - Present
          </p>
        </div>

        <p className="text-gray-300 pt-5">
        Tôi hiện đang làm việc tại MSV.VN, website tăng tương tác mạng xã hội số 1 Việt Nam. 
        Với sứ mệnh hỗ trợ người dùng tối ưu hóa hoạt động trên các nền tảng mạng xã hội, 
        chúng tôi cung cấp những giải pháp hiệu quả giúp tăng cường sự hiện diện trực tuyến 
        và phát triển cộng đồng. Tại MSV.VN, tôi cùng đội ngũ chuyên gia nỗ lực không ngừng 
        để mang đến trải nghiệm tốt nhất cho khách hàng, đồng thời khẳng định vị thế của 
        chúng tôi trong lĩnh vực tăng tương tác mạng xã hội.
        </p>
        <div className="flex-col flex sm:flex-row ">
          <div className="bg-transparent  mt-5 mr-2 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max">
            PHP
          </div>
          <div className="bg-transparent  mt-5  mr-2 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max">
            Laravel
          </div>
          <div className="bg-transparent  mt-5  mr-2 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max">
            JavaScript
          </div>
          <div className="bg-transparent  mt-5 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max">
            CSS
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
