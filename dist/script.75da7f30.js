// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"script.js":[function(require,module,exports) {
// Look for the id's for the scroll identifier using "--id"
// header --Section
// header variables
var headerNavItems = [{
  item: 'Book Now',
  link: '/#bookNow',
  icon: 'https://cdn.shopify.com/s/files/1/0024/9551/2691/files/icons8-national-park-64.png?v=1665121376'
}, {
  item: 'Schedule',
  link: '/#schedule',
  icon: 'https://cdn.shopify.com/s/files/1/0024/9551/2691/files/icons8-calendar-64.png?v=1665122827'
}, {
  item: 'About Us',
  link: '/#aboutUs',
  icon: 'https://cdn.shopify.com/s/files/1/0024/9551/2691/files/icons8-tourist-guide-1-64.png?v=1665121336'
}, {
  item: 'Contact Us',
  link: '/#contactUs',
  icon: 'https://cdn.shopify.com/s/files/1/0024/9551/2691/files/icons8-at-sign-64.png?v=1665121219'
}]; // Right side section Output onto DOM for header items

var body = document.querySelector('body');
var headerItemContainer = document.createElement('div');
headerItemContainer.classList.add('headerItemContainer');
body.appendChild(headerItemContainer);
headerNavItems.forEach(function (item) {
  var headerItemDiv = document.createElement('div');
  headerItemDiv.classList.add('headerItemDiv');
  var headerItemButtonLinkEl = document.createElement('a');
  headerItemButtonLinkEl.classList.add('headerItemButtonLinkEl');
  headerItemButtonLinkEl.href = item.link;
  var headerItemIconEl = document.createElement('img');
  headerItemIconEl.classList.add('headerItemIconEl');
  headerItemIconEl.src = item.icon;
  headerItemIconEl.alt = item.item;
  headerItemButtonLinkEl.appendChild(headerItemIconEl);
  headerItemDiv.appendChild(headerItemButtonLinkEl);
  headerItemContainer.appendChild(headerItemDiv);
}); // Hero --Section
// variables for hero section

var heroSectionText = [{
  preText: 'Explore what',
  mainText: 'Whistler, BC',
  postText: 'has to offer!',
  CTAtext: 'Book Now',
  CTAlink: '#'
}];
var heroSectonBackground = [{
  foregroundURL: 'https://cdn.shopify.com/s/files/1/0655/0051/2490/files/kisspng-tree-shulin-district-forest-green-green-gradient-forest-5a924d0e0487c1.8541673415195374220186_1_1.png?v=1665551713',
  midgroundURL: 'https://cdn.shopify.com/s/files/1/0655/0051/2490/files/kisspng-stubai-alps-stubai-glacier-stubaital-piste-snow-mountain-glacier-5a9e00e97547e3.0245348315203043614804.png?v=1665468788',
  backgroundURL: 'https://cdn.shopify.com/s/files/1/0655/0051/2490/files/5a28b836c89407.7959156615126180388216_1.png?v=1665551884'
}]; // Hero section output to DOM

var heroSectionDiv = document.querySelector('.heroSection');
heroSectionDiv.setAttribute('id', 'bookNow'); // background using Parallax

var heroSectionBackgroundImgEl = document.createElement('img');
heroSectionBackgroundImgEl.classList.add('heroSectionBackgroundImgEl');
heroSectionBackgroundImgEl.src = heroSectonBackground[0].backgroundURL;
var heroSectionmidgroundImgEl = document.createElement('img');
heroSectionmidgroundImgEl.classList.add('heroSectionMidgroundImgEl');
heroSectionmidgroundImgEl.src = heroSectonBackground[0].midgroundURL;
var heroSectionForegroundImgEl = document.createElement('img');
heroSectionForegroundImgEl.classList.add('heroSectionForegroundImgEl');
heroSectionForegroundImgEl.src = heroSectonBackground[0].foregroundURL;
heroSectionDiv.appendChild(heroSectionBackgroundImgEl);
heroSectionDiv.appendChild(heroSectionmidgroundImgEl);
heroSectionDiv.appendChild(heroSectionForegroundImgEl); // text

