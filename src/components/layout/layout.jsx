import { Navigation } from 'components/navigation/navigation';
import { Outlet } from 'react-router-dom';
import { Header } from './layout.styled';
import { Suspense } from 'react';
import { Loader } from 'components/loader/loader';
export const Layout = () => {
  return (
    <>
      <Header>
        <Navigation />
      </Header>
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};
