// import './style.css'
// import { setupCounter } from './counter.js'

import { Pages } from './example/Pages'
import Post_detail from './example/Post-detail'
import Home from './example/Home'
import { render, router } from './lib';


// import file 

const app = document.querySelector('#app');

// render(Home, app);
// render(Post_detail, app);
// setupCounter(document.querySelector('#counter'))

router.on("/", () => render(Home, app));
router.on("/post_detail", () => render(Post_detail, app));
router.notFound(() => console.log("Not found"));

router.resolve();