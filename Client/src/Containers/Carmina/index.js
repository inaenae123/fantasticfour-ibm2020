import React, {Component} from 'react';
import styles from './styles.module.css';
import newsapi from 'newsapi';
import 'semantic-ui-css/semantic.min.css';
import { Card } from 'semantic-ui-react';

class Carmina extends Component{
    
    state = {
        cards: [
            {
              header: 'Conservative News Sources',
              description:
                'News sources that skew towards the right wing',
              id: '0',
              color: 'grey'
            },
            {
              header: 'Liberal News Sources',
              description:
                'News sources that skew towards the left wing',
              id: '1',
              color:'grey'
            }
          ],
        liberalSources: [
            {
                header: 'MSNBC',
                image: 'https://upload.wikimedia.org/wikipedia/commons/7/74/MSNBC_logo.png'
            },
            {
                header: 'Vice News',
                image: 'https://company.vice.com/wp-content/uploads/2019/09/VICE-News-Black-1.png'
            },
            {
                header: 'The Huffington Post',
                image:'https://i1.wp.com/heatherdauphiny.com/wp-content/uploads/2017/04/HUFFPOST-LOGO-670x326.png?resize=670%2C326&ssl=1'
            },
            {
                header: 'CNN',
                image: 'https://upload.wikimedia.org/wikipedia/commons/b/b1/CNN.svg'
            }
        ],
        conservativeSources: [
            {
                header: 'The Wall Street Journal',
                image: 'https://s.wsj.net/img/meta/wsj-social-share.png'
            },
            {
                header: 'The Washington Times',
                image: 'https://twt-thumbs.washtimes.com/media/image/2019/01/02/Black_TWT_logo_s878x461.jpg?1af8c0f7858f82aaadbdedffe85452a765671545'
            },
            {
                header: 'Breitbart News',
                image: 'https://www.thewrap.com/wp-content/uploads/2016/11/Breitbart-logo-618x400.jpg'
            },
            {
                header: 'Fox News',
                image: 'https://d12jofbmgge65s.cloudfront.net/blog/wp-content/uploads/2019/04/Fox-news-logo.png'
            }
        ],
        chosenSource: [],
        newsArticles: []
    }

    changeOnClickHandler = (cardIndex) => {
        const cards = [...this.state.cards];
        if (cardIndex === 0) {
            cards[0].color = 'red';
            cards[1].color = 'grey';
        }
        if (cardIndex === 1) {
            cards[1].color = 'red'
            cards[0].color = 'grey'
        }
        this.setState({cards: cards});
    };

    displaySources = (cardIndex) => {
        if (cardIndex === 0) {
            let cards = [...this.state.conservativeSources];
            this.setState({chosenSource: cards});
        }
        if (cardIndex === 1) {
            let cards = [...this.state.liberalSources];
            this.setState({chosenSource: cards});
        }
    };

    fetchData = (i) => {
        const newsURL = 'https://newsapi.org/v2/top-headlines?sources=';
        const apiKey = '&apiKey=25dbca1a86c349c98794289cff1fd499'; 
        const source = this.state.chosenSource[i].header.toLowerCase().split(" ").join("-");
        const newSource = newsURL + source + apiKey;
        console.log(newSource);
        fetch(newSource).then(resp => resp.json()).then(data => {
            let resultArray = [];
            for (let i = 0; i < data.articles.length; i++) {
                let title = data.articles[i].title;
                let description = data.articles[i].description;
                let href  = data.articles[i].url;
                let image = data.articles[i].urlToImage;
                let article = {
                    title: title,
                    description: description,
                    href: href,
                    image: image
                }
                resultArray.push(article);
            }
            this.setState({newsArticles: resultArray});
        })
    };

    render(){
        const style = {
            cursor: 'pointer',
            display: 'inline-block',
            margin: '20px',
        }

        return(
            <div className="informed" style={styles}>
                <h1 style={{paddingTop: '20px'}}>I Want to Be More Informed</h1>
                <h3>Choose a side to look at:</h3>
                {this.state.cards.map((card, index) => {
                    return <Card centered
                    onClick={()=> {
                        this.changeOnClickHandler(index);
                        this.displaySources(index);
                    }}
                    header={card.header}
                    description={card.description}
                    key={index}
                    color={card.color}
                    style={style} />
                })}
                <div className="sources">
                    {this.state.chosenSource.map((chosenSource, index) => {
                        return <Card centered
                        header={chosenSource.header}
                        image={chosenSource.image}
                        key={index}
                        style={style}
                        onClick ={(event => this.fetchData(index))} 
                        />
                    })}
                </div>
                <div className="articles">
                    {this.state.newsArticles.map((article, index) => {
                        return <Card centered
                        header={article.title}
                        description={article.description}
                        image={article.image}
                        href={article.href}
                        key={index}
                        style={style} 
                        />
                    })}
                </div>
            </div>
        )
    }
}
export default Carmina;