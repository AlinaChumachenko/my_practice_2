import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { Homepage } from '../pages/HomePage/Homepage';
import { UsersPage } from '../pages/UsersPage/UsersPage';
import { UserDetailsPage } from '../pages/UserDetailsPage/UserDetailsPage';
import { AddUserPage } from '../pages/AddUserPage/AddUserPage';
import { UpdateUserPage } from '../pages/UpdateUserPage/UpdateUserPage';
export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path="users" element={<UsersPage />} />
          <Route path="users/:id" element={<UserDetailsPage />} />
          <Route path="users/add" element={<AddUserPage />} />
          <Route path="users/:id/update" element={<UpdateUserPage />} />
        </Route>
      </Routes>
    </div>
  );
};
