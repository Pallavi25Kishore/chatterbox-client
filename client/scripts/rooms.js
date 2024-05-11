// This object houses all the room _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Rooms = {

  // TODO: Define how you want to store the list of rooms
  _data: null,

  setData: function(data) {
    var rooms = [];
    var set = new Set();
    var msgs = Messages.msgDetails();
    for (var i = 0; i < msgs.length; i++) {
      set.add(msgs[i].roomname);
    }
    for (var r of set.values()) {
      rooms.push(r);
    }
    Rooms._data = rooms;
  },

  add: function(str) {
    Rooms._data.push(str);
  }


  // TODO: Define methods which allow you to add rooms, update the list,
  // mark a room as selected, etc.

};