import { defineConfig } from "wxt";

// See https://wxt.dev/api/config.html
export default defineConfig({
	modules: ["@wxt-dev/module-react"],
	srcDir: "src",
	manifest: {
		name: "Meta Viewer",
		version: "1.1.2",
		description: "View meta information of the current page.",
		permissions: ["activeTab", "scripting"],
	},
});
