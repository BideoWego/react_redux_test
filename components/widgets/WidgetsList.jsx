import React, { PropTypes } from 'react';


const WidgetsList = (props) => {
  const {
    widgets,
    onDeleteClick
  } = props;

  const widgetElements = widgets.map(widget => (
    <div className="Widget" key={ widget.id }>
      <p>ID: { widget.id }</p>
      <p>Name: { widget.name }</p>
      <p>Price: ${ widget.price }</p>
      <a
        className="text-danger"
        href=""
        onClick={ onDeleteClick }
        data-widget-id={ widget.id }>&times;</a>
    </div>
  ));

  return (
    <div className="WidgetsList">
      {
        widgetElements.length ?
          widgetElements :
          <p className="text-danger">
            No Widgets :(
          </p>
      }
    </div>
  );
};




export default WidgetsList;


