import "./Header.css";
import logo from "../../images/pngimg.com - amazon_PNG11.png";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { ArticleState } from "../../type";
import { auth } from "../../firebase";
import { signOut } from "firebase/auth";
import { RootState } from "../../redux/store";


const Header = () => {
  const products = useSelector((state: ArticleState) => state.articles);
  const currentUser = useSelector((state: RootState) => state.user.currentUser);
  console.log(products.length);
  console.log("The user is :",currentUser," We are in Header.tsx")

  const handleAuthentication=()=>{
    if(currentUser){
      signOut(auth).then(()=>console.log('Sign out was successful'))

    }
  }

  return (
    <div className="header">
      {/* logo */}
      <Link to="/">
        <img src={logo} alt="" className="header__logo" />
      </Link>

      {/* search bar */}
      <div className="header__search">
        <input type="text" className="header__searchIn" />
        {/* search logo */}
        <SearchIcon className="header__searchIcon" />
      </div>

      {/* children */}
      <div className="header__nav">
        <Link to={currentUser?'/':'/login'}>
          <div onClick={handleAuthentication} className="header__option">
            <span className="header__lineOne">Hello Guest</span>
            <span className="header__lineTwo">{currentUser?'Sign Out':'Sign In'}</span>
          </div>
        </Link>

        <div className="header__option">
          <span className="header__lineOne">Returns</span>
          <span className="header__lineTwo">& Orders</span>
        </div>

        <div className="header__option">
          <span className="header__lineOne">Your</span>
          <span className="header__lineTwo">Prime</span>
        </div>

        <Link to="/checkout">
          <div className="header__optionBasket">
            <ShoppingBasketIcon />
            <span className="header__lineTwo header__basketCount">
              {products.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
