import React from "react";

import Logo from "./components/Logo";
import Photo from "./components/Photo";

const Main = () => {
  return (
    <>
      <Logo />
      <Photo count="10" file={require("../assets/cat.png")} />
      <Photo count="20" file={require("../assets/cat2.png")} />
    </>
  );
};

export default Main;
