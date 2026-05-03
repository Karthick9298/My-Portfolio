import React from "react";
import { motion } from "framer-motion";

const achievements = [
  {
    id: 1,
    title: "Hackathon recognition",
    detail:
      "Runner-Up at the Amaravathi Quantum Valley Hackathon; qualified at the college level for SIH.",
  },
  {
    id: 2,
    title: "Competitive programming",
    detail:
      "3rd place in the Algo-Chase coding competition by GDSC and 300+ DSA problems solved on LeetCode.",
  },
  {
    id: 3,
    title: "Content creation",
    detail:
      "Grew to 14K+ followers on Instagram in 2 months by creating engaging coding content.",
  },
];

export default function Achievements() {
  return (
    <div className="px-5 lg:px-28 my-8 lg:my-16" id="achievements">
      <motion.h2
        className="text-2xl lg:text-4xl text-center"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        My <span className="font-extrabold">Achievements</span>
      </motion.h2>

      <div className="grid gap-5 lg:gap-8 mt-7 lg:mt-12 lg:grid-cols-3">
        {achievements.map((achievement, index) => (
          <motion.div
            key={achievement.id}
            className="border-2 border-black rounded-lg p-5 bg-white"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-bold">{achievement.title}</h3>
            <p className="text-[#71717A] text-sm/6 lg:text-base mt-2">
              {achievement.detail}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
