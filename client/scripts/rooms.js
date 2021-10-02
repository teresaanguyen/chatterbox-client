// This object houses all the room _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Rooms = {

  // TODO: Define how you want to store the list of rooms
  _data: {},

  // TODO: Define methods which allow you to add rooms, update the list,
  // mark a room as selected, etc.

  // loop through Messages._data
  // if Rooms._data does not contain roomname, add to
  add: function () {
    for (var i = 0; i < Messages._data.length; i++) {
      var roomname = Messages._data[i][roomname];
      if (Rooms._data[roomname] === undefined) {
        Rooms._data[roomname] = Messages._data[i][roomname];
      }
    }
    console.log('roomdata here', Rooms._data);
  }

};