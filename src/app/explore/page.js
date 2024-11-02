import React from "react";

function Explore() {
  return (
    <main className="p-5 text-gray-800 bg-white">
        <div className="p-4 bg-orange-200">
      <div className="flex flex-col space-y-5 text-center">
        <p className="text-3xl font-bold hover:underline cursor-pointer">Health Services</p>
        <p className="text-base font-semibold text-teal-800">
          Our Center offers you and your family complete range of HealthHub
          Services
        </p>
      </div>

      <div className="p-5 bg-bg-2 bg-no-repeat bg-center bg-contain">
        <div className="flex justify-between">
          <div>
            <p className="text-2xl text-center font-bold text-teal-800">Family Care</p>
            <p className="text-base text-justify w-[400px] h-auto">
              Our Doctors, Nurses and Clinic staff work together to provide
              friendly, personalized care to all members of your family from
              birth to 100+ age.With a focus on preventive care, we aim to keep
              you and your loved ones healthy and thriving.
            </p>
          </div>
          <div>
            <p className="text-2xl text-center font-bold text-teal-800">Urgent Care</p>
            <p className="text-base text-justify w-[400px] h-auto">
              HealthHub's Urgent Care provides prompt, compassionate treatment
              for unexpected illnesses and injuries. Our experienced
              professionals deliver high-quality care for non-life-threatening
              conditions, with convenient hours and minimal wait times.{" "}
            </p>
          </div>
        </div>

        <div className="flex justify-between">
          <div className="py-8">
            <p className="text-2xl text-center font-bold text-teal-800">Weight Lose</p>
            <p className="text-base text-justify w-[400px] h-auto">
              Achieve your weight loss goals with HealthHub's comprehensive
              program. Our experienced healthcare professionals will work with
              you to create a personalized plan that suits your needs and
              lifestyle. From nutrition counseling to exercise guidance, we'll
              support you every step of the way.{" "}
            </p>
          </div>
          <div className="py-8">
            <p className="text-2xl text-center font-bold text-teal-800">Pediatric</p>
            <p className="text-base text-justify w-[400px] h-auto">
              At HealthHub Pediatrics, we understand that your child's health is
              your top priority. Our compassionate and experienced pediatricians
              provide comprehensive care for infants, children, and adolescents,
              from routine check-ups and vaccinations to diagnosis and treatment
              of illnesses.
            </p>
          </div>
        </div>
      </div>
      </div>
    </main>
  );
}

export default Explore;
