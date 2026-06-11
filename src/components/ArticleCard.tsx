import { Link } from 'react-router-dom';
import type { ArticleMeta } from '../types';
import { format } from 'date-fns';
import { zhCN } from 'date-fns/locale';
import './ArticleCard.css';

interface ArticleCardProps {
  article: ArticleMeta;
}

export const ArticleCard = ({ article }: ArticleCardProps) => {
  const formattedDate = format(new Date(article.date), 'yyyy年MM月dd日', { locale: zhCN });

  return (
    <article className="article-card">
      <Link to={`/article/${article.slug}`} className="article-card-link">
        <div className="article-card-content">
          <div className="article-header-info">
            <div className="article-author-info">
              {article.avatar && (
                <img src={article.avatar} alt={article.author} className="author-avatar-img" />
              )}
              <span className="article-author-name">{article.author}</span>
            </div>
            <span className="article-date">{formattedDate}</span>
          </div>

          <h2 className="article-title">{article.title}</h2>

          <p className="article-excerpt">{article.excerpt}</p>

          <div className="article-footer">
            <div className="article-tags">
              {article.tags.slice(0, 3).map(tag => (
                <span key={tag} className="tag">
                  #{tag}
                </span>
              ))}
            </div>

            <span className="read-time">📖 {article.readTime} min</span>
          </div>
        </div>
      </Link>
    </article>
  );
};
