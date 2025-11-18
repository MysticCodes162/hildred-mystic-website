const postsContainer = document.getElementById('posts');

function addPost(){
  const content = document.getElementById('content').value.trim();
  if(!content) return;

  const post = document.createElement('article');
  post.className = 'post';
  post.innerHTML = `
    <div class="post-title">
      <div class="title-left">
        <strong>Hildred Mathews</strong>
        <div class="meta">Now • Creative Writer</div>
      </div>
      <div class="reactions">✨ <span class="count">0</span></div>
    </div>
    <div class="body">${escapeHtml(content)}</div>
    <div class="post-actions">
      <button onclick="react(this)">Like</button>
      <button onclick="comment(this)">Comment</button>
    </div>
  `;

  postsContainer.prepend(post);
  document.getElementById('content').value = '';
}

function react(btn){
  const countEl = btn.parentElement.parentElement.querySelector('.count');
  let n = Number(countEl.textContent||0);
  n++;
  countEl.textContent = n;
}

function comment(btn){
  const area = document.createElement('div');
  area.innerHTML = `<input placeholder="Write a comment..." onkeydown="if(event.key==='Enter'){postComment(this)}"/>`;
  btn.parentElement.appendChild(area);
  area.querySelector('input').focus();
}

function postComment(input){
  const text = input.value.trim();
  if(!text) return;
  const com = document.createElement('div');
  com.textContent = 'You: '+text;
  input.parentElement.appendChild(com);
  input.remove();
}

function escapeHtml(str){
  return str.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
}
