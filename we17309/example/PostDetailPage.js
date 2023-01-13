import Header from "../components/Header";
import { projectsFake } from "../data/projectFake";

export default function PostDetailPage(param) {
    console.log(param);
    const dataPost = projectsFake.find(item => {
          console.log(item.id);
       return item.id == param})
    if(!dataPost) return ""
    
    return `
        <div>
        ${Header()}
          <div>
          ${dataPost.name}
          </div>

        </div>
    `
}

