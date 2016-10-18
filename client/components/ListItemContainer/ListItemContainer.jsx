const React = require('react');
const ListItem = require('../ListItem/ListItem')
require('./list-item-container.less');

// __________________________________________

var ListItemContainer = React.createClass({

    propTypes: {
          items: React.PropTypes.array,
          deleteItem: React.PropTypes.func,
          markComplete: React.PropTypes.func,
          filter: React.PropTypes.string
      },

    render: function() {
        //
        // if (this.props.items.length) {
        //     switch(this.props.filter) {
        //       case 'all':
        //           var items = this.props.items.map(
        //               function(arrayItem) {
        //                   return <ListItem
        //                       deleteItem={this.props.deleteItem}
        //                       key={arrayItem._id}
        //                       item={arrayItem}
        //                       markComplete={this.props.markComplete} />
        //               }, this);
        //           break;
        //
        //       case 'active':
        //           var filteredItems = this.props.items.filter(
        //               function(item) {
        //                 return item.completed === false;
        //               }
        //           )
        //           var items = filteredItems.map(
        //               function(arrayItem) {
        //                   return <ListItem
        //                       deleteItem={this.props.deleteItem}
        //                       key={arrayItem._id}
        //                       item={arrayItem}
        //                       markComplete={this.props.markComplete} />
        //               }, this);
        //           break;
        //
        //       case 'completed':
        //           var filteredItems = this.props.items.filter(
        //               function(item) {
        //                 return item.completed === true;
        //               }
        //           )
        //           var items = filteredItems.map(
        //               function(arrayItem) {
        //                   return <ListItem
        //                       deleteItem={this.props.deleteItem}
        //                       key={arrayItem._id}
        //                       item={arrayItem}
        //                       markComplete={this.props.markComplete} />
        //               }, this);
        //           break;
        //     }
        // } else {
        //     var items = <div className="inbox-container"><i className="fa fa-inbox fa-5x" aria-hidden="true"></i><div className="inbox-greeting">Woohoo! Time to relax!</div></div>;
        // }


        return (
            <ul className="list-ul">
                {/* {items} */}
            </ul>
        )
    }
});

// _____________________________________________

module.exports = ListItemContainer;
