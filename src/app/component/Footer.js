import React from "react";
import Image from "next/image";
import Link from "next/link";

function Footer() {
  return (
    <footer className="font-serif xl:px-8 bg-teal-900">
      <main className="lg:flex lg:flex-row md:flex md:flex-col items-center justify-center lg:py-10 md:py-3 lg:gap-x-16 lg:grid-cols-4 xl:gap-48 md:gap-y-10 border-b-2 border-gray-700">
        <div className="">
          <Image
            src={"/image/apex.png"}
            width={250}
            height={40}
            alt="apex"
          ></Image>
          <p className="my-5 h-auto w-[310px] 2xl:text-lg lg:text-xs font-normal text-justify text-[#D9DBE1]">
            Hospitals are institutions that deal with health care activities.
            They offer treatment to patients with specialized staff and
            equipment. In other words, hospitals serve humanity and play a vital
            role in the social welfare of any society. They have all the
            facilities to deal with varying diseases to make the patient
            healthy. The essay on hospital will take us through their types and
            importanc
          </p>
          <span className="flex gap-3 justify-center">
            <Image
              src={"/image/fb.png"}
              width={40}
              height={40}
              alt="fb"
            ></Image>
            <Image
              src={"/image/linkdn.png"}
              width={40}
              height={40}
              alt="inicon"
            ></Image>
            <Image
              src={"/image/inst.png"}
              width={40}
              height={40}
              alt="insta"
            ></Image>
            <Image
              src={"/image/twiter.png"}
              width={40}
              height={40}
              alt="twitter"
            ></Image>
          </span>
        </div>
        <div className="flex justify-center space-x-6 ">
          <div className="text-white space-y-3 lg:text-left md:text-center">
            <h1 className="font-bold cursor-pointer underline md:text-center 2xl:text-2xl md:text-base text-center text-[#FFFFFF]">
              Services
            </h1>
            <p className="md:text-sm  lg:text-sm 2xl:text-xl font-normal hover:font-bold hover:underline text-center text-[#D9DBE1]">
              <Link href="/virtualassistance">Patient Management</Link>
            </p>
            <p className="md:text-sm  lg:text-sm 2xl:text-xl font-normal hover:font-bold hover:underline text-center text-[#D9DBE1]">
              <Link href="/afterhoursupport">Financial Management</Link>
            </p>
            <p className="md:text-sm  lg:text-sm 2xl:text-xl font-normal hover:font-bold hover:underline text-center text-[#D9DBE1]">
              <Link href="/emailcustomer">Clicical Services</Link>
            </p>
            <p className="md:text-sm  lg:text-sm 2xl:text-xl font-normal hover:font-bold hover:underline text-center text-[#D9DBE1]">
              <Link href="/socialmedia">Security control</Link>
            </p>
            <p className="md:text-sm  lg:text-sm 2xl:text-xl font-normal hover:font-bold hover:underline text-center text-[#D9DBE1]">
              <Link href="/socialmedia">Operations Management</Link>
            </p>
            <p className="md:text-sm  lg:text-sm 2xl:text-xl font-normal hover:font-bold hover:underline text-center text-[#D9DBE1]">
              <Link href="/socialmedia">Communication</Link>
            </p>
            <p className="md:text-sm  lg:text-sm 2xl:text-xl font-normal hover:font-bold hover:underline text-center text-[#D9DBE1]">
              <Link href="/ordertaking">Reporting and Analytics</Link>
            </p>
            <p className="md:text-sm  lg:text-sm 2xl:text-xl font-normal hover:font-bold hover:underline text-center text-[#D9DBE1]">
              <Link href="/ordertaking">Patient Safety</Link>
            </p>
          </div>

          <div className="text-white space-y-3 lg:text-left md:text-center">
            <h1 className="font-bold cursor-pointer underline md:text-center 2xl:text-2xl md:text-base Underlne text-center text-[#FFFFFF]">
              About Us
            </h1>
            <p className="md:text-sm lg:text-sm 2xl:text-xl font-normal hover:font-bold cursor-pointer hover:underline text-center text-[#D9DBE1]">
              Mission Statement
            </p>
            <p className="md:text-sm lg:text-sm 2xl:text-xl font-normal hover:font-bold cursor-pointer hover:underline text-center text-[#D9DBE1]">
              Company History
            </p>
            <p className="md:text-sm lg:text-sm 2xl:text-xl font-normal hover:font-bold cursor-pointer hover:underline text-center text-[#D9DBE1]">
              Our Team
            </p>
            <p className="md:text-sm lg:text-sm 2xl:text-xl font-normal hover:font-bold cursor-pointer hover:underline text-center text-[#D9DBE1]">
              Our Values
            </p>
            <p className="md:text-sm lg:text-sm 2xl:text-xl font-normal hover:font-bold cursor-pointer hover:underline text-center text-[#D9DBE1]">
              Testimonials
            </p>
            <p className="md:text-sm lg:text-sm 2xl:text-xl font-normal hover:font-bold cursor-pointer hover:underline text-center text-[#D9DBE1]">
              Awards
            </p>
            <p className="md:text-sm lg:text-sm 2xl:text-xl font-normal hover:font-bold cursor-pointer hover:underline text-center text-[#D9DBE1]">
              Partnerships
            </p>
            <p className="md:text-sm lg:text-sm 2xl:text-xl font-normal hover:font-bold cursor-pointer hover:underline text-center text-[#D9DBE1]">
              Contact Us
            </p>
          </div>

          <div className="text-white space-y-3 lg:text-left md:text-center">
            <h1 className="font-bold cursor-pointer underline md:text-center 2xl:text-2xl md:text-baseUnderlne text-center text-[#FFFFFF]">
              Resources
            </h1>
            <p className="md:text-sm lg:text-sm 2xl:text-xl font-normal hover:font-bold cursor-pointer hover:underline text-center text-[#D9DBE1]">
              Documentation
            </p>
            <p className="md:text-sm lg:text-sm 2xl:text-xl font-normal hover:font-bold cursor-pointer hover:underline text-center text-[#D9DBE1]">
              Support
            </p>
            <p className="md:text-sm lg:text-sm 2xl:text-xl font-normal hover:font-bold cursor-pointer hover:underline text-center text-[#D9DBE1]">
              Training 
            </p>
            <p className="md:text-sm lg:text-sm 2xl:text-xl font-normal hover:font-bold cursor-pointer hover:underline text-center text-[#D9DBE1]">
              Education
            </p>
            <p className="md:text-sm lg:text-sm 2xl:text-xl font-normal hover:font-bold cursor-pointer hover:underline text-center text-[#D9DBE1]">
              Community and Forum
            </p>
            <p className="md:text-sm lg:text-sm 2xl:text-xl font-normal hover:font-bold cursor-pointer hover:underline text-center text-[#D9DBE1]">
              Updates and Releases
            </p>
            <p className="md:text-sm lg:text-sm 2xl:text-xl font-normal hover:font-bold cursor-pointer hover:underline text-center text-[#D9DBE1]">
              Integration and API
            </p>
            <p className="md:text-sm lg:text-sm 2xl:text-xl font-normal hover:font-bold cursor-pointer hover:underline text-center text-[#D9DBE1]">
             Compliance
            </p>
          </div>

          <div className="text-white space-y-3 lg:text-left md:text-center">
            <h1 className="font-bold underline md:text-center 2xl:text-2xl md:text-baseUnderlne text-center text-[#FFFFFF]">
              Locations
            </h1>
            <p className="md:text-sm lg:text-sm 2xl:text-xl font-normal hover:font-bold cursor-pointer hover:underline text-center text-[#D9DBE1]">
              Lahore
            </p>
            <p className="md:text-sm lg:text-sm 2xl:text-xl font-normal hover:font-bold cursor-pointer hover:underline text-center text-[#D9DBE1]">
              Sialkot
            </p>
            <p className="md:text-sm lg:text-sm 2xl:text-xl font-normal hover:font-bold cursor-pointer hover:underline text-center text-[#D9DBE1]">
              Faisalabad
            </p>
            <p className="md:text-sm lg:text-sm 2xl:text-xl font-normal hover:font-bold cursor-pointer hover:underline text-center text-[#D9DBE1]">
              karachi
            </p>
            <p className="md:text-sm lg:text-sm 2xl:text-xl font-normal hover:font-bold cursor-pointer hover:underline text-center text-[#D9DBE1]">
              Bhawalpur
            </p>
            <p className="md:text-sm lg:text-sm 2xl:text-xl font-normal hover:font-bold cursor-pointer hover:underline text-center text-[#D9DBE1]">
              Peshawar
            </p>
            <p className="md:text-sm lg:text-sm 2xl:text-xl font-normal hover:font-bold cursor-pointer hover:underline text-center text-[#D9DBE1]">
              Islamabad
            </p>
            <p className="md:text-sm lg:text-sm 2xl:text-xl font-normal hover:font-bold cursor-pointer hover:underline text-center text-[#D9DBE1]">
              Gujranwala
            </p>
          </div>
        </div>
      </main>
      
      <div className="flex justify-between md:px-4 md:py-2 px-8 py-4 lg:text-sm md:text-[12px] align-middle items-center">
        <div className="text-[#D9DBE1] font-normal">
          © 2024 Health Hub. All Rights Reserved.
        </div>
        <div className="flex space-x-10 lg:text-sm">
          <p>Term of Service</p>
          <p>Privacy policy</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
