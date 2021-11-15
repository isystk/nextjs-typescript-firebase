import React from 'react';

export const SubmitButton = (props) => {
  const { formik } = props;
  return (
      <button type="submit" disabled={!formik.isValid}>
        Submit
      </button>
  );
}
