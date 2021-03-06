import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import format from 'date-fns/format';

function Card({ item }) {
	return (
		<div className="card">
			<div className="card-body">
				<h5 className="card-title">{item.title}</h5>
				<p className="card-subtitle mb-2 text-muted">
					{item.author.firstName + ' ' + item.author.lastName}
				</p>
				<p className="card-subtitle mb-2 text-muted">
					{format(new Date(item.createdAt), 'PPpp')}
				</p>
				<p className="card-text">{item.body}</p>
				<Link to={`/posts/${item._id}`} className="card-link">
					{item.commentsCount} comments
				</Link>
			</div>
		</div>
	);
}

Card.propTypes = {
	item: PropTypes.object.isRequired,
};

export default Card;
