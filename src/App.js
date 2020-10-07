import React, { Component } from "react";
import Hero from "./components/Hero";
import heroImage from "./assets/llamacorn_residents.JPG";
import Card from "./components/Card";
import API from "./utils/API";
import Filter from "./components/Filter";
import Sort from "./components/Sort";
import "./components/style.css"

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
        for (id = 10; id < 170; id += 10) {
            API.search(id)
                .then(res => {
                    residents.push(res.data)
                    this.setState({ result: residents })
                }
                )
                .catch(err => console.log(err));
        }
    }

    sortByName = (id) => {
        let names = []
        for (id = 10; id < 170; id += 10) {
            API.search(id)
                .then(res => {
                    function compare(a, b) {
                        // Use toUpperCase() to ignore character casing
                        const nameA = a.band.toUpperCase();
                        const nameB = b.band.toUpperCase();
                      
                        let comparison = 0;
                        if (nameA > nameB) {
                          comparison = 1;
                        } else if (nameA < nameB) {
                          comparison = -1;
                        }
                        return comparison;
                      }

                    names.push(res.data.sort(compare));
                    console.log(names)
                    this.setState({ result: names })
                }
                )
                .catch(err => console.log(err));
        }
    }

    render() {

        let response = this.state.result;

        if (!response) {
            return
        }

        return (
            <div className="all-container">
                <Hero backgroundImage={heroImage} />
                <div className="nav ">
                    <Filter />
                    <Sort 
                    sortByName={this.sortByName}
                    />
                </div>
                <Card residents={this.state.result} />
            </div>
        )
    }
}

export default App;