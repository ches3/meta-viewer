type Message = {
	action: "getMeta";
};

type GetMetaResponse = {
	title: string | undefined;
	description: string | undefined;
	image: string | undefined;
	favicon: string | undefined;
};
