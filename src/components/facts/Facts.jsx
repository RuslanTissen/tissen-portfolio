import React from 'react'
import "./Facts.scss"

function Facts() {
	return (
		<div className='facts'>
			<div className="facts__containre">
				<h2>Three Fun Facts</h2>
				<div className="facts__containre__boxes">
					<h3>I used to be a freelancer.</h3>
					<p>After college, I worked on freelance projects for small businesses in my hometown.</p>
				</div>
				<div className="facts__containre__boxes">
					<h3>I run a creative blog on the side.</h3>
					<p>It features some of my freelance work as well as personal projects that I've done since high school.</p>
				</div>
				<div className="facts__containre__boxes">
					<h3>I love collecting art materials.</h3>
					<p>I do a lot of digital art, but I also love collecting crafty materials like washi tapes.</p>
				</div>
			</div>
		</div>
	)
}

export default Facts