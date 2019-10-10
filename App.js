import React, {Component} from 'react';
import {AppRegistry, View} from 'react-native';
import Portfolio from './app/components/Portfolio';

export default class App extends Component{

    constructor(){
        super();
            this.state = {
            investor: 'Pele'
        }
    }

    render() {
        return (
            <View>
                <Portfolio title="Investor" message={this.state.investor} />
            </View>
        );
    }
};

AppRegistry.registerComponent('App', () => App);