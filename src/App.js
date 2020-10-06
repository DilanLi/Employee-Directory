import React, { Component } from "react";
import Hero from "./components/Hero";
import heroImage from "./assets/llamacorn_residents.JPG";
import Card from "./components/Card";
import API from "./utils/API"

class App extends Component {
    state = {
        result: {},
        search: ""
      };

    componentDidMount() {
        this.searchResident();
    }

    searchResident = () => {
    API.search()
    .then(res => {
        this.setState({ result: res.data })
        console.log(res)
    }
    )
    .catch(err => console.log(err));
    }

    render() {
    if (this.state.result === {}){
        return
    }
    // console.log(this.state.result.name['name-USen'])
    return (
    <div>
    <Hero backgroundImage={heroImage}/>
    <Card name={this.state.result.fitness} />
    </div>
    )
    }
}

export default App;