(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/styles/Aboutus.css":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/styles/Aboutus.css ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".who{\n    color: white;\n    border-bottom: solid 2px;\n    border-width: 20%;\n    border-color: white;\n    padding-bottom: 2px;\n    padding-left: 20px;\n    padding-top: 2%;\n    margin-right: 40%;\n    text-align: left; \n  }\n  body{\n    align-items: left;\n  }\n  /*\n  .principal {\n    position: relative;\n    text-align: left;\n    margin-bottom: 5%;\n  }\n  .principal p{\n    position: relative;\n    z-index: 1;\n    text-align: left;\n    margin-left: 5%;\n    margin-right: 5%;\n  }\n  .principal img{\n    width: 30%;\n    float: left;\n    position: relative;\n    margin-top: 5%;\n    margin-left: 5%;\n    margin-right: 3%;\n    margin-bottom: -0.1%;\n    z-index: 2;\n  }\n  .president {\n    position: relative;\n    text-align: left;\n    margin-bottom: 5%;\n  }\n  .president p{\n    position: relative;\n    z-index: 1;\n    text-align: left;\n    margin-left: 5%;\n    margin-right: 5%;\n  }\n  .president img{\n    width: 30%;\n    float: left;\n    position: relative;\n    margin-top: 5%;\n    margin-left: 5%;\n    margin-right: 3%;\n    margin-bottom: -0.1%;\n    z-index: 2;\n  } */\n  .crew {\n    margin: 20px;\n  }\n  .Us {\n    display: inline-block;\n    width: 300px;\n    margin-bottom: 50px;\n  }\n.Us img{\n  width: 200px;\n  height: 200px;\n  position: relative;\n  margin:5%;\n  object-fit:cover;\n}\n.member {\n  position: relative;\n  white-space: normal;\n  font-size: 20px;\n  text-align: center;\n  margin: 5%;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/styles/App.css":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/styles/App.css ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* overall */\n* {\n  list-style-type: none;\n  padding: 0;\n  margin: 0;\n  color: rgb(255, 255, 255);\n  text-decoration: none;\n  background-color: black;\n}\n\nbody {\n  background-color: black;\n  -ms-overflow-style: none;\n}\n\n::-webkit-scrollbar {\n  display: none;\n\n}\n\n/* Navigation.js */\n.App {\n  text-align: center;\n}\n\n.App-logo {\n  height: 40vmin;\n  pointer-events: none;\n}\n.navi_img{\n  height: 100%;\n}\n@media (prefers-reduced-motion: no-preference) {\n  .App-logo {\n    animation: App-logo-spin infinite 20s linear;\n  }\n}\n\n.App-header {\n  background-color: #282c34;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  font-size: calc(10px + 2vmin);\n  color: white;\n}\n\n.App-link {\n  color: #61dafb;\n}\n\n@keyframes App-logo-spin {\n  from {\n    transform: rotate(0deg);\n  }\n\n  to {\n    transform: rotate(360deg);\n  }\n}\n\n/* home.js */\n.home{\n  height: 10000;\n}\n.backgroundImage {\n  height: 100vh;\n  width: 100vw;\n  object-fit: cover;\n  opacity: 50%;\n}\n#one .schoolLogo{\n  position: absolute;\n  top: 20vh;\n  right: 47vw;\n  width: 80px;\n  background-color: #ffffff00;\n}\n#one h1{\n  font-size:5.5vw;\n  line-height: 7vw;\n  position: absolute;\n  top: 30vh;\n  right:25vw;\n  background-color: #ffffff00;\n}\n#one h1 p{\n  position: absolute;\n  right: 15vw;\n  background-color: #ffffff00;\n}\n\n\n/* home.js section3 */\n#three {\n  justify-content: column;\n}\n\n#section3_title {\n  font-size: 50px;\n  font-weight: bold;\n  color: white;\n  text-align: center;\n  margin: 70px 0 70px 0;\n}\n\n#section3_content {\n  overflow: scroll;\n  display: flex;\n  flex-direction: row;\n  align-items: left;\n  flex-wrap: nowrap;\n  margin-bottom: 10px;\n}\n\n.item { \n  width: 400px;\n  height: 600px;\n  padding: 15px;\n  flex-grow: 0;\n  flex-shrink: 0;\n  margin: 0 25px 0 25px;\n  background-image: linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ),url('https://media.euobserver.com/e0e217ad29a2887c28b3732eeef3ee98.jpg');\n  background-repeat: no-repeat;\n  background-attachment: fixed;\n  background-size: cover;\n  transition: 0.3s;\n}\n\n.item h2 {\n  background: none;\n  margin-bottom: 10px;\n}\n\n.item p {\n  background: none;\n  margin: 0;\n  padding: 0;\n  font-size: 16px;\n  position: inherit;\n  text-align: center;\n}\n\n\n.item:hover {\n  box-shadow: 5px 10px 5px #fff;\n}\n\n@media screen and (max-width: 1000px) {\n  .item {\n    width: 200px;\n    height: 300px;\n  }\n\n}\n\n/* home.js section4 */\n#section4_content {\n  width: 100%;\n}\n\n#box1 {\n  width: 50%;\n  height: 800px;\n  float: left;\n  background-image: linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ),url('https://media.euobserver.com/e0e217ad29a2887c28b3732eeef3ee98.jpg');\n  background-repeat: no-repeat;\n  background-attachment: fixed;\n  background-size: cover;\n  display: flex;\n  opacity: 0.5;\n  transition: 0.3s;\n}\n\n#box2, #box3 {\n  width: 50%;\n  height: 400px;\n  float: right;\n  background-image: linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ),url('https://media.euobserver.com/e0e217ad29a2887c28b3732eeef3ee98.jpg');\n  background-repeat: no-repeat;\n  background-attachment: fixed;\n  background-size: cover;\n  display: flex;\n  opacity: 0.5;\n  transition: 0.3s;\n}\n\n.boxtext {\n  background: none;\n  margin: auto;\n}\n\n#box1:hover, #box2:hover, #box3:hover {\n  opacity: 1;\n}\n\n/* student.js */\n.banner img {\n  width: 100%;\n  max-height: 100px;\n  margin: 20px 0;\n  object-fit: cover;\n  opacity: 50%;\n}\n\n.banner h2 {\n  position: relative;\n  top: -90px;\n  z-index: 3;\n  background-color: #ffffff00;\n}\n\n.trinity {\n  width: 330px;\n  height: 330px;\n  border: 1px solid #CCC;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  margin: auto;\n  border-radius: 50%;\n}\n.trinity h3 {\n  position: relative;\n  top: 45%;\n  background-color:#ffffff00;\n}\n\n.student {\n  width: 100px;\n  height: 100px;\n  background: rgb(255, 255, 255);\n  border-radius: 50%;\n  position:absolute;\n  overflow: hidden;\n}\n.student img{\n  height: 40px;\n  width: 40px;\n  margin-top: 7px;\n  background-color:#ffffff00;\n}\n.student h6 {\n  position: absolute;\n  top: 50%;\n  background-color: #ffffff00;\n  color: black;\n}\n\n#council {\n  bottom: 0;\n}\n#congress {\n  transform: rotate(200deg) translate(-290px) rotate(-200deg);\n}\n#court {\n  transform: rotate(135deg) translate(-100px) rotate(-135deg); \n}\n\n.circle {\n  width: 30px;\n  height: 30px;\n  background: rgb(255, 255, 255);\n  border-radius: 50%;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  overflow: hidden;\n  margin: auto;\n  animation: circle 6s linear infinite;\n}\n\n@keyframes circle {\n  0% {\n    transform: rotate(0deg) translate(-165px) rotate(0deg);\n\n  }\n\n  100% {\n    transform: rotate(360deg) translate(-165px) rotate(-360deg);\n  }\n}\n@media screen and (max-width: 400px) {\n  .trinity {\n    width: 250px;\n    height: 250px;\n  }\n  .student {\n    width: 80px;\n    height: 80px;\n  }\n  #congress {\n    transform: rotate(200deg) translate(-220px) rotate(-200deg);\n  }\n  .student img{\n    height: 30px;\n    width: 30px;\n  }\n  .student h6{\n    font-size: 13px;\n  }\n  @keyframes circle {\n    0% {\n      transform: rotate(0deg) translate(-125px) rotate(0deg);\n  \n    }\n  \n    100% {\n      transform: rotate(360deg) translate(-125px) rotate(-360deg);\n    }\n  }\n}\n.popup {\n  position: fixed;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  width: 600px;\n  height: 600px;\n  box-shadow: 0px 10px 20px 0px #7e8284;\n  border-radius: 10px;\n  background-color: white;\n  visibility: hidden;\n  opacity: 0;\n  transition: opacity 500ms;\n  z-index: 3;\n}\n\n.popup:target {\n  visibility: visible;\n  opacity: 1;\n}\n\n.popup a {\n  text-decoration: none;\n  font-size: 20px;\n  color: black;\n  background-color: white;\n  transition: opacity 500ms;\n  position: absolute; \n  right: 10px;\n}\n\n.popup p {\n  color: black;\n  text-align: left;\n  background-color: white;\n  font-size: 16px;\n  display: block;\n  word-wrap: break-word;\n  margin: 30px 20px 0px 20px;\n}\n\n/* Footer */\n.footer{\n  width: 100vw;\n  height: 327px;\n  bottom: 0;\n  border-top: solid 5px white;\n  display: flex;\n  justify-content: space-between;\n}\n.footer p{\n  font-size: 15px;\n}\n.first{\n  margin-left: 100px;\n  text-align: left;\n  margin-top: 30px;\n}\n.last{\n  margin-right: 100px;\n  text-align: right;\n  margin-top: 30px;\n  display: flex;\n}\n.last p{\n}\n.SGlogo {\n  height: 40%;\n  width: auto;\n}\n.envelope{\n  position: absolute;\n  width: 30px;\n  height: 30px;\n  right: 400px;\n  padding-right: 30px;\n  padding-bottom: 30px;\n}\n\n.insta{\n  position: absolute;\n  width: 30px;\n  height: 30px;\n  right: 300px;\n  padding-right: 30px;\n  padding-bottom: 30px;\n}\n\n.image13{\n  position: absolute;\n  width: 30px;\n  height: 30px;\n  right: 200px;\n  padding-bottom: 30px;\n}\n\n.설국다움{\n  position: absolute;\n  bottom: 300px;\n  right: 250px;\n  width: 50px;\n  height: 30px;\n}\n\n\n  /* \n.first{\n  position: absolute;\n  width: 988px;\n  height: 36px;\n  left: 227px;\n  bottom: 300px;\n  text-align: left;\n\n  font-family: 'Inter';\n  font-style: normal;\n  font-weight: 600;\n  font-size: 20px;\n  line-height: 24px;\n\n  color: #FFFFFF;\n}\n\n.last p{\n  position: absolute;\n  width: 163px;\n  height: 36px;\n  left: 1052px;\n  bottom: 300px;\n\n  font-family: 'Inter';\n  font-style: normal;\n  font-weight: 600;\n  font-size: 30px;\n  line-height: 36px;\n\n  color: #FFFFFF;\n}\n\n.envelope{\n  position: absolute;\n  width: 30px;\n  height: 30px;\n  left: 1085px;\n  bottom: 300px;\n}\n\n.insta{\n  position: absolute;\n  width: 30px;\n  height: 30px;\n  left: 1135px;\n  bottom: 300px;\n}\n\n.image13{\n  position: absolute;\n  width: 30px;\n  height: 30px;\n  left: 1185px;\n  bottom: 300px;\n}\n\n.설국다움{\n  position: absolute;\n  width: 164px;\n  height: 85px;\n  left: 1085px;\n  bottom: 300px;\n} */\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/styles/Club.css":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/styles/Club.css ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "*{\n    background-color: black;\n    color: white;\n  }\n\n.Club1{\n    margin-left: 10%;\n    margin-right: 10%;\n    display: flex;\n }\n  .Club1 img{\n    width: 50%;\n    position: relative;\n    margin: 0 5% 0 5%;\n    opacity: 70%;\n  }\n  .Club1 img:hover{\n    opacity: 100%;\n  }\n  .Club1 p{\n    text-align: center;\n    width: 20%;\n  }\n.category1{\n    border-bottom: 2px solid;\n    border-width: 40%;\n    border-color: white;\n    padding-bottom: 20px;\n    padding-left: 30px;\n    padding-right: 300px;\n    margin-top: 100px;\n    margin-left: 30px;\n    margin-right: 40%;\n    float: left;\n}\n\n.category2{\n    border-bottom: solid 2px;\n    border-width: 40%;\n    border-color: white;\n    padding-right: 300px;\n    padding-bottom: 20px;\n    padding-left: 30px;\n    padding-top: 120px;\n    margin-left: 30px;\n    margin-right: 40%;\n    float: left;\n}\n\n.list1 li{\n    margin-left: 40px;\n    padding-top: 200px;\n    list-style-type: disc;\n    font-size: large;\n    text-align: left;\n    background-color: rgba(240, 248, 255, 0);\n}\n.list2 li{\n    margin-left: 40px;\n    padding-top: 70px;\n    list-style-type: disc;\n    font-size: large;\n    text-align: left;\n    background-color: rgba(240, 248, 255, 0);\n}\n.sub-category{\n    display: flex;\n    flex-wrap: wrap;\n    width: 100%;\n    justify-content: left;\n}\n.sub-category div{\n    border: 2px white solid;\n    width: 290px;\n    height: 290px;\n    margin: 1%;\n    margin-left: 30px;\n    margin-top: 10px;\n    text-align: center;\n}\n.sub-category h2{\n    text-align: center;\n    position: relative;\n\t  top: -55%;\n    font-size: 21px;\n    font-weight: bold;\n    background-color: rgba(240, 248, 255, 0);\n}\n.sub-category img{\n    width: 95%;\n    height: 95%;\n    margin: 2.5%;\n\t  vertical-align: middle;\n    opacity: 50%;\n}\n.sub-category img:hover{\n  opacity: 70%;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/styles/Event.css":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/styles/Event.css ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".Sc-Ev{\n    border-bottom: solid 2px;\n    border-width: 20%;\n    border-color: white;\n    padding-bottom: 2px;\n    padding-left: 20px;\n    padding-top: 2%;\n    margin-right: 40%;\n    text-align: left; \n  }\n  .event{\n    margin-left: 5%;\n    margin-right: 5%;\n  }\n  p {\n    z-index: 1;\n    text-align: center;\n    position: absolute;\n    font-size: 2vw;\n    \n  }\n  .event img{\n    width: 40%;\n    position: relative;\n    margin:1.5%;\n    opacity: 70%;\n  }\n  .event img:hover{\n    opacity: 100%;\n  }\n  .e1{\n    text-align: center;\n    margin-left: 19%;\n    margin-top: -17%;\n    background-color: rgba(240, 248, 255, 0);\n    /* text-shadow: 2px 2px 2px black; */\n  }\n  .e2{\n    margin-left: 58%;\n    margin-top: -17%;\n    background-color: rgba(240, 248, 255, 0);\n  }\n  .e3{\n    margin-left: 20%;\n    margin-top: -17%;\n    background-color: rgba(240, 248, 255, 0);\n  }\n  .e4{\n    margin-left: 57%;\n    margin-top: -17%;\n    background-color: rgba(240, 248, 255, 0);\n  }\n  .se1{\n    margin-left: 22%;\n    margin-top: -17%;\n    background-color: rgba(240, 248, 255, 0);\n  }\n  .se2{\n    margin-left: 55%;\n    margin-top: -17%;\n    background-color: rgba(240, 248, 255, 0);\n  }\n  .se3{\n    margin-left: 20%;\n    margin-top: -17%;\n    background-color: rgba(240, 248, 255, 0);\n  }\n  .se4{\n    margin-left: 57%;\n    margin-top: -17%;\n    background-color: rgba(240, 248, 255, 0);\n  }", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/styles/Faq.css":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/styles/Faq.css ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\nbody{\n    border: none;\n}\nh2{\n    text-align: left;\n    font-size: 70px;\n    padding-left: 10%;\n    padding-bottom: 20px;\n}\n.inf-faq{\n    position: relative;\n    margin: 0 25% 30px 25%;\n    max-width: 50%;\n    text-align: center;\n    font-size: 20px;\n    word-wrap: break-word;\n}\n.link-in{\n    position: absolute;\n    height: 60px;\n    width: 18%;\n    text-align: center;\n    margin-left: 30%;\n    color: black;\n    font-size: 20px;\n    line-height: 0px;\n    background-color: rgb(255, 255, 255);\n    border-radius: 5%;\n}\n.link-out{\n    position: absolute;\n    height: 60px;\n    width: 18%;\n    text-align: center;\n    margin-left: 50%;\n    color: black;\n    font-size: 20px;\n    line-height: 0px;\n    background-color: rgb(255, 255, 255);\n    border-radius: 5%;\n}\n.faq-line{\n    text-align: center;\n    border-bottom: 1px white solid;\n    margin-top: 160px;\n}\ndetails{\n    display: flex;\n}\nsummary{\n    outline: none;\n    text-align:left;\n    font-size: 20px;\n    margin-left: 10%;\n    margin-right: 10%;\n    padding: 20px;\n}\nsummary:hover{\n    background-color: rgba(255, 255, 255, 0.885);\n    color: black;\n}\np{\n    text-align: left;\n    padding-top:2%;\n}\n#title{\n    margin-top: 30px;\n    font-weight: 700;\n}\n#a{\n  font-size: 20px;\n  text-align:left;\n  width: 80%;\n  margin-left: 10%;\n  margin-right: 10%;\n  background-color: grey;\n  padding: 30px 10px 30px 10px;\n}\ndetails > summary {\n  list-style: none;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/styles/clubDetail.css":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/styles/clubDetail.css ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* *{\n  background-color: white;\n  color: black;\n} */\nh1{\n    margin-top: 48px;\n    margin-bottom: 12px;\n    padding-left: 84px;\n  \n  }\n  hr{\n    border-bottom: solid 3px;\n    margin-top: 0px;\n    margin-left: 48px;\n    margin-right: 30%;\n  }\n  .selector{\n    margin-left: 48px;\n    margin-right: 10%;\n    margin-top: 0px;\n    font-size: 40px;\n    word-break: break-all;\n  \n  }\n  #line2{\n    border-bottom: solid 1px;\n    color: grey;\n    margin: 48px;\n    margin-top: 96px;\n  }\n  .sticker1{\n    background-color: #C7C7C7;\n    margin: 24px auto;\n    width: 420px;\n    height: 420px;\n  }\n  .wrap {\n    margin: 24px;\n    margin-top: 24px;\n    display: flex;\n    flex-wrap: wrap;\n  }\n  ", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/styles/eventde.css":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/styles/eventde.css ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body{\n    background-color:white;\n    color: black;\n}\nh2{\n    font-style: bold;\n}\n\n.eventname{\n    padding-top:2%;\n    padding-bottom: 10px;\n    font-weight: bold;\n    border-bottom: 2px solid white;\n    position: absolute;\n    padding-left: 4%;\n    padding-right: 50%;\n}\n.eventdetail{\n    padding-right: 3%;\n    column-count: 2;\n    grid-column-gap: 50px;\n    column-gap: 50px;\n    display: grid;\n    grid-template-columns: 1fr 4.3fr;\n    justify-content: left;\n}\n.eventdate{\n    padding-left: 5%;\n    padding-top: 7%;\n    font-size: 220%;\n}\n.detail{\n    padding-top: 25%;\n    padding-left: 20%;\n    font-size: 170%;\n}\n\n.picture{\n    border: 5% white solid;\n    width: 31%; \n    height: 31%;\n    margin-left: 1%;\n    margin-right: 1%;\n    margin-top: 2%;\n    position: relative;\n    overflow: hidden;\n    text-align: center;\n    float: left;\n    display: flex;\n    justify-items: left;\n}\n.pictue img{\n    position: relative;\n    vertical-align: center;\n    width: 95%;\n    height: 95%;\n    opacity: 50%;\n    font-weight: bold;\n    border-bottom: 2px solid black;\n    border-width: 40%;\n}\n.eventdate{\n    margin-top: 50px;\n    column-count: 2;\n    grid-column-gap: 20px;\n    column-gap: 20px;\n}   \n\n.picture{\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: left;\n    border: 2px white solid;\n    width: 290px;\n    height: 290px;\n    margin: 1%;\n    margin-left: 40px;\n    margin-top: 10px;\n    text-align: center;\n}\n.pictue img{\n    width: 95%;\n    height: 95%;\n    margin: 2.5%;\n\tvertical-align: middle;\n    opacity: 50%;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/styles/index.css":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/styles/index.css ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body {\n    margin: 0;\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',\n      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',\n      sans-serif;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n  \n  code {\n    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',\n      monospace;\n  }\n  ", ""]);

// exports


/***/ }),

