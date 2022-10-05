// header --Section
// header variables
const headerLogoSrc = '/Images/Whistler Bungee.png'
const headerLogoAlt = 'Whistler Adventures Logo';
const headerBusinessName = 'Whistler Adventures';
const headerMobileBackgroundSrc = '/Images/whistler village at night.jpg';
const headerMobileBackgroundAlt = 'Mountain with a lake and forest';
const headerNavItems = [
    {
        item: 'Home',
        link: '#'
    }, 
    {
        item: 'Adventures',
        link: '/#adventures'
    },
    {
        item: 'About Us',
        link: '/#aboutUs'
    },
    {
        item: 'Contact Us',
        link: '/#contactUs'
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
    const headerItemButton = document.createElement('button');
    headerItemButton.classList.add('headerItemButton');
    headerItemButtonLinkEl.appendChild(headerItemButton);
    headerItemDiv.appendChild(headerItemButtonLinkEl);
    headerItemButtonLinkEl.href = item.link;
    headerItemContainer.appendChild(headerItemDiv);
    headerItemButton.appendChild(document.createTextNode(item.item));
    headerItemButton.href = item.link;
});

// Hero --Section
// variables for hero section
const heroSectionText = [
    {
        preText: 'Explore what',
        mainText: 'Whistler BC',
        postText: 'has to offer!',
        CTAtext: 'Book Now',
        CTAlink: '#'

    }
];
const heroSectonBackground = [
    {
        url: '/Images/snowmobile tour.jpg',
        altText: 'Group of people snowmobiling in Whistler'
    }
]

// Hero section output to DOM
const heroSectionDiv = document.querySelector('.heroSection');

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

const heroSectionCTAlink = document.createElement('a');
heroSectionCTAlink.classList.add('heroSectionCTAlink');
heroSectionCTAlink.href = heroSectionText[0].CTAlink;
const heroSectionCTABtnEl = document.createElement('button');
heroSectionCTABtnEl.classList.add('heroSectionCTABtnEl');
heroSectionCTABtnEl.appendChild(document.createTextNode(heroSectionText[0].CTAtext));
heroSectionCTAlink.appendChild(heroSectionCTABtnEl);
heroSectionTextDiv.appendChild(heroSectionCTAlink);

// background 

// Instead of adding a div img as the second layer,
// just add the background as a background image URL
// and set the background to cover in JS  


// Images with text --Section
// variables
const imagesWithTextVariables = [
    {
        imageURL: '/Images/skiing in powder.jpg',
        imageAltText: 'Person skiing in deep powder',
        heading: 'Skiing & Snowboarding',
        subText: 'Get guided by our experienced riders to find the best powder on the both Whistler and Blackcomb!',
        CTAtext: 'Book Now!',
        CTAlink: '/#'
    },
    {
        imageURL: '/Images/hiking in whistler.avif',
        imageAltText: 'People hiking in Whistler',
        heading: 'Hiking',
        subText: 'Enjoy the best views Whistler can offer!',
        CTAtext: 'Book Now!',
        CTAlink: '/#'
    },
    {
        imageURL: '/Images/hiking on top of a mountain.avif',
        imageAltText: 'Person mountain biking down a trail in Whistler',
        heading: 'Mountain Biking',
        subText: 'Find the best trails for your skill level in the Whistler Bike Park as well as the surrounding trails!',
        CTAtext: 'Book Now!',
        CTAlink: '/#'
    },
    {
        imageURL: '/Images/river within a forest from the top view.jpg',
        imageAltText: 'Top view of a river flowing through a forest',
        heading: 'White Water Rafting',
        subText: 'Experience the excitement of river rafting!',
        CTAtext: 'Book Now!',
        CTAlink: '/#'
    }
];

// Images with text DOM output
const imageWithTextSectionContainer = document.querySelector('.imagesAndTextSection');

imagesWithTextVariables.forEach(section => {
    const imageWithTextDiv = document.createElement('div');
    imageWithTextDiv.classList.add('imageWithTextDiv');
    imageWithTextSectionContainer.appendChild();
});