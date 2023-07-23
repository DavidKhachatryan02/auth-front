import { useNavigate } from "react-router-dom"
import { Typography, Button, Space, Row, Col } from "antd";
import { ROOT_PATHS } from '../constants/paths';

const WelcomePage= () => {
const navigate = useNavigate();

const redirect = (path) => {
  navigate(path)
};

  return (
    <Col align="center">
      <Row align="center">
        <Typography.Paragraph>Welcome to our Website!</Typography.Paragraph>
      </Row>
      <Space>
        <Button onClick={() => redirect(ROOT_PATHS.LOGIN)}>Login</Button>
        <Button onClick={() => redirect(ROOT_PATHS.REGISTER)}>Register</Button>
      </Space>
    </Col>
  )
}

export default WelcomePage