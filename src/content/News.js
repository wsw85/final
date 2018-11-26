import React from 'react';
import './csscontent/news.css';

class News extends React.Component {
	state = {
		popupOpen: false,
		newsId: '',
		countNews: 0,
		buttonsNewsSelect: 0,
		data: null
	}

	componentDidMount() {
		fetch('news/news.json').then(response => response.json()).then(json => {
			this.setState({ data: json });
		});
	}

	arrayNews = () => {		
		var arr = [];
		for (var prop in this.state.data) {
    		arr.push(this.state.data[prop]);
		}
		arr.reverse();
		var mass = [];
		var j = 0;
		for (var i = this.state.countNews*10; i < this.state.countNews*10+10; i++){
			if (arr[i] !== undefined) {
			mass[j] = arr[i];
			j++;
			} else break;
		}
		return mass.map(item =>
				<article key={item.id} className = "news-article">
					<div key={item.id+"foto"} className = "news-wrapper-img">
						<img src = {'news/news'+item.id+'/foto1.jpg'} alt = {item+'/foto1.jpg'} />						
					</div>
					<div className = "wrapper-header-article">
						<h3 key={item.id+"title"}>{item.headerNews}</h3>
						<button onClick = { this.openPopup.bind(this, item) }>Читати</button>
					</div>
				</article>
				)		
	}

	pageNews = (index) => {		
		this.setState({countNews: index, buttonsNewsSelect: index});		
	}

	showImages = () => {
		var item = this.state.newsId.countPictures;
		var picarray = [];
		for (var i = 0; i < item; i++) {
			picarray[i] = 'news/news'+[this.state.newsId.id]+'/foto'+[i+1];
		}	
		return picarray.map(index => <img key = {index} src = {index+'.jpg'} alt = {index} />)
	}
							
	showButtons = () => {
		var arrayButtons = [];
		if (this.state.data !== null) {
			var countButtons = Math.floor(Object.keys(this.state.data).length / 10);
			countButtons += 1;
			for (var i = 0; i < countButtons; i++) {
				arrayButtons[i] = i;
			}}
			return arrayButtons.map(index => <button key = {index} className = { index === this.state.buttonsNewsSelect ? "buttons-news-select" : ""} onClick = { this.pageNews.bind(this, index) }>{index+1}</button>)
		}

	openPopup = (index) => {
		var open = this.state.popupOpen;
		open = !open;
		this.setState({popupOpen: open, newsId: index});
	}

  render() {
    return (
    <section className = "content-section">
		<h2 className = "heading-library">Новини коледжу</h2>		
			{this.arrayNews()}

		<div className={ this.state.popupOpen ? "popup show-popup" : "popup" }>
			<button onClick = { this.openPopup.bind(this, '') }>X</button>

			<div className = "full-news">
				<h3>{this.state.newsId.headerNews}</h3>
				<p>{this.state.newsId.textNews}</p>
				<div className = "wrapper-allimg-news">{this.showImages()}</div>
			</div>
		</div>
		<div className = "list-buttons-news">
			{this.showButtons()}
		</div>
	</section>
		)
	}
}

export default News;