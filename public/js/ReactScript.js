// Header
  var Head = React.createClass({
    render: function() {
      return (
        <div id="newusr" className="form-inline">
        <label>Login (or change your name): </label>
        <input type="text" className="form-control" id="loginName" placeholder="Username" />
        <button type="button" className="btn btn-sm btn-default" onClick={sendName}>Login</button>
        <button type="button" className="btn btn-sm btn-default" id="btGroup" data-toggle="modal" onClick={createGroupModal}>Create group</button>
        <p id="yourname"><span style={{"color" : "red"}}>You not login.</span></p>
        </div>
        );
    }
  });

// Chat body
var Chatbody = React.createClass({
  render: function() {
    return ( 
      <div id="recv">
      <h4 className="center-bold title-head" id="chat-title">Chat room: messages</h4>
      </div>
      );
  }
});

// Dropdown online groups
var Dropgroup = React.createClass({
  render: function() {
    return (
      <div className="accordion" id="subgrouplist">
      </div>
      );
  }
});

// Status body
var Statusbody = React.createClass({
  render: function() {
    return ( 
      <div id="onlinelist">
      <h4 className="center-bold title-subhead">Online users</h4>
      <ul id="userlist" className="userlist list-unstyled"/>
      <h4 className="center-bold title-subhead">Group available</h4>
      <div id="grouplist">
      <Dropgroup />
      </div>
      </div>
      );
  }
});

// Chat body + Status body
var Allbody = React.createClass({
  render: function() {
    return ( 
      <div>
      <Chatbody />
      <Statusbody />
      </div>
      );
  }
});

// Modal group user
var Modal = React.createClass({
  render: function() {
    return (
      <div role="dialog" tabIndex={-1} id="group-modal" className="modal fade">
      <div className="modal-dialog modal-sm">
      <div className="modal-content">
      <div className="modal-header">
      <button aria-hidden="true" data-dismiss="modal" className="close" type="button">×</button>
      <h4 id="myModalLabel" className="modal-title">Create new group</h4>
      </div>
      <div className="modal-body" id="mbody">
      </div>
      <div className="modal-footer">
      <button data-dismiss="modal" className="btn btn-default" type="button">Close</button>
      <button className="btn btn-primary" type="button" onClick={createGroup}>Submit</button>
      </div>
      </div>
      </div>
      </div>
      );
  }
});

// Footer
// <p id="frdname">Choose your friend first.</p> 
var Footer = React.createClass({
  render: function() {
    return (
      <div id="chatfield" className="form-inline">
      <input type="text" className="form-control" id="msgInput" autofocus="autofocus" placeholder="Select your friend first." />
      <button type="button" className="btn btn-sm btn-default" onClick={sendMsg}>Send</button>       
      </div>
      );
  }
});

React.render(<Head />, document.getElementById('header'));
React.render(<Allbody />, document.getElementById('chatbox'));
React.render(<Modal />, document.getElementById('creategroup'));
React.render(<Footer />, document.getElementById('footer'));