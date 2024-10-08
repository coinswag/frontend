import React from "react";
import "./style.css";

interface LoaderProps {
	style: React.CSSProperties | undefined;
}

const LinearLoader: React.FC<LoaderProps> = (props: LoaderProps) => {
	return (
		<div
			className='linear-progress small'
			style={props.style}>
			<div className='bar bar1'></div>
			<div className='bar bar2'></div>
		</div>
	);
};

export default LinearLoader;
