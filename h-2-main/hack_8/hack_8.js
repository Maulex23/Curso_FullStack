/**
 * ["foo","bar","baz","qux","echo"] 
 * 
 * 1) anexar al array result los items [bar,baz,qux]
 * 2) los 2 primeros items reescribir el caracter "a" por @
 * modificar el último item "quz" a mayúscula
 *  
 * 
 * output => ["b@r","b@z","QUX"]   
 */
let arr = ["foo","bar","baz","qux","echo"];
let result = [];

result = arr.filter((str) => !str.includes("o"));
result = result.map((str) => {
    if(str.includes('a')) {
        return str.replace('a', '@')
    }else{
        return str.toUpperCase()
    }
})


//export result
module.exports = result;