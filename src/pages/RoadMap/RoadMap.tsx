import { motion } from 'framer-motion';
import { Tooltip as ReactTooltip } from "react-tooltip";

import RoadMapSection from 'pages/Landing/RoadMap';

const textContainer = {
  animate: {
    scale: [0.75, 1, 0.75, 1, 0.75, 0.75],
    transition: {
      repeat: Infinity,
      duration: 1,
    },
  },
};

const RoadMap = () => {
  return (
    <div className="flex flex-col gap-8 px-12 text-white">
      <RoadMapSection />
      <ReactTooltip
        anchorId="idea-was-created"
        place="bottom"
        content="Idea was created ~ on April of 2021"
      />
      <ReactTooltip
        anchorId="presented"
        place="bottom"
        content="First time we presented this idea was on May 27, 2021"
      />
      <ReactTooltip
        anchorId="development"
        place="bottom"
        content="Now we at development stage"
      />
      <ReactTooltip
        anchorId="beta-test"
        place="bottom"
        content="To be continued"
      />
      <ReactTooltip
        anchorId="enjoy"
        place="bottom"
        content="To be continued"
      />
      <p className="pt-8">- Our idea was created ~ on April of 2021 by Vitalii Diduk</p>
      <p>- First time we presented this idea was on May 27, 2021 in Noosphere, Cherkasy</p>
      <div className="flex">
        - Now we at development stage
        <motion.div initial="initial" animate="animate" className="pl-2" variants={textContainer}>
          _
        </motion.div>
      </div>
    </div>
  );
};

export default RoadMap;
