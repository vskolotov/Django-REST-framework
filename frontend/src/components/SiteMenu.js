import {Link} from 'react-router-dom'

const SiteMenu = () => {
    return (

        <nav class='menu'>
            <li><Link to='/'>Users</Link></li>
            <li><Link to='/projects'>Projects</Link></li>
            <li><Link to='/notes'>Notes</Link></li>
        </nav>

    )
}

export default SiteMenu