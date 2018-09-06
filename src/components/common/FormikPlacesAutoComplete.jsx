import React, { Component } from "react";
import classnames from "classnames";
import FormikErrorLabel from "./FormikErrorLabel";
import FormikInputFeedback from "./FormikInputFeedback";
// import apiKey from "../../configureMap";
// import Script from "react-load-script";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng
} from "react-places-autocomplete";

// const styles = {
//     autocompleteContainer:{
//         zIndex:1000
//     }
// }
class FormikPlacesAutoComplete extends Component {
  constructor(props) {
    super(props);
    this.state = { 
        // address: this.props.value,
        address: '',
        scriptLoaded:false
    };
  }

//   handleScriptLoad = () => {
//     this.setState({scriptLoaded:true});
//   };

  handleChange = address => {
    this.setState(()=>{
        this.props.form.setFieldValue('address',address,true);
        this.props.form.setFieldValue('latLng',{lat:null,lng:null},true)
        return {address};
    });
  };

  handleBlur = address => {
    
    this.props.form.setFieldTouched('address');
       
  };

  handleSelect = address => {
   
          geocodeByAddress(address)
            .then(results => getLatLng(results[0]))
            .then(latLng => {
                console.log('Success', latLng);
                this.setState(()=>{
                    this.props.form.setFieldValue('address',address,true);
                    this.props.form.setFieldValue('latLng',{...latLng},true);
                    return {address};
                });
            })
            .catch(error => console.error('Error', error));

  };

  render() {
    const {
      field: { name, ...field }, // { name, value, onChange, onBlur }
      form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
      className,
      label,
      ...props
    } = this.props;

    const error = errors[name];
    const touch = touched[name];
    const classes = classnames(
      "form-group",
      {
        "animated shake error": !!error
      },
      className
    );

    console.log("props", props);
    return (
      <React.Fragment>
        {/* <Script
          url={`https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places`}
          onLoad={this.handleScriptLoad}
        /> */}
        { 
            // this.state.scriptLoaded &&
            <div className={classes}>
                <FormikErrorLabel htmlFor={name} error={error}>
                    {label}
                </FormikErrorLabel>

                <PlacesAutocomplete
                    name={name}
                    id={name}
                    
                    {...field}
                    {...props}
                    // onChange={(selectValue) => this.setState(() => {
                    //     this.props.form.setFieldValue('categories',selectValue)
                    //     return { selectValue } 
                    // })}
                   
                    // value={this.state.address}
                   
                    onChange={this.handleChange}
                    onSelect={this.handleSelect}
                    // className="form-control"
                >
                    {({ getInputProps, suggestions, getSuggestionItemProps, loading, ...a}) => (
                    <div>
                        <input
                         
                        {...getInputProps({
                            placeholder: 'Search Places ...',
                            className: 'location-search-input form-control',
                        })}
                        onBlur={this.handleBlur}
                        />
                        <div className="autocomplete-dropdown-container">
                        {loading && <div>Loading...</div>}
                        {suggestions.map(suggestion => {
                            const className = suggestion.active
                            ? 'suggestion-item--active'
                            : 'suggestion-item';
                            // inline style for demonstration purpose
                            const style = suggestion.active
                            ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                            : { backgroundColor: '#ffffff', cursor: 'pointer' };
                            return (
                            <div
                                {...getSuggestionItemProps(suggestion, {
                                className,
                                style,
                                })}
                            >
                                <span>{suggestion.description}</span>
                            </div>
                            );
                        })}
                        </div>
                    </div>
                    )}
                </PlacesAutocomplete>

                {touch && error && <FormikInputFeedback>{error}</FormikInputFeedback>}
            </div>
        }
      </React.Fragment>
    );
  }
}

export default FormikPlacesAutoComplete;