import './style.css';
// import { setupCounter } from './counter.js'

import About from './example/About';
import Contact from './example/Contact';
import Home from './example/Home';
import Post_detail from './example/Post-detail';
import { render, router } from './lib';

// alt shift + o : format theo abc
// import file 

const app = document.querySelector('#app');

// render(Home, app);
// render(Post_detail, app);
// setupCounter(document.querySelector('#counter'))

router.on("/", () => render(Home, app));
router.on("/about", () => render(About, app));
router.on("/postpage", () => render(About, app));
router.on("/postpage/:id", () => render(About, app));
router.on("/contact", () => render(Contact, app));
router.on("/projects", () => render(Post_detail, app));
router.notFound(() => console.log("Not found"));

router.resolve();