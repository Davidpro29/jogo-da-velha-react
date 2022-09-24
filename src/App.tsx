import * as C from './App.styles';

import { useEffect, useState } from 'react';

import Logo from './assets/devmemory_logo.png'
import RestartIcon from './svgs/restart.svg'
import { Button } from './components/Button';
import { InfoItem } from './components/InfoItem';


const App = () =>{
  const [playing, setPlaying] = useState<boolean>(false)
  const [timeElapsed, setTimeElapsed] = useState<number>(0)
  const [moveCount, setMoveCount] = useState<number>(0)

  useEffect(() => resetGrid(), [])

  const resetGrid = () =>{

  }

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

        <Button label='Reiniciar' icon={RestartIcon} onClick={resetGrid} />

      </C.Info>
      <C.GridArea>
        <C.Grid>

        </C.Grid>
      </C.GridArea>
    </C.Container>
  )
}

export default App;