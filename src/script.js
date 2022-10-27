// Look for the id's for the scroll identifier using "--id"

// header --Section
// header variables
const headerNavItems = [
    {
        item: 'Book Now',
        link: '/#bookNow',
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
        foregroundURL: 'https://cdn.shopify.com/s/files/1/0655/0051/2490/files/kisspng-tree-shulin-district-forest-green-green-gradient-forest-5a924d0e0487c1.8541673415195374220186_1_1.png?v=1665551713',
        midgroundURL: 'https://cdn.shopify.com/s/files/1/0655/0051/2490/files/kisspng-stubai-alps-stubai-glacier-stubaital-piste-snow-mountain-glacier-5a9e00e97547e3.0245348315203043614804.png?v=1665468788',
        backgroundURL: 'https://cdn.shopify.com/s/files/1/0655/0051/2490/files/5a28b836c89407.7959156615126180388216_1.png?v=1665551884'
    }
]

// Hero section output to DOM
const heroSectionDiv = document.querySelector('.heroSection');
heroSectionDiv.setAttribute('id', 'bookNow');

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
        CTAlink: '/#',
        TextBackgroundURL: 'https://cdn.shopify.com/s/files/1/0655/0051/2490/files/kisspng-ski-poles-freestyle-skiing-sticker-clip-art-acrobat-5b4a91ebecc5e8.5227950715316136759698.png?v=1665639366'
    },
    {
        imageURL: 'https://cdn.shopify.com/s/files/1/0024/9551/2691/files/pexels-visit-almaty-848612.jpg?v=1665206520',
        imageAltText: '3 snowboarders going up to the mountain',
        heading: 'Snowboarding',
        subText: 'Get quick access to teh lift, and skip the lines to get the most out of your time in Whistler!',
        CTAtext: 'Book Now!',
        CTAlink: '/#',
        TextBackgroundURL: 'https://cdn.shopify.com/s/files/1/0655/0051/2490/files/kisspng-snowboarding-silhouette-skiing-5b0a79f5022ed7.458272691527413237009.png?v=1665639342'
    },
    {
        imageURL: 'https://cdn.shopify.com/s/files/1/0024/9551/2691/files/pexels-irene-lasus-90454.jpg?v=1665206608',
        imageAltText: 'Person mountain biking down a trail in Whistler',
        heading: 'Mountain Biking',
        subText: 'Find the best trails for your skill level in the Whistler Bike Park as well as the surrounding trails!',
        CTAtext: 'Book Now!',
        CTAlink: '/#',
        TextBackgroundURL: 'https://cdn.shopify.com/s/files/1/0655/0051/2490/files/kisspng-mountain-bike-bicycle-cycling-silhouette-bmx-5abf773ddaa216.1716471015224973418955.png?v=1665639396'
    },
    {
        imageURL: 'https://cdn.shopify.com/s/files/1/0024/9551/2691/files/pexels-eric-sanman-1365425.jpg?v=1665206645',
        imageAltText: '3 people hiking up a mountain with lots of gear',
        heading: 'Hiking',
        subText: 'Experience the beautiful scenery that Whistler has to offer following our experienced tour guides!',
        CTAtext: 'Book Now!',
        CTAlink: '/#',
        TextBackgroundURL: 'https://cdn.shopify.com/s/files/1/0655/0051/2490/files/kisspng-hiking-mountaineering-clip-art-hiking-5abe0d0db76dc9.2416775215224046217513.png?v=1665639418'
    }
];

// Images with text DOM output
const imageWithTextSectionContainer = document.querySelector('.imagesAndTextSection');
imageWithTextSectionContainer.setAttribute('id', 'schedule');

