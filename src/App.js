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


    searchResident = (id) => {
        let residents = []
        for (id = 10; id < 140; id += 10) {
            API.search(id)
            .then(res => {
            residents.push(res.data)
            },
            this.setState({ result: residents })
            )
            .catch(err => console.log(err));
        }
    }

    render() {
        if (this.state.result === {}) {
            return
        }

        let response = this.state.result;
        console.log(response)

        return (
            <div>
                <Hero backgroundImage={heroImage} />
                <Card residents={response}/>
            </div>
        )
    }
}

export default App;