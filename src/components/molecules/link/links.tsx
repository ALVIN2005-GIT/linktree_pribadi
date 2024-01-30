// IMPORT LOGO ICONS

import { FaInstagram, FaFacebook, FaYoutube, FaGithub } from "react-icons/fa";

// DATA LINK JSON
const products = [
  {
    id: 1,
    name: "My Instagram",
    link: "https://www.instagram.com/alvingrandp?igsh=OGp4dHR2M3RweHZo",
    icons: <FaInstagram size={30} />,
    color: "yellow",
  },
  {
    id: 2,
    name: "My FaceBook ",
    link: "https://www.facebook.com/alvin.g.putra.790?mibextid=ZbWKwL",
    icons: <FaFacebook size={30} />,
    color: "blue",
  },
  {
    id: 3,
    name: "My Youtube",
    link: "https://youtube.com/@alvingrandputra3238?feature=shared",
    icons: <FaYoutube size={30} />,
    color: "red",
  },
  {
    id: 4,
    name: "My Github ",
    link: "https://github.com/ALVIN2005-GIT",
    icons: <FaGithub size={30} />,
    color: "black",
  },
];

// MAPPING THE JSON DATA WITH THIS FUNCTION
const links = () => {
  return (
    <section className="p-3">
      {products.map((product) => (
        <a
          className="flex items-center justify-evenly min-w-[70%] py-4  rounded-full mb-6 bg-cyan-400 hover:bg-sky-200 "
          href={product.link}
          key={product.id}
          target="_blank"
        >
          <p
            style={{
              color:
                product.color === "yellow"
                  ? "purple"
                  : product.color === "red"
                  ? "red"
                  : product.color === "blue"
                  ? "blue"
                  : product.color === "black"
                  ? "black"
                  : "darkgreen",
            }}
            className="min-w-[45%] mr-10 md:mr-[-3rem] lg:mr-0 "
          >
            {product.icons}
          </p>
          <p className=" min-w-[50%] ml-[-7.6rem] text-[1.2rem] ">
            {product.name}
          </p>
        </a>
      ))}
    </section>
  );
};

// EXPORT THE FILE COMPONENT
export default links;
