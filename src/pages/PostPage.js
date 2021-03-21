import PropTypes from 'prop-types';
import Post from '../components/Post';

function PostPage({ user }) {
	return (
		<div className="container">
			<div className="row justify-content-center">
				<div className="col-md-8">
					<Post user={user} />
				</div>
			</div>
		</div>
	);
}

PostPage.propTypes = {
	user: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]).isRequired,
};

export default PostPage;