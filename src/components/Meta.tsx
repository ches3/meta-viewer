import { MetaItem } from "./MetaItem";

export const Meta = ({ className }: { className?: string }) => {
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");
	const [image, setImage] = useState("");
	const [favicon, setFavicon] = useState("");

	useEffect(() => {
		chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
			const tab = tabs[0];
			if (!tab.id) {
				return;
			}
			chrome.tabs.sendMessage<Message, GetMetaResponse>(
				tab.id,
				{ action: "getMeta" },
				(res) => {
					if (res.title) {
						setTitle(res.title);
					}
					if (res.description) {
						setDescription(res.description);
					}
					if (res.image) {
						setImage(res.image);
					}
					if (res.favicon) {
						setFavicon(res.favicon);
					}
				},
			);
		});
	}, [setTitle, setDescription, setImage, setFavicon]);

	return (
		<div className={className}>
			<MetaItem name="Title" value={title} />
			<MetaItem name="Description" value={description} className="mt-6" />
			<MetaItem name="Image" value={image} className="mt-6" />
			{image && <img src={image} alt="Meta" className="mt-4" />}
			<MetaItem name="Favicon" value={favicon} className="mt-6" />
			{favicon && <img src={favicon} alt="Favicon" className="w-16 mt-4" />}
		</div>
	);
};
