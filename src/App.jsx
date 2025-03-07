import Player from "./components/Player"
import GameBoard from "./components/GameBoard"
import {useState} from 'react'
function App() {
  const [gameTurns, setGameTurns]=useState([]);
  const [activePlayer,setActivePlayer]=useState('X');
  function handleSelectSquare(){
    setActivePlayer((curActivePlayer)=>curActivePlayer === 'X' ? 'O' : 'X');
    setGameTurns(prevTurns=>{
      let currentPlayer='X';
      if(prevTurns.length>0 && prevTurns[0].player ==='x'){
        currentPlayer='O'
      }
      const updatedTurns = [
        {square:{row:rowIndex,col:colIndex},player:currentPlayer},
        ...prevTurns];

        return updatedTurns;
    })
  }

  return (
      <main>
        <div id="game-container">
          <ol id="players" className='highlight-player'>
            <Player initialname="player-1" symbol="X" isActive={activePlayer === 'X'}/>
            <Player initialname="player-2" symbol="O" isActive={activePlayer === 'O'}/>
          </ol>
          <GameBoard onSelectSquare={handleSelectSquare} activePlayerSymbol={activePlayer}/>
        </div>
      </main>
      )
}

export default App
