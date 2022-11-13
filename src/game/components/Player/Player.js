import tw, { styled, css } from "twin.macro";
import { PLAYER_HEIGHT, PLAYER_WIDTH } from "../../../utils/CONSTANTS";
import usePlayer from "./usePlayer";

export default function Player() {
  const playerRef = usePlayer();

  return <StyledPlayer ref={playerRef} />;
}

const StyledPlayer = styled.div(() => [
  tw`bg-green-500 absolute bottom-0`,
  css`
    width: ${PLAYER_WIDTH}px;
    height: ${PLAYER_HEIGHT}px;
  `,
]);
