import Image from "next/image";
import Link from "next/link";
import React from "react";

function Home() {
  return (
    <main className="font-serif py-4 px-10 space-y-5 bg-white">
      {/* first part */}
      <div className="flex justify-between md:p-5 lg:p-10 rounded-md bg-orange-200">
        <div className="flex flex-col 2xl:space-y-7">
          <div id="first" className="font-bold 2xl:text-[85px] xl:text-6xl xl:text-start md:text-3xl 2xl:space-y-8 md:space-y-4">
            <p>
              <span className="hover:underline cursor-pointer text-gray-800">
                Seeing The
              </span>
            </p>
            <p>
              <span className="hover:underline cursor-pointer text-gray-800">
                {" "}
                Doctor Just{" "}
              </span>
            </p>
            <p>
              <span id="cooler" className="hover:underline cursor-pointer text-teal-800">
                {/* Got Cooler{" "} */}
              </span>
            </p>
          </div>

          <div className="py-4 text-justify">
            <p className="2xl:text-3xl xl:text-base lg:text-xs md:text-[10px] xl:text-start 2xl:w-[660px] lg:w-[500px] md:w-[200px] font-normal font-sans hover:font-bold 2xl:space-y-10 md:space-y-2 text-gray-800">
              At Health Hub, we offer a comprehensive range of medical services,
              including emergency care, surgery, rehabilitation, and preventive
              care. Equipped with advanced technology and state-of-the-art
              equipment, our hospital is capable of handling complex medical
              cases with expertise and compassion.
            </p>
          </div>

          <div className="2xl:space-y-8">
          <Link href="aboutus"><div className=" flex xl:justify-start">
             <button className="2xl:py-8 xl:py-4 lg:py-2 md:py-1 2xl:w-72 lg:w-48 md:w-40 text-center 2xl:text-2xl md:text-sm rounded-bl-lg rounded-tr-lg font-semibold hover:translate-y-3  text-white bg-teal-700 hover:bg-black hover:text-white">
                Information About Us
              </button>
            </div></Link>
          </div>

          <div className="flex xl:justify-start py-6 space-x-9">
            <div>
              <p className="font-bold 2xl:text-6xl xl:text-3xl lg:text-xl cursor-pointer hover:text-teal-950 text-[#090909]">
                2,513
              </p>
              <p className="2xl:text-2xl xl:text-base lg:text-sm font-normal text-[#605D64]">
                Patients
              </p>
            </div>
            <div>
              <p className="font-bold 2xl:text-6xl xl:text-3xl lg:text-xl cursor-pointer hover:text-teal-950 text-[#090909]">
                4.8/5
              </p>
              <div className="flex gap-x-2 align-middle items-center">
                <Image
                  className="2xl:w-24 2xl:h-8 lg:w-20 lg:h-4"
                  src={"/image/stars.png"}
                  width={77}
                  height={12}
                  alt="stars"
                ></Image>
                <p className="2xl:text-2xl xl:text-base lg:text-sm font-normal  text-[#605D64]">
                  Ratings
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 2nd part */}
        <div className="">
          <Image
            className="md:h-[300px] xl:h-[500px] 2xl:h-[900px] md:w-[340px] xl:w-[500px]  2xl:w-[800px]"
            src={"/image/h3.gif"}
            width={420}
            height={550}
            alt="man3"
          />
        </div>
        
      </div>

      {/* Treatment Options */}
      <div className="font-serif border-8 border-orange-200">
        <div className="flex flex-col lg:px-6 lg:py-10 bg-white">
          <div className="lg:space-y-4">
            <h1 className="text-center font-bold text-gray-800">
              Treatment Options
            </h1>
            <h1 className="flex flex-col text-center font-bold lg:text-4xl cursor-pointer hover:text-teal-800 text-gray-800">
              <span className="">Health Hub Hospital,</span>
              <span className="">where comfort and care come first</span>
            </h1>
            <div className="flex text-center items-center justify-center hover:font-bold">
              <p className="lg:w-[430px] text-gray-800">
                Get the smile you've always dreamed of at Health Hub Hospital.
                Our industry-leading dental treatment options, comprehensive
                insurance coverage, and flexible financing choices make it
                easier than ever to attain your healthiest and most confident
                smile, all in a relaxed and judgment-free environment.
              </p>
            </div>
          </div>
        </div>
        {/* box */}
        <div className="flex xl:flex-row lg:flex-col lg:items-center lg:justify-center xl:justify-between">
          {/* box1 */}
          <div className="p-5">
            <div className="flex flex-col justify-between gap-6 items-center lg:p-4 border-4 lg:w-[350px] text-gray-800 border-orange-200">
              <span className="">
                <Image
                  className="lg:w-[170px] lg:h-[170px] "
                  src={"/image/image 15.jpg"}
                  width={150}
                  height={150}
                  alt=""
                ></Image>
              </span>
              <span className="font-bold cursor-pointer hover:underline hover:text-teal-800">
                <h1>Child Specialist</h1>
              </span>
              <span className="">
                <p className="">
                  Health Hub Hospital's child specialists are renowned for their
                  expertise and providing exceptional care for your child's
                  unique needs. Our pediatric team is dedicated to delivering
                  comprehensive and personalized treatment, from infancy to
                  adolescence.
                </p>
              </span>
              <span className="flex justify-center space-x-3 cursor-pointer hover:font-extrabold hover:underline">
                <p>Learn More</p>
                <Image
                  className="lg:w-25 lg:h-15"
                  src={"/image/arr.svg"}
                  width={20}
                  height={15}
                  alt=""
                ></Image>
              </span>
            </div>
          </div>
          {/* box 2 */}
          <div className="p-5">
            <div className="flex flex-col gap-4 items-center lg:p-4 border-4 lg:w-[350px] text-gray-800 border-orange-200">
              <span className="">
                <Image
                  className="lg:w-[170px] lg:h-[170px] "
                  src={"/image/image 18.jpg"}
                  width={150}
                  height={150}
                  alt=""
                ></Image>
              </span>
              <span className="font-bold cursor-pointer hover:underline hover:text-teal-800">
                <h1>Dermatologist</h1>
              </span>
              <span className="">
                <p>
                  Dermatologists at our hospital specialize in diagnosing and
                  treating a wide range of skin conditions. They provide expert
                  care for issues such as acne, eczema, psoriasis, and skin
                  cancer, utilizing the latest advancements in medical and
                  cosmetic dermatology.
                </p>
              </span>
              <span className="flex justify-center space-x-3 cursor-pointer hover:font-extrabold hover:underline">
                <p>Learn More</p>
                <Image
                  className="lg:w-25 lg:h-15"
                  src={"/image/arr.svg"}
                  width={20}
                  height={15}
                  alt=""
                ></Image>
              </span>
            </div>
          </div>
          {/* box 3 */}
          <div className="p-5">
            <div className="flex flex-col gap-4  items-center lg:p-4 border-4 lg:w-[350px] text-gray-800 border-orange-200">
              <span className="">
                <Image
                  className="lg:w-[170px] lg:h-[170px] "
                  src={"/image/image 17.jpg"}
                  width={150}
                  height={150}
                  alt=""
                ></Image>
              </span>
              <span className="font-bold cursor-pointer hover:underline hover:text-teal-800">
                <h1>Ophthalmologist</h1>
              </span>
              <span className="">
                <p>
                  Our eye specialist provide comprehensive eye care, offering
                  everything from routine eye exams to advanced treatments for
                  complex eye conditions. Trust our experienced ophthalmologists
                  to help you maintain and improve your eyesight, ensuring a
                  lifetime of clear vision.
                </p>
              </span>
              <span className="flex justify-center space-x-3 cursor-pointer hover:font-extrabold hover:underline">
                <p>Learn More</p>
                <Image
                  className="lg:w-25 lg:h-15"
                  src={"/image/arr.svg"}
                  width={20}
                  height={15}
                  alt=""
                ></Image>
              </span>
            </div>
          </div>
        </div>
        {/* box part 2 */}
        <div className="flex xl:flex-row lg:flex-col lg:items-center lg:justify-center xl:justify-between">
          {/* box 4 */}
          <div className="p-5">
            <div className="flex flex-col gap-4 items-center lg:p-4 border-4 lg:w-[350px] text-gray-800 border-orange-200">
              <span className="">
                <Image
                  className="lg:w-[190px] lg:h-[190px] "
                  src={"/image/image 21.jpg"}
                  width={150}
                  height={150}
                  alt=""
                ></Image>
              </span>
              <span className="font-bold cursor-pointer hover:underline hover:text-teal-800">
                <h1>Orthopedic</h1>
              </span>
              <span className="">
                <p>
                  Our orthopedic specialists are committed to providing advanced
                  care for bones, joints, and muscles. Our team aims to restore
                  mobility, alleviate pain, and improve overall quality of life
                  through personalized treatment plans.
                </p>
              </span>
              <span className="flex justify-center space-x-3 cursor-pointer hover:font-extrabold hover:underline">
                <p>Learn More</p>
                <Image
                  className="lg:w-25 lg:h-15"
                  src={"/image/arr.svg"}
                  width={20}
                  height={15}
                  alt=""
                ></Image>
              </span>
            </div>
          </div>
          {/* box 5 */}
          <div className="p-5">
            <div className="flex flex-col gap-5 items-center lg:p-4 border-4 lg:w-[350px] text-gray-800 border-orange-200">
              <span className="">
                <Image
                  className="lg:w-[170px] lg:h-[170px] "
                  src={"/image/image 20.jpg"}
                  width={150}
                  height={150}
                  alt=""
                ></Image>
              </span>
              <span className="font-bold cursor-pointer hover:underline hover:text-teal-800">
                <h1>Physiotherapists</h1>
              </span>
              <span className="">
                <p>
                  Our physiotherapists are dedicated to improving your mobility
                  and overall physical health through personalized treatment
                  plans. They specialize in rehabilitating injuries, managing
                  chronic pain.
                </p>
              </span>
              <span className="flex justify-center space-x-3 cursor-pointer hover:font-extrabold hover:underline">
                <p>Learn More</p>
                <Image
                  className="lg:w-25 lg:h-15"
                  src={"/image/arr.svg"}
                  width={20}
                  height={15}
                  alt=""
                ></Image>
              </span>
            </div>
          </div>
          {/* box 6 */}
          <div className="p-5">
            <div className="flex flex-col gap-y-4 items-center lg:p-4 border-4 lg:w-[350px] text-gray-800 border-orange-200">
              <span className="">
                <Image
                  className="lg:w-[170px] lg:h-[170px] "
                  src={"/image/image 19.jpg"}
                  width={150}
                  height={150}
                  alt=""
                ></Image>
              </span>
              <span className="font-bold cursor-pointer hover:underline hover:text-teal-800">
                <h1>Neurologist</h1>
              </span>
              <span className="">
                <p>
                  Our neurologists offer expert care for a wide range of
                  neurological conditions, including migraines, epilepsy,
                  stroke, Parkinson's disease. They utilize advanced diagnostic
                  techniques and personalized treatment plans to improve
                  patients' neurological health.
                </p>
              </span>
              <span className="flex justify-center space-x-3 cursor-pointer hover:font-extrabold hover:underline">
                <p>Learn More</p>
                <Image
                  className="lg:w-25 lg:h-15"
                  src={"/image/arr.svg"}
                  width={20}
                  height={15}
                  alt=""
                ></Image>
              </span>
            </div>
          </div>
        </div>
        {/* button */}
        <div className="flex justify-center align-middle items-center space-x-6 lg:p-6">
         <button className="2xl:py-8 xl:py-5 md:py-3 2xl:w-72 md:w-48 text-center 2xl:text-lg xl:text-sm md:text-xs rounded-bl-lg rounded-tr-lg font-semibold hover:translate-x-3  bg-teal-600 text-white hover:bg-black">
         <Link href="/doctor"><p>Experienced Doctors</p></Link> 
          </button>
          <span className="flex justify-center space-x-3 align-middle items-center cursor-pointer font-serif hover:font-extrabold hover:underline text-gray-800">
          <Link href="events"><p className="">News and Events</p> </Link>
            <Image
              className="lg:w-25 lg:h-15"
              src={"/image/arr.svg"}
              width={20}
              height={15}
              alt=""
            ></Image>
          </span>
        </div>
      </div>

       {/* profitable  */}
 <div className="flex flex-col 2xl:gap-12 lg:gap-7 md:gap-4 2xl:py-24 lg:py-20 md:py-10">
      <p className="font-bold text-center 2xl:text-6xl xl:text-4xl lg:text-3xl md:text-2xl">
        <span className="cursor-pointer hover:underline text-gray-800">Health-Hub</span>
        <span className="cursor-pointer hover:underline text-teal-800"> Report</span>
      </p>
      <p className="font-normal hover:font-bold 2xl:text-3xl xl:text-base lg:text-xs md text-center hover:underline text-[#605D64]">
      Health Hub treated 20,00,000+ patients, performed 1,00,000+ surgeries and successfully completed 18000+ bypass operations.
      </p>
      <div className="flex justify-between 2xl:px-64 md:px-32">
        <span className="p-4">
          <p className="font-semibold 2xl:text-5xl xl:text-3xl lg:text-2xl text-center cursor-pointer text-[#0A090B] hover:text-teal-800">
            20000000+
          </p>
          <p className="font-normal 2xl:text-2xl xl:text-sm lg:text-xs md:text-[9px] text-[#605D64]">
            Patients Treated
          </p>
        </span>
        <span className="p-4 border-l-4 border-orange-200">
          <p className="font-semibold 2xl:text-5xl xl:text-3xl lg:text-2xl text-center cursor-pointer text-[#0A090B] hover:text-teal-800">
            100000+
          </p>
          <p className="font-normal 2xl:text-2xl xl:text-sm lg:text-xs md:text-[9px] text-[#605D64]">
            Surgeries Performed
          </p>
        </span>
        <span className="p-4 border-l-4 border-orange-200">
          <p className="font-semibold 2xl:text-5xl xl:text-3xl lg:text-2xl text-center cursor-pointer text-[#0A090B] hover:text-teal-800">
            18000+
          </p>
          <p className="font-normal 2xl:text-2xl xl:text-sm lg:text-xs md:text-[9px] text-[#605D64]">
            Bypass Performed
          </p>
        </span>
      </div>
    </div>

      {/* patient Care You'll Love  */}
      <div className="flex justify-center p-10 rounded-md bg-orange-200">
        {/* first part */}
        <div className="relative w-fit m-auto">
          <Image
            className="md:h-[400px] xl:h-[500px] 2xl:h-[900px] md:w-[420px] xl:w-[500px]  2xl:w-[800px]"
            src={"/image/image 13.jpg"}
            width={420}
            height={550}
            alt="man3"
          />
        </div>

        {/* Second part */}
        <div className="flex flex-col p-10 2xl:space-y-7">
          <p className="lg:text-lg font-bold text-teal-950">
            Patient Care You'll Love
          </p>
          <div className="font-bold 2xl:text-[85px] xl:text-4xl xl:text-start md:text-3xl 2xl:space-y-8 md:space-y-3">
            <p>
              <span className="cursor-pointer hover:underline text-gray-800">
                Helping you achieve{" "}
              </span>
            </p>
            <p>
              <span className="cursor-pointer hover:underline text-teal-800">
                your dream Health{" "}
              </span>
            </p>
          </div>

          <div className="flex flex-col gap-y-4 py-4 font-sans">
            <p className=" text-justify 2xl:text-3xl xl:text-base lg:text-sm md:text-[12px] xl:text-start 2xl:w-[660px] lg:w-[450px] md:w-[200px] font-normal 2xl:space-y-10 md:space-y-2 cursor-pointer hover:font-bold text-gray-800">
              At Health Hub Hospital, we pride ourselves on our patient-centered
              approach to care. Our team of experienced healthcare professionals
              is dedicated to providing personalized attention to each and every
              patient. We understand that every individual has unique needs and
              concerns, and we strive to address these with empathy and
              understanding.
            </p>
            <p className="2xl:text-3xl xl:text-base lg:text-sm md:text-[12px] xl:text-start 2xl:w-[660px] lg:w-[450px] md:w-[200px] font-normal 2xl:space-y-10 md:space-y-2 cursor-pointer hover:font-bold text-gray-800">
              What sets us apart from other hospitals is our commitment to
              innovation and excellence. Our medical teams are constantly
              updating their skills and knowledge to stay abreast of the latest
              medical advancements and best practices.
            </p>
            <p className="2xl:text-3xl xl:text-base lg:text-sm md:text-[12px] xl:text-start 2xl:w-[660px] lg:w-[450px] md:w-[200px] font-normal 2xl:space-y-10 md:space-y-2 cursor-pointer hover:font-bold text-gray-800">
              At Health Hub Hospital, we believe that healthcare should be
              accessible and affordable for all. That's why we offer flexible
              payment options and a range of insurance plans to suit every
              budget. Our dedicated team is available 24/7 to answer your
              questions and address your concerns.
            </p>
          </div>

          <div className="2xl:space-y-8">
            <div className=" flex xl:justify-start">
              <Link href="/stories">
                <button className="2xl:py-8 xl:py-4 lg:py-2 md:py-1 2xl:w-72 lg:w-48 md:w-40 text-center 2xl:text-2xl md:text-sm rounded-bl-lg rounded-tr-lg font-semibold hover:translate-x-10 text-white bg-teal-700 hover:bg-black hover:text-white">
                  Patient Stories
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Dental Care for Every Wallet */}
      <div className="p-10">
        <span className="text-center space-y-3">
          <p className="text-lg font-bold text-teal-950">
            Health Care for Every Wallet
          </p>
          <p className="text-4xl cursor-pointer hover:underline text-gray-800">
            Flexible Payment Options
          </p>
          <p className="text-xl cursor-pointer hover:underline text-gray-800">
            We offer flexible payment options that fit your budget, ensuring you
            receive exceptional care without compromise.
          </p>
        </span>
      </div>

      {/* card 1 */}
      <div className="">
      <div className="flex sm:flex-col xl:flex-row xl:justify-between items-center align-middle xl:space-x-10 sm:space-y-6">
        <div className="flex flex-col justify-between p-4 lg:w-auto xl:w-[400px] xl:h-[300px] border-l-8 rounded-l-xl border-teal-500 text-gray-800 bg-orange-200">
          <h1 className="text-3xl font-bold cursor-pointer hover:underline text-gray-800 hover:text-teal-800">
            Most Insurances Accepted
          </h1>
          <p className="w-[350px] hover:font-semibold">
            We value your investment in your health and wellness. Our hospital
            gladly works with most insurances, making your healthcare journey
            smooth and stress-free.
          </p>
          <span className="flex space-x-3 cursor-pointer hover:font-extrabold hover:underline">
            <p>Verify your Coverage</p>
            <Image
              className="lg:w-25 lg:h-15"
              src={"/image/arr.svg"}
              width={20}
              height={15}
              alt=""
            ></Image>
          </span>
        </div>

        {/* card 2 */}
        <div className="flex flex-col justify-between p-4 lg:w-auto xl:w-[400px] xl:h-[300px] border-l-8 rounded-l-xl border-pink-800 text-gray-800 bg-orange-200">
          <h1 className="text-3xl font-bold cursor-pointer hover:underline text-gray-800 hover:text-teal-800">
            Health Care Membership
          </h1>
          <p className="w-[350px] hover:font-semibold">
            Elevate your healthcare experience with our Healthcare Membership.
            Unlock exclusive discounts while prioritizing your wellness.Enjoy
            peace of mind knowing you're taking care of your health, while also
            taking care of your budget
          </p>
          <span className="flex space-x-3 cursor-pointer hover:font-extrabold hover:underline">
            <p>Sign up for Membership</p>
            <Image
              className="lg:w-25 lg:h-15"
              src={"/image/arr.svg"}
              width={20}
              height={15}
              alt=""
            ></Image>
          </span>
        </div>

        {/* card 3 */}
        <div className="flex flex-col justify-between p-4 lg:w-auto xl:w-[400px] xl:h-[300px] border-l-8 rounded-l-xl border-green-800 text-gray-800 bg-orange-200">
          <h1 className="text-3xl font-bold  cursor-pointer hover:underline text-gray-800 hover:text-teal-800">
            Affordable Care Financing
          </h1>
          <p className="w-[350px] hover:font-semibold">
            Make your health a priority without worrying about the cost. We
            offer financing options through Affirm and CareCredit, allowing you
            to pay for medical treatments in convenient installments.
          </p>
          <span className="flex space-x-3 cursor-pointer hover:font-extrabold hover:underline">
            <p>Learn About Financing Options</p>
            <Image
              className="lg:w-25 lg:h-15"
              src={"/image/arr.svg"}
              width={20}
              height={15}
              alt=""
            ></Image>
          </span>
        </div>
      </div>
      </div>
      <div className="flex justify-center space-x-6 lg:p-6">
        <Link href="explore"><button className="2xl:py-8 xl:py-5 md:py-3 xl:w-64 2xl:w-72 md:w-40 text-center 2xl:text-lg xl:text-sm md:text-xs rounded-bl-lg rounded-tr-lg font-semibold hover:translate-x-3 bg-teal-600 text-white hover:bg-black">
          Explore All Health Hub Services
        </button></Link>
        <span className="flex justify-center space-x-3 align-middle items-center cursor-pointer font-serif hover:font-extrabold hover:underline text-gray-800">
          <Link href="events"><p>News and Events</p></Link>
          <Image
            className="lg:w-25 lg:h-15"
            src={"/image/arr.svg"}
            width={20}
            height={15}
            alt=""
          ></Image>
        </span>
      </div>

    </main>
  );
}

export default Home;
