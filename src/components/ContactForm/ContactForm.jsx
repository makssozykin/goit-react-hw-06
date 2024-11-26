import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';
import css from './ContactForm.module.css';

const FeedbackSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Name is required'),
  number: Yup.string()
    .min(3, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Number is required'),
});

const initialValues = {
  name: '',
  number: '',
};

export const ContactForm = ({ onAddContact }) => {
  const nameId = nanoid();
  const numberId = nanoid();

  const handleSubmit = (values, actions) => {
    onAddContact({ id: nanoid(), ...values });
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}
    >
      <Form className={css.form}>
        <label htmlFor={nameId} className={css.label}>
          <span>Name</span>
        </label>
        <Field
          id={nameId}
          className={css.input}
          type="text"
          name="name"
          placeholder="Введіть ім'я"
        />
        <ErrorMessage className={css.error} name="name" component="span" />
        <label htmlFor={numberId} className={css.label}>
          <span>Number</span>
        </label>
        <Field
          id={numberId}
          className={css.input}
          type="text"
          name="number"
          placeholder="Введіть телефон"
        />
        <ErrorMessage className={css.error} name="number" component="span" />
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
};
