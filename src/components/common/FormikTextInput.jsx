import React from 'react'
import classnames from 'classnames'
import FormikErrorLabel from './FormikErrorLabel';
import FormikInputFeedback from './FormikInputFeedback';
 
const FormikTextInput = ({
  field: { name, ...field }, // { name, value, onChange, onBlur }
  form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
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
  return (
    <div className={classes}>
      <FormikErrorLabel htmlFor={name} error={error}>
        {label}
      </FormikErrorLabel>
      <input
        name={name}
        id={name}
        className="form-control"
        type="text"
        {...field}
        {...props}
      />
      {touch && error && <FormikInputFeedback>{error}</FormikInputFeedback>}
    </div>
  )
}

export default FormikTextInput