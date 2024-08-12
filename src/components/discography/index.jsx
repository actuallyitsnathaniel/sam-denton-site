import React, { useState } from "react";
import { motion } from "framer-motion";

import Disc from "./disc";

const Discography = ({ children }) => {
  const itemVariants = {
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 24 },
    },
    hidden: { opacity: 0, y: 20, transition: { duration: 0.2 } },
  };

  const [expanded, setExpanded] = useState(-1);
  return (
    <>
      <div>
        <h2
          className={
            "flex text-3xl md:text-5xl font-moslin justify-center p-10"
          }
        >
          singles<span className="font-sp-blunt">/</span>EPs
        </h2>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              clipPath: "inset(0% 0% 0% 0% round 10px)",
              transition: {
                type: "spring",
                bounce: 1,
                duration: 0.7,
                delayChildren: 0.2,
                staggerChildren: 0.1,
              },
            },
            hidden: {
              clipPath: "inset(10% 50% 90% 50% round 10px)",
              transition: {
                type: "spring",
                bounce: 0,
                duration: 0.3,
              },
            },
          }}
          className={"flex flex-wrap w-full justify-center"}
        >
          {React.Children.map(children, (child, i) => {
            if (!child.props.album)
              return (
                <motion.div variants={itemVariants}>
                  {React.cloneElement(child, { expanded, setExpanded, i })}
                </motion.div>
              );
          })}
        </motion.div>
      </div>

      <div>
        <h2
          className={
            "flex text-3xl md:text-5xl font-moslin justify-center p-10"
          }
        >
          albums
        </h2>
        <div className={"flex flex-row flex-wrap w-full justify-center"}>
          {React.Children.map(children, (child, i) => {
            if (child.props.album)
              return (
                <motion.div variants={itemVariants}>
                  {React.cloneElement(child, { expanded, setExpanded, i })}
                </motion.div>
              );
          })}
        </div>
      </div>
    </>
  );
};

Discography.Disc = Disc;

export default Discography;
