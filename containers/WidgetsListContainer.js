import { connect } from 'react-redux';
import WidgetsList from './../components/widgets/WidgetsList.jsx';
import { default as widgetActions } from './../actions/widget_actions.js';


const mapStateToProps = (state) => {
  return {
    widgets: state.widgets
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onDeleteClick: (e) => {
      e.preventDefault();
      dispatch(widgetActions.deleteWidget({
        id: +e.target.getAttribute('data-widget-id')
      }));
      return false;
    }
  };
};


const WidgetsListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(WidgetsList);




export default WidgetsListContainer;








