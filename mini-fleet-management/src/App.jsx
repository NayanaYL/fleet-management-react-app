import {BrowserRouter,Routes,Route,Navigate} from "react-router-dom"
import Login from "./pages/Login";
import AdminDashboard from "./pages/AdminDashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import { useState } from "react";
function App(){
  const [isAuth,setIsAuth]=useState(false)
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/login" element={<Login setIsAuth={setIsAuth}/>}/>
      <Route path="/admin"
      element={
        <ProtectedRoute isAuth={isAuth}>
          <AdminDashboard/>
        </ProtectedRoute>
      }
      />
      <Route path="*"element={<Navigate to="/login" />} />
    </Routes>

    </BrowserRouter>
  );
}
export default App;