var heroSectionTextDiv = document.createElement('div');
heroSectionTextDiv.classList.add('heroSectionTextDiv');
heroSectionDiv.appendChild(heroSectionTextDiv);
var heroSectionPreTextEl = document.createElement('p');
heroSectionPreTextEl.classList.add('heroSectionPreTextEl');
heroSectionPreTextEl.appendChild(document.createTextNode(heroSectionText[0].preText));
heroSectionTextDiv.appendChild(heroSectionPreTextEl);
var heroSectionMainTextEl = document.createElement('h1');
heroSectionMainTextEl.classList.add('heroSectionMainTextEl');
heroSectionMainTextEl.appendChild(document.createTextNode(heroSectionText[0].mainText));
heroSectionTextDiv.appendChild(heroSectionMainTextEl);
var heroSectionPostText = document.createElement('p');
heroSectionPostText.classList.add('heroSectionPostText');
heroSectionPostText.appendChild(document.createTextNode(heroSectionText[0].postText));
heroSectionTextDiv.appendChild(heroSectionPostText);
var heroSectionCTAlinkDiv = document.createElement('div');
heroSectionCTAlinkDiv.classList.add('heroSectionCTAlinkDiv');
var heroSectionCTAlinkEl = document.createElement('a');
heroSectionCTAlinkEl.href = heroSectionText[0].CTAlink;
heroSectionCTAlinkEl.classList.add('heroSectionCTAlinkEl');
var heroSectionCTAlink = document.createElement('input');
heroSectionCTAlink.classList.add('heroSectionCTAlink');
heroSectionCTAlink.type = 'button';
heroSectionCTAlink.value = heroSectionText[0].CTAtext;
heroSectionCTAlinkEl.appendChild(heroSectionCTAlink);
heroSectionCTAlinkDiv.appendChild(heroSectionCTAlinkEl);
heroSectionTextDiv.appendChild(heroSectionCTAlinkDiv); // Images with text --Section
// variables

var imagesWithTextVariables = [{
  imageURL: 'https://cdn.shopify.com/s/files/1/0024/9551/2691/files/pexels-pixabay-358046.jpg?v=1665206414',
  imageAltText: 'Person skiing in deep powder',
  heading: 'Skiing',
  subText: 'Get guided by our experienced riders to find the best powder on the both Whistler and Blackcomb!',
  CTAtext: 'Book Now!',
  CTAlink: '/#',
  TextBackgroundURL: 'https://cdn.shopify.com/s/files/1/0655/0051/2490/files/kisspng-ski-poles-freestyle-skiing-sticker-clip-art-acrobat-5b4a91ebecc5e8.5227950715316136759698.png?v=1665639366'
}, {
  imageURL: 'https://cdn.shopify.com/s/files/1/0024/9551/2691/files/pexels-visit-almaty-848612.jpg?v=1665206520',
  imageAltText: '3 snowboarders going up to the mountain',
  heading: 'Snowboarding',
  subText: 'Get quick access to teh lift, and skip the lines to get the most out of your time in Whistler!',
  CTAtext: 'Book Now!',
  CTAlink: '/#',
  TextBackgroundURL: 'https://cdn.shopify.com/s/files/1/0655/0051/2490/files/kisspng-snowboarding-silhouette-skiing-5b0a79f5022ed7.458272691527413237009.png?v=1665639342'
}, {
  imageURL: 'https://cdn.shopify.com/s/files/1/0024/9551/2691/files/pexels-irene-lasus-90454.jpg?v=1665206608',
  imageAltText: 'Person mountain biking down a trail in Whistler',
  heading: 'Mountain Biking',
  subText: 'Find the best trails for your skill level in the Whistler Bike Park as well as the surrounding trails!',
  CTAtext: 'Book Now!',
  CTAlink: '/#',
  TextBackgroundURL: 'https://cdn.shopify.com/s/files/1/0655/0051/2490/files/kisspng-mountain-bike-bicycle-cycling-silhouette-bmx-5abf773ddaa216.1716471015224973418955.png?v=1665639396'
}, {
  imageURL: 'https://cdn.shopify.com/s/files/1/0024/9551/2691/files/pexels-eric-sanman-1365425.jpg?v=1665206645',
  imageAltText: '3 people hiking up a mountain with lots of gear',
  heading: 'Hiking',
  subText: 'Experience the beautiful scenery that Whistler has to offer following our experienced tour guides!',
  CTAtext: 'Book Now!',
  CTAlink: '/#',
  TextBackgroundURL: 'https://cdn.shopify.com/s/files/1/0655/0051/2490/files/kisspng-hiking-mountaineering-clip-art-hiking-5abe0d0db76dc9.2416775215224046217513.png?v=1665639418'
}]; // Images with text DOM output

