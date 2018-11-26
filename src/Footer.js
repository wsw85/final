import React from 'react';


class Footer extends React.Component {
  render() {
    return (
			<footer className="main-header footer">
				<div className="adress">
					<h3 className="center">Наша адреса:</h3>
					<p className="text-adress">
						Поштовий індекс: 19700 <br />
						Черкаська область,<br />
						м. Золотоноша,<br />
						вул. Садовий проїзд 1
					</p>
				</div>
				<div className="contact">
					<h3 className="center">Контакти:</h3>				
					<p className="text-adress">
						<strong>E-mail:</strong> ztvmbtsau@ukr.net <br />
						<strong>Телефон:</strong> (04737) 5-24-57
						<a href="https://www.facebook.com/ZoloCollege/" target="_blank" rel="noreferrer noopener"><img src="images/icons/facebook.png" alt="facebook" className="facebook" /></a>
					</p>
					
				</div>
				<div className="map">
					<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1991.1446782646597!2d32.03730389912987!3d49.66946205151982!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d6af560fefe843%3A0x8430f68ed5b338fc!2sZolotonossky+College+of+Veterinary+Medicine!5e0!3m2!1sru!2sua!4v1540808452051" id="map_zolo" title="map_zolo" width='100%' height='100%' frameBorder='0' style={{border:0}} allowFullScreen></iframe>
				</div>
			</footer>
		)
	}
}

export default Footer;
