import React, { useState } from 'react';
import PropTypes from 'prop-types';

AddTodo.propTypes = {
    clickSubmit: PropTypes.func,
};
AddTodo.defautlProps={
    clickSubmit: null,
}


function AddTodo(props) {
    const {clickSubmit} =props;
    const [value, setvalue] = useState('');

    // -----------------------------------------------------
    function handelFormSubmit(e){
        e.preventDefault();
        
        const newFormValue={
            title: value,
        }
        if(clickSubmit){
            clickSubmit(newFormValue);
            setvalue('');
        }return;
      
    }
    
    function handelOnchange(e){
        console.log(e.target.value);
        setvalue(e.target.value);

    } 
    
    
    return (   
            <form action="" method="POST" className="form-inline" role="form" onSubmit={handelFormSubmit}>
            
                <div className="form-group">
                    <label className="sr-only" >label</label>
                    <input type="text" className="form-control" value={value} onChange={handelOnchange}/>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>  
    );
}

export default AddTodo;