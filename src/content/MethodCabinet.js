import React from 'react';
import './csscontent/methodcabinet.css';

class MethodCabinet extends React.Component {
  render() {
    return (
    <section className = "content-section">
		<h2 className = "heading-library">Методичний кабінет</h2>
		<div className = "wrapper-methodcabinet">
			<img src="images/teachers-foto/Susla.jpg" alt="Сусла Юлія Володимирівна"/>
			<div>
				<h3>Сусла Юлія Володимирівна</h3>
				<p>Завідуюча методичного кабінету,<br /> викладач вищої кваліфікаційної категорії</p>
			</div>
		</div>
		<div className = "zno-text">
			<p>План роботи методичного кабінету
				<a href="downloads/documents/plan_metod_rob.pdf" target="_blank" rel="noreferrer noopener" className = "link-mc">Переглянути</a>
			</p>
			<p>Склад методичної ради коледжу
				<a href="downloads/documents/sklad_metod_radi.pdf" target="_blank" rel="noreferrer noopener" className = "link-mc">Переглянути</a>
			</p>
			<p>Графік атестації викладачів коледжу
				<a href="downloads/documents/grafik_atestaciji.pdf" target="_blank" rel="noreferrer noopener" className = "link-mc">Переглянути</a>
			</p>
			<p>Графік проходження курсів підвищення кваліфікації викладачами коледжу
				<a href="downloads/documents/grafik_kursi.pdf" target="_blank" rel="noreferrer noopener" className = "link-mc">Переглянути</a>
			</p>
		</div>
	</section>
		)
	}
}

export default MethodCabinet;