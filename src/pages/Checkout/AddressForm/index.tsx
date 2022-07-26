import { MapPinLine } from "phosphor-react";

import * as S from "./styles";

export function AddressForm() {
  return (
    <S.AddressFormContainer>
      <S.FormHeader>
        <MapPinLine size={18} weight="regular" color="#C47F17" />
        <S.Info>
          <span>Endereço de entrega</span>
          <p>Informe o endereço onde deseja receber seu pedido</p>
        </S.Info>
      </S.FormHeader>
      <S.FormContent>
        <S.CEPInput placeholder="CEP" />
        <S.StreetInput placeholder="Rua" />
        <S.GroupOne>
          <input type="text" placeholder="Número" />
          <input type="text" placeholder="Complemento" />
        </S.GroupOne>
        <S.GroupTwo>
          <input type="text" placeholder="Bairro" />
          <input type="text" placeholder="Cidade" />
          <input type="text" placeholder="UF" />
        </S.GroupTwo>
      </S.FormContent>
    </S.AddressFormContainer>
  )
}