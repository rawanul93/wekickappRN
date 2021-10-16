import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { Formik } from "formik";
import { TextInput } from "react-native-paper";

// redux
import { useSelector, useDispatch } from "react-redux";
import { userSignIn } from "../../../redux/userSlice";


// components
import { SafeArea } from "../../../components/utility/SafeArea";
import { Container } from "../../../components/containers/container.styles";
import {
  Background,
  ImageWrapper,
  Cover,
  Logo,
} from "../components/account.styles";
import { Spacer } from "../../../components/spacer/Spacer";
import { EmailInput, PasswordInput } from "../../../components/inputs/text-inputs.styles";
import { ButtonSecondary, ButtonPrimary } from "../../../components/buttons/buttons.styles";


// services
import { loginRequest } from "../../../services/authentication/authentication.service";

export const LogInScreen = ({ navigation }) => {
  const dispatch = useDispatch();

  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);

  const handleLogin = (values) => {
    loginRequest(values.email, values.password)
      .then((userObject) => {
        const user = {
          uid: userObject.user.uid,
          email: userObject.user.email,
          emailVerified: userObject.user.emailVerified,
          photoURL: userObject.user.photoURL
        };
        dispatch(userSignIn(user));
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <SafeArea>
      <Background>
        <ImageWrapper>
          <Cover />
          <Logo />
        </ImageWrapper>
        <Container>
          <Text style={styles.header}>
            <Text style={styles.header1}>One-Stop Soccer</Text> Management and
            Community Platform
          </Text>

          <Formik
            initialValues={{ email: "", password: "" }}
            onSubmit={(values) => handleLogin(values)}
          >
            {({
              handleChange,
              handleBlur,
              handleSubmit,
              values,
              errors,
            }) => (
              <>
                <View style={{ paddingLeft: 5, paddingRight: 5 }}>
                  <EmailInput
                    label= 'Email'
                    onChangeText={handleChange("email")}
                    onBlur={handleBlur("email")}
                    value={values.email}
                  />
                  <Spacer variant='top1'/>
                  <PasswordInput
                    label= 'Password'
                    onChangeText={handleChange("password")}
                    onBlur={handleBlur("password")}sds
                    value={values.password}
                    secureTextEntry
                    // right={<TextInput.Icon name='eye'/>}
                  />
                  {/* <Button onPress={handleSubmit} title="Submit" /> */}
                  <Spacer variant='top5' />
                  <Spacer variant='top3' />
                </View>
                <ButtonSecondary title='Login' onPress={handleSubmit}>
                  Login
                </ButtonSecondary>
                <Spacer variant='top2' />
                <ButtonPrimary
                  title='Sign Up'
                  onPress={() =>
                    navigation.navigate('Sign-up')
                  }
                >
                  Sign Up
                </ButtonPrimary>
              </>
            )}
          </Formik>
        </Container>
      </Background>
    </SafeArea>
  );
};

const styles = StyleSheet.create({
  header: {
    paddingLeft: 20,
    paddingRight: 20,
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
