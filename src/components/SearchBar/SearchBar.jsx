import toast,{Toaster} from "react-hot-toast";
import { Formik, Form, Field } from 'formik';
import css from "./SearchBar.module.css"

export default function SearchBar({ onSearch }) {
    return (
      <Formik
        initialValues={{ search: "" }}
        onSubmit={(values, actions) => {
          if (!values.search.trim()) {
            toast.error("empty query", {
              duration: 2500,
              style: { color: "red" },
            });
            return
          }
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
          <Toaster/>
        </Form>
      </Formik>
    );
}