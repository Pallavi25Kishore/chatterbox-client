// This object houses all the message _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Messages = {

  // TODO: Define how you want to store your messages.
  _data: null,

  setData: function(data) {
    Messages._data = data;
  },

  singleMsgDetails: function(message) {
    var userName = message.username;
    var text = message.text;
    var roomname = message.roomname;
    return {username: userName,
      text: text,
      roomname: roomname
    };
  },

  msgDetails: function() {
    var msgs = [];
    for (var i = 0; i < Messages._data.length; i++) {
      msgs.push(Messages.singleMsgDetails(Messages._data[i]));
    }
    return msgs;
  },

  filteredMsgs: function() {
    var msgs = Messages.msgDetails();
    var filteredmsgs = [];
    for (var j = 0; j < msgs.length; j++) {
      if (msgs[j].roomname === RoomsView['$select'].val()) {
        filteredmsgs.push(msgs[j]);
      }
    }
    return filteredmsgs;
  },

  createNewMessage: function(userName, text, roomname) {
    return {username: userName,
      text: text,
      roomname: roomname
    };
  }
  // TODO: Define methods which allow you to retrieve from,
  // add to, and generally interact with the messages.

};