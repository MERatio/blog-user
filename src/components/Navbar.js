import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

function Navbar({ user, signOut }) {
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-primary sticky-top mb-4">
			<NavLink to="/" className="navbar-brand">
				Blog User
			</NavLink>
			<button
				className="navbar-toggler"
				type="button"
				data-toggle="collapse"
				data-target="#navbarSupportedContent"
				aria-controls="navbarSupportedContent"
				aria-expanded="false"
				aria-label="Toggle navigation"
			>
				<span className="navbar-toggler-icon"></span>
			</button>
			<div className="collapse navbar-collapse" id="navbarSupportedContent">
				<ul className="navbar-nav ml-auto">
					<li className="nav-item">
						<NavLink
							exact
							to="/posts"
							className="nav-link"
							activeClassName="active"
						>
							Posts
						</NavLink>
					</li>
					{user ? (
						<li className="nav-item dropdown">
							<button
								className="nav-link btn btn-link dropdown-toggle"
								id="navbarDropdown"
								data-toggle="dropdown"
								aria-haspopup="true"
								aria-expanded="false"
							>
								{user.username}
							</button>
							<div className="dropdown-menu dropdown-menu-right">
								<button
									className="dropdown-item"
									type="button"
									onClick={signOut}
								>
									Sign out
								</button>
							</div>
						</li>
					) : (
						<>
							<li className="nav-item">
								<NavLink
									exact
									to="/sign-up"
									className="nav-link"
									activeClassName="active"
								>
									Sign Up
								</NavLink>
							</li>
							<li className="nav-item">
								<NavLink
									exact
									to="/sign-in"
									className="nav-link"
									activeClassName="active"
								>
									Sign In
								</NavLink>
							</li>
						</>
					)}
				</ul>
			</div>
		</nav>
	);
}

Navbar.propTypes = {
	user: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]).isRequired,
	signOut: PropTypes.func.isRequired,
};

export default Navbar;
