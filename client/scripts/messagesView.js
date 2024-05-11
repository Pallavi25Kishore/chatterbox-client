// MessagesView is an object which controls the DOM elements
// responsible for displaying messages.

var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    // TODO: Perform any work which needs to be done
    // when this view loads.
    MessagesView.$chats.html('');
  },

  render: function() {
    // TODO: Render _all_ the messages.
    MessagesView.initialize();
    var messages = Messages.msgDetails(); // returns array of objs with msg text and names
    for (var i = 0; i < messages.length; i++) {
      MessagesView.renderMessage(messages[i]);
    }
  },

  renderMessage: function(message) {
    var $msg = $('<div class="message"></div>');
    var $msgName = $('<div class="messagename">' + message.username + '</div>');
    var $msgText = $('<div class="messagetext">' + message.text + '</div>');
    $msg.appendTo(MessagesView.$chats);
    $msgName.appendTo($msg);
    $msgText.appendTo($msg);
    // TODO: Render a single message.
  },

  handleClick: function(event) {
    // TODO: handle a user clicking on a message
    // (this should add the sender to the user's friend list).
  },
};