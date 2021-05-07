import React, { Component } from 'react'
import {InfoConsumer} from '../context'

 class Home extends Component {
    render() {
        return (
          <InfoConsumer>
          {data=>{
           return <h2> {data}</h2>   
          }
          }
        </InfoConsumer>
        );
    }
}
export default Home;