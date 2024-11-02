import Image from "next/image";
import React from "react";

function Doctor() {
  return (
    <main className="p-10 bg-orange-200">
        <div className="flex flex-col gap-4">

        {/* 1st */}
      <div className="lg:flex sm:flex-col lg:flex-row lg:justify-between sm:justify-evenly items-center p-10 bg-white">
        <div className="sm:flex sm:justify-center">
          <Image
            className="w-[300px] h-[200px]"
            src={"/image/image 34.jpg"}
            width={300}
            height={200}
            alt="doctor"
          ></Image>
        </div>

        <span className="flex flex-col gap-3 text-gray-800">
          <p className="2xl:text-6xl xl:text-2xl md:text-lg sm:text-center font-bold hover:underline">Dr. Hameed Tajammal Khan</p>
         <span className="flex justify-center"><p className="2xl:text-2xl md:text-sm xl:2xl:w-[600px] lg:w-[370px] md:w-[300px] sm:w-[150px] ">
            Nephrologist, Consultant Physician, General Physician B.Sc, MB,
            MRCP(UK), FCPS(Nephrology), MRCP( Glasg), FRCP(Glasg)
          </p></span> 
          <div className="flex lg:justify-between sm:justify-center space-x-3">
            <span className="p-3 2xl:text-2xl lg:text-sm md:text-xs border-l-4 border-teal-800">
              <p>15 - 30 Min</p>
              <p>Wait Time</p>
            </span>
            <span className="p-3 2xl:text-2xl lg:text-sm md:text-xs border-l-4 border-teal-800">
              <p>17 Years</p>
              <p>Experience</p>
            </span>
            <span className="p-3 2xl:text-2xl lg:text-sm md:text-xs border-l-4 border-teal-800">
              <p>94% (120)</p>
              <p>Satisfied Patients</p>
            </span>
          </div></span>
          <div className="flex justify-center items-center p-3">
            <button className="2xl:w-[500px] 2xl:h-[80px] lg:w-72 lg:h-12 sm:w-64 sm:h-10 2xl:p-5 lg:p-3 2xl:text-3xl lg:text-lg sm:text-md text-center cursor-pointer hover:bg-black bg-teal-400 hover:text-white">Book Appointment Rs.5000</button>
          </div>
        
      </div>

      {/* 2nd */}
      <div className="lg:flex sm:flex-col lg:flex-row lg:justify-between sm:justify-evenly items-center p-10 bg-white">
        <div className="sm:flex sm:justify-center">
        <Image
            className="w-[300px] h-[200px]"
            src={"/image/image 31.jpg"}
            width={300}
            height={200}
            alt="doctor"
          ></Image>
        </div>

        <span className="flex flex-col gap-3 text-gray-800">
          <p className="2xl:text-6xl xl:text-2xl md:text-lg sm:text-center font-bold hover:underline">Dr. Alina Wahaj</p>
         <span className="flex justify-center"><p className="2xl:text-2xl md:text-sm xl:2xl:w-[600px] lg:w-[370px] md:w-[300px] sm:w-[150px] ">
         Hand Surgeon, Cosmetic Surgeon, Reconstructive Surgeon, Plastic Surgeon MBBS, FRCS (Edin), FRCS(Glasgow), Diplomate in Plastic Surgery
          </p></span> 
          <div className="flex lg:justify-between sm:justify-center space-x-3">
            <span className="p-3 2xl:text-2xl lg:text-sm md:text-xs border-l-4 border-teal-800">
              <p>25 - 40 Min</p>
              <p>Wait Time</p>
            </span>
            <span className="p-3 2xl:text-2xl lg:text-sm md:text-xs border-l-4 border-teal-800">
              <p>8 Years</p>
              <p>Experience</p>
            </span>
            <span className="p-3 2xl:text-2xl lg:text-sm md:text-xs border-l-4 border-teal-800">
              <p>96% (67)</p>
              <p>Satisfied Patients</p>
            </span>
          </div></span>
          <div className="flex justify-center items-center p-3">
            <button className="2xl:w-[500px] 2xl:h-[80px] lg:w-72 lg:h-12 sm:w-64 sm:h-10 2xl:p-5 lg:p-3 2xl:text-3xl lg:text-lg sm:text-md text-center cursor-pointer hover:bg-black bg-teal-400 hover:text-white">Book Appointment Rs.5000</button>
          </div>
        
      </div>

      {/* 3rd */}
      <div className="lg:flex sm:flex-col lg:flex-row lg:justify-between sm:justify-evenly items-center p-10 bg-white">
        <div className="sm:flex sm:justify-center">
          <Image
            className="w-[300px] h-[200px]"
            src={"/image/image 33.jpg"}
            width={200}
            height={300}
            alt="doctor"
          ></Image>
        </div>

        <span className="flex flex-col gap-3 text-gray-800">
          <p className="2xl:text-6xl xl:text-2xl md:text-lg sm:text-center font-bold hover:underline">Dr. Danyal Anwar</p>
         <span className="flex justify-center"><p className="2xl:text-2xl md:text-sm xl:2xl:w-[600px] lg:w-[370px] md:w-[300px] sm:w-[150px] ">
         Pediatrician, Neonatologist MBBS, MRCP (London), MRCPCH (UK)
          </p></span> 
          <div className="flex lg:justify-between sm:justify-center space-x-3">
            <span className="p-3 2xl:text-2xl lg:text-sm md:text-xs border-l-4 border-teal-800">
              <p>10 - 20 Min</p>
              <p>Wait Time</p>
            </span>
            <span className="p-3 2xl:text-2xl lg:text-sm md:text-xs border-l-4 border-teal-800">
              <p>35 Years</p>
              <p>Experience</p>
            </span>
            <span className="p-3 2xl:text-2xl lg:text-sm md:text-xs border-l-4 border-teal-800">
              <p>92% (1020)</p>
              <p>Satisfied Patients</p>
            </span>
          </div></span>
          <div className="flex justify-center items-center p-3">
            <button className="2xl:w-[500px] 2xl:h-[80px] lg:w-72 lg:h-12 sm:w-64 sm:h-10 2xl:p-5 lg:p-3 2xl:text-3xl lg:text-lg sm:text-md text-center cursor-pointer hover:bg-black bg-teal-400 hover:text-white">Book Appointment Rs.5000</button>
          </div>
        
      </div>

      {/* 4th */}
      <div className="lg:flex sm:flex-col lg:flex-row lg:justify-between sm:justify-evenly items-center p-10 bg-white">
        <div className="sm:flex sm:justify-center">
          <Image
           className="w-[300px] h-[200px]"
           src={"/image/image 35.jpg"}
           width={300}
           height={200}
           alt="doctor"
          ></Image>
        </div>

        <span className="flex flex-col gap-3 text-gray-800">
          <p className="2xl:text-6xl xl:text-2xl md:text-lg sm:text-center font-bold hover:underline">Dr. Anaya Ali</p>
         <span className="flex justify-center"><p className="2xl:text-2xl md:text-sm xl:2xl:w-[600px] lg:w-[370px] md:w-[300px] sm:w-[150px] ">
         Pediatrician, Consultant Child Specialist, MD, MBBS, MRCPCH(UK), FCPS(Pediatrics), MRCP(Glasg), FRCPCH(Glasg), DCH(London)
          </p></span> 
          <div className="flex lg:justify-between sm:justify-center space-x-3">
            <span className="p-3 2xl:text-2xl lg:text-sm md:text-xs border-l-4 border-teal-800">
              <p>5 - 10 Min</p>
              <p>Wait Time</p>
            </span>
            <span className="p-3 2xl:text-2xl lg:text-sm md:text-xs border-l-4 border-teal-800">
              <p>12 Years</p>
              <p>Experience</p>
            </span>
            <span className="p-3 2xl:text-2xl lg:text-sm md:text-xs border-l-4 border-teal-800">
              <p>99% (89)</p>
              <p>Satisfied Patients</p>
            </span>
          </div></span>
          <div className="flex justify-center items-center p-3">
            <button className="2xl:w-[500px] 2xl:h-[80px] lg:w-72 lg:h-12 sm:w-64 sm:h-10 2xl:p-5 lg:p-3 2xl:text-3xl lg:text-lg sm:text-md text-center cursor-pointer hover:bg-black bg-teal-400 hover:text-white">Book Appointment Rs.5000</button>
          </div>
        
      </div>

      {/* 5th */}
      <div className="lg:flex sm:flex-col lg:flex-row lg:justify-between sm:justify-evenly items-center p-10 bg-white">
        <div className="sm:flex sm:justify-center">
          <Image
            className="w-[300px] h-[200px]"
            src={"/image/image 32.jpg"}
            width={300}
            height={200}
            alt="doctor"
          ></Image>
        </div>

        <span className="flex flex-col gap-3 text-gray-800">
          <p className="2xl:text-6xl xl:text-2xl md:text-lg sm:text-center font-bold hover:underline">Dr. Hammad Asghar</p>
         <span className="flex justify-center"><p className="2xl:text-2xl md:text-sm xl:2xl:w-[600px] lg:w-[370px] md:w-[300px] sm:w-[150px] ">
         Dermatologist, Consultant Dermatologist, MD, MBBS, MRCP(UK), FCPS(Dermatology), MRCP(Dermatol), FRCP(Edin), FACD
          </p></span> 
          <div className="flex lg:justify-between sm:justify-center space-x-3">
            <span className="p-3 2xl:text-2xl lg:text-sm md:text-xs border-l-4 border-teal-800">
              <p>10 - 20 Min</p>
              <p>Wait Time</p>
            </span>
            <span className="p-3 2xl:text-2xl lg:text-sm md:text-xs border-l-4 border-teal-800">
              <p>14 Years</p>
              <p>Experience</p>
            </span>
            <span className="p-3 2xl:text-2xl lg:text-sm md:text-xs border-l-4 border-teal-800">
              <p>96% (102)</p>
              <p>Satisfied Patients</p>
            </span>
          </div></span>
          <div className="flex justify-center items-center p-3">
            <button className="2xl:w-[500px] 2xl:h-[80px] lg:w-72 lg:h-12 sm:w-64 sm:h-10 2xl:p-5 lg:p-3 2xl:text-3xl lg:text-lg sm:text-md text-center cursor-pointer hover:bg-black bg-teal-400 hover:text-white">Book Appointment Rs.5000</button>
          </div>
        
      </div>

      {/* 6th */}
      <div className="lg:flex sm:flex-col lg:flex-row lg:justify-between sm:justify-evenly items-center p-10 bg-white">
        <div className="sm:flex sm:justify-center">
          <Image
           className="w-[300px] h-[200px]"
           src={"/image/image 36.jpg"}
           width={300}
           height={200}
           alt="doctor"
          ></Image>
        </div>

        <span className="flex flex-col gap-3 text-gray-800">
          <p className="2xl:text-6xl xl:text-2xl md:text-lg sm:text-center font-bold hover:underline">Dr. Dania Wakas</p>
         <span className="flex justify-center"><p className="2xl:text-2xl md:text-sm xl:2xl:w-[600px] lg:w-[370px] md:w-[300px] sm:w-[150px] ">
         Orthopaedic Surgeon, Consultant Orthopaedic Surgeon, MS, MBBS, MRCS(Edin), FRCS(Ortho), FCPS(Ortho), MCh(Ortho), FRCS(Glasg)
          </p></span> 
          <div className="flex lg:justify-between sm:justify-center space-x-3">
            <span className="p-3 2xl:text-2xl lg:text-sm md:text-xs border-l-4 border-teal-800">
              <p>10 - 25 Min</p>
              <p>Wait Time</p>
            </span>
            <span className="p-3 2xl:text-2xl lg:text-sm md:text-xs border-l-4 border-teal-800">
              <p>11 Years</p>
              <p>Experience</p>
            </span>
            <span className="p-3 2xl:text-2xl lg:text-sm md:text-xs border-l-4 border-teal-800">
              <p>97% (96)</p>
              <p>Satisfied Patients</p>
            </span>
          </div></span>
          <div className="flex justify-center items-center p-3">
            <button className="2xl:w-[500px] 2xl:h-[80px] lg:w-72 lg:h-12 sm:w-64 sm:h-10 2xl:p-5 lg:p-3 2xl:text-3xl lg:text-lg sm:text-md text-center cursor-pointer hover:bg-black bg-teal-400 hover:text-white">Book Appointment Rs.5000</button>
          </div>
        
      </div>

      </div>
    </main>
  );
}

export default Doctor;
