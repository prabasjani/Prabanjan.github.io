// Home Page Greetings

let time = document.getElementById('time');
            
    let date = new Date().getHours();

    let greet = date < 12 ? "Good Morning..." : date >=12 && date < 16 ? "Good Afternoon..." : "Good Evening...";

    time.innerHTML = greet;

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


// Project cards data

const projects = [
    {
        cardClass : "card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg",
        cardItemClass : "d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1",
        cardHeadingClass : "pt-5 mt-5 mb-4 display-6 lh-1 fw-bold",
        CardHeading : "Shakya IAS Academy",
        ulClass : "d-flex list-unstyled mt-auto",
        imgList : "me-auto",
        imgSrc : "profile.png",
        imgClass : "rounded-circle border border-white",
        linkList : "d-flex align-items-center me-3",
        linkClass : "nav-link",
        visit : "Visit Site",
        visitHref : "#",
        more : "More Details",
        moreHref : "#"
    },
];

// function addProject(){
    
    projects.forEach(project => {
    
    const projectCardRow = document.querySelector('#project-col');

    const cardCol = document.createElement('div');
    cardCol.className = "col";
    projectCardRow.appendChild(cardCol);
        
    const card = document.createElement('div');
    card.className = project.cardClass;
    card.setAttribute("id","project-card");
    cardCol.appendChild(card);

        const cardItem = document.createElement('div');
        cardItem.className = project.cardItemClass;
        card.appendChild(cardItem);

            const projectHeading = document.createElement('h3');
            projectHeading.className = project.cardHeadingClass;
            projectHeading.innerHTML = project.CardHeading;
            cardItem.appendChild(projectHeading);

            const projectFooter = document.createElement('ul');
            projectFooter.className = project.ulClass;
            cardItem.appendChild(projectFooter);

                const footerimgList =document.createElement('li');
                footerimgList.className = project.imgList;
                projectFooter.appendChild(footerimgList);

                    const devImg = document.createElement('img');
                    devImg.className = project.imgClass;
                    devImg.setAttribute("src",project.imgSrc);
                    devImg.setAttribute("alt","Developer");
                    devImg.setAttribute("width", "32");
                    devImg.setAttribute("height","32");
                    footerimgList.appendChild(devImg);

                const visitLink = document.createElement('li');
                visitLink.className = project.linkList;
                projectFooter.appendChild(visitLink);

                    const visitSite = document.createElement('a');
                    visitSite.setAttribute("href",project.visitHref);
                    visitSite.className = project.linkClass;
                    visitSite.innerHTML = project.visit;
                    visitLink.appendChild(visitSite);

                const moreLink = document.createElement('li');
                moreLink.className = project.linkList;
                projectFooter.appendChild(moreLink);

                    const moreDetails = document.createElement('a');
                    moreDetails.setAttribute("href",project.moreHref);
                    moreDetails.className = project.linkClass;
                    moreDetails.innerHTML = project.more;
                    moreLink.appendChild(moreDetails);
        
    });
// }

// Vannila JS Tilt Option

VanillaTilt.init(document.querySelector("#custom-cards"), {
    max: 25,
    speed: 400
});

