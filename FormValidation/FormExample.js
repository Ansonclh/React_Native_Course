import React from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { CheckBox } from 'react-native-web';

// Define validation schema using Yup


const FormExample = () => {

  const validationSchema = Yup.object({
    name: Yup.string()
      .min(3, 'Name must be at least 3 characters')
      .required('Name is required'),
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required'),
    phone: Yup.string()
      .matches(/^\d{10}$/, 'Phone number must be exactly 10 digits')
      .required('Phone number is required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 characters')
      .required('Password is required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('Confirm Password is required'),
    terms: Yup.boolean()
      .oneOf([true], 'You must accept the terms and conditions')
      .required('You must accept the terms and conditions'),
  });

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.title} testID='formTitle'>Registration Form</Text>
      <Formik
        initialValues={{
          name: '',
          email: '',
          phone: '',
          password: '',
          confirmPassword: '',
          terms: false,
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log(values);
          }}>
          {({ handleChange, handleBlur, handleSubmit, setFieldValue, setFieldTouched, values, errors, touched }) =>  //handleChange: input field change, handleblur: validate field when input field loss focus, 
            (<ScrollView contentContainerStyle={styles.container}>
                <View testID="formName">
                  <Text style={styles.label}>Name</Text>
                  <TextInput style={styles.input} onChangeText={handleChange('name')} onBlur={handleBlur('name')} value={values.name}/>
                  {touched.name && errors.name && <Text style={styles.error}>{errors.name}</Text>}  {/* Touched.name is boolean value when the field has been visited, errors.name is the validation error message */}
                </View>
                <View testID='formEmail'>
                  <Text style={styles.label}>Email</Text>
                  <TextInput
                    style={styles.input}
                    onChangeText={handleChange('email')}
                    onBlur={handleBlur('email')}
                    value={values.email}
                  />
                  {touched.email && errors.email && <Text style={styles.error}>{errors.email}</Text>}

                </View>
                <View testID='formPhone'>
                  <Text style={styles.label}>Phone</Text>
                    <TextInput
                      style={styles.input}
                      keyboardType="numeric"
                      onChangeText={handleChange('phone')}
                      onBlur={handleBlur('phone')}
                      value={values.phone}
                    />
                    {touched.phone && errors.phone && <Text style={styles.error}>{errors.phone}</Text>}

                </View>

                <View testID='formPassword'>
                  <Text style={styles.label}>Password</Text>
                    <TextInput
                      style={styles.input}
                      secureTextEntry
                      onChangeText={handleChange('password')}
                      onBlur={handleBlur('password')}
                      value={values.password}
                    />
                    {touched.password && errors.password && <Text style={styles.error}>{errors.password}</Text>}

                </View>

                <View testID='formConfirmPassword'>
                  <Text style={styles.label}>Confirm Password</Text>
                  <TextInput
                    style={styles.input}
                    secureTextEntry
                    onChangeText={handleChange('confirmPassword')}
                    onBlur={handleBlur('confirmPassword')}
                    value={values.confirmPassword}
                  />
                  {touched.confirmPassword && errors.confirmPassword && (
                    <Text style={styles.error}>{errors.confirmPassword}</Text>
                  )}
                </View>
                
                <View testID="formTerms">
                  <CheckBox 
                    value={values.terms}
                    onChange={(event) => setFieldValue('terms', event.target.checked)}
                    onBlur={() => setFieldTouched('terms', true)}
                    />
                  <Text style={styles.label}>I agree to the terms and conditions</Text>
                  {touched.terms && errors.terms && <Text style={styles.error}>{errors.terms}</Text>}


                </View>

                <Button onPress={handleSubmit} title="Submit" testID="submitButton" color="#007BFF"/>
              
              </ScrollView>)
          }
      </Formik>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginVertical: 20,
  },
  container: {
    paddingVertical: 10,
  },
  label: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 12,
    marginBottom: 15,
    borderRadius: 8,
    backgroundColor: '#fff',
  },
  error: {
    color: '#d9534f',
    fontSize: 14,
    marginBottom: 10,
  },
});

export default FormExample;
