// FormView is an object which houses all the message form functionality.
// Consider the provided code and complete the functionality.
// Apply what you learn here to other interactive views if necessary.

var FormView = {

  $form: $('form'),
  $rooms: $('#rooms'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function(event) {
    // Stop the browser from submitting the form
    event.preventDefault();

    // TODO: Currently, this is all handleSubmit does.
    // Make this function actually send a message to the Parse API.
    var roomData = function() {
      if (FormView.$rooms.find()) {
        return FormView.$rooms.find(); // NEED TO MODIFY LATER TO RETURN ROOM NAME
      }
    };

    var submittedMessage = {
      username: App.username,
      text: FormView.$form.find('input[type=text]')[0].value,
      roomname: 'test'
    };

    console.log('messageText:', FormView.$form.find('input[type=text]')[0].value);
    console.log('roomData:', roomData());

    // use POST request to send it to server
    Parse.create(submittedMessage, MessagesView.renderMessage(submittedMessage));

    console.log('click!');
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};