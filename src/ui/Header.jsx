import { styled } from 'styled-components';

const StyledHeader = styled.header`
	height: 10rem;
	background-color: var(--color-grey-0);

	padding: 1.2rem 4.8rem;
	border-bottom: 1px solid var(--color-grey-100);
`;

export default function Header() {
	return (
		<StyledHeader>
			<nav>Header</nav>
		</StyledHeader>
	);
}
