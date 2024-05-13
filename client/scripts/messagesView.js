// MessagesView is an object which controls the DOM elements
// responsible for displaying messages.

var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    // TODO: Perform any work which needs to be done
    // when this view loads.
    $('.username').on('click', MessagesView.handleClick);

  },

  render: function() {
    // TODO: Render _all_ the messages.
    MessagesView['$chats'].html('');
    var messages = Messages.filteredMsgs(); // returns array of objs with msg text names and rooms
    for (var i = 0; i < messages.length; i++) {
      MessagesView.renderMessage(messages[i]);
    }
    MessagesView.initialize();
  },

  renderMessage: function(message) {
    var $msg = $('<div class="message"></div>');
    var $msgName = $('<div class="username">' + message.username + '</div>');
    var $msgText = $('<div class="messagetext">' + message.text + '</div>');
    $msg.appendTo(MessagesView.$chats);
    $msgName.appendTo($msg);
    $msgText.appendTo($msg);
    if (_.indexOf(Friends['_data'], message.username) !== -1) {
      $msgName.css('font-weight', 'bold');
      $msgText.css('font-weight', 'bold');
    }
    // TODO: Render a single message.
  },

  handleClick: function(event) {
    // TODO: handle a user clicking on a message
    // (this should add the sender to the user's friend list).
    Friends.toggleStatus(event.target.innerText);
  },
};