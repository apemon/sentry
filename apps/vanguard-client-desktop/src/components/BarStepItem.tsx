import {PropsWithChildren} from "react";
import * as classNames from "classnames";

interface BarStepItemProps extends PropsWithChildren {
	lastItem?: boolean;
}

export function BarStepItem({children, lastItem}: BarStepItemProps) {
	return (
		<div className="flex">
			<div className="w-6 flex justify-end flex flex-row flex-wrap">
				<div
					className={classNames("w-[2px] bg-[#D4D4D4]", {
						"h-full": !lastItem,
						"h-[35px]": lastItem,
					})}
				/>

				<div className="h-[2px] bg-[#D4D4D4] w-1/2 mt-[33px]"/>
			</div>

			<div className="flex-1 mt-3">
				{children}
			</div>
		</div>
	);
}
