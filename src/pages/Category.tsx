import { useParams } from 'react-router-dom';
import { ArticleCard } from '../components/ArticleCard';
import { Sidebar } from '../components/Sidebar';
import { getArticlesByCategory } from '../utils/articles';
import { getCategoryBySlug } from '../utils/categories';
import './Category.css';

export const Category = () => {
  const { category } = useParams<{ category: string }>();
  const categoryInfo = getCategoryBySlug(category || '');
  const articles = categoryInfo ? getArticlesByCategory(categoryInfo.name) : [];

  if (!categoryInfo) {
    return (
      <div className="category-not-found">
        <div className="not-found-content">
          <h1>😕</h1>
          <h2>分类未找到</h2>
          <p>抱歉，您访问的分类不存在</p>
        </div>
      </div>
    );
  }

  return (
    <div className="category-page">
      <div className="category-hero">
        <div className="category-hero-content">
          <div className="category-icon-large">{categoryInfo.icon}</div>
          <h1 className="category-title">{categoryInfo.name}</h1>
          <p className="category-description">{categoryInfo.description}</p>
          <div className="category-stats">
            <span className="stat-item">{articles.length} 篇文章</span>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="content-layout">
          <div className="main-content-area">
            {articles.length > 0 ? (
              <div className="articles-grid">
                {articles.map(article => (
                  <ArticleCard key={article.id} article={article} />
                ))}
              </div>
            ) : (
              <div className="no-articles">
                <p className="no-articles-icon">📝</p>
                <h3>暂无文章</h3>
                <p>这个分类还没有文章，欢迎成为第一个贡献者！</p>
              </div>
            )}
          </div>

          <div className="sidebar-area">
            <Sidebar />
          </div>
        </div>
      </div>
    </div>
  );
};