imagesWithTextVariables.forEach(section => {

const imagesWithTextDivEachItem = document.createElement('div');
imagesWithTextDivEachItem.classList.add('imagesWithTextDivEachItem');

// images
const imagesWithTextImgDiv = document.createElement('div');
imagesWithTextImgDiv.classList.add('imagesWithTextImgDiv');
const imagesWithTextImgEl = document.createElement('img');
imagesWithTextImgEl.classList.add('imagesWithTextImgEl');
imagesWithTextImgEl.src = section.imageURL;
imagesWithTextImgEl.alt = section.imageAltText;
imagesWithTextImgDiv.appendChild(imagesWithTextImgEl);

// text
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

// call-to-action button
const imageWithTextButtonDiv = document.createElement('div');
imageWithTextButtonDiv.classList.add('imageWithTextButtonDiv');
const imageWithTextButtonLink = document.createElement('a');
imageWithTextButtonLink.classList.add('imageWithTextButtonLink');
const imageWithTextButtonEl = document.createElement('button');
imageWithTextButtonEl.classList.add('imageWithTextButtonEl');
imageWithTextButtonLink.href = section.CTAlink;
imageWithTextButtonEl.appendChild(document.createTextNode(section.CTAtext));
imageWithTextButtonLink.appendChild(imageWithTextButtonEl);
imageWithTextButtonDiv.appendChild(imageWithTextButtonLink);
imagesWithTextTextDiv.appendChild(imageWithTextButtonDiv);

imagesWithTextDivEachItem.appendChild(imagesWithTextImgDiv);
imagesWithTextDivEachItem.appendChild(imagesWithTextTextDiv);
imageWithTextSectionContainer.appendChild(imagesWithTextDivEachItem);

// text background black image
const imageWithTextTextBackgroundDiv = document.createElement('div');
imageWithTextTextBackgroundDiv.classList.add('imageWithTextTextBackgroundDiv');
const imageWithTextTextBackgroundImg = document.createElement('img');
imageWithTextTextBackgroundImg.classList.add('imageWithTextTextBackgroundImg');
imageWithTextTextBackgroundImg.src = section.TextBackgroundURL;
imageWithTextTextBackgroundDiv.appendChild(imageWithTextTextBackgroundImg);
imagesWithTextTextDiv.appendChild(imageWithTextTextBackgroundDiv);
});

// Pop-up animation on page load for image with text section
const imageWithTextObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});
const imageWithTexthiddenElements = document.querySelectorAll('.imageWithTextTextBackgroundImg');
imageWithTexthiddenElements.forEach((el) => imageWithTextObserver.observe(el));


// video with text overlay --Section
//variables 
const videoWithTextOverlayVariables = [
    {
        heading: 'About Us',
        mainCotent: 'Whistler Adventures is set up to make booking your activities in Whistler as easy as possible. We live here, and we’ve seen how hard it can be to decide where to book your experiences. We’ve brought all the top tour operators together onto this one website to make your life easier.',
        postContent: 'Adventure with the local experts that can provide you the goods!',
        videoURL: 'https://cdn.shopify.com/videos/c/o/v/aa752fa77a1a40efa3af5220cd230e7f.mp4',
        videoAltText: 'people skiing, snowboard, mountain biking, and hiking.'
    }
];
const videoWithTextOverlayButtonVariables = [
    {
        buttonText: 'Family Adventures',
        buttonURL: '#'
    }, 
    {
        buttonText: 'Business Trips',
        buttonURL: '#',
    },
    {
        buttonText: 'Celebration & Parties',
        buttonURL: '#',
    },
    {
        buttonText: 'Special Events',
        buttonURL: '#'
    }
]

const videoWithTextOverlayContainer = document.querySelector('.videoTextOverlaySection');
videoWithTextOverlayContainer.setAttribute('id', 'aboutUs'); // --id

//mountain svg divider
videoWithTextOverlayContainer.innerHTML += `
<svg class="videoTextOverlaySVG" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
    <path fill="#1d1d1b" fill-opacity="1" d="M0,224L240,160L480,256L720,128L960,192L1200,96L1440,192L1440,0L1200,0L960,0L720,0L480,0L240,0L0,0Z"></path>
</svg>
`;

//video background section
const videoWithTextOverlayVideoDiv = document.createElement('div');
videoWithTextOverlayVideoDiv.classList.add('videoWithTextOverlayVideoDiv');
const videoWithTextOverlayVideoEl = document.createElement('video');
videoWithTextOverlayVideoEl.classList.add('videoWithTextOverlayVideoEl');
const videoWithTextOverlayVideoSrc = document.createElement('source');
videoWithTextOverlayVideoSrc.classList.add('videoWithTextOverlayVideoSrc');
videoWithTextOverlayVideoSrc.src = videoWithTextOverlayVariables[0].videoURL;
videoWithTextOverlayVideoEl.muted = true;
videoWithTextOverlayVideoEl.loop = true;
videoWithTextOverlayVideoEl.autoplay = true;
videoWithTextOverlayVideoEl.appendChild(videoWithTextOverlayVideoSrc);
videoWithTextOverlayVideoDiv.appendChild(videoWithTextOverlayVideoEl);
videoWithTextOverlayContainer.appendChild(videoWithTextOverlayVideoDiv);

