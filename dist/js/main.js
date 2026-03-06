/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/components/burgerMenu.js"
/*!*****************************************!*\
  !*** ./src/js/components/burgerMenu.js ***!
  \*****************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   burgerMenu: () => (/* binding */ burgerMenu)\n/* harmony export */ });\nfunction burgerMenu() {\n  const burgerMenu = document.getElementById('burgerMenu');\n  const openBtn = document.getElementById('openBurgerBtn');\n  const closeBtn = document.getElementById('closeBurger');\n\n  if (!burgerMenu || !openBtn || !closeBtn) return;\n\n  /** Відкриття меню */\n  function openMenu() {\n    burgerMenu.classList.add('showSlide');\n    document.body.classList.add('overflow-y-hidden');\n  }\n\n  /** Закриття меню */\n  function closeMenu() {\n    burgerMenu.classList.remove('showSlide');\n    document.body.classList.remove('overflow-y-hidden');\n  }\n\n  /** Клік по кнопці відкриття */\n  openBtn.addEventListener('click', (e) => {\n    e.preventDefault();\n    openMenu();\n  });\n\n  /** Клік по кнопці закриття */\n  closeBtn.addEventListener('click', (e) => {\n    e.preventDefault();\n    closeMenu();\n  });\n\n  /** Закриття при кліку поза меню */\n  burgerMenu.addEventListener('click', (e) => {\n    if (e.target === burgerMenu) closeMenu();\n  });\n}\n\n\n//# sourceURL=webpack:///./src/js/components/burgerMenu.js?\n}");

/***/ },

/***/ "./src/js/components/calculateTotalPages.js"
/*!**************************************************!*\
  !*** ./src/js/components/calculateTotalPages.js ***!
  \**************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   calculateTotalPages: () => (/* binding */ calculateTotalPages)\n/* harmony export */ });\nfunction calculateTotalPages() {\n  // Знаходимо всі елементи page-item всередині pages-list\n  const pageItems = document.querySelectorAll('.pages-list .page-item');\n\n  // Знаходимо span для виведення числа\n  const totalPagesSpan = document.querySelector('.total-pages-number');\n\n  if (totalPagesSpan) {\n    totalPagesSpan.textContent = pageItems.length.toString();\n  }\n}\n\n//# sourceURL=webpack:///./src/js/components/calculateTotalPages.js?\n}");

/***/ },

/***/ "./src/js/components/estimateSinglePostReadTime.js"
/*!*********************************************************!*\
  !*** ./src/js/components/estimateSinglePostReadTime.js ***!
  \*********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   estimateSinglePostReadTime: () => (/* binding */ estimateSinglePostReadTime)\n/* harmony export */ });\nfunction estimateSinglePostReadTime() {\n  const post = document.querySelector('.single-post');\n  const readTimeEl = document.querySelector('.post__read-time');\n\n  // ❗ Якщо потрібних елементів нема — просто виходимо\n  if (!post || !readTimeEl) return;\n\n  // Text calculation\n  const text = post.innerText || '';\n  const words = text.trim().split(/\\s+/).filter(Boolean).length;\n  const readingSpeed = 200; // words per minute\n  let timeMinutes = words / readingSpeed;\n\n  // Images calculation\n  const images = post.querySelectorAll('img').length;\n  const imageTime = images * 10; // 10 seconds per image\n  timeMinutes += imageTime / 60;\n\n  // Round to nearest minute (мінімум 1 хв)\n  const roundedTime = Math.max(1, Math.round(timeMinutes));\n\n  // Update UI\n  readTimeEl.textContent = `${roundedTime} min read`;\n}\n\n\n//# sourceURL=webpack:///./src/js/components/estimateSinglePostReadTime.js?\n}");

/***/ },

/***/ "./src/js/components/lazyImages.js"
/*!*****************************************!*\
  !*** ./src/js/components/lazyImages.js ***!
  \*****************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   lazyLoadImages: () => (/* binding */ lazyLoadImages)\n/* harmony export */ });\n// lazyImages.js\nfunction lazyLoadImages() {\n  const lazyImages = document.querySelectorAll('[data-src]');\n\n  lazyImages.forEach((img) => {\n    // Додаємо клас для початкового blur\n    img.classList.add('lazy-img');\n\n    // Коли картинка завантажиться, видаляємо blur через клас is-loaded\n    img.onload = () => {\n      img.classList.add('is-loaded');\n    };\n\n    // Встановлюємо справжній src з data-src\n    const src = img.getAttribute('data-src');\n    img.setAttribute('src', src);\n  });\n}\n\n//# sourceURL=webpack:///./src/js/components/lazyImages.js?\n}");

/***/ },

