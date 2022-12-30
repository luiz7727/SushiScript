import { useEffect } from "react";


const useHandleWindowScroll = () => {

  (() => {

    useEffect(() => {

      document.body.style.overflowY = "hidden"

      return () => { document.body.style.overflowY = "auto" }

    }, []);

  })();

}

export default useHandleWindowScroll;