const React = require('react');
require('./control-bar.less');

var ControlBar = React.createClass({

    propTypes: {
          lists: React.PropTypes.object,
          filter: React.PropTypes.string,
          allItemFilter: React.PropTypes.func,
          activeItemFilter: React.PropTypes.func,
          completedItemFilter: React.PropTypes.func
      },

    render: function() {

        return (
            <div className="control-bar-container">
                <div onClick={this.props.allItemFilter} className={this.props.filter === 'all' ? 'filter-button active-filter' : 'filter-button'}>
                    All
                </div>
                <div onClick={this.props.activeItemFilter} className={this.props.filter === 'active' ? 'filter-button active-filter' : 'filter-button'}>
                    Active
                </div>
                <div onClick={this.props.completedItemFilter} className={this.props.filter === 'completed' ? 'filter-button active-filter' : 'filter-button'}>
                   Completed
                </div>
            </div>
        )
    }
});

// _____________________________________________

module.exports = ControlBar;
