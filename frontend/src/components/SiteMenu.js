import {Link} from 'react-router-dom'
import App from "../App.js";
const SiteMenu = () => {
    return (

        <nav class='menu'>
            <li><Link to='/'>Users</Link></li>
            <li><Link to='/projects'>Projects</Link></li>
            <li><Link to='/notes'>Notes</Link></li>

            <li>
                <Link to='/login'>Login</Link>
                {App.prototype.isAuth() ? <button onClick={()=>App.prototype.logout()}>Logout</button> :<Link to='/login'>Login</Link>}
                {/*{App.prototype.isAuth() ? <button onClick={() => App.prototype.logout()}>{App.prototype.state.token}/Logout</button> :<Link to='/login'>Login</Link>}*/}
            </li>

        </nav>

    )
}

export default SiteMenu