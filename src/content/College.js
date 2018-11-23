import React from 'react';
import './csscontent/college.css';

class College extends React.Component{
	constructor(props){
		super(props)
		this.state={open:[false, false, false, false, false, false]}
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
					<h2 className = "heading" onClick = { this.handleClick.bind(this, 0) }>Історія коледжу</h2>
					<div className={ this.state.open[0] ? "wrapper-text open-text" : "wrapper-text" }>
						<h3>Сторінками історії</h3>
						<p>Черкаський край — це славетна земля Богдана і Тараса.</p>
						<p>Є багато міст і сіл нашої країни, назви яких  важко зрозуміти. Одне з них — невелике місто Золотоноша. Живописне містечко з незвичайною чарівною назвою. Воно  знаходиться на лівому березі Дніпра. Збудоване місто на річці Золотоношці, від якої, гадають, і походить його назва.</p>
						<p>Свою історію технікум розпочинає з 1898 року, коли Департаментом землеробства була створена “Золотоніська нижча сільськогосподарська  школа  І розряду імені статс –  секретаря П.А. Столипіна”.</p>
						<p>Перший навчальний корпус та допоміжні будинки були побудовані на землі, купленій земством у поміщика Кулічевського, що програв 70 десятин землі в карти.</p>
						<p>Сільськогосподарська школа готувала спеціалістів під керівництвом і статутом затвердженим головним управлінням землеустройства і землеробства і від 31 серпня 1912 року.</p>
						<p>В період з 1898 по 1917 роки  школа зробила 18 випусків по  18 – 20 чоловік.</p>
						<p>Юнаки віком  не менше 14 років здавали відповідні вступні екзамени. Строк навчання був 4 роки. Кількість учнів не перевищувала 100 осіб. За навчання кожен учень 25 карбованців у рік.</p>
						<p>До революції Золотоніська с/г школа була призвана вирішувати завдання царизму — зміцнення капіталістичних відношень в с/г господарстві.</p>
						<p>Всього до Великої Вітчизняної війни в технікумі підготовлено 1000 спеціалістів сільського господарства.</p>
						<p>В період фашистської окупації вся учбова та господарська база була знищена.  В 1943 році вже було відновлено навчання за спеціальністю «агрономія», а в 1947 році відбудовано учбово – дослідне господарство під керівництвом Маленка Георгія Іпатійовича.</p>
						<p>Багато  випускників та співробітників  полягли в боях за Батьківщину в часи Великої Вітчизняної війни.</p>
						<p>В 1958 році було проведено перший набір студентів на навчання по спеціальності «Ветеринарія». З цього ж року припинено набір студентів за спеціальністю «Агрономія».</p>
						<p>До 1970 року в технікумі було заочне відділення по спеціальності «Ветеринарія», яке підготувало 350 спеціалістів.</p>
						<p>У квітні 2006 року Золотоніський державний технікум ветеринарної медицини реорганізовано в Золотоніський технікум ветеринарної медицини Білоцерківського державного аграрного університету.</p>
						<p>06 квітня 2017 року згідно наказу Міністерства освіти і науки України №554 Золотоніський технікум ветеринарної медицини Білоцерківського національного аграрного університету було перейменовано на Золотоніський коледж ветеринарної медицини Білоцерківського національного аграрного університету.</p>
						<p>Для підготовки студентів набуття ними необхідних умінь та навиків, постійно проводиться навчальна практика, лабораторні та практичні заняття. Саме для цього створені всі умови в лабораторіях навчально – виробничої ветеринарної клініки.</p>
						<p>На учбовому господарстві коледжу знаходиться клініка по утриманню піддослідних тварин: велика рогата худоба, свині, вівці, кролі. Територія навчального господарства містить 14 гектарів землі. З них 3,5 гектари для вирощування кормів для тварин. Решта землі надається тимчасово в користування працівникам коледжу.</p>
						<p>Сьогодні Золотоніський коледж ветеринарної медицини продовжує здійснювати підготовку спеціалістів за фахом – фельдшер ветеринарної медицини і готуємо технологів по переробці продукції тваринництва. Навчаються в середньому 340 студентів на денній формі навчання. Щорічний набір на І курс становить 85 осіб на основі базової загальної середньої освіти і 25 осіб на базі повної середньої освіти.</p>
						<p>Студенти коледжу забезпечуються  гуртожитком, стипендією у встановленому розмірі та відповідно до якості навчання. В їх розпорядженні навчальний корпус з 12 лабораторіями та 15 кабінетами, 2 комп’ютерними класами.</p>
						<p>До послуг їдальня, спортзал, музей історії коледжу, бібліотека.</p>
						<p>Колектив коледжу приділяє багато уваги професійній активізації студентів. Перш за все шукає змістовні, цікаві форми роботи, які допомогли б студентам побачити важливість та престижність обраної ними професії. Такими формами роботи є гурткові заняття, бінарні та семінарські заняття, конференції та заняття -  конкурси.</p>
						<p>Студенти приймають активну участь у святкових концертах присвячених Дню знань, Дню вчителя, 8 березня.</p>
						<p>Щорічно проводяться конкурси краси “Міс коледжу” та “Містер коледжу”, тематичні виховні заходи приурочені “Голодомору” та  річницям визволення міста, “Українські вечорниці”.</p>
						<p>Процес виховання у навчальному закладі доповнюється роботою студентів у гуртках. Великою популярністю користується студія бального танцю, вокальний ансамбль.</p>
						<p>У пошані в коледжі  спортивно – масова робота. Керівник фізичного виховання спрямовує роботу на гармонічне виховання студентів та утвердження здорового способу життя. Спортивні команди неодноразово брали участь і ставали призерами обласної, районної та місцевих змагань. Про це свідчить виставка кубків першості в фойє коледжу.</p>
						<p>Діяльність коледжу  спрямована на досягнення основної мети – підготовку фахівців, на формування творчої особистості з високим рівнем національної свідомості та духовної культури.</p>
						<p>Більш детальну інформацію про навчальний заклад дізнайтеся за посиланням <a href="downloads/college/istoriya_koledzhu.pdf" target="_blank" rel="noreferrer noopener">Історія Золотоніського коледжу</a></p>
					</div>
				</div>

				<div className = "wrapper-block">
					<h2 className = "heading"  onClick = { this.handleClick.bind(this, 1) }>Адміністрація</h2>
					<div className = { this.state.open[1] ? "wrapper-text open-text" : "wrapper-text" }>
						<div className = "wrapper-person">
							<div className = "person">
								<div className = "foto-person">
									<img src="images/teachers-foto/Lysenko.jpg" alt="Лисенко Євдокія Василівна"/>
								</div>
								<div className = "about-person">
									<h3>Лисенко<br />
										Євдокія<br />
										Василівна
									</h3>
									<h4>директор коледжу</h4>
									<p>спеціаліст вищої категорії</p>
								</div>
							</div>
							<hr />

							<div className = "person">
								<div className = "foto-person">
									<img src="images/teachers-foto/Solovjova.jpg" alt="Соловйова Тамара Анатоліївна"/>
								</div>
								<div className = "about-person">
									<h3>Соловйова<br />
										Тамара<br />
										Анатоліївна
									</h3>
									<h4>заступник директора з навчальної роботи</h4>
									<p>спеціаліст вищої категорії</p>
								</div>
							</div>
							<hr />

							<div className = "person">
								<div className = "foto-person">
									<img src="images/teachers-foto/Shchepetna.jpg" alt="Лисенко Євдокія Василівна"/>
								</div>
								<div className = "about-person">
									<h3>Щепетна<br />
										Віта<br />
										Дмитрівна
									</h3>
									<h4>заступник директора з виховної роботи</h4>
									<p>спеціаліст вищої категорії<br />
										викладач - методист</p>
								</div>
							</div>
							<hr />

							<div className = "person">
								<div className = "foto-person">
									<img src="images/teachers-foto/Susla.jpg" alt="Сусла Юлія Володимирівна"/>
								</div>
								<div className = "about-person">
									<h3>Сусла<br />
										Юлія<br />
										Володимирівна
									</h3>
									<h4>завідуюча методичного кабінету</h4>
									<p>спеціаліст вищої категорії</p>
								</div>
							</div>
							<hr />

							<div className = "person">
								<div className = "foto-person">
									<img src="images/teachers-foto/ZhaloI.jpg" alt="Жало Іван Іванович"/>
								</div>
								<div className = "about-person">
									<h3>Жало<br />
										Іван<br />
										Іванович
									</h3>
									<h4>завідувач ветеринарно-технологічного відділення</h4>
									<p>спеціаліст</p>
								</div>
							</div>
							<hr />

							<div className = "person">
								<div className = "foto-person">
									<img src="images/teachers-foto/Loshuk.jpg" alt="Лошук Микола Миколайович"/>
								</div>
								<div className = "about-person">
									<h3>Лошук<br />
										Микола<br />
										Миколайович
									</h3>
									<h4>заступник директора з адміністративно-господарської роботи</h4>
								</div>
							</div>
							<hr />

							<div className = "person">
								<div className = "foto-person">
									<img src="images/teachers-foto/Danko.jpg" alt="Данько Ольга Миколаївна"/>
								</div>
								<div className = "about-person">
									<h3>Данько<br />
										Ольга<br />
										Миколаївна
									</h3>
									<h4>головний бухгалтер</h4>
								</div>
							</div>
							<hr />

							<div className = "person">
								<div className = "foto-person">
									<img src="images/teachers-foto/Chernovolceva.jpg" alt="Черновольцева Лариса Володимирівна"/>
								</div>
								<div className = "about-person">
									<h3>Черновольцева<br />
										Лариса<br />
										Володимирівна
									</h3>
									<h4>завідуюча бібліотекою</h4>
								</div>
							</div>
							
						</div>
					</div>
				</div>
				
				<div className = "wrapper-block">
					<h2 className = "heading" onClick = { this.handleClick.bind(this, 2) }>Матеріально-технічна база</h2>
					<div className={ this.state.open[2] ? "wrapper-text open-text" : "wrapper-text" }>
						<h3>Матеріально-технічне забезпечення Золотоніського коледжу ветеринарної медицини БНАУ</h3>
						<p>Золотоніський коледж ветеринарної медицини БНАУ розташований в одному з невеликих, але мальовничих містечок України, з незвичною  назвою Золотоноша, Черкаської області, і займає площу 1,2880 га.</p>
						<p>На цій території розміщені:</p>
						<ol className = "list-document">
							<li>Навчальний корпус загальною площею 2581,9 м<sup>2</sup></li>
							<li>Гуртожиток – 3366 м<sup>2</sup>, де розміщені бібліотека 152 м<sup>2</sup>, в тому числі читальний зал на 55 місць площею 80,9 м<sup>2</sup>, а також ізолятор – 25,4 м<sup>2</sup></li>
							<li>Їдальня – 742 м<sup>2</sup> (вся будівля) ( на 100 посадочних місць)</li>
							<li>Котельня – 34,3 м<sup>2</sup></li>
							<li>Гараж – 48,4 м<sup>2</sup></li>
						</ol>
						
						<p>Крім того в структуру коледжу входить навчально-виробниче господарство (клініки та ферма), яке розташоване в приміському селі Новодмитрівка, на відстані 5 км від коледжу і займає площу 14,64 га. Тут розміщено:</p>
						<ol className = "list-document">
							<li>Навчальний  корпус № 1 загальною площею 447,6 м<sup>2</sup></li>
							<li>Навчальний корпус № 2 – 283,3 м<sup>2</sup></li>
							<li>Навчально-виробнича клініка – 352,0 м<sup>2</sup></li>
							<li>Навчальний ветеринарний пункт – 71,4 м<sup>2</sup></li>
							<li>Ферма для утримання тварин – 183,7 м<sup>2</sup></li>
							<li>Зерновий склад – 471,3 м<sup>2</sup></li>
							<li>Гаражі та складські приміщення.</li>
						</ol>
						
						<p>Вся територія коледжу  - це територія, яка засаджена породами різних  дерев, кущів, декоративних рослин, квітників, зелених газонів.</p>
						<p>Матеріально-технічна база для проведення навчально-практичних занять повністю задовольняє потреби і відповідає вимогам робочих навчальних планів і програм навчальних дисциплін. Практичні заняття  проводяться на спеціалізованих дільницях, на території навчально-виробничої клініки та  ферми.</p>
						<p>На першому поверсі гуртожитку коледжу розташована бібліотека в спеціально виділеному приміщенні, яке використовується за призначенням.</p>
						<p>Загальна площа приміщень бібліотеки – 152 м<sup>2</sup>. Основними формами обслуговування бібліотеки являються абонемент і читальна зала, в яку входять книжкові видання, додаткові матеріали, періодичне видання.</p>
						<p>Загальна площа читальної зали – 80,9 м<sup>2</sup>.</p>
						<p>У бібліотеці редагуються алфавітний і систематичний каталоги, які виставлені у читальній залі, розпочато роботу по створенню електронного каталогу та підключено Internet.</p>
						<p>До послуг користувачів в бібліотеці є картотека газетно-журнальних статей, що включає більше 300 бібліографічних описів періодичних видань. Збільшилась книговидача, особливо електронних підручників. В тісному контакті з кураторами груп, вихователем гуртожитку проводиться виховна робота.</p>
						<p>Для збереження періодичних, наукових і рідкісних видань, якими користуються у читальній залі, виділено приміщення площею 16,5 м<sup>2</sup>. Загальний фонд бібліотеки складає 32256 примірників, з них наукової літератури – 53 примірники.</p>
						<p>Основними джерелами поповнення знань студентів і викладачів є підручники.</p>
						<p>Робочі зошити  для проведення лабораторних і практичних занять розроблені викладачами навчально-методичного центру аграрної освіти України або викладачами коледжу з кожної дисципліни, тиражуються і студенти забезпечені на 100 %.</p>
						<p>Особлива увага в коледжі і взагалі і конкретно в роботі циклових комісій, приділяється комп'ютеризації навчального процесу на всіх етапах.</p>
						<p>На даний період в коледжі є два комп’ютерні класи, які  забезпечені комп’ютерами типу AMD Athlon, Intel Celeron. Обидві лабораторії під’єднані до мережі Internet та з’єднані в локальну мережу. Крім того є  периферійні пристрої, додаткове обладнання і аксесуари: сканери, факси, ксерокси, кольорові і чорно – білі струменеві принтери.</p>
						<p>На практичних роботах на  комп’ютері використовуються навчально – контролюючі програми.</p>
						<p>Під час використання цієї програми кожний викладач розробляє і вводить до ПК набір питань і відповіді за тестовими завданнями, що дає змогу викладачеві проконтролювати  знання студентів.</p>
						<p>Спортивна база ВП «Золотоніський коледж ветеринарної медицини БНАУ» включає в себе такі споруди:</p>
						<ol className = "list-document">
							<li>Спортивний зал</li>
							<li>Тренажерний зал</li>
							<li>Кімната настільного тенісу</li>
							<li>Кімната фізичної культури в гуртожитку</li>
							<li>Баскетбольний майданчик</li>
						</ol>
						<p>В осінньо-весняний періоди заняття з фізичного виховання та фізичної культури проводяться на районному стадіоні «Колос», де використовуються:</p>
						<ol className = "list-document">
							<li>бігові доріжки із спеціальним ґрунтовим покриттям. Довжина кола 400 м., по колу 4 доріжки та 5 прямих доріжок  з одного боку кола;</li>
							<li>легкоатлетичні сектори, на яких розташовані 2 ями для стрибків у довжину з розбігу, сектор для штовхання ядра;</li>
							<li>волейбольний майданчик;</li>
							<li>майданчик для міні – футболу.</li>
						</ol>
						<p>Планування і проведення занять з фізичного виховання здійснюється відповідно до вимог пункту 1 цільової комплексної програми «Фізичне виховання – здоров’я нації», затвердженої Наказом  Президента України 1  вересня 1998 р. за № 963/98.</p>
						<p>Заняття на І, ІІ курсах  проводяться в обсязі 2 години на тиждень, на ІІІ, ІV курсах заняття проводяться в обсязі 4 години, із них 2 години в сітці занять, 2 години поза сіткою.</p>
						<p>Проводяться заняття зі спеціальними медичними групами, які були сформовані на основі щорічного медичного огляду.</p>
						<p>В коледжі сформовані секції спортивного удосконалення з таких видів, як баскетбол, волейбол, гирьовий спорт, настільний теніс, легка атлетика.</p>
					</div>
				</div>

				<div className = "wrapper-block">
					<h2 className = "heading" onClick = { this.handleClick.bind(this, 3) }>Педагогічний колектив</h2>
					<div className={ this.state.open[3] ? "wrapper-text open-text" : "wrapper-text" }>
						<h3>Педагогічний колектив</h3>
						<div className = "wrapper-img">
							<img src="images/kolektyv.jpg" alt="Педагогічний колектив" />							
						</div>
						<p>Головним завданням, над вирішенням якого працює педагогічний колектив, є не тільки підготовка спеціалістів-фахівців, але і формування людини – інтелігента, громадянина, патріота, творчої людини, якій належить працювати над відродженням українського села.</p>
						<p>Колектив коледжу приділяє багато уваги професійній активізації студентів. Перш за все, ведеться пошук цільових, змістовних форм роботи, які сприяють усвідомленню престижності обраної ними професії.</p>
						<p>Навчально-виховний процес в технікумі здійснюють 32 штатних викладачі, з них:</p>
						<p className = "shtatni-vykladachi">Спеціаліст – 2 (6,25 %);<br />
							ІІ категорія – 8 (25 %)<br />
							І категорія – 8 (25 %)<br />
							Вища категорія – 14 (43,75 %)</p>
						<p>Молоді викладачі коледжу підвищують свій рівень освіти та майстерності шляхом навчання в аспірантурі та на педагогічному факультеті. В аспірантурі Білоцерківського національного аграрного університету здобувачами  кафедри ветеринарних наук – є 3 викладачі.</p>
						<p>Викладачі коледжу є постійними учасниками виставки досвіду педагогічних колективів вищих навчальних закладів Міністерства аграрної політики та продовольства України, роботи яких занесені до каталогу кращих робіт науково – методичного центру аграрної освіти.</p>
						<p>Кожен викладач проводить роботу згідно складеного ним індивідуального плану. В кінці навчального року аналізується робота викладацького складу, підводяться підсумки та виставляється рейтингова оцінка, де враховується педагогічна, методична та організаційна майстерність викладача.</p>

						<h3>Методична рада</h3>
						<div className = "wrapper-img">
							<img src="images/metodrada.jpg" alt="Методична рада" />							
						</div>
						<p>Голова методичної ради технікуму, заступник директора з навчальної роботи Соловйова Тамара Анатоліївна на першому засіданні окреслила основні напрямки роботи у коледжі.</p>					
						<p>На порядок денний були винесені питання про особливості планування навчально-виховного порцесу у новому 2017-2018 навчальному році.  Члени методичної ради розглянули Положення про діяльність уповноваженого підрозділу з питань запобігання та виявлення корупції у Золотоніському коледжі ветеринарної медицини БНАУ.  Керівники структурних підрозділів та голови циклових комісій природничо-наукової, професійно-практичної та гуманітарної, соціально-економічної підготовки прозвітували про основні напрямки діяльності викладачів  та студентів у поточному навчальному році.   Ключовим питання було обговорення дисципліни студентів під час навчальних занять, зовнішній вигляд, запізнення та відпрацювання пропущених годин.  Завідувачці методичним кабінетом Бобер Т. Б. поставлене завдання підготувати супровідну документацію щодо атестації викладачів у 2017-2018 н. р.. Заступник директора з навчальної роботи Соловйова Т. А. познайомила членів методичної ради із графіком проходження курсів кваліфікації викладачів коледжу.</p>						
					</div>
				</div>
				
				<div className = "wrapper-block">
					<h2 className = "heading" onClick = { this.handleClick.bind(this, 4) }>Циклові комісії</h2>
					<div className={ this.state.open[4] ? "wrapper-text open-text" : "wrapper-text" }>
						<p>Злагодженість в роботі педколективу, єдність та взаємозумовленість форм і методів навчання забезпечують 3 циклові комісії.</p>
						<p>Голови циклових комісій є ініціаторами впровадження передових форм і методів навчання. Вони спрямовують роботу циклових комісій на удосконалення навчально-виховного процесу, впровадження інноваційних технологій навчання, підвищення якості та ефективності практичного навчання як основного способу формування професійної майстерності студентів.</p>
						<h3>Циклова комісія загальноосвітніх, гуманітарних та соціально-економічниих дисциплін</h3>
						<div className = "wrapper-person bg-ligthgreen">
							<hr />
							<div className = "person">
								<div className = "foto-person">
									<img src="images/teachers-foto/Shendryk.jpg" alt="Шендрик Людмила Миколаївна"/>
								</div>
								<div className = "about-person">
									<h3>Шендрик<br />
										Людмила<br />
										Миколаївна
									</h3>
									<h4>голова циклової комісії<br />
									спеціаліст вищої категорії<br />
									викладач - методист</h4>
									<p>вища математика, математика</p>
								</div>
							</div>
							<hr />

							<div className = "person">
								<div className = "foto-person">
									<img src="images/teachers-foto/Atamanyuk.jpg" alt="Атаманюк Олеся Валеріївна"/>
								</div>
								<div className = "about-person">
									<h3>Атаманюк<br />
										Олеся<br />
										Валеріївна
									</h3>
									<h4>спеціаліст ІІ категорії</h4>
									<p>історія України, всесвітня історія, географія, основи філософських знань, соціологія</p>
								</div>
							</div>
							<hr />

							<div className = "person">
								<div className = "foto-person">
									<img src="images/teachers-foto/Bober.jpg" alt="Бобер Тетяна Борисівна"/>
								</div>
								<div className = "about-person">
									<h3>Бобер<br />
										Тетяна<br />
										Борисівна
									</h3>
									<h4>спеціаліст І категорії</h4>
									<p>українська мова та література, англійська мова</p>
								</div>
							</div>
							<hr />

							<div className = "person">
								<div className = "foto-person">
									<img src="images/teachers-foto/Demchenko.jpg" alt="Демченко Надія Ігорівна"/>
								</div>
								<div className = "about-person">
									<h3>Демченко<br />
										Надія<br />
										Ігорівна
									</h3>
									<h4>спеціаліст І категорії</h4>
									<p>біологія, хімія</p>
								</div>
							</div>
							<hr />

							<div className = "person">
								<div className = "foto-person">
									<img src="images/teachers-foto/Kalyuzhka.jpg" alt="Калюжка Світлана Олександрівна"/>
								</div>
								<div className = "about-person">
									<h3>Калюжка<br />
										Світлана<br />
										Олександрівна
									</h3>
									<h4>спеціаліст вищої категорії</h4>
									<p>зарубіжна література, культурологія, ділова українська мова</p>
								</div>
							</div>
							<hr />

							<div className = "person">
								<div className = "foto-person">
									<img src="images/teachers-foto/Shchepetna.jpg" alt="Щепетна Віта Дмитрівна"/>
								</div>
								<div className = "about-person">
									<h3>Щепетна<br />
										Віта<br />
										Дмитрівна
									</h3>
									<h4>заступник директора з виховної роботи<br />
										спеціаліст вищої категорії<br />
										викладач - методист</h4>
									<p>історія України, соціологія</p>
								</div>
							</div>
							<hr />

							<div className = "person">
								<div className = "foto-person">
									<img src="images/teachers-foto/Susla.jpg" alt="Сусла Юлія Володимирівна"/>
								</div>
								<div className = "about-person">
									<h3>Сусла<br />
										Юлія<br />
										Володимирівна
									</h3>
									<h4>завідуюча методичним кабінетом<br />
									спеціаліст вищої категорії</h4>
									<p>вища математика, математика, фізика, астрономія</p>
								</div>
							</div>
							<hr />

							<div className = "person">
								<div className = "foto-person">
									<img src="images/teachers-foto/VeretilnykN.jpg" alt="Веретільник Наталія Іванівна"/>
								</div>
								<div className = "about-person">
									<h3>Веретільник<br />
										Наталія<br />
										Іванівна
									</h3>
									<h4>спеціаліст ІІ категорії</h4>
									<p>фізика, основи екології, с.-г. радіоекологія, безпека життєдіяльності, громадянська освіта, комп'ютеризація с.-г. виробництва, інформатика та комп’ютерна техніка</p>
								</div>
							</div>
							<hr />

							<div className = "person">
								<div className = "foto-person">
									<img src="images/teachers-foto/VeretilnykS.jpg" alt="Шендрик Людмила Миколаївна"/>
								</div>
								<div className = "about-person">
									<h3>Веретільник<br />
										Сергій<br />
										Володимирович
									</h3>
									<h4>спеціаліст І категорії</h4>
									<p>фізика, безпека життєдіяльності, комп'ютеризація с.-г. виробництва, основи інформатики</p>
								</div>
							</div>
							<hr />
						</div>
						
						<h3>Циклова комісія дисциплін природничо-наукової підготовки</h3>
						<div className = "wrapper-person bg-ligthblue">
						<hr />
							<div className = "person">
								<div className = "foto-person">
									<img src="images/teachers-foto/Grycachenko.jpg" alt="Грицаченко Євгеній Григорович"/>
								</div>
								<div className = "about-person">
									<h3>Грицаченко<br />
										Євгеній<br />
										Григорович
									</h3>
									<h4>голова циклової комісії<br />
									спеціаліст І категорії</h4>
									<p>внутрішні незаразні хвороби, основи охорони праці, охорона праці в галузі</p>
								</div>
							</div>
							<hr />

							<div className = "person">
								<div className = "foto-person">
									<img src="images/teachers-foto/Lysenko.jpg" alt="Лисенко Євдокія Василівна"/>
								</div>
								<div className = "about-person">
									<h3>Лисенко<br />
										Євдокія<br />
										Василівна
									</h3>
									<h4>директор коледжу<br />
										спеціаліст вищої категорії</h4>
									<p>вступ до спеціальності</p>
								</div>
							</div>
							<hr />

							<div className = "person">
								<div className = "foto-person">
									<img src="images/teachers-foto/ZhaloI.jpg" alt="Жало Іван Іванович"/>
								</div>
								<div className = "about-person">
									<h3>Жало<br />
										Іван<br />
										Іванович
									</h3>
									<h4>завідувач ветеринарно-технологічного відділення<br />
										спеціаліст</h4>
									<p>гігієна тварин з основами ветеринарії; тваринництво, зоогігієна та ветеринарна санітарія; виробнича санітарія</p>
								</div>
							</div>
							<hr />

							<div className = "person">
								<div className = "foto-person">
									<img src="images/teachers-foto/Gonchar.jpg" alt="Гончар Ольга Іванівна"/>
								</div>
								<div className = "about-person">
									<h3>Гончар<br />
										Ольга<br />
										Іванівна
									</h3>
									<h4>спеціаліст вищої категорії</h4>
									<p>епізоотологія з мікробіологією</p>
								</div>
							</div>
							<hr />

							<div className = "person">
								<div className = "foto-person">
									<img src="images/teachers-foto/Lychkovska.jpg" alt="Личковська Іванна Валеріївна"/>
								</div>
								<div className = "about-person">
									<h3>Личковська<br />
										Іванна<br />
										Валеріївна
									</h3>
									<h4>спеціаліст І категорії</h4>
									<p>внутрішні незаразні хвороби, організація ветеринарної справи</p>
								</div>
							</div>
							<hr />

							<div className = "person">
								<div className = "foto-person">
									<img src="images/teachers-foto/Pavlova.jpg" alt="Павлова Ольга Олегівна"/>
								</div>
								<div className = "about-person">
									<h3>Павлова<br />
										Ольга<br />
										Олегівна
									</h3>
									<h4>спеціаліст І категорії</h4>
									<p>епізоотологія з мікробіологією</p>
								</div>
							</div>
							<hr />

							<div className = "person">
								<div className = "foto-person">
									<img src="images/teachers-foto/Kudrya.jpg" alt="Кудря Олександр Іванович"/>
								</div>
								<div className = "about-person">
									<h3>Кудря<br />
										Олександр<br />
										Іванович
									</h3>
									<h4>спеціаліст І категорії</h4>
									<p>хірургія</p>
								</div>
							</div>
							<hr />

							<div className = "person">
								<div className = "foto-person">
									<img src="images/teachers-foto/Paliyenko.jpg" alt="Палієнко Світлана Олександрівна"/>
								</div>
								<div className = "about-person">
									<h3>Палієнко<br />
										Світлана<br />
										Олександрівна
									</h3>
									<h4>спеціаліст І категорії</h4>
									<p>паразитологія</p>
								</div>
							</div>
							<hr />

							<div className = "person">
								<div className = "foto-person">
									<img src="images/teachers-foto/DemyanenkoV.jpg" alt="Дем'яненко Віталій Іванович"/>
								</div>
								<div className = "about-person">
									<h3>Дем'яненко<br />
										Віталій<br />
										Іванович
									</h3>
									<h4>спеціаліст І категорії</h4>
									<p>хірургія</p>
								</div>
							</div>
							<hr />

							<div className = "person">
								<div className = "foto-person">
									<img src="images/teachers-foto/DemyanenkoT.jpg" alt="Дем'яненко Тетяна Миколаївна"/>
								</div>
								<div className = "about-person">
									<h3>Дем'яненко<br />
										Тетяна<br />
										Миколаївна
									</h3>
									<h4>спеціаліст І категорії</h4>
									<p>акушерство</p>
								</div>
							</div>
							<hr />							
						</div>

						<h3>Циклова комісія дисциплін професійно-практичної підготовки</h3>
						<div className = "wrapper-person bg-ligthred">
						<hr />
							<div className = "person">
								<div className = "foto-person">
									<img src="images/teachers-foto/Gromova.jpg" alt="Громова Любов Василівна"/>
								</div>
								<div className = "about-person">
									<h3>Громова<br />
										Любов<br />
										Василівна
									</h3>
									<h4>голова циклової комісії<br />
									спеціаліст ІІ категорії</h4>
									<p>анатомія</p>
								</div>
							</div>
							<hr />

							<div className = "person">
								<div className = "foto-person">
									<img src="images/teachers-foto/Solovjova.jpg" alt="Соловйова Тамара Анатоліївна"/>
								</div>
								<div className = "about-person">
									<h3>Соловйова<br />
										Тамара<br />
										Анатоліївна
									</h3>
									<h4>заступник директора з навчальної роботи<br />
										спеціаліст вищої категорії</h4>
									<p>економіка сільського господарства, менеджмент</p>
								</div>
							</div>
							<hr />

							<div className = "person">
								<div className = "foto-person">
									<img src="images/teachers-foto/Kravchenko.jpg" alt="Кравченко Інна Іванівна"/>
								</div>
								<div className = "about-person">
									<h3>Кравченко<br />
										Інна<br />
										Іванівна
									</h3>
									<h4>спеціаліст ІІ категорії</h4>
									<p>зоогігієна</p>
								</div>
							</div>
							<hr />

							<div className = "person">
								<div className = "foto-person">
									<img src="images/teachers-foto/Chekan.jpg" alt="Чекан Алла Федорівна"/>
								</div>
								<div className = "about-person">
									<h3>Чекан<br />
										Алла<br />
										Федорівна
									</h3>
									<h4>спеціаліст ІІ категорії</h4>
									<p>економіка сільського господарства</p>
								</div>
							</div>
							<hr />

							<div className = "person">
								<div className = "foto-person">
									<img src="images/teachers-foto/Motronyuk.jpg" alt="Мотронюк Наталія Іванівна"/>
								</div>
								<div className = "about-person">
									<h3>Мотронюк<br />
										Наталія<br />
										Іванівна
									</h3>
									<h4>спеціаліст вищої категорії</h4>
									<p>анатомія</p>
								</div>
							</div>
							<hr />

							<div className = "person">
								<div className = "foto-person">
									<img src="images/teachers-foto/Sutula.jpg" alt="Сутула Вікторія Миколаївна"/>
								</div>
								<div className = "about-person">
									<h3>Сутула<br />
										Вікторія<br />
										Миколаївна
									</h3>
									<h4>спеціаліст вищої категорії</h4>
									<p>ветеринарна санітарія</p>
								</div>
							</div>
							<hr />						
						</div>

					</div>
				</div>

				<div className = "wrapper-block">
					<h2 className = "heading" onClick = { this.handleClick.bind(this, 5) }>Нормативно-правові документи про діяльність коледжу</h2>
					<div className={ this.state.open[5] ? "wrapper-text open-text" : "wrapper-text" }>
						<table className = "doc-teachers">
							<tbody>
								<tr>
									<td>Положення про адміністративну раду ЗКВМ БНАУ</td>
									<td>
										<br />
										<a href="downloads/college/admin_rada.pdf" target="_blank" rel="noreferrer noopener">Завантажити</a>
										<br />
										<br />
									</td>
								</tr>
								<tr>
									<td>Положення про відділ кадрів ЗКВМ БНАУ</td>
									<td>
										<br />
										<a href="downloads/college/viddil_kadriv.pdf" target="_blank" rel="noreferrer noopener">Завантажити</a>
										<br />
										<br />
									</td>
								</tr>
								<tr>
									<td>Положення про відкрите заняття ЗКВМ БНАУ</td>
									<td>
										<br />
										<a href="downloads/college/vidkryte_zanyattya.pdf" target="_blank" rel="noreferrer noopener">Завантажити</a>
										<br />
										<br />
									</td>
								</tr>
								<tr>
									<td>Положення про диплом з відзнакою ЗКВМ БНАУ</td>
									<td>
										<br />
										<a href="downloads/college/dyplom_z_vidznakoyu.pdf" target="_blank" rel="noreferrer noopener">Завантажити</a>
										<br />
										<br />
									</td>
								</tr>
								<tr>
									<td>Положення про ДПА у ЗКВМ БНАУ</td>
									<td>
										<br />
										<a href="downloads/college/dpa.pdf" target="_blank" rel="noreferrer noopener">Завантажити</a>
										<br />
										<br />
									</td>
								</tr>
								<tr>
									<td>Положення про золоту медаль</td>
									<td>
										<br />
										<a href="downloads/college/zolota_medal.pdf" target="_blank" rel="noreferrer noopener">Завантажити</a>
										<br />
										<br />
									</td>
								</tr>
								<tr>
									<td>Положення про методичний кабінет ЗКВМ БНАУ</td>
									<td>
										<br />
										<a href="downloads/college/methodcabinet.pdf" target="_blank" rel="noreferrer noopener">Завантажити</a>
										<br />
										<br />
									</td>
								</tr>
								<tr>
									<td>Положення про наставництво</td>
									<td>
										<br />
										<a href="downloads/college/nastavnyctvo.pdf" target="_blank" rel="noreferrer noopener">Завантажити</a>
										<br />
										<br />
									</td>
								</tr>
								<tr>
									<td>Положення про ОМК у ЗКВМ БНАУ</td>
									<td>
										<br />
										<a href="downloads/college/omk.pdf" target="_blank" rel="noreferrer noopener">Завантажити</a>
										<br />
										<br />
									</td>
								</tr>
								<tr>
									<td>Положення про оцінювання знань студентів</td>
									<td>
										<br />
										<a href="downloads/college/ocinyuvannya_znan.pdf" target="_blank" rel="noreferrer noopener">Завантажити</a>
										<br />
										<br />
									</td>
								</tr>
								<tr>
									<td>Положення про рейтингову систему оцінювання викладачів</td>
									<td>
										<br />
										<a href="downloads/college/reytynh_vykladacha.pdf" target="_blank" rel="noreferrer noopener">Завантажити</a>
										<br />
										<br />
									</td>
								</tr>
								<tr>
									<td>Положення про творчу групу в системі науково-методичної роботи</td>
									<td>
										<br />
										<a href="downloads/college/tvorcha_grupa.pdf" target="_blank" rel="noreferrer noopener">Завантажити</a>
										<br />
										<br />
									</td>
								</tr>
								<tr>
									<td>Положення про школу викладача-початківця</td>
									<td>
										<br />
										<a href="downloads/college/shkola_vykladacha_pochatkivcya.pdf" target="_blank" rel="noreferrer noopener">Завантажити</a>
										<br />
										<br />
									</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>


			</section>
		)
	}
}

export default College;