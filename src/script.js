// header --Section
// header variables
const headerLogoSrc = '/Images/Whistler Bungee.png'
const headerLogoAlt = 'Whistler Adventures Logo';
const headerBusinessName = 'Whistler Adventures';
const headerMobileBackgroundSrc = '/Images/whistler village at night.jpg';
const headerMobileBackgroundAlt = 'Mountain with a lake and forest';
const headerNavItems = [
    {
        item: 'Adventures',
        link: '/#adventures',
        icon: 'https://cdn.shopify.com/s/files/1/0024/9551/2691/files/icons8-national-park-64.png?v=1665121376'
    },
    {
        item: 'Schedule',
        link: '/#schedule',
        icon: 'https://cdn.shopify.com/s/files/1/0024/9551/2691/files/icons8-calendar-64.png?v=1665122827'
    }, 
    {
        item: 'About Us',
        link: '/#aboutUs',
        icon: 'https://cdn.shopify.com/s/files/1/0024/9551/2691/files/icons8-tourist-guide-1-64.png?v=1665121336'
    },
    {
        item: 'Contact Us',
        link: '/#contactUs',
        icon: 'https://cdn.shopify.com/s/files/1/0024/9551/2691/files/icons8-at-sign-64.png?v=1665121219'
    }
];

// Right side section Output onto DOM for header items
const body = document.querySelector('body');
const headerItemContainer = document.createElement('div');
headerItemContainer.classList.add('headerItemContainer');
body.appendChild(headerItemContainer);
headerNavItems.forEach(item => {
    const headerItemDiv = document.createElement('div');
    headerItemDiv.classList.add('headerItemDiv');
    const headerItemButtonLinkEl = document.createElement('a');
    headerItemButtonLinkEl.classList.add('headerItemButtonLinkEl');
    headerItemButtonLinkEl.href = item.link;
    const headerItemIconEl = document.createElement('img');
    headerItemIconEl.classList.add('headerItemIconEl');
    headerItemIconEl.src = item.icon;
    headerItemIconEl.alt = item.item;
    headerItemButtonLinkEl.appendChild(headerItemIconEl);
    headerItemDiv.appendChild(headerItemButtonLinkEl);
    headerItemContainer.appendChild(headerItemDiv);
});

// Hero --Section
// variables for hero section
const heroSectionText = [
    {
        preText: 'Explore what',
        mainText: 'Whistler, BC',
        postText: 'has to offer!',
        CTAtext: 'Book Now',
        CTAlink: '#'

    }
];

// {
//     foregroundURL: 'https://cdn.shopify.com/s/files/1/0655/0051/2490/files/kisspng-tree-shulin-district-forest-green-green-gradient-forest-5a924d0e0487c1.8541673415195374220186_2.png?v=1665469648',
//     backgroundURL: 'https://cdn.shopify.com/s/files/1/0655/0051/2490/files/kisspng-lake-shutterstock-clip-art-mountain-5a973f5866bac8.2980430215198615924208_4.png?v=1665469781'
// }


const heroSectonBackground = [
    {
        foregroundURL: 'https://cdn.shopify.com/s/files/1/0655/0051/2490/files/kisspng-tree-shulin-district-forest-green-green-gradient-forest-5a924d0e0487c1.8541673415195374220186_2.png?v=1665469648',
        midgroundURL: 'https://cdn.shopify.com/s/files/1/0655/0051/2490/files/6400b16e-9295-4e4d-b2ee-7e0b5bff5c19.png?v=1665471358',
        backgroundURL: 'https://cdn.shopify.com/s/files/1/0655/0051/2490/files/kisspng-lake-shutterstock-clip-art-mountain-5a973f5866bac8.2980430215198615924208_4.png?v=1665469781'
    }
]

// Hero section output to DOM
const heroSectionDiv = document.querySelector('.heroSection');

// background using Parallax
const heroSectionBackgroundImgEl = document.createElement('img');
heroSectionBackgroundImgEl.classList.add('heroSectionBackgroundImgEl');
heroSectionBackgroundImgEl.src = heroSectonBackground[0].backgroundURL;

const heroSectionmidgroundImgEl = document.createElement('img');
heroSectionmidgroundImgEl.classList.add('heroSectionMidgroundImgEl');
heroSectionmidgroundImgEl.src = heroSectonBackground[0].midgroundURL;

const heroSectionForegroundImgEl = document.createElement('img');
heroSectionForegroundImgEl.classList.add('heroSectionForegroundImgEl');
heroSectionForegroundImgEl.src = heroSectonBackground[0].foregroundURL;

heroSectionDiv.appendChild(heroSectionBackgroundImgEl);
heroSectionDiv.appendChild(heroSectionmidgroundImgEl);
heroSectionDiv.appendChild(heroSectionForegroundImgEl);

// text
const heroSectionTextDiv = document.createElement('div');
heroSectionTextDiv.classList.add('heroSectionTextDiv');
heroSectionDiv.appendChild(heroSectionTextDiv);

const heroSectionPreTextEl = document.createElement('p');
heroSectionPreTextEl.classList.add('heroSectionPreTextEl');
heroSectionPreTextEl.appendChild(document.createTextNode(heroSectionText[0].preText));
heroSectionTextDiv.appendChild(heroSectionPreTextEl);

