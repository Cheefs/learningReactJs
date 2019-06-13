import './assets/global.scss';
import React, { Component } from 'react';
import ReactDom from 'react-dom';

import { Profile } from './components/Profile';
import { Galery } from './components/Galery';

class App extends Component {
    render() {
        return (
            <div>
                <header>
                    <div className="container">
                        <Profile/>
                    </div>
                </header>
                <main>
                    <div className="container">
                        <Galery />
                    </div>
                </main>
            </div>
        
        );
    }
}

ReactDom.render(<App/>, document.getElementById('root'));