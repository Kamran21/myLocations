import React from 'react';
import PropTypes from 'prop-types';
import TextInput from '../common/TextInput';


const DeleteConfirmationForm = ({confirm, onDelete, onChange, loading, errors, title}) => {

    return (
        <form onSubmit={onDelete}>
            <h3 className="my-5 text-capitalize">{title}</h3>
            <p>Confirm delete by typeing 'YES'</p>
            <TextInput name="confirm" label="confirm" value={confirm} onChange={onChange} error={errors.confirm}></TextInput>
            <button type="submit" disabled={confirm !== 'YES' && confirm !== 'yes'} value="delete" className="btn btn-primary">Delete</button>
        </form>
    )
}

DeleteConfirmationForm.propTypes={
    confirm: PropTypes.string,
    onDelete: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    loading: PropTypes.bool,
    errors: PropTypes.object,
    title: PropTypes.string.isRequired
}

export default DeleteConfirmationForm;