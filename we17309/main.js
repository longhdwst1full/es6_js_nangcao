// import { setupCounter } from './counter.js'

import About from './src/pages/About';
import Contact from './src/pages/Contact';
import Home from './src/pages/Home';
import PostDetailPage from './src/pages/PostDetailPage';
import { render, router } from './src/lib';
import ProjectsPage from './src/pages/ProjectsPage';
import PostsPage from './src/pages/posts';
import ProjectDetailPage from './src/pages/ProjectDetailPage';
import AdminProjectPage from './src/pages/Admin/AdminProjectPage';
import ProjectAdd from './src/pages/Admin/ProjectAdd';
import ProjectEdit from './src/pages/Admin/ProjectEdit';

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
router.on("/project/:id", (param) => render(() => ProjectDetailPage(param.data.id), app));
router.on("/posts", () => render(PostsPage, app));
router.on("/post/:id", (param) => render(() => PostDetailPage(param.data.id), app));

router.on("/admin/project", () => render(AdminProjectPage, app))
router.on("/admin/project/add", () => render(ProjectAdd, app))
router.on("/admin/project/edit/:id", ({ data }) => render(() => ProjectEdit(data), app))
router.resolve();