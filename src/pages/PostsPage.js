import Posts from '../components/Posts';

function PostsPage() {
	return (
		<div className="h-100 container">
			<div className="h-100 row justify-content-center">
				<div className="col-md-8 position-relative">
					<Posts />
				</div>
			</div>
		</div>
	);
}

export default PostsPage;
