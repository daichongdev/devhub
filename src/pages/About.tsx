import './About.css';

export const About = () => {
  return (
    <div className="about-page">
      <div className="about-container">
        <div className="about-header">
          <h1 className="about-title">关于我们</h1>
          <p className="about-subtitle">致力于分享高质量的技术内容</p>
        </div>

        <div className="about-content">
          <section className="about-section">
            <div className="section-icon">🎯</div>
            <h2>我们的使命</h2>
            <p>
              我们致力于创建一个高质量的技术博客平台，分享前端开发、性能优化、最佳实践等领域的专业知识。
              我们相信通过分享和交流，可以帮助更多开发者提升技术水平，推动整个技术社区的进步。
            </p>
          </section>

          <section className="about-section">
            <div className="section-icon">💡</div>
            <h2>内容方向</h2>
            <ul className="content-list">
              <li><strong>前端开发</strong> - React、Vue、TypeScript 等现代前端技术</li>
              <li><strong>性能优化</strong> - Web 性能优化、Core Web Vitals</li>
              <li><strong>工程实践</strong> - 代码规范、架构设计、最佳实践</li>
              <li><strong>技术趋势</strong> - 追踪和分析最新的技术发展趋势</li>
            </ul>
          </section>

          <section className="about-section">
            <div className="section-icon">🚀</div>
            <h2>技术栈</h2>
            <p>本博客使用现代化的技术栈构建：</p>
            <div className="tech-stack">
              <span className="tech-badge">React 18</span>
              <span className="tech-badge">TypeScript</span>
              <span className="tech-badge">Vite</span>
              <span className="tech-badge">React Router</span>
              <span className="tech-badge">React Markdown</span>
            </div>
          </section>

          <section className="about-section">
            <div className="section-icon">📧</div>
            <h2>联系我们</h2>
            <p>
              如果您有任何问题、建议或合作意向，欢迎通过以下方式联系我们：
            </p>
            <div className="contact-info">
              <a href="mailto:daichongdev@gmail.com" className="contact-link">
                📮 contact@techblog.com
              </a>
              <a href="https://github.com/daichongdev/devhub" className="contact-link" target="_blank" rel="noopener noreferrer">
                💻 GitHub
              </a>
              <a href="https://twitter.com" className="contact-link" target="_blank" rel="noopener noreferrer">
                🐦 Twitter
              </a>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};
