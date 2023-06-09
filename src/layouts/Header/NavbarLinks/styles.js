import styled from "styled-components";

export const Wrapper = styled.div`
  a {
    color: #586069;
    text-decoration: none;
  }

  a:hover {
    color: #572b8b;
  }

  ${({ desktop }) =>
    desktop
      ? `
			@media (max-width: 960px) {
				display: none;
			}

			a {
				margin-right: 1rem;

				&:last-child {
						margin-right: unset;
				}
			}
		`
      : `
			padding: 3rem;
			display: flex;
			flex-direction: column;

			a {
					margin-bottom: 1rem;

					&:last-child {
							margin-bottom: unset;
					}
			}
	`}
`;
