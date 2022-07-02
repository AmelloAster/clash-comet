import loadable from '@loadable/component';
import type { RouteObject } from 'react-router-dom';
import { Navigate, useRoutes } from 'react-router-dom';

import AppLayout from './AppLayout';
import DashboardFC from './views/Dashboard';

const ProfileFC = loadable(() => import('./views/Profile'));

const appRoutes: RouteObject[] = [
	{
		path: 'views',
		element: <AppLayout />,
		children: [
			{
				path: 'dashboard',
				element: <DashboardFC />
			},
			{
				path: 'profile',
				element: <ProfileFC />
			}
		]
	},
	{
		path: '/',
		element: <Navigate to="/views/dashboard" />
	}
];

export const AppRouter = () => {
	return useRoutes(appRoutes);
};
