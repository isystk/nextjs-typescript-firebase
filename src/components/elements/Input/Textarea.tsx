import { ErrorMessage, Field } from 'formik';

export const Textarea = (props) => {
  const { label, name, ...rest } = props;
  return (
      <div className="form-control">
        <label htmlFor={name}>{label}</label>
        <Field as="textarea" id={name} name={name} {...rest} />
        <ErrorMessage name={name} />
      </div>
  );
}
