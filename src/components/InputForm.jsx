import { Form, Input } from "antd";
import { MailOutlined, LockOutlined, UserOutlined } from '@ant-design/icons';

const ICON_MAP = {
  'mail-outlined': <MailOutlined className="site-form-item-icon" />,
  'lock-outlined': <LockOutlined className="site-form-item-icon" />,
  'user-outlined': <UserOutlined className="site-form-item-icon" />,
};

const FormItemInput = ({ label, name, rules, placeholder, icon,type }) => {
  return (
    <Form.Item name={name} rules={rules} label={label}>
      <Input prefix={ICON_MAP[icon]} placeholder={placeholder} type={type} />
    </Form.Item>
  );
};

export default FormItemInput;
