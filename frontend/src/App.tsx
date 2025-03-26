import { BrowserRouter, Routes, Route } from "react-router";
import Login from "./pages/login";
import Feed from "./pages/feed";
import Record from "./pages/record";
import Profile from "./pages/profile";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Login />}></Route>
        <Route path="feed" element={<Feed />}></Route>
        <Route path="record" element={<Record />}></Route>
        <Route path="profile" element={<Profile />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
