import { createContext, useState } from "react";
import { GAME, START } from "../../utils/types";
// * Anything passed into this component will be given the context

// Create Context to store the game state
export const GameContext = createContext();

export default function GameState({ children }) {
  // Set a state to store data that can be accessed in context
  const viewState = useState(GAME);

  return (
    <GameContext.Provider value={{ viewState }}>
      {children}
    </GameContext.Provider>
  );
}
