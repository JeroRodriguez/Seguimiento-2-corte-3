// Ejercicio 1
let mensaje:string = "Probando primer ejercicio de TypeScript";
console.log(mensaje);
console.log(typeof(mensaje));

function suma(a:number , b:number) {
    if(a <= 20 || b <= 20) {
        throw new Error ("Los numeros deben ser mayores a 20")
    }
    return a + b;
}

const num1 = 22;
const num2 = 38;

const resultado = suma(num1, num2);
console.log(resultado); 

// Ejercicio 2
function showMonth(month: string) {
    switch(month) {
        case 'Enero':
            console.log('Estamos en el mes Enero');
            break;
        case 'Febrero':
            console.log(`Estamos en el mes Febrero`);
            break;
        case 'Marzo':
            console.log('Estamos en el mes Marzo')
            break;
        case 'Abril':
            console.log('Estamos en el mes Abril')
            break;
        case 'Mayo':
                console.log('Estamos en el mes Mayo')
            break;
        case 'Junio':
                console.log('Estamos en el mes Junio')
            break;
        case 'Julio':
                console.log('Estamos en el mes Julio')
            break;
        case 'Agosto':
                console.log('Estamos en el mes Agosto')
            break;
        case 'Septiembre':
                console.log('Estamos en el mes Septiembre')
            break;
        case 'Octubre':
                console.log('Estamos en el mes Octubre')
            break;
        case 'Noviembre':
                console.log('Estamos en el mes Noviembre')
            break;
        case 'Diciembre':
                console.log('Estamos en el mes Diciembre')
            break;
        default: 
            throw new Error('Mes ingresado no valido')
    }
}

showMonth('Enero')

// Ejercicio 3
type MyUnion = {
    name: string;
    age: number;
} | {
    email: string;
    phone: string;
};

let x: MyUnion = {name: 'Juan', age: 25}
x= { email:'juan@example.com' , phone: '3188225451'};

// Ejercicio 4 (Ciclos)
for(let i: number = 1; i <= 20; i++) {
    console.log(i)
}

const numbers: Array<number> = [8, 6, 1, 4, 5, 17, 2, 24, 14];

for (const number of numbers) {
    console.log(number)
}

let i: number = 1;

do {
    console.log(i);
    i++;
} while (i <= 10)