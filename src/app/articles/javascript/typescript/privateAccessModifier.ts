// enforces Interface Segregation from Solid Principals
// No Native classes concept in javascript so typescript is trying to add all that
class Service {
    private config: {}
    constructor(name: string) {
        this.config = { 
            id: 1,
            name: name
        }
    }
}

const myService = new Service("James");
//see below wont work and throw error: Property 'config' is private and only accessible within class 'Service'.ts(2341)
// this is becasue we have a private 
//let privateService = myService.config