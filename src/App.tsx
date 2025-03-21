import { Routes, Route, HashRouter } from "react-router";
import ProfilePage from "./pages/profile";
import WorkPage from "./pages/work";
import WorkIdPage from "./pages/work/id";
import WebLogPage from "./pages/weblog";
import WebLogIdPage from "./pages/weblog/id";
import Layout from "./layout";
import NonExistPage from "./pages/error";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <ProfilePage />
            </Layout>
          }
        />
        <Route
          path="/work"
          element={
            <Layout>
              <WorkPage />
            </Layout>
          }
        />
        <Route
          path="/work/:id"
          element={
            <Layout>
              <WorkIdPage />
            </Layout>
          }
        />
        <Route
          path="/weblog"
          element={
            <Layout>
              <WebLogPage />
            </Layout>
          }
        />
        <Route
          path="/weblog/:id"
          element={
            <Layout>
              <WebLogIdPage />
            </Layout>
          }
        />
        <Route path="*" element={<NonExistPage />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
