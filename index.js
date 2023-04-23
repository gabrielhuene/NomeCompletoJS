let Nome = prompt("Digite seu primeiro nome");
let Sobrenome = prompt("Digite seu sobrenome");

let NomeCompleto = `${ Nome} ${ Sobrenome}`;
let NomeCatalogo = `${ Sobrenome.toUpperCase()} ${ Nome }`;

alert (NomeCompleto);
alert (NomeCatalogo);