import Link from 'next/link';
import Head from 'next/head';
import * as S from './header.styles';
import * as GS from '../../styles/global';
import { LINKS } from '../../data/links';
import { useRouter } from 'next/router';
import useWindowSize from '../../hooks/useWindowSize';
import { CgMenuRound, CgCloseO } from 'react-icons/cg';
import { useState, useEffect } from 'react';
import Menu from '../menu';
import Fade from 'react-reveal/Fade';
import { motion, AnimatePresence } from 'framer-motion';

const INITIAL_STATE = {
	width: undefined,
	height: undefined,
};

const Header = () => {
	const title = 'From the Ground Up';
	const router = useRouter();
	const size = useWindowSize(INITIAL_STATE);
	const [menu, setMenu] = useState(false);
	const [page, setPage] = useState(null);
	const [scroll, setScroll] = useState(null);
	const [invert, setInvert] = useState(false);
	const BACKGROUND_VALUE = 900;

	function toggleMenu() {
		setMenu((prevMenu) => !prevMenu);
	}

	useEffect(() => {
		const title = window.location.href
			.split('/')
			.pop()
			.replace('-', ' ')
			.replace(/\b\w/g, (l) => l.toUpperCase());
		setPage(title);
	}, []);

	useEffect(() => {
		size.width >= 700 && menu ? setMenu(false) : null;
	}, [size.width]);

	useEffect(() => {
		document.addEventListener('scroll', function () {
			setScroll(document.documentElement.scrollTop);
			scroll > BACKGROUND_VALUE ? setInvert(true) : setInvert(false);
		});
	}, [scroll]);

	useEffect(() => {
		document.documentElement.scrollTop > BACKGROUND_VALUE ? setInvert(true) : setInvert(false);
	}, []);

	return (
		<>
			<Head>
				<title>
					{title} {page && `- ${page}`}
				</title>
				<meta charSet="utf-8" />
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
				<meta
					name="description"
					content="From The Ground Up Academy is an online training platform for creative entrepreneurs looking to build a brand and impact the world."
				/>
				<link rel="preconnect" href="https://fonts.gstatic.com" />
				<link
					href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@400;700&display=swap"
					rel="stylesheet"
				/>
				å
			</Head>
			{menu && <Menu />}
			<S.Header>
				<S.NavContainer className={invert && 'invert'}>
					<GS.MaxContainer>
						<S.Navigation>
							<div>
								<Link href="/">
									<a>
										<img src={'/ftgu-logo.svg'} alt="Logo" className={`logo`} />
									</a>
								</Link>
							</div>
							<div>
								<ul>
									{size.width >= 700 ? (
										LINKS.map((link) => {
											return (
												<li key={link.title}>
													<Link href={link.link}>
														<a
															className={
																router.pathname === link.link
																	? 'active'
																	: undefined
															}
														>
															{link.title}
														</a>
													</Link>
												</li>
											);
										})
									) : (
										<motion.li
											variants={GS.fadeInTop}
											initial="initial"
											animate="animate"
										>
											{menu ? (
												<motion.span
													variants={GS.fadeInTop}
													initial="initial"
													animate="animate"
												>
													<CgCloseO className="menu" onClick={() => toggleMenu()} />
												</motion.span>
											) : (
												<AnimatePresence>
													<motion.span
														variants={GS.fadeInTop}
														initial="initial"
														animate="animate"
														exit="exit"
													>
														<CgMenuRound
															className="menu"
															onClick={() => toggleMenu()}
														/>
													</motion.span>
												</AnimatePresence>
											)}
										</motion.li>
									)}
								</ul>
							</div>
						</S.Navigation>
					</GS.MaxContainer>
				</S.NavContainer>
			</S.Header>
		</>
	);
};

export default Header;
