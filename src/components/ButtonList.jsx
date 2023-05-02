export const ButtonList = ({ categories, filterCategory }) => {
	return (
		<div className='categories'>
			{categories.map(category => (
				<button
					type='button'
					className='btn'
					onClick={() => filterCategory(category)}
					key={category}
				>
					{category}
				</button>
			))}
		</div>
	);
};
