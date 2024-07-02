import { createBrowserRouter } from "react-router-dom";
import Index from "./components/routes/Index";
import Login from "./components/routes/Login";
import SignUp from "./components/routes/SignUp";
import FindEmail from "./components/routes/FindEmail";
import Account from "./components/routes/Account";
import JobPostDetail from "./components/routes/JobPostDetail";
import UserMypage from "./components/routes/UserMypage";
import CompanyMypage from "./components/routes/CompanyMypage";
import CreateResume from "./components/routes/CreateResume";
import CreateJobPost from "./components/routes/CreateJobPost";
import ViewResume from "./components/routes/ViewResume";
import RecruitBoard from "./components/routes/RecruitBoard";
import ProtectedRoute from "./components/routes/ProtectedRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/sign-up",
    element: <SignUp />,
  },
  {
    path: "/find-email",
    element: <FindEmail />,
  },
  {
    path: "/account",
    element: (
      <ProtectedRoute>
        <Account />
      </ProtectedRoute>
    ),
  },
  {
    path: "/user-mypage",
    element: (
      <ProtectedRoute>
        <UserMypage />
      </ProtectedRoute>
    ),
  },
  {
    path: "/company-mypage",
    element: (
      <ProtectedRoute>
        <CompanyMypage />
      </ProtectedRoute>
    ),
  },
  {
    path: "/create-resume",
    element: (
      <ProtectedRoute>
        <CreateResume />
      </ProtectedRoute>
    ),
  },
  {
    path: "/view-resume/:userId",
    element: (
      <ProtectedRoute>
        <ViewResume />
      </ProtectedRoute>
    ),
  },
  {
    path: "/create-jobpost",
    element: (
      <ProtectedRoute>
        <CreateJobPost />
      </ProtectedRoute>
    ),
  },
  {
    path: "/recruit-board/:recruitId",
    element: (
      <ProtectedRoute>
        <RecruitBoard />
      </ProtectedRoute>
    ),
  },
  {
    path: "/jobpost-detail/:postId",
    element: <JobPostDetail />,
  },
]);

export default router;