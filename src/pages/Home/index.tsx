import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";
import landingPageImage from '../../assets/landing-page-image.svg'
import { CoffeeCard } from "../../components/CoffeeCard";

import * as S from './styles'

type BenefitsEcommerceCoffeeType = {
  [key: string]: {
    icon: React.ReactNode,
    bgColor: 'yellow-900' | 'black-500' | 'yellow-500' | 'purple-500'
  }
}

const benefitsEcommerceCoffee: BenefitsEcommerceCoffeeType = {
  'Compra simples e segura': {
    icon: <ShoppingCart size={18} color="#FFFFFF" weight="fill" />,
    bgColor: 'yellow-900'
  },
  'Embalagem mantém o café intacto': {
    icon: <Package size={18} color="#FFFFFF" weight="fill" />,
    bgColor: 'black-500'
  },
  'Entrega rápida e rastreada': {
    icon: <Timer size={18} color="#FFFFFF" weight="fill" />,
    bgColor: 'yellow-500'
  },
  'O café chega fresquinho até você': {
    icon: <Coffee size={18} color="#FFFFFF" weight="fill" />,
    bgColor: 'purple-500'
  }
}

export function Home() {
  return (
    <S.HomeContainer>
      <S.BrandingSection>
        <S.HomeContentLeft>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>
          <S.BenefitsContainer>
            {Object.entries(benefitsEcommerceCoffee).map(([title, value]) => (
              <S.Benefit key={title}>
                <S.IconBox bgColor={value.bgColor}>{value.icon}</S.IconBox>
                <span>{title}</span>
              </S.Benefit>
            ))}
          </S.BenefitsContainer>
        </S.HomeContentLeft>
        <img src={landingPageImage} alt="" />
      </S.BrandingSection>
      <S.CoffeesSection>
        <h2>Nossos cafés</h2>
        <S.Coffees>
          <CoffeeCard
            name="Expresso Tradicional"
            description="O tradicional café feito com água quente e grãos moídos"
            price="R$ 5,00"
            flavors={['Tradicional']}
            imgUrl="https://firebasestorage.googleapis.com/v0/b/my-blog-a74d5.appspot.com/o/coffee-images%2FImage-1.svg?alt=media&token=5bb1a6b3-4ffa-46d5-bd52-8e2038a25fa9"
          />
          <CoffeeCard
            name="Expresso Tradicional"
            description="O tradicional café feito com água quente e grãos moídos"
            price="R$ 5,00"
            flavors={['Tradicional']}
            imgUrl="https://firebasestorage.googleapis.com/v0/b/my-blog-a74d5.appspot.com/o/coffee-images%2FImage-1.svg?alt=media&token=5bb1a6b3-4ffa-46d5-bd52-8e2038a25fa9"
          />
          <CoffeeCard
            name="Expresso Tradicional"
            description="O tradicional café feito com água quente e grãos moídos"
            price="R$ 5,00"
            flavors={['Tradicional']}
            imgUrl="https://firebasestorage.googleapis.com/v0/b/my-blog-a74d5.appspot.com/o/coffee-images%2FImage-1.svg?alt=media&token=5bb1a6b3-4ffa-46d5-bd52-8e2038a25fa9"
          />
          <CoffeeCard
            name="Expresso Tradicional"
            description="O tradicional café feito com água quente e grãos moídos"
            price="R$ 5,00"
            flavors={['Tradicional']}
            imgUrl="https://firebasestorage.googleapis.com/v0/b/my-blog-a74d5.appspot.com/o/coffee-images%2FImage-1.svg?alt=media&token=5bb1a6b3-4ffa-46d5-bd52-8e2038a25fa9"
          />
          <CoffeeCard
            name="Expresso Tradicional"
            description="O tradicional café feito com água quente e grãos moídos"
            price="R$ 5,00"
            flavors={['Tradicional']}
            imgUrl="https://firebasestorage.googleapis.com/v0/b/my-blog-a74d5.appspot.com/o/coffee-images%2FImage-1.svg?alt=media&token=5bb1a6b3-4ffa-46d5-bd52-8e2038a25fa9"
          />
          <CoffeeCard
            name="Expresso Tradicional"
            description="O tradicional café feito com água quente e grãos moídos"
            price="R$ 5,00"
            flavors={['Tradicional']}
            imgUrl="https://firebasestorage.googleapis.com/v0/b/my-blog-a74d5.appspot.com/o/coffee-images%2FImage-1.svg?alt=media&token=5bb1a6b3-4ffa-46d5-bd52-8e2038a25fa9"
          />
          <CoffeeCard
            name="Expresso Tradicional"
            description="O tradicional café feito com água quente e grãos moídos"
            price="R$ 5,00"
            flavors={['Tradicional']}
            imgUrl="https://firebasestorage.googleapis.com/v0/b/my-blog-a74d5.appspot.com/o/coffee-images%2FImage-1.svg?alt=media&token=5bb1a6b3-4ffa-46d5-bd52-8e2038a25fa9"
          />
        </S.Coffees>
      </S.CoffeesSection>
    </S.HomeContainer>
  )
}