import React from "react";
import map from "../assets/map_full.png";
import fullscreen from "../assets/map_fullscreen.png";
import zoom from "../assets/map_zoom.png";
import location from "../assets/map_location.png";
import plus from "../assets/plus.png";
import { button_withArrow, infoText_Plus } from "../config";

function FindUs() {
  return (
    <div className="text-[#ffffff] w-full bg-[#000000] mt-12 sm:mt-20 lg:mt-[150px]">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-0 items-center min-h-[600px]">
        {/* Map Section */}
        <div className="relative w-full h-full order-1 lg:order-1">
          <div className="w-full h-[300px] sm:h-[400px] lg:h-[600px] overflow-hidden">
            <img
              src={map}
              alt="Location map"
              className="w-full h-full object-cover lg:object-fill"
            />
          </div>
        </div>

        {/* Content Section */}
        <div className="flex items-center justify-center py-8 lg:py-0 order-2 lg:order-2 px-4 sm:px-6 lg:px-8">
          <div className="w-full max-w-lg">
            {infoText_Plus(
              "Look",
              "Find us near you",
              "Nec suas signiferumque id. An eum labore commodo principes. Usu diam noluisse cu, nam adipisci",
              "view more"
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FindUs;
