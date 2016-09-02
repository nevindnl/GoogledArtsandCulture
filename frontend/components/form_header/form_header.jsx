import React from 'react';

const FormHeader = ({selectedImages, router}) => (
  <div className='form_header'>
    <div>x</div>
    <div>Select items</div>

    <button onClick={() => router.push({pathname: '/new_collection', query: {selectedImages}})}>Next</button>
  </div>
);

export default FormHeader;
