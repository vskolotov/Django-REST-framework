const SiteUserItem = ({user}) => {
    return (
        <tr>
            <td>
                {user.first_name}
            </td>
            <td>
                {user.last_name}
            </td>
            <td>
                {user.email}
            </td>
            <td>
                {user.rule}
            </td>
        </tr>
    )
}


const SiteUsersList = ({users}) => {
    return (
        <table>
            <th>
                First name
            </th>
            <th>
                Last name
            </th>
            <th>
                Email
            </th>
             <th>
                Rule
            </th>
            {users.map((user) => <SiteUserItem user={user}/>)}
        </table>
    )
}

export default SiteUsersList