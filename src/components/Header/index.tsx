import { MapPin, ShoppingCart } from 'phosphor-react'
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import { useCart } from '../../hooks/useCart';

import * as S from './styles'

export function Header() {

  const { cartItens } = useCart()

  return (
    <S.HeaderContainer>
      <Link to="/">
        <img src={logo} alt="logo" />
      </Link>

      <S.RightSide>
        <S.Locale>
          <MapPin size={24} weight="fill" color="#8047F8" />
          Solonópole, CE
        </S.Locale>
        <Link to="/checkout">
          <S.Cart>
            {cartItens.length > 0 && <S.TotalCart data-testid="totalInCart">{cartItens.length}</S.TotalCart>}
            <ShoppingCart size={24} weight="fill" color="#C47F17" />
          </S.Cart>
        </Link>
      </S.RightSide>
    </S.HeaderContainer>
  )
}