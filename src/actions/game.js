export const GUESS_LETTER = 'GUESS_LETTER'
export const SET_WORD = 'SET_WORD'
export const RESTART_GAME = 'RESTART_GAME'


export const makeAGuess = guess => {
  return {
    type: GUESS_LETTER,
    payload: guess
  }
}

export const restartGame = () => {
  return {
    type: RESTART_GAME
  }
}
