let pronoun = ['the', 'our'];
let adj = ['great', 'big'];
let noun = ['jogger', 'racoon'];

for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
        for (let n = 0; n < noun.length; n++) {
            console.log(pronoun[i] + adj[j] + noun[n] + ".com")
        }
    }
}
for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
        for (let n = 0; n < noun.length; n++) {
            console.log(pronoun[i] + adj[j] + noun[n] + ".net")
        }
    }
}
for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
        for (let n = 0; n < noun.length; n++) {
            console.log(pronoun[i] + adj[j] + noun[n] + ".us")
        }
    }
}
for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
        for (let n = 0; n < noun.length; n++) {
            console.log(pronoun[i] + adj[j] + noun[n] + ".io")
        }
    }
}

//Una manera mas optimizada de hacer el codigo, para que se vea mas corto
let pronoun = ['the', 'our'];
let adj = ['great', 'big'];
let noun = ['jogger', 'racoon'];
let dominio = ['.com', '.net', '.es'];

for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
        for (let k = 0; k < noun.length; k++) {
            for (let l = 0; l < dominio.length; l++) {


                console.log(pronoun[i] + adj[j] + noun[k] + dominio[l]);
            }
        }
    }
}


//Domain hacks
let palabras = ['pued', 'juguet', 'inter'];
let hack = ['.es', '.net'];
for (let p = 0; p < palabras.length; p++) {
    for (let h = 0; h < hack.length; h++) {
        console.log(palabras[p] + hack[h]);
    }
}