/***/ "./src/images/Capable3.jpg":
/*!*********************************!*\
  !*** ./src/images/Capable3.jpg ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/Capable3.6c5ff340.jpg";

/***/ }),

/***/ "./src/images/Nurije.png":
/*!*******************************!*\
  !*** ./src/images/Nurije.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/Nurije.a4fa5e59.png";

/***/ }),

/***/ "./src/images/VANKMUN3.jpg":
/*!*********************************!*\
  !*** ./src/images/VANKMUN3.jpg ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/VANKMUN3.48182442.jpg";

/***/ }),

/***/ "./src/images/aboutus/Daeun.jpg":
/*!**************************************!*\
  !*** ./src/images/aboutus/Daeun.jpg ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/Daeun.beecccc6.jpg";

/***/ }),

/***/ "./src/images/aboutus/Gaeun.jpeg":
/*!***************************************!*\
  !*** ./src/images/aboutus/Gaeun.jpeg ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/Gaeun.a5264343.jpeg";

/***/ }),

/***/ "./src/images/aboutus/Irene.jpeg":
/*!***************************************!*\
  !*** ./src/images/aboutus/Irene.jpeg ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/Irene.017a1af9.jpeg";

/***/ }),

/***/ "./src/images/aboutus/Rian.jpeg":
/*!**************************************!*\
  !*** ./src/images/aboutus/Rian.jpeg ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/Rian.4101f0a1.jpeg";

/***/ }),

/***/ "./src/images/aboutus/Yeseo.jpeg":
/*!***************************************!*\
  !*** ./src/images/aboutus/Yeseo.jpeg ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/Yeseo.b97d33ac.jpeg";

/***/ }),

/***/ "./src/images/ac_01.jpg":
/*!******************************!*\
  !*** ./src/images/ac_01.jpg ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/ac_01.28afdd99.jpg";

/***/ }),

/***/ "./src/images/academics.png":
/*!**********************************!*\
  !*** ./src/images/academics.png ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/academics.d5b64846.png";

/***/ }),

/***/ "./src/images/arts.png":
/*!*****************************!*\
  !*** ./src/images/arts.png ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/arts.807eb8ed.png";

/***/ }),

/***/ "./src/images/background.jpg":
/*!***********************************!*\
  !*** ./src/images/background.jpg ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/background.e82e93ed.jpg";

/***/ }),

/***/ "./src/images/img/구텐탁구.jpg":
/*!*********************************!*\
  !*** ./src/images/img/구텐탁구.jpg ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/구텐탁구.6a5e24ab.jpg";

/***/ }),

/***/ "./src/images/img/굿네이버스.jpg":
/*!**********************************!*\
  !*** ./src/images/img/굿네이버스.jpg ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/굿네이버스.fa990e9e.jpg";

/***/ }),

/***/ "./src/images/img/글담.jpg":
/*!*******************************!*\
  !*** ./src/images/img/글담.jpg ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/글담.6d4aa5b5.jpg";

/***/ }),

/***/ "./src/images/img/꼬망세.jpg":
/*!********************************!*\
  !*** ./src/images/img/꼬망세.jpg ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/꼬망세.c6fcfa13.jpg";

/***/ }),

/***/ "./src/images/img/다르마.jpg":
/*!********************************!*\
  !*** ./src/images/img/다르마.jpg ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/다르마.464f752e.jpg";

/***/ }),

/***/ "./src/images/img/다이스.jpg":
/*!********************************!*\
  !*** ./src/images/img/다이스.jpg ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/다이스.7711e3a9.jpg";

/***/ }),

/***/ "./src/images/img/대체용.png":
/*!********************************!*\
  !*** ./src/images/img/대체용.png ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAwYAAALfCAIAAABU4kLQAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAEnQAABJ0Ad5mH3gAAAaNSURBVHhe7cEBDQAAAMKg909tDwcEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwKsaDxMAAcrqUaYAAAAASUVORK5CYII="

/***/ }),

/***/ "./src/images/img/데라.png":
/*!*******************************!*\
  !*** ./src/images/img/데라.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/데라.33a98ebf.png";

/***/ }),

/***/ "./src/images/img/도담다담.jpg":
/*!*********************************!*\
  !*** ./src/images/img/도담다담.jpg ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/도담다담.1f6ceac7.jpg";

/***/ }),

/***/ "./src/images/img/디벨로퍼스.jpg":
/*!**********************************!*\
  !*** ./src/images/img/디벨로퍼스.jpg ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/디벨로퍼스.5ffa0f73.jpg";

/***/ }),

/***/ "./src/images/img/로고스.jpg":
/*!********************************!*\
  !*** ./src/images/img/로고스.jpg ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/로고스.10d81cbd.jpg";

/***/ }),

/***/ "./src/images/img/문릿.jpg":
/*!*******************************!*\
  !*** ./src/images/img/문릿.jpg ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/문릿.76b9d849.jpg";

/***/ }),

/***/ "./src/images/img/물소리바람소리.jpg":
/*!************************************!*\
  !*** ./src/images/img/물소리바람소리.jpg ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/물소리바람소리.2c331856.jpg";

/***/ }),

/***/ "./src/images/img/바싸코.png":
/*!********************************!*\
  !*** ./src/images/img/바싸코.png ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/바싸코.ec14df85.png";

/***/ }),

/***/ "./src/images/img/반크.jpeg":
/*!********************************!*\
  !*** ./src/images/img/반크.jpeg ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/반크.574ad13c.jpeg";

/***/ }),

/***/ "./src/images/img/방송부.jpg":
/*!********************************!*\
  !*** ./src/images/img/방송부.jpg ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/방송부.a83eb5cb.jpg";

/***/ }),

/***/ "./src/images/img/배드민턴.png":
/*!*********************************!*\
  !*** ./src/images/img/배드민턴.png ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/배드민턴.7091edf2.png";

/***/ }),

/***/ "./src/images/img/베르데.jpg":
/*!********************************!*\
  !*** ./src/images/img/베르데.jpg ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/베르데.62f7ee95.jpg";

/***/ }),

/***/ "./src/images/img/벨아르떼.jpg":
/*!*********************************!*\
  !*** ./src/images/img/벨아르떼.jpg ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/벨아르떼.2399344f.jpg";

/***/ }),

/***/ "./src/images/img/사피엔스.png":
/*!*********************************!*\
  !*** ./src/images/img/사피엔스.png ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/사피엔스.8341aedb.png";

/***/ }),