var imageWithTextSectionContainer = document.querySelector('.imagesAndTextSection');
imageWithTextSectionContainer.setAttribute('id', 'schedule');
imagesWithTextVariables.forEach(function (section) {
  var imagesWithTextDivEachItem = document.createElement('div');
  imagesWithTextDivEachItem.classList.add('imagesWithTextDivEachItem'); // images

  var imagesWithTextImgDiv = document.createElement('div');
  imagesWithTextImgDiv.classList.add('imagesWithTextImgDiv');
  var imagesWithTextImgEl = document.createElement('img');
  imagesWithTextImgEl.classList.add('imagesWithTextImgEl');
  imagesWithTextImgEl.src = section.imageURL;
  imagesWithTextImgEl.alt = section.imageAltText;
  imagesWithTextImgDiv.appendChild(imagesWithTextImgEl); // text

  var imagesWithTextTextDiv = document.createElement('div');
  imagesWithTextTextDiv.classList.add('imagesWithTextTextDiv');
  var imagesWithTextTextHeader = document.createElement('h2');
  imagesWithTextTextHeader.classList.add('imagesWithTextTextHeader');
  imagesWithTextTextHeader.appendChild(document.createTextNode(section.heading));
  var imagesWithTextTextPar = document.createElement('p');
  imagesWithTextTextPar.classList.add('imagesWithTextTextPar');
  imagesWithTextTextPar.appendChild(document.createTextNode(section.subText));
  imagesWithTextTextDiv.appendChild(imagesWithTextTextHeader);
  imagesWithTextTextDiv.appendChild(imagesWithTextTextPar); // call-to-action button

  var imageWithTextButtonDiv = document.createElement('div');
  imageWithTextButtonDiv.classList.add('imageWithTextButtonDiv');
  var imageWithTextButtonLink = document.createElement('a');
  imageWithTextButtonLink.classList.add('imageWithTextButtonLink');
  var imageWithTextButtonEl = document.createElement('button');
  imageWithTextButtonEl.classList.add('imageWithTextButtonEl');
  imageWithTextButtonLink.href = section.CTAlink;
  imageWithTextButtonEl.appendChild(document.createTextNode(section.CTAtext));
  imageWithTextButtonLink.appendChild(imageWithTextButtonEl);
  imageWithTextButtonDiv.appendChild(imageWithTextButtonLink);
  imagesWithTextTextDiv.appendChild(imageWithTextButtonDiv);
  imagesWithTextDivEachItem.appendChild(imagesWithTextImgDiv);
  imagesWithTextDivEachItem.appendChild(imagesWithTextTextDiv);
  imageWithTextSectionContainer.appendChild(imagesWithTextDivEachItem); // text background black image

  var imageWithTextTextBackgroundDiv = document.createElement('div');
  imageWithTextTextBackgroundDiv.classList.add('imageWithTextTextBackgroundDiv');
  var imageWithTextTextBackgroundImg = document.createElement('img');
  imageWithTextTextBackgroundImg.classList.add('imageWithTextTextBackgroundImg');
  imageWithTextTextBackgroundImg.src = section.TextBackgroundURL;
  imageWithTextTextBackgroundDiv.appendChild(imageWithTextTextBackgroundImg);
  imagesWithTextTextDiv.appendChild(imageWithTextTextBackgroundDiv);
}); // Pop-up animation on page load for image with text section

