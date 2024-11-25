
const names = ["SpongeBob", "Patrick", "SquidWard", "Sandy"];
const names2 = `["SpongeBob", "Patrick", "SquidWard", "Sandy"]`;

const jsonString = JSON.stringify(names);

console.log(typeof(names), names);
console.log(typeof(jsonString), jsonString);

const parsedData = JSON.parse(names2);

console.log(typeof(parsedData), parsedData, "\n\n");
/////////////////////////////////////////////

fetch("People.json").then( response => response.json())
                    .then(value => console.log(value))
                    .catch(error => console.log(error))