/***/ "./src/images/img/설록.jpg":
/*!*******************************!*\
  !*** ./src/images/img/설록.jpg ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAAMCAgICAgMCAgIDAwMDBAYEBAQEBAgGBgUGCQgKCgkICQkKDA8MCgsOCwkJDRENDg8QEBEQCgwSExIQEw8QEBD/2wBDAQMDAwQDBAgEBAgQCwkLEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBD/wAARCADyAPIDAREAAhEBAxEB/8QAHQABAAICAwEBAAAAAAAAAAAAAAgJBgcEBQoDAf/EAFEQAAAFAwMCAgMKCQkDDQAAAAABAgMEBQYHCBESCSETMRQZQRUiUVdYYZWW09QXMjhSVXF2tNEYI0JWdYGTl7MWNtImNDlDYnJ3goOhoqOx/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/ALUwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABBHV/1U7H09XhPxbju0ivW6qUrwao+7L9Hp9Pf9rJqSlSnnE+Skp4kkz25ciUkgjhaXW6yexWm1X1he1p1JUsicRSZciLJQj2mSnVOpUZfBxLfy3LzAWd4Izrj3UZjin5PxpUlyqXNNTLrLyCRIhyE7eJHeQRnxcTuXkZkZGlSTNKiMw2EAAAAAAIga7tedT0a1i0KXT8aRbqK6I0yQpb1VVE8DwFNJIiIml8t/E+bbYBIjCORXcu4gs3KL9KRTHLqosSrKhIeN1Mc3myWaCWZFy23232Lf4AGbgAAAAAAAritrqPZwrOux7TDKtWxk2s3e0+2yltwZhVD0Zh11CF8zkm34hk2W5+Ht57JIBY6AAAAAAAAAAAAAAAAAAPPRKrMTThrvq1w5wsRy54ttXnUJlUpclCVKmodW6pqSknPerP8AnW5COWxK2TuZEe5BYxknPHT31540VjKrZLpNn1yT4KqXMrlMKDNpLxLSZE086RMHyIjbUhLxkZKP5jAbk0Z6PqPozoV1t03LEu5qLcZxagfpkRuMzDNlDnJ5KkrURktC0cjPbs0kBEjNHV2yXcWQ5NhaSMYxK5EjurZYqM2nyZ8upcPxnWIrKkm232My5c1GnYzJBnxIMg0xdWa5a7kuJiPVLYlPtibUJaKezV4TD0NMOSsyJDcyM+pSkJUZkXiEoiTuW6eJmpIbg6jGtvJOjx3H7ePrZtqrldiaocv3ZakL8L0Y4vDw/Cdb239IXvvv5J2277hD+6esrqMuBuCnHONbVp5Q4LK6s89BkzDdk8S8VSEk6RMs8tySSjUrYtzURnxILcsfV+XddhW1dNQQyiVWKRDqD6WUmTaXHWULUSSMzMk7qPbcz7e0wFWnXF/3txL/AGdV/wDVjALBNF35JWIP2NpX7ugBucBWRqq6utTs6/5+MdNdoUmvPUuUqBJrtUQ7IZkSUq4rbiMNKQa0kouJOKUZKPfiky2UoMSwp1jciUm949q6nsd0yNSnnksyajSIb8SZTuW3847HdWsnUFvuZJ4KItzLkZEkwsZzVqExtgrEEzNV21YpFAaYadg+hKS45UnHi3Yaj99lm5vuR77EndRmSSMwFWNy9ZTU5XqzMqlgY1s+mUGGrxPRpEKVPcba3Pbx30utp/vShHkAmroT6hlvatlTLJuagMWzf1MjemLiMOmuJUY5GRLdjmr3yTSak8mlGoyIyMlKLlxCvuxP+l5k/wDivV/3iQAmJrB6mlwYpzHAwVpxs+jXvczL5Qquctp+Qgp7iiS3CjoYcQa3iM/f9zIlKJG3IlbBNfFL+TpdgUeZmONQot3yY5PVOLRG3ExIriu5MpNxxxSzQRklSuWxqIzIttgGWgAAAAAAAAAAAAAD5yHijx3ZBtrWTSFLNKC3UrYt9iL2mAr/AKnk3p09RrIFOxtV6FVnbzfivFTKquGumTODSTWppL6VbObJ5qS24laS2UZERgNAawOk1b+FsXXDmDFOTqjMgW1H9NmUivtNKeWxyIlG3JaJCTUkj3JJtly/OI9iMOq0bZwyVXdCGpPFrtUmzY1m2x6TRnFrUtcOJLbfblMJV5pbJDSlpIvLk4ZbANPaCrs1a2dUbwqek7GVGumousQ2KxIlxWnn4jBqdU2hBrebNKFqSo1bbkZto3/FIBmeorT31EdT15xL+yPpwSxWosFFPN+ktRo3jtIUpSDdI5Cuak8jIlee2xeRFsGyOsAi428f6a27xacbr6aBUyqqHFEpSZngUvxiMy7GZL5bmQCePT1sW17I0hY3O3KRGiO1yjM1iovIbInJUp8jWtxxXmsy5Ekt/JKUkXYiASLQhDaEttpJKUkRJSRbERF7CAVLdcX/AHtxL/Z1X/1YwCwTRd+SViD9jaV+7oAZvmOZWadiG+KhbhuFVott1N6Abf45SExXDb47e3kSdgFSnRaoVlVTPd3VWusRX7hpVuk9REvkSlNJW+lEh1sj8lkk20ci7klxReRmA2v1vKDZLdvY0uU48Rq7np02GlxJETz9OS2lSyWZd1JQ6pvjv5G6rb8YwGh9W1ZvOX08NK0WrrkHCdTU/HJe/H+YPwoO/wCqOpfH5t9gFjnTetqwqZoysFVoQoK26zBdk1hxCEqVJnqdWmQTx/0jSpJt7K8koSXkRAP3FGF+n7ZWYIldw8rH0TIcd+W3Gj0q6/FlpcU24mQ2mIUlRdkG7ujw9kkRnsXHsFOeom97nxxrayle1mVJdPrdLvqurhS0JI1sOKkvI5p3/pESjMj9hkRgN19Ki58bWdqwk0bMlBdbvOqtO0+3qhVDUlUCq8lE8yttZbpfeSakEtXviURo23d7BeAAAAAAAAAAAAAAAAAAqa1ddLDLFMybOzFpOeRKjzpyqsVFZqCYE+lSzXzUqI6tSEKbJe6klzStHZJErYjAaqruAOq7nynM41yFGveZQvER4zddrUePDPiZGlbx+IRv8T2UW5LVuW5EZkAsX0X6H7a0xYarlh3TJh3LW74QabqfQhRRX2jbW2mI2StlGylLjpclESlG4s9kkZJSEGr26eGtDS1lKfe2j2vT6tR5XiNxZFOqTEeezFUrkUeWw+pKHySZJ7p5ko0pVxQfYgyLCXT81g5vyzEybrDvGr0ujsPtPzYkitpkT6m22e6YyER1qbjsntsrukyIz4o3PkQbo6qGlHOOpdzGP4FrPYrSLbRWE1Al1KLEJnx/Q/CIvHcRy38Fz8Xfbj323IBK3S7ZFy4107Y7sG8YCYVcoFvQ4E+Ol5DpNPttkSkktBmlWx+0jMgG0QFenVM0lZ51L3Dj2fhqzma2xQYVRZnqcqcWJ4S3Vsmgtn3EGrckK8t9tu4CJVM0L9Uii0+NSKOV0wIMNpLMeLGyHGaaZbSWyUIQmWRJSRdiIi2IBJTQXps11Yzz6zc2oWRcL1oFSJsdxE+8Gqmyb6ySTe7CZDhmfY+/Ht8IDW2oTpi6hcTZakZZ0Z1B96nuynJkGHTqqinVOjKXvzZQta0JdZ2UZJ2XyNJ8VJPbkoMcsfpx609TOSIV06rq/U6PSWODcufWaw1OqC4qT3NiKy2tZN7mZ/j8EpNRq2UfvVBZBqH0h47zvp5ZwA02igwqHHjFbMplvxPcp6M34bCiSZlzRwNTai33NKldyVsZBV3G0VdTvBqqnj3FzlxlQKm6onHbXuxpiBLMy4m5wW80tszSREalIQe2xGexAJedOnp017TnXnsz5nkwXr0eiriUumRHSfbpTbhbOuOOl71b6k7o94ZpSlS/fKNfvQ1NR9AuoR/qESc2XNjKnyseP5CnXAcp+qQXUriKkOusuHH8U3DPc21cTRuR+ZdgGWdRLp45Kyjlal5z000Rl6u1I0+78RuoMwFty2SLwZzS3VoLkoiJKtjI+TaFERmpRkE49O1UzLVMR0L8P1qIoV9Q2fQ6qhuZHkty1t7EUpCmFqSXiFso09jSrkRFx4mYbKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAazzVqSwpp2Yo8nMt8NW41XnHmqepyFJkE8pokm4X8w2vjsS091bF37AMdsXWxpWyXcFPtSyM1UKp1iqvFHhQiJ5p59w/JKUuISZmA3cAx7IN+W1i+ya1kK8ZbkWiW/DcnT3m2VOqbZQW6jJCSNSj+Yi3ARf8AWxaJvjEq/wBXZv2YCVtrXJSbytikXfQH1PUyuQI9ShOqQaFLYebS42o0q7pM0qI9j7kA1dqC1c4O0wyKJFzDccyluXEiQ5AKPTX5XiJZNsnN/CSfHbxUefnv8wDUfrYtE3xh1f6uzfswD1sWib4w6v8AV2b9mAeti0TfGHV/q7N+zAPWxaJvjDq/1dm/ZgHrYtE3xh1f6uzfswEmsZ5HtPLtiUfJFjTnZlBrzByYL7rC2VLbJRp3NCyJSe6T7GQDJwAB0F/3xb+M7Hr2QrrkrYo9uU5+pznG0c1kyyg1qJKf6SjItiL2mZEAravvreUD3HqLOM8I1E6qe6afJrk9BR09/wAd1pndR7F/QS4W/wCcXtDUOC+sJmy3ciTKtnz/AJW2lNjKbbpdIgRITlPeNaTS60rgSnCJJLTwccPfkR8i27haHp61X4P1PUVyqYpu1EqXEQS51ImI9HqEIj9rjJme6dz25oNSDPsSjPsA2+AAAAAAAAAAAAAAACm7rT5WgXNmOz8T02Ul47KpT0yeSf8Aq5U421E2r5yZYZX+p0vnAaV6Xtjy711o2O60ypcW3Uza5MURb+G21HWlsz/9ZxlP/mAWtdRnOOSNPenNzIWK60zS64muQoRSHYjUlPguE5zTwdSpPfiXfbcBUnf/AFINXGTrKrOPryyFBmUOvxFwZ7CKFCaU4ystlJJaGiUn9ZGRgIyAPTFpu/J2xb+xdE/cWQEUup1ped1EVLHktOZMe2KmhsVRvjddUOGcw3VRj3Z96fLhw998HNPwgIPerOf+WHp/+tB/8AB6s5/5Yen/AOtB/wDAAerOf+WHp/8ArQf/AAAONUum09TqdKqH8rvAj/orK3vCauc1Lc4pM+KS4dzPbYi+EBDQB6H+nn+Rdin+xlfvDoCRIAAov6l2s2487ZUq2KLUrL0fHdnzlwW47DhpRVZrKjS7Kd27LSSyUloj3IklyLus9ghOAAMoxjky9cPXzScjY9rj9KrtGfJ+M+2fZReSm1p8ltqLdKkH2UkzIwHpBwHlqm51w1aOW6UwTDVy0xuW4wSuRR5BbofZI/bwdQ4jf28dwGfgAAAAAAAAAAA+UmTGhx3JcyQ2wwyk1uOuLJKEJLuZmZ9iIvhARA1YdS3B+A7em0uw7jpd93242tqHTqZJTIiRHdticlvtnxSlJ+baVG4Z9tkkZrIKNb1vK5MiXdV76vGqO1Kt12Y7OnSnPNx5xRqUexdiLvsSS7EREREREQDsMZZTyFhu7ol94yuyfb9bh9kSojm3NBmRm24k90uNmZFuhZGk9i3IwFikPWhivqBYmiab9Sl0t4quZ6pRJTNxRY5O0uoOtciJJ+IovRVq59+ajR27LLckAODnnpGWdh7Ct4ZYp2bqtVnLZpD1UairpDTbcg0J3JJrJ09iP4SIwFZ4D0xabvydsW/sXRP3FkBXZ1zP+c4W/wC5cX/7TgFc2GcPXvnrIlMxbjqHGlV+rJfXFakSEsNqJllby91q7F7xtR/P5AJK+qR1of1St36fj/xAPVI60P6pW79Px/4gHqkdaH9Urd+n4/8AEA9UjrQ/qlbv0/H/AIgLfdIeNbqw/ptsPGl7xmI9coFNVGmtMPJdQlZvOK2Jaeyuyi8gG4AHRX3VJVDsi4a3A39Jp9Klymdi3Pm2ypSf/ciAeXVxa3VqddWpa1malKUe5mZ+ZmYD8AAABMvRLl/Wlp5r0BePsRZAvCxau4iRMt5NCmPRJTayI/HjOE2ZMuGkyMnE+9V25koiLYL1oEpU6DHmrivxVSGkOmw+kicaNREfBZEZkSi32PYz7kA+4AAAAAAAAAA0trU/JIy9+x1U/wBBQDzoUC3bguurx6Ba1DqFYqctZIjwoEZch95XwIbQRqUf6iAWaaIek/XHavTsp6paY3DgxFokwLOWoluyVl3SqcZGaUNl2PwCM1K8l8SI0KCUGr3pq4h1JtSbrtRuPZF/GjcqnDjl6JPURdky2E7EZ+zxUbLLtvzIiSAqMuLRZqJtXN9GwDXLCksXJcMv0alPJ3XBmNke65Db5FxU0hG61n+MhJHySky2AXB5oxDT8DdN+9MTU2sTqq1b1kS465kx5S1vumk1OKIlGfBHNSuLZHshOyS8gFBYD0xabvydsW/sXRP3FkBBHrN4yyTkWRiE8fY+uW5yp6K8Us6NSZE30fmcDh4nhIVw5cF7b7b8T28jAVrN6bNSbKycawFktCi8lJtWeRl/9QDgXNiTO1lUhy4LyxlflBpbKkocnVOizIsdClHskjccQSSMzMiIjPuYDDW51UdcS01MlLWsySlKXFGZmfkRF7QGx/5PGp/4jco/Vmo/ZgH8njU/8RuUfqzUfswF23TStu67S0c2XQb1oFWo1XjyKqb8KqRXI0lslVCQpJqbcIlFukyMty7kZGAlCA0Dre1JUHTJgSt3dNKNKrdWaXSaBTne5SprqDIjUn2ttp5OL8tyTx3I1JAedUAAAABcB0i9XlyZDpMjTTfLcuoSrUphzqDVdjXxpza0NnFeV7PDNxBNqPsaPeduCeQWUAAAAAAAAAAAA6+v0Ch3VRJ1t3LSYlUpVTYXGmQpbSXWZDKi2UhaFdlJMuxkfYwFZetbV9eGhfNkbFWnbF+MLfoUq3YlTdS3bZMuKdcefSojOO40k07NJ2Iy89+4DRPrl9Wn6Ex39DyfvIB65fVp+hMd/Q8n7yA+a+shquccbdct7HC1smZtqVRZBmgzLYzI/Se3YzL+8Bxqz1fdTlx0qVQrhs7F9Ups5s2ZUOZb7z7D7Z+aFtrkGlST+AyMgGBfy/rk+TFpx/y7Z+0AXn4RrTlyYXsG4nafAgLqlr0qaqLAYJmNHN2I2s22Wy7IbTy2Sn2ERF7AFMWZupDrStXMF9WvQM1ORaZR7lqcCEx7gUtfhMNSnENo5KjGpWyUkW5mZnt3MwGHes/10fHq59XaT91AYhlfXHqlzhZcrHmUcprrdvTXWnn4Z0enx+a2lktB82WELLZREfZXf2gNGxpD0SQ1Kjr4OsrS4hWxHsoj3I9j+cBKH1n+uj49XPq7SfuoB6z/AF0fHq59XaT91ATS6Wur3UTqJy7dtsZjyKu4aZTbbOfFYOlwovhv+lMo58o7KFH71ai2MzLv5ALMQGlc46PsHaj7sod15iodSrx29FXFhU/3VkR4SSWvmpZttKSZrMySRny7khJHuREArn6r2nvS1iel2vPxfLt+z70jtpjvWnT2VcqjAUpXGUskEZNuIVyLxHTLxU7kRmbZEArZAAABa7019UVl4Ux3Y2LMqYnVZUa+n5hUDIBMNlEuJ4prqfClOkklJW0tXgpUpSiJJI34JMlGFpYAAAAAAAAAAAACr/qYX7pLtDUDTIGb9PNdvi4JFrRJLdSg3S/Tm0RjkykIZNpHYzJSHD5e3mRewBEz8NHTq+Rfdv8AmBKAPw0dOr5F92/5gSgD8NHTq+Rfdv8AmBKAdHfGWNClVs6s0yxdJ9zUK4ZUJ1qmVN+9pMluHJNJk26ppXZwkq2PifYwEZgHpi03fk7Yt/YuifuLICv7W7jnp7absiRZOUMC3lcVYvs5leekUq4H20E6p8zd5JXISRGa1mZEktiIBHH8LXSu+Srk36yufewD8LXSu+Srk36yufewD8LXSu+Srk36yufewD8LXSu+Srk36yufewD8LXSu+Srk36yufewFlOhDCGmOi2PTdQ+AMe1i2DviluRltVKqvynUx0STI0KStxaCPmwR7p77f3gJWAOlvW7KRYVnV2+Lge8KmW9TZNUmL/NZYbU4sy+fikwHmhy/lK6M15MuLKV4ylPVW4pzktwjUaksoM9m2Ub+SG0ElCS/NSQDDwHJpdLqVcqcSi0aBInVCe+3FixY7ZuOvvLUSUNoSXdSlKMiIi7mZkAmPT+kZrJnMQ33LftmJ6WhC1okVxslRuREZk4SSPunfYyTy7ke24CeOqfS5Ct/pmrxVNKJPrGL7fi1diay2fApkUyXLdb3LkSVtrlF32PZe5gK7ck9RLUdXIljtWRmK4qKVFtWDTKm1FWTZP1BlTiHH3DNP84pxBNKNR7lue3buQC7TTjcNau7Tzi+67kqDs+rVqzKJUJ8t3bnIkvQWXHXFbbFupalGe3wgNigAAAAAAAAACk/rR/lWW/+wkD9+ngIk4QewCxdUteouHfUi3Dp6yiJs9cRMwpviN8DWck+HheH42+3vuXD2bgN2+6HS0/QOpn/AB6H/EA90Olp+gdTP+PQ/wCIB7odLT9A6mf8eh/xAPdDpafoHUz/AI9D/iAuz05V+0rnwLj+s2HHqrFuO27BbpTdV8P0xMVtlLbfj+GZo8TiguXE9t/IBFjqKaD8tau7xtC4sc3LaNMj2/TJEKSitypLS1rW6SyNBMsOkZbF33Mv1AIjepT1Q/GFi36SqP3IA9Snqh+MLFv0lUfuQB6lPVD8YWLfpKo/cgHW3N0cdStq25VbnqF+4zci0eC/PfQzUZ5uKbabUtRJI4ZEajJJ7bmRb+0gEDwHoV6cP5E2LP7OlfvsgBJMBWB1YNb0u3CrGkmw4LZSZ8Fj/aqpvbmbLLyUvIiMp/OU2aFLWe5cVkki3MzIKlgAB+oWtpaXWlqQtBkpKknsZGXkZGA9BfTeynUssaQrLrNyXkq47jp3ptLq8h58nZLS2pbpMNvn58/Rjjnur3yiNKjMzMzMJGXDQaTdVAqVsV+EiZTKxDegTY69+LzDqDQ4g9vYaVGX94Cp6u9Ee+V3881bWZaA1ZTkk1NPzYryqmywZ78TZSkmnFpLty8RBK232TvsQWoY8sum42sC2cd0V996n2tR4VFiOSDI3VsxmEMoUsyIiNRpQRnsRFvuAyEAAAAAAAAAAQR1zdOK6tXGX6dkyiZOpNvR4Nvx6KqLKgOPrUtuRIdNwlJURbGT5Ft/2TAR39R/kP4+rd+h3/tAD1H+Q/j6t36Hf+0APUf5D+Pq3fod/wC0APUf5D+Pq3fod/7QA9R/kP4+rd+h3/tAFm2AMZy8M4Ws3Fc+qs1ORa9JYprkxls20PqQWxqSkzMyI/gMwGwAAAAAHQ39QZl02JcdsU9xluVV6TMgMLeMybS46ypCTUZEZkndRb7EZ7ewwFOXqVtVH9e8WfStQ+4gLTtJeI7kwRp3svEt3zabLrFuRHmJT1NdccjLUuQ64XBTiEKMuLheaS77/rAbdARczL04tN+ecs1PMeRY9ySqxV2ozcqNGqZR4qvAZSyhWyEE5vwQgj9/7PYA6l7pTaIHYZxkYrntOGW3pCLjqJuF8+ynjR/8QEe819FO1pcKRU9P+TJ1OnJI1t0q5eL8Zw/zUyWUJW0XwckOfOZeYCuPNOmbOenupKgZYxzVaKybhts1Dw/GgSD9nhyW92lGZd+PLkW/ciAbO6f2rGbpZzZEmVic6VjXOtunXLH7mltszMmphJ/PZUo1HsRmaDcSXcy2D0DRpMabGamQ5Db7D6EutOtqJSHEKLdKkmXYyMjIyMgH1AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcao06n1eC/TKtAjzYclBtvR5DSXGnUH5pUlRGSi+YyARfyf0yNHWT3npzmM/8AZae/uapVsylQCL9TBco5f4QCSNm2rSrFtCh2RQkupptvU2NSoZOqJSyYYaS03yMiLc+KC3PYgHcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//2Q=="

/***/ }),

/***/ "./src/images/img/스위스.jpg":
/*!********************************!*\
  !*** ./src/images/img/스위스.jpg ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/스위스.9afd00f9.jpg";

/***/ }),

/***/ "./src/images/img/스카.jpg":
/*!*******************************!*\
  !*** ./src/images/img/스카.jpg ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/스카.734cc3aa.jpg";

/***/ }),

/***/ "./src/images/img/식용곤충.png":
/*!*********************************!*\
  !*** ./src/images/img/식용곤충.png ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/식용곤충.f90b7473.png";

/***/ }),

/***/ "./src/images/img/쌤.jpeg":
/*!*******************************!*\
  !*** ./src/images/img/쌤.jpeg ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/쌤.f8edfd33.jpeg";

/***/ }),

/***/ "./src/images/img/아마란스.png":
/*!*********************************!*\
  !*** ./src/images/img/아마란스.png ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/아마란스.8c6853b7.png";

/***/ }),

/***/ "./src/images/img/아트비트.jpg":
/*!*********************************!*\
  !*** ./src/images/img/아트비트.jpg ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/아트비트.20e72997.jpg";

/***/ }),

/***/ "./src/images/img/액츠.jpg":
/*!*******************************!*\
  !*** ./src/images/img/액츠.jpg ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/액츠.35f0e0e8.jpg";

/***/ }),

/***/ "./src/images/img/에렌시아.jpg":
/*!*********************************!*\
  !*** ./src/images/img/에렌시아.jpg ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/에렌시아.8cc1fe15.jpg";

/***/ }),

/***/ "./src/images/img/엑스타시.jpg":
/*!*********************************!*\
  !*** ./src/images/img/엑스타시.jpg ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/엑스타시.7cf931f3.jpg";

/***/ }),

