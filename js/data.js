const DEMONLIST = [
  {
    rank: 1,
    name: "Tartarus",
    creators: ["Riot", "Zealous", "Bloodbath"],
    verifier: "Zoink",
    publisher: "Zoink",
    videoId: "",
    points: 500,
    minPercent: 100,
    description: "The current apex of the list. A relentless memory-heavy layout with a final wave that has ended more attempts than anyone wants to admit.",
    records: [
      { holder: "Zoink", percent: 100, videoId: "", note: "Verification" },
      { holder: "Sunix", percent: 100, videoId: "" },
      { holder: "Deltablu", percent: 100, videoId: "" },
      { holder: "Cursed", percent: 76, videoId: "" }
    ]
  },
  {
    rank: 2,
    name: "Cataclysmic Ruin",
    creators: ["Nasgubb", "Technical", "Vermillion"],
    verifier: "Sunix",
    publisher: "Nasgubb",
    videoId: "",
    points: 480,
    minPercent: 100,
    description: "A brutal 3D transition demon known for its unforgiving dual sections and a spam section that ruins runs at 94%.",
    records: [
      { holder: "Sunix", percent: 100, videoId: "", note: "Verification" },
      { holder: "Zoink", percent: 100, videoId: "" },
      { holder: "Timp", percent: 55, videoId: "" }
    ]
  },
  {
    rank: 3,
    name: "Nine Circles",
    creators: ["Riot"],
    verifier: "Ryamu",
    publisher: "Riot",
    videoId: "",
    points: 460,
    minPercent: 100,
    description: "A classic gauntlet of nine distinct sections, each themed after a different circle of hell. Consistency is everything.",
    records: [
      { holder: "Ryamu", percent: 100, videoId: "", note: "Verification" },
      { holder: "Cursed", percent: 100, videoId: "" },
      { holder: "Deltablu", percent: 100, videoId: "" },
      { holder: "Timp", percent: 89, videoId: "" }
    ]
  },
  {
    rank: 4,
    name: "Slaughterhouse",
    creators: ["Ryamu", "Exile"],
    verifier: "Cursed",
    publisher: "Exile",
    videoId: "",
    points: 440,
    minPercent: 100,
    description: "Fast paced, wave-heavy and merciless from the first click. The final memory block has broken more controllers than levels.",
    records: [
      { holder: "Cursed", percent: 100, videoId: "", note: "Verification" },
      { holder: "Sunix", percent: 100, videoId: "" },
      { holder: "Nasgubb", percent: 62, videoId: "" }
    ]
  },
  {
    rank: 5,
    name: "Void Requiem",
    creators: ["Vermillion", "Technical"],
    verifier: "Deltablu",
    publisher: "Vermillion",
    videoId: "",
    points: 420,
    minPercent: 100,
    description: "A slower, precision-based demon that punishes impatience. Known for a triple spider section with pixel-perfect timing windows.",
    records: [
      { holder: "Deltablu", percent: 100, videoId: "", note: "Verification" },
      { holder: "Zoink", percent: 100, videoId: "" },
      { holder: "Ryamu", percent: 100, videoId: "" }
    ]
  },
  {
    rank: 6,
    name: "Withheld Sanity",
    creators: ["Bloodbath"],
    verifier: "Timp",
    publisher: "Bloodbath",
    videoId: "",
    points: 400,
    minPercent: 100,
    description: "A dense, straight fly heavy level with almost no room to breathe between orbs.",
    records: [
      { holder: "Timp", percent: 100, videoId: "", note: "Verification" },
      { holder: "Nasgubb", percent: 100, videoId: "" }
    ]
  },
  {
    rank: 7,
    name: "Fractured Halo",
    creators: ["Exile", "Riot"],
    verifier: "Nasgubb",
    publisher: "Exile",
    videoId: "",
    points: 380,
    minPercent: 100,
    description: "Known primarily for its brutal timing-based ship section that comes completely out of nowhere at the two minute mark.",
    records: [
      { holder: "Nasgubb", percent: 100, videoId: "", note: "Verification" },
      { holder: "Cursed", percent: 100, videoId: "" },
      { holder: "Sunix", percent: 78, videoId: "" }
    ]
  },
  {
    rank: 8,
    name: "Obsidian Wound",
    creators: ["Zealous"],
    verifier: "Sunix",
    publisher: "Zealous",
    videoId: "",
    points: 360,
    minPercent: 95,
    description: "A shorter demon that leans entirely on a single relentless dash section near the end.",
    records: [
      { holder: "Sunix", percent: 100, videoId: "", note: "Verification" },
      { holder: "Zoink", percent: 100, videoId: "" },
      { holder: "Timp", percent: 100, videoId: "" },
      { holder: "Ryamu", percent: 95, videoId: "" }
    ]
  },
  {
    rank: 9,
    name: "Grim Cascade",
    creators: ["Technical", "Vermillion"],
    verifier: "Ryamu",
    publisher: "Technical",
    videoId: "",
    points: 340,
    minPercent: 90,
    description: "Cascading wave gauntlets from start to finish, with almost no straight fly to recover in.",
    records: [
      { holder: "Ryamu", percent: 100, videoId: "", note: "Verification" },
      { holder: "Deltablu", percent: 100, videoId: "" },
      { holder: "Cursed", percent: 91, videoId: "" }
    ]
  },
  {
    rank: 10,
    name: "Last Breath",
    creators: ["Riot", "Exile", "Bloodbath"],
    verifier: "Zoink",
    publisher: "Riot",
    videoId: "",
    points: 320,
    minPercent: 90,
    description: "A community collaboration demon with a reputation for its brutal final ten seconds, aptly named.",
    records: [
      { holder: "Zoink", percent: 100, videoId: "", note: "Verification" },
      { holder: "Sunix", percent: 100, videoId: "" },
      { holder: "Nasgubb", percent: 100, videoId: "" },
      { holder: "Timp", percent: 92, videoId: "" }
    ]
  }
];

for (let i = 11; i <= 60; i++) {
  DEMONLIST.push({
    rank: i,
    name: "Placeholder Demon " + i,
    creators: ["Unknown"],
    verifier: "Unknown",
    publisher: "Unknown",
    videoId: "",
    points: Math.max(50, 320 - (i - 10) * 4),
    minPercent: i <= 30 ? 100 : (i <= 50 ? 60 : 40),
    description: "Replace this entry with a real level in js/data.js. This is here so the list has a realistic length out of the box.",
    records: []
  });
}

function calculateScore(demon, percent) {
  if (percent < demon.minPercent) return 0;
  if (percent >= 100) return demon.points;
  const ratio = (percent - demon.minPercent) / (100 - demon.minPercent);
  return Math.round(demon.points * 0.15 + demon.points * 0.85 * Math.pow(ratio, 2));
}

function buildLeaderboard() {
  const players = {};
  DEMONLIST.forEach(demon => {
    demon.records.forEach(record => {
      if (!players[record.holder]) {
        players[record.holder] = { name: record.holder, score: 0, completions: 0, hardest: null };
      }
      const gained = calculateScore(demon, record.percent);
      players[record.holder].score += gained;
      if (record.percent >= demon.minPercent) players[record.holder].completions++;
      if (!players[record.holder].hardest || demon.rank < players[record.holder].hardest.rank) {
        players[record.holder].hardest = demon;
      }
    });
  });
  return Object.values(players).sort((a, b) => b.score - a.score);
}
