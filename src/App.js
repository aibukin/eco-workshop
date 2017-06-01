import React, {Component} from 'react';

import Page from 'arui-feather/page';
import AppContent from 'arui-feather/app-content';
import Header from 'arui-feather/header';
import Menu from 'arui-feather/menu';
import Footer from 'arui-feather/footer';

import MainComponent from './components/main-component/MainComponent'

import './App.css';

class App extends Component {
    render() {
        return (
            <Page
                className={ 'app' }
                header={ <Header
                    menu={
                        <Menu
                            view='horizontal'
                            content={ [{
                                type: 'item',
                                value: 'Пункт меню'
                            }] }
                        />
                    }
                    user={'Клиент Банкович'}
                    logo={
                        <div
                            className="app__logo"
                        />
                    }
                /> }
                footer={ <Footer /> }
            >
                <AppContent>
                    <MainComponent />
                </AppContent>
            </Page>
        );
    }
}

export default App;
