import React from "react";
import ServiceCard from "../ServiceCard";

const fakeServices = [
  {
    _id: "635a0c0b64a6d231228942ae",
    service_id: "04",
    title: "Engine Oil Change",
    img: "https://i.ibb.co/T2cpBd5/888.jpg",
    price: "20.00",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius veniam nostrum dolores nemo quas. Minima ullam, veniam, nesciunt quae dolore animi blanditiis deserunt, ea esse dolorum ipsum quibusdam ipsa! Corrupti at, excepturi, fugiat aut nihil neque aliquid sapiente dignissimos provident, animi molestiae ipsum. Repudiandae ipsa id nihil reiciendis soluta eos ducimus pariatur, nam architecto tenetur quo quos commodi est libero repellendus vitae. Fuga numquam nulla nam, facere neque expedita voluptatibus pariatur necessitatibus vel, dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum. Aspernatur ex quibusdam at cum nulla!",
    facility: [
      {
        name: "Instant Car Services",
        details:
          "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum.",
      },
      {
        name: "24/7 Quality Service",
        details:
          "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum.",
      },
      {
        name: "Easy Customer Service",
        details:
          "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum.",
      },
      {
        name: "Quality Cost Service",
        details:
          "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum.",
      },
    ],
  },
  {
    _id: "635a0c0b64a6d231228942af",
    service_id: "05",
    title: "Battery Charge",
    img: "https://i.ibb.co/ydCbDN3/5555.jpg",
    price: "20.00",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius veniam nostrum dolores nemo quas. Minima ullam, veniam, nesciunt quae dolore animi blanditiis deserunt, ea esse dolorum ipsum quibusdam ipsa! Corrupti at, excepturi, fugiat aut nihil neque aliquid sapiente dignissimos provident, animi molestiae ipsum. Repudiandae ipsa id nihil reiciendis soluta eos ducimus pariatur, nam architecto tenetur quo quos commodi est libero repellendus vitae. Fuga numquam nulla nam, facere neque expedita voluptatibus pariatur necessitatibus vel, dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum. Aspernatur ex quibusdam at cum nulla!",
    facility: [
      {
        name: "Instant Car Services",
        details:
          "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum.",
      },
      {
        name: "24/7 Quality Service",
        details:
          "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum.",
      },
      {
        name: "Easy Customer Service",
        details:
          "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum.",
      },
      {
        name: "Quality Cost Service",
        details:
          "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum.",
      },
    ],
  },
  {
    _id: "635b591a1dafe382a9da8c96",
    service_id: "01",
    title: "Full car Repair",
    img: "https://i.ibb.co/R6Z2nFM/55.jpg",
    price: "200.00",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius veniam nostrum dolores nemo quas. Minima ullam, veniam, nesciunt quae dolore animi blanditiis deserunt, ea esse dolorum ipsum quibusdam ipsa! Corrupti at, excepturi, fugiat aut nihil neque aliquid sapiente dignissimos provident, animi molestiae ipsum. Repudiandae ipsa id nihil reiciendis soluta eos ducimus pariatur, nam architecto tenetur quo quos commodi est libero repellendus vitae. Fuga numquam nulla nam, facere neque expedita voluptatibus pariatur necessitatibus vel, dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum. Aspernatur ex quibusdam at cum nulla!",
    facility: [
      {
        name: "Instant Car Services",
        details:
          "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum.",
      },
      {
        name: "24/7 Quality Service",
        details:
          "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum.",
      },
      {
        name: "Easy Customer Service",
        details:
          "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum.",
      },
      {
        name: "Quality Cost Service",
        details:
          "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum.",
      },
    ],
  },
  {
    _id: "635b5afc1dafe382a9da8c98",
    service_id: "02",
    title: "Engine Repair",
    img: "https://i.ibb.co/5MvmD2g/88.jpg",
    price: "150.00",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius veniam nostrum dolores nemo quas. Minima ullam, veniam, nesciunt quae dolore animi blanditiis deserunt, ea esse dolorum ipsum quibusdam ipsa! Corrupti at, excepturi, fugiat aut nihil neque aliquid sapiente dignissimos provident, animi molestiae ipsum. Repudiandae ipsa id nihil reiciendis soluta eos ducimus pariatur, nam architecto tenetur quo quos commodi est libero repellendus vitae. Fuga numquam nulla nam, facere neque expedita voluptatibus pariatur necessitatibus vel, dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum. Aspernatur ex quibusdam at cum nulla!",
    facility: [
      {
        name: "Instant Car Services",
        details:
          "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum.",
      },
      {
        name: "24/7 Quality Service",
        details:
          "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum.",
      },
      {
        name: "Easy Customer Service",
        details:
          "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum.",
      },
      {
        name: "Quality Cost Service",
        details:
          "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum.",
      },
    ],
  },
  {
    _id: "635b5b691dafe382a9da8c99",
    service_id: "03",
    title: "Automatic Services",
    img: "https://i.ibb.co/wh7t3N3/555.jpg",
    price: "30.00",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius veniam nostrum dolores nemo quas. Minima ullam, veniam, nesciunt quae dolore animi blanditiis deserunt, ea esse dolorum ipsum quibusdam ipsa! Corrupti at, excepturi, fugiat aut nihil neque aliquid sapiente dignissimos provident, animi molestiae ipsum. Repudiandae ipsa id nihil reiciendis soluta eos ducimus pariatur, nam architecto tenetur quo quos commodi est libero repellendus vitae. Fuga numquam nulla nam, facere neque expedita voluptatibus pariatur necessitatibus vel, dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum. Aspernatur ex quibusdam at cum nulla!",
    facility: [
      {
        name: "Instant Car Services",
        details:
          "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum.",
      },
      {
        name: "24/7 Quality Service",
        details:
          "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum.",
      },
      {
        name: "Easy Customer Service",
        details:
          "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum.",
      },
      {
        name: "Quality Cost Service",
        details:
          "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum.",
      },
    ],
  },
  {
    _id: "635b5ba51dafe382a9da8c9a",
    service_id: "06",
    title: "Electrical System",
    img: "https://i.ibb.co/KzCG8qr/8888.jpg",
    price: "20.00",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius veniam nostrum dolores nemo quas. Minima ullam, veniam, nesciunt quae dolore animi blanditiis deserunt, ea esse dolorum ipsum quibusdam ipsa! Corrupti at, excepturi, fugiat aut nihil neque aliquid sapiente dignissimos provident, animi molestiae ipsum. Repudiandae ipsa id nihil reiciendis soluta eos ducimus pariatur, nam architecto tenetur quo quos commodi est libero repellendus vitae. Fuga numquam nulla nam, facere neque expedita voluptatibus pariatur necessitatibus vel, dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum. Aspernatur ex quibusdam at cum nulla!",
    facility: [
      {
        name: "Instant Car Services",
        details:
          "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum.",
      },
      {
        name: "24/7 Quality Service",
        details:
          "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum.",
      },
      {
        name: "Easy Customer Service",
        details:
          "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum.",
      },
      {
        name: "Quality Cost Service",
        details:
          "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum.",
      },
    ],
  },
];

const Services = () => {
  return (
    <>
      <div className="text-center">
        <h5 className="font-bold text-orange-600 text-xl pb-3">Services</h5>
        <h1 className="text-4xl font-bold">Our Services Area</h1>
        <p className="py-6">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form.
        </p>
      </div>
      <div className="my-8 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
        {fakeServices.map((s, i) => (
          <ServiceCard
            key={i}
            img={s.img}
            title={s.title}
            des={s.description}
            price={s.price}
          />
        ))}
      </div>
    </>
  );
};

export default Services;