var imageWithTextObserver = new IntersectionObserver(function (entries) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    } else {
      entry.target.classList.remove('show');
    }
  });
});
var imageWithTexthiddenElements = document.querySelectorAll('.imageWithTextTextBackgroundImg');
imageWithTexthiddenElements.forEach(function (el) {
  return imageWithTextObserver.observe(el);
}); // video with text overlay --Section
//variables 

var videoWithTextOverlayVariables = [{
  heading: 'About Us',
  mainCotent: 'Whistler Adventures is set up to make booking your activities in Whistler as easy as possible. We live here, and we’ve seen how hard it can be to decide where to book your experiences. We’ve brought all the top tour operators together onto this one website to make your life easier.',
  postContent: 'Adventure with the local experts that can provide you the goods!',
  videoURL: 'https://cdn.shopify.com/videos/c/o/v/aa752fa77a1a40efa3af5220cd230e7f.mp4',
  videoAltText: 'people skiing, snowboard, mountain biking, and hiking.'
}];
var videoWithTextOverlayButtonVariables = [{
  buttonText: 'Family Adventures',
  buttonURL: '#'
}, {
  buttonText: 'Business Trips',
  buttonURL: '#'
}, {
  buttonText: 'Celebration & Parties',
  buttonURL: '#'
}, {
  buttonText: 'Special Events',
  buttonURL: '#'
}];
var videoWithTextOverlayContainer = document.querySelector('.videoTextOverlaySection');
videoWithTextOverlayContainer.setAttribute('id', 'aboutUs'); // --id
//mountain svg divider

videoWithTextOverlayContainer.innerHTML += "\n<svg class=\"videoTextOverlaySVG\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 1440 320\">\n    <path fill=\"#1d1d1b\" fill-opacity=\"1\" d=\"M0,224L240,160L480,256L720,128L960,192L1200,96L1440,192L1440,0L1200,0L960,0L720,0L480,0L240,0L0,0Z\"></path>\n</svg>\n"; //video background section

var videoWithTextOverlayVideoDiv = document.createElement('div');
videoWithTextOverlayVideoDiv.classList.add('videoWithTextOverlayVideoDiv');
var videoWithTextOverlayVideoEl = document.createElement('video');
videoWithTextOverlayVideoEl.classList.add('videoWithTextOverlayVideoEl');
var videoWithTextOverlayVideoSrc = document.createElement('source');
videoWithTextOverlayVideoSrc.classList.add('videoWithTextOverlayVideoSrc');
videoWithTextOverlayVideoSrc.src = videoWithTextOverlayVariables[0].videoURL;
videoWithTextOverlayVideoEl.muted = true;
videoWithTextOverlayVideoEl.loop = true;
videoWithTextOverlayVideoEl.autoplay = true;
videoWithTextOverlayVideoEl.appendChild(videoWithTextOverlayVideoSrc);
videoWithTextOverlayVideoDiv.appendChild(videoWithTextOverlayVideoEl);
videoWithTextOverlayContainer.appendChild(videoWithTextOverlayVideoDiv); //the text

