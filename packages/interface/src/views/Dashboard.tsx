import type { FC } from 'react';
import { NavLink } from 'react-router-dom';

const DashboardFC: FC = () => {
	return (
		<div>
			DashboardFC
			<NavLink to="/views/profile">tp profile</NavLink>
		</div>
	);
};

export default DashboardFC;
