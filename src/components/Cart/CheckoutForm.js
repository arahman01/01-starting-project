import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import styles from "./CheckoutForm.module.css"; // Import CSS module styles

const CheckoutForm = () => {
  return (
    <div className={styles.main}>
      <h2 className={styles.heading}>Checkout</h2>
      <div className={styles.formContainer}>
        <Formik
          initialValues={{
            name: "",
            email: "",
            phoneNumber: "",
            address: "",
            city: "",
            zip: "",
            cardNumber: "",
          }}
          validate={(values) => {
            const errors = {};
            // Name Validation
            if (!values.name) {
              errors.name = "Required";
            }
            // Email Validation
            if (!values.email) {
              errors.email = "Required";
            } else if (!/^\S+@\S+\.\S+$/.test(values.email)) {
              errors.email = "Invalid email address";
            }
            // Phone Number Validation
            if (!values.phoneNumber) {
              errors.phoneNumber = "Required";
            }
            // Address Validation
            if (!values.address) {
              errors.address = "Required";
            }
            // City Validation
            if (!values.city) {
              errors.city = "Required";
            }
            // ZIP Code Validation
            if (!values.zip) {
              errors.zip = "Required";
            } else if (!/^\d{5}(?:[-\s]\d{4})?$/.test(values.zip)) {
              errors.zip = "Invalid ZIP Code";
            }
            // Credit Card Number Validation
            if (!values.cardNumber) {
              errors.cardNumber = "Required";
            } else if (!/^\d{16}$/.test(values.cardNumber)) {
              errors.cardNumber = "Invalid credit card number";
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            // Do nothing on submit
            setSubmitting(false);
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <div className={styles.formGroup}>
                <label htmlFor="name">Name</label>
                <Field type="text" name="name" className={styles.formControl} />
                <ErrorMessage
                  name="name"
                  component="div"
                  className={styles.errorMessage}
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="email">Email</label>
                <Field
                  type="email"
                  name="email"
                  className={styles.formControl}
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className={styles.errorMessage}
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="phoneNumber">Phone Number</label>
                <Field
                  type="tel"
                  name="phoneNumber"
                  className={styles.formControl}
                />
                <ErrorMessage
                  name="phoneNumber"
                  component="div"
                  className={styles.errorMessage}
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="address">Address</label>
                <Field
                  type="text"
                  name="address"
                  className={styles.formControl}
                />
                <ErrorMessage
                  name="address"
                  component="div"
                  className={styles.errorMessage}
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="city">City</label>
                <Field type="text" name="city" className={styles.formControl} />
                <ErrorMessage
                  name="city"
                  component="div"
                  className={styles.errorMessage}
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="zip">ZIP Code</label>
                <Field type="text" name="zip" className={styles.formControl} />
                <ErrorMessage
                  name="zip"
                  component="div"
                  className={styles.errorMessage}
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="cardNumber">Credit Card Number</label>
                <Field
                  type="text"
                  name="cardNumber"
                  className={styles.formControl}
                />
                <ErrorMessage
                  name="cardNumber"
                  component="div"
                  className={styles.errorMessage}
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className={styles.submitButton}
              >
                Submit
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default CheckoutForm;
