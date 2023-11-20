import { useEffect, useRef } from "react";

import A from "./components/A";
import B from "./components/B";
import C from "./components/C";
import D from "./components/D";
import Header from "./components/Header";

const App = () => {
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
