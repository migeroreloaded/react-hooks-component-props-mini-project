import React from 'react';

function Article({ title, date = "January 1, 1970", preview, minutes }) {
  const emojis = minutes < 30 ? '☕️'.repeat(Math.ceil(minutes / 5)) : '🍱'.repeat(Math.ceil(minutes / 10));
  return (
    <article>
      <h3>{title}</h3>
      <small>{date}</small>
      <p>{preview}</p>
      <small>{emojis} {minutes} min read</small>
    </article>
  );
}

export default Article;
