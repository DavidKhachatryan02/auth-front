import { Link, useNavigate } from "react-router-dom";
import { Form, Button } from "antd";
import { useUser } from "../../hooks/useUser";
import LoginForm from "../../components/LoginForm";
import InputForm from "../../components/InputForm";
import GoogleAuth from "../../components/GoogleAuth";
import fields from "./fields";
import { ROOT_PATHS } from '../../constants/paths';
import api from '../../services/api';
import { toast } from "react-toastify";

const LoginPage = () => {
  const navigate = useNavigate();
  const { login } = useUser();

  const onFinish = async (values) => {
    try {
      const { data } = await api.login(values);

      login(data);
      navigate(ROOT_PATHS.HOME)
    } catch(e) {
      console.log(e)
      toast.error(e.response?.data?.message || e.message);
    }  
  };

  return (
    <LoginForm onFinish={onFinish}>
      {fields.map((field) => (
         <InputForm key={field.name} {...field}       />
      ))}
      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Login
        </Button>
        Or <Link to="/register">Register Now!</Link>
      </Form.Item>
      <GoogleAuth />
    </LoginForm>
  );
};

export default LoginPage;
