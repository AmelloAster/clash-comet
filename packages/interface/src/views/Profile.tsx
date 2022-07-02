import type { FC } from 'react';
import { NavLink } from 'react-router-dom';

const ProfileFC: FC = () => {
	return (
		<div>
			ProfileFC <NavLink to="/views/dashboard">tp dashboard</NavLink>{' '}
		</div>
	);
};

export default ProfileFC;
