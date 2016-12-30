var USER_DATA = {
  name: 'Patriciaaa',
  username: 'arbonap',
  image: 'https://media4.giphy.com/media/Ue55CpP8r1lAc/200_s.gif'
}

var React = require('react');
var ReactDOM = require('react-dom');

/*
  Focused
  Independent
  Reusable
  Small
  Testable
*/

var ProfilePic = React.createClass({
  render: function () {
    return <img src={this.props.imageUrl} style={{height: 100, width: 100}}></img>
  }
});

var ProfileLink = React.createClass({
  render: function () {
    return (
      <div>
        <a href={'https://www.github.com/' +  this.props.username}>
          {this.props.username}
        </a>
      </div>
    );
  }
});

var ProfileName = React.createClass({
  render: function (){
    return <div>{this.props.name}</div>
  }
});

//container component
var Avatar = React.createClass({
  render: function () {
    return(
      <div>
        <ProfilePic imageUrl={this.props.user.image}/>
        <ProfileName name={this.props.user.name}/>
        <ProfileLink username={this.props.user.username}/>
      </div>
    );
  }
});


ReactDOM.render(<Avatar user={USER_DATA} />, document.getElementById('app'));

// function(data) = view
// you have a function that takes in data
// and it gives you a view

//this is a pure function since it's stateless
//Pure function
//Evaluates the same result, given the same arguments
// Does not depend on & doesn't modify the states of variables of its scope
// No side effects (mutations, async requests)
