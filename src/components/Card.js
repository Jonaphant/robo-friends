import React from 'react';

const Card = ({name, email, id}) => {
  return (
	<div className="bg-light-blue dib grow br3 pa3 ma2 bw2 shadow-5">
		<img src={`https://robohash.org/${id}?set=set1&&size=200x200`} alt='robots' />
		<div>
			<h2>{name}</h2>
			<p>{email}</p>
		</div>
	</div>
  );
};

export default Card;