var videoWithTextOverlayTextButtonDiv = document.createElement('div');
videoWithTextOverlayTextButtonDiv.classList.add('videoWithTextOverlayTextDiv');
var videoWithTextOverlayHeadingEl = document.createElement('h2');
videoWithTextOverlayHeadingEl.classList.add('videoWithTextOverlayHeadingEl');
videoWithTextOverlayHeadingEl.appendChild(document.createTextNode(videoWithTextOverlayVariables[0].heading));
videoWithTextOverlayTextButtonDiv.appendChild(videoWithTextOverlayHeadingEl);
var videoWithTextOverlayMainTextEl = document.createElement('p');
videoWithTextOverlayMainTextEl.classList.add('videoWithTextOverlayMainTextEl');
videoWithTextOverlayMainTextEl.appendChild(document.createTextNode(videoWithTextOverlayVariables[0].mainCotent));
videoWithTextOverlayTextButtonDiv.appendChild(videoWithTextOverlayMainTextEl);
var videoWithTextOverlaySubTextEl = document.createElement('p');
videoWithTextOverlaySubTextEl.classList.add('videoWithTextOverlaySubTextEl');
videoWithTextOverlaySubTextEl.appendChild(document.createTextNode(videoWithTextOverlayVariables[0].postContent));
videoWithTextOverlayTextButtonDiv.appendChild(videoWithTextOverlaySubTextEl);
videoWithTextOverlayContainer.appendChild(videoWithTextOverlayTextButtonDiv); // the buttons

var videoWithTextOverlayButtonDivs = document.createElement('div');
videoWithTextOverlayButtonDivs.classList.add('videoWithTextOverlayButtonDiv');
videoWithTextOverlayTextButtonDiv.appendChild(videoWithTextOverlayButtonDivs);
var buttonDiv = document.createElement('div');
buttonDiv.classList.add('videoWithTextOverlayButtonDiv');
videoWithTextOverlayButtonVariables.forEach(function (button) {
  var buttonLinkEl = document.createElement('a');
  buttonLinkEl.classList.add('videoWithTextOverlayButtonEl');
  buttonLinkEl.href = button.buttonURL;
  var buttonEl = document.createElement('button');
  buttonEl.classList.add('videoWithTextOverlayButton');
  buttonEl.appendChild(document.createTextNode(button.buttonText));
  buttonLinkEl.appendChild(buttonEl);
  buttonDiv.appendChild(buttonLinkEl);
  videoWithTextOverlayTextButtonDiv.appendChild(buttonDiv);
}); // Contact Us --Section

var contactUsVariables = [{
  header: 'Have Questions?',
  paragraph: "If the FAQ section below doesn't answer your question, please fill out our contact form to get in touch!"
}];
var contactUsFAQvariables = [{
  question: 'Do you offer refunds?',
  answer: 'We offer refunds if the cancellation is 30 days away from the date of the booking.'
}, {
  question: 'Can you guarantee that the snow will be amazing?',
  answer: 'We cannot guarantee that the conditions will be perfect.'
}, {
  question: 'Do we get to skip the lines with these experiences?',
  answer: 'We have partnered with Whistler and Blackcomb, so you will be able to skip the lines!'
}, {
  question: 'What skill level do I have to be to enjoy my time?',
  answer: "We offer adventures for any skill level - from beginner to expert, we'll make sure you have a blast no matter what your skill level!"
}]; // contact us section output to DOM

var contactUsContainer = document.querySelector('.contactUsSection');
contactUsContainer.setAttribute('id', 'contactUs'); // info input side

var contactUsInputDiv = document.createElement('div');
contactUsInputDiv.classList.add('contactUsInputDiv'); // first name + last name

var contactUsNameDiv = document.createElement('div');
contactUsNameDiv.classList.add('contactUsNameDiv'); // first name

var contactUSFirstNameLabel = document.createElement('label');
contactUSFirstNameLabel.classList.add('contactUSFirstNameLabel');
contactUSFirstNameLabel.appendChild(document.createTextNode('First Name:'));
var contactUSFirstName = document.createElement('input');
contactUSFirstName.classList.add('contactUSFirstName');
contactUSFirstName.type = 'text';
contactUSFirstName.required = true;
contactUSFirstNameLabel.appendChild(contactUSFirstName);
contactUsNameDiv.appendChild(contactUSFirstNameLabel); // last name 

