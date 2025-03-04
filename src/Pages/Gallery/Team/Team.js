import React from "react";
import CEO from "../../../Assets/team/ceo.png";
import Founder from "../../../Assets/team/founder.png";

const TeamSection = () => {
  const teamMembers = [
    {
      name: "Abu Hanif",
      position: "Founder & Managing Director",
      image: Founder,
    },
    {
      name: "Mahadi Hasan",
      position: "CEO",
      image: CEO,
    },
  ];

  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-12">
          Meet Our <span className="text-primary">Team</span>
        </h2>
        <div className="flex flex-wrap justify-center gap-10">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4 transform transition duration-300 hover:scale-105"
            >
              <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 mx-auto rounded-full object-cover border-4 border-primary"
                />
                <h3 className="text-xl font-semibold text-gray-800 mt-4">
                  {member.name}
                </h3>
                <p className="text-gray-600">{member.position}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
