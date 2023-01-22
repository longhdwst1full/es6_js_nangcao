
export default function ProjectItem({ projectItem }) {
    return (
                `    <div> <a href="/post/${projectItem.id}">
                ${projectItem.name}
                </a>
            </div>`
    )
}
