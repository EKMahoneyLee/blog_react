import React from 'react';
import { withRouter } from 'react-router-dom';
import ArticlesList from '../components/ArticlesList';
import articleContent from "./article-content";

const ArticlesListPage = ()=> (
    <>
        <h1> Stories</h1>
        <ArticlesList articles={ articleContent } />
    </>
)
export default withRouter(ArticlesListPage);