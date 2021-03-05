import PropTypes from 'prop-types';
import Card from './Card';

function Cards({ items }) {
	const cards = items.map((item) => (
		<div key={item._id}>
			<Card item={item} />
		</div>
	));

	return <section>{cards}</section>;
}

Cards.propTypes = {
	items: PropTypes.array.isRequired,
};

export default Cards;
