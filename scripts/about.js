function addDiplome(diplomes) {
    const container = document.querySelector('.diplome_obtenu');
    
    diplomes.forEach(diplome => {
        const divItem = document.createElement('div');
        divItem.classList.add('diplome_item');
        
        const divNom = document.createElement('div');
        divNom.classList.add('nom');
        const h4Nom = document.createElement('h4');
        h4Nom.textContent = diplome.nom;
        divNom.appendChild(h4Nom);
        
        const divLieuDate = document.createElement('div');
        divLieuDate.classList.add('lieu_date');
        
        const divLieu = document.createElement('div');
        divLieu.classList.add('lieu');
        divLieu.textContent = diplome.lieu;
        divLieuDate.appendChild(divLieu);
        
        const divDate = document.createElement('div');
        divDate.classList.add('date');
        divDate.textContent = diplome.date;
        divLieuDate.appendChild(divDate);
        
        divItem.appendChild(divNom);
        divItem.appendChild(divLieuDate);
        
        container.appendChild(divItem);
    });
}

// Exemple d'utilisation
const diplomes = [
    { nom: 'Bacc série C mention Bien', lieu: 'Lycée Imerintsiatosika', date: '2019' },
    { nom: 'Licence en Télécommunnication', lieu: 'ESPA', date: '2023' },
    {nom:'Master', lieu:'ESPA', date:'en cours' },
    {nom:'Master', lieu:'ESPA', date:'en cours' }
];

addDiplome(diplomes);
