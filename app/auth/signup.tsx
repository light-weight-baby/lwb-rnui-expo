import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, View,Button, TextInput, Text } from 'react-native';
import { Formik } from 'formik';
import React from 'react';

export default function SignupScreen() {
  return (
    <View style={{justifyContent:'center', alignItems:'center', height:'100%'}}>
           <Formik
     initialValues={{ email: '', password:'' }}
     onSubmit={values => console.log(values)}
   >
     {({ handleChange, handleBlur, handleSubmit, values }:any) => (
       <View>
        <View>
            <Text>
                Email:
            </Text>
         <TextInput
            style={{backgroundColor:'gray', width:150, height:25}}
           onChangeText={handleChange('email')}
           onBlur={handleBlur('email')}
           value={values.email}
         />
         
       </View>
        <View>
            <Text>
                Password:
            </Text>
            <TextInput
                style={{backgroundColor:'gray', width:150, height:25}}
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
            />
               
        </View>
       <Button onPress={handleSubmit} title="Submit" />
       </View>
     )}
   </Formik>
        <StatusBar hidden={true} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
