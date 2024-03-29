const UpdateForm = ({updateDate, changeTask, updateTask, cancelUpdate}) => {
    return(
        <>
            <div className='row'>
                <div className='col'>
                    <input 
                    value={ updateDate && updateDate.title }
                    onChange={(e) => changeTask(e)}
                    className='form-control form-control-lg'/>
                </div>
                <div className='col-auto'>
                    <button 
                    onClick={updateTask}
                    className='btn btn-lg btn-success mr-20 mb-3 mx-2'>Update</button>
                    <button
                    onClick={cancelUpdate}
                    className='btn btn-lg btn-warning mb-3'>Cancel</button>
                </div>
            </div>
        </>
    )
}
export default UpdateForm;