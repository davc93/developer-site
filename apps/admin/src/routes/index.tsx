import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Layout } from "@/Layout";
import { LoginPage } from "@/routes/login";
import { ProfilePage } from "@/routes/profile";

// import { ProjectsPage } from "@/routes/projects";
// import { CreateProjectPage } from "@/routes/project-create";
// import { EditProjectPage } from "@/routes/project-edit";
// import { LabelsPage } from "@/routes/labels";
// import { CreateLabelPage } from "@/routes/label-create";
// import { EditLabelPage } from "@/routes/label-edit";
// import { AuthRoute } from "@/components/AuthRoute";
// import { PublicRoute } from "@/components/PublicRoute";

export const PublicRoutes = () => {
  return (
    <Routes>
      <Route element={<LoginPage />} path="/login" />

    </Routes>
  );
};

 export const PrivateRoutes = () => {
   return (
     <Routes>
       <Route element={<ProfilePage />} path="/profile" />
       {/* <Route element={<ProjectsPage />} path="/projects" />
       <Route element={<CreateProjectPage />} path="/projects/create" />
       <Route element={<EditProjectPage />} path="/projects/edit/:id" />
       <Route element={<LabelsPage />} path="/labels" />
       <Route element={<CreateLabelPage />} path="/labels/create" />
       <Route element={<EditLabelPage />} path="/labels/edit/:id" /> */}
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
