import React from 'react';
import './csscontent/accountingdepartment.css';

class AccountingDepartment extends React.Component {
  render() {
    return (
    <section className = "content-section">
		<h2 className = "heading-library">Бухгалтерія</h2>
		<div className = "requisites">
			<h3>Реквізити оплати за гуртожиток</h3>
			<p>
				<strong>Утримувач платежу:</strong> Золотоніський коледж ветмедіщини БНАУ<br />
				<strong>Установа банку:</strong> Держказначейська служба України м. Київ<br />
				<strong>МФО</strong> <u>820172</u> <strong>Код</strong> <u>00729095</u> <strong>рахунок утримувача</strong> <u>31250255200463</u><br />
				Прізвище, ім'я, по батькові, адреса студента<br />
				<strong>Вид платежу:</strong> плата за гуртожиток
			</p>
		</div>
		<br />
		<div className = "requisites">
			<h3>Реквізити оплати за навчання</h3>
			<p>
				<strong>Утримувач платежу:</strong> Золотоніський коледж ветмедіщини БНАУ<br />
				<strong>Установа банку:</strong> Держказначейська служба України м. Київ<br />
				<strong>МФО</strong> <u>820172</u> <strong>Код</strong> <u>00729095</u> <strong>рахунок утримувача</strong> <u>31253255100463</u><br />
				Прізвище, ім'я, по батькові, адреса студента<br />
				<strong>Вид платежу:</strong> плата за навчання
			</p>
		</div>
		<hr />
		<div className = "zno-text">
			<p>Баланс на 01.01.2017 рік
				<a href="downloads/accountingdepartment/balans_2017.pdf" target="_blank" rel="noreferrer noopener" className = "link-mc">Переглянути</a>
			</p>
			<p>Кошторис на 2017 рік
				<a href="downloads/accountingdepartment/koshtoris_2017.pdf" target="_blank" rel="noreferrer noopener" className = "link-mc">Переглянути</a>
			</p>
			<p>План асигнувань на 2017 рік
				<a href="downloads/accountingdepartment/plan_asignuvan_2017.jpg" target="_blank" rel="noreferrer noopener" className = "link-mc">Переглянути</a>
			</p>
			<p>План використання бюджетних коштів на 2017 рік
				<a href="downloads/accountingdepartment/plan_vuk_kosht_2017.jpg" target="_blank" rel="noreferrer noopener" className = "link-mc">Переглянути</a>
			</p>
		</div>
		<hr />
		<div className = "zno-text">
			<p>Кошторис на 2016 рік
				<a href="downloads/accountingdepartment/koshtoris_2016.pdf" target="_blank" rel="noreferrer noopener" className = "link-mc">Переглянути</a>
			</p>
			<p>План асигнувань на 2016 рік
				<a href="downloads/accountingdepartment/plan_asignuvan_2016.jpg" target="_blank" rel="noreferrer noopener" className = "link-mc">Переглянути</a>
			</p>
			<p>Звіт про результати фінансової діяльності за 2016 рік
				<a href="downloads/accountingdepartment/zvit_fin_dijalnist_2016.pdf" target="_blank" rel="noreferrer noopener" className = "link-mc">Переглянути</a>
			</p>
			<p>Звіт про рух грошових коштів за 2016 рік
				<a href="downloads/accountingdepartment/zvit_pro_rukh_koshtiv_2016.jpg" target="_blank" rel="noreferrer noopener" className = "link-mc">Переглянути</a>
			</p>
		</div>
	</section>
		)
	}
}

export default AccountingDepartment;