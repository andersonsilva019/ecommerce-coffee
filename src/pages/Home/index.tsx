import { useEffect, useState } from "react";
import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";
import landingPageImage from '../../assets/landing-page-image.svg'
import { CoffeeCard } from "../../components/CoffeeCard";
import { coffeeService } from "../../services/coffees";

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

type Coffee = {
  id: number
  name: string
  price: number
  description: string
  flavors: string[]
  image: string
  amount: number
}

export function Home() {

  const [coffees, setCoffees] = useState<Coffee[]>([]);

  useEffect(() => {
    async function fetchCoffees() {
      try {
        const data = await coffeeService.getCoffees()

        setCoffees(data.map(coffee => ({
          ...coffee,
          amount: 1
        })));

      } catch (error) {
        console.log(error);
      }
    }

    fetchCoffees();
  }, [])

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
          {coffees.map(coffee => (
            <CoffeeCard
              key={coffee.id}
              id={coffee.id}
              name={coffee.name}
              description={coffee.description}
              price={coffee.price}
              flavors={coffee.flavors}
              imgUrl={coffee.image}
              amount={coffee.amount}
            />
          ))}
        </S.Coffees>
      </S.CoffeesSection>
    </S.HomeContainer>
  )
}