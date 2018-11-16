import React from 'react';
class Home extends React.Component {
  render() {
    return (
    		<section className="content-section">
				<ul className="list-section">
					<li><span onClick={() => {
						this.props.updateData(1);
						}}>						
							<div className="link-card">
						    	<div className="clip-img">
						    		<img src="images/icons/college.png" alt="college" />
								</div>
						    	<span>Про коледж</span>
						    </div>					
						</span>
					</li>
					<li><span onClick={() => {
						this.props.updateData(2);
						}}>						
							<div className="link-card">
								<div className="clip-img">
						    	<img src="images/icons/entrant.png" alt="entrant" />
						    	</div>
						    	<span>Абітурієнту</span>
						    </div>						
						</span>
					</li>
					<li><span>						
							<div className="link-card">
								<div className="clip-img">
						    	<img src="images/icons/student.png" alt="student" />
						    	</div>
						    	<span>Студенту</span>
						    </div>						
						</span>
					</li>
					<li><span>						
							<div className="link-card">
								<div className="clip-img">
						    	<img src="images/icons/teachers.png" alt="teacher" />
						    	</div>
						    	<span>Викладачу</span>
						    </div>						
						</span>
					</li>
					<li><span>						
							<div className="link-card">
								<div className="clip-img">
						    	<img src="images/icons/news.png" alt="news" />
						    	</div>
						    	<span>Новини</span>
						    </div>						
						</span>
					</li>
					<li><span>						
							<div className="link-card">
								<div className="clip-img">
						    	<img src="images/icons/accounting.png" alt="counting house" />
						    	</div>
						    	<span>Бухгалтерія</span>
						    </div>						
						</span>
					</li>	
					<li><span>						
							<div className="link-card">
								<div className="clip-img">
						    	<img src="images/icons/methodical_cabinet.png" alt="methodica cabinet" />
						    	</div>
						    	<span>Методичний кабінет</span>
						    </div>						
						</span>
					</li>
					<li><span>						
							<div className="link-card">
								<div className="clip-img">
						    	<img src="images/icons/library.png" alt="books" />
						    	</div>
						    	<span>Електронні підручники</span>
						    </div>						
						</span>
					</li>
					<li><span>						
							<div className="link-card">
								<div className="clip-img">
						    	<img src="images/icons/zno.png" alt="zno" />
						    	</div>
						    	<span>ЗНО</span>
						    </div>						
						</span>
					</li>
					<li><span>						
							<div className="link-card">
								<div className="clip-img">
						    	<img src="images/icons/teacher_sites.png" alt="teachers site" />
						    	</div>
						    	<span>Сайти викладачів</span>
						    </div>						
						</span>
					</li>
					<li><span>						
							<div className="link-card">
								<div className="clip-img">
						    	<img src="images/icons/adress.png" alt="adress" />
						    </div>
						    	<span>Наша адреса</span>
						    </div>						
						</span>
					</li>
					<li></li>											
				</ul>
			</section>
     	)
	}
}

export default Home;