import Login from "./Pages/Account/Login";
import Register from "./Pages/Account/Register";
import Home from "./Pages/Home/index";
import NotesPage from "./Pages/Notes";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserContext } from "./Context/UserContext";
import { FuntionHandleContext } from "./Context/Functions/HandleFunctios";
import { NotesContext } from "./Context/NotesContext";
import PrivateRoute from "./auth/PrivateRoute";

function App() {
  return (
    <>
      <UserContext>
        <FuntionHandleContext>
          <NotesContext>
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route exact path="/notes/:author" element={<PrivateRoute />}>
                  <Route exact path="/notes/:author" element={<NotesPage />} />
                </Route>
              </Routes>
            </BrowserRouter>
          </NotesContext>
        </FuntionHandleContext>
      </UserContext>
    </>
  );
}

export default App;
