// Stack Is A Conceptual data type in Javascript.. 
// Stack Is Last in first out data type bit like stack of plates.. 
// Stack Has pop and push methods.. 
// Pop Removes the last item in the Array
// Push pushes item on top of others in the array..


class Stack {
    constructor(Arr) {
        this.array = Arr 
    }

    printStack() {
        console.log(`current stack print:` +this.array)
        return this.array
    }

    // remove last item.. 
    // in the array last item will be item at array length - 1 index.. 
    pop() {
        const popedElement = this.array.pop();
        console.log(`array pop called, poped element:` + popedElement)
        return popedElement
    }

    push(e) {
        console.log(`array push called:` + this.array.push(e))
        return this.array.push(e)
    }
}


// setup of stack and initialziation
const FamilyNames = new Stack(['Umer', 'Nial', 'Mashal']);
FamilyNames.printStack();

// pop 
FamilyNames.pop();//
FamilyNames.printStack();

FamilyNames.push('Mashal')
FamilyNames.printStack()


