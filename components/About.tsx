import React from "react";

const About: React.FC<{}> = () => {
  return (
    <section
      id="about"
      className="flex flex-col items-center justify-center h-full relative overflow-hidden pt-[35px] "
      style={{ transform: "scale(0.9" }}
    >
      <div className="flex flex-col  justify-around flex-wrap items-center   max-w-[900px]">
        <h1 className="text-white font-semibold text-6xl">ABOUT ME</h1>
        <p className=" tracking-[0.5em] text-transparent font-light pb-5  bg-clip-text bg-gradient-to-r from-purple-700 to-orange-500  text-1xl">
          EXPLORE NOW
        </p>
        <p className="text-gray-300 text-center ">
          Sinh năm 2006 tại Khánh Hòa - xứ sở yến sào. Tên thật là Nguyễn
          Đình Bảo, hiện đang học tại Trường Đại học Sư phạm Thành phố Hồ
          Chí Minh - HCMUE 
          <br />
          <br />
          Với niềm đam mê tạo ra những giải pháp tinh tế, tôi không ngừng 
          khám phá thế giới phát triển phần mềm đang thay đổi từng ngày. 
          Hành trình của tôi xoay quanh việc chuyển đổi ý tưởng thành mã nguồn,
          mang lại trải nghiệm người dùng mượt mà và liên tục vượt qua các giới
          hạn của những gì có thể thực hiện.
        </p>
      </div>
    </section>
  );
};

export default About;