//the text
const videoWithTextOverlayTextButtonDiv = document.createElement('div');
videoWithTextOverlayTextButtonDiv.classList.add('videoWithTextOverlayTextDiv');

const videoWithTextOverlayHeadingEl = document.createElement('h2');
videoWithTextOverlayHeadingEl.classList.add('videoWithTextOverlayHeadingEl');
videoWithTextOverlayHeadingEl.appendChild(document.createTextNode(videoWithTextOverlayVariables[0].heading));
videoWithTextOverlayTextButtonDiv.appendChild(videoWithTextOverlayHeadingEl);
const videoWithTextOverlayMainTextEl = document.createElement('p');
videoWithTextOverlayMainTextEl.classList.add('videoWithTextOverlayMainTextEl');
videoWithTextOverlayMainTextEl.appendChild(document.createTextNode(videoWithTextOverlayVariables[0].mainCotent));
videoWithTextOverlayTextButtonDiv.appendChild(videoWithTextOverlayMainTextEl);

const videoWithTextOverlaySubTextEl = document.createElement('p');
videoWithTextOverlaySubTextEl.classList.add('videoWithTextOverlaySubTextEl');
videoWithTextOverlaySubTextEl.appendChild(document.createTextNode(videoWithTextOverlayVariables[0].postContent));
videoWithTextOverlayTextButtonDiv.appendChild(videoWithTextOverlaySubTextEl);
videoWithTextOverlayContainer.appendChild(videoWithTextOverlayTextButtonDiv);

// the buttons
const videoWithTextOverlayButtonDivs = document.createElement('div');
videoWithTextOverlayButtonDivs.classList.add('videoWithTextOverlayButtonDiv');
videoWithTextOverlayTextButtonDiv.appendChild(videoWithTextOverlayButtonDivs);

const buttonDiv = document.createElement('div');
buttonDiv.classList.add('videoWithTextOverlayButtonDiv');
videoWithTextOverlayButtonVariables.forEach(button => {
    const buttonLinkEl = document.createElement('a');
    buttonLinkEl.classList.add('videoWithTextOverlayButtonEl');
    buttonLinkEl.href = button.buttonURL;

    const buttonEl = document.createElement('button');
    buttonEl.classList.add('videoWithTextOverlayButton');
    buttonEl.appendChild(document.createTextNode(button.buttonText));

    buttonLinkEl.appendChild(buttonEl);
    buttonDiv.appendChild(buttonLinkEl);
    videoWithTextOverlayTextButtonDiv.appendChild(buttonDiv);
});


// Contact Us --Section
const contactUsVariables = [
    {
        header: 'Have Questions?',
        paragraph: `If the FAQ section below doesn't answer your question, please fill out our contact form to get in touch!`
    }
];
const contactUsFAQvariables = [
    {
        question: 'Do you offer refunds?',
        answer: 'We offer refunds if the cancellation is 30 days away from the date of the booking.'
    },
    {
        question: 'Can you guarantee that the snow will be amazing?',
        answer: 'We cannot guarantee that the conditions will be perfect.'
    },
    {
        question: 'Do we get to skip the lines with these experiences?',
        answer: 'We have partnered with Whistler and Blackcomb, so you will be able to skip the lines!'
    },
    {
        question: 'What skill level do I have to be to enjoy my time?',
        answer: `We offer adventures for any skill level - from beginner to expert, we'll make sure you have a blast no matter what your skill level!`
    }
];

// contact us section output to DOM
const contactUsContainer = document.querySelector('.contactUsSection');
contactUsContainer.setAttribute('id', 'contactUs')

    // info input side
const contactUsInputDiv = document.createElement('div');
contactUsInputDiv.classList.add('contactUsInputDiv');

    // first name + last name
const contactUsNameDiv = document.createElement('div');
contactUsNameDiv.classList.add('contactUsNameDiv');

    // first name
