import React, { useEffect } from "react";
import { interpolate } from "flubber";
import { motion, animate, useMotionValue, useTransform } from "framer-motion";

const SVGMorph = (props: {
  shape: {
    d: string;
    fill: string;
    style: { opacity: number };
  };
}) => {
  const [indexOfPath, setIndexOfPath] = React.useState(0);
  //const path = React.useRef(null);
  const defaultPath = {
    fill: "rgba(191, 134, 65, 1)",
    d: "M40.1 14.6c-1-.1-2.3-2.2-1.2-3.9.7-1.1 1.4-2.1.3-3.9-.8-1.4-1.7-1.2-2.7-.9-1.6.5-2.2-1.8-2.2-3.7 0-1-.5-1.9-2.3-1.9-1 0-1.5.8-2 1.7-.8 1.3-3.6 1.7-4.1.3-.5-1.4-3-1.5-4.7-.4-1.6 1.1-3.5.7-3.6.4-.2-.2-.3-.4-.4-.4-.1 0-.5-.9-1.5-1.2-.5-.2-1.1-.1-1.9.2-3 1.2-1.7 4-2.7 6.1-1.4 2.7-2.9-.3-5.5.4-1.9.5-3.3 2.8-3.3 5.2.1 2.2 3 4.7 2.7 6.3-.3 1.3-3.4-.6-4.6 3.2-.4 1.2-.2 2.3.1 3.7.6 2.9 2.1 1.7 3.3 2.9 1.4 1.5 1.6 3.1.2 4.9-2.8 3.9.5 6.7 4.3 6.1 2.1-.3 5.5-1.1 4.9.4-.3 1-1.1 2-.6 2.7 2.7 3 4.8-2 7.5-1.8h.3c.1 0 .4.2.7.4.2.2.5.3.6.4.1.1.4 1.1 1.3 1.6.5.3 1.1.5 1.8.5 1.4 0 3.5-.6 4.4-2 .3-.4.3-1.1.3-1.7.1-1 2.1-.2 4.2.1 2.9.4 5.6-1.4 4.3-5.6-.1-.3-.2-.5-.4-.7-.3-.4-.4-1 0-1.4.2-.2.5-.3.9-.2 3.9.8 6.7-.5 5.5-4-.6-1.8-4.5-2.6-1.5-3.6 1.1-.4 2.3-.8 3-2.3 1.7-3.4.5-8.6-3.8-8-.3.1-.9.2-1.6.1Z",
  };
  const progress = useMotionValue(0);
  const path = useTransform(progress, [0, 1], [defaultPath.d, props.shape.d], {
    mixer: (a, b) => interpolate(a, b),
  });
  useEffect(() => {
    animate(progress, indexOfPath, {
      duration: 0.5,
      ease: "easeInOut",
      delay: 0.4,
      onComplete: () => {
        if (indexOfPath === 1) {
          setIndexOfPath(0);
          progress.set(0);
        } else {
          setIndexOfPath(indexOfPath + 1);
        }
      },
    });
    // const interpolator = interpolate(defaultPath.d, props.shape.d);
    // setTimeout(() => {
    //   interpolator(0.1); // returns an SVG triangle path string
    //   let targetPath = interpolator(0.2);
    //   path.current.setAttribute("d", targetPath);
    //   targetPath = interpolator(0.5);
    //   path.current.setAttribute("d", targetPath);
    //   targetPath = interpolator(1);
    //   path.current.setAttribute("d", targetPath);
    //   path.current.setAttribute("style", props.shape.style);
    //   path.current.setAttribute("fill", props.shape.fill);
    //   path.current.setAttribute("transform", "");
    // }, 1000);
  }, [indexOfPath]);

  return <motion.path d={path} />;
};

export default SVGMorph;
