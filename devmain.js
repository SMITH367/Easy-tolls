/*
Easy tools, simple and usefull library
*/




/* Arrays tools*/

class CalcArray {
    //calculate operations and tolls for use with arrays.
    constructor() {}

    adition(array) {
        //Obtain the add of all elements of an array 
        let addArray = 0;
        for (let i in array) {
            addArray += array[i];
        }
        return addArray;
    }

    average(array) {
        //Obtain a average of an array.

        let average = 0;
        for (let i in array) {
            average += array[i];
        }
        return average / array.length;
    }

    maximunValue(array) {

        //Obtain maximun value of an array

        let maximun = 0;
        for (let i in array) {
            if (maximun < array[i]) {
                maximun = array[i];
            }
        }

        return maximun;
    }
    minimunValue(array) {

        //Obtain minimun value of an array

        let minimun = array[0]

        for (let i in array) {

            if (array[i] < minimun) {
                minimun = array[i];
            }
        }
        return minimun;
    }



    generateArray(numberof) {

        //Generating an array

        let array = [];
        if (numberof < 1000000) {
            let generator;
            console.log(numberof);
            for (let i = 0; i < numberof; i++) {

                generator = parseInt(Math.random() * 100);
                array.push(generator);
            }
            return array;
        }

    }
    arrayTObject(array) {

        //return an object with index = id of array and value is the argument of array

        let object = {};

        for (let i in array) {

            object[i] = array[i];

        }
        return object;
    }

}
class Areas {

    constructor() {
            this.area = true;
        }
        // Areas and perimeters

    circle(radio) {

        this.area = Math.PI * radio ** 2;
        return this.area;
    }
    square(side) {
        this.area = side ** 2
        return this.area;
    }
    triangule(base, height) {
        this.area = base * height / 2;
        return this.area;
    }
    rectangule(base, height) {
        this.area = base * height;
        return this.area;
    }
    rombo(mayorDiagonal, menorDiagonal) {
        this.area = mayorDiagonal * menorDiagonal / 2;
        return this.area;
    }
    trapecio(mayorBase, menorBase, height) {
        this.area = mayorBase + menorBase / 2 * height;
        return this.area;
    }

    sphere(radio) {

        this.area = 4 * Math.PI * radio ** 2;
        return this.area;

    }
    cube(side) {

        this.area = 6 * side ** 2;
        return this.area;
    }

    tetrahedron(edge) {

        this.area = 4 * (Math.sqrt(3) / 4 * edge ** 2);
        return this.area;

    }

}

class Conjunts {

    constructor() {
        this.unionc;
        this.intersectionc = [];
        this.diferencec = [];
        this.complementc = [];
        this.simetricDiferencec = []
    }
    union(conjunt1, conjunt2) {
        this.unionc = conjunt1.concat(conjunt2);
        return this.unionc;

    }
    intersection(conjunt1, conjunt2) {

        for (let i in conjunt1) {
            if (conjunt2.includes(conjunt1[i])) {
                this.intersectionc.push(conjunt1[i]);

            }
        }
        return this.intersectionc;
    }
    diference(conjunt1, conjunt2) {

        for (let i in conjunt1) {
            if (conjunt2.includes(conjunt1[i])) {} else {
                this.diferencec.push(conjunt1[i]);
            }
        }
        return this.diferencec;
    }
    simetricDiference(conjunt1, conjunt2) {

        for (let i in conjunt1) {
            if (conjunt2.includes(conjunt1[i])) {} else {
                this.simetricDiferencec.push(conjunt1[i]);
            }
        }
        for (let i in conjunt2) {
            if (conjunt1.includes(conjunt2[i])) {

            } else {
                this.simetricDiferencec.push(conjunt2[i]);
            }
        }
        return this.simetricDiferencec;
    }
    complement(universal, conjunt) {
        for (let i in universal) {
            if (conjunt.includes(universal[i])) {} else {
                this.complementc.push(universal[i]);
            }
        }
        return this.complementc;
    }


}
class statistics {
    constructor() {
        this.mediad;
        this.promediod;
        this.medianad;
        this.rangod;
        this.varianced = 0;
        this.standarDesviaciond;
    }

