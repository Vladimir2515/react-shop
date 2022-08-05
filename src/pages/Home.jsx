import { useState, useEffect } from 'react';
import { getAllCategories } from '../api';
import { CategoryList } from '../components/CategoryList';
import { Search } from '../components/Search';


const Home = () => {
	const [catalog, setCatalog] = useState([]);
	const [filteredCatalog, setFilteredCatalog] = useState([]);


	const handleSearch = (str) => {
		setFilteredCatalog(
			catalog.filter(item => item.strCategory.toLowerCase().includes(str.toLowerCase()))
		);

	};

	useEffect(() => {
		getAllCategories().then(data => {
			setCatalog(data.categories);
			setFilteredCatalog(data.categories);
		})
	}, [])
	return (
		<>
			<Search cb={handleSearch} />
			{<CategoryList catalog={filteredCatalog} />}
		</>
	)
}

export { Home }