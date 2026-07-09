function formatVideo(id) {
  if (!id) {
    return '<div class="showcase-video"><span>No verification video linked yet</span></div>';
  }
  return `<div class="showcase-video"><iframe src="https://www.youtube.com/embed/${id}" allowfullscreen></iframe></div>`;
}

function renderSidebar(activeRank) {
  const list = document.getElementById("demon-list");
  list.innerHTML = DEMONLIST.map(demon => `
    <div class="demon-item ${demon.rank === activeRank ? "active" : ""}" data-rank="${demon.rank}">
      <span class="rank">#${demon.rank}</span>
      <span class="name">${demon.name}</span>
    </div>
  `).join("");

  list.querySelectorAll(".demon-item").forEach(item => {
    item.addEventListener("click", () => {
      const rank = parseInt(item.dataset.rank, 10);
      renderShowcase(rank);
      renderSidebar(rank);
      item.scrollIntoView({ block: "nearest" });
    });
  });
}

function renderShowcase(rank) {
  const demon = DEMONLIST.find(d => d.rank === rank);
  const showcase = document.getElementById("showcase");
  if (!demon) return;

  const records = demon.records.slice().sort((a, b) => b.percent - a.percent);
  const recordRows = records.length
    ? records.map((r, i) => `
        <div class="record-row">
          <span class="medal">${i < 3 ? ["1st", "2nd", "3rd"][i] : ""}</span>
          <span class="holder">${r.holder}</span>
          ${r.note ? `<span class="note">${r.note}</span>` : ""}
          <span class="percent ${r.percent >= 100 ? "full" : ""}">${r.percent}%</span>
        </div>
      `).join("")
    : '<div class="empty-state">No records submitted for this level yet.</div>';

  showcase.innerHTML = `
    ${formatVideo(demon.videoId)}
    <div class="showcase-body">
      <div class="showcase-title-row">
        <h1>${demon.name}</h1>
        <span class="showcase-rank">Rank #${demon.rank}</span>
      </div>
      <p class="showcase-desc">${demon.description}</p>
      <div class="stat-grid">
        <div class="stat-box">
          <div class="label">Points</div>
          <div class="value accent">${demon.points}</div>
        </div>
        <div class="stat-box">
          <div class="label">Verifier</div>
          <div class="value">${demon.verifier}</div>
        </div>
        <div class="stat-box">
          <div class="label">Publisher</div>
          <div class="value">${demon.publisher}</div>
        </div>
        <div class="stat-box">
          <div class="label">Min. %</div>
          <div class="value">${demon.minPercent}%</div>
        </div>
      </div>
      <div class="records-section">
        <h3>Records (${records.length})</h3>
        ${recordRows}
      </div>
    </div>
  `;
}

document.addEventListener("DOMContentLoaded", () => {
  const first = DEMONLIST[0];
  renderSidebar(first.rank);
  renderShowcase(first.rank);
});
