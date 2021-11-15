import { ErrorMessage, Field } from 'formik';

export const Input = (props) => {
  const { label, name, ...rest } = props;
  return (
      <div className="form-control">
        <label htmlFor={name}>{label}</label>
        <Field id={name} name={name} {...rest} />
        <ErrorMessage name={name} />
      </div>
  );
}
