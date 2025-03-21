import { BrowserRouter, Routes, Route } from "react-router";
import HomePage from "./pages/home";
import WorkPage from "./pages/work";
import WorkIdPage from "./pages/work/id";
import WebLogPage from "./pages/weblog";
import WebLogIdPage from "./pages/weblog/id";
import Layout from "./layout";
import NonExistPage from "./pages/error";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <HomePage />
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
    </BrowserRouter>
  );
}

export default App;
