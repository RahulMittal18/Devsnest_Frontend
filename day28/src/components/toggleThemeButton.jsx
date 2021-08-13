import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { toggleTheme } from "../actions";

const ToggleThemeButton = () => {
  const isDarkMode = useSelector((state) => state.isDarkMode);
  const dispatch = useDispatch();
  return (
    <div className="mode">
      <button
        className={isDarkMode ? "btn btn-dark" : "btn btn-light"}
        onClick={() => {
          dispatch(toggleTheme());
        }}
      >
        {isDarkMode ? "Dark" : "Light"}
      </button>
    </div>
  );
};

export default ToggleThemeButton;
