import React, { Component } from 'react'

 class Statecomp extends Component {

    constructor() {

        super()

        this.state = {

            name : "Vishal"

        }


    }
  render() {

    const Onchange = () => {

        this.setState({name: this.state.name});

    }

    return (
      <div>
        <h4>My Name is : {this.state.name}</h4>
        <input type="text" onChange={(p) => this.setState({name:p.target.value})} />
      </div>
    )
  }
}

export default Statecomp;
