import React from 'react';
import { withRouter } from 'react-router-dom';
import ArticlesList from '../components/ArticlesList';
import articleContent from './article-content';
import NotFoundPage from './NotFoundPage';

const ArticlePage = ({ match })=> {
    const name = match.params.name;
    const article = articleContent.find(article =>article.name === name);

    //NotFoundPage로 대체했음
    // if(!article) return <h1> No Article </h1>
    if(!article) return <NotFoundPage />

    const otherArticles = articleContent.filter(article => article.name !== name);

    return(
        <>
            <h1>{article.title} </h1>
                {article.picture.map((src, key) => (
                    <img src={src} width={500} height={800}  key={key} alt="cat"/>
                ))}
                {article.content.map((paragraph, key) => (
                <p key={key}>{paragraph}</p>
            ))}
            
            <h3>Other Stories</h3>
            <ArticlesList articles={otherArticles} />
        </>
    )
}
export default withRouter(ArticlePage);