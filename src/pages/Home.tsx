import { useState, useMemo } from 'react';
import { ArticleCard } from '../components/ArticleCard';
import { SearchBar } from '../components/SearchBar';
import { CategoryGrid } from '../components/CategoryGrid';
import { Sidebar } from '../components/Sidebar';
import { getArticles, searchArticles } from '../utils/articles';
import './Home.css';

export const Home = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const articles = useMemo(() => {
    if (searchQuery) {
      return searchArticles(searchQuery);
    }
    return getArticles();
  }, [searchQuery]);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">
            DevHub <span className="gradient-text">技术社区</span>
          </h1>
          <p className="hero-subtitle">
            开放的技术分享平台，汇聚全球开发者的智慧与经验
          </p>
        </div>
      </section>

      <div className="container">
        <div className="search-section">
          <SearchBar onSearch={handleSearch} placeholder="搜索文章、作者、技术标签..." />
        </div>

        {!searchQuery && (
          <>
            <section className="section">
              <div className="section-header">
                <h2 className="section-title">技术分区</h2>
                <p className="section-subtitle">探索不同的技术领域</p>
              </div>
              <CategoryGrid />
            </section>

            <section className="section">
              <div className="section-header">
                <h2 className="section-title">最新文章</h2>
                <p className="section-subtitle">社区最新的技术分享</p>
              </div>
            </section>
          </>
        )}

        {searchQuery && (
          <div className="results-info">
            <p className="search-results">
              找到 <strong>{articles.length}</strong> 篇关于 "<strong>{searchQuery}</strong>" 的文章
            </p>
          </div>
        )}

        <div className="content-layout">
          <div className="main-content-area">
            {articles.length > 0 ? (
              <div className="articles-grid">
                {articles.map(article => (
                  <ArticleCard key={article.id} article={article} />
                ))}
              </div>
            ) : (
              <div className="no-results">
                <p className="no-results-icon">🔍</p>
                <h3>没有找到相关文章</h3>
                <p>尝试使用其他关键词或浏览所有文章</p>
                <button
                  className="reset-button"
                  onClick={() => setSearchQuery('')}
                >
                  重置搜索
                </button>
              </div>
            )}
          </div>

          {!searchQuery && (
            <div className="sidebar-area">
              <Sidebar />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
