import intance from "./index"


const getProject = (url) => intance.get(url)
const updateProject = (url,body) => intance.put(url)
const addProject = (url,body) => intance.post(url)
const deleteProject = (url,id) => intance.get(url)

export {
    getProject,
    updateProject,
}