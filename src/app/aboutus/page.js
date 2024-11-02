import Image from "next/image";
import React from "react";

export default function About() {
  return (
    <main className="font-serif bg-white text-gray-800">
      <div className="flex justify-center items-center">
        <Image
          className="2xl:w-[99%] lg:w-[90%] lg:h-[600px] md:w-[80%] md:h-[40%]"
          src={"/image/image 12.jpg"}
          width={630}
          height={200}
          alt="travel"
        ></Image>
      </div>
      <div
        className=" flex flex-col 2xl:gap-12 md:gap-3 px-5 2xl:w-[94%] lg:w-[85%] md:w-[70%] 2xl:h-[270px] xl:h-[172px] md:h-[110px] rounded-lg shadow-xl
                           relative 2xl:bottom-32 xl:bottom-24 lg:bottom-20 md:bottom-16 2xl:left-20 lg:left-24 md:left-32 border-8 border-teal-800 bg-orange-200"
      >
        <p className="2xl:text-5xl xl:text-xl lg:text-lg md:text-base font-semibold text-center mt-6 hover:underline cursor-pointer text-gray-800">
          <span className="text-gray-800">Health</span>
          <span className="text-teal-800"> Hub</span>
        </p>
        <p className="font-normal 2xl:text-3xl xl:text-base lg:text-xs md:text-[7px] text-center hover:font-bold text-[#605D64]">
          Health Hub Hospital offers exceptional patient care and outcomes
          through cutting-edge technology and a team of skilled and
          compassionate professionals. Our warm and welcoming environment
          provides a wide range of specialized services and treatments,
          prioritizing comfort, healing, and wellness.
        </p>
      </div>

      {/* About us */}
      <div className="p-6">
        <div className="py-8 border-8 border-teal-700 bg-orange-200">
          <div className="flex justify-center space-x-2 font-bold py-3 cursor-pointer hover:underline">
            <span className="flex space-x-2 animate-bounce">
              <p className="font-bold 2xl:text-6xl xl:text-4xl md:text-3xl text-gray-800">
                About
              </p>
              <p className="font-bold 2xl:text-6xl xl:text-4xl md:text-3xl text-teal-800">
                Our Hospital
              </p>
            </span>
          </div>
          <div className="flex justify-center xl:py-8 2xl:py-16 gap-28">
            <span>
              <p className="py-3 font-normal 2xl:text-3xl xl:text-base lg:text-[10px] md:text-[8px] h-auto 2xl:w-[900px] xl:w-[700px] lg:w-[500px] md:w-[350px] hover:font-bold text-[#605D64]">
                At Healthcare, we are dedicated to providing exceptional patient
                care and improving the health and wellbeing of our communities.
                Our team of compassionate and innovative healthcare
                professionals is committed to delivering personalized and
                accessible care, combining cutting-edge technology with a human
                touch.
              </p>
              <p className="py-3 font-normal 2xl:text-3xl xl:text-base lg:text-[10px] md:text-[8px] h-auto 2xl:w-[900px] xl:w-[700px] lg:w-[500px] md:w-[350px] hover:font-bold text-[#605D64]">
                With a legacy of excellence and a passion for making a positive
                impact, we strive to create a supportive and inclusive
                environment that fosters trust, understanding, and hope. Our
                commitment to empathy, kindness, and respect ensures that every
                patient feels valued and cared for, and our team of experts
                works together to ensure that every individual receives the care
                they deserve.
              </p>
              <p className="py-3 font-normal 2xl:text-3xl xl:text-base lg:text-[10px] md:text-[8px] h-auto 2xl:w-[900px] xl:w-[700px] lg:w-[500px] md:w-[350px] hover:font-bold text-[#605D64]">
                Through our unwavering dedication to our patients and
                communities, we aim to shape the future of healthcare and create
                a healthier, happier world for generations to come. We believe
                in empowering individuals to take control of their health and
                wellbeing, and we are dedicated to providing the necessary
                support and resources to help them thrive. With a focus on
                innovation, compassion, and excellence, we are proud to be a
                leader in healthcare, and we look forward to continuing to serve
                our communities with care, kindness, and expertise.
              </p>
            </span>
            <span className="mt-10">
              <Image
                className="2xl:h-[550px] xl:w-fit xl:h-[320px] lg:w-[200px] lg:h-[350px] md:w-[120px] rounded-lg"
                src={"/image/image 7.avif"}
                width={538}
                height={480}
                alt="frame"
              ></Image>
            </span>
          </div>
        </div>
      </div>

      {/* Online Interraction */}
      <div className="p-6">
        <div className="xl:py-8 2xl:py-16 flex justify-center gap-28 border-8 border-teal-700 bg-orange-200">
          <div>
            <span className="flex space-x-2 font-bold py-3 cursor-pointer hover:underline animate-ping">
              <p className="font-bold 2xl:text-6xl xl:text-4xl md:text-3xl text-gray-800">
                Online{" "}
              </p>
              <p className="font-bold 2xl:text-6xl xl:text-4xl md:text-3xl text-teal-800">
                Interraction
              </p>
            </span>
            <p className="py-3 font-normal 2xl:text-3xl xl:text-base lg:text-[10px] md:text-[8px] h-auto 2xl:w-[900px] xl:w-[700px] lg:w-[500px] md:w-[350px] hover:font-bold text-[#605D64]">
              At Healthcare, we understand the importance of compassionate care
              beyond our hospital walls. That's why we're dedicated to providing
              exceptional online support to our patients. Through our secure
              online portal, patients can easily access their medical records,
              schedule appointments, and communicate with our care team. Our
              responsive and empathetic staff are always available to address
              concerns, answer questions, and offer guidance every step of the
              way. We believe that care knows no boundaries, and we're committed
              to making healthcare accessible and patient-centric, wherever you
              are.
            </p>
            <p className="py-3 font-normal 2xl:text-3xl xl:text-base lg:text-[10px] md:text-[8px] h-auto 2xl:w-[970px] xl:w-[700px] lg:w-[500px] md:w-[350px] hover:font-bold text-[#605D64]">
              Through our mission, we aim to empower individuals to take control
              of their health and wellbeing, and to provide the necessary
              support and resources to help them thrive. We believe that
              everyone deserves access to exceptional healthcare, and we are
              dedicated to breaking down barriers and pushing boundaries to make
              that a reality. By combining expertise, compassion, and
              innovation, we are shaping the future of healthcare and creating a
              healthier, happier world for generations to come.
            </p>
          </div>
          <div>
            <div className="flex gap-3">
              <Image
                className="2xl:h-[550px] xl:w-fit xl:h-[320px] lg:w-[150px] lg:h-[300px] md:w-[120px]"
                src={"/image/image 1.png"}
                width={538}
                height={480}
                alt="frame"
              ></Image>
              <Image
                className="2xl:h-[550px] xl:w-fit xl:h-[320px] lg:w-[150px] lg:h-[300px] md:w-[120px] xl:mt-20 md:mt-10"
                src={"/image/Image 2.png"}
                width={538}
                height={480}
                alt="frame2"
              ></Image>
            </div>
          </div>
        </div>
      </div>

      {/* Key Feature */}
      <div className="p-6">
        <div className="flex flex-col 2xl:gap-14 md:gap-7 2xl:py-24 lg:py-16 md:py-10 border-8 border-teal-700 bg-orange-200">
          <p className="font-bold text-center 2xl:text-6xl xl:text-4xl lg:text-3xl md:text-2xl cursor-pointer hover:underline">
            <span className="text-gray-800">Features </span>
            <span className="text-teal-800">Key Points</span>
          </p>
          <p className="font-normal 2xl:text-3xl xl:text-base lg:text-xs md text-center cursor-pointer hover:font-bold text-[#605D64]">
            Key Features of ApexCyberServices Virtual Assistant Services{" "}
          </p>
          <div className="flex justify-between 2xl:px-32 lg:px-20 md:px-14">
            <span className="p-4">
              <p className="font-semibold 2xl:text-5xl xl:text-3xl lg:text-2xl text-center cursor-pointer hover:text-teal-800 text-[#0A090B]">
                24/7
              </p>
              <p className="font-normal 2xl:text-3xl xl:text-sm lg:text-xs md:text-[9px] text-[#605D64]">
                Availability
              </p>
            </span>
            <span className="p-4 2xl:border-l-4 md:border-l-4 border-teal-800">
              <p className="font-semibold 2xl:text-5xl xl:text-3xl lg:text-2xl text-center cursor-pointer hover:text-teal-800 text-[#0A090B]">
                95%
              </p>
              <p className="font-normal 2xl:text-3xl xl:text-sm lg:text-xs md:text-[9px] text-[#605D64]">
                Operational Efficiency Boost
              </p>
            </span>
            <span className="p-4 2xl:border-l-4 md:border-l-4 border-teal-800">
              <p className="font-semibold 2xl:text-5xl xl:text-3xl lg:text-2xl text-center cursor-pointer hover:text-teal-800 text-[#0A090B]">
                40%
              </p>
              <p className="font-normal 2xl:text-3xl xl:text-sm lg:text-xs md:text-[9px] text-[#605D64]">
                Reduction in Response Time
              </p>
            </span>
            <span className="p-4 2xl:border-l-4 md:border-l-4 border-teal-800">
              <p className="font-semibold 2xl:text-5xl xl:text-3xl lg:text-2xl text-center cursor-pointer hover:text-teal-800 text-[#0A090B]">
                89%
              </p>
              <p className="font-normal 2xl:text-3xl xl:text-sm lg:text-xs md:text-[9px] text-[#605D64]">
                Improvement in Customer Engagement
              </p>
            </span>
          </div>
        </div>
      </div>

      {/* our mission */}
      <div className="p-6">
        <div className="flex justify-center xl:py-8 2xl:py-16 gap-28 border-8 border-teal-700 bg-orange-200">
          <div className="mt-10">
            <Image
              className="2xl:h-[550px] xl:w-fit xl:h-[320px] lg:w-[150px] lg:h-[300px] md:w-[120px] rounded-lg"
              src={"/image/image 14.jpeg"}
              width={538}
              height={480}
              alt="hospital"
            ></Image>
          </div>

          <div className="space-y-5">
            <span className="flex 2xl:text-6xl xl:text-4xl lg:text-3xl md:text-2xl space-x-2 cursor-pointer font-bold hover:underline">
              <p className="font-bold 2xl:text-6xl xl:text-4xl md:text-3xl text-gray-800">
                Our
              </p>
              <p className="font-bold 2xl:text-6xl xl:text-4xl md:text-3xl text-teal-800">
                Missions
              </p>
            </span>
            <p className="font-normal 2xl:text-3xl xl:text-base lg:text-[10px] md:text-[8px] h-auto 2xl:w-[900px] xl:w-[700px] lg:w-[500px] md:w-[350px] hover:font-bold text-[#605D64]">
              At Healthcare, our mission is to provide high-quality,
              patient-centered care that exceeds expectations. We are committed
              to delivering compassionate, innovative, and accessible healthcare
              to our communities. Our dedicated team of healthcare professionals
              works tirelessly to ensure that every patient receives the care
              they deserve, with dignity and respect.
            </p>
            <p className="font-normal 2xl:text-3xl xl:text-base lg:text-[10px] md:text-[8px] h-auto 2xl:w-[900px] xl:w-[700px] lg:w-[500px] md:w-[350px] hover:font-bold text-[#605D64]">
              Our mission is built on a foundation of empathy, kindness, and a
              passion for improving lives. We strive to create a supportive and
              inclusive environment that fosters trust, understanding, and hope.
              By combining cutting-edge technology with a human touch, we aim to
              make healthcare more personal, more effective, and more accessible
              to all. Through our unwavering commitment to excellence, we aim to
              make a positive impact on the lives of our patients, their
              families, and our communities.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
