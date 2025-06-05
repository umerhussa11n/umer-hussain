// most object oriented languages have this..
// function that can be deocrated 

function Injectable(): ClassDecorator {
    return function (target: Function) {};
}

@Injectable()
class AnotherService {
    name: string;
    constructor() {
        this.name = 'someRandomService';
    }
}