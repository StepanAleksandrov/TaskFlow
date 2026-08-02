import { Outlet } from 'react-router-dom';
import Header from '../../components/Header';
import Container from '../Container';

const MainLayout = () => {
  return (
    <>
      <Header />
      <main>
        <Container>
          <Outlet />
        </Container>
      </main>
    </>
  );
};

export default MainLayout;
