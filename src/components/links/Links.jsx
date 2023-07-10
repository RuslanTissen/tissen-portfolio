import React from 'react'
import "./Links.scss"
import img1 from "../../images/Screenshot-outsourcing.png"
import img2 from "../../images/Screenshot-N2.png"
import img3 from "../../images/Screenshot-N3.png"
import img4 from "../../images/Screenshot-N4.png"
import img5 from "../../images/Screenshot-N5.png"
import img6 from "../../images/Screenshot-N6.png"

function Links() {
	return (
		<div className='links'>
			<div className='links__container'>
				<h2>Here's a showcase of my <mark>creative work</mark> </h2>
				<div className="links__container__links">
					<a href='https://test3.tissenstudio.com/' target='blank' className="links__container__links-img"><img src={img1} alt="" /></a>
					<a href='https://test5.tissenstudio.com/' target='blank' className="links__container__links-img"><img src={img2} alt="" /></a>
					<a href='https://test4.tissenstudio.com/' target='blank' className="links__container__links-img"><img src={img3} alt="" /></a>
					<a href='https://tissenstudio.com/' target='blank' className="links__container__links-img"><img src={img4} alt="" /></a>
					<a href='https://gregorio-world.tissenstudio.com/' target='blank' className="links__container__links-img"><img src={img5} alt="" /></a>
					<a href='https://liya-world.tissenstudio.com/' target='blank' className="links__container__links-img"><img src={img6} alt="" /></a>
				</div>
			</div>
		</div>
	)
}

export default Links