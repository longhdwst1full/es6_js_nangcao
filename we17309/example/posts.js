import Header from "../components/Header";
import { projectsFake } from "../data/projectFake";

const PostsPage = () => {
    // return `<h1>Posts Page</h1>`;
    return `
        ${Header()}
    <h1>Posts Page</h1>
    ${projectsFake.map(item => `<div><a href="/post/${item.id}">  ${item.name}</a></div>`
    ).join("")
        }`
};
export default PostsPage;