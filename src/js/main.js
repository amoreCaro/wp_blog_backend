import { estimateSinglePostReadTime } from "./components/estimateSinglePostReadTime.js";
import { calculateTotalPages } from "./components/calculateTotalPages.js";
import { burgerMenu } from "./components/burgerMenu.js";
import { tabs } from './components/tabs.js';
import { themeToggle } from './components/themeHandler.js';
import { video } from './components/video.js';
import { lazyLoadImages } from './components/lazyImages.js';
import { pagination } from './components/pagination.js';
import { modal } from './components/modal.js';
import { togglePassword } from './components/togglePassword.js';
import { formTabs } from './components/form-tabs.js';
import { loginInit } from './components/form/login.js';
import { signInit } from './components/form/sign.js';


document.addEventListener('DOMContentLoaded', function() {
  lazyLoadImages();
  video();
  themeToggle();
  tabs();
  calculateTotalPages();
  burgerMenu();
  estimateSinglePostReadTime();
  modal();
  pagination();
  togglePassword();
  formTabs();
  loginInit();
  signInit();
});