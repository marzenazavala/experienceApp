import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { createProject } from '../../store/actions/projectActions';
import firebase  from '../../config/fbConfig';

const CreateProject = (props) => {


const [values, setValues] = useState({
  title: '',
  content: '',
  duration: '',
  price: '',
})

const [fileUrl, setFileUrl] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault();
   props.createProject({...values, fileUrl});
   props.history.push('/');
  };

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.id]: e.target.value
    });
  };

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    const storageRef = firebase.storage().ref();
    const fileRef = storageRef.child(file.name);
    await fileRef.put(file)
      setFileUrl(await fileRef.getDownloadURL())
  };

  
    const { auth } = props;
    if(!auth.uid) return <Redirect to='/signin' />;

    return (
      <div className='container'>
        <form onSubmit={handleSubmit} className='white'>
          <h5 className='grey-text text-darken-3'>Create New Project</h5>
          <div className='input-field'>
            <label htmlFor='title'>Title</label>
            <input value={values.title} type='text' id='title' onChange={handleChange}/>
          </div>
          <div className='input-field'>
            <label htmlFor='content'>Details</label>
            <textarea value={values.content} id='content' className='materialize-textarea' onChange={handleChange}/>
          </div>
          <div className='input-field'>
            <label htmlFor='duration'>Duration</label>
            <input value={values.duration} type='text' id='duration' onChange={handleChange}/>
          </div>
          <div className='input-field'>
            <label htmlFor='price'>Price</label>
            <input value={values.price} type='text' id='price' onChange={handleChange}/>
          </div>
          <div className='input-field'>
            <input value={values.fileUrl} type='file' id='photo' onChange={handleFileChange}/>
          </div>
          <div className='input-field'>
            <button className='btn lime accent-4 z-depth-0'>Create</button>
          </div>
        </form>      
      </div>
    )
};

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    createProject: (project) => dispatch(createProject(project))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateProject)
