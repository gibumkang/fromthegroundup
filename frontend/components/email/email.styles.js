import styled from 'styled-components';
import * as GS from '../../styles/global';
import { motion } from 'framer-motion';

export const HeroBackground = styled(GS.FullWidth)`
	background: url('/ftgu-academy.jpg') no-repeat center center;
	background-size: cover;
	width: 100vw;
	height: 100vh;
	position: relative;
	@media screen and (max-width: ${(props) => props.theme.smWidth}) {
		z-index: 0;
	}
`;

export const Message = styled.div`
	max-width: 70rem;
	text-align: center;
	margin: 0 auto;
	position: absolute;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
	h1 {
		color: #fff;
	}
	@media screen and (max-width: ${(props) => props.theme.smWidth}) {
		top: 10%;
		transform: translate(-50%, 0%);
	}
`;

export const Form = styled.div`
	width: 100%;
	position: absolute;
	bottom: 0;
	left: 0;
	text-align: center;
	background: rgba(0, 0, 0, 0.5);
	p {
		color: #fff;
		margin-bottom: 4rem;
	}
	@media screen and (max-width: ${(props) => props.theme.smWidth}) {
		background: none;
	}
`;

export const FormContainer = styled.div`
	display: flex;
	gap: 1rem;
	.name {
		flex: 1;
	}
	.email {
		flex: 1.25;
	}
	.submit-button {
		flex: 1;
	}
	& > div {
		input {
			box-sizing: border-box;
			padding: 0.75rem;
			margin-right: 1rem;
			width: 100%;
		}
		.submit-button {
			background: ${(props) => props.theme.colors.primary};
			padding: 1.15rem 3rem;
			font-weight: bold;
			color: #fff;
			width: 100%;
			border: 0;
			font-family: ${(props) => props.theme.fonts.header};
			&:hover {
				cursor: pointer;
			}
		}
	}
	@media screen and (max-width: ${(props) => props.theme.smWidth}) {
		display: block;
		& > div {
			input {
				margin: 0.5rem 0rem 1.5rem 0rem;
			}
		}
	}
`;
