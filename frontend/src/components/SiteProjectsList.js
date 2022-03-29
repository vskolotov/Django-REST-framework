import {Link} from 'react-router-dom'

const SiteProjectItem = ({project}) => {
    return (
        <tr>
            <td>
               <Link to={`/projects/${project.id}`} > {project.title}</Link>
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


const SiteProjectsList = ({projects}) => {
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
            {projects.map((project) => <SiteProjectItem project={project}/>)}
        </table>
    )
}

export default SiteProjectsList