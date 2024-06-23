import React from "react";

const Banner = () => {
  const banner = [
    {
      id: 1,
      title: "Affordable Price for car servicing",
      description:
        "There are many serviec center but you will find our service the best in the city and town so please come to us for you well being and for the well being of your car",
    },
    {
      id: 2,
      title: "Affordable Price for car servicing",
      description:
        "There are many serviec center but you will find our service the best in the city and town so please come to us for you well being and for the well being of your car",
    },
    {
      id: 3,
      title: "Affordable Price for car servicing",
      description:
        "There are many serviec center but you will find our service the best in the city and town so please come to us for you well being and for the well being of your car",
    },
    {
      id: 4,
      title: "Affordable Price for car servicing",
      description:
        "There are many serviec center but you will find our service the best in the city and town so please come to us for you well being and for the well being of your car",
    },
    {
      id: 5,
      title: "Affordable Price for car servicing",
      description:
        "There are many serviec center but you will find our service the best in the city and town so please come to us for you well being and for the well being of your car",
    },
    {
      id: 6,
      title: "Affordable Price for car servicing",
      description:
        "There are many serviec center but you will find our service the best in the city and town so please come to us for you well being and for the well being of your car",
    },
  ];
  return (
    <>
      <div className="carousel w-full min-h-[100vh] mt-4 text-white">
        {banner.map((b, i) => (
          <div
            key={i}
            id={`item${b.id}`}
            className="carousel-item w-full h-[100vh] bg-center bg-cover "
            style={{
              backgroundImage: `url("/assets/images/banner/${b.id}.jpg")`,
            }}
          >
            <div className="bg-black bg-opacity-35 items-center flex justify-start w-full">
              <div className="lg:w-1/2 md:w-4/5 w-full p-4 md:pl-12">
                <h2>{b.title}</h2>
                <p className="mb-4">{b.description}</p>
                <button className="btn bg-white text-primary hover:btn-primary">
                  Discover More
                </button>
                <button className="btn-primary btn ml-4">Latest Project</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex w-full justify-center gap-2 py-2">
        {banner.map((b, i) => (
          <a key={i} href={`#item${b.id}`} className="btn btn-xs">
            {b.id}
          </a>
        ))}
      </div>
    </>
  );
};

export default Banner;
