// RoomsView is an object which controls the DOM elements
// responsible for displaying and selecting rooms.

var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    // TODO: Perform any work which needs to be done
    // when this view loads.
  },

  render: function() {
    // TODO: Render out the list of rooms.
    for (var keys in Rooms._data) {
      $('#rooms select').append('<div>' + Rooms._data[keys] + '</div>');
    }
  },

  renderRoom: function(roomname) {
    // TODO: Render out a single room.
    $('#rooms select').append('<div>' + roomname + '</div>');
  },

  handleChange: function(event) {
    // TODO: Handle a user selecting a different room.
  },

  handleClick: function(event) {
    // TODO: Handle the user clicking the "Add Room" button.
  }

};
