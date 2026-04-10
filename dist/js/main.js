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

/***/ "./src/js/components/form-tabs.js"
/*!****************************************!*\
  !*** ./src/js/components/form-tabs.js ***!
  \****************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   formTabs: () => (/* binding */ formTabs)\n/* harmony export */ });\nfunction formTabs() {\n  const links = document.querySelectorAll('.tab__link');\n  const tabs = document.querySelectorAll('.tab');\n\n  if (!links.length || !tabs.length) return;\n\n  function setActive(tabName) {\n    tabs.forEach(tab => {\n      const isTarget = tab.classList.contains(`tab--${tabName}`);\n\n      tab.classList.toggle('hidden', !isTarget);\n    });\n\n    links.forEach(link => {\n      const isActive = link.dataset.tab === tabName;\n      link.classList.toggle('tab__link--active', isActive);\n    });\n  }\n\n  links.forEach(link => {\n    link.addEventListener('click', (e) => {\n      e.preventDefault();\n      setActive(link.dataset.tab);\n    });\n  });\n\n  // default\n  setActive('login');\n}\n\n//# sourceURL=webpack:///./src/js/components/form-tabs.js?\n}");

/***/ },

/***/ "./src/js/components/form/login.js"
/*!*****************************************!*\
  !*** ./src/js/components/form/login.js ***!
  \*****************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loginInit: () => (/* binding */ loginInit)\n/* harmony export */ });\nfunction loginInit() {\n\n    const loginForm = document.querySelector('.form-login');\n    if (!loginForm) return;\n\n    const submit = loginForm.querySelector('button[type=\"submit\"]');\n\n    const successMsg = loginForm.querySelector('.popup-success');\n    const errorMsg = loginForm.querySelector('.popup-error');\n    const errorText = loginForm.querySelector('.popup-error__text');\n\n    loginForm.addEventListener('input', (e) => {\n        if (e.target.matches('.form__input, .form__input-checkbox')) {\n            e.target.classList.remove('invalid');\n        }\n    });\n\n    loginForm.addEventListener('submit', function (e) {\n        e.preventDefault();\n\n        const inputs = loginForm.querySelectorAll(\n            '.form__input, .form__input-checkbox'\n        );\n\n        let valid = true;\n\n        inputs.forEach(input => {\n\n            if (input.classList.contains('form__input-checkbox')) {\n                input.classList.remove('invalid');\n\n            } else {\n\n                const value = input.value.trim();\n\n                if (!value) {\n                    input.classList.add('invalid');\n                    valid = false;\n\n                } else if (\n                    input.classList.contains('form__input-password') &&\n                    value.length < 6\n                ) {\n                    input.classList.add('invalid');\n                    valid = false;\n\n                } else {\n                    input.classList.remove('invalid');\n                }\n            }\n        });\n\n        if (!valid) return;\n\n        submit.disabled = true;\n\n        fetch('/wp-admin/admin-ajax.php', {\n            method: 'POST',\n            headers: {\n                'Content-Type': 'application/x-www-form-urlencoded'\n            },\n            body: new URLSearchParams({\n                action: 'login_user',\n\n                username: loginForm.querySelector('.form__input-username')?.value || '',\n                password: loginForm.querySelector('.form__input-password')?.value || '',\n                remember: loginForm.querySelector('.form__input-checkbox')?.checked ? '1' : '0',\n\n                nonce: theme.nonce_login || ''\n            })\n        })\n        .then(res => res.json())\n        .then(data => {\n\n            if (data.success) {\n\n                successMsg.classList.remove('hidden');\n                errorMsg.classList.add('hidden');\n\n                setTimeout(() => {\n                    window.location.reload();\n                }, 800);\n\n            } else {\n\n                successMsg.classList.add('hidden');\n                errorMsg.classList.remove('hidden');\n\n                errorText.textContent = data?.data?.message || 'Login failed';\n\n                submit.disabled = false;\n            }\n        })\n        .catch(err => {\n            console.error(err);\n\n            successMsg.classList.add('hidden');\n            errorMsg.classList.remove('hidden');\n            errorText.textContent = 'Server error';\n\n            submit.disabled = false;\n        });\n    });\n}\n\n//# sourceURL=webpack:///./src/js/components/form/login.js?\n}");

