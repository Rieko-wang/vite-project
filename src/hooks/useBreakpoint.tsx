import React, { useEffect, useState } from "react";
import ResponsiveObserve, { ScreenMap } from "@/utils/responsiveObserve";

function useBreakpoint(): ScreenMap {
  const [screens, setScreens] = useState<ScreenMap>({});

  useEffect(() => {
    const token = ResponsiveObserve.subscribe((supportScreens: any): void => {
      setScreens(supportScreens);
    });

    return () => ResponsiveObserve.unsubscribe(token);
  }, []);

  return screens;
}

export default useBreakpoint;
