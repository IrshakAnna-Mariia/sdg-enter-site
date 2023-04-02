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
          data-test="page_loader"
          data-testid="page_loader"
          className="fixed inset-0 z-30 m-auto h-20 w-20 flex"
          initial="initial"
          animate="animate"
          variants={textContainer}
        >
          <div className="bg-white h-4 h-4 rounded-lg" />
          <div className="bg-white h-4 h-4 rounded-lg" />
          <div className="bg-white h-4 h-4 rounded-lg" />
        </motion.div>
      )}
    </>
  );
};

export default Loader;
