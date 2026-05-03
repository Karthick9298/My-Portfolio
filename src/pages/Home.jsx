import React from "react";
import { motion } from "framer-motion";
import { IoLogoLinkedin } from "react-icons/io5";
import { BiLogoGmail } from "react-icons/bi";
import { BsGithub } from "react-icons/bs";
import { TypeAnimation } from "react-type-animation";
import { FaInstagram } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

export default function Home() {
  const [heroLoaded, setHeroLoaded] = React.useState(false);

  return (
    <div className="mt-20" id="home">
      <div className="flex justify-between py-10 items-center px-5 lg:px-28 lg:flex-row flex-col-reverse gap-12 lg:gap-20">

        <motion.div
          className="lg:w-[45%]"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >

          <motion.div
            className="text-2xl lg:text-5xl flex flex-col mt-8 lg:mt-0 gap-2 lg:gap-5 text-nowrap"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { staggerChildren: 0.2, ease: "easeInOut" },
              },
            }}
          >
            <motion.h2 variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}>
              Hello, <TypeAnimation
                sequence={[
                  "I am Karthikeya",
                  1200,
                ]}
                speed={12}
                style={{ fontWeight: 600 }}
                repeat={Infinity}
              />
            </motion.h2>
            <motion.h2 variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}>
              <span className="font-extrabold">Fullstack</span>{" "}
              <span
                className="text-white font-extrabold"
                style={{ WebkitTextStroke: "1px black" }}
              >
                Developer ,
              </span>
            </motion.h2>
            <motion.h2 variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}>
              <span className="font-extrabold">Content Creator.</span>
            </motion.h2>
          </motion.div>

          <motion.p
            className="text-[#71717A] text-sm lg:text-base mt-5"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            Full-stack CS undergraduate with experience building end-to-end web apps using React, Node.js, Express, and MongoDB. Skilled in RESTful APIs, authentication workflows, and responsive UIs, with a strong DSA (Java) foundation and an interest in applying GenAI techniques to real-world systems.
          </motion.p>

          <motion.div
            className="flex items-center gap-x-5 mt-10 lg:mt-14"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 1 }}
          >
            {[
              { icon: BiLogoGmail, href: "mailto:karthikeya9298@gmail.com" },
              { icon: IoLogoLinkedin, href: "https://www.linkedin.com/in/karthikeya-guddanti-a40454393/" },
              { icon: BsGithub, href: "https://github.com/Karthick9298" },
              { icon: SiLeetcode, href: "https://leetcode.com/u/karthikeya_viswa3108/" },
              { icon: FaInstagram, href: "https://www.instagram.com/codewithbroz" },
            ].map((item, index) => (
              <motion.a
                key={index}
                href={item.href}
                className="bg-white p-2 lg:p-3 rounded border-2 border-black"
                whileHover={{ scale: 1.1, backgroundColor: "#000", color: "#fff" }}
                whileTap={{ scale: 0.9 }}
              >
                <item.icon className="w-4 h-4 lg:w-5 lg:h-5" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          className="lg:w-[55%] w-full flex justify-center lg:justify-end mt-6 lg:mt-0 overflow-visible"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <div className="relative w-full max-w-[520px] lg:max-w-[620px]">
            {!heroLoaded && (
              <div className="absolute inset-0 rounded-xl bg-neutral-200 animate-pulse" />
            )}
            <img
              className={`block w-full h-auto object-contain object-center transition-opacity duration-500 ${heroLoaded ? "opacity-100" : "opacity-0"}`}
              src="/assets/hero-vector.jpg"
              alt="Hero Vector"
              onLoad={() => setHeroLoaded(true)}
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
