import { type } from "os";
import { useEffect, useState } from "react";

interface IViewport {
  height: number;
  width: number;
};

//: use this custom hook to get the viewport size of the screen in order to
//: execute some code base on screen size
const useViewport = (): IViewport => {
  const [viewportSize, setViewportSize] = useState<IViewport>({
    height: 0, width: 0
  });

  useEffect(() => {
    if (window) {
      const refreshViewportSize = (): void => setViewportSize({
        height: window.innerHeight, width: window.innerWidth
      });

      refreshViewportSize();
      window.addEventListener('resize', refreshViewportSize);

      return () => window.removeEventListener('resize', refreshViewportSize);
    }
  }, []);

  return viewportSize;
};

export default useViewport;