/***/ "./src/images/img/와델씨.jpg":
/*!********************************!*\
  !*** ./src/images/img/와델씨.jpg ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/와델씨.634782b1.jpg";

/***/ }),

/***/ "./src/images/img/우나.PNG":
/*!*******************************!*\
  !*** ./src/images/img/우나.PNG ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/우나.132832d6.PNG";

/***/ }),

/***/ "./src/images/img/이콘.jpg":
/*!*******************************!*\
  !*** ./src/images/img/이콘.jpg ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/이콘.ab6c0e38.jpg";

/***/ }),

/***/ "./src/images/img/인터뷰.png":
/*!********************************!*\
  !*** ./src/images/img/인터뷰.png ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/인터뷰.da69dd6e.png";

/***/ }),

/***/ "./src/images/img/작은연인들.png":
/*!**********************************!*\
  !*** ./src/images/img/작은연인들.png ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/작은연인들.a39ca5b5.png";

/***/ }),

/***/ "./src/images/img/츄러스.jpg":
/*!********************************!*\
  !*** ./src/images/img/츄러스.jpg ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/츄러스.0677ad8f.jpg";

/***/ }),

/***/ "./src/images/img/치즈.jpg":
/*!*******************************!*\
  !*** ./src/images/img/치즈.jpg ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/치즈.29ed66a9.jpg";

/***/ }),

/***/ "./src/images/img/키마.png":
/*!*******************************!*\
  !*** ./src/images/img/키마.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/키마.c3a6296e.png";

/***/ }),

/***/ "./src/images/img/타임.jpg":
/*!*******************************!*\
  !*** ./src/images/img/타임.jpg ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,/9j/2wCEAAEBAQEBAQIBAQIDAgICAwQDAwMDBAUEBAQEBAUGBQUFBQUFBgYGBgYGBgYHBwcHBwcICAgICAkJCQkJCQkJCQkBAQEBAgICBAICBAkGBQYJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCf/dAAQAFv/AABEIAUABUgMBIgACEQEDEQH/xAGiAAABBQEBAQEBAQAAAAAAAAAAAQIDBAUGBwgJCgsQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+gEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoLEQACAQIEBAMEBwUEBAABAncAAQIDEQQFITEGEkFRB2FxEyIygQgUQpGhscEJIzNS8BVictEKFiQ04SXxFxgZGiYnKCkqNTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqCg4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2dri4+Tl5ufo6ery8/T19vf4+fr/2gAMAwEAAhEDEQA/AP78KKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooA/wAgv/g6L/5TrfHL/uWf/UY0mvwDr9/P+Dov/lOt8cv+5Z/9RjSa/AOgD//Q/vwooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigD/ACC/+Dov/lOt8cv+5Z/9RjSa/AOv38/4Oi/+U63xy/7ln/1GNJr8A6AP/9H+/CiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAP8AIL/4Oi/+U63xy/7ln/1GNJr8A6/fz/g6L/5TrfHL/uWf/UY0mvwDoA//0v78KKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooA/wAgv/g6L/5TrfHL/uWf/UY0mvwDr9/P+Dov/lOt8cv+5Z/9RjSa/AOgD//T/vwooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigD/ACC/+Dov/lOt8cv+5Z/9RjSa/AOv38/4Oi/+U63xy/7ln/1GNJr8A6AP/9T+/CiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAP8AIL/4Oi/+U63xy/7ln/1GNJr8A6/fz/g6L/5TrfHL/uWf/UY0mvwDoA//1f78KKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooA/wAgv/g6L/5TrfHL/uWf/UY0mvwDr9/P+Dov/lOt8cv+5Z/9RjSa/AOgD//W/vwooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKrPc20Ue9pVUepNAFmivD/ABt+0t+zz8No2b4geOdC0Xy/vfbNQt4Nv/fb15vpf7e/7EmuXo0zR/i14SubiQ7Vjj1ezZj/AMB82gD64orl/Dvjjwd4utVvPCmrWepQt0ktpo5V/wDHGrpxLG3QigBaKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigD/IL/4Oi/8AlOt8cv8AuWf/AFGNJr8A6/fz/g6L/wCU63xy/wC5Z/8AUY0mvwDoA//X/vwooooAKKKKACiiigAooqJJkaQpz8tAEtFFFABRRRQAUVFHcJMPkzj1qWgAooooAKKKKACoZZvIieXbu29qe8qRrvbNfyif8HCn/BdGb9hTRZP2Tv2Ybn7d8W/E0G154vn/ALHt5vkVtv8AFcvu+Rf4PvUAfaf/AAVN/wCC/X7Jf/BNLT7nwfcyDxl8Rdn7jw7YTLuiZ/4ruf50hT/x/wD2a/k4l/aO/wCDij/gt5rd5cfBO1v/AAN8P9QlZETT2bStNSF2+612/wC9uf8AeXdX37/wRa/4NspfHr2P7cH/AAU+im8Q67rUi6pYeG9RaR/mdtyzalv/ANYz/e8r7vzfP/dr+5Xw94a8PeFdHt9A8NWUOn2VogSK3t41jRF/uqq/doA/gM+G3/Bnb8dfHtqviL9p/wCPIhv5EZ549MtZtQYSP/03upYd3/fFeIfsX/8ABqdZ/tT/AAt8S+KvFvxI1/wNrmg+JtW0O2t73R18q5t7CZora6XfOj7ZlXd8vr/FX+kCIo16AUioi/cUD6UAf5xfjf8A4N3f+C0/7BWsL8SP2Ifiq/ioWLb0t9LvrjT7r7vzbraVvKZf4fvtXtf7G/8Awc9/tcfsj/FKH9m//grj4JuSLOVbeXV47VrPUbb/AKaTwbdlyv8AtRbf+BV/oF1+d/7ff/BNP9lj/gop8Lb34dftA+Hbe6mkXdZatAnl6hYybdiyQTL8/wDwD7rUAfS37OP7S3wV/at+GVj8X/gPr1r4h8P6goaG5tpN2P8AZkT70bf7LV71X+ZBCv7dv/BrF+21bC5ubjxh8GfFlyyN95bPUrVPvNt+5BfQ/e/+KSv9FH9lf9p74S/tf/A3w7+0B8FtSTUtB8RWq3EEgPzI38cbf3WRtyv9KAPo6iioZZkhcbs80ATUUbt5ooAKKKKACiiigAooooAKKKKACiiigD/IL/4Oi/8AlOt8cv8AuWf/AFGNJr8A6/fz/g6L/wCU63xy/wC5Z/8AUY0mvwDoA//Q/vwooooAKKKKACiiigBVO3gV/Er+2r/wclfGv/gnJ/wUW+Mf7O/ifwGfiN4e029sZNGWK4+ySWCzWcLyRsyRTeYrs27/AL6r+2mvlzQ/2N/2avD/AMS/FXxctvCOn3HiHxncxXWr3l5Cty88kMKxR/63ftVFUfKm1aAP4zv+I1TxB/0bnd/+DVv/AJDqtdf8Hr+pWChr/wDZ5uLcN0MmsMu7/wAk6/uE/wCFB/A7/oTdE/8AAC3/APia/jW/4PL/AId+APBf7IvwoufCGh6fpck3iq4jeSzto4GK/Y2b5ti/MtAHlMP/AAeqa9Pbi4t/2dbl426OmrMyn/yTqT/iNR8Qv/zbnd/+DVv/AJDr90P+De74OfCjxH/wSI+C+t6/4Z0u8uptLm3yzWkMjv8A6RN95nX5q/ahvgD8ED/zJ+if+AFv/wDE0Afzr/8ABDb/AILHfGH/AIKs/tSfFK58U6Cvg/wx4a0XTf7O0TzPPkS4mlk8+4afam7f/ufdC1/UIhLpxXzp8P8A9lf4D/C34q618b/AHhuz0nxL4gsrfT765s4/IWa3tWZ4laNPk3Kzn5tu6voxTt4FACV/Nl/wWH/4LofGD/gkn8QdF0vxV8IbfxP4V8TK39l6vDrHkSSyQ7fPjktmtn8tk3f32r+k2v4QP+D2pf8Ai3nwTH/T/qX/AKLjoA/qw/4Jt/tcfGP9t/8AZp0X9pL4leCLbwLZeJ41vNJs4786hLLZuPlklbyIVjZ2/h+b5a/Q+vy7/wCCLH/KLD4Hf9itZ/8AoNfqKp28CgD4P/4KO/tqeAP2Bv2QPGH7TXjadf8AiR2bLYW+fmur6ZdlpCv+/Ky/8B3V/FP/AMG6v/BP3xb/AMFJf2s/Ev8AwVe/bSQ63p9lq0kumwXKbkvtWdlfzvm/5YWn3UX+/wD7te2/8HgH7RfifxR4w+Ef7BfgZ5DJrV0urXkC/wDLWaaRbW0j2/7zO1f19/8ABOv9lDQf2Lf2Nfh9+z1osaRv4f0m3jvCg277p13zs3/bRmoA+1E+x6dGIU2Rr2HSrgMbcK1fl7/wVb/Yv+K/7bX7NbeBvgX471D4f+MtDu49X0fULOaSKJ7qH7kNzs+Zon/8davzY/4Jj/8ABZTx+Pikv/BPH/gqPYjwN8cdH22tre3IWDT9eX7sc0En3PNf/Z+R/wCD+7QB/TRRUUD+dCrAY+lS0AB+XrXFePfHvgv4beD9Q8c+P9VttH0jTYWmury7lWKKGNF+ZmZq+dv2w/21v2fP2G/g5f8Axt/aN12DQtIs9yxI7L593N/DDbR/fkkf/Zr+V3R/hl+3b/wce/E608c/GhNQ+EH7Jum3Svp2jRFoNS8Rxp92aRv4t/8Ae+4iN8m5/moA/V+9+Jn7C3/Bwz+zd8Vv2ePBen3upaJ4buvsFrrtxaNBAb7bugvLCRvnZUZf9nen3/kav5tP+De/9rD4u/8ABMn/AIKM+Kv+CTf7SdyU0fWtSmtbITyNstNUh/1cke7/AJZXcSr/AOO1/ep+z3+zf8Gv2V/hhp/wc+BOgWnhvw9pcSxwWlomBx/E7fekdv42b5mr+Gv/AIO3P2a7z4A/tE/Cb/gpF8K4fsF9cXi6ZqVzB+7b7dYMt1aTM3954t6/7kS0Af6A9tL50IZ/4q/mV/4OQf24f2nv2EtA+BvxV/ZZknuNYk8VXEU2kxpJLFqUf2OT9zLFF88i/wAXy+lfuf8AsYfHfRP2nv2Ufh98ftClWW38W6DY6i20q22SaFWljb/aRsq/0r03x38G/hf8SvEPh/xb430Sz1TUvCty95pFxcxLJJZ3DxtE0kO77rbWK/jQB/Awn/B03/wWDiAT/hnazO35f+Qdqn/xVS/8RUH/AAWD/wCjdbL/AMFuqf8AxVf6Dsfh/R0VU+zQf9+1pf7B0f8A59YP+/S0Af58P/EVB/wWD/6N1sv/AAW6p/8AFVw3jT/g7l/4KifDezhvviD8EdF0OG4bZFJfWuoQK7f3VaVvmr/RX/sHR/8An1g/79LX8TP/AAeoadZ6d+y18JjbRJHu8TXCttG3d/ou6gD+gL/gjn+2L+1B+3j+ybpP7U3x/wBP0LTLXxQzPpNpoyXAaKGFmiZrlrhvmZ2X5Ntfr3X4a/8ABt7/AModPg//ANeNx/6USV+5VABRRRQAUUUUAFFFFAH+QX/wdF/8p1vjl/3LP/qMaTX4B1+/n/B0X/ynW+OX/cs/+oxpNfgHQB//0f78KKKKACiiigAooooAKKKKACv4r/8Ag9Y/5NA+Ef8A2Ndx/wCkbV/ahX8WH/B6v/yaD8Iv+xsuP/SNqAP2W/4N0v8AlDn8FP8AsFy/+lE1ftzX4jf8G6X/AChz+Cn/AGC5f/Siav25oAKKKKACv4QP+D2pf+LefBMf9P8AqX/ouOv7v6/hE/4Paf8AknfwT/7CGpf+i1oA/p3/AOCLH/KLD4Hf9itZ/wDoNfqJX5d/8EWP+UWHwO/7Faz/APQa/USgD/OS/b40rUP2tf8Ag7M8G/B820U0PhrVtBgeKV22Pb6bbrq07f733v8Avla/0ZbRGihVHr/Oy+I/iDR/g9/weR6d4h8YLJb2l9rNvFA+378mpaH9lg/4D5sirX+ihbALEI06L8tAErKjDDjO2vyg/wCCnP8AwSk+AH/BTP4WLoPxEgOk+LtH3S6D4ksv3d9YzfeVd38UW/G+NvTf8rV+r9MMaFfnoA/kU/Yj/wCCqP7SH/BOz4+ad/wTT/4LE+Za/NHbeEPiHJuFjqlv9yNbmd/kb+FfM/gf5H/vV+oP/BR3/gtl+yb+wr8OFuPD+r2/j/x1q8jWmieGdBnjurm5uvur5vlb/Kj34X5vnf7qK1ew/wDBWz9g/RP2+P2MPGfwcttEstU8U/YJJvDk94nzW2oIvytHJ/yz37dtfx2f8G8H/BGH9uH4Qf8ABRKD45ftUfD6bQfDfg+3vE8/WI43868dfKga0379zI3zeZQB+tf7IP8AwSX/AGlv+CkXxm07/goN/wAFmZ3meNluvC/w4B26fp9u/wAy/a4P733d8X32/jb+Gv62dA0TTPDmk22iaTbxWlvZxLDFFCixxpGn3VVV+6taUFvDAq+Wu1sVZoAK/m+/4Om/hbYePf8AgkP4z1e5RVn8O6jpupxPtVm3JNsbb/d+Vq/pBr8D/wDg5e8QWGh/8Eefif8Aa5EU3S2Nuisdu5nuF+Vf9qgDgf8Ag1p+ImpfED/gj14Dh1Vy50G/1TS0P3f3cN0zL/47JX9F1fzH/wDBphZ31l/wR/8ADc90mEufEGsPH7r9o2f+hLX9OFAHjX7QPxy8Cfs1fBrxF8d/ibJLFoHheza9vXt4/MlWFPvbU/irz3w9+2z+yD4j0W01/S/iX4Za2vIkmiJ1S1XMbruX5fN9685/4KZfBbx5+0T+wZ8Ufgf8L7YXmv8AifQ7iwsYSyx75pvu/M/y1/JZ4T/4MqfCtz4csLnxV8c9TttUaCP7VHa6ZH5CTbfmWPfLu27qAP7NP+Gv/wBlD/opPhj/AMGtr/8AHa/jN/4PHvjZ8Hfip+zB8KdP+GfinSdeuLXxLcSzx6feQ3LIv2Vk3MsTPtXdXQf8QT3w3/6L3rP/AILIf/j9fhL/AMFz/wDgg/4Y/wCCSPwi8HfELQfiHf8AjWXxRqsmnPBd2i2ywrDD5u5WWV/92gD+67/g29/5Q6fB/wD68bj/ANKJK/cqvw0/4NvG3f8ABHT4P/8AXjcf+lElfuXQAUUUUAFFFFABRRRQB/kF/wDB0X/ynW+OX/cs/wDqMaTX4B1+/n/B0X/ynW+OX/cs/wDqMaTX4B0Af//S/vwooooAKKKKACiiigAooooAK/iw/wCD1f8A5NB+EX/Y2XH/AKRtX9p9fw0/8HjnxQ0L4kfDP4Z/s5/D+3vdY8WaPrM2rX1taWk0v2e1e38qORpUTZ87fw7qAP3d/wCDdL/lDn8FP+wXL/6UTV+3Nfz4/wDBtV8X/CfjL/gl14D+E+n/AGm28Q+BYJLDWbK6gkgkt5Hmkkj/ANaibldP4lr+g6gAooooAK/hC/4Paf8AknvwT/7CGpf+i46/u9r+Af8A4PF/iFo/xe174afA74ZW99rfiPwpPeXWrQWlncSLbR3Ma+XulVNm5/7qtQB/Vp/wRY/5RYfA7/sVrP8A9Br9RK/GH/ggp8Z/A/xN/wCCZ/wy8JeG5Z01XwjpFvpOrWlzbyW01tdQr80bLKqbv95a/Z6gD/Oq/wCDnPw94i/ZV/4K7fBb9uPTRIltcLps7Tr93zNHul3Rr/vq1f6C/wAK/Hvh74p/DjQviX4SnS60vXrCC/tZUPyvDcxrKrf+PV+CX/Byh+wBrf7bX/BO/VtY8BWQvPFvw7l/4SCwjQbpZoYVb7XCv/bLLbf9ivlb/g1V/wCCkNl+0p+ye37JvxA1BE8YfDBVgggkbEtzpb7vLkVfvt5Lbo3/AOA0Af1qUUiOj8UtABRRRQAUUUUAFfxef8Hjf7S9n4S/ZN8DfsqaO8cuq+ONd+3zxD5pEtdNVWVvvfKzzyKv4NX9kniDxHonhLRrrxD4huEtLKwhkuJ5ZDtRI413MzN/srX+ax4h1nW/+Dgv/g4As4/D7TX/AMMvBNyqxSBWaGLR9Nm81pP9n7XLn/eyP7tAH9vX/BF79m6+/ZW/4Jj/AAi+EGtxeTqcOiQ3t/HsVGS6v/8ASZFbZ/EjSbd3tX6jSzJCwDfxfrWdodlbabpVtp1kgiigjWNFH8Kou1a/n0/4OQvj9+0f+zP+yR8P/iZ+yhd3kPjK3+IGmpZ29msjteb7W8/0WSBP9dG/H7v2FAH9Eajd0pK/z5bb/gtB/wAHOzWyNF+z5dyptXa3/COXnzf7X3qtf8Pnv+Dnn/o3q7/8Jy8/+KoA/wBBCv4kf+D1xdv7LHwjfd97xRcf+kbV8u/8Pnv+Dnn/AKN6u/8AwnLz/wCKr80P+CkXxJ/4L0f8FRPAug/D/wDaK+AWuxWPh29kv7X+z9BuopPMePyvmZ9/y7aAP7df+Db3/lDp8H/+vG4/9KJK/cqvwO/4N2dQ8deE/wDgnD4T+AXxZ8Ha/wCCvE3gbzLO8ttZ0+azEnnTM8ckDSrskXaf4fu1++NABRRRQAUUUUAFFFFAH+QX/wAHRf8AynW+OX/cs/8AqMaTX4B1+/n/AAdF/wDKdb45f9yz/wCoxpNfgHQB/9P+/CiiigAooooAKKKKACiiigAI3da5248I+Gb+U3V/p9vPK38UsSs1dFRQBiaZ4e0HRSzaVaRWzN18pFjz/wB81t0UUAFFFFACqN3SucufCHhe+uWv7/T7eeZuryRKzV0VFAGNpug6RpJb+y7aO2VmyREqxj/x2tmiigDO1GyttRs3s72MSxyKysh5Urt+61f5xf8AwV2/Ym/aD/4Id/t/ad/wU4/YwgeLwJrGpNcTR26MILG4uW3XNjcqv/LC5+bZ/B/BX+kLXkfxh+Dvw6+Onw81b4YfFfS4Nb0HWreS3vLK7RZIpY3GP++v7jfeFAHwz/wTC/4Kifs9f8FMvgVZ/Ef4UahFba7awKNZ0KVlW7sLj+NWX+KLd9yX7rV+oCyo23YQd1f51/7b/wDwQy/bs/4JO/Gab9tf/gk1rGqar4bsXa6fTLMtLqFnD95o5YPu3dt8rf3n2/w/xV9r/sH/APB3l8LryO08Af8ABQ7wrd+E9egVbefWtLgaW1eTd96e2/1sP8X3d9AH9vdFfnt8E/8Agqx/wTu/aIgtH+Efxe8MarPfbhFaf2hDBdH/ALYSskv/AI5Vz4cf8FKf2RviIPHskviyw0O1+HWtzaDql3q93b2kDXEKq7SQyPL80XzfI1AH3+GK9KoXt9bWNrJd3EqRpGuWLnAC1+EX7WP/AAcdf8Erf2YNFuXPxCtvG+sQf6rTfDf+nu8m3cq+en+jr/vb6/lI/aP/AOCwf/BU3/guf4yuf2Wf+CfPg7UfC/hDUPkvDp7N58lu/wArNe3vyJBF97eqv8/+1QB9k/8ABwV/wW81T9oDXf8Ah2J/wT3vpNc1LxBdf2Xr2q6Xuka4Z22f2faMn3ldv9dKvybPk/vV+8n/AAQN/wCCTmk/8Ewv2YEh8Z2yS/EjxgI73xHd/e8vYv7izjb+7Dub/eYt/s149/wRW/4N9PhL/wAE3bKP4y/FSe38W/Fq6g8t9R8vdbacr/6yO03/AMX8Pm/e21/Smi7AqUAPRURdifLXD+Lvh74H8ezaXL400y21I6LeLqFj9ojV/s90isizR/3XVXb5veu3ooAiS3hRdm2jyIvSpaKAIvIi9KPIi9KlooArG1hLByv3fu1ZoooAKKKKACiiigAooooA/wAgv/g6L/5TrfHL/uWf/UY0mvwDr9/P+Dov/lOt8cv+5Z/9RjSa/AOgD//U/vwooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAoI3daKKAIXtbaRcOiFfcV+TX7YX/BFL/gnr+3A8upfGX4d2EWszFmbV9LH2G8LP8AxM0X3v8Age6v1rooA/iV+Mv/AAZb/s6a7eG/+A3xc1/wwWlZmg1K1h1CML/CqeU1s6/7zO1eDaN/wZNXK3apr/x/eS23KxEOibXdf4l+a8+Vv9r5q/vjooA/lS/Z9/4NGf8Agmr8ItQh1v4gza74/uYWV1j1S4WCA/7LRW6puX/er+j74Hfs6/BH9nHwXD8P/gf4V03wvpUH3bfT7eOFW/2m2feb/aavb6KAGIqJ9wYp9FFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQB/kF/8AB0X/AMp1vjl/3LP/AKjGk1+Adfv5/wAHRf8AynW+OX/cs/8AqMaTX4B0Af/V/vwooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigD/ACC/+Dov/lOt8cv+5Z/9RjSa/AOv38/4Oi/+U63xy/7ln/1GNJr8A6AP/9b+/CiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAP8AIL/4Oi/+U63xy/7ln/1GNJr8A6/fz/g6L/5TrfHL/uWf/UY0mvwDoA//1/78KKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooA/wAgv/g6L/5TrfHL/uWf/UY0mvwDr9/P+Dov/lOt8cv+5Z/9RjSa/AOgD//Q/vwooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigD/ACC/+Dov/lOt8cv+5Z/9RjSa/AOv38/4Oi/+U63xy/7ln/1GNJr8A6AP/9H+/CiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAP8AIL/4Oi/+U63xy/7ln/1GNJr8A6/fz/g6L/5TrfHL/uWf/UY0mvwDoA//0v78KKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooA/wAgv/g6L/5TrfHL/uWf/UY0mvwDr9/P+Dov/lOt8cv+5Z/9RjSa/AOgD//Z"

/***/ }),

