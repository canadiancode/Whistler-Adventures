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
// header --Section
// header variables
var headerLogoSrc = '/Images/Whistler Bungee.png';
var headerLogoAlt = 'Whistler Adventures Logo';
var headerBusinessName = 'Whistler Adventures';
var headerMobileBackgroundSrc = '/Images/whistler village at night.jpg';
var headerMobileBackgroundAlt = 'Mountain with a lake and forest';
var headerNavItems = [{
  item: 'Adventures',
  link: '/#adventures',
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
}]; // {
//     foregroundURL: 'https://cdn.shopify.com/s/files/1/0655/0051/2490/files/kisspng-tree-shulin-district-forest-green-green-gradient-forest-5a924d0e0487c1.8541673415195374220186_2.png?v=1665469648',
//     backgroundURL: 'https://cdn.shopify.com/s/files/1/0655/0051/2490/files/kisspng-lake-shutterstock-clip-art-mountain-5a973f5866bac8.2980430215198615924208_4.png?v=1665469781'
// }

var heroSectonBackground = [{
  foregroundURL: 'https://cdn.shopify.com/s/files/1/0655/0051/2490/files/kisspng-tree-shulin-district-forest-green-green-gradient-forest-5a924d0e0487c1.8541673415195374220186_2.png?v=1665469648',
  midgroundURL: 'https://cdn.shopify.com/s/files/1/0655/0051/2490/files/6400b16e-9295-4e4d-b2ee-7e0b5bff5c19.png?v=1665471358',
  backgroundURL: 'https://cdn.shopify.com/s/files/1/0655/0051/2490/files/kisspng-lake-shutterstock-clip-art-mountain-5a973f5866bac8.2980430215198615924208_4.png?v=1665469781'
}]; // Hero section output to DOM

var heroSectionDiv = document.querySelector('.heroSection'); // background using Parallax

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
  CTAlink: '/#'
}, {
  imageURL: 'https://cdn.shopify.com/s/files/1/0024/9551/2691/files/pexels-visit-almaty-848612.jpg?v=1665206520',
  imageAltText: '3 snowboarders going up to the mountain',
  heading: 'Snowboarding',
  subText: 'Get quick access to teh lift, and skip the lines to get the most out of your time in Whistler!',
  CTAtext: 'Book Now!',
  CTAlink: '/#'
}, {
  imageURL: 'https://cdn.shopify.com/s/files/1/0024/9551/2691/files/pexels-irene-lasus-90454.jpg?v=1665206608',
  imageAltText: 'Person mountain biking down a trail in Whistler',
  heading: 'Mountain Biking',
  subText: 'Find the best trails for your skill level in the Whistler Bike Park as well as the surrounding trails!',
  CTAtext: 'Book Now!',
  CTAlink: '/#'
}, {
  imageURL: 'https://cdn.shopify.com/s/files/1/0024/9551/2691/files/pexels-eric-sanman-1365425.jpg?v=1665206645',
  imageAltText: '3 people hiking up a mountain with lots of gear',
  heading: 'Hiking',
  subText: 'Experience the beautiful scenery that Whistler has to offer following our experienced tour guides!',
  CTAtext: 'Book Now!',
  CTAlink: '/#'
}]; // Images with text DOM output

var imageWithTextSectionContainer = document.querySelector('.imagesAndTextSection');
imagesWithTextVariables.forEach(function (section) {
  var imagesWithTextDivEachItem = document.createElement('div');
  imagesWithTextDivEachItem.classList.add('imagesWithTextDivEachItem');
  var imagesWithTextImgDiv = document.createElement('div');
  imagesWithTextImgDiv.classList.add('imagesWithTextImgDiv');
  var imagesWithTextImgEl = document.createElement('img');
  imagesWithTextImgEl.classList.add('imagesWithTextImgEl');
  imagesWithTextImgEl.src = section.imageURL;
  imagesWithTextImgEl.alt = section.imageAltText;
  imagesWithTextImgDiv.appendChild(imagesWithTextImgEl);
  var imagesWithTextTextDiv = document.createElement('div');
  imagesWithTextTextDiv.classList.add('imagesWithTextTextDiv');
  var imagesWithTextTextHeader = document.createElement('h2');
  imagesWithTextTextHeader.classList.add('imagesWithTextTextHeader');
  imagesWithTextTextHeader.appendChild(document.createTextNode(section.heading));
  var imagesWithTextTextPar = document.createElement('p');
  imagesWithTextTextPar.classList.add('imagesWithTextTextPar');
  imagesWithTextTextPar.appendChild(document.createTextNode(section.subText));
  imagesWithTextTextDiv.appendChild(imagesWithTextTextHeader);
  imagesWithTextTextDiv.appendChild(imagesWithTextTextPar);
  imagesWithTextDivEachItem.appendChild(imagesWithTextImgDiv);
  imagesWithTextDivEachItem.appendChild(imagesWithTextTextDiv);
  imageWithTextSectionContainer.appendChild(imagesWithTextDivEachItem);
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "56506" + '/');

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