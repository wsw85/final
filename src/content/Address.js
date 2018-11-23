import React from 'react';
import './csscontent/address.css';

class Address extends React.Component {
  render() {
    return (
		<section className="content-section">
			<dl className = "list-address">
				<dt>Наша адреса:</dt>
					<dd>Поштовий індекс: 19700 <br />
					Черкаська область, місто Золотоноша, вулиця Садовий проїзд 1</dd>
				<dt>Контакти:</dt>
					<dd>
						<table className = "phone-email">
							<tbody>
								<tr>
									<td><strong>E-mail:</strong></td>
									<td>ztvmbtsau@ukr.net</td>
									<td></td>
								</tr>
								<tr>
									<td><strong>Телефон:</strong></td>
									<td>(04737) 5-31-87<br />
										(04737) 5-26-07<br />
										(04737) 5-24–57
									</td>
									<td>
										директор<br />
										бухгалтерія<br />
										приймальна директора
									</td>
								</tr>
							</tbody>
						</table>
					<strong>Соціальні мережі:</strong>
					<a href="https://www.facebook.com/ZoloCollege/" target="_blank" rel="noreferrer noopener"><img src="images/icons/facebook.png" alt="facebook" className = "address-facebook"/></a></dd>
				<dt>Карта:</dt>
					<dd>
						<div className="address-map">
							<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1991.1446782646597!2d32.03730389912987!3d49.66946205151982!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d6af560fefe843%3A0x8430f68ed5b338fc!2sZolotonossky+College+of+Veterinary+Medicine!5e0!3m2!1sru!2sua!4v1540808452051" id="map_zolo" title="map_zolo" width='100%' height='100%' frameBorder='0' style={{border:0}} allowFullScreen></iframe>
						</div>
					</dd>
			</dl>
		</section>
		)
	}
}

export default Address;