    media(data) {
        this.mediad = 0;
        for (let i in data) {
            this.mediad += data[i];

        }
        return this.mediad / data.length;
    }
    promedio(data) {
        let average = 0;
        for (let i in data) {
            average += data[i];
        }
        return average / data.length;
    }
    mediana(data) {

        let orderData = data.sort((a, b) => a - b);
        let value;
        let mid = orderData.length / 2;

        if (orderData.length % 2 == 0) {
            this.medianad = (orderData[mid - 1] + orderData[mid]) / 2.0;
        } else {
            value = Math.floor(mid);
            this.medianad = orderData[value];
        }
        return this.medianad;

    }
    range(data) {

        let maximun = 0;

        for (let i in data) {
            if (maximun < data[i]) {
                maximun = data[i];
            }
        }
        let minimun = data[0]

        for (let i in data) {

            if (data[i] < minimun) {
                minimun = data[i];
            }
        }
        return maximun - minimun;

    }
    variance(data) {
        let n = data.length;
        let variance = 0;
        let add = 0;
        for (let i in data) {
            add += data[i];
        }
        let average = add / data.length;
        for (let i in data) {
            this.varianced += Math.pow((data[i] - average), 2.0);
        }
        return this.varianced / (n - 1);
    }
    standarDesviacion(data) {
        let variance = this.variance(data);
        this.standarDesviaciond = Math.sqrt(variance);
        return this.standarDesviaciond;

    }

}
a = new statistics()
console.log(a.standarDesviacion([2, 3, 4, 5]));

class Stack {

    // Does the simulation of a stack with its methods

    constructor() {
        this.stack = []

    }
    insertNewElement(element) {

        this.stack.push(element);
        return this.stack;
    }
    deleteElement() {
        this.stack.pop();
        return this.stack;
    }
    showSize() {
        return this.stack.length;
    }
    viewElements() {
        return this.stack;
    }

}

class Queue {
    //Does the simulation of a queue with its methods
    constructor() {
        this.queue = [];
    }

    insertNewElement(element) {

        this.queue.push(element);
        return this.queue;
    }
    deleteElement() {
        return this.queue.shift();
    }
    showSize() {
        return this.queue.length;
    }
    viewElements() {
        return this.queue;
    }
}



const quicksort = (array) => {

    //Algorithm quicksort for order arrays

    if (array.length <= 1) {
        return array;
    }
    var index = array[0];

    var left = [];
    var right = [];

    for (var i = 1; i < array.length; i++) {
        if (array[i] < index) {

            left.push(array[i]);

        } else {

            right.push(array[i]);

        }
    }
    return quicksort(left).concat(index, quicksort(right));
};

const bubbleSort = (array) => {
    //sort the array with bubble sorting algorithm 
    let sortVar;

    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - i; j++) {
            if (array[j] > array[j + 1]) {
                sortVar = array[j];
                array[j] = array[j + 1];
                array[j + 1] = sortVar;
            }
        }
    }
    return array;
}

const binarySearch = (value, array) => {

    //Obtain index of a specific value in an array

    let first = 0; //left endpoint
    let last = array.length - 1; //right endpoint
    let position = false;
    let found = false;
    let middle;

    while (found === false && first <= last) {
        middle = Math.floor((first + last) / 2);
        if (array[middle] == value) {
            found = true;
            position = middle;
        } else if (array[middle] > value) { //if in lower half
            last = middle - 1;
        } else { //in in upper half
            first = middle + 1;
        }
    }
    return position;
}

//Objects to export. 

const ofArray = new CalcArray();
const areaOf = new Areas();
const ofConjunts = new Conjunts();
const statistic = new statistics();
const stack = new Stack()
const queue = new Queue()


//Exporting all objects and functions



//Testing zone
//Testing zone