import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { Homepage } from '../pages/HomePage/Homepage';
import { UsersPage } from '../pages/UsersPage/UsersPage';
import { UserDetailsPage } from '../pages/UserDetailsPage/UserDetailsPage';
export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path="users" element={<UsersPage />} />
          <Route path="users/:id" element={<UserDetailsPage />} />
        </Route>
      </Routes>
    </div>
  );
};
