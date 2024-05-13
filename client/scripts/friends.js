// This object houses all the friend _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Friends = {
  // TODO: Define how you want to store your list of friends.

  _data: [],

  toggleStatus: function(str) {
    var index = _.indexOf(Friends['_data'], str);
    if ( index === -1) {
      Friends['_data'].push(str);
    } else {
      Friends['_data'].splice(index, 1);
    }
    MessagesView.render();
  },
  // TODO: Define methods which allow you to add, toggle,
  // and check the friendship status of other users.

};