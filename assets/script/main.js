'use strict'

console.log('sono connesso');

//array con oggetti

const team = [

{
    'name': 'Wayne Barnett',
    role: 'Ceo',
    image: './assets/images/wayne-barnett-founder-ceo.jpg'

},

{
    'name' : 'Angela Caroll',
    role: 'Chief Editor',
    image: './assets/images/angela-caroll-chief-editor.jpg'
},

{
    'name': 'Walter Gordon',
    role: 'Office Manager',
    image: './assets/images/walter-gordon-office-manager.jpg'
},

{
    'name': 'Angela Lopez',
    role: 'Social Media Manager',
    image: './assets/images/angela-lopez-social-media-manager.jpg'
},

{
    'name': 'Scott Estrada',
    role: 'Developer',
    image:'./assets/images/scott-estrada-developer.jpg'
},

{
    'name': 'Barbara Ramos',
    role: 'Graphic Designer',
    image: './assets/images/barbara-ramos-graphic-designer.jpg'
}

]


// debug
// console.log(team)

//stampiamo in console gli oggetti e le sue proprietà
 for (let  key in team){
     console.log(team[key].name, team[key].role, team[key].image)
 };



//variabili e creazioni di elementi
const body = document.querySelector('body')
const ul = document.getElementById('ul')
const titleContainer = document.getElementById('title')


titleContainer.classList.add('text-center', 'py-10','title-color')
ul.classList.add('d-flex','row','justify-center','unstyled-list')

//ciclo for per stampare su html
for (let i = 0; i < team.length; i++) {
    
    //per ogni presente nell array team verrà creato un elemento 'li'
    //contenente un elemento h1 per il nome
    //un elemento p per il ruolo
    //un elemento img per l'immagine
    
    const li = document.createElement('li')
    const name = document.createElement('h3')
    const role = document.createElement('p')
    const image = document.createElement('img')

    name.textContent = `${team[i].name}`;
    role.textContent = `${team[i].role}`;
    image.src = team[i].image
    console.log(image.src)
    li.append(image,name,role)
    ul.append(li)

    //aggiunta classi text center da css a html con javascript

    li.classList.add('mx-5,col-m-33','py-10','mx-5')
    name.classList.add('text-center','py-5','name-color')
    role.classList.add('text-center','role-color')
}