/***/ "./src/images/img/포텐시아.jpg":
/*!*********************************!*\
  !*** ./src/images/img/포텐시아.jpg ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/포텐시아.726e7494.jpg";

/***/ }),

/***/ "./src/images/img/프시케.jpg":
/*!********************************!*\
  !*** ./src/images/img/프시케.jpg ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/프시케.ea0d20fb.jpg";

/***/ }),

/***/ "./src/images/img/해비타트.jpg":
/*!*********************************!*\
  !*** ./src/images/img/해비타트.jpg ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/해비타트.c22c4be0.jpg";

/***/ }),

/***/ "./src/images/img/헤르츠.jpg":
/*!********************************!*\
  !*** ./src/images/img/헤르츠.jpg ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,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AAA4CEoAABwEJQAADoISAAAHQQkAgIOgBADAQVACAOAgKAEAcBCUAAA4CEoAABwEJQAADoISAAAHQQkAgIOgBADAQVACAOAgKAEAcBCUAAA4CEoAABwEJQAADoISAAAHQQkAgIOgBADAQVACAOAgKAEAcBCUAAA4CEoAABwEJQAADoISAAAHQQkAgIOgBADAQVACAOAgKAEAcBCUAAA4CEoAABwEJQAADoISAAAHQQkAgIOgBADAQVACAOAgKAEAcBCUAAA4CEoAABwEJQAADoISAAAHQQkAgIOgBADAQVACAOAgKAEAcBCUAAA4CEoAABwEJQAADoISAAAHQQkAgIOgBADAQVACAOAgKAEAcBCUAAA4CEoAABwEJQAADoISAAAHQQkAgIOgBADAQVACAOAgKAEAcBCUAAA4CEoAABwEJQAADoISAAAHQQkAgIOgBADAQVACAOAgKAEAcBCUAAA4CEoAABwEJQAADoISAAAHQQkAgIOgBADAQVACAOAgKAEAcBCUAAA4CEoAABwEJQAADoISAAAHQQkAgIOgBADAQVACAOAgKAEAcBCUAAA4CEoAABwEJQAADoISAAAHQQkAgIOgBADAQVACAOAgKAEAcBCUAAA4CEoAABwEJQAADoISAAAHQQkAgIOgBADAQVACAOAgKAEAcBCUAAA4CEoAABwEJQAADoISAAAHQQkAgIOgBADAQVACAOAgKAEAcBCUAAA4CEoAABwEJQAADoISAICLMvv/0NIseNyEfYQAAAAASUVORK5CYII="

/***/ }),

/***/ "./src/images/img/홍보대사.jpg":
/*!*********************************!*\
  !*** ./src/images/img/홍보대사.jpg ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/홍보대사.a4e05e85.jpg";

/***/ }),

/***/ "./src/images/img/화용월태.jpg":
/*!*********************************!*\
  !*** ./src/images/img/화용월태.jpg ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/화용월태.8ed9d5c8.jpg";

/***/ }),

/***/ "./src/images/logo.png":
/*!*****************************!*\
  !*** ./src/images/logo.png ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/logo.cfa9ca30.png";

/***/ }),

/***/ "./src/images/sf1.jpg":
/*!****************************!*\
  !*** ./src/images/sf1.jpg ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/sf1.23be4649.jpg";

/***/ }),

/***/ "./src/images/sghs.png":
/*!*****************************!*\
  !*** ./src/images/sghs.png ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAAbCAYAAAAzgqwIAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAF0SURBVHgB3ZhvccMwDMUFoRAKoRACoQxaCGGQMGgZdAwKIWUwCIYQCG/y2b3Ltkv0vPyxs9+dPrRxFUuxnpSKbASAo9pZ/gMaSKXWRzvJntEAanyn3+WT0k0f1G4Yp5a9EOvlEzaNlI6vETUHnpuUSqyXHul0agcpCUzXC4NTO0puEIq/Izb8Afso5g0KofitTXrahPV5epXe9Ay7Xn71HIQn+oTNdrKuN2uIDTlMHB+91hI+1pX1mN0HsZEXCNXKGhT4ZnlP9FsTPp9YUtYRhktn3NTXy5/OPUIzturRJ/MocyEz6DBTmcApoJsVFLhmuUzm0oJKS1503MHmjoVHFgThsWrVH88L65AdLlftEzFZFo3l5AKuWVayAZgj61igWa4BGdRj+AN2FFm2F6QFxYxZQZzAKVkrmQGngJ2lKj4rVykEIyiHdzmMLPSfi/vLCeMj2Onnwmpw8YUS3h4nQHhhfHMdW+THnKThMicICtgOv/sCviG1RpEGlvsAAAAASUVORK5CYII="

/***/ }),

/***/ "./src/images/sghsLogo.png":
/*!*********************************!*\
  !*** ./src/images/sghsLogo.png ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/sghsLogo.0441a45e.png";

/***/ }),

/***/ "./src/images/sports.png":
/*!*******************************!*\
  !*** ./src/images/sports.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/sports.0e47d337.png";

/***/ }),

/***/ "./src/images/studentCouncil.png":
/*!***************************************!*\
  !*** ./src/images/studentCouncil.png ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./src/images/video1.mp4":
/*!*******************************!*\
  !*** ./src/images/video1.mp4 ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/video1.9d37a819.mp4";

/***/ }),

/***/ "./src/images/volunteering.png":
/*!*************************************!*\
  !*** ./src/images/volunteering.png ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/volunteering.14d71c22.png";

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/client */ "./node_modules/react-dom/client.js");
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/index.css */ "./src/styles/index.css");
/* harmony import */ var _styles_index_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_index_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _pages_App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/App */ "./src/pages/App.js");
/* harmony import */ var _reportWebVitals__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./reportWebVitals */ "./src/reportWebVitals.js");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "/Users/sallylee/OneDrive - SGHS/website/src/index.js";






var root = Object(react_dom_client__WEBPACK_IMPORTED_MODULE_1__["createRoot"])(document.getElementById("root"));
root.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.StrictMode, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 3
  }
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_pages_App__WEBPACK_IMPORTED_MODULE_3__["default"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 5
  }
})));
Object(_reportWebVitals__WEBPACK_IMPORTED_MODULE_4__["default"])();

/***/ }),

/***/ "./src/pages/AboutUs.js":
/*!******************************!*\
  !*** ./src/pages/AboutUs.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _images_background_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/background.jpg */ "./src/images/background.jpg");
/* harmony import */ var _images_background_jpg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_images_background_jpg__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _src_styles_Aboutus_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../src/styles/Aboutus.css */ "./src/styles/Aboutus.css");
/* harmony import */ var _src_styles_Aboutus_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_src_styles_Aboutus_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Footer */ "./src/pages/Footer.js");
var _this = undefined,
    _jsxFileName = "/Users/sallylee/OneDrive - SGHS/website/src/pages/AboutUs.js";






var Competition = function Competition() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("body", {
    style: {
      backgroundColor: "black"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "banner",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _images_background_jpg__WEBPACK_IMPORTED_MODULE_1___default.a,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 11
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 11
    }
  }, "Competition")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: "who",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }
  }, "Our Team"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "crew",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "Us",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: __webpack_require__(/*! ../images/aboutus/Daeun.jpg */ "./src/images/aboutus/Daeun.jpg"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 13
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "member",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 17
    }
  }, "Daeun Lee | \uC774\uB2E4\uC740", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 54
    }
  }), "Lead Developer")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "Us",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: __webpack_require__(/*! ../images/aboutus/Rian.jpeg */ "./src/images/aboutus/Rian.jpeg"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 17
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "member",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 17
    }
  }, "Rian Park | \uBC15\uC774\uC548", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 54
    }
  }), "Lead Designer")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "Us",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: __webpack_require__(/*! ../images/aboutus/Irene.jpeg */ "./src/images/aboutus/Irene.jpeg"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 17
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "member",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 17
    }
  }, "Irene Huh | \uD5C8\uC11C\uC724 ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 55
    }
  }), "Lead Treasurer")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "Us",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: __webpack_require__(/*! ../images/aboutus/Irene.jpeg */ "./src/images/aboutus/Irene.jpeg"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 17
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "member",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 17
    }
  }, "Taehui Kang | \uAC15\uD0DC\uD76C ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 57
    }
  }), "Developer")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "Us",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: __webpack_require__(/*! ../images/aboutus/Yeseo.jpeg */ "./src/images/aboutus/Yeseo.jpeg"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 17
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "member",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 17
    }
  }, "Yeseo Shin | \uC2E0\uC608\uC11C ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 56
    }
  }), "Developer")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "Us",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: __webpack_require__(/*! ../images/aboutus/Gaeun.jpeg */ "./src/images/aboutus/Gaeun.jpeg"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 17
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "member",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 17
    }
  }, "Gaeun Kim | \uAE40\uAC00\uC740 ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 55
    }
  }), "Progress Manager"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Footer__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 9
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Competition);

/***/ }),

/***/ "./src/pages/App.js":
/*!**************************!*\
  !*** ./src/pages/App.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Home */ "./src/pages/Home.js");
/* harmony import */ var _Club__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Club */ "./src/pages/Club.js");
/* harmony import */ var _Event__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Event */ "./src/pages/Event.js");
/* harmony import */ var _AboutUs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./AboutUs */ "./src/pages/AboutUs.js");
/* harmony import */ var _Student__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Student */ "./src/pages/Student.js");
/* harmony import */ var _Faq__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Faq */ "./src/pages/Faq.js");
/* harmony import */ var _eventde__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./eventde */ "./src/pages/eventde.js");
/* harmony import */ var _clubDetail__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./clubDetail */ "./src/pages/clubDetail.js");
/* harmony import */ var _Navigationbar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Navigationbar */ "./src/pages/Navigationbar.js");
var _jsxFileName = "/Users/sallylee/OneDrive - SGHS/website/src/pages/App.js";












function App() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "App",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_0__["BrowserRouter"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Navigationbar__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_0__["Routes"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_0__["Route"], {
    exact: true,
    path: "/",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Home__WEBPACK_IMPORTED_MODULE_2__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 48
      }
    }),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 17
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_0__["Route"], {
    path: "/club",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Club__WEBPACK_IMPORTED_MODULE_3__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 46
      }
    }),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 17
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_0__["Route"], {
    path: "/event",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Event__WEBPACK_IMPORTED_MODULE_4__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 47
      }
    }),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 17
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_0__["Route"], {
    path: "/AboutUs",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_AboutUs__WEBPACK_IMPORTED_MODULE_5__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 49
      }
    }),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 17
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_0__["Route"], {
    path: "/student",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Student__WEBPACK_IMPORTED_MODULE_6__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 49
      }
    }),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 17
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_0__["Route"], {
    path: "/faq",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Faq__WEBPACK_IMPORTED_MODULE_7__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 45
      }
    }),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 17
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_0__["Route"], {
    path: "/eventde",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_eventde__WEBPACK_IMPORTED_MODULE_8__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 51
      }
    }),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 17
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_0__["Route"], {
    path: "/clubDetail",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_clubDetail__WEBPACK_IMPORTED_MODULE_9__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 54
      }
    }),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 17
    }
  }))));
}

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/pages/Club.js":
/*!***************************!*\
  !*** ./src/pages/Club.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _images_background_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/background.jpg */ "./src/images/background.jpg");
