import React from "react";
import {
  View,
  StyleSheet,
  Text,
  KeyboardAvoidingView,
  ScrollView
} from "react-native";
import { Formik } from "formik";

// components
import { SafeArea } from "../../../components/utility/SafeArea";
import {
  Background,
  ImageWrapper,
  Cover,
  Logo
} from "../components/account.styles";
import {
  EmailInput,
  PasswordInput,
  NameInput,
  InputWrapper,
  NameInputSmall
} from "../../../components/inputs/text-inputs.styles";
import { Spacer } from "../../../components/spacer/Spacer";
import { ButtonPrimary } from "../../../components/buttons/buttons.styles";
import { Container } from "../../../components/containers/container.styles";

import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

export const SignUpScreen = () => {
  return (
    <SafeArea>
      <Background>
        <ImageWrapper>
          <Cover />
          <Logo />
        </ImageWrapper>

        <Container>
          <Text style={styles.header}>
            Please enter your general information to create a
            <Text style={styles.header1}> Wekick </Text>
            account
          </Text>

          <Spacer variant='bottom1' />

          <KeyboardAwareScrollView
            style={{ flex: 1 }}
            showsVerticalScrollIndicator={false}
          >
            <Formik
              initialValues={{
                firstName: "",
                middleName: "",
                lastName: "",
                email: "",
                password: "",
                confirmPassword: ""
              }}
              onSubmit={(values) => console.log(values)}
            >
              {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
                <>
                  <View style={{ paddingLeft: 5, paddingRight: 5 }}>
                    <InputWrapper>
                      <NameInputSmall
                        label='First Name*'
                        onChangeText={handleChange("firstName")}
                        onBlur={handleBlur("firstName")}
                        value={values.firstName}
                      />

                      <NameInputSmall
                        label='Middle Name'
                        onChangeText={handleChange("middleName")}
                        onBlur={handleBlur("middleName")}
                        value={values.middleName}
                      />
                    </InputWrapper>

                    <Spacer variant='top1' />

                    <NameInput
                      label='Last Name*'
                      onChangeText={handleChange("lastName")}
                      onBlur={handleBlur("lastName")}
                      value={values.lastName}
                    />

                    <Spacer variant='top1' />

                    <EmailInput
                      label='Email*'
                      onChangeText={handleChange("email")}
                      onBlur={handleBlur("email")}
                      value={values.email}
                    />

                    <Spacer variant='top1' />

                    <PasswordInput
                      label='Password*'
                      onChangeText={handleChange("password")}
                      onBlur={handleBlur("password")}
                      value={values.password}
                      secureTextEntry
                      // right={<TextInput.Icon name='eye'/>}
                    />

                    <Spacer variant='top1' />

                    <PasswordInput
                      label='Confirm Password*'
                      onChangeText={handleChange("confirmPassword")}
                      onBlur={handleBlur("confirmPassword")}
                      sds
                      value={values.password}
                      secureTextEntry
                      // right={<TextInput.Icon name='eye'/>}
                    />
                    {/* <Button onPress={handleSubmit} title="Submit" /> */}
                    <Spacer variant='top5' />
                    <Spacer variant='top3' />
                  </View>
                </>
              )}
            </Formik>
          </KeyboardAwareScrollView>
          <ButtonPrimary
            title='Sign Up'
            onPress={() => navigation.navigate("Sign-up")}
          >
            Sign Up
          </ButtonPrimary>
          <Spacer variant='bottom3' />
        </Container>
      </Background>
    </SafeArea>
  );
};

const styles = StyleSheet.create({
  header: {
    paddingLeft: 8,
    paddingRight: 8,
    paddingTop: 20,
    marginBottom: 20,
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold"
  },
  header1: {
    color: "#00A355"
  }
});
