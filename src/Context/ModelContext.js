import { createContext, useState } from "react";

const ModelContext = createContext();
const ModelState = (props) => {
  const [show, setShow] = useState(false);
  const [mode, setMode] = useState("winner");
  const showModel = () => setShow(true);
  const hideModel = () => setShow(false);

  return (
    <ModelContext.Provider
      value={{
        show,
        modelMode: mode,
        showModel,
        hideModel,
        setModelMode: setMode,
      }}
    >
      {props.children}
    </ModelContext.Provider>
  );
};

export { ModelContext, ModelState };