/* harmony import */ var _images_background_jpg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_images_background_jpg__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_Club_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/Club.css */ "./src/styles/Club.css");
/* harmony import */ var _styles_Club_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Club_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Footer */ "./src/pages/Footer.js");
var _this = undefined,
    _jsxFileName = "/Users/sallylee/OneDrive - SGHS/website/src/pages/Club.js";






var Club = function Club() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("body", {
    style: {
      backgroundColor: "black"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "banner",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _images_background_jpg__WEBPACK_IMPORTED_MODULE_1___default.a,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }
  }, "Club")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "Club1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#academic",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: __webpack_require__(/*! ../images/academics.png */ "./src/images/academics.png"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 13
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "academics",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }
  }, " ACADEMICS ")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#art",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: __webpack_require__(/*! ../images/arts.png */ "./src/images/arts.png"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 13
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "arts",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 13
    }
  }, " ARTS ")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#sport",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: __webpack_require__(/*! ../images/sports.png */ "./src/images/sports.png"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 13
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "sports",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 13
    }
  }, " SPORTS")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#volunteerings",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: __webpack_require__(/*! ../images/volunteering.png */ "./src/images/volunteering.png"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 13
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "volunteering",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 13
    }
  }, " VOLUNTEERING"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    class: "category1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "academic",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 27
    }
  }, " ACADEMICS ")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    class: "list1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 20
    }
  }, " SOCIETY "))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    class: "sub-category",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 15
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    class: "club",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: __webpack_require__(/*! ../images/img/도담다담.jpg */ "./src/images/img/도담다담.jpg"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 21
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 21
    }
  }, " \uB3C4\uB2F4\uB2E4\uB2F4 ")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    class: "club",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: __webpack_require__(/*! ../images/img/베르데.jpg */ "./src/images/img/베르데.jpg"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 21
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 21
    }
  }, " \uBCA0\uB974\uB370 ")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    class: "club",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: __webpack_require__(/*! ../images/img/대체용.png */ "./src/images/img/대체용.png"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 21
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 21
    }
  }, " \uBE14\uB8F8\uC988\uBC84\uB9AC ")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    class: "club",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: __webpack_require__(/*! ../images/img/우나.PNG */ "./src/images/img/우나.PNG"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 21
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 21
    }
  }, " \uC6B0\uB098 ")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    class: "club",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: __webpack_require__(/*! ../images/img/프시케.jpg */ "./src/images/img/프시케.jpg"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 21
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 21
    }
  }, " \uD504\uC2DC\uCF00 ")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    class: "club",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: __webpack_require__(/*! ../images/img/다이스.jpg */ "./src/images/img/다이스.jpg"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 21
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 21
    }
  }, " DAIS ")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    class: "club",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: __webpack_require__(/*! ../images/img/다르마.jpg */ "./src/images/img/다르마.jpg"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 21
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 21
    }
  }, " \uB2E4\uB974\uB9C8 ")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    class: "club",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: __webpack_require__(/*! ../images/img/대체용.png */ "./src/images/img/대체용.png"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 21
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 21
    }
  }, " DECA+ ")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    class: "club",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: __webpack_require__(/*! ../images/img/이콘.jpg */ "./src/images/img/이콘.jpg"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 21
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 21
    }
  }, " ECON ")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    class: "club",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: __webpack_require__(/*! ../images/img/대체용.png */ "./src/images/img/대체용.png"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 21
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 21
    }
  }, " \uD53C\uADF8\uB9D0\uB9AC\uC628 ")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    class: "club",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: __webpack_require__(/*! ../images/img/헤르츠.jpg */ "./src/images/img/헤르츠.jpg"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 21
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 21
    }
  }, " \uD5E4\uB974\uCE20 ")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    class: "club",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: __webpack_require__(/*! ../images/img/인터뷰.png */ "./src/images/img/인터뷰.png"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 21
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 21
    }
  }, " Inter:View ")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    class: "club",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: __webpack_require__(/*! ../images/img/로고스.jpg */ "./src/images/img/로고스.jpg"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 21
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 21
    }
  }, " LOGOS ")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    class: "club",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: __webpack_require__(/*! ../images/img/문릿.jpg */ "./src/images/img/문릿.jpg"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 21
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 21
    }
  }, " MUNlit ")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    class: "club",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: __webpack_require__(/*! ../images/img/사피엔스.png */ "./src/images/img/사피엔스.png"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 21
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 21
    }
  }, " Sapiens ")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    class: "club",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: __webpack_require__(/*! ../images/img/설록.jpg */ "./src/images/img/설록.jpg"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 21
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 21
    }
  }, " \uC124\uB85D ")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    class: "club",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: __webpack_require__(/*! ../images/img/반크.jpeg */ "./src/images/img/반크.jpeg"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 22
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 22
    }
  }, " VANK@SGHS ")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    class: "club",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: __webpack_require__(/*! ../images/img/와델씨.jpg */ "./src/images/img/와델씨.jpg"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 21
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 21
    }
  }, " YDLC ")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    class: "list2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 15
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 19
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 23
    }
  }, " LANGUAGES "))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    class: "sub-category",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    class: "club",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: __webpack_require__(/*! ../images/img/글담.jpg */ "./src/images/img/글담.jpg"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 21
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 21
    }
  }, " \uAE00\uB2F4 ")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    class: "club",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: __webpack_require__(/*! ../images/img/꼬망세.jpg */ "./src/images/img/꼬망세.jpg"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 21
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 21
    }
  }, " \uAF2C\uB9DD\uC138 ")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    class: "club",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: __webpack_require__(/*! ../images/img/대체용.png */ "./src/images/img/대체용.png"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 21
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 21
    }
  }, " \uB2E8\uBE44 ")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    class: "club",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: __webpack_require__(/*! ../images/img/아마란스.png */ "./src/images/img/아마란스.png"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 21
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 21
    }
  }, " \uC544\uB9C8\uB780\uC2A4 "))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 15
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 19
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 23
    }
  }, " STEM "))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    class: "sub-category",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 15
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    class: "club",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: __webpack_require__(/*! ../images/img/디벨로퍼스.jpg */ "./src/images/img/디벨로퍼스.jpg"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 21
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 21
    }
  }, " Developers ")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    class: "club",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: __webpack_require__(/*! ../images/img/에렌시아.jpg */ "./src/images/img/에렌시아.jpg"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 21
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 21
    }
  }, " Herencia ")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    class: "club",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: __webpack_require__(/*! ../images/img/츄러스.jpg */ "./src/images/img/츄러스.jpg"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 21
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 21
    }
  }, " \uCE04\uB7EC\uC2A4 ")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    class: "club",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: __webpack_require__(/*! ../images/img/포텐시아.jpg */ "./src/images/img/포텐시아.jpg"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 21
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 21
    }
  }, " \uD3EC\uD150\uC2DC\uC544 ")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    class: "club",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: __webpack_require__(/*! ../images/img/대체용.png */ "./src/images/img/대체용.png"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 21
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 21
    }
  }, " \uD558\uB791 ")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    class: "club",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: __webpack_require__(/*! ../images/img/바싸코.png */ "./src/images/img/바싸코.png"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 21
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 21
    }
  }, " bio-psychology ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 41
    }
  }), " honors club ")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    class: "club",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: __webpack_require__(/*! ../images/img/식용곤충.png */ "./src/images/img/식용곤충.png"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 21
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 21
    }
  }, " Varl\xE0 Edible Insect Club "))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    class: "category2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "art",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167,
      columnNumber: 27
    }
  }, " ARTS ")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    class: "list1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    class: "sub-category",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    class: "club",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: __webpack_require__(/*! ../images/img/데라.png */ "./src/images/img/데라.png"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172,
      columnNumber: 21
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173,
      columnNumber: 21
    }
  }, " \uB370\uB77C ")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    class: "club",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: __webpack_require__(/*! ../images/img/물소리바람소리.jpg */ "./src/images/img/물소리바람소리.jpg"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176,
      columnNumber: 21
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177,
      columnNumber: 21
    }
  }, " \uBB3C\uC18C\uB9AC \uBC14\uB78C\uC18C\uB9AC ")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    class: "club",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: __webpack_require__(/*! ../images/img/벨아르떼.jpg */ "./src/images/img/벨아르떼.jpg"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180,
      columnNumber: 21
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181,
      columnNumber: 21
    }
  }, " \uBCA8\uC544\uB974\uB5BC ")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    class: "club",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: __webpack_require__(/*! ../images/img/아트비트.jpg */ "./src/images/img/아트비트.jpg"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184,
      columnNumber: 21
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185,
      columnNumber: 21
    }
  }, " \uC544\uD2B8\uBE44\uD2B8 ")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    class: "club",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: __webpack_require__(/*! ../images/img/작은연인들.png */ "./src/images/img/작은연인들.png"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188,
      columnNumber: 21
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189,
      columnNumber: 21
    }
  }, " \uC791\uC740 \uC5F0\uC778\uB4E4 ")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    class: "club",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: __webpack_require__(/*! ../images/img/치즈.jpg */ "./src/images/img/치즈.jpg"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192,
      columnNumber: 21
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193,
      columnNumber: 21
    }
  }, " \uCE58\uC988")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    class: "club",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: __webpack_require__(/*! ../images/img/타임.jpg */ "./src/images/img/타임.jpg"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196,
      columnNumber: 21
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197,
      columnNumber: 21
    }
  }, " TIME ")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    class: "club",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 199,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: __webpack_require__(/*! ../images/img/스카.jpg */ "./src/images/img/스카.jpg"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200,
      columnNumber: 21
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201,
      columnNumber: 21
    }
  }, " SCAH ")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    class: "club",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: __webpack_require__(/*! ../images/img/엑스타시.jpg */ "./src/images/img/엑스타시.jpg"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204,
      columnNumber: 21
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 205,
      columnNumber: 21
    }
  }, " X-TASY "))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    class: "category2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 211,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "sport",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 211,
      columnNumber: 27
    }
  }, " SPORTS ")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 212,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    class: "list1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 213,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    class: "sub-category",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 214,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    class: "club",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 215,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: __webpack_require__(/*! ../images/img/구텐탁구.jpg */ "./src/images/img/구텐탁구.jpg"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 216,
      columnNumber: 21
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 217,
      columnNumber: 21
    }
  }, " \uAD6C\uD150\uD0C1\uAD6C ")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    class: "club",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 219,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: __webpack_require__(/*! ../images/img/배드민턴.png */ "./src/images/img/배드민턴.png"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 220,
      columnNumber: 21
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 221,
      columnNumber: 21
    }
  }, " \uBC30\uB4DC\uBBFC\uD134 ")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    class: "club",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 223,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: __webpack_require__(/*! ../images/img/대체용.png */ "./src/images/img/대체용.png"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 224,
      columnNumber: 21
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 225,
      columnNumber: 21
    }
  }, " \uBC45\uAC00\uC988 ")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    class: "club",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 227,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: __webpack_require__(/*! ../images/img/대체용.png */ "./src/images/img/대체용.png"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 228,
      columnNumber: 21
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 229,
      columnNumber: 21
    }
  }, " \uC124\uB798\uBBF8 ")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    class: "club",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 231,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: __webpack_require__(/*! ../images/img/스위스.jpg */ "./src/images/img/스위스.jpg"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 232,
      columnNumber: 21
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 233,
      columnNumber: 21
    }
  }, " \uC2A4\uC704\uC2A4 ")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    class: "club",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 235,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: __webpack_require__(/*! ../images/img/대체용.png */ "./src/images/img/대체용.png"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 236,
      columnNumber: 21
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 237,
      columnNumber: 21
    }
  }, " \uC544\uC2F8 ")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    class: "club",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 239,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: __webpack_require__(/*! ../images/img/대체용.png */ "./src/images/img/대체용.png"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 240,
      columnNumber: 21
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 241,
      columnNumber: 21
    }
  }, " \uC5EC\uCC28\uC800\uCC28 ")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    class: "club",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 243,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: __webpack_require__(/*! ../images/img/화용월태.jpg */ "./src/images/img/화용월태.jpg"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 244,
      columnNumber: 21
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 245,
      columnNumber: 21
    }
  }, " \uD654\uC6A9\uC6D4\uD0DC ")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    class: "club",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 247,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: __webpack_require__(/*! ../images/img/대체용.png */ "./src/images/img/대체용.png"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 248,
      columnNumber: 21
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 249,
      columnNumber: 21
    }
  }, " \uAE30\uD569\uC18C\uB9AC ")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    class: "club",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 251,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: __webpack_require__(/*! ../images/img/키마.png */ "./src/images/img/키마.png"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 252,
      columnNumber: 21
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 253,
      columnNumber: 21
    }
  }, " kYMA "))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    class: "category2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 259,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "volunteerings",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 259,
      columnNumber: 27
    }
  }, " VOLUNTEERING ")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 260,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    class: "list1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 261,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    class: "sub-category",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 262,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    class: "club",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 263,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: __webpack_require__(/*! ../images/img/굿네이버스.jpg */ "./src/images/img/굿네이버스.jpg"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 264,
      columnNumber: 21
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 265,
      columnNumber: 21
    }
  }, " \uAD7F\uB124\uC774\uBC84\uC2A4 ")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    class: "club",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 267,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: __webpack_require__(/*! ../images/img/해비타트.jpg */ "./src/images/img/해비타트.jpg"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 268,
      columnNumber: 21
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 269,
      columnNumber: 21
    }
  }, " \uD574\uBE44\uD0C0\uD2B8 ")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    class: "club",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 271,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: __webpack_require__(/*! ../images/img/홍보대사.jpg */ "./src/images/img/홍보대사.jpg"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 272,
      columnNumber: 21
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 273,
      columnNumber: 21
    }
  }, " \uD64D\uBCF4\uB300\uC0AC ")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    class: "club",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 275,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: __webpack_require__(/*! ../images/img/액츠.jpg */ "./src/images/img/액츠.jpg"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 276,
      columnNumber: 21
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 277,
      columnNumber: 21
    }
  }, " ACTS ")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    class: "club",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 279,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: __webpack_require__(/*! ../images/img/방송부.jpg */ "./src/images/img/방송부.jpg"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 280,
      columnNumber: 21
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 281,
      columnNumber: 21
    }
  }, " SGBC ")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    class: "club",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 283,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: __webpack_require__(/*! ../images/img/쌤.jpeg */ "./src/images/img/쌤.jpeg"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 284,
      columnNumber: 21
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 285,
      columnNumber: 21
    }
  }, " SSAM "))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Footer__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 290,
      columnNumber: 5
    }
  }));
  ;
};

/* harmony default export */ __webpack_exports__["default"] = (Club);

/***/ }),

/***/ "./src/pages/Event.js":
/*!****************************!*\
  !*** ./src/pages/Event.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _images_background_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/background.jpg */ "./src/images/background.jpg");
/* harmony import */ var _images_background_jpg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_images_background_jpg__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _images_ac_01_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/ac_01.jpg */ "./src/images/ac_01.jpg");
/* harmony import */ var _images_ac_01_jpg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_images_ac_01_jpg__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _images_sf1_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/sf1.jpg */ "./src/images/sf1.jpg");
/* harmony import */ var _images_sf1_jpg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_images_sf1_jpg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _images_Nurije_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../images/Nurije.png */ "./src/images/Nurije.png");
/* harmony import */ var _images_Nurije_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_images_Nurije_png__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _images_Capable3_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../images/Capable3.jpg */ "./src/images/Capable3.jpg");
/* harmony import */ var _images_Capable3_jpg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_images_Capable3_jpg__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _images_VANKMUN3_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../images/VANKMUN3.jpg */ "./src/images/VANKMUN3.jpg");
/* harmony import */ var _images_VANKMUN3_jpg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_images_VANKMUN3_jpg__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _src_styles_Event_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../src/styles/Event.css */ "./src/styles/Event.css");
/* harmony import */ var _src_styles_Event_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_src_styles_Event_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Footer */ "./src/pages/Footer.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/index.js");
var _this = undefined,
    _jsxFileName = "/Users/sallylee/OneDrive - SGHS/website/src/pages/Event.js";












