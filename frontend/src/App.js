import React from 'react'
import './App.css';
import './style.css'
import SiteUsersList from './components/SiteUsersList.js'
import SiteMenu from './components/SiteMenu.js'
import SiteFooter from './components/SiteFooter.js'
import axios from 'axios'
import SiteProjectsList from "./components/SiteProjectsList.js";
import SiteNotesList from "./components/SiteNotesList.js";
import {BrowserRouter, Link, Route, Routes, useLocation} from 'react-router-dom'
import SiteProject from "./components/SiteProject";
import LoginForm from './components/Auth.js';
import Cookies from "universal-cookie/es6";

const NotFound = () => {
    let location = useLocation()
    return (
        <div> Page {location.pathname} not found </div>
    )
}

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            'users': [],
            'projects': [],
            'notes': [],
            'token': '',
        }
    }

    load_data() {
        let headers = this.getHeader()

        axios.get('http://127.0.0.1:8000/api/users/', {headers}).then(response => {
            const users = response.data.results
            this.setState({'users': users})
        }).catch(error => console.log(error))

        axios.get('http://127.0.0.1:8000/api/projects/', {headers}).then(response => {
            const projects = response.data.results
            this.setState({'projects': projects})
        }).catch(error => console.log(error))

        axios.get('http://127.0.0.1:8000/api/notes/', {headers}).then(response => {
            const notes = response.data.results
            this.setState({'notes': notes})
        }).catch(error => console.log(error))
    }

    componentDidMount() {
        this.get_token_from_storage()
        this.load_data()
    }

    isAuth() {
        return this.state.token !== ''
    }

    set_token(token) {
        const cookies = new Cookies()
        cookies.set('token', token)
        this.setState({'token': token})
    }

    get_token_from_storage() {
        const cookies = new Cookies()
        const token = cookies.get('token')
        this.setState({'token': token}, () => this.load_data())
    }

    getHeader() {
        if (this.isAuth()) {
            return {
                'Authorization': 'Token ' + this.state.token
            }
        }
        return []
    }


    logout() {
        this.set_token('')
    }


    get_token(login, password) {
        axios
            .post('http://127.0.0.1:8000/api-token-auth/', {'username': login, 'password': password})
            .then(response => {
                this.set_token(response.data['token'])
            }).catch(error => alert('Неверный логин или пароль'))
    }

    render() {
        return (

            <div>
                <BrowserRouter>
                    <nav className='menu'>
                        <li><Link to='/'>Users</Link></li>
                        <li><Link to='/projects'>Projects</Link></li>
                        <li><Link to='/notes'>Notes</Link></li>

                        <li>
                            {this.isAuth() ? <button onClick={() => this.logout()}>Logout</button> :
                                <Link to='/login'>Login</Link>}
                            {/*{this.isAuth() ? <button onClick={() => this.logout()}>{this.state.login}/Logout</button> :<Link to='/login'>Login</Link>}*/}
                        </li>

                    </nav>
                    {/*<SiteMenu/>*/}
                    <Routes>
                        <Route exact path='/' element={<SiteUsersList users={this.state.users}/>}/>
                        <Route exact path='/projects' element={<SiteProjectsList projects={this.state.projects}/>}/>
                        <Route exact path='/notes' element={<SiteNotesList notes={this.state.notes}/>}/>
                        <Route exact path='/login'
                               element={<LoginForm get_token={(login, password) => this.get_token(login, password)}/>}/>
                        <Route exact path='/projects/:id' element={<SiteProject projects={this.state.projects}/>}/>
                        <Route path="*" element={<NotFound/>}/>
                    </Routes>
                    <SiteFooter/>
                </BrowserRouter>

            </div>
        )
    }
}

export default App;