function createOutilItem(iconSrc, titleText) {
    // Créer un élément div pour l'outil
    const outilItem = document.createElement('div');
    outilItem.className = 'outil_item';
    
    // Créer l'élément icon
    const iconDiv = document.createElement('div');
    iconDiv.className = 'icon';
    const iconImg = document.createElement('img');
    iconImg.src = iconSrc;
    iconImg.width = 50;
    iconDiv.appendChild(iconImg);
    
    // Créer l'élément titre
    const titreDiv = document.createElement('div');
    titreDiv.className = 'titre';
    const titreP = document.createElement('p');
    titreP.textContent = titleText;
    titreDiv.appendChild(titreP);
    
    // Ajouter les éléments icon et titre à l'outil
    outilItem.appendChild(iconDiv);
    outilItem.appendChild(titreDiv);
    
    return outilItem;
}

// Exemple d'utilisation
const contentOutils = document.querySelector('.content_outils');

// Ajouter plusieurs éléments dynamiquement
contentOutils.appendChild(createOutilItem('/icon/icon_outils/vmware.png', 'VMWare'));
contentOutils.appendChild(createOutilItem('/icon/icon_outils/vb.png', 'Virtualbox'));
contentOutils.appendChild(createOutilItem('/icon/icon_outils/gns3.png', 'GNS3'));
contentOutils.appendChild(createOutilItem('/icon/icon_outils/packet_tracer.png', 'Packet tracer'));
contentOutils.appendChild(createOutilItem('/icon/icon_outils/linux.png', 'Linux'));
contentOutils.appendChild(createOutilItem('/icon/icon_outils/offiche.png', 'Office'));



//Autres


function createItemLang(iconSrc, titleText) {
    // Créer un élément div pour l'outil
    const outilItem = document.createElement('div');
    outilItem.className = 'item_lang';
    
    // Créer l'élément icon
    const iconDiv = document.createElement('div');
    iconDiv.className = 'icon_lang';
    const iconImg = document.createElement('img');
    iconImg.src = iconSrc;
    iconImg.width = 50;
    iconDiv.appendChild(iconImg);
    
    // Créer l'élément titre
    const titreDiv = document.createElement('div');
    titreDiv.className = 'title_lang';
    const titreP = document.createElement('p');
    titreP.textContent = titleText;
    titreDiv.appendChild(titreP);
    
    // Ajouter les éléments icon et titre à l'outil
    outilItem.appendChild(iconDiv);
    outilItem.appendChild(titreDiv);
    
    return outilItem;
}

// Exemple d'utilisation
const content_lang = document.querySelector('.content_language');

// Ajouter plusieurs éléments dynamiquement
content_lang.appendChild(createOutilItem('/icon/icon_language/html.png', 'HTML'));
content_lang.appendChild(createOutilItem('/icon/icon_language/css.png', 'CSS'));
content_lang.appendChild(createOutilItem('/icon/icon_language/javascript.png', 'JavaScript'));
content_lang.appendChild(createOutilItem('/icon/icon_language/java.png', 'JAVA'));
content_lang.appendChild(createOutilItem('/icon/icon_language/kotlin.png', 'Kotlin'));
