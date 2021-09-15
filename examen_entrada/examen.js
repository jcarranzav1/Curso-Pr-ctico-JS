/*---Variables y operaciones---*/
let nombre = 'Juan';
let apellido = 'Carranza';
let nombreUsuario = 'lemiwinks';
let edad = 23;
let email = 'jcarranzav1@hotmail.com';
let mayorEdad = true;
let dineroAhorrado = 1000;
let deudas = null;

console.log(`Nombre: ${nombre} ${apellido}`);
console.log('Nombre:', nombre, apellido);
console.log('Dinero:', dineroAhorrado - deudas);

/*---Funciones---*/

const nombre2 = 'Juan Diego';
const lastname = 'Carranza Vega';
const nickname = 'JD';

const miFunction = (name, lastname, nick) =>
	`Mi nombre es ${name} ${lastname}, pero prefiero que me digas ${nick}`;

console.log(miFunction(nombre2, lastname, nickname));

/*---Condicionales---*/

const suscriptionArray = ['Free', 'Basic', 'Expert', 'ExpertPlus'];
const answers = [
	'Solo puedes tomar los cursos gratis',
	'Puedes tomar casi todos los cursos de Platzi durante un mes',
	'Puedes tomar casi todos los cursos de Platzi durante un año',
	'Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año',
];
const tipoDeSuscripcion = 'ExpertPlus';

const index = suscriptionArray.indexOf(tipoDeSuscripcion);

if (index === -1) console.log('Error, esa suscripción no existe');
else console.log(answers[index]);

/*---Ciclos---*/
/*-- 1 --*/
var i = 0;
while (i < 5) {
	console.log('El valor de i es:', i);
	i++;
}

/*-- 2 --*/
i = 10;
while (i >= 2) {
	console.log('El valor de i es:', i);
	i--;
}

let respuesta = 0;

/*-- 3 --*/
do {
	respuesta = prompt('¿Cuanto es 2+2?');
	respuesta = parseInt(respuesta);
} while (respuesta !== 4);

console.log(respuesta);

/*---Listas---*/
/*-- 1 --*/
const arrfunc = (arr) => {
	if (arr.length > 0) console.log(arr[0]);
	else console.log('Error, tu array no tiene ningun elemento');
};

arrfunc([11, 2, 3, 4, 10]);

/*-- 2 --*/
const arrfunc2 = (arr) => {
	if (arr.length > 0) {
		arr.forEach((x) => console.log(x));
	} else console.log('Error, tu array no tiene ningun elemento');
};

arrfunc2([11, 2, 3, 4, 7]);

/*-- 3 --*/
let persona = {
	nombre: 'Oscar',
	apellido: 'Aguilar',
	edad: 21,
	trabajo: 'Fronter-Dev',
};

const objfunc = (obj) => {
	Object.entries(obj).forEach((arr) => console.log(`${arr[0]} : ${arr[1]}`));
};

objfunc(persona);
