import tw, { styled, css } from "twin.macro";
import { ENEMY_HEIGHT, ENEMY_WIDTH } from "../../../utils/CONSTANTS";
import useEnemy from "./useEnemy";

export default function Enemy() {
  const enemyRef = useEnemy();

  return <StyledEnemy ref={enemyRef} />;
}

const StyledEnemy = styled.div(() => [
  tw`bg-red-500 absolute`,
  css`
    width: ${ENEMY_WIDTH}px;
    height: ${ENEMY_HEIGHT}px;
    margin-top: ${-ENEMY_HEIGHT}px;
  `,
]);
