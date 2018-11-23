import React from 'react';
import data from './news.json';
import './csscontent/news.css';



// {printkey(item).map(item =>
// 							<img src = {item+'.png'} />
// 							)}

class News extends React.Component {
	state = {
		popupOpen: false,
		newsId: ''
	}

	showImages = () => {
		//var picarray = [];
		var item = this.state.newsId.countPictures;
		var picarray = [];
		console.log(item);
		for (var i = 0; i < item; i++) {
			picarray[i] = 'news/news'+[this.state.newsId.id]+'/foto'+[i+1];
		}	
		console.log(picarray);
		return picarray.map(index => <img src = {index+'.jpg'} alt = {index} />)
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
			{Object.keys(data).reverse().map(item =>
				<article key={data[item].id} className = "news-article">
					<div key={data[item].id+"foto"} className = "news-wrapper-img">
						<img src = {'news/'+item+'/foto1.jpg'} alt = {item+'/foto1.jpg'} />						
					</div>
					<div className = "wrapper-header-article">
						<h3 key={data[item].id+"title"}>{data[item].headerNews}</h3>
						<button onClick = { this.openPopup.bind(this, data[item]) }>Читати</button>
					</div>
				</article>
				)			
			}

		<div className={ this.state.popupOpen ? "popup show-popup" : "popup" }>
			<button onClick = { this.openPopup.bind(this) }>X</button>

			<div className = "full-news">
				<h3>{this.state.newsId.headerNews}</h3>
				<p>{this.state.newsId.textNews}</p>
				<div className = "wrapper-allimg-news">{this.showImages()}</div>
			</div>
		</div>
		
	</section>
		)
	}
}

export default News;