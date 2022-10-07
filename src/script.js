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

// background 



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
});

