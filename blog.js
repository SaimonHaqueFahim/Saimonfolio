const posts = [
  { id: 1, title: "Mastering React Hooks in 2025", excerpt: "Deep dive into the latest patterns...", date: "Nov 20, 2025", readTime: "7 min", category: "web-dev", tags: ["React", "JavaScript"], thumb: "images/blog-images/mastering-react.png" },
  { id: 2, title: "End-to-End Testing with Selenium & Jenkins", excerpt: "My real-world CI/CD pipeline at AeroTrip...", date: "Nov 15, 2025", readTime: "10 min", category: "sqa", tags: ["Selenium", "Jenkins"], thumb: "images/blog-images/End-to-End.png" },
  { id: 3, title: "How I Reduced Sprint Delays by 40%", excerpt: "Jira workflows that actually work...", date: "Nov 10, 2025", readTime: "6 min", category: "pm", tags: ["Jira", "Agile"], thumb: "images/blog-images/sprint.png" },
  { id: 4, title: "Building Design Systems in Figma", excerpt: "From zero to scalable UI library...", date: "Nov 5, 2025", readTime: "8 min", category: "uiux", tags: ["Figma", "Design System"], thumb: "images/blog-images/design-system.png" },
  { id: 5, title: "Tailwind CSS Best Practices 2025", excerpt: "Tips from building 15+ production sites...", date: "Oct 30, 2025", readTime: "9 min", category: "web-dev", tags: ["Tailwind", "Performance"], thumb: "images/blog-images/neon-tailwind.png" },
  { id: 6, title: "Risk-Based Testing Strategy", excerpt: "Focus where it matters most...", date: "Oct 25, 2025", readTime: "5 min", category: "sqa", tags: ["Testing", "Strategy"], thumb: "images/blog-images/risk.png" },
  // Add more later...
];

const container = document.getElementById('posts-container');
const tabs = document.querySelectorAll('.tab-btn');

function renderPosts(filter = 'all') {
  container.innerHTML = '';
  const filtered = filter === 'all' ? posts : posts.filter(p => p.category === filter);
  
  filtered.forEach(post => {
    const card = document.createElement('a');
    card.href = `post.html?id=${post.id}`;
    card.className = 'blog-card block';
    card.innerHTML = `
      <img src="${post.thumb}" alt="${post.title}" onerror="this.src='images/blog/placeholder.jpg'">
      <div class="content">
        <h3 class="neon-glow">${post.title}</h3>
        <div class="meta">${post.date} • ${post.readTime} read</div>
        <p class="text-gray-400">${post.excerpt}</p>
        <div class="tags">
          ${post.tags.map(t => `<span class="tag">${t}</span>`).join('')}
        </div>
      </div>
    `;
    container.appendChild(card);
  });
}

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    tabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    renderPosts(tab.dataset.category);
  });
});

renderPosts(); // Initial load