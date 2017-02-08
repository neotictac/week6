var React = require('react')

var Card = React.createClass({
  render: function() {
    return (

  //    <div className="row">
        <div className="col-sm-2">
          <h1><img className="img-responsive" src={"http://golearntocode.com/images/cards/" + this.props.hand + ".png"} /></h1>
        </div>
//      </div>
    )
  }

})

module.exports = Card
