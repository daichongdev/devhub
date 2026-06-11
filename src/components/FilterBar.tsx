import { getAllCategories, getAllTags } from '../utils/articles';
import './FilterBar.css';

interface FilterBarProps {
  selectedCategory: string;
  selectedTag: string;
  onCategoryChange: (category: string) => void;
  onTagChange: (tag: string) => void;
}

export const FilterBar = ({
  selectedCategory,
  selectedTag,
  onCategoryChange,
  onTagChange,
}: FilterBarProps) => {
  const categories = getAllCategories();
  const tags = getAllTags();

  return (
    <div className="filter-bar">
      <div className="filter-section">
        <h3 className="filter-title">分类</h3>
        <div className="filter-buttons">
          <button
            className={`filter-button ${selectedCategory === '' ? 'active' : ''}`}
            onClick={() => onCategoryChange('')}
          >
            全部
          </button>
          {categories.map(category => (
            <button
              key={category}
              className={`filter-button ${selectedCategory === category ? 'active' : ''}`}
              onClick={() => onCategoryChange(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="filter-section">
        <h3 className="filter-title">标签</h3>
        <div className="filter-buttons">
          <button
            className={`filter-button ${selectedTag === '' ? 'active' : ''}`}
            onClick={() => onTagChange('')}
          >
            全部
          </button>
          {tags.map(tag => (
            <button
              key={tag}
              className={`filter-button ${selectedTag === tag ? 'active' : ''}`}
              onClick={() => onTagChange(tag)}
            >
              #{tag}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
