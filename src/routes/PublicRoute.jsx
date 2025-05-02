import Home from "../pages/HomePage.jsx";
import About from "../pages/AboutPage.jsx";
import BlogPage from "../pages/BlogsPage.jsx";
import BlogPost from "../pages/BlogPost.jsx";
import Contact from "../pages/ContactPage.jsx";

import FeaturedJobs from "../pages/FeaturedJob.jsx";
import JobDescription from "../pages/JobDescription.jsx";

import SignIn from "../pages/SignIn.jsx";
import SignUp from "../pages/SignUp.jsx";
import ForgotPassword from "../pages/ForgotPassword.jsx";
import ResetPassword from "../pages/ResetPassword.jsx";

import UploadCV from "../pages/UploadCV.jsx";
import CreateCV from "../pages/CreateCV.jsx";
import AllJobs from "../pages/AllJobs.jsx";
import PostJob from "../pages/PostJob.jsx";

const PublicRoutes = [
  // General
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "/about",
    element: <About/>
  },
  {
    path: "/contact",
    element: <Contact/>
  },

  // Blog
  {
    path: "/blogs",
    element: <BlogPage/>
  },
  {
    path: "/blog-post",
    element: <BlogPost/>
  },

  // Jobs
  {
    path: "/jobs",
    element: <AllJobs/>
  },
  {
    path: "/post-job",
    element: <PostJob/>
  },
  {
    path: "/job/:id",
    element: <JobDescription/>
  },
  {
    path: "/featured-jobs",
    element: <FeaturedJobs/>
  },

  // Auth
  {
    path: "/sign-in",
    element: <SignIn/>
  },
  {
    path: "/sign-up",
    element: <SignUp/>
  },
  {
    path: "/forgot-password",
    element: <ForgotPassword/>
  },
  {
    path: "/reset-password",
    element: <ResetPassword/>
  },

  // CV Tools
  {
    path: "/upload-cv",
    element: <UploadCV/>
  },
  {
    path: "/create-cv",
    element: <CreateCV/>
  },
];

export default PublicRoutes;