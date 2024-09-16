import { Textarea } from "@/components/ui/textarea";

export const MetaItem = ({
	name,
	value,
	className,
}: {
	name: string;
	value: string;
	className?: string;
}) => {
	return (
		<div className={className}>
			<p className="font-medium text-sm">{name}</p>
			<div className="flex justify-between gap-2">
				<Textarea
					value={value}
					readOnly
					className="mt-2 h-fit min-h-[1lh] focus-visible:ring-0 resize-none"
					onFocus={(e) => {
						if (!e.currentTarget || e.currentTarget.value === "") {
							return;
						}
						e.currentTarget.select();
					}}
				/>
			</div>
		</div>
	);
};
