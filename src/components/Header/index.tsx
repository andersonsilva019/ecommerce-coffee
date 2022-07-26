import { MapPin, ShoppingCart } from 'phosphor-react'
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg';

import * as S from './styles'

export function Header() {

  const total = 0;

  return (
    <S.HeaderContainer>
      <Link to="/">
        <img src={logo} alt="" />
      </Link>

      <S.RightSide>
        <S.Locale>
          <MapPin size={24} weight="fill" color="#8047F8" />
          Solonópole, CE
        </S.Locale>
        <Link to="/checkout">
          <S.Cart>
            {total > 0 && <S.TotalCart>{total}</S.TotalCart>}
            <ShoppingCart size={24} weight="fill" color="#C47F17" />
          </S.Cart>
        </Link>
      </S.RightSide>
    </S.HeaderContainer>
  )
}