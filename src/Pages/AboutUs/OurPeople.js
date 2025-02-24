import React from "react";
import img2 from "../../Assets/team/ceo.png";
import img1 from "../../Assets/team/founder.png";

const OurPeople = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Abu Hanif",
      position: "Founder & Managing Director",
      image: img1,
    },
    {
      id: 2,
      name: "Mahadi Hasan",
      position: "Chairman & CEO",
      image: img2,
    },
  ];

  return (
    <div className="">
      <div className="max-w-screen-lg mx-auto ">
        <h2 className="font-bold text-center text-3xl uppercase bg-secondary text-white py-4 rounded-t-lg">
          Our Leadership
        </h2>
        {/* ✅ Section Title */}

        {/* ✅ Team Grid */}
        <div
          className="lg:flex items-start gap-8 bg-white shadow-lg p-6
        rounded-b-lg"
        >
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className="bg-white shadow-lg rounded-xl overflow-hidden text-center p-6 hover:shadow-xl transition duration-300"
              >
                {/* ✅ Profile Image */}
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-40 h-40 mx-auto rounded-full shadow-md border-4 border-primary"
                />

                {/* ✅ Name & Position */}
                <h3 className="mt-4 text-xl font-bold text-gray-900">
                  {member.name}
                </h3>
                <p className="text-gray-600 text-sm">{member.position}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurPeople;
