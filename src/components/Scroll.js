import React from 'react';


const Scroll=(props)=>{
	console.log(props);
	return(
		<div style={{overflowY:'scroll',border:0,height:'400px'}}>
		{props.children}
		</div>
		);
	};

export default Scroll