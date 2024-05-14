Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.

Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.

MILESTONE 0:
Creare l’array di oggetti con le informazioni fornite.

MILESTONE 1:
Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto

MILESTONE 2:
Stampare le stesse informazioni su DOM sottoforma di stringhe
BONUS 1:
Trasformare la stringa foto in una immagine effettiva

BONUS 2:
Organizzare i singoli membri in card/schede
Consigli del giorno:
Ragioniamo come sempre a step.
Prima la logica in italiano e poi traduciamo in codice.


Milestone 1
// inseriamo gli oggetti alli interno dell'array

    const team = [
        {
            name:
            role:
            image:
        } ...
    ]

// per stampare le informazioni delgi oggetti presenti negli array
    usiamo il metodo for each.

    team.forEach(function(element)){
        console.log(element.name, element.role, element.image)
    }

o anche

// for (let key in team){
    console.log(team.name, team.role, team.image);
}




Milestone 2
//iterare sull array con un ciclo for
 //per ogni presente nell array team verrà creato un    elemento 'li'
 //contenente un elemento h1 per il nome
 //un elemento p per il ruolo
 //un elemento img per l'immagine
    
for (let i = 0; i < team.length; i++) {
    console.log(`sei qui ${team[i].name}, ${team[i].role}, ${team[i].image}`);
    const li = document.createElement('li')
    const name = document.createElement('h3')
    const role = document.createElement('p')
    const image = document.createElement('img')

    name.textContent = `name: ${team[i].name}`;
    role.textContent = `role: ${team[i].role}`;
    image.src = team[i].image
    console.log(image.src)

    ul.append(li,name,role,image)

}
