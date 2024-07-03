const lyrics = 'tumi bondhu kala pakhi ami jeno ki, boshonto kale tomay dekhte parini'

const doesExist = lyrics.includes('pakhi')
// console.log(doesExist)

const doesExist2 = lyrics.includes('Pakhi')
// console.log(doesExist2)

const search = 'Pakhi'
const doesExistOneLine = lyrics.toLowerCase().includes(search.toLowerCase())
// console.log(doesExistOneLine)


// ------------------------------------------------------
// indexOf
console.log(lyrics.indexOf('kala'))

if( 'sada' !==-1){
    console.log('doesExist')
}
else{
    console.log('does not Exist')
}
