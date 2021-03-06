const React = require('react');
const ReactDOM = require('react-dom');
const less = require('./style.less');
const {Provider} = require('react-redux');
const {App} = require('./handlers/');
const {store} = require('./store');
// _____________________________________________


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('content')
);

// _____________________________________________


// create box shadow on reset and clear completed buttons on hover
// move trash can to name of lyst, change wording to clear list

// show an icon of a person relaxing, or something playful when no items are in a list. Maybe show something else upon first creation?
// create ability to move/show the side panel
// on clear completed button, component doesn't render, but it works on refresh
// responsiveness
// add arrows to priority and due date inputs
// add walk through guide of app

// modularize handlers
// edit item name
// ability to star an item, see all starred items
// share list on facebook
// add "experience points"
// send email/text reminders
// ability to sort by priority or due date
// can't make due date none when deleting already selected due date
// integrate task dates into gmail or iCal
