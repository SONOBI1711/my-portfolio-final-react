import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignInPage from "./pages/SignIn";

// layout
import Header from "./components/Header";

// pages
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Work from "./components/Work";
import Testimonials from "./components/Testimonials";
import ContactMe from "./components/ContactMe";
import Footer from "./components/Footer";

import BlogList from "./pages/BlogList";
import BlogDetail from "./pages/BlogDetail";
import BlogEditor from "./pages/BlogEditor";

import ProtectedRoute from "./components/ProtectedRoute";

// HOME
function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Work />
      <Testimonials />
      <ContactMe />
      <Footer />
    </>
  );
}

// LAYOUT
function MainLayout({ children }: any) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* PROTECTED HOME */}
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <MainLayout>
                <Home />
              </MainLayout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/blog"
          element={
            <ProtectedRoute>
              <MainLayout>
                <BlogList />
              </MainLayout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/blog/:id"
          element={
            <ProtectedRoute>
              <MainLayout>
                <BlogDetail />
              </MainLayout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/editor"
          element={
            <ProtectedRoute>
              <MainLayout>
                <BlogEditor />
              </MainLayout>
            </ProtectedRoute>
          }
        />

        {/* PUBLIC */}
        <Route path="/signin" element={<SignInPage />} />
      </Routes>
    </BrowserRouter>
  );
}
