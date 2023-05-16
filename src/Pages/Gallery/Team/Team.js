import React from 'react';

const TeamSection = () => {
  const teamMembers = [
    {
      name: 'Abu Hanif',
      position: 'CEO',
      image: 'https://scontent.fjsr3-1.fna.fbcdn.net/v/t39.30808-6/315768610_194680943133125_5460759494141991203_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeHscNHdvcUcDq_ujABylDTb90MqEpHFK-n3QyoSkcUr6QOwjdh7f-Gwy6UMx9LEYTsgXAinDUivL5-9mzwGCCsY&_nc_ohc=HDd9im41cFIAX9hF6zD&_nc_ht=scontent.fjsr3-1.fna&oh=00_AfCM4U2XzMi08cKUBCty1nlKgFiD5NwTcLTsKCb1C4n38g&oe=6467DD8F',
    },
    {
      name: 'RENIX',
      position: 'CTO',
      image: 'https://scontent.fjsr3-1.fna.fbcdn.net/v/t39.30808-6/315768610_194680943133125_5460759494141991203_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeHscNHdvcUcDq_ujABylDTb90MqEpHFK-n3QyoSkcUr6QOwjdh7f-Gwy6UMx9LEYTsgXAinDUivL5-9mzwGCCsY&_nc_ohc=HDd9im41cFIAX9hF6zD&_nc_ht=scontent.fjsr3-1.fna&oh=00_AfCM4U2XzMi08cKUBCty1nlKgFiD5NwTcLTsKCb1C4n38g&oe=6467DD8F',
    },
    {
      name: 'RENIX',
      position: 'Doctor',
      image: 'https://scontent.fjsr3-1.fna.fbcdn.net/v/t39.30808-6/315768610_194680943133125_5460759494141991203_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeHscNHdvcUcDq_ujABylDTb90MqEpHFK-n3QyoSkcUr6QOwjdh7f-Gwy6UMx9LEYTsgXAinDUivL5-9mzwGCCsY&_nc_ohc=HDd9im41cFIAX9hF6zD&_nc_ht=scontent.fjsr3-1.fna&oh=00_AfCM4U2XzMi08cKUBCty1nlKgFiD5NwTcLTsKCb1C4n38g&oe=6467DD8F',
    },
    {
        name: 'RENIX',
        position: 'Doctor',
        image: 'https://scontent.fjsr3-1.fna.fbcdn.net/v/t39.30808-6/315768610_194680943133125_5460759494141991203_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeHscNHdvcUcDq_ujABylDTb90MqEpHFK-n3QyoSkcUr6QOwjdh7f-Gwy6UMx9LEYTsgXAinDUivL5-9mzwGCCsY&_nc_ohc=HDd9im41cFIAX9hF6zD&_nc_ht=scontent.fjsr3-1.fna&oh=00_AfCM4U2XzMi08cKUBCty1nlKgFiD5NwTcLTsKCb1C4n38g&oe=6467DD8F',
      },
      {
        name: 'RENIX',
        position: 'Doctor',
        image: 'https://scontent.fjsr3-1.fna.fbcdn.net/v/t39.30808-6/315768610_194680943133125_5460759494141991203_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeHscNHdvcUcDq_ujABylDTb90MqEpHFK-n3QyoSkcUr6QOwjdh7f-Gwy6UMx9LEYTsgXAinDUivL5-9mzwGCCsY&_nc_ohc=HDd9im41cFIAX9hF6zD&_nc_ht=scontent.fjsr3-1.fna&oh=00_AfCM4U2XzMi08cKUBCty1nlKgFiD5NwTcLTsKCb1C4n38g&oe=6467DD8F',
      },
      {
        name: 'RENIX',
        position: 'Doctor',
        image: 'https://scontent.fjsr3-1.fna.fbcdn.net/v/t39.30808-6/315768610_194680943133125_5460759494141991203_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeHscNHdvcUcDq_ujABylDTb90MqEpHFK-n3QyoSkcUr6QOwjdh7f-Gwy6UMx9LEYTsgXAinDUivL5-9mzwGCCsY&_nc_ohc=HDd9im41cFIAX9hF6zD&_nc_ht=scontent.fjsr3-1.fna&oh=00_AfCM4U2XzMi08cKUBCty1nlKgFiD5NwTcLTsKCb1C4n38g&oe=6467DD8F',
      },
      {
        name: 'RENIX',
        position: 'Doctor',
        image: 'https://scontent.fjsr3-1.fna.fbcdn.net/v/t39.30808-6/315768610_194680943133125_5460759494141991203_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeHscNHdvcUcDq_ujABylDTb90MqEpHFK-n3QyoSkcUr6QOwjdh7f-Gwy6UMx9LEYTsgXAinDUivL5-9mzwGCCsY&_nc_ohc=HDd9im41cFIAX9hF6zD&_nc_ht=scontent.fjsr3-1.fna&oh=00_AfCM4U2XzMi08cKUBCty1nlKgFiD5NwTcLTsKCb1C4n38g&oe=6467DD8F',
      },
      {
        name: 'RENIX',
        position: 'Doctor',
        image: 'https://scontent.fjsr3-1.fna.fbcdn.net/v/t39.30808-6/315768610_194680943133125_5460759494141991203_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeHscNHdvcUcDq_ujABylDTb90MqEpHFK-n3QyoSkcUr6QOwjdh7f-Gwy6UMx9LEYTsgXAinDUivL5-9mzwGCCsY&_nc_ohc=HDd9im41cFIAX9hF6zD&_nc_ht=scontent.fjsr3-1.fna&oh=00_AfCM4U2XzMi08cKUBCty1nlKgFiD5NwTcLTsKCb1C4n38g&oe=6467DD8F',
      },
  ];

  return (
    <section className="bg-white py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-primary">Our Team</h2>
        <div className="flex flex-wrap -mx-4">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 px-4 mb-8"
            >
              <div className="bg-gray-100 p-4 rounded-lg shadow-md">
                <img
                  src={member.image}
                  alt={member.name}
                  className="rounded-full w-32 h-32 mx-auto mb-4"
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
