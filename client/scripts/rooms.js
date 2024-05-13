// This object houses all the room _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Rooms = {

  // TODO: Define how you want to store the list of rooms
  _data: [],

  setData: function() {
    Rooms['_data'] = [];
    var set = new Set();
    var msgs = Messages.msgDetails();
    for (var i = 0; i < msgs.length; i++) {
      set.add(msgs[i].roomname);
    }
    for (var r of set.values()) {
      Rooms['_data'].push(r);
    }
  },

  add: function(str) {
    Rooms['_data'].push(str);
    RoomsView.render();
  },

  markSelected: function(event) {
    MessagesView.render();
  }
  // TODO: Define methods which allow you to add rooms, update the list,
  // mark a room as selected, etc.

};