var contactUsLastNameLabel = document.createElement('label');
contactUsLastNameLabel.classList.add('contactUsLastNameLabel');
contactUsLastNameLabel.appendChild(document.createTextNode('Last Name:'));
var contactUsLastName = document.createElement('input');
contactUsLastName.classList.add('contactUsLastName');
contactUsLastName.type = 'text';
contactUsLastName.required = true;
contactUsLastNameLabel.appendChild(contactUsLastName);
contactUsNameDiv.appendChild(contactUsLastNameLabel);
contactUsInputDiv.appendChild(contactUsNameDiv); // email

var contactUsEmailLabel = document.createElement('label');
contactUsEmailLabel.classList.add('contactUsEmailLabel');
contactUsEmailLabel.appendChild(document.createTextNode('Email:'));
var contactUsEmail = document.createElement('input');
contactUsEmail.classList.add('contactUsEmail');
contactUsEmail.type = 'email';
contactUsEmail.required = true;
contactUsEmailLabel.appendChild(contactUsEmail);
contactUsInputDiv.appendChild(contactUsEmailLabel); // message

var contactUsMessageLabel = document.createElement('label');
contactUsMessageLabel.classList.add('contactUsMessageLabel');
contactUsMessageLabel.appendChild(document.createTextNode('Message:'));
var contactUsMessage = document.createElement('textarea');
contactUsMessage.classList.add('contactUsMessage');
contactUsMessage.type = 'text';
contactUsMessage.required = true;
contactUsMessageLabel.appendChild(contactUsMessage);
contactUsInputDiv.appendChild(contactUsMessageLabel); // send message button

var contactUsButton = document.createElement('button');
contactUsButton.classList.add('contactUsButton');
contactUsButton.appendChild(document.createTextNode('Send Message'));
contactUsInputDiv.appendChild(contactUsButton);
contactUsContainer.appendChild(contactUsInputDiv); // text and FAQ drop-down section

var contactUsFAQDiv = document.createElement('div');
contactUsFAQDiv.classList.add('contactUsFAQDiv');
contactUsContainer.appendChild(contactUsFAQDiv);
var FAQheader = document.createElement('h3');
FAQheader.classList.add('FAQheader');
FAQheader.appendChild(document.createTextNode(contactUsVariables[0].header));
contactUsFAQDiv.appendChild(FAQheader);
var FAQpar = document.createElement('p');
FAQpar.classList.add('FAQpar');
FAQpar.appendChild(document.createTextNode(contactUsVariables[0].paragraph));
contactUsFAQDiv.appendChild(FAQpar);
contactUsFAQvariables.forEach(function (QandA) {
  //question
  var questionDiv = document.createElement('div');
  questionDiv.classList.add('questionDiv');
  var questionEl = document.createElement('p');
  questionEl.appendChild(document.createTextNode(QandA.question));
  questionDiv.appendChild(questionEl); //arrow to open

  var openAnswerButtonEl = document.createElement('button');
  openAnswerButtonEl.classList.add('openAnswerButtonEl');
  openAnswerButtonEl.appendChild(document.createTextNode('▼'));
  questionDiv.appendChild(openAnswerButtonEl);
  contactUsFAQDiv.appendChild(questionDiv); //answer

  var answerDiv = document.createElement('div');
  answerDiv.classList.add('answerDiv');
  var answerEl = document.createElement('p');
  answerEl.classList.add('answerEl');
  answerEl.appendChild(document.createTextNode(QandA.answer));
  answerDiv.appendChild(answerEl);
  contactUsFAQDiv.appendChild(answerDiv);
});
var QandAArrows = document.querySelectorAll('.openAnswerButtonEl');
var answerDivs = document.querySelectorAll('.answerDiv');
var questionDivs = document.querySelectorAll('.questionDiv');
var answerElements = document.querySelectorAll('.answerEl');

