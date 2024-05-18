import {  } from "react-dom";
import { Formik, Form, Field } from 'formik';

export default function SearchBar({ onSearch }) {
    return (
        <Formik initialValues={{ search: "" }} onSubmit={(values, actions) => {
            onSearch(values.query);
            actions.resetForm();
        }}>
        <Form>
          <Field type="text" name="search" />
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    );
}