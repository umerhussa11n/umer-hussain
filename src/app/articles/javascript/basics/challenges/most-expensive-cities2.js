// find most expensive cities function 


const findMostExpensiveCities = (cities, n) => {
    return [...cities].sort((a, b) => {
        return  b.col - a.col
    }).slice(0,n)
}

const arr = [{ name: "l", col: 2}, {name: "ny", col: 3}, {name:"js", col: 4}]
console.log(findMostExpensiveCities(arr, 1))