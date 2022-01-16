import { useState } from 'react'
import {
  LoginText,
  LoginSubText,
  RightLogin,
  ImageShape,
  Wrapper,
  WrapperRemmber,
  ForgotPassword,
  ButtonSuginup,
  Remmber,
  LeftLogin,
  ButtonLogin,
} from '../Login/login.style'
import {RiLockPasswordFill} from'react-icons/ri'
import { schemaValidationSignUp as validationSchema, schemaValidationSignUpType } from '../../../Helper/validation'
import { useFormik, Form,  FormikHelpers } from 'formik'
import LoginImage from '../../../Assets/Images/singup.png'
import { Column, InnerColSection, InnerSection } from '../../../Components/Row'
import { InputController } from '../../../Components/Form'
import { AiOutlineMail } from 'react-icons/ai'
import { CheckBox } from '../../../Components/Form/CheckBox/CheckBox'
import { Divider } from '../../../Components/DeviderTitle/style'
import { useNavigate } from 'react-router-dom'
import  {GrUserNew} from 'react-icons/gr'

const initialValues: schemaValidationSignUpType = {
  name:'',
  email:'',
  password: '',
  passwordConfirmation:''
}

const Signup = () => {

  const  navigate=useNavigate()


  const formik = useFormik<schemaValidationSignUpType>({
    initialValues,
    validationSchema,
    onSubmit: (values, e: FormikHelpers<schemaValidationSignUpType>) => {
      console.log(values);
    }
  })
  return (
    <Column>
      <InnerColSection>
        <Wrapper>
          <LeftLogin>
            <Column>
              <LoginText>Signup.</LoginText>
              <LoginSubText>
              Sign up and get exclusive offers from us
                </LoginSubText>
              <form onSubmit={(e) => {
                e.preventDefault()
                formik.handleSubmit()
                formik.resetForm()
              }}>
                <Column>
                <InputController name='name'
                  label='Name'
                  type="text"
                  placeholder="your  Name"
                  isRequired={true}
                  errors={formik.errors?.name}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  icon={<GrUserNew />}
                  value={formik.values.name} />

            </Column>
                <Column>
                <InputController name='email'
                  label='Enter your email address'
                  type="email"
                  placeholder="test@test.com"
                  isRequired={true}
                  errors={formik.errors?.email}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  icon={<AiOutlineMail />}
                  value={formik.values.email} />

            </Column>
                <Column>
                <InputController name='password'
                  label='Enter your password'
                  type="password"
                  placeholder="enter password"
                  isRequired={true}
                  errors={formik.errors?.password}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  icon={<RiLockPasswordFill />}
                  value={formik.values.password} />

            </Column>
                <Column>
                <InputController name='password'
                  label='Confirm your password'
                  type="password"
                  placeholder="enter password"
                  isRequired={true}
                  errors={formik.errors?.password}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  icon={<RiLockPasswordFill />}
                  value={formik.values.password} />

            </Column>
            <ButtonLogin disabled={!formik.isValid} type="submit">
              Login
            </ButtonLogin>
          <Column item="center">
            <WrapperRemmber>     
              <CheckBox label={'Remember me'}
              name="Remember me"             
              />
            </WrapperRemmber>
            <ForgotPassword>Forgot your password?</ForgotPassword>
            <Divider height={"2px"} width="100%" />
            <Column item="center">
            <ButtonSuginup onClick={() => navigate('/signup')}>Sign up now</ButtonSuginup>
            </Column>
          </Column>
          </form>
        </Column>
      </LeftLogin>
      <RightLogin>
        <ImageShape src={LoginImage} alt="image login continer" />
      </RightLogin>
    </Wrapper>
      </InnerColSection >
    </Column >
  )
}
export default Signup