/***/ },

/***/ "./src/js/components/form/sign.js"
/*!****************************************!*\
  !*** ./src/js/components/form/sign.js ***!
  \****************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   signInit: () => (/* binding */ signInit)\n/* harmony export */ });\nfunction signInit() {\n    const registerForm = document.querySelector('.form-register');\n    if (!registerForm) return;\n\n    const submit = registerForm.querySelector('button[type=\"submit\"]');\n\n    registerForm.addEventListener('input', (e) => {\n        if (e.target.matches('.form__input, .form__input-checkbox')) {\n            e.target.classList.remove('invalid');\n        }\n    });\n\n    registerForm.addEventListener('submit', function (e) {\n        e.preventDefault();\n\n        const inputs = registerForm.querySelectorAll(\n            '.form__input, .form__input-checkbox'\n        );\n\n        let valid = true;\n\n        inputs.forEach(input => {\n            if (input.classList.contains('form__input-checkbox')) {\n                if (!input.checked) {\n                    input.classList.add('invalid');\n                    valid = false;\n                } else {\n                    input.classList.remove('invalid');\n                }\n            } else {\n                const value = input.value.trim();\n\n                if (!value) {\n                    input.classList.add('invalid');\n                    valid = false;\n\n                } else if (\n                    input.classList.contains('form__input-password') &&\n                    value.length < 6\n                ) {\n                    input.classList.add('invalid');\n                    valid = false;\n\n                } else if (\n                    input.classList.contains('form__input-email') &&\n                    !/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(value)\n                ) {\n                    input.classList.add('invalid');\n                    valid = false;\n\n                } else {\n                    input.classList.remove('invalid');\n                }\n            }\n        });\n\n        if (!valid) return;\n\n        submit.disabled = true;\n\n        fetch('/wp-admin/admin-ajax.php', {\n            method: 'POST',\n            headers: {\n                'Content-Type': 'application/x-www-form-urlencoded'\n            },\n            body: new URLSearchParams({\n                action: 'register_user',\n                username: registerForm.querySelector('.form__input-username')?.value || '',\n                email: registerForm.querySelector('.form__input-email')?.value || '',\n                password: registerForm.querySelector('.form__input-password')?.value || '',\n                agree: registerForm.querySelector('.form__input-checkbox')?.checked ? '1' : '0',\n                nonce: theme.nonce_register || ''\n            })\n        })\n        .then(res => res.json())\n        .then(data => {\n            const successMsg = registerForm.querySelector('.popup-success');\n            const errorMsg = registerForm.querySelector('.popup-error');\n            const errorText = registerForm.querySelector('.popup-error__text');\n\n            if (data.success) {\n                successMsg.classList.remove('hidden');\n                errorMsg.classList.add('hidden');\n\n                submit.disabled = true; \n            } else {\n                const { message } = data.data;\n\n                errorMsg.classList.remove('hidden');\n                successMsg.classList.add('hidden');\n\n                errorText.textContent = message;\n\n                submit.disabled = false;\n            }\n        })\n        .catch(err => {\n            console.error(err);\n            submit.disabled = false;\n        });\n    });\n}\n\n//# sourceURL=webpack:///./src/js/components/form/sign.js?\n}");

/***/ },

