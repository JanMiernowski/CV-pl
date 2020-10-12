lista = ['Java 8', 'Maven', 'MySQL i Microsoft SQL Server','Hibernate i JDBC',
    'HTML, CSS i JavaScript','TypeScript','Angular','JUnit 5','C++','GIT'];
let calaLista = "";
function start() {
    for (let i = 0; i < lista.length; i++) {
        calaLista += '<span class="tick">✓ </span>';
        if(lista[i]==='Java 8'){
            calaLista += '<b>' + lista[i] + '</b><br/>';
        }else {
            calaLista += lista[i] + '<br/>';
        }
    }
    document.getElementById("skills").innerHTML = calaLista;
}

window.onload = start;
