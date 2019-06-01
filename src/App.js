import React, { Component } from 'react';
import './App.css';
import ReactTable from "react-table";
import "react-table/react-table.css";

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      post: []
    }
  }


  componentDidMount(){
    const url = "https://api-dolares.herokuapp.com/api/anio/2015";
    fetch(url, {
      method: "GET"
    }).then(response => response.json()).then(posts => {
      this.setState({posts: posts})
    })
  }

  render(){
    const columns = [
      {
        Header: "Fecha",
        accessor: "fecha",
        style:{
          textAlign: "center"
        },
        width: 100,
        maxWidth: 100,
        minWidth:100
      },
      {
        Header: "Importe",
        accessor: "importe",
        style:{
          textAlign: "center"
        },
        width: 100,
        maxWidth: 100,
        minWidth:100
      }
    ]
    return(
      <div>
        <ReactTable
        columns={columns}
        data={this.state.posts}
      />
      </div>
      
    );
  }

}

export default App;
