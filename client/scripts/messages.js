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

  createNewMessage: function(userName, text, roomname) {
    return {username: userName,
      text: text,
      roomname: roomname
    };
  }



  // TODO: Define methods which allow you to retrieve from,
  // add to, and generally interact with the messages.

};