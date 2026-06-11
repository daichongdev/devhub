import { useParams, useNavigate } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';
import { getArticleBySlug } from '../utils/articles';
import { format } from 'date-fns';
import { zhCN } from 'date-fns/locale';
import './Article.css';
import 'highlight.js/styles/vs2015.css';

export const Article = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const article = slug ? getArticleBySlug(slug) : undefined;

  if (!article) {
    return (
      <div className="article-not-found">
        <div className="not-found-content">
          <h1>😕</h1>
          <h2>文章未找到</h2>
          <p>抱歉，您访问的文章不存在</p>
          <button onClick={() => navigate('/')} className="back-button">
            返回首页
          </button>
        </div>
      </div>
    );
  }

  const formattedDate = format(new Date(article.date), 'yyyy年MM月dd日', { locale: zhCN });

  return (
    <div className="article-page">
      <article className="article-container">
        <header className="article-header">
          <div className="article-meta-bar">
            <span className="article-category-badge">{article.category}</span>
            <span className="article-read-time">📖 {article.readTime} 分钟阅读</span>
          </div>

          <h1 className="article-page-title">{article.title}</h1>

          <div className="article-info">
            <div className="article-author">
              <span className="author-avatar">👤</span>
              <span className="author-name">{article.author}</span>
            </div>
            <span className="article-divider">•</span>
            <time className="article-page-date">{formattedDate}</time>
          </div>

          <div className="article-tags-list">
            {article.tags.map(tag => (
              <span key={tag} className="article-tag">
                #{tag}
              </span>
            ))}
          </div>
        </header>

        <div className="article-content">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeHighlight]}
            components={{
              h1: ({ node, ...props }) => <h1 className="content-h1" {...props} />,
              h2: ({ node, ...props }) => <h2 className="content-h2" {...props} />,
              h3: ({ node, ...props }) => <h3 className="content-h3" {...props} />,
              p: ({ node, ...props }) => <p className="content-p" {...props} />,
              code: ({ node, className, children, ...props }: any) => {
                const inline = !className;

                return inline ? (
                  <code className="inline-code" {...props}>{children}</code>
                ) : (
                  <code className={className} {...props}>{children}</code>
                );
              },
              pre: ({ node, ...props }) => <pre className="pre-block" {...props} />,
              ul: ({ node, ...props }) => <ul className="content-ul" {...props} />,
              ol: ({ node, ...props }) => <ol className="content-ol" {...props} />,
              li: ({ node, ...props }) => <li className="content-li" {...props} />,
              blockquote: ({ node, ...props }) => <blockquote className="content-blockquote" {...props} />,
              a: ({ node, ...props }) => (
                <a className="content-link" target="_blank" rel="noopener noreferrer" {...props} />
              ),
            }}
          >
            {article.content}
          </ReactMarkdown>
        </div>

        <footer className="article-footer-section">
          <button onClick={() => navigate('/')} className="back-home-button">
            ← 返回首页
          </button>
        </footer>
      </article>
    </div>
  );
};
