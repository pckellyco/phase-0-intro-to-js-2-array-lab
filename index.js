// Write your solution here!
let cats = ['Milo', 'Otis', 'Garfield']

// 1) appends a cat to the end of the cats array

function destructivelyAppendCat(name) {
    return cats.push(name)
}

// 2) prepends a cat to the beginning of the cats array
function destructivelyPrependCat(name) {
    return cats.unshift(name)
}

// 3) removes the last cat from the cats array
function destructivelyRemoveLastCat() {
    return cats.pop()
}

// 4) removes the first cat from the cats array       
function destructivelyRemoveFirstCat() {
    return cats.shift()
}

// 5) appends a cat to the cats array and returns a new array, leaving the cats array unchanged
function appendCat(name) {
    return [...cats, name]
}

// 6) prepends a cat to the cats array and returns a new array, leaving the cats array unchanged
function prependCat(name) {
    return [name, ...cats]
}

// 7) removes the last cat in the cats array and returns a new array, leaving the cats array unchanged
function removeLastCat() {
    return cats.slice(0, -1)
}
      
// 8) removes the first cat from the cats array and returns a new array, leaving the cats array unchanged
function removeFirstCat() {
    return cats.slice(1)
}
