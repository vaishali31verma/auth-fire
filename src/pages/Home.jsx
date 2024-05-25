import React from "react";

const Home = () => {
  const cardsData = [
    {
      title: "Service 1",
      description: "Description of Service 1",
      imgSrc: "https://images.unsplash.com/photo-1593642532973-d31b6557fa68",
    },
    {
      title: "Service 2",
      description: "Description of Service 2",
      imgSrc: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
    },
    {
      title: "Service 3",
      description: "Description of Service 3",
      imgSrc: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308",
    },
    {
      title: "Service 4",
      description: "Description of Service 4",
      imgSrc: "https://images.unsplash.com/photo-1478145046317-39f10e56b5e9",
    },
    {
      title: "Service 5",
      description: "Description of Service 5",
      imgSrc: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
    },
    {
      title: "Service 6",
      description: "Description of Service 6",
      imgSrc: "https://images.unsplash.com/photo-1496317556649-f930d733eea2",
    },
    {
      title: "Service 7",
      description: "Description of Service 7",
      imgSrc: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40",
    },
    {
      title: "Service 8",
      description: "Description of Service 8",
      imgSrc: "https://images.unsplash.com/photo-1485192501150-8493ba3e456d",
    },
    {
      title: "Service 9",
      description: "Description of Service 9",
      imgSrc: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa",
    },
    {
      title: "Service 10",
      description: "Description of Service 10",
      imgSrc: "https://images.unsplash.com/photo-1517430816045-df4b7de625d0",
    },
  ];

  return (
    <div>
      <main className="container mx-auto px-6 py-8">
        <section className="bg-white p-6 rounded-lg shadow-lg mt-[60px]">
          <h2 className="text-2xl font-bold mb-4">Welcome to Staih</h2>
          <p className="text-gray-700 mb-4">
            This is the home page of Staih. Here we provide the best services
            for you.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {cardsData.map((card, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-md">
                <img
                  src={card.imgSrc}
                  alt={card.title}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-lg font-bold">{card.title}</h3>
                <p className="text-gray-600">{card.description}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
