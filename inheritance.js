class parent{
    constructor(){
        this.fatherName = "Sfsgkh";
    }
}
class child extends parent{
    constructor(name){
        super();
        this.name = name;
    }
}
const baby  = new child("Android");
const baby2 = new child("Tom")
console.log(baby);
console.log(baby2);