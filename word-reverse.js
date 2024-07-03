
function reverseWords(str){
    const words= str.split(' ')
    const result = [];
    // [ 'i', 'am', 'a', 'good', 'girl' ]
    for(let i=words.length-1; i >= 0; i--){
        const element = words[i]
        result.push(element)
    }
    console.log(result)
}

const myString = 'i am a good girl'
reverseWords(myString)
