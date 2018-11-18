import React from 'react';
import LinksMenu from './LinksMenu.js';


class Header extends React.Component {
  render() {
	var elementImage;
	if (this.props.id === 0){
	elementImage = <img src="images/vettehzol.jpg" alt="Золотоніський коледж ветеринарної медицини Білоцерківського національного аграрного університету" className="image-header"/>;
	} else {
	elementImage = '';
	}
	if (this.props.id !== 0){
		var breadcrumbs = <span className = "active-bread-crumbs">{LinksMenu[this.props.id].name}</span>;
	} else {
		breadcrumbs = '';
	}
		return (

		<header className="main-header">
			<div className="wrapper-header">
				<div className="main-menu">
					<button className="btn-menu">
						Меню
					</button>			
				</div>				
				<h1 className="title-header">
					Золотоніський коледж ветеринарної медицини<br /> Білоцерківського національного аграрного університету
				</h1>
			</div>
			<ul className="list-menu">
				{LinksMenu.map((LinksMenu, id) => (
					<li key={LinksMenu.id}>
					<span className="links-menu"
						key={LinksMenu.id}
						onClick={() => {
						this.props.updateData(id);
						}}
						>
						{LinksMenu.name}
					</span>
				</li>
				))}				
			</ul>
			{elementImage}
			<div className = "bread-crumbs">
				<span className = "cursor-pointer" onClick={() => {
						this.props.updateData(0);
						}}>Головна / </span>
				{breadcrumbs}
			</div>
		</header>
		)
	}
}

export default Header;