/***/ "./src/js/components/pagination.js"
/*!*****************************************!*\
  !*** ./src/js/components/pagination.js ***!
  \*****************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   pagination: () => (/* binding */ pagination)\n/* harmony export */ });\nlet currentPage = 0;\n\nfunction togglePrevBtn(maxPages) {\n    const prevBtn = document.querySelector(\".pagination__btn--prev\");\n\n    if (!prevBtn) return;\n\n    if (currentPage === 0) {\n        prevBtn.classList.add(\"hidden\");\n    } else {\n        prevBtn.classList.remove(\"hidden\");\n    }\n}\n\nfunction toggleNextBtn(maxPages) {\n    const nextBtn = document.querySelector(\".pagination__btn--next\");\n\n    if (!nextBtn) return;\n\n    if (currentPage === maxPages - 1) {\n        nextBtn.classList.add(\"hidden\");\n    } else {\n        nextBtn.classList.remove(\"hidden\");\n    }\n}\n\nfunction updatePagination() {\n    const pages = document.querySelectorAll(\".pagination__page\");\n    const maxPages = pages.length;\n\n    pages.forEach(page => {\n        page.classList.remove(\"pagination__page--active\");\n    });\n\n    if (pages[currentPage]) {\n        pages[currentPage].classList.add(\"pagination__page--active\");\n    }\n\n    togglePrevBtn(maxPages);\n    toggleNextBtn(maxPages);\n}\n\nfunction pagination() {\n    updatePagination();\n}\n\n//# sourceURL=webpack:///./src/js/components/pagination.js?\n}");

/***/ },

/***/ "./src/js/components/tabs.js"
/*!***********************************!*\
  !*** ./src/js/components/tabs.js ***!
  \***********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   tabs: () => (/* binding */ tabs)\n/* harmony export */ });\n// Toggle menu visibility.\n// If another menu is open, close it before opening the clicked one.\nfunction toggleMenu(clickedMenu, clickedBtn) {\n  // All available menus\n  const menus = [\n    document.querySelector('.media-menu__tags'),\n    document.querySelector('.media-menu__navigation')\n  ];\n    // All menu buttons\n  const buttons = [\n    document.querySelector('.media-menu__categories-btn'),\n    document.querySelector('.media-menu__tags-btn')\n  ];\n  // Check if the clicked menu is already open\n  const isAlreadyOpen = clickedMenu.classList.contains('show');\n\n  // Close all menus\n  menus.forEach(menu => menu?.classList.remove('show'));\n  // Remove active state from all buttons\n  buttons.forEach(btn => btn?.classList.remove('active'));\n\n  // If the menu was closed — open it\n  if (!isAlreadyOpen) {\n    clickedMenu.classList.add('show');\n    clickedBtn.classList.add('active');\n  }\n}\n\n/**\n * Switch tabs items\n */\nfunction initTabsSwitch() {\n  const tabs = document.querySelectorAll('.media-menu__tab');\n\n  tabs.forEach(tab => {\n    tab.addEventListener('click', (e) => {\n      e.preventDefault();\n\n      tabs.forEach(t => t.classList.remove('active'));\n      tab.classList.add('active');\n    });\n  });\n}\n\n/**\n * Initialize menu open/close logic\n */\nfunction initMenu() {\n  const tagsBtn = document.querySelector('.media-menu__tags-btn');\n  const tagsMenu = document.querySelector('.media-menu__tags');\n\n  const categoriesBtn = document.querySelector('.media-menu__categories-btn');\n  const categoriesMenu = document.querySelector('.media-menu__navigation');\n\n  tagsBtn?.addEventListener('click', (e) => {\n    e.stopPropagation();\n    toggleMenu(tagsMenu, tagsBtn);\n  });\n\n  categoriesBtn?.addEventListener('click', (e) => {\n    e.stopPropagation();\n    toggleMenu(categoriesMenu, categoriesBtn);\n  });\n}\n\nfunction enableTabRedirect(selector) {\n    const tabs = document.querySelectorAll(selector);\n\n    tabs.forEach(tab => {\n        tab.addEventListener('click', e => {\n            e.preventDefault(); // зупиняємо стандартну поведінку\n            const url = tab.getAttribute('href'); // беремо URL з href\n            if (url) {\n                window.location.href = url; // редірект\n            }\n        });\n    });\n}\n\nfunction tabs() {\n  initMenu();\n  initTabsSwitch();\n  enableTabRedirect('.media-menu__tab'); \n}\n\n//# sourceURL=webpack:///./src/js/components/tabs.js?\n}");

/***/ },

