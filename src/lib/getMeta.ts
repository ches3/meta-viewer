export const getMeta = () => {
	const getTitle = () => {
		const ogTitle = document
			.querySelector('meta[property="og:title"]')
			?.getAttribute("content");
		if (ogTitle) {
			return ogTitle;
		}

		const title = document.querySelector("title")?.textContent;
		if (title) {
			return title;
		}
	};

	const getDescription = () => {
		const ogDescription = document
			.querySelector('meta[property="og:description"]')
			?.getAttribute("content");
		if (ogDescription) {
			return ogDescription;
		}

		const description = document
			.querySelector('meta[name="description"]')
			?.getAttribute("content");
		if (description) {
			return description;
		}
	};

	const getImage = () => {
		const ogImage = document
			.querySelector('meta[property="og:image"]')
			?.getAttribute("content");
		if (ogImage) {
			return ogImage;
		}
	};

	const getFavicon = () => {
		const favicon = document
			.querySelector('link[rel="icon"]')
			?.getAttribute("href");
		if (favicon) {
			const url = new URL(favicon, `${location.protocol}//${location.host}`);
			return url.href;
		}
	};

	const title = getTitle();
	const description = getDescription();
	const image = getImage();
	const favicon = getFavicon();

	return { title, description, image, favicon };
};