var Event = function Event() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("body", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "banner",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _images_background_jpg__WEBPACK_IMPORTED_MODULE_1___default.a,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 11
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 11
    }
  }, "Event")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: "Sc-Ev",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 9
    }
  }, "School Events"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "event",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__["Link"], {
    to: "/club",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _images_ac_01_jpg__WEBPACK_IMPORTED_MODULE_2___default.a,
    alt: "img",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 13
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "e1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 11
    }
  }, "2021 \uC5F0\uD569\uD559\uC220\uC81C")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__["Link"], {
    to: "/club",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _images_sf1_jpg__WEBPACK_IMPORTED_MODULE_3___default.a,
    alt: "img",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 12
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "e2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 13
    }
  }, "2021 \uCCB4\uC721\uB300\uD68C")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__["Link"], {
    to: "/club",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _images_Nurije_png__WEBPACK_IMPORTED_MODULE_4___default.a,
    alt: "img",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 13
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "e3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 13
    }
  }, "2021 \uB204\uB9AC\uC81C")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__["Link"], {
    to: "/club",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _images_sf1_jpg__WEBPACK_IMPORTED_MODULE_3___default.a,
    alt: "img",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 13
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "e4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 13
    }
  }, "VOLUNTEERING"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: "Sc-Ev",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 9
    }
  }, "Small-Scale Events"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "event",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__["Link"], {
    to: "/club",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _images_Capable3_jpg__WEBPACK_IMPORTED_MODULE_5___default.a,
    alt: "img",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 13
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "se1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 13
    }
  }, "Capable")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__["Link"], {
    to: "/club",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _images_VANKMUN3_jpg__WEBPACK_IMPORTED_MODULE_6___default.a,
    alt: "img",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 13
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "se2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 13
    }
  }, "VANK & MUNlit MUN")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__["Link"], {
    to: "/club",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _images_Nurije_png__WEBPACK_IMPORTED_MODULE_4___default.a,
    alt: "img",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 12
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "se3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 13
    }
  }, "2021 \uB204\uB9AC\uC81C")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__["Link"], {
    to: "/club",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _images_sf1_jpg__WEBPACK_IMPORTED_MODULE_3___default.a,
    alt: "img",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 13
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "se4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 13
    }
  }, "VOLUNTEERING")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Footer__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 9
    }
  }));
  ;
};

/* harmony default export */ __webpack_exports__["default"] = (Event);

/***/ }),

/***/ "./src/pages/Faq.js":
/*!**************************!*\
  !*** ./src/pages/Faq.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _images_background_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/background.jpg */ "./src/images/background.jpg");
/* harmony import */ var _images_background_jpg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_images_background_jpg__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _src_styles_Faq_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../src/styles/Faq.css */ "./src/styles/Faq.css");
/* harmony import */ var _src_styles_Faq_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_src_styles_Faq_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Footer */ "./src/pages/Footer.js");
var _this = undefined,
    _jsxFileName = "/Users/sallylee/OneDrive - SGHS/website/src/pages/Faq.js";






var Faq = function Faq() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("body", {
    style: {
      backgroundColor: "black"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "banner",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _images_background_jpg__WEBPACK_IMPORTED_MODULE_1___default.a,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }
  }, "FAQs")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "question",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 13
    }
  }, "Have a question?")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    classname: "info",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "inf-faq",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 13
    }
  }, "\uC124\uBB38\uC9C0/\uC624\uD508\uCC44\uD305\uBC29\uC744 \uD1B5\uD574 \uC9C8\uBB38\uC744 \uBC1B\uACE0 \uC788\uC2B5\uB2C8\uB2E4!", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 41
    }
  }), "\uC7AC\uD559\uC0DD\uC6A9\uACFC \uC678\uBD80\uC778\uC6A9(\uC785\uD559 \uC608\uC815\uC790, \uC785\uD559 \uD76C\uB9DD\uC790) \uC73C\uB85C \uB098\uB204\uC5B4\uC838 \uC788\uC73C\uB2C8 \uAD6C\uBD84\uD558\uC5EC \uC791\uC131\uD574\uC8FC\uC2DC\uAE30 \uBC14\uB78D\uB2C8\uB2E4. \uB300\uD45C \uC9C8\uBB38\uC740 \uAD50\uC721\uBD80\uC5D0\uC11C \uC120\uBC1C \uD6C4 FAQs\uB85C \uAC8C\uC2DC\uD569\uB2C8\uB2E4."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "link-in",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 16
    }
  }, "\uC7AC\uD559\uC0DD\uC6A9")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "link-out",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 16
    }
  }, "\uC678\uBD80\uC778\uC6A9"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "faq-line",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 11
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    class: "school",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    id: "title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 13
    }
  }, "\uD559\uAD50"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("details", {
    class: "Q4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("summary", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 15
    }
  }, "\uC815\uB9D0 \uC218\uC5C5\uC744 \uC601\uC5B4\uB85C \uC9C4\uD589\uD558\uB098\uC694?"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    id: "a",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 15
    }
  }, "\uAE30\uBCF8\uC801\uC73C\uB85C \uAD6D\uC5B4,\uD55C\uAD6D\uC0AC\uB97C \uC81C\uC678\uD55C \uBAA8\uB4E0 \uACFC\uBAA9 \uC218\uC5C5\uC5D0 \uC601\uC5B4\uB97C \uC0AC\uC6A9\uD569\uB2C8\uB2E4. \uC628\uB77C\uC778 \uD074\uB798\uC2A4 \uC601\uC0C1\uC774\uB098 \uC218\uC5C5 \uC790\uB8CC(PPT \uB4F1)\uC5D0\uB3C4 \uC601\uC5B4\uB97C \uB9CE\uC774 \uC0AC\uC6A9\uD569\uB2C8\uB2E4.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("details", {
    class: "Q5",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("summary", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 15
    }
  }, "\uAD6D\uC601\uC218 \uC81C\uC678 \uC5B4\uB5A4 \uACFC\uBAA9\uC744 \uBC30\uC6B0\uB098\uC694?"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    id: "a",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 15
    }
  }, "\uC81C2\uC678\uAD6D\uC5B4\uB85C \uC911\uAD6D\uC5B4,\uD504\uB791\uC2A4\uC5B4,\uC2A4\uD398\uC778\uC5B4\uB97C \uC120\uD0DD\uD574 \uBC30\uC6B0\uACE0, AP \uACFC\uBAA9\uC73C\uB85C\uB294 AP \uBBF8\uC2DC\uACBD\uC81C,\uAC70\uC2DC\uACBD\uC81C,\uC778\uBB38\uC9C0\uB9AC,\uADFC\uB300 \uC138\uACC4\uC0AC \uC774\uC678 \uC0AC\uD68C\uACFC \uACFC\uBAA9\uC73C\uB85C\uB294 \uAD6D\uC81C \uC815\uCE58 \uB4F1\uC774 \uC788\uC2B5\uB2C8\uB2E4.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("details", {
    class: "Q7",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("summary", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 15
    }
  }, "\uD574\uC678\uB300\uD559 \uC9C4\uD559\uC744 \uC9C0\uC6D0\uD558\uB294 \uD504\uB85C\uADF8\uB7A8\uB3C4 \uC788\uB098\uC694?"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    id: "a",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 15
    }
  }, "\uD574\uC678\uB300\uD559 \uC9C4\uD559\uC744 \uC6D0\uD558\uB294 \uD559\uC0DD\uB4E4\uC744 \uC704\uD574\uC11C\uB294 \uC120\uBC30\uB4E4\uACFC \uC120\uC0DD\uB2D8\uB4E4\uC758 \uD2B9\uAC15,AP,SAT \uB4F1 \uC2DC\uD5D8\uC744 \uC704\uD55C \uC218\uC5C5, \uD574\uC678\uB300\uD559\uC9C4\uD559\uBD80 \uC120\uC0DD\uB2D8\uB4E4\uC758 \uC0C1\uB2F4 \uB4F1\uC774 \uC788\uC2B5\uB2C8\uB2E4."))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    class: "dorm",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    id: "title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 13
    }
  }, "\uAE30\uC219\uC0AC"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("details", {
    class: "Q1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("summary", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 15
    }
  }, "\uC804\uC6D0\uC774 \uAE30\uC219\uC0AC\uC5D0 \uC0AC\uB098\uC694?"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    id: "a",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 15
    }
  }, "\uAC04\uD639 \uD1B5\uD559\uD558\uB294 \uD559\uC0DD\uB4E4\uB3C4 \uC788\uC73C\uB098 \uB300\uBD80\uBD84\uC758 \uD559\uC0DD, \uC0AC\uB294 \uC9C0\uC5ED\uC5D0 \uAD00\uACC4\uC5C6\uC774 \uAE30\uC219\uC0AC\uC5D0\uC11C \uC0DD\uD65C\uD569\uB2C8\uB2E4.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("details", {
    class: "Q2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("summary", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 15
    }
  }, "\uAE30\uC219\uC0AC\uB294 \uBA87 \uBA85\uC774 \uC0AC\uC6A9\uD558\uB098\uC694?"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    id: "a",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 15
    }
  }, "\uB300\uBD80\uBD84\uC758 \uBC29\uC740 2\uC778 1\uC2E4\uC774\uC9C0\uB9CC, 1\uD559\uB144 \uC5EC\uD559\uC0DD\uC740 \uD55C \uD559\uAE30\uB3D9\uC548 4\uC778 1\uC2E4\uC744 \uC0AC\uC6A9\uD558\uB294 \uACBD\uC6B0\uAC00 \uC788\uC2B5\uB2C8\uB2E4.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("details", {
    class: "Q3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("summary", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 15
    }
  }, "\uB8F8\uBA54\uC774\uD2B8, \uBC29\uC740 \uC5B4\uB5BB\uAC8C \uBC30\uC815\uD558\uB098\uC694?"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    id: "a",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 15
    }
  }, "\uBC29\uBC30\uC815\uC740 \uD55C \uD559\uAE30\uB9C8\uB2E4 \uC0C8\uB85C \uC9C4\uD589\uD558\uBA70, \uC644\uC804\uD788 \uB79C\uB364\uC73C\uB85C, \uC81C\uBE44\uBF51\uAE30\uB97C \uD1B5\uD574 \uC9C4\uD589\uD558\uACE0 \uC788\uC2B5\uB2C8\uB2E4."))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    class: "activity",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    id: "title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 13
    }
  }, "\uD65C\uB3D9"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("details", {
    class: "Q6",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("summary", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 15
    }
  }, "\uB2E4\uC591\uD55C \uD65C\uB3D9\uC744 \uD558\uB2E4 \uBCF4\uBA74 \uAE30\uBCF8 \uACFC\uBAA9\uC740 \uACF5\uBD80\uD558\uAE30 \uD798\uB4E4\uC9C0 \uC54A\uB098\uC694?"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    id: "a",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 15
    }
  }, "\uAE30\uBCF8 \uC218\uC5C5\uC2DC\uAC04\uBFD0\uB9CC \uC544\uB2C8\uB77C \uBC29\uACFC\uD6C4,\uC5EC\uB984\uBC29\uD559 \uAC15\uC88C,\uAC1C\uC778 \uC790\uC2B5\uC2DC\uAC04\uB4F1\uC744 \uD1B5\uD574 \uAD6D\uC601\uC218\uB85C \uB300\uD45C\uB418\uB294 \uAE30\uBCF8 \uACFC\uBAA9 \uD559\uC2B5\uB3C4 \uC9C0\uC6D0\uD569\uB2C8\uB2E4")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("details", {
    class: "Q8",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("summary", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 15
    }
  }, "\uD558\uB8E8 \uC77C\uACFC\uB294 \uC5B4\uB5BB\uAC8C \uB418\uB098\uC694?"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    id: "a",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 15
    }
  }, "\uC544\uCE68\uC5D0 6\uC2DC 50\uBD84\uC5D0 \uAE30\uC0C1\uD574 \uC6B4\uB3D9\uC744 \uD55C \uD6C4 \uC544\uCE68\uC2DD\uC0AC\uB97C \uD55C \uB4A4 8\uC2DC\uAE4C\uC9C0 \uB4F1\uAD50\uD569\uB2C8\uB2E4. 8\uC2DC\uBD80\uD130 4\uC2DC\uAE4C\uC9C0 \uD559\uAD50 \uC218\uC5C5\uC744 \uD558\uACE0 \uC774\uD6C4 5\uC2DC\uC5D0 \uC800\uB141\uC2DD\uC0AC, 6\uC2DC 20\uBD84\uBD80\uD130 10\uC2DC 50\uBD84\uAE4C\uC9C0 \uC790\uC2B5\uC744 \uC9C4\uD589\uD569\uB2C8\uB2E4. \uC790\uC2B5\uC774 \uB05D\uB09C \uD6C4\uC5D0\uB294 \uAE30\uC219\uC0AC\uB85C \uB3CC\uC544\uAC00\uACE0 \uC790\uC720\uB86D\uAC8C \uCDE8\uCE68\uD569\uB2C8\uB2E4. \uCDE8\uCE68\uC2DC\uAC04\uC774\uB098 \uC18C\uB4F1\uC2DC\uAC04\uC740 \uB530\uB85C \uC815\uD574\uC838 \uC788\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.")))));
  ;
};

/* harmony default export */ __webpack_exports__["default"] = (Faq);

/***/ }),

/***/ "./src/pages/Footer.js":
/*!*****************************!*\
  !*** ./src/pages/Footer.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _images_logo_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/logo.png */ "./src/images/logo.png");
/* harmony import */ var _images_logo_png__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_images_logo_png__WEBPACK_IMPORTED_MODULE_1__);
var _this = undefined,
    _jsxFileName = "/Users/sallylee/OneDrive - SGHS/website/src/pages/Footer.js";




var Footer = function Footer() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "footer",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 13
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "first",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 17
    }
  }, "[03066] \uC11C\uC6B8 \uC885\uB85C\uAD6C \uC131\uADE0\uAD00\uB85C13\uAE38 40", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 21
    }
  }), " (\uBA85\uB95C1\uAC00, \uC11C\uC6B8\uAD6D\uC81C\uACE0\uB4F1\uD559\uAD50)", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 21
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 26
    }
  }), "Sponsored by \uC885\uB85C\uAD6C\uCCAD", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 21
    }
  }), "Developed by \uC124\uAD6D\uB2E4\uC6C0", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 21
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 26
    }
  }), "@Copyright")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "last",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 17
    }
  }, "Contact Us"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _images_logo_png__WEBPACK_IMPORTED_MODULE_1___default.a,
    className: "SGlogo",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 17
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    class: "material-symbols-outlined",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 17
    }
  }, "mail")));
};

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./src/pages/Home.js":
/*!***************************!*\
  !*** ./src/pages/Home.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _images_background_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/background.jpg */ "./src/images/background.jpg");
/* harmony import */ var _images_background_jpg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_images_background_jpg__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _images_video1_mp4__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/video1.mp4 */ "./src/images/video1.mp4");
/* harmony import */ var _images_video1_mp4__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_images_video1_mp4__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _images_sghs_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/sghs.png */ "./src/images/sghs.png");
/* harmony import */ var _images_sghs_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_images_sghs_png__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_App_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/App.css */ "./src/styles/App.css");
/* harmony import */ var _styles_App_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_App_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Footer */ "./src/pages/Footer.js");
/* harmony import */ var _images_logo_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../images/logo.png */ "./src/images/logo.png");
/* harmony import */ var _images_logo_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_images_logo_png__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _react_spring_parallax__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @react-spring/parallax */ "./node_modules/@react-spring/parallax/dist/react-spring-parallax.esm.js");
var _this = undefined,
    _jsxFileName = "/Users/sallylee/OneDrive - SGHS/website/src/pages/Home.js";










