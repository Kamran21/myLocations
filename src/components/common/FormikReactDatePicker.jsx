import React from 'react';
import DatePicker from 'react-datepicker';
import classnames from 'classnames'
import moment from 'moment';


import FormikErrorLabel from './FormikErrorLabel';
import FormikInputFeedback from './FormikInputFeedback';

import 'react-datepicker/dist/react-datepicker.css';
// import { Field } from 'formik';

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

const FormikReactDatePicker= ({
    field: { name, value, onChange, ...field }, // { name, value, onChange, onBlur }
    form: { touched, errors, ...form}, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
    className,
    label,
    ...props
  }) => {
    const error = errors[name]
    const touch = touched[name]
    const classes = classnames(
      'form-group',
      {
        'animated shake error': !!error,
      },
      className
    )
    console.log('form', form);
    console.log('field', field);
    console.log('props', props);

    const handleChange = date => {
        // this.setState(()=>{
            form.setFieldValue('date',date,true);
        //     return {date};
        // });

    }

    const handleSelect = date => {
        // this.setState(()=>{
            form.setFieldValue('date',date,true);
        //     return {date};
        // });

    }

    return ( 
        
        <div className={classes}>
            
            <FormikErrorLabel htmlFor={name} error={error}>
                {label}
            </FormikErrorLabel>

            <DatePicker
                name={name}
                touched={touched}
                errors={errors}
                {...form}
                {...field}
                {...props}
                selected={value ? moment(value) : null}
                // onChange={onChange}
                onChange={handleChange}
                onSelect={handleSelect}
                placeholderText="Category Date"
                className="form-control"
                autoComplete="off"
                // {...field}
               
                   
            />

            {touch && error && <FormikInputFeedback>{error}</FormikInputFeedback>}

        </div>
    );

}

export default FormikReactDatePicker;