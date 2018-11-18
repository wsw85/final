import React from 'react';
import './csscontent/entrant.css';

class Entrant extends React.Component{
	constructor(props){
		super(props)
		this.state={open:[false, false, false, false, false]}
	}
	handleClick = (index) => {
		var open = this.state.open.concat();
		open[index] = !open[index];
		this.setState({open: open});  		
	}

  render() {
    return (
			<section className = "content-section">
				<div className = "wrapper-block">
					<h2 className = "heading" onClick = { this.handleClick.bind(this, 0) }>Спеціальності</h2>
					<div className={ this.state.open[0] ? "wrapper-text open-text" : "wrapper-text" }>
						<h3>Золотоніський коледж ветеринарної медицини Білоцерківського національного аграрного університету оголошує набір студентів на 2018 - 2019 навчальний рік за такими спеціальностями:</h3>
						<p><u><em>211 "Ветеринарна медицина";</em></u></p>
						<p><u><em>204 "Технологія виробництва і переробки продукції тваринництва".</em></u></p>
						<p className = "bold-text">Випускники Золотоніського коледжу ветеринарної медицини Білоцерківського НАУ можуть працювати:</p>
						<p><strong>зі спеціальності «Ветеринарна медицина»</strong> — фельдшерами ветеринарної медицини в установи, організації і підприємства різних форм власності; бактеріологами, серологами та хіміками-токсикологами в лабораторії ветеринарної медицини, у Державні служби ветеринарної медицини на держаному кордоні та транспорті;</p>
						<p><strong>зі спеціальності «Технологія виробництва і переробки продукції тваринництва»</strong> — у господарства різних форм власності інженерами-технологами, технологами-дослідниками, в  митну службу, а за умов отримання другої освіти «Облік і аудит» — у податкову міліцію та податкову інспекцію.</p>
						<p className = "docimg">
							<a href="downloads/documents/licens1.jpg" target="_blank" rel="noopener noreferrer">
								<img src="downloads/documents/licens1.jpg" alt="license" />
							</a>
							<a href="downloads/documents/licens2.jpg" target="_blank" rel="noopener noreferrer">
								<img src="downloads/documents/licens2.jpg" alt="license" />
							</a>
						</p>
						<p className = "docimg">
							<a href="downloads/documents/certificatevet.jpg" target="_blank" rel="noopener noreferrer">
								<img src="downloads/documents/certificatevet.jpg" alt="certificate" />
							</a>
							<a href="downloads/documents/certificateteh.jpg" target="_blank" rel="noopener noreferrer">
								<img src="downloads/documents/certificateteh.jpg" alt="certificate" />
							</a>
						</p>
					</div>
				</div>

				<div className = "wrapper-block">
					<h2 className = "heading"  onClick = { this.handleClick.bind(this, 1) }>Календар абітурієнта</h2>
					<div className = { this.state.open[1] ? "wrapper-text open-text" : "wrapper-text" }>
						<h3>Строки прийому заяв та документів:</h3>
						<table className = "table-reception">
							<tbody>
								<tr>
									<td colSpan="2"><em>Для вступників на основі базової загальної середньої освіти (після 9-ти класів)</em></td>
								</tr>
								<tr>
									<td>Прийом документів</td>
									<td>з 02 по 14 липня 2018 року</td>
								</tr>
								<tr>
									<td>Вступні іспити</td>
									<td>з 15 по 22 липня 2018 року</td>
								</tr>
								<tr>
									<td>Оприлюднення рейтингових списків</td>
									<td>до 12<sup>00</sup> 24 липня 2018 року</td>
								</tr>
								<tr>
									<td>Виконання вимог для зарахування на місця за державним замовленням</td>
									<td>до 18<sup>00</sup> 28 липня 2018 року</td>
								</tr>
								<tr>
									<td>Виконання вимог для зарахування на місця за кошти фізичних та юридичних осіб</td>
									<td></td>
								</tr>
								<tr>
									<td>Зарахування за державним замовленням</td>
									<td>не пізніше 12<sup>00</sup> години 30 липня</td>
								</tr>
								<tr>
									<td>Зарахування за кошти фізичних та юридичних (за умови виконання набору за державним замовленням за відповідною спеціальністю)</td>
									<td>не пізніше 02 серпня 2018 року<br /> додаткове зарахування<br /> не пізніше 30 серпня 2018 року</td>
								</tr>
								<tr>
									<td colSpan="2"><em>Для вступників на основі повної загальної середньої освіти (після 11-ти класів)	за результатами ЗНО</em></td>
								</tr>
								<tr>
									<td>Прийом документів</td>
									<td>з 12 по 08 серпня 2018 року</td>
								</tr>
								<tr>
									<td>Оприлюднення рейтингових списків</td>
									<td>не пізніше 12<sup>00</sup> години 09 серпня</td>
								</tr>
								<tr>
									<td>Виконання вимог для зарахування на місця за державним замовленням</td>
									<td>до 12<sup>00</sup>  13 серпня 2018 року</td>
								</tr>
								<tr>
									<td>Виконання вимог для зарахування на місця за кошти фізичних та юридичних осіб</td>
									<td> </td>
								</tr>
								<tr>
									<td>Зарахування за державним замовленням</td>
									<td>не пізніше 12<sup>00</sup> години 14 серпня</td>
								</tr>
								<tr>
								<td>Зарахування за кошти фізичних та юридичних (за умови виконання набору за державним замовленням за відповідною спеціальністю)</td>
								<td>не пізніше 17 серпня<br /> додаткове зарахування<br /> не пізніше 30 серпня 2018 року</td>
								</tr>
							</tbody>
						</table>

						<p>Оригінали документів при участі в конкурсі на місця, що фінансуються за кошти державного бюджету, вступником подаються <strong>лише один раз</strong> при виборі місця навчання (виконання вимог до зарахування).</p>
						<p>Усі питання, пов&rsquo;язані з прийомом до коледжу, вирішуються приймальною  комісією Золотоніського коледжу ветеринарної медицини БНАУ.</p>
						<p>Після закінчення коледжу випускники можуть продовжити навчання в Білоцерківському національному  аграрному університеті.</p>
						<p>Більш детальна інформація на сайті Міністерства освіти і науки України (<a href="http://mon.gov.ua" target="_blank" rel="noopener noreferrer">перейти на сайт МОНу</a>)</p>
					</div>
				</div>
				
				<div className = "wrapper-block">
					<h2 className = "heading" onClick = { this.handleClick.bind(this, 2) }>Комплект документів</h2>
					<div className={ this.state.open[2] ? "wrapper-text open-text" : "wrapper-text" }>
						<h3>Вступники подають заяву на участь у конкурсному відборі до Золотоніського КВМ БНАУ в паперовій або в електронній формі.</h3>
						<p><u><em>Заява в паперовій формі подається вступником особисто до відбіркової комісії Золотоніського КВМ БНАУ.</em></u></p>
						<p><u><em>У заяві вступники вказують спеціальність, мову та форму навчання.</em></u></p>
						<p className = "bold-text">До заяви вступник додає:</p>
						<ol className = "list-document">
							<li>ксерокопію документа про повну загальну середню освіту або ксерокопію документ про базову загальну середню освіту;</li>
							<li>вступники на базі повної загальної середньої освіти подають ксерокопію сертифікату Українського центру оцінювання якості освіти з української мови та літератури і з біології – на спеціальності «Ветеринарна медицина» та  «Технологія виробництва і  переробки продукції тваринництва»;</li>
							<li>4 фотокартки розміром 3 х 4 см;</li>
							<li>ксерокопію паспорта (свідоцтва про народження для осіб, які за віком не мають паспорта);</li>
							<li>ксерокопію ідентифікаційного коду;</li>
							<li>ксерокопія військового квитка (посвідчення про приписку до призовної дільниці) для юнаків;</li>
							<li>довідку про склад сім'ї та місце проживання;</li>
							<li>ксерокопію документів, що дають право на пільги;</li>
							<li>ксерокопію медичної довідки за формою 086-о;</li>
							<li>2 конверти з марками по Україні.</li>
							<li>Документи подаються в паперовій  папці-швидкозшивачі.</li>
						</ol>
						<p className = "bold-text">Фінансування підготовки фахівців в Золотоніському  коледжі ветеринарної медицини проводиться :</p>
						<ol className = "list-document">
							<li>за рахунок коштів державного бюджету України;</li>
							<li>за рахунок коштів юридичних та фізичних осіб (орієнтовна плата за навчання 6500 грн. за рік).</li>
						</ol>
					</div>
				</div>
				
				<div className = "wrapper-block">
					<h2 className = "heading" onClick = { this.handleClick.bind(this, 3) }>Правила прийому</h2>
					<div className={ this.state.open[3] ? "wrapper-text open-text" : "wrapper-text" }>
						<h3>Правила прийому до Золотоніського коледжу ветеринарної медицини Білоцерківського національного аграрного університету</h3>
						<br />
						<p>
						<em>Переглянути або завантажити Правила пирйому</em>
							<a href="downloads/documents/pp-zkvmbnau-2018.pdf" target="_blank" rel="noopener noreferrer" className = "ppzkvmbnau">
								Переглянути
							</a>
						</p>
					</div>
				</div>

				<div className = "wrapper-block">
					<h2 className = "heading" onClick = { this.handleClick.bind(this, 4) }>Програма з біології</h2>
					<div className={ this.state.open[4] ? "wrapper-text open-text" : "wrapper-text" }>
						<h3>Програма з біології для вступних екзаменів</h3>
						<br />
						<p>
						<em>Переглянути або завантажити програму з біології</em>
							<a href="downloads/documents/biologia.pdf" target="_blank" rel="noopener noreferrer" className = "ppzkvmbnau">
								Переглянути
							</a>
						</p>
					</div>
				</div>


			</section>
		)
	}
}

export default Entrant;