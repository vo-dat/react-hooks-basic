import React, { useState } from 'react';
import PropTypes from 'prop-types';

FormInput.propTypes = {
    onSubmit: PropTypes.func,
};
FormInput.defaultProps={
    onSubmit: null,
}
function FormInput(props) {
    const {onSubmit} = props;
    const [student, setstudent] = useState({id:'',name:''})
   
    function handelonChangeId(e){
       console.log(e.target.value);
       setstudent({...student,id:e.target.value})
    }
    function handelonChangeName(e){
        console.log(e.target.value);
        setstudent({...student,name: e.target.value})

    }
    function handelonSubmit(e){
        e.preventDefault();
        const newstudent={
            id:student.id,
            name:student.name,
            email:'12@gmail.com'
        }
        if(!onSubmit){
            return;
        }
        onSubmit(newstudent);
        setstudent({id:' ',name:' '});
    }
    return (
       
       <form action="" method="POST" className="form-inline" role="form" onSubmit={handelonSubmit}>
       
           <div className="form-group">
               <label className="sr-only" >label</label>
               <input type="number" className="form-control" placeholder="Input Id" value={student.id} onChange={handelonChangeId}/>
               <input type="text" className="form-control" placeholder="Input field" value={student.name} onChange={handelonChangeName}/>
           </div>
       
           <button type="submit" className="btn btn-primary">Submit</button>
       </form>
       
    );
}

export default FormInput;