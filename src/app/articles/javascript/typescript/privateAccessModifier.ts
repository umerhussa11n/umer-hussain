// enforces Interface Segregation from Solid Principals
// No Native classes concept in javascript so typescript is trying to add all that
class Service {
    private config: null | object
    public publicConfiguration : null | object
    constructor(name: string) {
        this.publicConfiguration = {
            Name: "PublicName"
        }
        this.config = { 
            id: 1,
            name: name
        }
    }
}

const myService = new Service("James");
console.log(myService.publicConfiguration)
//see below wont work and throw error: Property 'config' is private and only accessible within class 'Service'.ts(2341)
// this is becasue we have a private 
//let privateService = myService.config