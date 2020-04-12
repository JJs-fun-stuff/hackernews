class Developer{
    constructor(firstname, lastname){
        this.firstname = firstname;
        this.lastname = lastname;
    }
    getName(){
        return this.firstname + ' ' + this.lastname;
    }
}

const robin = new Developer('JJ', 'god');
console.log(robin.getName())