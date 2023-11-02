import React from "react";
import counterStore from "./counter";

const storesContext = React.createContext({
  counterStore,
});

// 默认导出
export default storesContext;
