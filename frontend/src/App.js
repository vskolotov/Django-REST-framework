import React from 'react'
import logo from './logo.svg';
import './App.css';
import './style.css'
import SiteUsersList from './components/SiteUsersList.js'
import SiteMenu from './components/SiteMenu.js'
import SiteFooter from './components/SiteFooter.js'
import axios from 'axios'


class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            'users': []
        }
    }

    componentDidMount() {
        axios
            .get('http://127.0.0.1:8000/api/users/')
            .then(response => {
                const users = response.data

                this.setState({
                    'users': users
                })
            })
            .catch(error => console.log(error))
    }

    render() {
        return (
            <div>
                <SiteMenu/>
                <SiteUsersList users={this.state.users}/>
                <SiteFooter/>
            </div>
        )
    }
}

export default App;