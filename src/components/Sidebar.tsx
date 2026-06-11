import { getRecentArticles } from '../utils/articles';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';
import { zhCN } from 'date-fns/locale';
import './Sidebar.css';

export const Sidebar = () => {
  const recentArticles = getRecentArticles(5);

  return (
    <aside className="sidebar">
      <section className="sidebar-section">
        <h3 className="sidebar-title">最新文章</h3>
        <div className="recent-articles">
          {recentArticles.map(article => {
            const formattedDate = format(new Date(article.date), 'MMM dd', { locale: zhCN });
            return (
              <Link
                key={article.id}
                to={`/article/${article.slug}`}
                className="recent-article-item"
              >
                <div className="recent-article-info">
                  <h4 className="recent-article-title">{article.title}</h4>
                  <div className="recent-article-meta">
                    <span className="recent-article-author">{article.author}</span>
                    <span className="recent-article-date">{formattedDate}</span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="sidebar-section">
        <h3 className="sidebar-title">关于平台</h3>
        <p className="sidebar-text">
          DevHub 是一个开放的技术分享平台，开发者可以在不同的技术领域创建和分享博客内容。
        </p>
        <Link to="/about" className="sidebar-link">
          了解更多 →
        </Link>
      </section>

      <section className="sidebar-section">
        <h3 className="sidebar-title">贡献内容</h3>
        <p className="sidebar-text">
          只需在对应技术分区文件夹下添加 Markdown 文件，即可发布你的技术文章。
        </p>
        <a
          href="https://blog.daichongweb.com/article/devhub-how_to_add_article"
          className="sidebar-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          查看贡献指南 →
        </a>
      </section>
    </aside>
  );
};