const contactUSFirstNameLabel = document.createElement('label');
contactUSFirstNameLabel.classList.add('contactUSFirstNameLabel');
contactUSFirstNameLabel.appendChild(document.createTextNode('First Name:'));
const contactUSFirstName = document.createElement('input');
contactUSFirstName.classList.add('contactUSFirstName');
contactUSFirstName.type = 'text';
contactUSFirstName.required = true;
contactUSFirstNameLabel.appendChild(contactUSFirstName);
contactUsNameDiv.appendChild(contactUSFirstNameLabel);

    // last name 
const contactUsLastNameLabel = document.createElement('label');
contactUsLastNameLabel.classList.add('contactUsLastNameLabel');
contactUsLastNameLabel.appendChild(document.createTextNode('Last Name:'));
const contactUsLastName = document.createElement('input');
contactUsLastName.classList.add('contactUsLastName');
contactUsLastName.type = 'text';
contactUsLastName.required = true;
contactUsLastNameLabel.appendChild(contactUsLastName);
contactUsNameDiv.appendChild(contactUsLastNameLabel);
contactUsInputDiv.appendChild(contactUsNameDiv)

    // email
const contactUsEmailLabel = document.createElement('label')
contactUsEmailLabel.classList.add('contactUsEmailLabel');
contactUsEmailLabel.appendChild(document.createTextNode('Email:'));
const contactUsEmail = document.createElement('input');
contactUsEmail.classList.add('contactUsEmail');
contactUsEmail.type = 'email';
contactUsEmail.required = true;
contactUsEmailLabel.appendChild(contactUsEmail);
contactUsInputDiv.appendChild(contactUsEmailLabel);

    // message
const contactUsMessageLabel = document.createElement('label');
contactUsMessageLabel.classList.add('contactUsMessageLabel');
contactUsMessageLabel.appendChild(document.createTextNode('Message:'));
const contactUsMessage = document.createElement('textarea');
contactUsMessage.classList.add('contactUsMessage');
contactUsMessage.type = 'text';
contactUsMessage.required = true;
contactUsMessageLabel.appendChild(contactUsMessage);
contactUsInputDiv.appendChild(contactUsMessageLabel);

    // send message button
const contactUsButton = document.createElement('button');
contactUsButton.classList.add('contactUsButton');
contactUsButton.appendChild(document.createTextNode('Send Message'));
contactUsInputDiv.appendChild(contactUsButton);
contactUsContainer.appendChild(contactUsInputDiv);

// text and FAQ drop-down section
const contactUsFAQDiv = document.createElement('div');
contactUsFAQDiv.classList.add('contactUsFAQDiv');
contactUsContainer.appendChild(contactUsFAQDiv);

const FAQheader = document.createElement('h3');
FAQheader.classList.add('FAQheader');
FAQheader.appendChild(document.createTextNode(contactUsVariables[0].header));
contactUsFAQDiv.appendChild(FAQheader);
const FAQpar = document.createElement('p');
FAQpar.classList.add('FAQpar');
FAQpar.appendChild(document.createTextNode(contactUsVariables[0].paragraph));
contactUsFAQDiv.appendChild(FAQpar);

contactUsFAQvariables.forEach(QandA => {
    
    //question
    const questionDiv = document.createElement('div');
    questionDiv.classList.add('questionDiv');
    const questionEl = document.createElement('p');
    questionEl.appendChild(document.createTextNode(QandA.question));
    questionDiv.appendChild(questionEl);

    //arrow to open
    const openAnswerButtonEl = document.createElement('button');
    openAnswerButtonEl.classList.add('openAnswerButtonEl');
    openAnswerButtonEl.appendChild(document.createTextNode('▼'));
    questionDiv.appendChild(openAnswerButtonEl);
    contactUsFAQDiv.appendChild(questionDiv);

    //answer
    const answerDiv = document.createElement('div');
    answerDiv.classList.add('answerDiv');
    const answerEl = document.createElement('p');
    answerEl.classList.add('answerEl');
    answerEl.appendChild(document.createTextNode(QandA.answer));
    answerDiv.appendChild(answerEl);
    contactUsFAQDiv.appendChild(answerDiv);
});

