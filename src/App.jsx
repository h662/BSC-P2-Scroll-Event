import { useEffect } from "react";

import A from "./components/A";
import B from "./components/B";
import C from "./components/C";
import D from "./components/D";
import Header from "./components/Header";

const App = () => {
  const scrollEvent = () => {
    console.log(window.scrollY);
  };

  useEffect(() => {
    const watchScroll = () => window.addEventListener("scroll", scrollEvent);

    watchScroll();

    return () => window.removeEventListener("scroll", scrollEvent);
  }, []);

  return (
    <>
      <Header />
      <A />
      <B />
      <C />
      <D />
    </>
  );
};

export default App;
