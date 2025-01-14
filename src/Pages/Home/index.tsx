import coffeheader from '../../assets/headerImg.svg'
import { ShoppingCart } from 'phosphor-react'
import { HomeContainer } from './style'

export function Home(){
    return (
        <HomeContainer>
            <h1>Encontre o café perfeito para qualquer hora do diaEncontre o café perfeito para qualquer hora do dia</h1>
            <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>
            <p><ShoppingCart size={20} /> Compra simples e segura</p>
            <p><ShoppingCart size={20} /> Compra simples e segura</p>
            <p><ShoppingCart size={20} /> Compra simples e segura</p>
            <p><ShoppingCart size={20} /> Compra simples e segura</p>

            <img src={coffeheader} alt="Imagem de um copo de café" />

        </HomeContainer>
    )
}