const QandAArrows = document.querySelectorAll('.openAnswerButtonEl');
const answerDivs = document.querySelectorAll('.answerDiv');
const questionDivs = document.querySelectorAll('.questionDiv');
const answerElements = document.querySelectorAll('.answerEl');
for (let i = 0; i < QandAArrows.length; i++) {
    QandAArrows[i].addEventListener('click', () => {
        
        if (answerDivs[i].style.display === 'block') {
            answerDivs[i].style.display = 'none';
            // animation
            QandAArrows[i].style.transform = 'rotate(0deg)';
            QandAArrows[i].style.color = '#27b5bd';
            answerDivs[i].style.borderBottom = 'none';
            questionDivs[i].style.borderBottom = 'solid 1px #27b5bd';
        } else {
            answerDivs[i].style.display = 'block';
            //animation
            QandAArrows[i].style.transform = 'rotate(180deg)';
            QandAArrows[i].style.color = '#cf2e2e';
            answerDivs[i].style.borderBottom = 'solid 1px #cf2e2e';
            questionDivs[i].style.borderBottom = 'none';
        }
    });
}


// code for the email submission
contactUsButton.addEventListener('click', function() {
    
    if (contactUSFirstName.value != "" && contactUsLastName.value != "" && contactUsEmail.value != "" && contactUsMessage.value != "") {

        contactUsInputDiv.textContent = '';
        const thankYouDiv = document.createElement('div');
        thankYouDiv.classList.add('thankYouDiv');
        contactUsInputDiv.appendChild(thankYouDiv);

        const thankYouMessageHeader = document.createElement('h3');
        thankYouMessageHeader.classList.add('thankYouMessage');
        thankYouMessageHeader.appendChild(document.createTextNode('Thank you for reaching out!'))
        thankYouDiv.appendChild(thankYouMessageHeader);

        const thankYouMessage = document.createElement('p');
        thankYouMessage.classList.add('thankYouMessage');
        thankYouMessage.appendChild(document.createTextNode('We will get back to you as soon as we can!'));
        thankYouDiv.appendChild(thankYouMessage);

    } else {
        alert("Please complete the form before submitting the message. Thank you!");
    }

})



// Footer --Section
// footer variables
const footerBackground = [
    {
        backgroundURL: 'https://cdn.shopify.com/s/files/1/0655/0051/2490/files/pexels-tyler-lastovich-772803.jpg?v=1666684386',
    }
]
const footerContactInfo = [
    {
        businessName: 'Whistler Adventures',
        email: 'contact@whistleradventures.com',
        address: '123 Whistler Way, Whistler, BC V0N 1B4'
    },
    {
        addressLink: 'https://www.google.com/maps/place/Parking+Lot+2+(Totem+Icon)/@50.114891,-122.9548031,17z/data=!4m13!1m7!3m6!1s0x54873cb203957b87:0x4ab741e875f5cff6!2sWhistler,+BC!3b1!8m2!3d50.1161686!4d-122.9535117!3m4!1s0x5487234cd4f624ed:0x2152e30fb04f1418!8m2!3d50.1157799!4d-122.9525096'
    }
]
const footerMenuList = [
    {
        itemText: 'Book Now',
        itemURL: '/#bookNow'
    },
    {
        itemText: 'Services',
        itemURL: '/#schedule'
    },
    {
        itemText: 'About Us',
        itemURL: '/#aboutUs'
    },
    {
        itemText: 'Contact Us',
        itemURL: '/#contactUs'
    }
];
const footerSocialLinks = [
    {
        //Facebook 
        icon: 'https://cdn.shopify.com/s/files/1/0655/0051/2490/files/icons8-facebook-64_2.png?v=1666769406',
        link: 'https://www.facebook.com/'
    },
    {
        //Instagram 
        icon: 'https://cdn.shopify.com/s/files/1/0655/0051/2490/files/icons8-instagram-64.png?v=1666769377',
        link: 'https://www.instagram.com/'
    },
    {
        // TripAdvisor 
        icon: 'https://cdn.shopify.com/s/files/1/0655/0051/2490/files/tripadvisor.png?v=1666769508',
        link: 'https://www.tripadvisor.ca/'
    },
    {
        // Yelp
        icon: 'https://cdn.shopify.com/s/files/1/0655/0051/2490/files/yelp.png?v=1666769570',
        link: 'https://www.yelp.ca/'
    },
]

//footer output onto the DOM

