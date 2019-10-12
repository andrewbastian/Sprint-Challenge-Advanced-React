import React from 'react';
import PlayerCard from '../Components/PlayerCard.js';
import axios from 'axios';
class API extends React.Component{
  constructor(){
      super()
      this.state={
          players : [],
      }
    }

    componentDidMount(){
      axios.get(`http://localhost:5000/api/players`)
      .then(result => {
        //console.log('result:', result.data);
        this.setState({ players: result.data});
      })
    }

    render(){
      return (
        <>
          <PlayerCard players={this.state.players}/>
        </>
      );
    }

}


export default API;
