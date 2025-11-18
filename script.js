const postsContainer = document.getElementById('posts');

function addPost() {
  const title = document.getElementById('title').value.trim();
  const content = document.getElementById('content').value.trim();

  if (!title || !content) return;

  const post = document.createElement('div');
  post.className = 'post';

  post.innerHTML = `
    <div class="post-title" onclick="this.nextElementSibling.style.display = this.nextElementSibling.style.display === 'block' ? 'none' : 'block'">${title}</div>
    <div class="post-content">${content}</div>
  `;

  postsContainer.prepend(post);

  document.getElementById('title').value = '';
  document.getElementById('content').value = '';
}
