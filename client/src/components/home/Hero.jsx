import React from "react";
import { Link } from "react-router-dom";
import { HERO_URL } from '../../utils/constants';
// import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import InitialBanner from '../../assets/home-banner.png';

const Hero = () => {
    const underlineAnimate = {
        hidden: {
          opacity: 0,
          pathLength: 0,
        },
        visible: {
          opacity: 1,
          pathLength: 1,
          transition: {
            delay: 0.8,
            duration: .6,
          },
        },
    };

    const headerAnimate = {
        hidden: {
          opacity: 0,
          y: 25,
        },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.8
          }
        },
      };

      const textAnimate = {
        hidden: {
          opacity: 0,
          y: 25,
        },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.8,
            delay: 0.3
          }
        },
      };

      const linksAnimate = {
        hidden: {
          opacity: 0,
          x: '-100vw',
        },
        visible: {
          opacity: 1,
          x: 0,
          transition: {
            duration: 1,
            delay: 0.5,
            type: 'spring',
            stiffness: 120
          }
        },
      };

      const buttonVariants = {
        hover: {
          scale: 1.1,
          textShadow: "0px 0px 2px #ffffff",
          boxShadow: "0px 0px 4px #243E8B",
          transition: {
            duration: 0.3,
          },
        },
      };


    return (
        <div>
            <div className='w-full flex flex-col justify-between px-8 py-12 z-10'>
            <motion.div className="block mx-auto"
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: .4 }}
            >
              <img className="h-[100%]" src={InitialBanner} alt="" />
            </motion.div>
            </div>
        </div>
        //     {/* <div className="absolute z-0 -left-20 top-0 w-40 h-40 bg-secondary-200 rounded-2xl transform-gpu -rotate-12 lg:-left-40 lg:-top-8 xl:w-80 xl:h-80"></div> */}
    );
};

export default Hero;