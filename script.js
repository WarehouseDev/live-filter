import businesses  from './business.js';

const companyList = document.querySelector('.company-list');
const searchInput = document.querySelector('#search');
const emptyP = document.querySelector('.empty-list');


businesses.forEach( business => {
    const li = document.createElement('li');
    li.classList.add('company');
    
    const h2 = document.createElement('h2');
    h2.textContent = business.name;
    
    const p = document.createElement('p');
    p.textContent = business.description;
    
    li.append(h2, p);
    companyList.appendChild(li);
})


searchInput.addEventListener('input', (e) =>{
    const searchTerm = e.target.value;
    const companyNames = companyList.querySelectorAll('h2');

    companyNames.forEach( name => {
        if ( !name.textContent.toLowerCase().includes(searchTerm.toLowerCase().trim()) ){
            name.parentNode.classList.add('hidden');
        } else {
            name.parentNode.classList.remove('hidden');
        }
    })

    const invisibleCompanies = document.querySelectorAll('.company.hidden');

    if ( invisibleCompanies.length === companyList.children.length ){
        emptyP.classList.add('shown');
    } else {
        emptyP.classList.remove('shown');
    }
})