// All components mapping with path for internal routes

import { lazy } from 'react'

const Dashboard = lazy(() => import('../pages/protected/Dashboard'))
const Welcome = lazy(() => import('../pages/protected/Welcome'))
const CreateTeam = lazy(() => import('../pages/protected/CreateTeamPage'))
const UploadFile = lazy(() => import('../pages/protected/UploadExcelFilePage'))
const ViewTeam = lazy(() => import('../pages/protected/ViewTeamPage'))
const AssignSupervisor = lazy(() => import('../pages/protected/AssignSupervisorPage'))
const Teacher = lazy(() => import('../pages/protected/TeacherPage'))
const CreateCommittee = lazy(() => import('../pages/protected/CreateCommitteePage'))
const AddCommitteeMember = lazy(() => import('../pages/protected/CreateCommitteeMemberPage'))
const ResetTeamPage = lazy(() => import('../pages/protected/ResetTeamPage'))
const ResetSupervisorPage = lazy(() => import('../pages/protected/ResetSupervisorPage'))
const AssignedTeams = lazy(() => import('../pages/protected/AssignedTeamsPage'))
const StudentAssignedTeams= lazy(() => import('../pages/protected/StudentAssignedTeamPage'))

const routes = [
  {
    path: '/dashboard', // the url
    component: Dashboard, // view rendered
  },
  {
    path: '/welcome', // the url
    component: Welcome, // view rendered
  },
  {
    path: '/teacher-info',
    component: Teacher,
  },
  {
    path: '/create-teams',
    component: CreateTeam,
  },
  {
    path: 'create-teams/:room_id',
    component: UploadFile,
  },
  {
    path: '/view-teams',
    component: ViewTeam,
  },

  {
    path: '/assign-supervisors',
    component: AssignSupervisor,
  },
  {
    path: '/create-committee',
    component: CreateCommittee,
  },
  {
    path: 'create-committee/:room_id',
    component: AddCommitteeMember,
  },

  {
    path: '/reset-teams',
    component: ResetTeamPage,
  },

  {
    path: '/reset-supervisors',
    component: ResetSupervisorPage,
  },

  {
    path: '/view-assigned-teams',
    component: AssignedTeams,
  },

  {
    path: '/view-student-teams',
    component: StudentAssignedTeams,
  },
]

export default routes
