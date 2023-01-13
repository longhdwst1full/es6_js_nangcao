// import { setupCounter } from './counter.js'

import About from './example/About';
import Contact from './example/Contact';
import Home from './example/Home';
import PostDetailPage from './example/PostDetailPage';
import { render, router } from './lib';
import ProjectsPage from './example/ProjectsPage';
import PostsPage from './example/posts';
import ProjectDetailPage from './example/ProjectDetailPage';

// alt shift + o : format theo abc
// import file 

const app = document.querySelector('#app');

// render(Home, app);
// render(Post_detail, app);
// setupCounter(document.querySelector('#counter'))

router.on("/", () => render(Home, app));
router.on("/about", () => render(About, app));

router.on("/contact", () => render(Contact, app));
router.notFound(() => console.log("Not found"));

router.on("/projects", () => render(ProjectsPage, app));
router.on("/project/:id", (param ) => render(ProjectDetailPage(param.id), app));
router.on("/posts", () => render(PostsPage, app));
router.on("/post/:id", (param) => render(PostDetailPage(param.data.id), app));

router.resolve();