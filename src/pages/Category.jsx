import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getFilteredCategory } from '../api';

import { MealList } from '../components/MealList';

const Category = () => {
	const { name } = useParams();
	const [meals, setMeals] = useState([]);

	useEffect(() => {
		getFilteredCategory(name).then(data => setMeals(data.meals));
	}, [name]);

	return (<MealList meals={meals} />);
}

export { Category }