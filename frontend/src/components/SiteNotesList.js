const SiteNoteItem = ({note}) => {
    return (
        <tr>
            <td>
                {note.text}
            </td>
            <td>
                {note.created}
            </td>
            <td>
                {note.updated}
            </td>
            <td>
                {note.is_active}
            </td>
            <td>
                {note.user}
            </td>
            <td>
                {note.project}
            </td>
        </tr>
    )
}


const SiteNotesList = ({notes}) => {
    return (
        <table>
            <th>
                Text
            </th>
            <th>
                Created
            </th>
            <th>
                Updated
            </th>
            <th>
                is_active
            </th>
            <th>
                User
            </th>
            <th>
                Project
            </th>
            {notes.map((note) => <SiteNoteItem note={note}/>)}
        </table>
    )
}

export default SiteNotesList