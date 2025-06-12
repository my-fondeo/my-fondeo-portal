import { useEffect, type PropsWithChildren } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default ({ children }: PropsWithChildren) => {
  useEffect(() => {
    AOS.init({
      mirror: true,
      offset: 150,
    });
  }, []);

  return <>{children}</>;
}
