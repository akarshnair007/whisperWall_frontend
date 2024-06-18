import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./Pages/HomePage";
import Auth from "./Pages/Auth";
import Message from "./Pages/Message";
import MessageForm from "./Pages/MessageForm";
import ProtectedRoute from "./Components/ProtectedRoute";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Auth />} />
        <Route path="/register" element={<Auth register />} />
        <Route
          path="/messageForm"
          element={<ProtectedRoute element={MessageForm} />}
        />
        <Route
          path="/messagesPage"
          element={<ProtectedRoute element={Message} />}
        />
      </Routes>
    </>
  );
}

export default App;
