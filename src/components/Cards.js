import PropTypes from 'prop-types';
import Card from './Card';

function Cards({ items }) {
	const cards = items.map((item) => <Card key={item._id} item={item} />);

	return <section>{cards}</section>;
}

Cards.propTypes = {
	items: PropTypes.array.isRequired,
};

export default Cards;
