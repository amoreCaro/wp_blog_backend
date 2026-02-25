export function estimateSinglePostReadTime() {
  const post = document.querySelector('.single-post');
  const readTimeEl = document.querySelector('.post__read-time');

  // ❗ Якщо потрібних елементів нема — просто виходимо
  if (!post || !readTimeEl) return;

  // Text calculation
  const text = post.innerText || '';
  const words = text.trim().split(/\s+/).filter(Boolean).length;
  const readingSpeed = 200; // words per minute
  let timeMinutes = words / readingSpeed;

  // Images calculation
  const images = post.querySelectorAll('img').length;
  const imageTime = images * 10; // 10 seconds per image
  timeMinutes += imageTime / 60;

  // Round to nearest minute (мінімум 1 хв)
  const roundedTime = Math.max(1, Math.round(timeMinutes));

  // Update UI
  readTimeEl.textContent = `${roundedTime} min read`;
}
