import { useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import UserActionTypes from "../../redux/User/action-types";

// Components
import Cart from "../cart/index";

// Styles
import * as Styles from "./styles";
import { loginUser, logoutUser } from "../../redux/User/actions";
import { selectProductsCount } from "../../redux/Card/cartSelectors";


function Header() {
  const [cartIsVisible, setCartIsVisible] = useState(false);
  const {currentUser} = useSelector(rootReducer => rootReducer.UserReducer)
  const {products} = useSelector(rootReducer => rootReducer.CardReducer)
  const dispatch = useDispatch()

  const productsCount = useSelector(selectProductsCount)
  
  console.log(currentUser)

  const handleCartClick = () => {
    setCartIsVisible(true);
  };

  const handleLoginClick = () => {
    dispatch(loginUser({name: 'Felipe', email: 'felipe@gmail.com'}))
  }

  const handleLogoutClick = () => {
    dispatch(logoutUser())
  }

  return (
    <Styles.Container>
      <Styles.Logo>Redux Shopping</Styles.Logo>
      <Styles.Buttons>
        {currentUser ? (
          <div onClick={handleLogoutClick}>Sair</div>):
          (<div onClick={handleLoginClick}>Login</div>)
        }
        <div onClick={handleCartClick}>Carrinho ({productsCount})</div>
      </Styles.Buttons>

      <Cart isVisible={cartIsVisible} setIsVisible={setCartIsVisible} />
    </Styles.Container>
  );
}

export default Header;