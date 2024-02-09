// Background changing script

const img = ['bg1.jpg','bg2.jpg','bg3.jpg','bg4.jpg','bg5.jpg','bg6.jpg'];

function bgChange(i){
    document.querySelector('body').style.background = `url(${img[i]}) center center / cover`;
    document.querySelector('body').style.backgroundAttachment = "fixed";

    switch (img[i]) {
        case img[3]:
            document.querySelector('body').style.color = "white"
            break;
        case img[5]:
            document.querySelector('body').style.color = "white"
            break;
        
        default:
            document.querySelector('body').style.color = "black";
            break;
    }
}

// Skill card data 

const skills = [
    {
        featureCol : "feature col me-2 d-flex align-items-center justify-content-center flex-column",
        featureIcon : "feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3",
        logo : "bx bxl-html5 fs-1",
        title : "HTML",
        desc : "Hyper Text Markup Language",
        titleClass : "fs-2 text-body-emphasis"
    },
    {
        featureCol : "feature col me-2 d-flex align-items-center justify-content-center flex-column",
        featureIcon : "feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3",
        logo : "bx bxl-css3 fs-1",
        title : "CSS",
        desc : "Presentation & styling of a document",
        titleClass : "fs-2 text-body-emphasis"
    },
    {
        featureCol : "feature col me-2 d-flex align-items-center justify-content-center flex-column",
        featureIcon : "feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3",
        logo : "bx bxl-bootstrap fs-1",
        title : "BootStrap",
        desc : "Open-source CSS framework",
        titleClass : "fs-2 text-body-emphasis"
    },
    {
        featureCol : "feature col me-2 d-flex align-items-center justify-content-center flex-column",
        featureIcon : "feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3",
        logo : "bx bxl-javascript fs-1",
        title : "JavaScript",
        desc : "Client side for webpage behavior",
        titleClass : "fs-2 text-body-emphasis"
    },
    {
        featureCol : "feature col me-2 d-flex align-items-center justify-content-center flex-column",
        featureIcon : "feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3",
        logo : "bx bxl-react fs-1",
        title : "React JS",
        desc : "Front-end JavaScript library",
        titleClass : "fs-2 text-body-emphasis"
    },
    {
        featureCol : "feature col me-2 d-flex align-items-center justify-content-center flex-column",
        featureIcon : "feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3",
        logo : "bx bxl-php fs-1",
        title : "PHP",
        desc : "General-purpose scripting language",
        titleClass : "fs-2 text-body-emphasis"
    },
    {
        featureCol : "feature col me-2 d-flex align-items-center justify-content-center flex-column",
        featureIcon : "feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3",
        logo : "bx bx-data fs-1",
        title : "MySQL",
        desc : "Relational DB Management system",
        titleClass : "fs-2 text-body-emphasis"
    },
    {
        featureCol : "feature col me-2 d-flex align-items-center justify-content-center flex-column",
        featureIcon : "feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3",
        logo : "bx bxl-mongodb fs-1",
        title : "MongoDB",
        desc : "NoSQL database product",
        titleClass : "fs-2 text-body-emphasis"
    },
    
];


// function skillCard 

skills.forEach(skill => {
    const skillRow = document.querySelector('.skill-card');

    const featureColumn = document.createElement('div');
    featureColumn.className = skill.featureCol;
    featureColumn.setAttribute("id","skill-card");
    skillRow.appendChild(featureColumn);
    
    const featureIcons = document.createElement('div');
    featureIcons.className = skill.featureIcon;
    featureColumn.appendChild(featureIcons);

    const iconLogo = document.createElement('i');
    iconLogo.className = skill.logo;
    featureIcons.appendChild(iconLogo);

    const heading = document.createElement('h1');
    heading.className = skill.titleClass;
    heading.innerHTML = skill.title;
    featureColumn.appendChild(heading);

    const description = document.createElement('p');
    description.innerHTML = skill.desc;
    featureColumn.appendChild(description);

});


// Contact details data

const contactDetails = [
    {
        cardLinkClass : "col d-flex flex-column gap-2",
        iconClass : "feature-icon-small d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-4 rounded-3 contact-link",
        hrefLink : " https://wa.me/+917305645456",
        logo : "bx bxl-whatsapp fs-1",
        titleClass : "fw-semibold mb-0 text-body-emphasis",
        title : "7305645456",
        noteClass : "text-body-secondary",
        note : "Calls and WhatsApp only"
    },
    {
        cardLinkClass : "col d-flex flex-column gap-2",
        iconClass : "feature-icon-small d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-4 rounded-3 contact-link",
        hrefLink : "mailto:itsprabanjan@gmail.com",
        logo : "bx bxl-gmail fs-1",
        titleClass : "fw-semibold mb-0 text-body-emphasis",
        title : "@gmail.com",
        noteClass : "text-body-secondary",
        note : "Mail me Anytime for any queries"
    },
    {
        cardLinkClass : "col d-flex flex-column gap-2",
        iconClass : "feature-icon-small d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-4 rounded-3 contact-link",
        hrefLink : "",
        logo : "bx bxl-linkedin fs-1",
        titleClass : "fw-semibold mb-0 text-body-emphasis",
        title : "LinkedIn",
        noteClass : "text-body-secondary",
        note : "Always active in LinkedIn"
    },
    {
        cardLinkClass : "col d-flex flex-column gap-2",
        iconClass : "feature-icon-small d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-4 rounded-3 contact-link ",
        hrefLink : "https://github.com/prabasjani",
        logo : "bx bxl-github fs-1",
        titleClass : "fw-semibold mb-0 text-body-emphasis",
        title : "GitHub",
        noteClass : "text-body-secondary",
        note : "All Source codes in my Github Account"
    }
];

contactDetails.forEach(contactDetail => {
    const contactCard = document.querySelector('.contact-card');

    const cards = document.createElement('a');
    cards.setAttribute("href", contactDetail.hrefLink);
    cards.setAttribute("style", "text-decoration: none;")
    cards.className = contactDetail.cardLinkClass;
    contactCard.appendChild(cards);

    const cardIcon = document.createElement('div');
    cardIcon.className = contactDetail.iconClass;
    cards.appendChild(cardIcon);

    const boxIcon = document.createElement('i');
    boxIcon.className = contactDetail.logo;
    cardIcon.appendChild(boxIcon);

    const title = document.createElement('h1');
    title.className = contactDetail.titleClass;
    title.innerHTML = contactDetail.title;
    cards.appendChild(title);

    const note = document.createElement('p');
    note.className = contactDetail.noteClass;
    note.innerHTML = contactDetail.note;
    cards.appendChild(note);

});


// Vannila JS Tilt Option

VanillaTilt.init(document.querySelectorAll(".feature"), {
    max: 25,
    speed: 400
});

