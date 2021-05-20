const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = (word) => {
  return tutorials.map(line => {
    const firstLetter = line.split(' ');
    const firstLetterCap = 
      firstLetter.map( firstLetters => firstLetters.charAt(0).toUpperCase() + firstLetters.slice(1) )
    const response = firstLetterCap.join(' ')
    return response
  })
}

// const titleCased = (input) => {
//   return tutorials.map(line => {
//     const tokens = line.split(' ')
//     const capitalizedTokens = 
//     tokens.map( token => token.charAt(0).toUpperCase() + token.slice(1) )
//     const response = capitalizedTokens.join(' ')
//     return response
//   })
// }
