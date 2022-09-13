/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable @typescript-eslint/no-use-before-define */
import * as yup from 'yup';
import { useFormik } from 'formik';
import { toast } from 'react-toastify';
import { Button } from '../atoms/button';
import { Input } from '../atoms/input';
import { Form, FormGroup, InputContainer, InputRowGroup } from '../atoms/form';
import { H5 } from '../atoms/typography';

interface Props {
  // onSuccess: (data: any, values: any) => void;
  options: Array<any>;
}

export type SETUP_FORM = {
  storeName: string;
  addressLine1: string;
  addressLine2: string;
  email: string;
  phoneNumber: string;
  landlineNumber: string;
  currencySymbol: string;
  // username: string;
  password: string;
  passcode: string;
};

const initialValues: SETUP_FORM = {
  storeName: '',
  addressLine1: '',
  addressLine2: '',
  email: '',
  phoneNumber: '',
  landlineNumber: '',
  currencySymbol: '',
  // username: '',
  password: '',
  passcode: '',
};

export const SetupForm = ({ options }: Props) => {
  const formik = useFormik({
    initialValues,
    onSubmit: handleOnSubmit,
    validationSchema: yup.object({
      storeName: yup.string().required('This felid required'),
      addressLine1: yup.string().required('This felid required'),
      addressLine2: yup.string().required('This felid required'),
      phoneNumber: yup.string().required('This felid required'),
      landlineNumber: yup.string().required('This felid required'),
      currencySymbol: yup.string().required('This felid required'),
      // username: yup.string().required('This felid required'),
      password: yup.string().required('This felid required'),
      passcode: yup
        .string()
        .required('This felid required')
        .matches(/^[0-9]+$/, 'Only numbers allowed')
        .min(4, 'Should be 4 digit number')
        .max(4, 'Should be 4 digit number'),
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

  async function handleOnSubmit(values: SETUP_FORM, { setSubmitting }: any) {
    try {
      // const result = await mutateFunction({
      //   variables: values,
      // });
      // if (result?.data?.employeeLogin) {
      //   if (onSuccess) {
      //     onSuccess(result.data.employeeLogin, values);
      //   }
      // }
      toast.success('Logged in successfully');
      setSubmitting(false);
      resetForm();
    } catch (error: any) {
      console.error(error);
      toast.error(error.message);
      setSubmitting(false);
    }
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <InputRowGroup>
          <InputContainer
            id="storeName"
            label="Store Name"
            errorMessage={errors.storeName}
            touched={touched.storeName}
            flex={3}
          >
            <Input
              id="storeName"
              type="text"
              name="storeName"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.storeName}
            />
          </InputContainer>

          <InputContainer
            id="currencySymbol"
            label="Currency Symbol"
            errorMessage={errors.currencySymbol}
            touched={touched.currencySymbol}
            flex={2}
          >
            <Input
              id="currencySymbol"
              type="text"
              name="currencySymbol"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.currencySymbol}
            />
          </InputContainer>
        </InputRowGroup>
        <InputRowGroup>
          <InputContainer
            id="addressLine1"
            label="Address Line 1"
            errorMessage={errors.addressLine1}
            touched={touched.addressLine1}
          >
            <Input
              id="addressLine1"
              type="text"
              name="addressLine1"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.addressLine1}
            />
          </InputContainer>

          <InputContainer
            id="addressLine2"
            label="Address Line 2"
            errorMessage={errors.addressLine2}
            touched={touched.addressLine2}
          >
            <Input
              id="addressLine2"
              type="text"
              name="addressLine2"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.addressLine2}
            />
          </InputContainer>
        </InputRowGroup>

        <InputRowGroup>
          <InputContainer
            id="phoneNumber"
            label="Phone Number"
            errorMessage={errors.phoneNumber}
            touched={touched.phoneNumber}
          >
            <Input
              id="phoneNumber"
              type="text"
              name="phoneNumber"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.phoneNumber}
            />
          </InputContainer>

          <InputContainer
            id="landlineNumber"
            label="Landline Number"
            errorMessage={errors.landlineNumber}
            touched={touched.landlineNumber}
          >
            <Input
              id="landlineNumber"
              type="text"
              name="landlineNumber"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.landlineNumber}
            />
          </InputContainer>
        </InputRowGroup>
        <InputContainer id="username" label="Root user">
          <Input
            id="username"
            type="text"
            name="username"
            value="admin"
            disabled
          />
        </InputContainer>
        <InputRowGroup>
          <InputContainer
            id="password"
            label="Password"
            errorMessage={errors.password}
            touched={touched.password}
            flex={2}
          >
            <Input
              id="password"
              type="text"
              name="password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
            />
          </InputContainer>
          <InputContainer
            id="passcode"
            label="Lock pin"
            errorMessage={errors.passcode}
            touched={touched.passcode}
            flex={1}
          >
            <Input
              id="passcode"
              type="text"
              name="passcode"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.passcode}
            />
          </InputContainer>
        </InputRowGroup>
      </FormGroup>
      <Button mode="primary" type="submit" disabled={isSubmitting}>
        Initialize store
      </Button>
    </Form>
  );
};