/***/ "./src/js/components/themeHandler.js"
/*!*******************************************!*\
  !*** ./src/js/components/themeHandler.js ***!
  \*******************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   themeToggle: () => (/* binding */ themeToggle)\n/* harmony export */ });\n/**\n * Apply theme\n */\nfunction applyTheme(isDark, html, toggle) {\n  html.classList.toggle('dark', isDark);\n  toggle.checked = isDark;\n  localStorage.setItem('theme', isDark ? 'dark' : 'light');\n}\n\n/**\n * Init theme on page load\n */\nfunction initTheme(toggle, html) {\n  const savedTheme = localStorage.getItem('theme');\n  const isDark = savedTheme === 'dark';\n\n  applyTheme(isDark, html, toggle);\n}\n\n/**\n * Init toggle handler\n */\nfunction initThemeToggle(toggle, html) {\n  toggle?.addEventListener('change', () => {\n    applyTheme(toggle.checked, html, toggle);\n  });\n}\n\n/**\n * Public initializer\n */\nfunction themeToggle() {\n  const toggle = document.getElementById('theme-toggle');\n  const html = document.documentElement;\n\n  if (!toggle) return;\n\n  initTheme(toggle, html);\n  initThemeToggle(toggle, html);\n}\n\n\n//# sourceURL=webpack:///./src/js/components/themeHandler.js?\n}");

/***/ },

/***/ "./src/js/components/video.js"
/*!************************************!*\
  !*** ./src/js/components/video.js ***!
  \************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   video: () => (/* binding */ video)\n/* harmony export */ });\nconst modal = document.getElementById('video-modal');\nconst videoElement = document.getElementById('modal-video');\n\n/** Відкриття модала з відео */\nfunction openModal(videoSrc) {\n    if (!modal || !videoElement) return;\n    videoElement.querySelector('source').src = videoSrc;\n    videoElement.load();\n    modal.classList.add('isOpen');\n}\n\n/** Закриття модала */\nfunction closeModal() {\n    if (!modal || !videoElement) return;\n    modal.classList.remove('isOpen');\n    videoElement.pause();\n    videoElement.currentTime = 0;\n}\n\n/** Ініціалізація кнопок відтворення відео */\nfunction initVideoButtons() {\n    const buttons = document.querySelectorAll('.post__video-play-button');\n    if (!buttons.length) return;\n\n    buttons.forEach(btn => {\n        if (btn.dataset.init) return;\n        btn.dataset.init = 'true';\n\n        btn.addEventListener('click', e => {\n            e.preventDefault();\n            e.stopPropagation();\n            const src = btn.closest('.post-main-video')?.querySelector('video source')?.src;\n            if (!src) return;\n            openModal(src);\n        });\n    });\n}\n\n/** Ініціалізація закриття модала */\nfunction initModalClose() {\n    if (!modal) return;\n\n    modal.addEventListener('click', e => {\n        if (e.target === modal) closeModal();\n    });\n\n    const closeBtn = document.getElementById('modal-close');\n    if (closeBtn) closeBtn.addEventListener('click', closeModal);\n}\n\n/** Експортована функція для старту відео-модала */\nfunction video() {\n    initVideoButtons();\n    initModalClose();\n}\n\n//# sourceURL=webpack:///./src/js/components/video.js?\n}");

/***/ },

/***/ "./src/js/main.js"
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_estimateSinglePostReadTime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/estimateSinglePostReadTime.js */ \"./src/js/components/estimateSinglePostReadTime.js\");\n/* harmony import */ var _components_calculateTotalPages_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/calculateTotalPages.js */ \"./src/js/components/calculateTotalPages.js\");\n/* harmony import */ var _components_burgerMenu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/burgerMenu.js */ \"./src/js/components/burgerMenu.js\");\n/* harmony import */ var _components_tabs_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/tabs.js */ \"./src/js/components/tabs.js\");\n/* harmony import */ var _components_themeHandler_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/themeHandler.js */ \"./src/js/components/themeHandler.js\");\n/* harmony import */ var _components_video_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/video.js */ \"./src/js/components/video.js\");\n/* harmony import */ var _components_lazyImages_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/lazyImages.js */ \"./src/js/components/lazyImages.js\");\n/* harmony import */ var _components_pagination_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/pagination.js */ \"./src/js/components/pagination.js\");\n\n\n\n\n\n\n\n\n\ndocument.addEventListener('DOMContentLoaded', function() {\n  (0,_components_lazyImages_js__WEBPACK_IMPORTED_MODULE_6__.lazyLoadImages)();\n  (0,_components_video_js__WEBPACK_IMPORTED_MODULE_5__.video)();\n  (0,_components_themeHandler_js__WEBPACK_IMPORTED_MODULE_4__.themeToggle)();\n  (0,_components_tabs_js__WEBPACK_IMPORTED_MODULE_3__.tabs)();\n  (0,_components_calculateTotalPages_js__WEBPACK_IMPORTED_MODULE_1__.calculateTotalPages)();\n  (0,_components_burgerMenu_js__WEBPACK_IMPORTED_MODULE_2__.burgerMenu)();\n  (0,_components_estimateSinglePostReadTime_js__WEBPACK_IMPORTED_MODULE_0__.estimateSinglePostReadTime)();\n  (0,_components_pagination_js__WEBPACK_IMPORTED_MODULE_7__.pagination)();\n});\n\n//# sourceURL=webpack:///./src/js/main.js?\n}");

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Check if module exists (development only)
/******/ 		if (__webpack_modules__[moduleId] === undefined) {
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/main.js");
/******/ 	
/******/ })()
;