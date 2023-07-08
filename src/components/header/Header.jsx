import React from 'react'
import picture from "../../images/photo_portfolio.jpg"
import "./Header.scss"

function Header() {
	return (
		<div className='header'>
			<div className="header__container">
				<div className="header__container__imageBox">
					<img src={picture} alt="" />
				</div>
				<div className="header__container__titleBox">
					<div className="header__container__titleBox__container">
						<h1>Hi everyone,<br /> my name is <br /> <mark>Ruslan <br /> Tissen</mark> </h1>
						<h2>I'm a Web Developer</h2>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Header