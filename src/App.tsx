import * as C from './App.styles';
import Logo from './assets/devmemory_logo.png'

import { InfoItem } from './components/InfoItem';

const App = () =>{
  return (
    <C.Container>
      <C.Info>
        <C.LogoLink>
          <img src={Logo} width="200" alt="" />
        </C.LogoLink>

        <C.InfoArea>
          <InfoItem label="Tempo" value="00:00" />
          <InfoItem label="Movimentos" value="0" />
        </C.InfoArea>

        <button>Reiniciar</button>

      </C.Info>
      <C.GridArea>
        area de grid
      </C.GridArea>
    </C.Container>
  )
}

export default App;