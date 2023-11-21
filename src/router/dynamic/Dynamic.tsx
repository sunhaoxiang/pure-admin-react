import LayoutApp from '@/layout/LayoutApp'
import type { RouteObject } from '@/types/router'

const DashboardRouter: RouteObject[] = [
  {
    path: '/dashboard',
    meta: {
      title: 'Dashboard',
      key: 'dashboard',
      icon: 'icon-park-outline:dashboard',
      index: 1
    },
    element: <LayoutApp />,
    children: [
      {
        path: 'index',
        element: <div>Dashboard</div>,
        meta: {
          title: 'Dashboard',
          icon: 'icon-park-outline:dashboard'
        }
      },
      {
        path: '/dashboard/upload',
        element: <div>Upload</div>,
        meta: {
          title: 'Upload',
          icon: 'upload'
        }
      }
    ]
  }
]

export default DashboardRouter
