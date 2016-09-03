import React from 'react';

const NewCollection = ({title, description, _updateForm, errors}) => (
 <div className='new_collection'>
   <form onSubmit={e => e.preventDefault()}>
     <input type='text' placeholder='Title' value={title} onChange={_updateForm('title')}/>
     <aside>{title.length}/150</aside>
     <input type='text' placeholder='Description' value={description} onChange={_updateForm('description')}/>
     <aside>{description.length}/800</aside>
   </form>
 </div>
);

export default NewCollection;
