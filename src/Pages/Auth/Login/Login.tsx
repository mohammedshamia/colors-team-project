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
} from './login.style'
import {RiLockPasswordFill} from'react-icons/ri'
import { schemaValidationLogin as validationSchema } from '../../../Helper/validation'
import { useFormik, Form, FormikProvider, FormikHelpers } from 'formik'
import LoginImage from '../../../Assets/Images/login.png'
import { Column, InnerColSection, InnerSection } from '../../../Components/Row'
import { InputController } from '../../../Components/Form'
import { AiOutlineMail } from 'react-icons/ai'
import { CheckBox } from '../../../Components/Form/CheckBox/CheckBox'
import { Divider } from '../../../Components/DeviderTitle/style'
import { useNavigate } from 'react-router-dom'
export interface IInitialValues {
  email: string;
  password: string;
  ischeckbox:boolean

}
const initialValues: IInitialValues = {
  email:'',
  password: '',
  ischeckbox:false
}

const Login = () => {
  const [checked, setChecked] = useState<boolean>(true)



  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked)
  }
  const  navigate=useNavigate()


  const formik = useFormik<IInitialValues>({
    initialValues,
    validationSchema,
    onSubmit: (values, e: FormikHelpers<IInitialValues>) => {
      console.log(values);
    }
  })
  return (
    <Column>
      <InnerColSection>
        <Wrapper>
          <LeftLogin>
            <Column>
              <LoginText>Login.</LoginText>
              <LoginSubText>
                Login with your data that you entered during registration
              </LoginSubText>
              <form onSubmit={(e) => {
                e.preventDefault()
                formik.handleSubmit()
                formik.resetForm()
              }}>
                <Column>
                <InputController name='email'
                  label='Enter your email address'
                  type="email"
                  placeholder="enter  email"
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
export default Login
