import useGame from "../logic/useGame";
import tw from "twin.macro";
import { GAME } from "../../utils/types";

export default function Start() {
  const { setView } = useGame();

  return <StartButton onClick={() => setView(GAME)}>Start</StartButton>;
}

const StartButton = tw.button``;
