import React from 'react';

/* eslint-disable react/prefer-stateless-function */
const RealtyItem = props => {
  const { index, objectCn, addressNotes } = props;

  let { objectType } = props;
  if (objectType === 'parcel') {
    objectType = 'Земельный участок';
  } else if (objectType === 'flat') {
    objectType = 'Квартира';
  } else if (objectType === 'building') {
    objectType = 'Здание';
  } else if (objectType === 'construction') {
    objectType = 'Сооружение';
  }
  
  return (
    <tr>
      <td>{index + 1}</td>
      <td>{objectCn}</td>
      <td>{objectType}</td>
      <td>{addressNotes}</td>
    </tr>
  );
};

export default RealtyItem;
