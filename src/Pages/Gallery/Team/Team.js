import React from "react";

const TeamSection = () => {
  const teamMembers = [
    {
      name: "Abu Hanif",
      position: " Founder & Managing Director",
      image:
        "https://cdn5.vectorstock.com/i/1000x1000/16/49/young-and-successful-business-man-cartoon-employee-vector-15281649.jpg",
    },
    {
      name: "RENIX",
      position: "CEO",
      image:
        "https://cdn5.vectorstock.com/i/1000x1000/16/49/young-and-successful-business-man-cartoon-employee-vector-15281649.jpg",
    },
  ];

  return (
    <section className="bg-white py-12">
      <div className="container mx-auto px-4 sm:grid sm:grid-cols-1">
        <h2 className="text-3xl font-bold text-center mb-8 text-primary">
          Our Team
        </h2>
        <div className="sm:grid sm:grid-cols-1 lg:flex   ">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="w-full sm:w-full md:w-1/3 lg:w-1/4 xl:w-1/4 px-4 mb-8"
            >
              <div className="bg-gray-100 p-4 rounded-lg shadow-md">
                <img
                  src={member.image}
                  alt={member.name}
                  className="rounded  h-32 mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold text-center mb-2">
                  {member.name}
                </h3>
                <p className="text-center text-gray-600">{member.position}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
