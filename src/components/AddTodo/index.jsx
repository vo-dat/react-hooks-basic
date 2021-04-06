import React, { useState } from 'react';
import PropTypes from 'prop-types';

TodoForm.propTypes = {
    onSubmit: PropTypes.func,
};
TodoForm.defaultProps={
    onSubmit: null,
};

function TodoForm(props) {
    const {onSubmit} = props;
    const [value, setvalue] = useState('');

function handelValueChange(e){
      console.log(e.target.value);
      setvalue(e.target.value);
}
function handelSubmitForm(e){{
    e.preventDefault();
    const formValue={
        title: value,
    }
    if(!onSubmit){
        console.log('Errol');
        return;
    }
    console.log('Pass');
    onSubmit(formValue);
    setvalue('');
}}
    return (
            <div className="container">
                    <form action="" method="POST" className="form-inline" role="form" onSubmit={handelSubmitForm}>
                        <div className="form-group">
                            <label className="sr-only" >label</label>
                            <input type="text" className="form-control" value={value} onChange={handelValueChange}/>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
            </div>    
       
    )
}

export default TodoForm;