import tw from "twin.macro";
import useGame from "./game/logic/useGame";
import End from "./game/views/End";
import Game from "./game/views/Game";
import Start from "./game/views/Start";
import { END, GAME, START } from "./utils/types";

function App() {
  // Pull the state out of the useGame function to determine whic
  const { view } = useGame();

  return (
    <>
      {/* Controls which view is showing */}
      {view === START ? (
        <Start />
      ) : view === GAME ? (
        <Game />
      ) : view === END ? (
        <End />
      ) : (
        "ERROR in APP"
      )}
    </>
  );
}

export default App;

const Body = tw.div``;