const heroSectionMainTextEl = document.createElement('h1');
heroSectionMainTextEl.classList.add('heroSectionMainTextEl');
heroSectionMainTextEl.appendChild(document.createTextNode(heroSectionText[0].mainText));
heroSectionTextDiv.appendChild(heroSectionMainTextEl);

const heroSectionPostText = document.createElement('p');
heroSectionPostText.classList.add('heroSectionPostText');
heroSectionPostText.appendChild(document.createTextNode(heroSectionText[0].postText));
heroSectionTextDiv.appendChild(heroSectionPostText);

const heroSectionCTAlinkDiv = document.createElement('div');
heroSectionCTAlinkDiv.classList.add('heroSectionCTAlinkDiv');
const heroSectionCTAlinkEl = document.createElement('a');
heroSectionCTAlinkEl.href = heroSectionText[0].CTAlink;
heroSectionCTAlinkEl.classList.add('heroSectionCTAlinkEl');
const heroSectionCTAlink = document.createElement('input');
heroSectionCTAlink.classList.add('heroSectionCTAlink');
heroSectionCTAlink.type = 'button';
heroSectionCTAlink.value = heroSectionText[0].CTAtext;
heroSectionCTAlinkEl.appendChild(heroSectionCTAlink);
heroSectionCTAlinkDiv.appendChild(heroSectionCTAlinkEl);
heroSectionTextDiv.appendChild(heroSectionCTAlinkDiv);


// Images with text --Section
// variables
const imagesWithTextVariables = [
    {
        imageURL: 'https://cdn.shopify.com/s/files/1/0024/9551/2691/files/pexels-pixabay-358046.jpg?v=1665206414',
        imageAltText: 'Person skiing in deep powder',
        heading: 'Skiing',
        subText: 'Get guided by our experienced riders to find the best powder on the both Whistler and Blackcomb!',
        CTAtext: 'Book Now!',
        CTAlink: '/#'
    },
    {
        imageURL: 'https://cdn.shopify.com/s/files/1/0024/9551/2691/files/pexels-visit-almaty-848612.jpg?v=1665206520',
        imageAltText: '3 snowboarders going up to the mountain',
        heading: 'Snowboarding',
        subText: 'Get quick access to teh lift, and skip the lines to get the most out of your time in Whistler!',
        CTAtext: 'Book Now!',
        CTAlink: '/#'
    },
    {
        imageURL: 'https://cdn.shopify.com/s/files/1/0024/9551/2691/files/pexels-irene-lasus-90454.jpg?v=1665206608',
        imageAltText: 'Person mountain biking down a trail in Whistler',
        heading: 'Mountain Biking',
        subText: 'Find the best trails for your skill level in the Whistler Bike Park as well as the surrounding trails!',
        CTAtext: 'Book Now!',
        CTAlink: '/#'
    },
    {
        imageURL: 'https://cdn.shopify.com/s/files/1/0024/9551/2691/files/pexels-eric-sanman-1365425.jpg?v=1665206645',
        imageAltText: '3 people hiking up a mountain with lots of gear',
        heading: 'Hiking',
        subText: 'Experience the beautiful scenery that Whistler has to offer following our experienced tour guides!',
        CTAtext: 'Book Now!',
        CTAlink: '/#'
    }
];

// Images with text DOM output
const imageWithTextSectionContainer = document.querySelector('.imagesAndTextSection');

imagesWithTextVariables.forEach(section => {

const imagesWithTextDivEachItem = document.createElement('div');
imagesWithTextDivEachItem.classList.add('imagesWithTextDivEachItem');

const imagesWithTextImgDiv = document.createElement('div');
imagesWithTextImgDiv.classList.add('imagesWithTextImgDiv');
const imagesWithTextImgEl = document.createElement('img');
imagesWithTextImgEl.classList.add('imagesWithTextImgEl');
imagesWithTextImgEl.src = section.imageURL;
imagesWithTextImgEl.alt = section.imageAltText;
imagesWithTextImgDiv.appendChild(imagesWithTextImgEl);

const imagesWithTextTextDiv = document.createElement('div');
imagesWithTextTextDiv.classList.add('imagesWithTextTextDiv');
const imagesWithTextTextHeader = document.createElement('h2');
imagesWithTextTextHeader.classList.add('imagesWithTextTextHeader');
imagesWithTextTextHeader.appendChild(document.createTextNode(section.heading));
const imagesWithTextTextPar = document.createElement('p');
imagesWithTextTextPar.classList.add('imagesWithTextTextPar');
imagesWithTextTextPar.appendChild(document.createTextNode(section.subText));
imagesWithTextTextDiv.appendChild(imagesWithTextTextHeader);
imagesWithTextTextDiv.appendChild(imagesWithTextTextPar);

imagesWithTextDivEachItem.appendChild(imagesWithTextImgDiv);
imagesWithTextDivEachItem.appendChild(imagesWithTextTextDiv);
imageWithTextSectionContainer.appendChild(imagesWithTextDivEachItem);

});

