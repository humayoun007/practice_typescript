//------ Typescript in short time ----


//there are three basic types
let isDone: boolean = false;
let lines: number = 42;
let myname: string = "humayoun";

//any type
let notSure: any = 4;
notSure = "May be a strig instead";
notSure = false;

//use const keyword for constant
const numLivesForCat = 9;


//collections

let list: number[] = [1, 2, 3];
//generic collection
let list2: Array<number> = [1, 4, 6];

//enumeration

enum Color { Red, Green, Blue };
let c: Color = Color.Green;

//void function
function bigHorribleAlert(): void{
    alert("I am little annoying box!");
}


let f1 = function (i: number): number{
    return i * i;
}

let f3 = (i: number): number => { return i * i }

let f5 = (i: number) => i * i;

interface Person{

    name: string;
    age?: number;
    move(): void;
}

let aPerson: Person = { name: "Humayoun", age: 42, move: () => { } }

//interface with function type
interface SearchFunc { 

    (source: string, subString: string): boolean;
}

let mySearch: SearchFunc;

mySearch = function (src: string, sub: string) {
    return src.search(sub) != -1;
}


//Classes

class Point{

    x: number;

    constructor(x: number, public y: number = 0) {
        this.x = x;
    }

    //Functions
    dist() {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }

    static origin = new Point(0, 0);
}

let p1 = new Point(10, 20);

let p2 = new Point(25);//y will be 0

class Point3D extends Point{
    constructor(x: number, y: number, public z: number = 0) {
        super(x, y);
    }

    //overwrite dist
    dist() {
        let d = super.dist();
        return Math.sqrt(d * d + this.z * this.z);
    }
}

//Modules

module Geometry{
    export class Square{
        constructor(public sideLength: number = 0) {
            
        }

        area() {
            return Math.pow(this.sideLength, 2);
        }
    }

}

let s1 = new Geometry.Square(5);
let area = s1.area();

import G = Geometry;
let s2 = new G.Square(10);


//generics
class Tuple<T1, T2>{
    constructor(public item1: T1, public item2: T2) {
        
    }
}

interface Pair<T>{
    item1: T;
    item2: T;
}

let pairToTuple = function <T>(p: Pair<T>) { 
    return new Tuple(p.item1, p.item2);
};


let tuple = pairToTuple({ item1: "hellow", item2: "world" });

let grName = 'Kabir';

let meeting = `Hi ${grName} , how are you ?`;

let multiline = `This is 

                multiline example.`;
