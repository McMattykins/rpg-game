const getDiceRollArray = (diceCount) => 
  new Array(diceCount).fill(0).map(() => 
    Math.ceil(Math.random() * 6))

const getPercentage = (remainingHealth, maximumHealth) => (100 * remainingHealth) / maximumHealth

const getDicePlaceholderHtml = (diceCount) => 
  new Array(diceCount).fill(0).map(() => 
    `<div class="placeholder-dice"></div>`
    ).join("")

export { getDiceRollArray, getPercentage, getDicePlaceholderHtml }