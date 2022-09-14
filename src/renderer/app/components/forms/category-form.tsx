import * as yup from 'yup';
import { useFormik } from 'formik';
import { Button } from '../atoms/button';
import { Input } from '../atoms/input';
import { Form, FormGroup, InputContainer } from '../atoms/form';

type Values = {
  title: string;
};

const CategoryForm = ({ onSuccess }: any) => {
  const initialValues: Values = {
    title: '',
  };

  const formik = useFormik({
    initialValues,
    onSubmit: handleOnSubmit,
    validationSchema: yup.object({
      title: yup
        .string()
        .min(2, 'Category title must be at least 2 characters')
        .required('Category title is required'),
    }),
  });

  const {
    isSubmitting,
    handleSubmit,
    handleChange,
    handleBlur,
    values,
    errors,
    touched,
    resetForm,
  } = formik;

  async function handleOnSubmit(inputs: Values, { setSubmitting }: any) {
    console.log({ inputs });
    // try {
    //   const result = await mutateFunction({ variables: values });
    //   toast.success(`Category "${values.title}" has been created`);
    //   if (onSuccess) {
    //     onSuccess(result.data.addCategory, values);
    //   }
    //   setSubmitting(false);
    //   resetForm();
    //   return result;
    // } catch (error: any) {
    //   console.error(error);
    //   toast.error(error.message);
    //   setSubmitting(false);
    // }
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <InputContainer
          id="title"
          label="Title"
          errorMessage={errors.title}
          touched={touched.title}
        >
          <Input
            placeholder="Enter the category name"
            type="text"
            name="title"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.title}
            autoComplete="title"
          />
        </InputContainer>
      </FormGroup>

      <Button type="submit" disabled={isSubmitting}>
        Add
      </Button>
    </Form>
  );
};

export default CategoryForm;
