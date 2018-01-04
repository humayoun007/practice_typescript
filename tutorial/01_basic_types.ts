
//note: to compile ts file : type in cmd or terminal like : tsc [ts file name with ts extension]
//js file will be generated then just type in cmd or terminal : node [generated js file name]


//boolean type 

let isPossible: boolean = false;

//number type

let age:number = 31;

let decimal:number = 6;
let hex : number = 0xf00d;
let binary: number = 0b1010;
let octal:number = 0o744;


//string type

let dressColor:string = "green";

let sentence:string = `
my dress color is ${dressColor}
`;

console.log(sentence);

//Array type

let list:number[] = [11,12,13];

//or 

let list2 : Array<number> = [11,12,13];

//Tuple Type

let tpl:[string,number] = ["humayoun",1];

//accessing above

console.log(tpl[0]); //print humayoun

//Enum type

//enum Quality{Bad,Good,Best}

//even 
enum Quality{Bad=1,Good=2,Best=3}

let q:Quality = Quality.Good;

console.log(q);

//display quality name
let qualityname = Quality[2];

console.log(qualityname);

//Any type
let notKnown:any = 4;

//array of any type
let listOfNotKnow:any[] = [1,true,"really unknown"];

console.log(listOfNotKnow[0]);

//Void type function

function voidMethod():void{
    console.log('this is a void method');
}

//void type variable *Note:only can assign undefined and null value

let voidVariable : void = undefined;

//null and undefined type
let u:undefined = undefined;
let n:null = null;

//never type
//must have unreachable end point
function unreachable(message:string):never{
    throw new Error(message);
}











