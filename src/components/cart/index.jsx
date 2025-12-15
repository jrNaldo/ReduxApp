// Styles
import CartItem from '../cart-item/index'
import { useSelector } from "react-redux";
import * as Styles from "./styles";
import { selectProductsTotalPrice } from '../../redux/Card/cartSelectors';

const Cart = ({ isVisible, setIsVisible }) => {
  const handleEscapeAreaClick = () => setIsVisible(false);
  const {products} = useSelector((rootReducer) => rootReducer.CardReducer)
  const productsTotalPrice = useSelector(selectProductsTotalPrice)

  return (
    <Styles.CartContainer isVisible={isVisible}>
      <Styles.CartEscapeArea onClick={handleEscapeAreaClick} />
      <Styles.CartContent>
        <Styles.CartTitle>Seu Carrinho</Styles.CartTitle>
        {products.map(product => <CartItem product={product}/>)}
        <Styles.CartTotal>R${productsTotalPrice},00</Styles.CartTotal>
      </Styles.CartContent>
    </Styles.CartContainer>
  );
};

export default Cart;