var _loop = function _loop(i) {
  QandAArrows[i].addEventListener('click', function () {
    if (answerDivs[i].style.display === 'block') {
      answerDivs[i].style.display = 'none'; // animation

      QandAArrows[i].style.transform = 'rotate(0deg)';
      QandAArrows[i].style.color = '#27b5bd';
      answerDivs[i].style.borderBottom = 'none';
      questionDivs[i].style.borderBottom = 'solid 1px #27b5bd';
    } else {
      answerDivs[i].style.display = 'block'; //animation

      QandAArrows[i].style.transform = 'rotate(180deg)';
      QandAArrows[i].style.color = '#cf2e2e';
      answerDivs[i].style.borderBottom = 'solid 1px #cf2e2e';
      questionDivs[i].style.borderBottom = 'none';
    }
  });
};

for (var i = 0; i < QandAArrows.length; i++) {
  _loop(i);
} // Footer --Section
// footer variables


var footerBackground = [{
  backgroundURL: 'https://cdn.shopify.com/s/files/1/0655/0051/2490/files/pexels-tyler-lastovich-772803.jpg?v=1666684386'
}];
var footerContactInfo = [{
  businessName: 'Whistler Adventures',
  email: 'contact@whistleradventures.com',
  address: '123 Whistler Way, Whistler, BC V0N 1B4'
}, {
  addressLink: 'https://www.google.com/maps/place/Parking+Lot+2+(Totem+Icon)/@50.114891,-122.9548031,17z/data=!4m13!1m7!3m6!1s0x54873cb203957b87:0x4ab741e875f5cff6!2sWhistler,+BC!3b1!8m2!3d50.1161686!4d-122.9535117!3m4!1s0x5487234cd4f624ed:0x2152e30fb04f1418!8m2!3d50.1157799!4d-122.9525096'
}];
var footerMenuList = [{
  itemText: 'Book Now',
  itemURL: '/#bookNow'
}, {
  itemText: 'Services',
  itemURL: '/#schedule'
}, {
  itemText: 'About Us',
  itemURL: '/#aboutUs'
}, {
  itemText: 'Contact Us',
  itemURL: '/#contactUs'
}];
var footerSocialLinks = [{
  //Facebook 
  icon: 'https://cdn.shopify.com/s/files/1/0655/0051/2490/files/icons8-facebook-64_2.png?v=1666769406',
  link: 'https://www.facebook.com/'
}, {
  //Instagram 
  icon: 'https://cdn.shopify.com/s/files/1/0655/0051/2490/files/icons8-instagram-64.png?v=1666769377',
  link: 'https://www.instagram.com/'
}, {
  // TripAdvisor 
  icon: 'https://cdn.shopify.com/s/files/1/0655/0051/2490/files/tripadvisor.png?v=1666769508',
  link: 'https://www.tripadvisor.ca/'
}, {
  // Yelp
  icon: 'https://cdn.shopify.com/s/files/1/0655/0051/2490/files/yelp.png?v=1666769570',
  link: 'https://www.yelp.ca/'
}]; //footer output onto the DOM
//background image 

var footerContainer = document.querySelector('footer');
footerContainer.style.background = "linear-gradient(rgba(0,0,0,0.85), rgba(0,0,0,95)), url('" + footerBackground[0].backgroundURL + "')";
footerContainer.style.backgroundSize = 'cover';
footerContainer.style.backgroundPosition = 'bottom'; // contact info container

var footerContactContainer = document.createElement('div');
footerContactContainer.classList.add('footerContactContainer');
footerContainer.appendChild(footerContactContainer); //header

