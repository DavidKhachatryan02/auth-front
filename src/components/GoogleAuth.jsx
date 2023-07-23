import { useNavigate } from 'react-router-dom';
import { Space, Typography } from 'antd';
import { GoogleLogin } from '@react-oauth/google';
import { useUser } from '../hooks/useUser';
import api from '../services/api';
import { ROOT_PATHS } from '../constants/paths';

const { Text } = Typography;

const GoogleAuth = () => {
  const navigate = useNavigate();
  const { login } = useUser();

  const onSuccess = async (credentialResponse) => {
    try {
      const { data } = await api.signInWithGoogle({
        token: credentialResponse.credential,
      });

      login(data);
      navigate(ROOT_PATHS.HOME)
    } catch(e) {
      console.log(e)
    }
  };

  const onError = (error) => {
    console.log(error);
  };

  return (
    <Space>
      <Text>Use Google</Text>
      <GoogleLogin
        cancel_on_tap_outside
        onSuccess={onSuccess}
        onError={onError}
      />
    </Space>
  );
};

export default GoogleAuth;
