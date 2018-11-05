import React from 'react';
import ReactDOM from 'react-dom';

function click (e){
	    
	    if (e.className === 'btn-menu') {
	    	e.classList.toggle('active');
	    }
	    console.log(e);
	  //   var element = document.querySelector('ul.list-menu');
			// element.classList.toggle('active');

	 //    document.onclick = myFunction;

		// function activeMenu(){
		// 	var element = document.querySelector('ul.list-menu');
		// 	element.classList.toggle('active');	
		// }

		// function myFunction(event){ 
		// 	var element = event.target || event.srcElement;
		// 	var listMenu = document.querySelector('ul.list-menu');	
		// 	if (element.className === 'btn-menu') {		
		// 		activeMenu();
		// 	} else if (!element.classList.contains('links-menu') &&
		// 		listMenu.classList.contains('active')) {
		// 		listMenu.classList.remove('active');
		// 	}
		// }
	 //    console.log('The link was clicked.');
	  }

class Header extends React.Component {

	// handleClick = (e) => {
	//     console.log(e);
	  //   var element = document.querySelector('ul.list-menu');
			// element.classList.toggle('active');

	 //    document.onclick = myFunction;

		// function activeMenu(){
		// 	var element = document.querySelector('ul.list-menu');
		// 	element.classList.toggle('active');	
		// }

		// function myFunction(event){ 
		// 	var element = event.target || event.srcElement;
		// 	var listMenu = document.querySelector('ul.list-menu');	
		// 	if (element.className === 'btn-menu') {		
		// 		activeMenu();
		// 	} else if (!element.classList.contains('links-menu') &&
		// 		listMenu.classList.contains('active')) {
		// 		listMenu.classList.remove('active');
		// 	}
		// }
	 //    console.log('The link was clicked.');
	  //}
	

  render() {
    return (
  
		<header className="main-header">
			<div className="wrapper-header">
				<div className="main-menu">
					<button className="btn-menu" onClick={click}>
						Меню
					</button>			
				</div>				
				<h1 className="title-header">
					Золотоніський коледж ветеринарної медицини<br /> Білоцерківського національного аграрного університету
				</h1>
			</div>
			<ul className="list-menu">
				<li><span className="links-menu">Головна</span></li>
				<li>
					<a href="#" className="links-menu">Про коледж</a>
					<ul className="sub-list-menu">
						<li><a href="#" className="links-menu">Історія коледжу</a></li>
						<li><a href="#" className="links-menu">Адміністрація</a></li>
						<li><a href="#" className="links-menu">Матеріально-технічна база</a></li>
						<li><a href="#" className="links-menu">Педагогічний колектив</a></li>
						<li><a href="#" className="links-menu">Циклові комісії</a></li>
						<li><a href="#" className="links-menu">Сертифікати</a></li>
					</ul>
				</li>
				<li>
					<a href="#" className="links-menu">Абітурієнту</a>
					<ul className="sub-list-menu">
						<li><a href="#" className="links-menu">Спеціальності</a></li>
						<li><a href="#" className="links-menu">Комплект документів</a></li>
						<li><a href="#" className="links-menu">Вартість навчання</a></li>
						<li><a href="#" className="links-menu">Правила прийому</a></li>
						<li><a href="#" className="links-menu">Зразки завдань</a></li>
					</ul>
				</li>
				<li>
					<a href="#" className="links-menu">Студенту</a>
					<ul className="sub-list-menu">
						<li><a href="#" className="links-menu">Розклад дзвінків</a></li>
						<li><a href="#" className="links-menu">Розклад занять</a></li>
						<li><a href="#" className="links-menu">Рада студентського самоврядування</a></li>
					</ul>
				</li>
				<li>
					<a href="#" className="links-menu">Виклдачу</a>
					<ul className="sub-list-menu">
						<li><a href="#" className="links-menu">Навчально-методичний комплекс</a></li>
						<li><a href="#" className="links-menu">Пам&#39;ятка з ведення журналу</a></li>
						<li><a href="#" className="links-menu">Куратору навчальної групи</a></li>
						<li><a href="#" className="links-menu">Методичні рекомендації</a></li>
					</ul>
				</li>
				<li><a href="#" className="links-menu">Новини</a></li>
				<li><a href="#" className="links-menu">Бухгалтерія</a></li>
				<li><a href="#" className="links-menu">Методичний кабінет</a></li>
				<li><a href="#" className="links-menu">Електронні підручники</a></li>
				<li><a href="#" className="links-menu">ЗНО</a></li>
				<li><a href="#" className="links-menu">Сайти викладачів</a></li>
				<li><a href="#" className="links-menu">Наша адреса</a></li>
			</ul>
			<img src="images/vettehzol.jpg" alt="Золотоніський коледж ветеринарної медицини Білоцерківського національного аграрного університету" className="image-header"/>
			<p>links</p>
		</header>
		)
	}
}

export default Header;