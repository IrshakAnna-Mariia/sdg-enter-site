import { useContext } from "react";

import { VisibilityContext } from 'react-horizontal-scrolling-menu';

import { ScrollBannerCardProps } from "./ScrollBannerCard.types";

const ScrollBannerCard: React.FC<ScrollBannerCardProps> = ({ title, itemId, files }) => {
    const visibility = useContext(VisibilityContext);
    visibility.isItemVisible(itemId);
  
    return (
      <div
        onClick={() => visibility}
        className="mx-4 cursor-pointer"
        tabIndex={0}
      >
        <div className="card w-96 h-52">
          {files?.[0] && <img alt={title} src={files[0]} className="w-96 h-52" />}
        </div>
        <p className="text-white py-4 text-lg max-w-sm truncate">{title}</p>
      </div>
    );
}

export default ScrollBannerCard;
