import { GlobalContext } from "../../context";
import { useContext } from "react";

function ContextTextComponent() {
  const { theme } = useContext(GlobalContext);

  return (
    <h1
      style={{
        fontSize: theme === "light" ? "50px" : "100px",
        backgroundColor: theme === "light" ? "#fff" : "#000",
        color: theme === "light" ? "blue" : "yellow",
      }}
    >
      CHANGING OF TEXT
    </h1>
  );
}

export default ContextTextComponent;
