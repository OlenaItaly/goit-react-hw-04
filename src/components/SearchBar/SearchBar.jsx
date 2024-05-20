import {  } from "react-dom";
import { Formik, Form, Field } from 'formik';
import css from "./SearchBar.module.css"

export default function SearchBar({ onSearch }) {
    return (
      <Formik
        initialValues={{ search: "" }}
        onSubmit={(values, actions) => {
          onSearch(values.search);
          actions.resetForm();
        }}
      >
        <Form className={css.form}>
          <Field
            className={css.input}
            type="text"
            name="search"
            placeholder="🔎 Search images and photos"
          />
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    );
}