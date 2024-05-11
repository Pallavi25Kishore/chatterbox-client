// RoomsView is an object which controls the DOM elements
// responsible for displaying and selecting rooms.

var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    // TODO: Perform any work which needs to be done
    // when this view loads.
    RoomsView.$select.html('');

  },

  render: function() {
    // TODO: Render out the list of rooms.
    RoomsView.initialize();
    var rooms = Rooms._data;
    for (var i = 0; i < rooms.length; i++) {
      RoomsView.renderRoom(rooms[i]);
    }
  },

  renderRoom: function(roomname) {
    // TODO: Render out a single room.
    RoomsView.$select.attr('name', 'roomview');
    RoomsView.$select.attr('id', 'room-names');
    var $room = $('<option>' + roomname + '</option>');
    $room.attr('value', roomname);
    $room.appendTo(RoomsView.$select);
  },

  handleChange: function(event) {
    // TODO: Handle a user selecting a different room.

  },

  handleClick: function(event) {
    /*RoomsView.$button.on('click', function(event) {
      event.preventDefault();
      $('#add-room-form').submit();
      var newroom = $('#newroom').val();
      console.log(newroom);
      if (_.indexOf(Rooms._data, roomname) === -1) {
        Rooms.add(newroom);
        RoomsView.render(); // rendering updated rooms data array
      }
      // to reset form fields to original placeholders
    });*/


    // TODO: Handle the user clicking the "Add Room" button.
    console.log('step 001');

    var handleNewRoomFormSubmissionButton = function($pop) {
      $('#add-room-form').on('submit', function(event) {
        console.log('step 003');
        event.preventDefault();
        var data = Object.fromEntries(new FormData(event.target).entries());
        var roomname = data.newroom;
        if (_.indexOf(Rooms._data, roomname) === -1) {
          Rooms.add(roomname);
          RoomsView.render(); // rendering updated rooms data array
        }
        this.reset(); // to reset form fields to original placeholders
        $pop.css('display', 'none');
      });
    };

    var $pop = $('<form id="add-room-form" action=""></form>');
    var $main = $('#main');
    $pop.appendTo($main);
    var $roomInput = $('<input type="text" placeholder="Add room and press enter" id="newroom" name= "newroom"></input>');
    console.log('step 002', event);
    $roomInput.appendTo($pop);
    RoomsView.$button.on('click', function(event) {
      $pop.css('display', 'block');
      handleNewRoomFormSubmissionButton($pop);
    });
  },

  /*renderAddRoomSpace: function() {
    var $addRoom = $('<form id="add-room-form" action="#" method="post"></form>');
    var $roomInput = $('<input type="text" placeholder="Add room" id="newroom" name= "newroom"></input>');
    $addRoom.appendTo('#rooms');
    $roomInput.appendTo($addRoom);
    RoomsView.$button.appendTo($addRoom);
    RoomsView.$button.attr('type', 'submit');
  }*/

};
