import React, { Component } from 'react';
import {AppRegistry, Text, View} from 'react-native';
import { StyleSheet } from 'react-native';
import { Table, Row, TableWrapper, Cell } from 'react-native-table-component';

export default class Portfolio extends Component{

    constructor(){
        super();
        this.state = {
            tableHead: ['Symbol', 'Amount'],
            tableData: [
                ['ETH', '3.44'],
                ['BTC', '0.35']
            ]
        }
    }
      
    render() {
        const state = this.state;
        return (
            <View>
                <Text style={styles.titleText}>{this.props.title}: {this.props.message}</Text>
                <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
                    <Row data={state.tableHead} style={styles.head} textStyle={styles.text}/>
                    {
                        state.tableData.map((rowData, index) => (
                            <TableWrapper key={index} style={styles.row}>
                            {
                                rowData.map((cellData, cellIndex) => (
                                <Cell key={cellIndex} data={ cellData } textStyle={ styles.text } />
                                ))
                            }
                            </TableWrapper>
                        ))
                    }
            </Table> 
            </View> 
        );
    }
};

const styles = StyleSheet.create({
    titleText: { textAlign: 'center' },
    head: { height: 40, backgroundColor: '#808B97' },
    text: { margin: 6 },
    row: { flexDirection: 'row', backgroundColor: '#FFF1C1' }  
});

AppRegistry.registerComponent('Portfolio', () => Portfolio);