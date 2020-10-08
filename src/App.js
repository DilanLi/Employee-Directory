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

    sortByHobby = (id) => {
        let names = []
        for (id = 10; id < 170; id += 10) {
            API.search(id)
                .then(res => {
                    function compare(a, b) {
                        // Use toUpperCase() to ignore character casing
                        const hobbyA = a.hobby.toUpperCase();
                        const hobbyB = b.hobby.toUpperCase();

                        let comparison = 0;
                        if (hobbyA > hobbyB) {
                            comparison = 1;
                        } else if (hobbyA < hobbyB) {
                            comparison = -1;
                        }
                        return comparison;
                    }

                    names.push(res.data);
                    names.sort(compare);
                    console.log(names);
                    this.setState({ result: names })
                }
                )
                .catch(err => console.log(err));
        }
    }

    sortByPersonality = (id) => {
        let personalities = []
        for (id = 10; id < 170; id += 10) {
            API.search(id)
                .then(res => {
                    function compare(a, b) {
                        // Use toUpperCase() to ignore character casing
                        const personalityA = a.personality.toUpperCase();
                        const personalityB = b.personality.toUpperCase();

                        let comparison = 0;
                        if (personalityA > personalityB) {
                            comparison = 1;
                        } else if (personalityA < personalityB) {
                            comparison = -1;
                        }
                        return comparison;
                    }

                    personalities.push(res.data);
                    personalities.sort(compare);
                    console.log(personalities);
                    this.setState({ result: personalities })
                }
                )
                .catch(err => console.log(err));
        }
    }

    sortByGender = (id) => {
        let genders = []
        for (id = 10; id < 170; id += 10) {
            API.search(id)
                .then(res => {
                    function compare(a, b) {
                        // Use toUpperCase() to ignore character casing
                        const genderA = a.gender.toUpperCase();
                        const genderB = b.gender.toUpperCase();

                        let comparison = 0;
                        if (genderA > genderB) {
                            comparison = 1;
                        } else if (genderA < genderB) {
                            comparison = -1;
                        }
                        return comparison;
                    }

                    genders.push(res.data);
                    genders.sort(compare);
                    console.log(genders);
                    this.setState({ result: genders })
                }
                )
                .catch(err => console.log(err));
        }
    }

    filterByMale = (id) => {
        let males = []
        for (id = 10; id < 170; id += 10) {
            API.search(id)
                .then(res => {
                    if (res.data.gender === "Male") {
                        males.push(res.data);
                    }
                    console.log(males);
                    this.setState({ result: males })
                }
                )
                .catch(err => console.log(err));
        }
    }

    filterByFemale = (id) => {
        let females = []
        for (id = 10; id < 170; id += 10) {
            API.search(id)
                .then(res => {
                    if (res.data.gender === "Female") {
                        females.push(res.data);
                    }
                    console.log(females);
                    this.setState({ result: females })
                }
                )
                .catch(err => console.log(err));
        }
    }

    filterByNormal = (id) => {
        let normals = []
        for (id = 10; id < 170; id += 10) {
            API.search(id)
                .then(res => {
                    if (res.data.personality === "Normal") {
                        normals.push(res.data);
                    }
                    console.log(normals);
                    this.setState({ result: normals })
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
                    <Filter
                        filterByMale={this.filterByMale}
                        filterByFemale={this.filterByFemale}
                        filterByNormal={this.filterByNormal}
                        searchResident={this.searchResident}
                    />
                    <Sort
                        sortByHobby={this.sortByHobby}
                        sortByPersonality={this.sortByPersonality}
                        sortByGender={this.sortByGender}
                    />
                </div>
                <Card residents={this.state.result} />
            </div>
        )
    }
}

export default App;