var Home = function Home() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "home",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_react_spring_parallax__WEBPACK_IMPORTED_MODULE_7__["Parallax"], {
    pages: 5,
    style: {
      backgroundColor: "black"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "one",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _images_background_jpg__WEBPACK_IMPORTED_MODULE_1___default.a,
    className: "backgroundImage",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 21
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _images_sghs_png__WEBPACK_IMPORTED_MODULE_3___default.a,
    className: "schoolLogo",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 21
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 21
    }
  }, "Our Eyes in Korea,", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 25
    }
  }), " Our Eyes to the World", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 25
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 30
    }
  }, "Seoul Global High School"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "two",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("video", {
    src: _images_video1_mp4__WEBPACK_IMPORTED_MODULE_2___default.a,
    autoplay: "autoplay",
    muted: true,
    loop: "true",
    width: "85%",
    playsInline: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 21
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_react_spring_parallax__WEBPACK_IMPORTED_MODULE_7__["ParallaxLayer"], {
    id: "three",
    offset: 2,
    speed: 0.5,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "section3_title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 21
    }
  }, "Recent News"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "section3_content",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "item",
    id: "item1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 25
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 29
    }
  }, "\uC124\uAD6D\uB2E4\uC6C0"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 29
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "item",
    id: "item2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 25
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 29
    }
  }, "15\uAE30 \uD0C0\uC784 \uCEA1\uC290 \uC800\uC7A5\uC2DD"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 29
    }
  }, "\uCCB4\uC721\uB300\uD68C\uC640 \uAC19\uC740 \uB0A0\uC778 7\uC6D4 14\uC77C\uB0A0, 15\uAE30\uC758 \uD0C0\uC784 \uCEA1\uC290 \uC800\uC7A5\uC2DD\uC774 \uC9C0\uD589\uB418\uC5C8\uB2E4. 15\uAE30\uB4E4\uC740 \uBAA8\uB450 \uD558\uBCF5 \uAD50\uBCF5\uC744 \uC785\uACE0 \uB2F4\uC784\uC120\uC0DD\uB2D8\uB4E4\uACFC \uD568\uAED8 1\uCE35 \uB85C\uBE44\uC5D0 \uBC18\uBCC4\uB85C \uC11C\uC11C \uADF8\uB4E4\uC774 \uC11C\uC6B8\uAD6D\uC81C\uACE0\uB97C \uB4E4\uC5B4\uC624\uAE30 \uC804 \uC601\uC5B4\uCEA0\uD504 \uB54C \uC37C\uB358 \uC790\uC2E0\uC758 \uAC01\uC624\uAC00 \uB2F4\uAE34 \uD0C0\uC784\uCEA1\uC290\uC774 \uAE30\uB465 \uC548\uC5D0 \uC800\uC7A5\uB418\uB294 \uBAA8\uC2B5\uC744 \uC9C0\uCF1C\uBCF4\uC558\uB2E4. 15\uAE30\uB4E4\uC758 \uD0C0\uC784\uCEA1\uC290\uC740 20\uB144\uB4A4\uC5D0 \uAC1C\uBD09\uC774 \uB418\uBA70, \uD0C0\uC784\uCEA1\uC290 \uC800\uC7A5\uC2DD\uC740 20\uB144 \uB4A4\uAE4C\uC9C0 \uC6B0\uB9AC \uC11C\uC6B8\uAD6D\uC81C\uACE0\uAC00 \uB0A8\uC544\uC788\uC744\uC9C0\uC5D0 \uB300\uD55C \uC758\uBB38\uC744 \uD488\uC73C\uBA70 \uB9C8\uBB34\uB9AC\uB418\uC5C8\uB2E4.   ")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "item",
    id: "item3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 25
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 29
    }
  }, "Sports Day"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 29
    }
  }, "Sports day was held on July 14th 2022. For the opening ceromony each classes had a parade around the school pitch. Then the class match finals of 1st and 2nd grades were held consequtively. The class 2 of the first grade played handball with class 6, and the class 2 took the victory. The sophomores played volleyball. class won against the class. While the class matches were happening there were lots of booths ran by the school council. After students had time to hang around the various booths, at 4pm, freshman and sophomore of each '\uB204\uB9AC' and '\uB9C8\uB8E8' team showed of their amazing cheerleading that they had practiced for weeks. As soon as the cheerleading ended, the team relay was held. The result of the relay was the victory for the team \uB204\uB9AC. Between the sports day events, art clubs presented splendid performances. The Sports day ended at 17:00 with the final speech form our old school council and a huge round of applause from the SGHS students.     ")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "item",
    id: "item4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 25
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 29
    }
  }, "Title"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 29
    }
  }, "\uB0B4\uC6A9 ")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "item",
    id: "item5",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 25
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 29
    }
  }, "Title"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 29
    }
  }, "\uB0B4\uC6A9 ")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "item",
    id: "item6",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 25
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 29
    }
  }, "Title"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 29
    }
  }, "\uB0B4\uC6A9 ")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "item",
    id: "item7",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 25
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 29
    }
  }, "Title"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 29
    }
  }, "\uB0B4\uC6A9 ")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "item",
    id: "item8",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 25
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 29
    }
  }, "Title"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 29
    }
  }, "\uB0B4\uC6A9 ")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "item",
    id: "item9",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 25
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 29
    }
  }, "Title"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 29
    }
  }, "\uB0B4\uC6A9 ")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "item",
    id: "item10",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 25
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 29
    }
  }, "Title"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 29
    }
  }, "\uB0B4\uC6A9 ")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "item",
    id: "item11",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 25
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 29
    }
  }, "Title"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 29
    }
  }, "\uB0B4\uC6A9 ")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "item",
    id: "item12",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 25
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 29
    }
  }, "Title"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 29
    }
  }, "\uB0B4\uC6A9 ")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_react_spring_parallax__WEBPACK_IMPORTED_MODULE_7__["ParallaxLayer"], {
    id: "four",
    offset: 3,
    speed: 0.5,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "section4_content",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "box1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 25
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: "boxtext",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 29
    }
  }, "WE THE STUDENTS,", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 69
    }
  }), "DISCOVER OUR", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 90
    }
  }), "OWN TALENTS")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "box2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 25
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: "boxtext",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 29
    }
  }, "WE THE STUDENTS,", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 69
    }
  }), "INSPIRE THE WORLD BY", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 98
    }
  }), "OUR SELF-EMPOWERMENT")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "box3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 25
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: "boxtext",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 29
    }
  }, "WE THE STUDENTS,", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 69
    }
  }), "PROMOTE OUR VALUES", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 96
    }
  }), "BY ACTION")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_react_spring_parallax__WEBPACK_IMPORTED_MODULE_7__["ParallaxLayer"], {
    offset: 4,
    speed: 0.5,
    factor: 0.3,
    style: {
      backgroundColor: "green"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "footer",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "first",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 25
    }
  }, "[03066] \uC11C\uC6B8 \uC885\uB85C\uAD6C \uC131\uADE0\uAD00\uB85C13\uAE38 40", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 29
    }
  }), " (\uBA85\uB95C1\uAC00, \uC11C\uC6B8\uAD6D\uC81C\uACE0\uB4F1\uD559\uAD50)", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 29
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 34
    }
  }), "Sponsored by \uC885\uB85C\uAD6C\uCCAD", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 29
    }
  }), "Developed by \uC124\uAD6D\uB2E4\uC6C0", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 29
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 34
    }
  }), "@Copyright")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "last",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 25
    }
  }, "Contact Us"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _images_logo_png__WEBPACK_IMPORTED_MODULE_6___default.a,
    className: "SGlogo",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 25
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    class: "material-symbols-outlined",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 25
    }
  }, "mail"))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "./src/pages/Navigationbar.js":
/*!************************************!*\
  !*** ./src/pages/Navigationbar.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _images_sghsLogo_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/sghsLogo.png */ "./src/images/sghsLogo.png");
/* harmony import */ var _images_sghsLogo_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_images_sghsLogo_png__WEBPACK_IMPORTED_MODULE_3__);
var _this = undefined,
    _jsxFileName = "/Users/sallylee/OneDrive - SGHS/website/src/pages/Navigationbar.js";






var Navigationbar = function Navigationbar() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["Navbar"], {
    collapseOnSelect: true,
    expand: "sm",
    bg: "dark",
    variant: "dark",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["Navbar"].Toggle, {
    "aria-controls": "navbarScroll",
    "data-bs-toggle": "collapse",
    "data-bs-target": "#navbarScroll",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 13
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["Navbar"].Collapse, {
    id: "navbarScroll",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("img", {
    src: _images_sghsLogo_png__WEBPACK_IMPORTED_MODULE_3___default.a,
    className: "navi_img",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 17
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["Nav"], {
    className: "justify-content-end",
    style: {
      width: "100%",
      fontSize: "20px",
      marginBottom: "2px",
      marginTop: "-2px"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["NavLink"], {
    eventKey: "1",
    as: react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"],
    to: "/",
    style: {
      marginRight: "2%"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 21
    }
  }, "Home"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["NavLink"], {
    eventKey: "2",
    as: react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"],
    to: "/club",
    style: {
      marginRight: "2%"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 21
    }
  }, "Club"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["NavLink"], {
    eventKey: "3",
    as: react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"],
    to: "/event",
    style: {
      marginRight: "2%"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 21
    }
  }, "Event"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["NavLink"], {
    eventKey: "4",
    as: react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"],
    to: "/student",
    style: {
      marginRight: "2%"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 21
    }
  }, "Student"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["NavLink"], {
    eventKey: "5",
    as: react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"],
    to: "/faq",
    style: {
      marginRight: "2%"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 21
    }
  }, "FAQ"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["NavLink"], {
    eventKey: "6",
    as: react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"],
    to: "/aboutus",
    style: {
      marginRight: "2%"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 21
    }
  }, "AboutUs"))));
};

/* harmony default export */ __webpack_exports__["default"] = (Navigationbar);

/***/ }),

/***/ "./src/pages/Student.js":
/*!******************************!*\
  !*** ./src/pages/Student.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _images_background_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/background.jpg */ "./src/images/background.jpg");
/* harmony import */ var _images_background_jpg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_images_background_jpg__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _images_studentCouncil_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/studentCouncil.png */ "./src/images/studentCouncil.png");
/* harmony import */ var _images_studentCouncil_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_images_studentCouncil_png__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Footer */ "./src/pages/Footer.js");
var _this = undefined,
    _jsxFileName = "/Users/sallylee/OneDrive - SGHS/website/src/pages/Student.js";






var Student = function Student() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("body", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "banner",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _images_background_jpg__WEBPACK_IMPORTED_MODULE_1___default.a,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 11
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 11
    }
  }, "Student Government")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "trinity",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 11
    }
  }, "Student Coucil"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "circle",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 11
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "student",
    id: "council",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _images_studentCouncil_png__WEBPACK_IMPORTED_MODULE_2___default.a,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 13
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#councilPop",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 35
    }
  }, "Student Council"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "student",
    id: "court",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _images_studentCouncil_png__WEBPACK_IMPORTED_MODULE_2___default.a,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 13
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#courtPop",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 33
    }
  }, "Student Court"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "student",
    id: "congress",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _images_studentCouncil_png__WEBPACK_IMPORTED_MODULE_2___default.a,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 13
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#congressPop",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 36
    }
  }, "Student Congress")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "councilPop",
    className: "popup",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 11
    }
  }, "\xD7"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 11
    }
  }, "councilcouncil councilcouncilc ouncilcouncilco uncilcouncilcouncilcouncilcouncilcouncilcouncilcouncil")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "courtPop",
    className: "popup",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 11
    }
  }, "\xD7"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 11
    }
  }, "courtcourtcourtcourtc ourtcourtcourtcourtcourtcourtcourtco urtcourtcourtcourtcourtcourtcourtcourtcourt")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "congressPop",
    className: "popup",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 11
    }
  }, "\xD7"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 11
    }
  }, "congresscongresscongresscong resscongresscongresscongresscongr esscongresscongresscongresscongress")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Footer__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 9
    }
  }));
  ;
};

/* harmony default export */ __webpack_exports__["default"] = (Student);

/***/ }),

/***/ "./src/pages/clubDetail.js":
/*!*********************************!*\
  !*** ./src/pages/clubDetail.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_clubDetail_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/clubDetail.css */ "./src/styles/clubDetail.css");
/* harmony import */ var _styles_clubDetail_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_clubDetail_css__WEBPACK_IMPORTED_MODULE_1__);
var _this = undefined,
    _jsxFileName = "/Users/sallylee/OneDrive - SGHS/website/src/pages/clubDetail.js";




var clubDetail = function clubDetail() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("body", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 13
    }
  }, "\uC608\uC220\uACBD\uC601 \uCE7C\uB7FC (\uD65C\uB3D9)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 13
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 13
    }
  }, "\uAC04\uB2E8\uD55C \uD65C\uB3D9 \uC18C\uAC1C \uAE00"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    class: "selector",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 13
    }
  }, "~~~~~~~~~~~~~~~~~~~~~~~~~~~~"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    id: "line2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    class: "wrap",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    class: "sticker1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 17
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    class: "sticker1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 17
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    class: "sticker1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 17
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    class: "sticker1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 17
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    class: "sticker1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 17
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    class: "sticker1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 17
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    class: "sticker1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 17
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    class: "sticker1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 17
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    class: "sticker1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 17
    }
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (clubDetail);

/***/ }),

/***/ "./src/pages/eventde.js":
/*!******************************!*\
  !*** ./src/pages/eventde.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_eventde_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/eventde.css */ "./src/styles/eventde.css");
/* harmony import */ var _styles_eventde_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_eventde_css__WEBPACK_IMPORTED_MODULE_1__);
var _this = undefined,
    _jsxFileName = "/Users/sallylee/OneDrive - SGHS/website/src/pages/eventde.js";




var Club = function Club() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("body", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    class: "eventname",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 9
    }
  }, " \uC5F0\uD569\uD559\uC220\uC81C "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    class: "eventdate",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 13
    }
  }, " 2021.01.01 "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }
  }, " \uC124\uBA85: \uB098\uB098\uB098\uB098\uB098\uB098\u314F\uB098\uB098\uB098\uB098\uB098\uB098 ")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    class: "picture",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 15
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: __webpack_require__(/*! ../images/img/도담다담.jpg */ "./src/images/img/도담다담.jpg"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 17
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    class: "picture",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 15
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: __webpack_require__(/*! ../images/img/도담다담.jpg */ "./src/images/img/도담다담.jpg"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 17
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    class: "picture",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 15
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: __webpack_require__(/*! ../images/img/도담다담.jpg */ "./src/images/img/도담다담.jpg"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 17
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    class: "picture",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 15
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: __webpack_require__(/*! ../images/img/도담다담.jpg */ "./src/images/img/도담다담.jpg"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 17
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    class: "picture",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 15
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: __webpack_require__(/*! ../images/img/도담다담.jpg */ "./src/images/img/도담다담.jpg"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 17
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    class: "picture",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 15
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: __webpack_require__(/*! ../images/img/도담다담.jpg */ "./src/images/img/도담다담.jpg"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 17
    }
  }))));
  ;
};

/* harmony default export */ __webpack_exports__["default"] = (Club);

/***/ }),

/***/ "./src/reportWebVitals.js":
/*!********************************!*\
  !*** ./src/reportWebVitals.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var reportWebVitals = function reportWebVitals(onPerfEntry) {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.bind(null, /*! web-vitals */ "./node_modules/web-vitals/dist/web-vitals.js")).then(function (_ref) {
      var getCLS = _ref.getCLS,
          getFID = _ref.getFID,
          getFCP = _ref.getFCP,
          getLCP = _ref.getLCP,
          getTTFB = _ref.getTTFB;
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};

/* harmony default export */ __webpack_exports__["default"] = (reportWebVitals);

/***/ }),

/***/ "./src/styles/Aboutus.css":
/*!********************************!*\
  !*** ./src/styles/Aboutus.css ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./Aboutus.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/styles/Aboutus.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../node_modules/css-loader??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./Aboutus.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/styles/Aboutus.css", function() {
		var newContent = __webpack_require__(/*! !../../node_modules/css-loader??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./Aboutus.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/styles/Aboutus.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/styles/App.css":
/*!****************************!*\
  !*** ./src/styles/App.css ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/styles/App.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../node_modules/css-loader??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/styles/App.css", function() {
		var newContent = __webpack_require__(/*! !../../node_modules/css-loader??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/styles/App.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/styles/Club.css":
/*!*****************************!*\
  !*** ./src/styles/Club.css ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./Club.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/styles/Club.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../node_modules/css-loader??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./Club.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/styles/Club.css", function() {
		var newContent = __webpack_require__(/*! !../../node_modules/css-loader??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./Club.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/styles/Club.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/styles/Event.css":
/*!******************************!*\
  !*** ./src/styles/Event.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./Event.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/styles/Event.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../node_modules/css-loader??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./Event.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/styles/Event.css", function() {
		var newContent = __webpack_require__(/*! !../../node_modules/css-loader??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./Event.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/styles/Event.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/styles/Faq.css":
/*!****************************!*\
  !*** ./src/styles/Faq.css ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./Faq.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/styles/Faq.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../node_modules/css-loader??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./Faq.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/styles/Faq.css", function() {
		var newContent = __webpack_require__(/*! !../../node_modules/css-loader??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./Faq.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/styles/Faq.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/styles/clubDetail.css":
/*!***********************************!*\
  !*** ./src/styles/clubDetail.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./clubDetail.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/styles/clubDetail.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../node_modules/css-loader??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./clubDetail.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/styles/clubDetail.css", function() {
		var newContent = __webpack_require__(/*! !../../node_modules/css-loader??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./clubDetail.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/styles/clubDetail.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/styles/eventde.css":
/*!********************************!*\
  !*** ./src/styles/eventde.css ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./eventde.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/styles/eventde.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../node_modules/css-loader??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./eventde.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/styles/eventde.css", function() {
		var newContent = __webpack_require__(/*! !../../node_modules/css-loader??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./eventde.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/styles/eventde.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/styles/index.css":
/*!******************************!*\
  !*** ./src/styles/index.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/styles/index.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../node_modules/css-loader??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/styles/index.css", function() {
		var newContent = __webpack_require__(/*! !../../node_modules/css-loader??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/styles/index.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 0:
/*!**********************************************************************************!*\
  !*** multi ./node_modules/react-dev-utils/webpackHotDevClient.js ./src/index.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/sallylee/OneDrive - SGHS/website/node_modules/react-dev-utils/webpackHotDevClient.js */"./node_modules/react-dev-utils/webpackHotDevClient.js");
module.exports = __webpack_require__(/*! /Users/sallylee/OneDrive - SGHS/website/src/index.js */"./src/index.js");


/***/ })

},[[0,"runtime~main",0]]]);
//# sourceMappingURL=main.chunk.js.map