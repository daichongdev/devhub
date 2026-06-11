import Giscus from '@giscus/react';
import './Comments.css';

export const Comments = () => {
  return (
    <div className="comments-section">
      <h2 className="comments-title">💬 评论讨论</h2>
      <Giscus
        id="comments"
        repo="daichongdev/devhub"
        repoId="R_kgDOS3NWGQ"
        category="General"
        categoryId="DIC_kwDOS3NWGc4C-8FK"
        mapping="pathname"
        strict="0"
        reactionsEnabled="1"
        emitMetadata="0"
        inputPosition="top"
        theme="light"
        lang="zh-CN"
        loading="lazy"
      />
    </div>
  );
};
