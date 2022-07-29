import { useNavigate } from "react-router-dom";
import { useCart } from "../../hooks/useCart";
import { AddressForm } from "./AddressForm";
import { Cart } from "./Cart";
import { Payment } from "./Payment";
import { useFormik } from 'formik'
import * as Yup from 'yup';

import { useContext, useState } from "react";
import { FormContext, FormValues, PaymentType } from "../../contexts/formContext";

import * as S from './styles'

const initialValues: FormValues = {
  cep: '',
  street: '',
  neighborhood: '',
  number: '',
  complement: '',
  city: '',
  state: '',
  payment: "money",
}

const formSchema = Yup.object().shape({
  cep: Yup.string()
    .required('CEP é obrigatório')
    .min(8, 'CEP inválido. Número mínimo de 8 dígitos')
    .max(8, 'CEP inválido. Número máximo de 8 dígitos'),
  street: Yup.string().required('Rua é obrigatório'),
  neighborhood: Yup.string().required('Bairro é obrigatório'),
  number: Yup.string().required('Número é obrigatório'),
  complement: Yup.string(),
  city: Yup.string().required('Cidade é obrigatório'),
  state: Yup.string().required('Estado é obrigatório'),
  payment: Yup.string().required('Selecione um método de pagamento'),
})

export function Checkout() {
  let navigate = useNavigate();
  const { cartItens, mapIdToAmount, clearCart } = useCart()
  const { saveFormData } = useContext(FormContext)

  const [selectedPayment, setSelectedPayment] = useState<string[]>([])

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema: formSchema,
  })

  function handleSelectPayment(id: string) {
    const alreadySelected = selectedPayment.findIndex((payment) => payment === id);

    if (alreadySelected >= 0) {
      const filteredItems = selectedPayment.filter((payment) => payment !== id);
      setSelectedPayment(filteredItems);
    } else {
      setSelectedPayment([id]);
    }
  }

  function onSubmit(values: FormValues) {

    const formData = {
      ...values,
      payment: selectedPayment[0] as PaymentType,
      products: mapIdToAmount
    }

    // Simulate a request to the server
    setTimeout(() => {
      saveFormData(formData);

      formik.setSubmitting(false);

      clearCart();

      navigate("/order-success", { replace: true });
    }, 1000);
  }

  return (
    <S.CheckoutContainer>
      <S.FormGroup>
        <h2>Complete seu pedido</h2>
        <AddressForm formik={formik} />
        <Payment
          selectedItems={selectedPayment}
          handleSelectPayment={handleSelectPayment}
          isError={!!formik.errors.payment}
          errorMessage={formik.errors.payment}
        />
      </S.FormGroup>
      <S.CartGroup>
        <h2>Cafés selecionados</h2>
        <Cart
          isSubmitting={formik.isSubmitting}
          onSubmit={formik.handleSubmit}
          itens={cartItens}
        />
      </S.CartGroup>
    </S.CheckoutContainer>
  )
}