import UserProfile from './components/common/UserProfile';
import DonorDashboard from './components/donor/DonorDashboard';
import DonorHistory from './components/donor/DonorHistory';
import DonorLandingPage from './components/donor/DonorLandingPage';
import DonorProfile from './components/donor/DonorProfile';

export const titles = {
	'/': 'Donor Dashboard',
	'/donorhistory': 'Donor History',
	'/donorprofile': 'Donor Profile',
};

export const routes = [
	{
		path: '/',
		element: <DonorLandingPage />,
		children: [
			{ index: true, element: <DonorDashboard /> },
			{ path: 'donorhistory', element: <DonorHistory /> },
			{ path: 'donorprofile', element: <UserProfile /> },
		],
	},
];
