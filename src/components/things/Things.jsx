import React from 'react'
import "./Things.scss"
import img1 from "../../images/thin-1.jpg"
import img2 from "../../images/thin-2.jpg"
import img3 from "../../images/thin-3.jpg"
import img4 from "../../images/thin-4.jpg"

function Things() {
	return (
		<div className='things'>
			<div className="things__container">
				<div className="things__container__textBox">
					<h2>Things I Like</h2>
					<p>These are just some of the things that make me feel alive!</p>
				</div>
				<div className="things__container__imgBox">
					<div className='things__container__imgBox__imgCont'><img src={img1} alt="" /></div>
					<div className='things__container__imgBox__imgCont'><img src={img2} alt="" /></div>
					<div className='things__container__imgBox__imgCont'><img src={img3} alt="" /></div>
					<div className='things__container__imgBox__imgCont'><img src={img4} alt="" /></div>
				</div>
			</div>
		</div>
	)
}

export default Things