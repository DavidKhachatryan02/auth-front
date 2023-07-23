import { Card, Button } from "antd";
import { useUser } from '../hooks/useUser';

const UserInfo = ({ userData }) => {
  const { logout } = useUser();

  return (
    <Card
    title="User Info"
    bordered={false}
    style={{
      width: 300,
    }}
  >
    <p>{userData.email}</p>
    <p>{userData.userName}</p>
    <Button onClick={logout} danger>Log out</Button>
  </Card>

  );
};

export default UserInfo;