const lyrics = 'tumi bondhu kala pakhi ami jeno ki. boshonto kale tomay dekhte parini'

// khali jayga gula jegula alada korse
const parts = lyrics.split(' ')
console.log(parts)

// . er age pore alada korse
const part2 = lyrics.split('.')
console.log(part2)

// every letter alada korbe
const part3 = lyrics.split('')
console.log(part3)

// fix kore dewa jay kothay shuru hiye koi sesh hobe, starting er index add hobe but ending er ta hobe na
const partial = lyrics.slice(5,9)
console.log(partial)

const partial2 = lyrics.substring(5,9)
console.log(partial2)


const lines = [
    'tumi bondhu kala pakhi ami jeno ki',
    ' boshonto kale tomay dekhte parini'
  ]


// join korle eklsathe hoy and chaile jei punctuation diye joined hobe oita fix korte pari
  const newSong = lines.join(';')
  console.log(newSong)