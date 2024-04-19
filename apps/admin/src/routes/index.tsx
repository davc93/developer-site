import { Route, Routes, BrowserRouter, useNavigate } from "react-router-dom";
import { Layout } from "@/Layout";
import { LoginPage } from "@/routes/login";
import { ProfilePage } from "@/routes/profile";
import { useContext, useEffect } from "react";
import { AuthContext } from "@/context/AuthContext";
import { DashboardPage } from "@/routes/dashboard";
import { ProjectsPage } from "@/routes/projects";

import { CreateProjectPage } from "@/routes/project-create";
import { EditProjectPage } from "@/routes/project-edit";
import { LabelsPage } from "@/routes/labels";
import { CreateLabelPage } from "@/routes/label-create";
import { EditLabelPage } from "@/routes/label-edit";
import { ContactPage } from "./contact";

export const PublicRoutes = () => {
  const { token } = useContext(AuthContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (token) {
      navigate("/dashboard");
    }
  }, []);
  return (
    <Routes>
      <Route element={<LoginPage />} path="/login" />
    </Routes>
  );
};

export const PrivateRoutes = () => {
  const { token } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, []);

  return (
    <Routes>
      <Route element={<DashboardPage />} path="/dashboard" />
      <Route element={<ProfilePage />} path="/profile" />
      <Route element={<ProjectsPage />} path="/projects" />
      <Route element={<CreateProjectPage />} path="/project/create" />
      <Route element={<EditProjectPage />} path="/project/edit/:id" />
      <Route element={<LabelsPage />} path="/labels" />
      <Route element={<CreateLabelPage />} path="/label/create" />
      <Route element={<EditLabelPage />} path="/label/edit/:id" /> */
      <Route element={<ContactPage />} path="/contact" /> */
    </Routes>
  );
};

export const Router = () => {
  return (
    <BrowserRouter>
      <Layout>
        <PrivateRoutes />
        <PublicRoutes />
      </Layout>
    </BrowserRouter>
  );
};
