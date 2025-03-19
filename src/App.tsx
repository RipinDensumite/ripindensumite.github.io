import { BrowserRouter, Routes, Route } from "react-router";
import HomePage from "./pages/home";
import WorkPage from "./pages/work";
import BlogPage from "./pages/blog";
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
          path="/blog"
          element={
            <Layout>
              <BlogPage />
            </Layout>
          }
        />
        <Route path="*" element={<NonExistPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