/***/ "./src/js/components/lazyImages.js"
/*!*****************************************!*\
  !*** ./src/js/components/lazyImages.js ***!
  \*****************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   lazyLoadImages: () => (/* binding */ lazyLoadImages)\n/* harmony export */ });\n// lazyImages.js\nfunction lazyLoadImages() {\n  const lazyImages = document.querySelectorAll('[data-src]');\n\n  lazyImages.forEach((img) => {\n    // Додаємо клас для початкового blur\n    img.classList.add('lazy-img');\n\n    // Коли картинка завантажиться, видаляємо blur через клас is-loaded\n    img.onload = () => {\n      img.classList.add('is-loaded');\n    };\n\n    // Встановлюємо справжній src з data-src\n    const src = img.getAttribute('data-src');\n    img.setAttribute('src', src);\n  });\n}\n\n//# sourceURL=webpack:///./src/js/components/lazyImages.js?\n}");

/***/ },

/***/ "./src/js/components/modal.js"
/*!************************************!*\
  !*** ./src/js/components/modal.js ***!
  \************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   modal: () => (/* binding */ modal)\n/* harmony export */ });\nfunction modal() {\n  const modal = document.getElementById('modal');\n  const openBtn = document.getElementById('openSignInBtn');\n  const closeBtn = document.getElementById('closeSignInModal');\n\n  if (!modal || !openBtn || !closeBtn) return;\n\n  function openMenu() {\n    modal.classList.remove('close');\n    modal.classList.add('open');\n  }\n\n  function closeMenu() {\n    modal.classList.remove('open');\n    modal.classList.add('close');\n  }\n\n  openBtn.addEventListener('click', (e) => {\n    e.preventDefault();\n    openMenu();\n  });\n\n  closeBtn.addEventListener('click', (e) => {\n    e.preventDefault();\n    closeMenu();\n  });\n\n  modal.addEventListener('click', (e) => {\n    if (e.target === modal) closeMenu();\n  });\n\n  document.addEventListener('keydown', (e) => {\n    if (e.key === 'Escape') closeMenu();\n  });\n}\n\n//# sourceURL=webpack:///./src/js/components/modal.js?\n}");

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

/***/ "./src/js/components/togglePassword.js"
/*!*********************************************!*\
  !*** ./src/js/components/togglePassword.js ***!
  \*********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   togglePassword: () => (/* binding */ togglePassword)\n/* harmony export */ });\nfunction togglePassword() {\n    const buttons = document.querySelectorAll(\".toggle-password\");\n\n    if (!buttons.length) return;\n\n    buttons.forEach((btn) => {\n        btn.addEventListener(\"click\", () => {\n            const field = btn.closest(\".password-field\");\n            if (!field) return;\n\n            const input = field.querySelector(\".form__input-password\");\n            const showIcon = field.querySelector(\".show-icon\");\n            const hideIcon = field.querySelector(\".hide-icon\");\n\n            if (!input || !showIcon || !hideIcon) return;\n\n            const isHidden = input.type === \"password\";\n\n            input.type = isHidden ? \"text\" : \"password\";\n\n            showIcon.classList.toggle(\"hidden\", isHidden);\n            hideIcon.classList.toggle(\"hidden\", !isHidden);\n        });\n    });\n}\n\n//# sourceURL=webpack:///./src/js/components/togglePassword.js?\n}");

/***/ },

/***/ "./src/js/components/video.js"
/*!************************************!*\
  !*** ./src/js/components/video.js ***!
  \************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   video: () => (/* binding */ video)\n/* harmony export */ });\nconst modal = document.getElementById('video-modal');\nconst videoElement = document.getElementById('modal-video');\n\nfunction openModal(videoSrc) {\n    if (!modal || !videoElement) return;\n    videoElement.querySelector('source').src = videoSrc;\n    videoElement.load();\n    modal.classList.add('isOpen');\n}\n\nfunction closeModal() {\n    if (!modal || !videoElement) return;\n    modal.classList.remove('isOpen');\n    videoElement.pause();\n    videoElement.currentTime = 0;\n}\n\nfunction initVideoButtons() {\n    const buttons = document.querySelectorAll('.post__video-play-button');\n    if (!buttons.length) return;\n\n    buttons.forEach(btn => {\n        if (btn.dataset.init) return;\n        btn.dataset.init = 'true';\n\n        btn.addEventListener('click', e => {\n            e.preventDefault();\n            e.stopPropagation();\n            const src = btn.closest('.post-main-video')?.querySelector('video source')?.src;\n            if (!src) return;\n            openModal(src);\n        });\n    });\n}\n\nfunction initModalClose() {\n    if (!modal) return;\n\n    modal.addEventListener('click', e => {\n        if (e.target === modal) closeModal();\n    });\n\n    const closeBtn = document.getElementById('modal-close');\n    if (closeBtn) closeBtn.addEventListener('click', closeModal);\n}\n\nfunction video() {\n    initVideoButtons();\n    initModalClose();\n}\n\n//# sourceURL=webpack:///./src/js/components/video.js?\n}");

