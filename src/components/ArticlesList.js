import React from 'react';
import { withRouter , Link} from 'react-router-dom';


const ArticlesList = ({ articles }) => (
    <>
        {articles.map((article, key) => (
            <Link className="article-list-item" key={key} to={`/${article.name}`}>
                <h3> {article.title}</h3>
                <p>{article.content[0].substring(0, 150)}...</p>
            </Link> 
        ))}
    </>
);

export default withRouter(ArticlesList);