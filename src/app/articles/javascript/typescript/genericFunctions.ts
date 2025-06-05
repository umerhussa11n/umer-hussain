

function firstElement<T>(arr: T[]) : T|undefined {
    return arr[0];
}


console.log(firstElement([1,2,3]));
console.log(firstElement(["a","b","c"]));
console.log(firstElement([true,false,false]));

