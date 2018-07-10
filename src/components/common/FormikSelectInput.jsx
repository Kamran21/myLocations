import React, {Component} from 'react'
import classnames from 'classnames'
import VirtualizedSelect from 'react-virtualized-select';
import 'react-select/dist/react-select.css';
import 'react-virtualized/styles.css';
import 'react-virtualized-select/styles.css';
import FormikInputFeedback from './FormikInputFeedback';
import FormikErrorLabel from './FormikErrorLabel';
 
class FormikSelectInput extends Component{

  constructor (props){
    super(props);
    this.state = {selectValue:this.props.value};
  } 

  render(){

    const {
      field: { name, ...field }, // { name, value, onChange, onBlur }
      form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
      className,
      label,
      ...props
    } = this.props;

    const error = errors[name]
    const touch = touched[name]
    const classes = classnames(
      'form-group',
      {
        'animated shake error': !!error,
      },
      className
    )

    console.log('props', props);
    return (

      <div className={classes}>
        <FormikErrorLabel htmlFor={name} error={error}>
          {label}
        </FormikErrorLabel>
        <VirtualizedSelect
          name={name}
          id={name}
          className="form-control"
          {...field}
          {...props}
          onChange={(selectValue) => this.setState(() => {
            this.props.form.setFieldValue('category',selectValue)
            return { selectValue } 
          })}
          value={this.state.selectValue}
        />
        {touch && error && <FormikInputFeedback>{error}</FormikInputFeedback>}
      </div>
    )

  }

}

export default FormikSelectInput









