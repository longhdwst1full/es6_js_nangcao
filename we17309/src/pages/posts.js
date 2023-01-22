import Header from "../components/Header";
import ProjectList from "../components/ProjectList";
import { projectsFake } from "../data/projectFake";

const PostsPage = () => {
    // return `<h1>Posts Page</h1>`;
    return `
        ${Header()}
    <h1>Posts Page</h1>
   ${ProjectList({ project: projectsFake })}`
};
export default PostsPage;