//background image 
const footerContainer = document.querySelector('footer');
footerContainer.style.background = "linear-gradient(rgba(0,0,0,0.85), rgba(0,0,0,95)), url('"+footerBackground[0].backgroundURL+"')";
footerContainer.style.backgroundSize = 'cover';
footerContainer.style.backgroundPosition = 'bottom';

// contact info container
const footerContactContainer = document.createElement('div');
footerContactContainer.classList.add('footerContactContainer');
footerContainer.appendChild(footerContactContainer);

//header
const footerContactHeader = document.createElement('h3');
footerContactHeader.classList.add('footerContactHeader');
footerContactHeader.appendChild(document.createTextNode(footerContactInfo[0].businessName));
footerContactContainer.appendChild(footerContactHeader);

//contact info items
const footerEmailDiv = document.createElement('div');
footerEmailDiv.classList.add('footerEmailDiv');
footerContactContainer.appendChild(footerEmailDiv);

const footerEmailLink = document.createElement('a');
footerEmailLink.classList.add('footerEmailLink');
const emailHref = 'mailto:'.concat(footerContactInfo[0].email);
footerEmailLink.href = emailHref;
footerEmailDiv.appendChild(footerEmailLink);

const footerEmailIcon = document.createElement('img');
footerEmailIcon.src = 'https://cdn.shopify.com/s/files/1/0655/0051/2490/files/icons8-envelope-64.png?v=1666720187';
footerEmailIcon.classList.add('footerEmailIcon');
footerEmailLink.appendChild(footerEmailIcon);

const footerEmailText = document.createElement('p');
footerEmailText.classList.add('footerEmailText');
footerEmailText.appendChild(document.createTextNode(footerContactInfo[0].email));
footerEmailLink.appendChild(footerEmailText);

//location 
const footerLocationDiv = document.createElement('div');
footerLocationDiv.classList.add('footerLocationDiv');
footerContactContainer.appendChild(footerLocationDiv);

const footerLocationLink = document.createElement('a');
footerLocationLink.classList.add('footerEmailLink');
footerLocationLink.href = footerContactInfo[1].addressLink;
footerLocationDiv.appendChild(footerLocationLink);

const footerLocationImg = document.createElement('img');
footerLocationImg.classList.add('footerLocationImg');
footerLocationImg.src = 'https://cdn.shopify.com/s/files/1/0655/0051/2490/files/icons8-home-address-64.png?v=1666720265';
footerLocationLink.appendChild(footerLocationImg);

const footerLocationAddress = document.createElement('p');
footerLocationAddress.classList.add('footerLocationAddress');
footerLocationAddress.appendChild(document.createTextNode(footerContactInfo[0].address));
footerLocationLink.appendChild(footerLocationAddress);

//menu items
const footerMenuDiv = document.createElement('div');
footerMenuDiv.classList.add('footerMenuDiv');
footerContainer.appendChild(footerMenuDiv);

const menuItemHeader = document.createElement('h3');
menuItemHeader.classList.add('menuItemHeader');
menuItemHeader.appendChild(document.createTextNode('Quick Links'));
footerMenuDiv.appendChild(menuItemHeader);

const footerMenuUL = document.createElement('ul');
//menu items
footerMenuList.forEach(item => {
    const menuItem = document.createElement('li');
    menuItem.classList.add('menuItemLink');

    const menuItemLink = document.createElement('a');
    menuItemLink.href = item.itemURL;
    menuItemLink.appendChild(document.createTextNode(item.itemText));

    menuItem.appendChild(menuItemLink);
    footerMenuUL.appendChild(menuItem);
    footerMenuDiv.appendChild(footerMenuUL);
})

// social icons
const footerSocialDiv = document.createElement('div');
footerSocialDiv.classList.add('footerSocialDiv');
footerContainer.appendChild(footerSocialDiv);

footerSocialLinks.forEach(link => {
    const linkDiv = document.createElement('div');
    linkDiv.classList.add('linkDiv');

    const linkHref = document.createElement('a');
    linkHref.classList.add('linkHref');
    linkHref.href = link.link;

    const linkIcon = document.createElement('img');
    linkIcon.classList.add('linkIcon');
    linkIcon.src = link.icon;

    linkHref.appendChild(linkIcon);
    linkDiv.appendChild(linkHref);
    footerSocialDiv.appendChild(linkDiv);
    

});