"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
function Header() {
  const pathname = usePathname();
  return (
    <header className="font-serif md:h-40 2xl:h-72 w-100%">
      <div className="flex justify-between items-center xl:px-20 md:px-10 h-1/3 w-full bg-teal-500">
        <div className="flex items-center gap-1 align-middle">
          <Image
            className="md:w-4 md:h-4 lg:w-8 lg:h-6 2xl:w-12 2xl:h-12"
            src={"/image/home.png"}
            width={22}
            height={14}
            alt="flag"
          ></Image>
          <Link href="/home">
            <p className="w-[30%] 2xl:text-4xl lg:text-sm md:text-[10px] text-white">
              Home
            </p>
          </Link>
        </div>
        <div className="">
          <div className="flex justify-end xl:gap-12 md:gap-3 xl:mr-4 md:ml-3 lg:mr-3  text-sm text-white">
            <div className="flex items-center align-middle gap-2">
            <span>
              <Image
                className="md:h-4 md:w-4 lg:h-5 lg:w-5 2xl:w-12 2xl:h-12"
                src={"/image/call.png"}
                width={22}
                height={14}
                alt="phone"
              ></Image>
              </span>
              <p className="2xl:text-4xl lg:text-sm md:text-[10px] font-semibol ">
                Call us 042 4455 1122
              </p>
            </div>
            <div className="flex items-center align-middle gap-2">
              <span>
              <Image
                className="md:h-4 md:w-4 lg:h-5 lg:w-5 2xl:w-12 2xl:h-12"
                src={"/image/location.png"}
                width={22}
                height={14}
                alt="mail"
              ></Image>
              </span>
              <p className="2xl:text-4xl lg:text-sm md:text-[10px] font-semibol ">
                Email us:Healthhub@gmail.com
              </p>
            </div>
            <div className="flex items-center align-middle gap-2">
            <span>
              <Image
                className="md:h-4 md:w-4 lg:h-5 lg:w-5 2xl:w-12 2xl:h-12"
                src={"/image/clock.png"}
                width={22}
                height={14}
                alt="clock"
              ></Image>
               </span>
              <p className="2xl:text-4xl lg:text-sm md:text-[10px] font-semibol">
                Working hours:24/7 Hours
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center md:px-10 2xl:px-12 md:h-2/3 2xl:h-[75%] border-b bg-white">
        <div className="">
          <div className="flex items-center md:h-5 md:w-48 2xl:h-14 2xl:w-60">
            <Link href="/home">
              {" "}
              <Image
                src={"/image/image37.png"}
                width={400}
                height={400}
                alt=""
              ></Image>
            </Link>
          </div>
        </div>
        <div className="flex items-center h-full md:w-full lg:w-[65%] 2xl:w-[60%]">
          <div className="2xl:w-72 md:w-24 lg:w-60 h-full"></div>
          <div className="flex items-center 2xl:space-x-20 lg:space-x-5 md:space-x-3 2xl:text-4xl xl:text-base lg:text-sm md:text-[8px] font-semibold">
            <div className="dropdown">
              <Link href="/home">
                <p className=" rounded-md font-extrabold underline text-black hover:text-teal-900">
                  Services
                </p>
              </Link>
              <div class="content">
                <div className="2xl:p-12 lg:p-4 md:p-2 2xl:w-[800px] lg:w-[600px] lg:h-[auto] md:w-[400px] md:h-[auto]">
                  <h1 className="text-center 2xl:text-5xl lg:text-xl md:text-base text-black">
                    General & Family Services
                  </h1>
                  <div className="">
                    <p className="text-center 2xl:text-5xl lg:text-xl md:text-base cursor-pointer text-black hover:text-teal-900">
                      Primary Care{" "}
                    </p>
                    <p className="2xl:text-2xl lg:text-base md:text-xs text-gray-700">
                      Our hospital’s Primary Care helps with regular health
                      checkups, treating common illnesses or injuries, managing
                      long-term health issues like diabetes.
                    </p>
                  </div>
                  <div>
                    <p className="text-center 2xl:text-5xl lg:text-xl md:text-base cursor-pointer text-black hover:text-teal-900">
                      {" "}
                      Family Medicine{" "}
                    </p>
                    <p className="2xl:text-2xl lg:text-base md:text-xs text-gray-700">
                      Our hospital’s Family Medicine provides care for people of
                      all ages, from children to seniors, focusing on your
                      entire family’s health.
                    </p>
                  </div>
                  <div>
                    <p className="text-center 2xl:text-5xl lg:text-xl md:text-base cursor-pointer text-black hover:text-teal-900">
                      Urgent Care
                    </p>
                    <p className="2xl:text-2xl lg:text-base md:text-xs text-gray-700">
                      Our hospital’s Urgent Care provides quick treatment for
                      non-life-threatening conditions that need immediate
                      attention.
                    </p>
                  </div>
                           
                </div>
              </div>
            </div>

            <div className="dropdown1">
              <Link href="/home">
                <p className="rounded-md font-extrabold underline text-black hover:text-teal-900">
                  Location
                </p>
              </Link>
              <div class="content1">
                <div className="2xl:p-12 lg:p-4 md:p-2 2xl:w-[800px] lg:w-[600px] lg:h-[auto] md:w-[360px] md:h-[auto] right-[300px]">
                  <h1 className="text-center 2xl:text-5xl lg:text-xl md:text-base text-black">
                    Our Camping locations
                  </h1>
                  <div className="flex justify-center 2xl:text-2xl lg:text-base md:text-xs text-gray-700">
                    <span className="flex">
                    <p>Lahore</p>
                    <p>Islamabad</p>
                    <p>Karachi</p>
                    </span>
                  </div>
                  <div className="flex justify-center 2xl:text-2xl lg:text-base md:text-xs text-gray-700">
                    <span className="flex">
                    <p>Multan</p>
                    <p>Faisalabad</p>
                    <p>Sialkot</p>
                    <p>Mansehra</p>
                    </span>
                  </div>
                  <div className="flex justify-center 2xl:text-2xl lg:text-base md:text-xs text-gray-700">
                  <span className="flex">
                    <p>Gujranwala</p>
                    <p>Hydrabad</p>
                    <p>Larkana</p>
                    <p>Abbotabad</p>
                    </span>
                  </div>
                  <div className="flex justify-center 2xl:text-2xl lg:text-base md:text-xs text-gray-700">
                  <span className="flex">
                    <p>Rawalpindi</p>
                    <p>Sargodha</p>
                    <p>Kasur</p>
                    <p>Chiniot</p>
                    </span>
                  </div>
                  <div className="flex justify-center 2xl:text-2xl lg:text-base md:text-xs text-gray-700">
                  <span className="flex">
                    <p>Nawabshah</p>
                    <p>Burewala</p>
                    <p>Chakwal</p>
                    <p>Rahim yar khan</p>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="dropdown2">
              <Link href="/home">
                <p className="rounded-md font-extrabold underline text-black hover:text-teal-900">
                  Insurances
                </p>
              </Link>
              <div class="content2">
                <div className="2xl:p-12 lg:p-4 md:p-2 2xl:w-[800px] lg:w-[600px] lg:h-[auto] md:w-[400px] md:h-[auto]">
                  <h1 className="text-center 2xl:text-5xl lg:text-xl md:text-base text-black">
                    Insurances
                  </h1>
                  <div className="">
                    <p className="text-center 2xl:text-5xl lg:text-xl md:text-base cursor-pointer text-black hover:text-teal-900">
                    Accepted Insurance Plans
                    </p>
                    <p className="2xl:text-2xl lg:text-base md:text-xs text-gray-700">
                      We partner with a wide range of insurance providers to make healthcare accessible and affordable for everyone.
                    </p>
                  </div>
                  <div>
                    <p className="text-center 2xl:text-5xl lg:text-xl md:text-base cursor-pointer text-black hover:text-teal-900">
                      {" "}
                      Billing and Claims Support
                    </p>
                    <p className="2xl:text-2xl lg:text-base md:text-xs text-gray-700">
                      We simplify the billing process and assist with insurance claims for seamless payment solutions.
                    </p>
                  </div>
                  <div>
                    <p className="text-center 2xl:text-5xl lg:text-xl md:text-base cursor-pointer text-black hover:text-teal-900">
                     Pre-Authorization Assistance
                    </p>
                    <p className="2xl:text-2xl lg:text-base md:text-xs text-gray-700">
                    We manage pre-approval processes required by insurance for specific treatments or procedures.
                    </p>
                  </div>
              
                </div>
              </div>
            </div>

            <div className="dropdown3">
              <Link href="/home">
                <p className="rounded-md font-extrabold underline text-black hover:text-teal-900">
                  About
                </p>
              </Link>
              <div class="content3">
                <div className="2xl:p-12 lg:p-4 md:p-2 2xl:w-[800px] lg:w-[600px] lg:h-[auto] md:w-[400px] md:h-[auto]">
                  <h1 className="text-center 2xl:text-5xl lg:text-xl md:text-base text-black">
                    General & Family Services
                  </h1>
                  <div className="">
                    <p className="text-center 2xl:text-5xl lg:text-xl md:text-base cursor-pointer text-black hover:text-teal-900">
                      Primary Care{" "}
                    </p>
                    <p className="2xl:text-2xl lg:text-base md:text-xs text-gray-700">
                      Routine check-ups and physicals -Chronic disease
                      management (Diabetes, Hypertension, Asthma) - Acute
                      illness care (Cold, Flu, Infections) - Vaccinations and
                      immunizations
                    </p>
                  </div>
                  <div>
                    <p className="text-center 2xl:text-5xl lg:text-xl md:text-base cursor-pointer text-black hover:text-teal-900">
                      {" "}
                      Family Medicine{" "}
                    </p>
                    <p className="2xl:text-2xl lg:text-base md:text-xs text-gray-700">
                      Comprehensive care for all ages - Preventive care and
                      health screenings - Chronic disease management - Mental
                      health services
                    </p>
                  </div>
                  <div>
                    <p className="text-center 2xl:text-5xl lg:text-xl md:text-base cursor-pointer text-black hover:text-teal-900">
                      Urgent Care
                    </p>
                    <p className="2xl:text-2xl lg:text-base md:text-xs text-gray-700">
                      Walk-in care for acute illnesses and injuries - Evening
                      and weekend hours - On-site lab and imaging services
                    </p>
                  </div>
                
                </div>
              </div>
            </div>

            <Link href="/form">
              <button className="2xl:py-5 lg:py-3 md:py-2 2xl:w-52  lg:w-52 md:w-28 text-center 2xl:text-2xl lg:text-sm md:text-[10px] rounded-lg font-semibold  text-white bg-teal-600 hover:bg-black hover:text-white">
                Book an Appointment
              </button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
