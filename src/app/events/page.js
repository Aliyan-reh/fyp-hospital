import Image from "next/image";
import React from "react";

function Updates() {
  return (
    <main className="font-serif bg-white">
      {/* head */}
      <div className="flex flex-col 2xl:gap-12 md:gap-y-5 xl:py-24 lg:py-20 md:py-14 bg-bg-1 bg-no-repeat md:bg-contain lg:cover 2xl:bg-cover w-[100%] 2xl:h-96 xl:h-80 lg:h-64 md:h-44">
        <p className="font-bold 2xl:text-6xl xl:text-4xl lg:text-2xl md:text-base text-center text-[#F4F8F4]">
          <marquee>Affordable, Clear and Transparent Pricing</marquee>
        </p>
        <p className="font-normal 2xl:text-3xl xl:text-base lg:text-xs md:text-[8px] text-center text-[#DED8E1]">
          At Health Hub Hospital, we're committed to providing you with the best
          possible care at a price you can afford.
        </p>
      </div>

      <div>
        {/* first part */}
        <div className="flex justify-center gap-8 py-6">
          {/* image one */}
          <div>
            <Image
              className="2xl:w-[650px] lg:w-[450px] md:w-[300px] 2xl:h-[600px] lg:h-[350px] md:h-[300px] lg:mt-20"
              src={"/image/image 22.png"}
              width={600}
              height={500}
              alt="cd"
            ></Image>
          </div>
          {/* heading one */}
          <div className="flex flex-col gap-5 xl:py-14 lg:py-5 md:py-3">
            <p className="2xl:text-6xl xl:text-4xl lg:text-3xl md:text-2xl font-bold">
              <span className="cursor-pointer hover:underline text-gray-800">
                Updates about{" "}
              </span>
              <span className="cursor-pointer hover:underline text-teal-800">
                Health hub
              </span>
            </p>
            <span className="2xl:text-2xl xl:text-base lg:text-sm md:text-xs font-normal cursor-pointer hover:font-bold text-gray-800">
              <p className="xl:w-[600px] lg:w-[500px] md:w-[350px] h-auto">
                Stay connected with Health Hub's latest updates! Our team is
                dedicated to keeping you informed about the latest developments,
                innovations, and success stories from our hospital. From new
                facility launches to cutting-edge treatment options, we'll keep
                you up-to-date on all things Health Hub.You can also find
                information about upcoming health events, free health check-ups,
                and educational talks that we organize to help you stay healthy.
              </p>
            </span>
            {/* first two divs */}
            <div className="flex gap-x-3">
              <div className="flex flex-col gap-2 xl:p-4 lg:p-2 md:p-1 border-2 2xl:w-[450px] xl:w-[320px] lg:w-[250px] md:w-[200px] h-auto rounded-md border-[#0466C8]">
                <p className="2xl:text-2xl xl:text-base lg:text-sm md:text-xs font-semibold text-teal-800">
                New MRI Machine
                </p>
                <ol className="2xl:text-2xl xl:text-base lg:text-sm md:text-xs xl:px-8 lg:px-6 md:px-5 list-disc text-gray-800">
                  <li className="cursor-pointer hover:underline">Advanced Tech</li>
                  <li className="cursor-pointer hover:underline">Enhanced Imaging</li>
                  <li className="cursor-pointer hover:underline">Improved Accuracy</li>
                </ol>
              </div>
              <div className="flex flex-col gap-2 xl:p-4 lg:p-2 md:p-1 border-2 2xl:w-[450px] xl:w-[320px] lg:w-[250px] md-[200px] h-auto rounded-md border-[#0466C8]">
                <p className="2xl:text-2xl xl:text-base lg:text-sm md:text-xs font-semibold text-teal-800">
                Cardiology Services
                </p>
                <ol className="2xl:text-2xl xl:text-base lg:text-sm md:text-xs xl:px-8 lg:px-6 md:px-5 list-disc text-gray-800">
                  <li className="cursor-pointer hover:underline">Expert Care</li>
                  <li className="cursor-pointer hover:underline">Advanced Tests</li>
                  <li className="cursor-pointer hover:underline">Personalized Treatment</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* second part */}
      <div className="flex justify-center gap-8 py-10">
        {/* heading two */}
        <div className="flex flex-col gap-5 xl:py-14 lg:py-8 md:py-5">
          <p className="2xl:text-6xl xl:text-4xl lg:text-3xl md:text-2xl font-bold">
            <span className="cursor-pointer hover:underline text-gray-800">Key performance </span>
            <span className="cursor-pointer hover:underline text-teal-800">indicators</span>
          </p>
          <span className="2xl:text-2xl xl:text-base lg:text-sm md:text-xs font-normal text-[#605D64]">
            <p className="2xl:w-[800px] xl:w-[600px] lg:w-[500px] md:w-[350px] h-auto">
          
            </p>
          </span>
          {/* result part */}
          <div className="flex flex-col gap-5">
            <p className="2xl:text-2xl md:text-xl xl:w-[450px] lg:w-[420px] md:w-[350px] h-auto text-[#36343B]">
            These KPIs provide a snapshot of your hospital's performance across various areas.
            </p>
            <div className="flex gap-4">
              {/* 90% */}
              <span className="space-y-2">
                <span className="flex justify-center items-center">
                <Image
                  className="2xl:w-[90px] lg:w-[52px] md:w-[36px] 2xl:h-[90px] lg:h-[52px] md:h-[36px]"
                  src={"/image/image 25.png"}
                  width={68}
                  height={68}
                  alt="90%"
                ></Image>
                </span>
                <p className="2xl:text-2xl md:text-base font-normal cursor-pointer hover:font-bold hover:underline hover:text-teal-800 text-gray-800">
                Patient Satisfaction Rate 
                </p>
              </span>
              {/* 90% */}
              <span className="space-y-2">
              <span className="flex justify-center items-center">
                <Image
                  className="2xl:w-[90px] lg:w-[52px] md:w-[36px] 2xl:h-[90px] lg:h-[52px] md:h-[36px]"
                  src={"/image/image 25.png"}
                  width={68}
                  height={68}
                  alt="90%"
                ></Image>
                </span>
                <p className="2xl:text-2xl md:text-base font-normal cursor-pointer hover:font-bold hover:underline hover:text-teal-800 text-gray-800">
                Staff Performance
                </p>
              </span>
              {/* 90% */}
              <span className="space-y-2">
              <span className="flex justify-center items-center">
                <Image
                  className="2xl:w-[90px] lg:w-[52px] md:w-[36px] 2xl:h-[90px] lg:h-[52px] md:h-[36px]"
                  src={"/image/image 25.png"}
                  width={68}
                  height={68}
                  alt="90%"
                ></Image>
                </span>
                <p className="2xl:text-2xl md:text-base text-center font-normal cursor-pointer hover:font-bold hover:underline hover:text-teal-800 text-gray-800">
                Patient Outcomes
                </p>
              </span>
            </div>
          </div>
        </div>
        {/* image two */}
        <div>
          <Image
            className="2xl:w-[650px] lg:w-[450px] md:w-[300px] 2xl:h-[600px] lg:h-[350px] md:h-[300px]"
            src={"/image/image 23.png"}
            width={600}
            height={500}
            alt="cl2"
          ></Image>
        </div>
      </div>
    </main>
  );
}

export default Updates;
