import { getMeta } from "@/lib/getMeta";
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
			const id = tab.id;

			(async () => {
				const result = await chrome.scripting.executeScript({
					target: { tabId: id },
					func: getMeta,
				});
				if (result.length === 0 || !result[0].result) {
					return;
				}
				const { title, description, image, favicon } = result[0].result;
				if (title) {
					setTitle(title);
				}
				if (description) {
					setDescription(description);
				}
				if (image) {
					setImage(image);
				}
				if (favicon) {
					setFavicon(favicon);
				}
			})();
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
