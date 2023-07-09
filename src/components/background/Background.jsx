import React from 'react'
import "./Background.scss"

function Background() {
  return (
	 <div className='background'>
		<div className="background__container">
			<h2>A Quick Background</h2>
			<div className="background__container__blocks">
				<h5>I'm based in</h5>
				<h3>Buenos Aires, Argentina</h3>
			</div>
			<div className="background__container__blocks">
				<h5>I worked at</h5>
				<h3>Hollis & Reed Unlimited, Tawlley and Mauro</h3>
			</div>
			<div className="background__container__blocks">
				<h5>My roles were</h5>
				<h3>Marketing assistant, Graphic Designer</h3>
			</div>
		</div>
	 </div>
  )
}

export default Background