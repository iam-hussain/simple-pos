import * as yup from 'yup';
import { useFormik } from 'formik';
import { Button } from '../atoms/button';
import { Input } from '../atoms/input';
import { Form, FormGroup, InputContainer } from '../atoms/form';
import { Select } from '../atoms/select';

type Values = {
  title: string;
  price: number;
  categoryId: string;
};

const AddProduct = ({ categories = [], onSuccess }: any) => {
  // const [mutateFunction] = useMutation(MUTATION);

  const initialValues: Values = {
    title: '',
    price: 0,
    categoryId: '',
  };

  const formik = useFormik({
    initialValues,
    onSubmit: handleOnSubmit,
    validationSchema: yup.object({
      title: yup
        .string()
        .min(2, 'Menu title must be at least 2 characters')
        .required('Menu title is required'),
      price: yup.number().min(1).required('Amount is required'),
      categoryId: yup.string().required('Category is required'),
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
    try {
      // const result = await mutateFunction({ variables: values });
      // toast.success(`Product "${values.title}" has been created`);
      // if (onSuccess) {
      //   onSuccess(result.data.addProduct, values);
      // }
      // setSubmitting(false);
      // resetForm();
      // return result;
    } catch (error: any) {
      console.error(error);
      // toast.error(error.message);
      setSubmitting(false);
    }
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
            placeholder="Enter product title"
            type="text"
            name="title"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.title}
          />
        </InputContainer>
        <InputContainer
          id="price"
          label="Price"
          errorMessage={errors.price}
          touched={touched.price}
        >
          <Input
            placeholder="Enter price for each item"
            type="number"
            name="price"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.price}
          />
        </InputContainer>
        <InputContainer
          id="categoryId"
          label="Category"
          errorMessage={errors.categoryId}
          touched={touched.categoryId}
        >
          <Select
            name="categoryId"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.categoryId}
          >
            {categories.map((each: any) => (
              <option key={each.id} value={each.id} label={each.title}>
                {each.title}
              </option>
            ))}
          </Select>
        </InputContainer>
      </FormGroup>

      <Button type="submit" disabled={isSubmitting}>
        Add
      </Button>
    </Form>
  );
};

export default AddProduct;