/***/ },

/***/ "./src/js/main.js"
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_estimateSinglePostReadTime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/estimateSinglePostReadTime.js */ \"./src/js/components/estimateSinglePostReadTime.js\");\n/* harmony import */ var _components_calculateTotalPages_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/calculateTotalPages.js */ \"./src/js/components/calculateTotalPages.js\");\n/* harmony import */ var _components_burgerMenu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/burgerMenu.js */ \"./src/js/components/burgerMenu.js\");\n/* harmony import */ var _components_tabs_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/tabs.js */ \"./src/js/components/tabs.js\");\n/* harmony import */ var _components_themeHandler_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/themeHandler.js */ \"./src/js/components/themeHandler.js\");\n/* harmony import */ var _components_video_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/video.js */ \"./src/js/components/video.js\");\n/* harmony import */ var _components_lazyImages_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/lazyImages.js */ \"./src/js/components/lazyImages.js\");\n/* harmony import */ var _components_pagination_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/pagination.js */ \"./src/js/components/pagination.js\");\n/* harmony import */ var _components_modal_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/modal.js */ \"./src/js/components/modal.js\");\n/* harmony import */ var _components_togglePassword_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/togglePassword.js */ \"./src/js/components/togglePassword.js\");\n/* harmony import */ var _components_form_tabs_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/form-tabs.js */ \"./src/js/components/form-tabs.js\");\n/* harmony import */ var _components_form_login_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/form/login.js */ \"./src/js/components/form/login.js\");\n/* harmony import */ var _components_form_sign_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/form/sign.js */ \"./src/js/components/form/sign.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\ndocument.addEventListener('DOMContentLoaded', function() {\n  (0,_components_lazyImages_js__WEBPACK_IMPORTED_MODULE_6__.lazyLoadImages)();\n  (0,_components_video_js__WEBPACK_IMPORTED_MODULE_5__.video)();\n  (0,_components_themeHandler_js__WEBPACK_IMPORTED_MODULE_4__.themeToggle)();\n  (0,_components_tabs_js__WEBPACK_IMPORTED_MODULE_3__.tabs)();\n  (0,_components_calculateTotalPages_js__WEBPACK_IMPORTED_MODULE_1__.calculateTotalPages)();\n  (0,_components_burgerMenu_js__WEBPACK_IMPORTED_MODULE_2__.burgerMenu)();\n  (0,_components_estimateSinglePostReadTime_js__WEBPACK_IMPORTED_MODULE_0__.estimateSinglePostReadTime)();\n  (0,_components_modal_js__WEBPACK_IMPORTED_MODULE_8__.modal)();\n  (0,_components_pagination_js__WEBPACK_IMPORTED_MODULE_7__.pagination)();\n  (0,_components_togglePassword_js__WEBPACK_IMPORTED_MODULE_9__.togglePassword)();\n  (0,_components_form_tabs_js__WEBPACK_IMPORTED_MODULE_10__.formTabs)();\n  (0,_components_form_login_js__WEBPACK_IMPORTED_MODULE_11__.loginInit)();\n  (0,_components_form_sign_js__WEBPACK_IMPORTED_MODULE_12__.signInit)();\n});\n\n//# sourceURL=webpack:///./src/js/main.js?\n}");

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
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
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