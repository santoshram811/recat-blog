import { useTheme } from "./ThemeContext";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      style={{
        // borderRadius: "50%", // Makes it round
        // width: "40px", // Circle width
        // height: "40px", // Circle height
        border: "solid white", // No border
        cursor: "pointer", // Pointer on hover
        display: "flex", // Center text/icon
        alignItems: "center",
        justifyContent: "center",
        fontSize: "14px", // Text size
        fontWeight: "bold",
        backgroundColor: theme === "light" ? "#333" : "#fff",
        color: theme === "light" ? "#fff" : "#000",
      }}
    >
      {theme === "light" ? "Dark" : "Light"}
    </button>
  );
};

export default ThemeToggle;
