// This object houses all the message _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

// This should be the message object format
// var message = {
//   username: 'shawndrost',
//   text: 'trololo',
//   roomname: '4chan'
// };

//use Parse???

var Messages = {

  // TODO: Define how you want to store your messages.
  _data: [],

  //from lecture
  // get: () => return this._data;
  // updateMessages: (newMessage) => //add to _data:???

  // TODO: Define methods which allow you to retrieve from,
  // add to, and generally interact with the messages.
  add: function (message) {
    Messages._data.push(message);
  }

};
