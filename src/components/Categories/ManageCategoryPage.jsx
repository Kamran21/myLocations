import React, { Component } from "react";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { actions as categoryActions } from "../../duckes/categories";
import { getElementByID } from "../../utils";
import toastr from "toastr";
import { Formik, Form, Field } from 'formik'
import { object, string } from 'yup';
import isEmpty from 'lodash/isEmpty'
import FormikTextInput from "../common/FormikTextInput";
import FormikReactDatePicker from "../common/FormikReactDatePicker";
import moment from 'moment';

class ManageCategoryPage extends Component {
 
  categoryExists = (category) => {
    return (
      this.props.categories.filter(c => c.name === category.name).length > 0
    );
  }

  //Render
  render() {
    return (
      <Formik

          validationSchema={object().shape({
            name: string()
              .required('Name is required.'),
            date: string()
              .required('Date is required.').nullable()
          })}

          initialValues={
              {...this.props.category}
          }

          onSubmit={(values, formikBag) => {
            values.date = moment(values.date).format();
            const category = {...this.props.category, ...values};
            if (this.categoryExists(category)) {
              // this.setState({ errors: { name: "This category allready exist!" } });
              formikBag.setSubmitting(false);
              formikBag.setErrors({'name':'This category allready exists'});
            } else {
              const { createCategory, updateCategory } = this.props.actions;
              if(category.id===''){
                createCategory(category);
                toastr.success("category was added");
              } else {
                updateCategory(category);
                toastr.success("category was updated");
              }
              this.props.history.push("/categories");
            }
          }}

          render={({errors, dirty, isSubmitting, values, setFieldValue}) => (
            <Form>
              <h3 className="my-5 text-capitalize">Manage Location</h3>
              {/* <input type="hidden" value="prayer" /> */}
              <Field
                type="text"
                name="name"
                label="Name"
                component={FormikTextInput}

              />
              <Field
                
                name="date"
                type="text"
                component={FormikReactDatePicker}
                label="Date"
                dateFormat="YYYY-MM-DD HH:mm"
                timeFormat="HH:mm"
                showTimeSelect
                style={{"zIndex": "999"}}
                
              />
              <div className="form-group"><button
                type="submit"
                className="btn btn-default"
                // style={{"zIndex": "-999"}}
                disabled={isSubmitting || !isEmpty(errors) || !dirty}
              >
                Save
              </button>
              </div>
              
            </Form>
          )}

        />
    );
  }
}

//Prop Types validation
ManageCategoryPage.propTypes = {
  category: PropTypes.object.isRequired,
  locations: PropTypes.array.isRequired,
  categories: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

//Redux connect
const mapStateToProps = ({ locations, categories }, ownProps) => {
  let category = { id: "", name: "", date:"" };
  return {
    category: getElementByID(categories, ownProps.match.params.id) || category,
    locations: locations,
    categories: categories
  };
};

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(categoryActions, dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ManageCategoryPage);
