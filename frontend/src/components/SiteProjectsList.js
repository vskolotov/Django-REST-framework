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