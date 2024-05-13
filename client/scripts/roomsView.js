// RoomsView is an object which controls the DOM elements
// responsible for displaying and selecting rooms.

var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    // TODO: Perform any work which needs to be done
    // when this view loads.
    RoomsView['$button'].on('click', RoomsView.handleClick);
    RoomsView['$select'].on('change', Rooms.markSelected);
  },

  render: function() {
    // TODO: Render out the list of rooms.
    RoomsView['$select'].html('');
    var rooms = Rooms['_data'];
    for (var i = 0; i < rooms.length; i++) {
      RoomsView.renderRoom(rooms[i]);
    }
  },

  renderRoom: function(roomname) {
    // TODO: Render out a single room.
    RoomsView['$select'].attr('name', 'roomview');
    RoomsView['$select'].attr('id', 'room-names');
    var $room = $('<option>' + roomname + '</option>');
    $room = $('<option>' + $room.text() + '</option>'); // for escaping xss attack
    $room.attr('value', roomname);
    $room.appendTo(RoomsView.$select);
  },

  handleChange: function(event) {
    // TODO: Handle a user selecting a different room.

  },

  handleClick: function(event) {
    var newroom = prompt('Enter new room');
    if (newroom) {
      if (_.indexOf(Rooms['_data'], newroom) === -1) {
        Rooms.add(newroom);
      }
    }
  }
};
