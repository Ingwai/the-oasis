import styled from 'styled-components';
import { useUser } from '../features/authentication/useUser';
import Spinner from '../ui/Spinner';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const FullPage = styled.div`
	height: 100vh;
	background-color: var(--color-grey-50);
	display: flex;
	justify-content: center;
	align-items: center;
`;

function ProtectedRoute({ children }) {
	const navigate = useNavigate();
	// 1. Load the authenticated user
	const { isLoading, isAuthenticated } = useUser();

	// 2. Messeage if there is No auth user, indirect to the login page
	useEffect(() => {
		if (!isAuthenticated && !isLoading) navigate('/login');
	}, [isAuthenticated, isLoading, navigate]);

	// 3. While loading, show a spinner
	if (isLoading)
		return (
			<FullPage>
				<Spinner />;
			</FullPage>
		);

	// 4. Render app if there is a auth user
	if (isAuthenticated) return children;
}

export default ProtectedRoute;
