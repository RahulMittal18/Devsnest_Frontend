import Form from "./form";
import { useDispatch, useSelector } from "react-redux";
import ToggleThemeButton from "./toggleThemeButton";
import SearchIcon from "@material-ui/icons/Search";
import { openForm } from "../actions";

const Navbar = () => {
  const isClicked = useSelector((state) => state.isClicked);
  console.log(isClicked);
  const isDarkMode = useSelector((state) => state.isDarkMode);
  const dispatch = useDispatch();
  return (
    <div
      className={
        isDarkMode
          ? "offset-md-3 offset-lg-3 col-12 col-md-6 col-lg-6 navbar dark p-0"
          : "offset-md-3 offset-lg-3 col-12 col-md-6 col-lg-6 navbar p-0"
      }
    >
      {isClicked ? (
        <Form />
      ) : (
        <div className={isDarkMode ? "header dark" : "header"}>
          <div className="heading">
            <h2>Weather</h2>
          </div>

          <div className="btns-div">
            <ToggleThemeButton />

            <div className={isDarkMode ? "search dark" : "search"}>
              <button onClick={dispatch(openForm())}>
                <SearchIcon style={{ fontSize: 35 }} />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
