import { Navigate, Route, Routes } from 'react-router-dom';
import { Calendar, Login } from '../pages/index';

export default function AppRouter() {
  return (
    <Routes>
      <Route path="*" element={<Navigate to="/" />} />
      <Route path="/" element={<Calendar />} />
      <Route path="login" element={<Login />} />
    </Routes>
  );
}
