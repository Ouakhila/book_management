import React, { Component } from 'react'

const InfoContext = React.createContext();

//Provider
//Consumer

class InfoProvider extends Component {
    render() {
        return (
           <InfoContext.Provider value='Hello i am data'>
               {this.props.children}
           </InfoContext.Provider>
        )
    }
}
export default InfoProvider;

const InfoConsumer = InfoContext.Consumer;
export{InfoProvider, InfoConsumer};