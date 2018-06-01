import React from 'react';
import PropTypes from 'prop-types';
import TextInput from '../common/TextInput';


const CategoryForm = ({category, onSave, onChange, loading, errors}) => {
    const {name} = category;
    return (
        <form onSubmit={onSave}>
            <h3>Manage Category</h3>
            <TextInput name="name" label="Name" value={name} onChange={onChange} error={errors.name}></TextInput>
            <button type="submit" disabled={name === '' || name === 'generic'} value="save" className="btn btn-primary">Save</button>
        </form>
    )
}

CategoryForm.propTypes={
    category: PropTypes.object.isRequired,
    onSave: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    loading: PropTypes.bool,
    errors: PropTypes.object
}

export default CategoryForm;