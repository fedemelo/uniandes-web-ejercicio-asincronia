// Federico Melo Barrero, 202021525

// Ejemplo de closure

// El closure permite que cuando se tiene una función anidada (i.e., una función definida dentro de otra)
// la función anidada o interna es capaz de acceder a las variables y constantes definidas en la función externa

function externa(a, b) {
    return (c) => {
        return a + b + c;  // 
    }
}

console.log(externa(1, 2)(3));

// Ejemplo de hoisting

// El hoisting consiste en que al definir de funciones y al declarar variables usando var, estas se interpretan como si estuvieran
// al inicio de su scope (alcance). Esto permite que se puedan referenciar antes de ser declaradas (mientras estén en su scope).

const saludar = `Hola, soy ${decir_nombre()}`;
console.log(saludar);

function decir_nombre() {
    return 'Federico Melo';
}


// MCD

const mcd = a => b => a == b ? a : (a > b ? mcd(a - b)(b) : mcd(b - a)(a));

console.log(mcd(1296)(36));