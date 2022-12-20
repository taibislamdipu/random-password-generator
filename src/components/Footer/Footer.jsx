import React from "react";
import { IoMdFingerPrint } from "react-icons/io";
import { GiMissileMech } from "react-icons/gi";
import { RiSecurePaymentLine } from "react-icons/ri";
import { FaFacebookF, FaLinkedinIn, FaGithub, FaGlobe } from "react-icons/fa";
import { TfiNewWindow } from "react-icons/tfi";
const Footer = () => {
  const passwordData = [
    {
      id: "1",
      icon: <RiSecurePaymentLine color="orange" size={50} />,
      title: "Long",
      value:
        "The longer a password, the more secure it is. A strong password should be at least 10 characters long.",
    },
    {
      id: "2",
      icon: <GiMissileMech color="orange" size={50} />,
      title: "Complex",
      value:
        "Strong passwords use a combination of letters, numbers, cases, and symbols to form an unpredictable string of characters that doesn't resemble words or names.",
    },
    {
      id: "3",
      icon: <IoMdFingerPrint color="orange" size={50} />,
      title: "Unique",

      value:
        "A strong password should be unique to each account to reduce vulnerability in the event of a hack.",
    },
  ];

  const socialData = [
    {
      id: "1",
      icon: <FaFacebookF size={20} />,
      url: "https://www.facebook.com/taibislamdipu/",
      alt: "Facebook",
    },
    {
      id: "2",
      icon: <FaLinkedinIn size={20} />,
      url: "https://www.linkedin.com/in/taibislamdipu/",
      alt: "Facebook",
    },
    {
      id: "3",
      icon: <FaGithub size={20} />,
      url: "https://github.com/taibislamdipu",
      alt: "Facebook",
    },
    {
      id: "4",
      icon: <FaGlobe size={20} />,
      url: "https://taibislamdipu.netlify.app/",
      alt: "Facebook",
    },
  ];

  const linkedin_URL = "https://www.linkedin.com/in/taibislamdipu/";

  return (
    <section
      className="space-y-8  bg-gradient-to-r from-[#132E3F] to-[#071D2B] px-8 text-center text-white lg:space-y-0
    "
    >
      <h1 className="pt-20 text-4xl font-extrabold lg:text-5xl">
        What makes a password strong?
      </h1>

      <div className="grid-cols-3 space-y-8 lg:mx-40 lg:grid lg:gap-8 lg:space-y-0 lg:py-20">
        {passwordData.map((data) => (
          <div className="space-y-4" key={data?.id}>
            <div className="flex items-center justify-center">{data?.icon}</div>
            <h2 className="font text-xl font-bold" key={data?.id}>
              {data?.title}
            </h2>
            <p className="text-base">{data.value}</p>
          </div>
        ))}
      </div>

      <footer className="pb-20 text-start lg:mx-40">
        <div className="flex gap-4 py-6">
          {socialData.map((data) => (
            <a
              href={data?.url}
              className="hover:text-orange-400"
              target="_blank"
              key={data?.id}
            >
              {data?.icon}
            </a>
          ))}
        </div>
        <hr className="py-1" />
        <p>
          Developed by{" "}
          <a
            href={linkedin_URL}
            target="_blank"
            className="inline-flex items-center gap-1 underline hover:text-orange-400"
          >
            Dipu
            <TfiNewWindow />
          </a>
        </p>
      </footer>
    </section>
  );
};

export default Footer;
