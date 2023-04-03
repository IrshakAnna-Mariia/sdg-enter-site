import { motion } from 'framer-motion';

import { LoaderProps } from './loader.types';

const textContainer = {
  animate: {
    scale: [0.75, 1, 0.75, 1, 0.75, 0.75],
    transition: {
      repeat: Infinity,
      duration: 1,
    },
  },
};

const Loader: React.FC<LoaderProps> = ({ isVisible }) => {
  return (
    <>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-30 m-auto flex h-20 w-20"
          initial="initial"
          animate="animate"
          variants={textContainer}
        >
          <div className="h-4 h-4 rounded-lg bg-white" />
          <div className="h-4 h-4 rounded-lg bg-white" />
          <div className="h-4 h-4 rounded-lg bg-white" />
        </motion.div>
      )}
    </>
  );
};

export default Loader;
