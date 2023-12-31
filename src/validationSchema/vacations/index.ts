import * as yup from 'yup';

export const vacationValidationSchema = yup.object().shape({
  start_date: yup.date().required(),
  end_date: yup.date().required(),
  days_taken: yup.number().integer().required(),
  vacation_type: yup.string().required(),
  employee_id: yup.string().nullable().required(),
});
