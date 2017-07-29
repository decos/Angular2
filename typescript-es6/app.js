"use strict";
//PRIMER EJEMPLO
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/*function saludar( nombre:string){
  console.log("Hola: " + nombre.toUpperCase())
}

var wolverine = { nombre: "Logan"};

saludar(wolverine.nombre);*/
// EJEMPLO let
/*
let mensaje="Hola";

if(true){
  let mensaje = "Adios";
}

console.log(mensaje);
*/
//EJEMPLO const
/*
const OPCIONES = "todas";

if(true){
  const OPCIONES = "ninguna";
}
*/
//TIPOS DE VARIABLES
/*
let nombre:string = "Peter";
let numero:number = 123;
let booleano:boolean = true;

let hoy:Date = new Date();
hoy = new Date("2020-10-21");

let cualquiera:any;
cualquiera = nombre;
cualquiera = numero;
cualquiera = booleano;
cualquiera = hoy;

let spiderman = {
  nombre: "Peter",
  edad: 20
}

spiderman = {
  nombre: "Juan",
  edad:30
}
*/
// TEMPLATE LITERALES DE ES6
/*
function getNombre(){
  return "Fernando"
}

let nombre:string = "Juan";
let apellido:string = "Perez";
let edad:number = 32;

let texto = `Hola,
${ nombre } ${ apellido }
(${ edad })`;

let texto2:string = ` ${ getNombre() } `;

console.log(texto2);
*/
//FUNCIONES: PARAMETROS OPCIONALES, OBLIGATORIOS Y POR DEFECTO
/*
function activar( quien:string,
                  objeto:string = "batiseñal",
                  momento?:string){
    let mensaje:string ;

    if(momento){
        mensaje = `${quien} activó la ${objeto} en la ${momento}`;
    } else{
        mensaje = `${quien} activó la ${objeto}`;
    }

    console.log(mensaje);
}

activar("Gordon", "batiseña", "tarde");
*/
//FUNCIONES DE FLECHA
/*
let miFuncion = function( a ){
  return a;
}

let miFuncionF = a => a ;

console.log( miFuncion("Normal") );
console.log( miFuncionF("Flecha") );
*/
/*
let miFuncion2 = function( a:number, b:number ){
  return a + b;
}

let miFuncion2F = (a:number, b:number) => a + b ;

let miFuncion3 =  function( nombre:string ){
  nombre = nombre.toUpperCase();
  return nombre;
}

let miFuncion3F = (nombre:string ) => {
  nombre = nombre.toUpperCase();
  return nombre;
}
*/
/*
let nombre = "Pedro";

let hulk  = {
  nombre: "Hulk",
  smash(){

    // correcto
    setTimeout( () => console.log(this.nombre + " smash!!"), 1500 );
  }
}

hulk.smash();
*/
//DESTRUCTURACIÓN DE OBJETOS Y ARREGLOS
//Objetos
/*
let avenger = {
    nombre: "Steve",
    clave: "Capitan America",
    poder: "Droga"
}

//let { nombre, clave, poder } = avenger;
// No importa el orden
let { poder:string, nombre, clave } = avenger;

//let nombre =  avenger.nombre;
//let clave = avenger.clave;
//let poder = avenger.poder;

console.log(nombre, clave, string);*/
//Arreglos (Secuencual)
/*
let avengers:string[] = ["Thor", "Steve", "Tony"];

let [thor, capi, ironman ] = avengers;

console.log( thor, capi, ironman);
*/
//PROMESAS
/*
let prom1 = new Promise( function( resolve, reject ){

  setTimeout( () => {
    console.log("Promesa terminada");

    //Termina bien
    //resolve();

    //Termina mal
    reject()

  }, 1500); //segundo y medio (milisengundos)

} );

console.log("Paso 1");

prom1.then( function(){
  console.log("Ejecutarme cuando se termine bien!");
},
  function(){
    console.error("Ejecutar si todo sale mal");
  }
)

console.log("Paso 2");
*/
//INTERFACES EN TYPESCRIPT
/*
function enviarMision(xmen:any){
  console.log("Enviando a: " + xmen.nombre);
}

let wolverine = {
  nombre: "Logan",
  poder: "regeneracion"
}

enviarMision(wolverine);
*/
/*
interface Xmen{
  nombre:string,
  poder:string
}

function enviarMision(xmen: Xmen){
  console.log("Enviando a: " + xmen.nombre);
}

function enviarCuartel(xmen: Xmen){
  console.log("Enviando al cuartel: " + xmen.nombre);
}

let wolverine:Xmen = {
  nombre: "Logan",
  poder: "regeneracion"
}

enviarMision(wolverine);
enviarCuartel(wolverine);
*/
//DEFINICION DE UNA CLASE BASICA
/*
class Avenger {
    nombre:string = "Sin Nombre";
    equipo:string = undefined;
    nombreReal:string = undefined;

    puedePelear:boolean = false;
    peleasGanadas:number = 0;

    constructor( nombre:string, equipo:string, nombreReal:string ){
      //console.log("Se ejecuto el constructor")
      this.nombre = nombre;
      this.equipo = equipo;
      this.nombreReal = nombreReal;
    }

}

let antman:Avenger = new Avenger( "Antman", "cap", "Scott Lang" );
console.log(antman);
*/
//DECORADORES DE CLASES
function consola(constructor) {
    console.log(constructor);
}
var Villano = (function () {
    function Villano(nombre) {
        this.nombre = nombre;
    }
    return Villano;
}());
Villano = __decorate([
    consola
], Villano);
