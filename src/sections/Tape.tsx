import { Fragment } from "react";
import StarIcon from "../assets/icons/star.svg";

const words = [
  "Performant",
  "Responsive",
  "Accessible",
  "Secure",
  "Interactive",
  "Scalable",
  "User Friendly",
  "Maintainable",
  "Search Optimized",
  "Usable",
  "Reliable",
];

export const TapeSection = () => {
  return (
    <div className="py-16 lg:py-24 overflow-x-clip">
      <div className="bg-gradient-to-r from-emerald-300 to-sky-400 overflow-x-clip -rotate-3 -mx-1">
        <div className="flex [mask-image:liner-gradient(to_right, transparent, black_10%, black_90%, transparent)]">
          <div
            className="flex flex-none gap-4 py-3 pr-4 animate-move-left [animation-duration:30s]"
            style={{ transform: "translateX(-750px)" }}
          >
            {[...new Array(2)].fill(0).map((_, i) => (
              <Fragment key={i}>
                {words.map((word, index) => {
                  return (
                    <div key={index} className="inline-flex gap-4 items-center">
                      <span className="text-gray-900 uppercase font-extrabold text-sm">
                        {word}
                      </span>
                      <span>
                        <StarIcon className="size-6 text-gray-900 -rotate-12" />
                      </span>
                    </div>
                  );
                })}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
