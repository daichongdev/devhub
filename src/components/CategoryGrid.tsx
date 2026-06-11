import { Link } from 'react-router-dom';
import { categories } from '../utils/categories';
import { getCategoryStats } from '../utils/articles';
import './CategoryGrid.css';

export const CategoryGrid = () => {
  const stats = getCategoryStats();

  // 更新分类计数
  const categoriesWithCount = categories.map(cat => ({
    ...cat,
    count: stats[cat.name] || 0,
  }));

  return (
    <div className="category-grid">
      {categoriesWithCount.map(category => (
        <Link
          key={category.slug}
          to={`/category/${category.slug}`}
          className="category-card"
        >
          <div className="category-icon">{category.icon}</div>
          <h3 className="category-name">{category.name}</h3>
          <p className="category-description">{category.description}</p>
          <div className="category-count">{category.count} 篇文章</div>
        </Link>
      ))}
    </div>
  );
};
