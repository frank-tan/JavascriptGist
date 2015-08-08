var CarModule = (function () {
    "use strict";
    // variable private to the module
    var privateVar = "private",
        privateFunc;

    // function private to the module
    privateFunc = function () {
        console.log('I am a private function');
    };

    // Constructor
    function Car(brand, year) {
        this.brand = brand;
        this.year = year;
        var constructorVariable = "constructor variable";

        this.accessConstructorVarThis = function () {
            console.log(constructorVariable);
        };
        this.accessThisVariableFromThis = function () {
            console.log(this.brand);
        };
    }

    // functions defined on prototype
    Car.prototype.printCar = function () {
        console.log(this.brand + ' ' + this.year);
    };
    Car.prototype.printPrivateVar = function () {
        console.log(privateVar);
    };
    Car.prototype.callPrivateFunc = function () {
        privateFunc();
    };
    Car.prototype.callPrototypeFunc = function () {
        this.printCar();
    };
    Car.prototype.accessConstructorVarProto = function () {
        console.log(constructorVariable);
    };

    return Car;
}());

var myCar = new CarModule('Toyota', '2014');

myCar.accessThisVariableFromThis();

//This is OK because brand is defined on this
console.log(myCar.brand);

//This will output 'undefined'
console.log(myCar.privateVar);

//This is fine as accessConstructorVarThis is defined on 'this'
myCar.accessConstructorVarThis();

//This will not work as prototype does not have access to 
//private variable defined within constructor
//myCar.accessConstructorVarProto();

//This will be fine
myCar.printCar();

//This will be fine
myCar.printPrivateVar();

//This will be fine
myCar.callPrivateFunc();

//This will be fine
myCar.callPrototypeFunc();