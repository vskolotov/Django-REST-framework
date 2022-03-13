import React from 'react'
import logo from './logo.svg';
import './App.css';
import './style.css'
import SiteUsersList from './components/SiteUsersList.js'
import SiteMenu from './components/SiteMenu.js'
import SiteFooter from './components/SiteFooter.js'
import axios from 'axios'
import SiteProjectsList from "./components/SiteProjectsList.js";
import SiteNotesList from "./components/SiteNotesList.js";


class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            'users': [],
            'projects': [],
            'notes': []
        }
    }

    componentDidMount() {
        axios.get('http://127.0.0.1:8000/api/users/').then(response => {
            const users = response.data.results
            this.setState({'users': users})
        }).catch(error => console.log(error))

        axios.get('http://127.0.0.1:8000/api/projects/').then(response => {
            const projects = response.data.results
            this.setState({'projects': projects})
        }).catch(error => console.log(error))

        axios.get('http://127.0.0.1:8000/api/notes/').then(response => {
            const notes = response.data.results
            this.setState({'notes': notes})
        }).catch(error => console.log(error))
    }


    render() {
        return (
            <div>
                <SiteMenu/>
                <SiteUsersList users={this.state.users}/>
                <SiteProjectsList projects={this.state.projects}/>
                <SiteNotesList notes={this.state.notes}/>
                <SiteFooter/>
            </div>
        )
    }
}

export default App;