import React from 'react';

const FormHeader = ({toForm, _toForm, _fromForm, _submitForm, _exitForm}) => {
  if (toForm){
    return(
      <div className='form_header'>
        <img src='https://adzerk-www.s3.amazonaws.com/customAdTypes/x.png' onClick={_exitForm}></img>
        <div>Select items</div>
        <button onClick={_toForm}>NEXT</button>
      </div>
    );
  } else {
    return(
      <div className='form_header'>
        <img src='http://flaticons.net/icons/Mobile%20Application/Left-Arrow.png' onClick={_fromForm}></img>
        <button onClick={_submitForm}>FINISH</button>
      </div>
    );
  }
};

export default FormHeader;