var footerContactHeader = document.createElement('h3');
footerContactHeader.classList.add('footerContactHeader');
footerContactHeader.appendChild(document.createTextNode(footerContactInfo[0].businessName));
footerContactContainer.appendChild(footerContactHeader); //contact info items

var footerEmailDiv = document.createElement('div');
footerEmailDiv.classList.add('footerEmailDiv');
footerContactContainer.appendChild(footerEmailDiv);
var footerEmailLink = document.createElement('a');
footerEmailLink.classList.add('footerEmailLink');
var emailHref = 'mailto:'.concat(footerContactInfo[0].email);
footerEmailLink.href = emailHref;
footerEmailDiv.appendChild(footerEmailLink);
var footerEmailIcon = document.createElement('img');
footerEmailIcon.src = 'https://cdn.shopify.com/s/files/1/0655/0051/2490/files/icons8-envelope-64.png?v=1666720187';
footerEmailIcon.classList.add('footerEmailIcon');
footerEmailLink.appendChild(footerEmailIcon);
var footerEmailText = document.createElement('p');
footerEmailText.classList.add('footerEmailText');
footerEmailText.appendChild(document.createTextNode(footerContactInfo[0].email));
footerEmailLink.appendChild(footerEmailText); //location 

var footerLocationDiv = document.createElement('div');
footerLocationDiv.classList.add('footerLocationDiv');
footerContactContainer.appendChild(footerLocationDiv);
var footerLocationLink = document.createElement('a');
footerLocationLink.classList.add('footerEmailLink');
footerLocationLink.href = footerContactInfo[1].addressLink;
footerLocationDiv.appendChild(footerLocationLink);
var footerLocationImg = document.createElement('img');
footerLocationImg.classList.add('footerLocationImg');
footerLocationImg.src = 'https://cdn.shopify.com/s/files/1/0655/0051/2490/files/icons8-home-address-64.png?v=1666720265';
footerLocationLink.appendChild(footerLocationImg);
var footerLocationAddress = document.createElement('p');
footerLocationAddress.classList.add('footerLocationAddress');
footerLocationAddress.appendChild(document.createTextNode(footerContactInfo[0].address));
footerLocationLink.appendChild(footerLocationAddress); //menu items

var footerMenuDiv = document.createElement('div');
footerMenuDiv.classList.add('footerMenuDiv');
footerContainer.appendChild(footerMenuDiv);
var menuItemHeader = document.createElement('h3');
menuItemHeader.classList.add('menuItemHeader');
menuItemHeader.appendChild(document.createTextNode('Quick Links'));
footerMenuDiv.appendChild(menuItemHeader);
var footerMenuUL = document.createElement('ul'); //menu items

footerMenuList.forEach(function (item) {
  var menuItem = document.createElement('li');
  menuItem.classList.add('menuItemLink');
  var menuItemLink = document.createElement('a');
  menuItemLink.href = item.itemURL;
  menuItemLink.appendChild(document.createTextNode(item.itemText));
  menuItem.appendChild(menuItemLink);
  footerMenuUL.appendChild(menuItem);
  footerMenuDiv.appendChild(footerMenuUL);
}); // social icons

var footerSocialDiv = document.createElement('div');
footerSocialDiv.classList.add('footerSocialDiv');
footerContainer.appendChild(footerSocialDiv);
footerSocialLinks.forEach(function (link) {
  var linkDiv = document.createElement('div');
  linkDiv.classList.add('linkDiv');
  var linkHref = document.createElement('a');
  linkHref.classList.add('linkHref');
  linkHref.href = link.link;
  var linkIcon = document.createElement('img');
  linkIcon.classList.add('linkIcon');
  linkIcon.src = link.icon;
  linkHref.appendChild(linkIcon);
  linkDiv.appendChild(linkHref);
  footerSocialDiv.appendChild(linkDiv);
});
},{}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "63613" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","script.js"], null)
//# sourceMappingURL=/script.75da7f30.js.map