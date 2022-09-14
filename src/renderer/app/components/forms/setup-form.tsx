import * as yup from 'yup';
import { Country, State, City } from 'country-state-city';
import { useFormik } from 'formik';
import { useMemo } from 'react';
import { Button } from '../atoms/button';
import { Input } from '../atoms/input';
import { Select } from '../atoms/select';
import { Form, FormGroup, InputContainer, InputRowGroup } from '../atoms/form';
import { H6 } from '../atoms/typography';
import { SelectAutoComplete } from '../atoms/autocomplete';
import { getCountries, getStates, getCities } from '../../utils/form-helper';

interface Props {
  // onSuccess: (data: any, values: any) => void;
  options: Array<any>;
}

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];

export type SETUP_FORM = {
  storeName: string;
  address: string;
  city: string;
  state: string;
  stateCode: string;
  country: string;
  countryCode: string;
  zip: string;
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
  address: '',
  city: '',
  state: '',
  stateCode: '',
  country: '',
  countryCode: '',
  zip: '',
  email: '',
  phoneNumber: '',
  landlineNumber: '',
  currencySymbol: '',
  // username: '',
  password: '',
  passcode: '',
};

export const SetupForm = () => {
  const formik = useFormik({
    initialValues,
    onSubmit: handleOnSubmit,
    validationSchema: yup.object({
      storeName: yup.string().required('This felid required'),
      address: yup.string().required('This felid required'),
      city: yup.string().required('This felid required'),
      state: yup.string().required('This felid required'),
      country: yup.string().required('This felid required'),
      zip: yup.string().required('This felid required'),
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
    setFieldValue,
  } = formik;

  const states = useMemo(
    () => getStates(values.countryCode),
    [values.countryCode]
  );
  const cities = useMemo(
    () => getCities(values.countryCode, values.stateCode),
    [values.countryCode, values.stateCode]
  );

  async function handleOnSubmit(inputs: SETUP_FORM, { setSubmitting }: any) {
    // try {
    //   // const result = await mutateFunction({
    //   //   variables: values,
    //   // });
    //   // if (result?.data?.employeeLogin) {
    //   //   if (onSuccess) {
    //   //     onSuccess(result.data.employeeLogin, values);
    //   //   }
    //   // }
    //   toast.success('Logged in successfully');
    //   setSubmitting(false);
    //   resetForm();
    // } catch (error: any) {
    //   console.error(error);
    //   toast.error(error.message);
    //   setSubmitting(false);
    // }
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <H6 borderBottom color="secondary">
          Store Details
        </H6>
        <InputRowGroup>
          <InputContainer
            id="storeName"
            label="Name"
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
              placeholder="Enter store name"
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
              placeholder="eg: $,₹..."
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.currencySymbol}
            />
          </InputContainer>
        </InputRowGroup>

        <InputContainer
          id="address"
          label="Address"
          errorMessage={errors.address}
          touched={touched.address}
        >
          <Input
            id="address"
            type="text"
            name="address"
            placeholder="Enter store address"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.address}
          />
        </InputContainer>

        <InputRowGroup>
          <InputContainer
            id="country"
            label="Country"
            errorMessage={errors.country}
            touched
          >
            <SelectAutoComplete
              id="country"
              name="country"
              placeholder="Select country"
              value={values.country}
              onChange={(selected, value) => {
                if (selected.length > 0) {
                  setFieldValue('countryCode', selected[0].value);
                  setFieldValue('country', selected[0].label);
                } else {
                  setFieldValue('countryCode', '');
                  setFieldValue('country', value || '');
                }
                setFieldValue('stateCode', '');
                setFieldValue('state', value);
              }}
              options={getCountries()}
            />
          </InputContainer>
          <InputContainer
            id="state"
            label="State"
            errorMessage={errors.state}
            touched={touched.state}
          >
            <SelectAutoComplete
              id="state"
              name="state"
              placeholder="Select state"
              value={values.stateCode}
              onChange={(selected, value) => {
                if (selected.length > 0) {
                  setFieldValue('stateCode', selected[0].value);
                  setFieldValue('state', selected[0].label);
                } else {
                  setFieldValue('state', value || '');
                  setFieldValue('stateCode', '');
                }
                setFieldValue('city', '');
              }}
              options={getStates(values.countryCode)}
            />
          </InputContainer>
        </InputRowGroup>

        <InputRowGroup>
          <InputContainer
            id="city"
            label="City"
            errorMessage={errors.city}
            touched={touched.city}
          >
            <SelectAutoComplete
              id="city"
              name="city"
              placeholder="Select city"
              value={values.city}
              onChange={(_, value) => {
                setFieldValue('city', value);
              }}
              options={cities}
            />
          </InputContainer>
          <InputContainer
            id="zip"
            label="Pin/Zip code"
            errorMessage={errors.zip}
            touched={touched.zip}
          >
            <Input
              id="zip"
              type="text"
              name="zip"
              placeholder="Enter store zip/pincode"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.zip}
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
              placeholder="Enter store mobile number"
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
              placeholder="Enter store landline number"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.landlineNumber}
            />
          </InputContainer>
        </InputRowGroup>

        <H6 borderBottom color="secondary">
          Admin Details
        </H6>
        <InputContainer id="username" label="Username" disabled>
          <Input
            id="username"
            type="text"
            placeholder="Enter root username"
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
              placeholder="Enter strong 8 digit password"
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
              placeholder="Enter 4 digit pin"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.passcode}
            />
          </InputContainer>
        </InputRowGroup>
      </FormGroup>
      <InputRowGroup noBottomMargin align="center">
        <Button type="submit" disabled={isSubmitting}>
          Submit
        </Button>
      </InputRowGroup>
    </Form>
  );
};
