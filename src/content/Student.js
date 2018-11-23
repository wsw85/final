import React from 'react';
import './csscontent/student.css';

class Student extends React.Component{
	constructor(props){
		super(props)
		this.state={open:[false, true, false]}
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
					<h2 className = "heading" onClick = { this.handleClick.bind(this, 0) }>Розклад дзвінків</h2>
					<div className={ this.state.open[0] ? "wrapper-text open-text" : "wrapper-text" }>
						<table className = "table-call-schedule">
							<tbody>
								<tr>
									<td>1 пара</td>
									<td>8<sup>30</sup> - 9<sup>50</sup></td>
								</tr>
								<tr>
									<td>2 пара</td>
									<td>10<sup>00</sup> - 11<sup>20</sup></td>
								</tr>
								<tr>
									<td>3 пара</td>
									<td>11<sup>50</sup> - 13<sup>10</sup></td>
								</tr>
								<tr>
									<td>4 пара</td>
									<td>13<sup>20</sup> - 14<sup>40</sup></td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>

				<div className = "wrapper-block">
					<h2 className = "heading"  onClick = { this.handleClick.bind(this, 1) }>Розклад занять</h2>
					<div className = { this.state.open[1] ? "wrapper-text open-text" : "wrapper-text" }>
						<p className = "rozklad">
							<a href="downloads/student/Rozklad1.jpg" target="_blank" rel="noopener noreferrer">
								<img src="downloads/student/Rozklad1.jpg" alt="rozklad1" />
							</a>
							<a href="downloads/student/Rozklad2.jpg" target="_blank" rel="noopener noreferrer">
								<img src="downloads/student/Rozklad2.jpg" alt="rozklad2" />
							</a>
						</p>
					</div>
				</div>
				
				<div className = "wrapper-block">
					<h2 className = "heading" onClick = { this.handleClick.bind(this, 2) }>Рада студентського самоврядування</h2>
					<div className={ this.state.open[2] ? "wrapper-text open-text" : "wrapper-text" }>
						<p>У Золотоніському технікумі ветеринарної медицини БНАУ активно діє студентське самоврядування. Головною метою студентської ради є захист інтересів студентів, всіх форм та видів. Також ми допомагаємо розвитку творчого потенціалу та формування молодих лідерів. На даний момент Студентська рада активно співпрацюємо с профспілковим комітетом та адміністрацією технікуму.</p>

						<p className = "student">
							<img src="downloads/student/studrada.jpg" alt="studrada" />
						</p>

						<p className = "bold-text">Сектор навчально – наукової роботи</p>
						<p>Залучення студентів технікуму до наукових досліджень, участі у науково практичних конференціях.</p>
						<p>	Сприяння у створенні груп студентів для поїздок на наукові форми та забезпечення їх необхідними документами.</p>
						<p>	Подача рекомендацій для отримання додаткових стипендій та винагород студентам-відмінникам та іншим студентам.</p>
						
						<p className = "bold-text">Сектор організації дозвілля та морально - етичного виховання</p>
						<p>Організація культурно відпочинку студентів технікуму.</p>
						<p>Популяризація здорового способу життя та залучення студентів  до занять у спортивних секціях.</p>
						<p>Організація тематичних вечорів, конкурсів, диспутів, культурно-масових заходів.</p>

						<p className = "bold-text">Сектор інформації, соціологічних досліджень та інших зв’язків</p>
						<p>Інформування студентів про рішення «Студентської ради», адміністрації.</p>
						<p>Співпраця с благодійними фондами та іншими установами.</p>

						<p>Задля забезпечення умов всебічного і вільного розвитку особистості студента студентська рада спрямовує свою діяльність за різними напрямками: науково-дослідницький, культурний, громадський, спортивний тощо. Найактуальнішим питанням для кожного студента всіх часів залишається порозуміння з адміністрацією технікуму та його професорсько-викладацьким складом, і саме зв'язуючою ланкою в цій системі є Студентська Рада, яка сприяє встановленню гармонійних відносин та захищає права і інтереси студентів. Важливим аспектом в діяльності студради є пропаганда здорового способу життя та активного, цікавого і корисного використання вільного часу.</p>

						<p className = "bold-text">Студентське самоврядування технікуму ставить перед собою такі завдання:</p>
						<ol className = "list-document">
							<li>захист прав та інтересів студентів, вирішення їх соціальних проблем, створення умов для покращення їх матеріального становища;</li>
							<li>забезпечення виконання студентами своїх обов’язків;</li>
							<li>забезпечення інформаційної, молодіжної, правової, психологічної допомоги студентам (спільно з відповідними службами);</li>
							<li>розвиток самоврядування в технікумі, залучення студентів до участі в цих процесах;</li>
							<li>сприяння науковій та творчій діяльності студентів;</li>
							<li>розвиток наукових та гуманітарних контактів зі студентами інших ВНЗ, молодіжними організаціями, що діють в Україні та поза її межами.</li>
						</ol>
					</div>
				</div>
			</section>
		)
	}
}

export default Student;