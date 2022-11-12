import tw, { styled, css } from "twin.macro";
import useGame from "../logic/useGame";
import Picture from "../../assets/game.png";

export default function Game() {
  const { playerRef, gameViewRef, enemyRef } = useGame();

  return (
    <GameView ref={gameViewRef} img={Picture}>
      <Enemy ref={enemyRef} />
      <Player ref={playerRef} />
    </GameView>
  );
}

const GameView = styled.div(({ img }) => [
  tw`bg-blue-200 m-auto h-[45rem] w-[32rem] relative overflow-hidden`,
  css`
    background-image: url(${img});
    background-position: center;
  `,
]);
const Player = tw.div`h-32 w-16 bg-green-500 absolute bottom-0`;
const Enemy = tw.div`h-28 w-12 bg-red-500 absolute mt-[-112px]`;
