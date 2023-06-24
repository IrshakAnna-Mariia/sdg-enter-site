import { RingLoader } from 'react-spinners';

import { LoaderProps } from './loader.types';

const Loader: React.FC<LoaderProps> = ({ isVisible }) => {
  return (
    <>
      {isVisible && (
        <div className="sticky top-1/3 left-1/2 right-1/2 z-50 h-0 w-0">
          <RingLoader color="#FF7A00" size={120} />
        </div>
      )}
    </>
  );
};

export default Loader;
