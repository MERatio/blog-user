import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import format from 'date-fns/format';

function Card({ item }) {
	return (
		<div className="card mb-2">
			<div className="card-header">
				<h5 className="card-title">{item.title}</h5>
				<p className="card-subtitle mb-2">
					{item.author.firstName + ' ' + item.author.lastName}
				</p>
				<p className="card-subtitle">
					{format(new Date(item.createdAt), 'PPpp')}
				</p>
			</div>
			<div className="card-body">
				<p className="card-text">{item.body}</p>
				<Link to={`/posts/${item._id}`} className="card-link">
					{item.comments.length} comments
				</Link>
			</div>
		</div>
	);
}

Card.propTypes = {
	item: PropTypes.object.isRequired,
};

export default Card;
