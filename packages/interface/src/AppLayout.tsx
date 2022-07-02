import type { FC } from 'react';
import { Outlet } from 'react-router-dom';

const AppLayoutFC: FC = () => {
	return (
		<div className="cc-layout">
			<div className="sider">SIder1111</div>
			<div className="main">
				<Outlet />
			</div>
		</div>
	);
};

export default AppLayoutFC;
