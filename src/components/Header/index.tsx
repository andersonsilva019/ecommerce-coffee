import { MapPin, ShoppingCart } from 'phosphor-react'
import logo from '../../assets/logo.svg';

import * as S from './styles'

export function Header() {
  return (
    <S.HeaderContainer>
      <img src={logo} alt="" />

      <S.RightSide>
        <S.Locale>
          <MapPin size={24} weight="fill" color="#8047F8" />
          Solonópole, CE
        </S.Locale>
        <S.Cart>
          <ShoppingCart size={24} weight="fill" color="#C47F17" />
        </S.Cart>
      </S.RightSide>
    </S.HeaderContainer>
  )
}