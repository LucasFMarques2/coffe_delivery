import { HeaderContainer, InfoContainer } from './style'

import coffLogo from '../../assets/coffLogo.svg'
import locale from '../../assets/locale.svg'
import cart from '../../assets/card.svg'



export function Header(){
    return(
        <HeaderContainer>
           <img src={coffLogo} alt="Logo de um copo de cafe" />
           <InfoContainer>
            <img src={locale} alt="Localização atual" />
            <img src={cart} alt="Carrinho de compras" />
           </InfoContainer>
        </HeaderContainer>
    )
}