import React, { Component } from "react";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { actions as locationActions } from "../../duckes/locations";
import { getElementByID } from "../../utils";
import toastr from "toastr";
import { Formik, Form, Field } from 'formik'
import { object, string, array } from 'yup';
import isEmpty from 'lodash/isEmpty'
import FormikTextInput from "../common/FormikTextInput";
import FormikSelectInput from "../common/FormikSelectInput";

class ManageLocationPage extends Component {

  // setLocationCategory = (categories, val) => {
  //   return { id: filter(categories, "name", val)[0].id, name: val };
  // }

  // setLocationCategories = (categories,cats) => {
  //   return cats.map(val=>{return { id: filter(categories, "name", val.value)[0].id, name: val.value }});
  // }

  //Render
  render() {
    const categoriesForSelect =this.props.categories.map(c => {
      return { id: c.id, name: c.name, label: c.name, value: c.name };
    });
    let categories = this.props.location.categories.map(c => {
      return { id: c.id, name: c.name, label: c.name, value: c.name };
    })
    return (
      
      <Formik

          validationSchema={object().shape({
            name: string()
              .min(3, 'Name must be at least 3 characters long.')
              .required('Name is required.'),
            address: string()
              .min(3, 'Address must be at least 3 characters long.')
              .required('Address is required.'),
            coordinates: string()
              .required('Coordinates is required.'),
            'categories': array()
              .required('At least one category is required.')
          })}

          initialValues={
              {...this.props.location, category:''}
          }

          onSubmit={(values, actions) => {
            const { createLocation, updateLocation } = this.props.actions;
            const location = {...this.props.location, ...values};
            // location.category = this.setLocationCategory(this.props.categories, values.category.value);
            // location.categories = this.setLocationCategories(this.props.categories, values.categories);
            
            if(location.id===''){
              createLocation(location);
              toastr.success("location was added");
            } else {
              updateLocation(location);
              toastr.success("location was updated");
            }
            this.props.history.push("/locations");
          }}

          render={({errors, dirty, isSubmitting, values, setFieldValue}) => (
            <Form>
              <h3 className="my-5 text-capitalize">Manage Location</h3>
              <Field
                type="text"
                name="name"
                label="Name"
                component={FormikTextInput}
              />
              <Field
                type="text"
                name="address"
                label="Address"
                component={FormikTextInput}
              />
              <Field
                type="text"
                name="coordinates"
                label="Coordinates"
                component={FormikTextInput}
              />
              <Field
                name="categories"
                label="Categories"
                // value={this.props.location.category.name}
                value={categories}
                // value={values.category}
                options={categoriesForSelect}
                component={FormikSelectInput}
                multi={true}
              />
              <button
                type="submit"
                className="btn btn-default"
                disabled={isSubmitting || !isEmpty(errors) || !dirty}
              >
                Save
              </button>
            </Form>
          )}

        />
    );
  }
}

//Prop Types validation
ManageLocationPage.propTypes = {
  location: PropTypes.object.isRequired,
  categories: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

//Redux connect
const mapStateToProps = ({ locations, categories }, ownProps) => {
  let location = {
    id: "",
    name: "",
    address: "",
    coordinates: "",
    categories: []
  };
  return {
    location: getElementByID(locations, ownProps.match.params.id) || location,
    categories: categories
  };
};

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(locationActions, dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ManageLocationPage);
