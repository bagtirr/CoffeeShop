const sortProducts = (items, best, country, searchText) => {
	if (best) {
		return items.filter(item => item.best === "true");
	}

	const sortByCountry = (items, country) => {
		if (!country) {
			return items;
		}

		return items.filter(item => item.country === country);
	};

	const sortBySearchValue = (items, searchText) => {
		if (!searchText) {
			return items;
		}

		searchText = searchText.toLowerCase().trim();

		return items.filter(item => item.name.toLowerCase().includes(searchText));
	};

	return sortByCountry(sortBySearchValue(items, searchText), country);
};

export default sortProducts;
