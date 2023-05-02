import { useState } from 'react';
import './App.css';
import { ArticleList, ButtonList } from './components';
import data from './data/data';

function App() {
	const allCategories = [
		'',
		...new Set(data.map(article => article.category)),
	];

	const [categories, setCategories] = useState(allCategories);
	const [articles, setArticles] = useState(data);

	const filterCategory = (category) => {
		if (category === 'All'){
			setArticles(data)
			return
		}

		const filteredData = data.filter(article => article.category === category);
		setArticles(filteredData)
	}

	return (
		<>
			<div className='title'>
				<h1>
					Mi <span> Blog De</span>  Trabajos
				</h1>
				<img
					src='https://img.freepik.com/vector-gratis/hacker-que-opera-ilustracion-icono-historieta-ordenador-portatil-concepto-icono-tecnologia-aislado-estilo-dibujos-animados-plana_138676-2387.jpg?w=2000'
					alt='imagen-header'
				/>
				<h3>
					Kevin <span> Josué Xu</span>lú Solis
				</h3>
			</div>

			<ButtonList categories={categories} filterCategory={filterCategory}/>

			<ArticleList articles={articles}/>
		</>
	);
}

export default App;
