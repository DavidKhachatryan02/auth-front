import { Form, Row } from "antd";

const DynamicForm = ({ onFinish, children }) => {
  return (
    <Row align="center">
      <Form name="normal_login" className="login-form" onFinish={onFinish}>
        {children}
      </Form>
    </Row>
  );
};

export default DynamicForm;
