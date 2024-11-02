import Image from "next/image";
import React from "react";

function Stories() {
  return (
    <main className="p-10 bg-white">
        
      {/* story 1 */}
      <div className="flex flex-col space-y-4 py-6 border-8 rounded-lg bg-lime-300 border-lime-800">
        <span className="flex justify-center items-center space-x-3 text-center font-bold">
          <p className="text-xl text-gray-800">Title:</p>
          <p className="text-teal-800">
            "A Heartfelt Thank You from the Khan Family"
          </p>
        </span>
        <span className="flex flex-col space-y-3 text-center font-bold">
          <p className="text-2xl text-gray-800">Story</p>
          <p className="px-2 text-teal-800">
            When their young son, Ali, was diagnosed with a rare heart
            condition, the Khan family was devastated. But thanks to the expert
            care and compassion of the Health Hub cardiology team, Ali received
            the life-saving surgery he needed. Today, Ali is thriving, and his
            family is forever grateful for the care they received at Health Hub
          </p>
        </span>
        <span className="flex justify-center items-center space-x-3 text-center font-bold">
          <p className="text-xl text-gray-800">Quote</p>
          <p className="text-teal-800">
            "The doctors and nurses at Health Hub treated us like family. We
            can't thank them enough for giving us our son back." - Mrs. Khan
          </p>
        </span>
        <span className="relative w-fit m-auto">
          <Image
            className="md:h-[400px] xl:h-[400px] 2xl:h-[900px] md:w-[420px] xl:w-[400px] 2xl:w-[800px]"
            src={"/image/image 26.jpg"}
            width={420}
            height={550}
            alt="man3"
          />
        </span>
      </div>
      {/* story 2 */}
      <div className="py-6">
        <div className="flex flex-col space-y-4 py-6 border-8 rounded-lg bg-red-300 border-red-800">
          <span className="flex justify-center items-center space-x-3 text-center font-bold">
            <p className="text-xl text-gray-800">Title:</p>
            <p className="text-teal-800">"Healing Hands at Health Hub"</p>
          </span>
          <span className="flex flex-col space-y-3 text-center font-bold">
            <p className="text-2xl text-gray-800">Story</p>
            <p className="px-2 text-teal-800">
              Rachel, a 35-year-old mother of two, was diagnosed with a chronic
              condition. Health Hub's compassionate team of specialists worked
              together to create a personalized treatment plan. With
              comprehensive care and support, Rachel managed her condition and
              regained her quality of life. She's now thriving and grateful for
              the exceptional care she received at Health Hub.
            </p>
          </span>
          <span className="flex justify-center items-center space-x-3 text-center font-bold">
            <p className="text-xl text-gray-800">Quote</p>
            <p className="text-teal-800">
              "The care I received at Health Hub was truly life-changing." -
              Rachel
            </p>
          </span>
          <span className="relative w-fit m-auto">
            <Image
              className="md:h-[400px] xl:h-[400px] 2xl:h-[900px] md:w-[420px] xl:w-[400px] 2xl:w-[800px]"
              src={"/image/image 27.jpg"}
              width={420}
              height={550}
              alt="man3"
            />
          </span>
        </div>
      </div>
      {/* story 3 */}
      <div className="py-6">
        <div className="flex flex-col space-y-4 py-6 border-8 rounded-lg bg-purple-300 border-purple-800">
          <span className="flex justify-center items-center space-x-3 text-center font-bold">
            <p className="text-xl text-gray-800">Title:</p>
            <p className="text-teal-800">
              {" "}
              "A Journey of Hope and Healing at Health Hub"
            </p>
          </span>
          <span className="flex flex-col space-y-3 text-center font-bold">
            <p className="text-2xl text-gray-800">Story</p>
            <p className="px-2 text-teal-800">
              Fatima, 29, was diagnosed with a life-threatening autoimmune
              disorder and rushed to Health Hub. Our expert team administered
              innovative stem cell therapy and intensive care. Against all odds,
              Amira made a remarkable recovery. She regained her strength and
              was eventually discharged. "The team at Health Hub saved my life,"
              Amira said. "Their exceptional care gave me a second chance, and
              I'm forever grateful!" This version still captures the essence of
              Amira's journey and the exceptional care she received at Health
              Hub, but in a more concise manner.
            </p>
          </span>
          <span className="flex justify-center items-center space-x-3 text-center font-bold">
            <p className="text-xl text-gray-800">Quote</p>
            <p className="text-teal-800">
              "The team at Health Hub saved my life. Their exceptional care and
              expertise gave me a second chance, and I'm forever grateful!" -
              Amira
            </p>
          </span>
          <span className="relative w-fit m-auto">
            <Image
              className="md:h-[400px] xl:h-[400px] 2xl:h-[900px] md:w-[420px] xl:w-[400px] 2xl:w-[800px]"
              src={"/image/image 28.jpg"}
              width={420}
              height={550}
              alt="man3"
            />
          </span>
        </div>
      </div>
      {/* story 4 */}
      <div className="py-6">
        <div className="flex flex-col space-y-4 py-6 border-8 rounded-lg bg-sky-300 border-sky-800">
          <span className="flex justify-center items-center space-x-3 text-center font-bold">
            <p className="text-xl text-gray-800">Title:</p>
            <p className="text-teal-800">"A Second Chance at Life"</p>
          </span>
          <span className="flex flex-col space-y-3 text-center font-bold">
            <p className="text-2xl text-gray-800">Story</p>
            <p className="px-2 text-teal-800">
              After a devastating car accident, 28-year-old Ahmad was rushed to
              Health Hub Hospital with severe injuries. His determined spirit
              and the tireless efforts of Dr. Ali and the ICU team helped his
              overcome incredible odds. Ahmad made a remarkable recovery,
              regaining his strength and mobility. He returned home to his loved
              ones, grateful for the exceptional care he received at Health Hub
              Hospital.
            </p>
          </span>
          <span className="flex justify-center items-center space-x-3 text-center font-bold">
            <p className="text-xl text-gray-800">Quote</p>
            <p className="text-teal-800">
              "Health Hub Hospital is a blessing in disguise, their care and
              compassion helped me regain my life." - Ahmad
            </p>
          </span>
          <span className="relative w-fit m-auto">
            <Image
              className="md:h-[400px] xl:h-[400px] 2xl:h-[900px] md:w-[420px] xl:w-[400px] 2xl:w-[800px]"
              src={"/image/image 29.jpg"}
              width={420}
              height={550}
              alt="man3"
            />
          </span>
        </div>
      </div>
      {/* story 5 */}
      <div className="py-6">
        <div className="flex flex-col space-y-4 py-6 border-8 rounded-lg bg-orange-400 border-orange-800">
          <span className="flex justify-center items-center space-x-3 text-center font-bold">
            <p className="text-xl text-gray-800">Title:</p>
            <p className="text-teal-800">"From Darkness to Light"</p>
          </span>
          <span className="flex flex-col space-y-3 text-center font-bold">
            <p className="text-2xl text-gray-800">Story</p>
            <p className="px-2 text-teal-800">
              Rahul, a 40-year-old entrepreneur, struggled with severe
              depression and anxiety. After a suicide attempt, he was admitted
              to Health Hub Hospital's psychiatric unit. Under Dr. Bilal
              guidance, Rahul received comprehensive treatment and therapy. With
              time, support, and care, Rahul began to heal and eventually
              overcame his struggles. He now leads a happy, productive life,
              grateful for the hospital's role in his recovery.
            </p>
          </span>
          <span className="flex justify-center items-center space-x-3 text-center font-bold">
            <p className="text-xl text-gray-800">Quote</p>
            <p className="text-teal-800">
            "Health Hub Hospital's care and expertise lit up my path to recovery, giving me a new lease on life." - Rahul
            </p>
          </span>
          <span className="relative w-fit m-auto">
            <Image
              className="md:h-[400px] xl:h-[400px] 2xl:h-[900px] md:w-[420px] xl:w-[400px] 2xl:w-[800px]"
              src={"/image/image 30.jpg"}
              width={420}
              height={550}
              alt="man3"
            />
          </span>
        </div>
      </div>
    </main>
  );
}

export default Stories;
