import { estimateSinglePostReadTime } from "./components/estimateSinglePostReadTime.js";
import { calculateTotalPages } from "./components/calculateTotalPages.js";
import { burgerMenu } from "./components/burgerMenu.js";
import { tabs } from './components/tabs.js';
import { themeToggle } from './components/themeHandler.js';
import { video } from './components/video.js';
import { lazyLoadImages } from './components/lazyImages.js';
import { pagination } from './components/pagination.js';

document.addEventListener('DOMContentLoaded', function() {
  lazyLoadImages();
  video();
  themeToggle();
  tabs();
  calculateTotalPages();
  burgerMenu();
  estimateSinglePostReadTime();
  pagination();
});