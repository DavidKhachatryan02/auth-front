import { Row } from "antd";
import { useUser } from "../../hooks/useUser";
import UserInfo from "../../components/UserInfo";
import WelcomePage from "../../components/WelcomePage";

const Home = () => {
   const { user, loaded } = useUser();

   if (!loaded) return null;

   if (!user) {
    return (
      <WelcomePage />
    ) 
   };

    return (
      <Row justify="center" align="middle">
        <UserInfo userData={user} />
      </Row>
    );
};

export default Home;
