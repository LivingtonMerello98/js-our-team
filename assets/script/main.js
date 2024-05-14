'use strict'

console.log('sono connesso');

//array con oggetti

const team = [

{
    name: 'Wayne Barnett',
    role: 'Ceo',
    image: './assets/images/wayne-barnett-founder-ceo.jpg'

},

{
    name : 'Angela Caroll',
    role: 'Chief Editor',
    image: './assets/images/angela-caroll-chief-editor.jpg'
},

{
    name: 'Walter Gordon',
    role: 'Office Manager',
    image: './assets/images/walter-gordon-office-manager.jpg'
},

{
    name: 'Angela Lopez',
    role: 'Social Media Manager',
    image: './assets/images/angela-lopez-social-media-manager.jpg'
},

{
    name: 'Scott Estrada',
    role: 'Developer',
    image:'./assets/images/scott-estrada-developer.jpg'
},

{
    name: 'Barbara Ramos',
    role: 'Graphic Designer',
    image: './assets/images/barbara-ramos-graphic-designer.jpg'
}

]


// debug
console.log(team)


for (let  key in team){
    console.log(team[key].name, team[key].role, team[key].image)
};
