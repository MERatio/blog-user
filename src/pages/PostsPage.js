import Posts from '../components/Posts';

function PostsPage() {
	return (
		<div className="container">
			<div className="row justify-content-center">
				<div className="col-md-8">
					<section>
						<Posts />
					</section>
				</div>
			</div>
		</div>
	);
}

export default PostsPage;
