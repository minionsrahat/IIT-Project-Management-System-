import Squares2X2Icon from '@heroicons/react/24/outline/Squares2X2Icon'
const iconClasses = `h-6 w-6`
const routes = [
  [
    {
      path: '/app/teacher-info',
      icon: <Squares2X2Icon className={iconClasses}/>, 
      name: 'Teachers Management',
    },
    {
      path: '/app/create-committee',
      icon: <Squares2X2Icon className={iconClasses}/>, 
      name: 'Create Committee',
    },
    // {
    //   path: '/app/view-committee',
    //   icon: <Squares2X2Icon className={iconClasses}/>, 
    //   name: 'View Committee',
    // },
    {
      path: '/app/reset-teams',
      icon: <Squares2X2Icon className={iconClasses}/>, 
      name: ' Reset Teams',
    },
    {
      path: '/app/reset-supervisors',
      icon: <Squares2X2Icon className={iconClasses}/>, 
      name: ' Reset Supervisors',
    },
  ]
 , 
 
  [
  {
    path: '/app/create-teams',
    icon: <Squares2X2Icon className={iconClasses}/>, 
    name: 'Create Teams',
  },
  {
    path: '/app/view-teams',
    icon: <Squares2X2Icon className={iconClasses}/>, 
    name: 'View Teams',
  },
  {
    path: '/app/assign-supervisors',
    icon: <Squares2X2Icon className={iconClasses}/>, 
    name: 'Assign Supervisor',
  },
  {
    path: '/app/post',
    icon: <Squares2X2Icon className={iconClasses}/>, 
    name: 'Post',
  },
],
[
  {
    path: '/app/view-teams',
    icon: <Squares2X2Icon className={iconClasses}/>, 
    name: 'View Teams',
  },
  {
    path: '/app/view-assigned-teams',
    icon: <Squares2X2Icon className={iconClasses}/>, 
    name: 'View Assigned Teams',
  },
  {
    path: '/app/view-progress',
    icon: <Squares2X2Icon className={iconClasses}/>, 
    name: 'View Progress',
  },
  {
    path: '/app/team-posts',
    icon: <Squares2X2Icon className={iconClasses}/>, 
    name: 'Post',
  },
]
,[
  {
    path: '/app/view-teams',
    icon: <Squares2X2Icon className={iconClasses}/>, 
    name: 'View Teams',
  },
  {
    path: '/app/view-student-teams',
    icon: <Squares2X2Icon className={iconClasses}/>, 
    name: 'Your Teams',
  },
  {
    path: '/app/view-progress',
    icon: <Squares2X2Icon className={iconClasses}/>, 
    name: 'Your Progress',
  },
  {
    path: '/app/team-posts',
    icon: <Squares2X2Icon className={iconClasses}/>, 
    name: 'Supervisor Post',
  },
]
]

export default routes


