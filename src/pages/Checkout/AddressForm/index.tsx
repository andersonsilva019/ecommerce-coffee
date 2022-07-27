import { MapPinLine } from "phosphor-react";
import { FormikProps } from 'formik'
import { FormValues } from "../../../contexts/formContext";


import * as S from "./styles";

type AddressFormProps = {
  formik: FormikProps<FormValues>
}

export function AddressForm({ formik }: AddressFormProps) {
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
        <S.CepInput
          name="cep"
          placeholder="CEP"
          value={formik.values.cep}
          onChange={formik.handleChange}
          isError={!!formik.errors.cep}
          title={formik.errors.cep}
        />
        <S.StreetInput
          name="street"
          placeholder="Rua"
          value={formik.values.street}
          onChange={formik.handleChange}
          isError={!!formik.errors.street}
          title={formik.errors.street}
        />
        <S.GroupOne
          isErrorNumberInput={!!formik.errors.number}
          isErrorComplementInput={!!formik.errors.complement}
        >
          <input
            name="number"
            type="text"
            placeholder="Número"
            value={formik.values.number}
            onChange={formik.handleChange}
            title={formik.errors.number}
          />
          <input
            name="complement"
            type="text"
            placeholder="Complemento"
            value={formik.values.complement}
            onChange={formik.handleChange}
            title={formik.errors.complement}
          />
        </S.GroupOne>
        <S.GroupTwo
          isErrorNeighborhoodInput={!!formik.errors.neighborhood}
          isErrorCityInput={!!formik.errors.city}
          isErrorStateInput={!!formik.errors.state}
        >
          <input
            name="neighborhood"
            type="text"
            placeholder="Bairro"
            value={formik.values.neighborhood}
            onChange={formik.handleChange}
            title={formik.errors.neighborhood}
          />
          <input
            name="city"
            type="text"
            placeholder="Cidade"
            value={formik.values.city}
            onChange={formik.handleChange}
            title={formik.errors.city}
          />
          <input
            name="state"
            type="text"
            placeholder="UF"
            value={formik.values.state}
            onChange={formik.handleChange}
            title={formik.errors.state}
          />
        </S.GroupTwo>
      </S.FormContent>
    </S.AddressFormContainer>
  )
}