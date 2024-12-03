import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import Username from "../features/user/Username";
import Button from "./Button";
import { useDispatch } from "react-redux";
import { toggleTheme } from "../features/theme/themeSlice";

const Header = () => {
  const dispatch = useDispatch();
  return (
    <header className="bg-yellow-400 px-4 py-3 sm:px-6 uppercase border-b border-stone-300 flex items-center justify-around">
      <Link to="/" className="tracking-widest">
        Fast React Pizza Co.
      </Link>
      <SearchOrder />
      <Username />
      <Button type="primary" onClick={() => dispatch(toggleTheme())}>
        Theme
      </Button>
    </header>
  );
};

export default Header;
