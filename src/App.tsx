import {useState, useEffect} from 'react';
import "./App.css";
import BoardComponent from './components/BoardComponent';
import LostFigures from './components/LostFigures';
import Timer from './components/Timer';
import { Board } from './models/Board';
import { Colors } from './models/Colors';
import { Player } from './models/Player';

//доделать логику короля, по истечению времени какой игрок проиграл. условия для шаха и мата. В методе кэнмув. Ходы записывать и сделать вперед назад.


const App = () => {
  const [board, setBoard] = useState(new Board())
  const [whitePlayer, setWhitePlayer] = useState(new Player(Colors.WHITE))
  const [blackPlayer, setBlackPlayer] = useState(new Player(Colors.BLACK))
  const [currentPlayer, setCurrentPlayer] = useState<Player | null>(null);

  useEffect(() => {
    restart()
  },[])

  function restart () {
    const newBoard = new Board();
    newBoard.initCells()
    newBoard.addFigures() 
    setBoard(newBoard)
    setCurrentPlayer(whitePlayer);
  }  

  function swapPlayer() {
    setCurrentPlayer(currentPlayer?.color === Colors.WHITE ? blackPlayer : whitePlayer)
  }

  return (
    <div className="app">
      <Timer
        restart={restart}
        currentPlayer={currentPlayer}
      />
      <BoardComponent
        board={board}
        setBoard={setBoard}
        currentPlayer={currentPlayer}
        swapPlayer={swapPlayer}
      />
      <div>
        <LostFigures 
          title={"Черные фигуры"} 
          figures={board.lostBlackfigures}
        />
         <LostFigures 
          title={"Белые фигуры"} 
          figures={board.lostWhitefigures}
        />
      </div>
    </div>
  );
};

export default App;
