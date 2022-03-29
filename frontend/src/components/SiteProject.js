import {useParams} from 'react-router-dom'

const SiteProjectItem = ({project}) => {
    return (
        <tr>
            <td>
                {project.title}
            </td>
            <td>
                {project.repository}
            </td>
            <td>
                {project.users}
            </td>
        </tr>
    )
}


const SiteProject = ({projects}) => {
    let {id} = useParams()
    let filteredProject = projects.filter((project) => project.id == id)
    return (
        <table>
            <th>
                Title
            </th>
            <th>
                repository
            </th>
            <th>
                Users
            </th>
            {filteredProject.map((project) => <SiteProjectItem project={project}/>)}
        </table>
    )
}

export default SiteProject