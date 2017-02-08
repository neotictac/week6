// DO NOT MODIFY

// So we can use React
var React = require('react')
var ReactDOM = require('react-dom')

// Helper functions
// .shuffle() shuffles (randomizes the order of) an array
// e.g. [1,2,3,4,5].shuffle()
// getDeck() gives us an array of cards, represented as strings
// Hint: JavaScript's built-in .splice() function will remove elements from an
// array to create a new array. For example, a "hand" from a deck of cards might
// go something like this:
//
// deck.splice(0,5)
var helpers = require('./components/Helpers')
var getDeck = helpers.getDeck
Array.prototype.shuffle = helpers.shuffle

// Our component classes
var Card = require('./components/Card')
var Button = require('./components/Button')

// END OF STUFF TO NOT MODIFY



var App = React.createClass({
  dealClicked: function() {
    var shuffledDeck = getDeck().shuffle()
    
    this.setState({
      hand: shuffledDeck
    })
  },
  getInitialState: function() {
    return {
      hand: ["face_down", "face_down", "face_down", "face_down", "face_down"]
    }
  },
  render: function() {
    return (
      <div>
        <h1>Welcome to the KIEI-924 Casino!</h1>
        <Card hand={this.state.hand[0]}/>
        <Card hand={this.state.hand[1]}/>
        <Card hand={this.state.hand[2]}/>
        <Card hand={this.state.hand[3]}/>
        <Card hand={this.state.hand[4]}/>
        <Button dealClicked={this.dealClicked}/>
      </div>
    )
  }
})

ReactDOM.render(<App />, document.getElementById("app"))
