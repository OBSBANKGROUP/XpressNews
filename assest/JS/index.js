// ===== XPRESS NEWS — UNIFIED JS =====

// ---- Mobile menu toggle ----
const hamburger = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");
if (hamburger && mobileMenu) {
  hamburger.addEventListener("click", () =>
    mobileMenu.classList.toggle("open"),
  );
}

// ---- Search toggle ----
const searchBtn = document.getElementById("searchBtn");
const searchBar = document.getElementById("searchBar");
const searchInput = document.getElementById("searchInput");
if (searchBtn && searchBar) {
  searchBtn.addEventListener("click", () => {
    searchBar.classList.toggle("open");
    if (searchBar.classList.contains("open") && searchInput)
      searchInput.focus();
  });
}

// ---- Search filter ----
if (searchInput) {
  searchInput.addEventListener("input", () => {
    const val = searchInput.value.toLowerCase();
    document.querySelectorAll(".news-card").forEach((card) => {
      card.style.display = card.innerText.toLowerCase().includes(val)
        ? ""
        : "none";
    });
  });
}

// ---- Google Translate ----
function googleTranslateElementInit() {
  new google.translate.TranslateElement(
    { pageLanguage: "en" },
    "google_translate_element",
  );
}
function toggleTranslate() {
  const el = document.getElementById("google_translate_element");
  if (el) el.style.display = el.style.display === "none" ? "block" : "none";
}

// ---- Active nav link ----
document.querySelectorAll(".nav a, .mobile-menu a").forEach((link) => {
  if (link.href === window.location.href) link.classList.add("active");
});

// ============================================================
// ARTICLE DATABASE
// ============================================================
const articles = [
  // ---- TOP NEWS ----
  {
    id: "us-iran-deal",
    category: "Top News",
    title:
      "How the US and Iran could reach a peace deal that both can sell as a victory",
    image: "assest/images/Trump.jpeg",
    author: "Xpress News Staff",
    date: "April 18, 2026",
    readTime: "8 min read",
    body: [
      "There is little choice for the United States and Iran other than to make a deal. The unspoken truth since the war began, this remains more the case in the closing five days of the ceasefire.",
      "For the US, the first round of talks in Islamabad, despite their marathon duration, seemed a concerted performance aimed at bolstering US leverage. The blockade of Iranian ports followed so swiftly, the White House likely had this escalation already in mind.",
      "The likelihood of success in a second round of talks increases with the political exigencies and condition of those at the table. US President Donald Trump openly wants a deal, and says Iran does too. But above all — with inflation and gas prices on the rise, and the MAGA base openly in revolt — Trump urgently needs a deal.",
      "Iran — despite winning the meme war, unleashing unprecedented fire across the region and enduring the brutal decimation of its cabinet and security apparatus — needs a deal even more urgently. Tehran is far worse off after more than 13,000 targets have been hit. The damage from 39 days of bombing is irrefutable.",
      "Both sides agree on a moratorium on nuclear enrichment. Iran wants it to last five years — halfway into the next US presidential term. The US wants 20 years — a kick into the generational long grass. Neither side can accept an agreement they cannot pretend is a victory.",
      "Two enduring questions will haunt Trump. Does any grand bargain with Iran look better than the deal President Barack Obama signed in 2015 and that Trump tore up in his first term? The second is the kind of Iran that emerges from the dust: heavily diminished, battered, with infrastructure damage that may be felt for a generation.",
    ],
    related: ["global-leaders-tensions", "oil-prices", "markets-surge"],
  },
  {
    id: "global-leaders-tensions",
    category: "Top News",
    title: "Global Leaders Meet Over Rising Tensions in Emergency Summit",
    image:
      "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=900&q=80",
    author: "International Desk",
    date: "April 16, 2026",
    readTime: "5 min read",
    body: [
      "World leaders gathered in Geneva this week for an emergency summit called in response to escalating tensions across multiple flashpoints, with diplomats warning that the risk of a broader conflict has not been higher in decades.",
      "The summit brought together heads of state from over 40 nations, with the United Nations Secretary-General opening proceedings by calling for immediate de-escalation and a return to dialogue.",
      "Key agenda items included the ongoing situation in the Middle East, rising hostilities in the South China Sea, and the humanitarian crisis unfolding in several conflict zones across Africa.",
      "Diplomatic sources close to the negotiations described the atmosphere as tense but constructive, with most delegations arriving with a genuine desire to find common ground before the situation deteriorates further.",
      "A joint communiqué is expected at the end of the three-day summit, though observers cautioned that translating any agreed language into meaningful action on the ground remains the central challenge.",
    ],
    related: ["us-iran-deal", "oil-prices", "un-security-council"],
  },
  {
    id: "un-security-council",
    category: "Top News",
    title: "UN Security Council Calls Emergency Session on Middle East Crisis",
    image:
      "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=900&q=80",
    author: "International Desk",
    date: "April 14, 2026",
    readTime: "4 min read",
    body: [
      "The United Nations Security Council convened an emergency session on Tuesday to address the deteriorating situation in the Middle East, with permanent members deeply divided over the appropriate response.",
      "Western nations pushed for a resolution calling on all parties to immediately cease hostilities and return to the negotiating table, while Russia and China argued for a more measured approach that does not prejudge the outcome of ongoing talks.",
      "The session lasted over six hours, with ambassadors delivering unusually candid statements that reflected the depth of the geopolitical fault lines running through the international community.",
      "Humanitarian agencies presented evidence of a worsening civilian crisis, with millions of people displaced and essential infrastructure in multiple countries severely damaged by weeks of conflict.",
      "No formal resolution was passed at the session, but diplomats agreed to reconvene within 48 hours, with several bilateral meetings scheduled on the sidelines to seek compromise language.",
    ],
    related: ["us-iran-deal", "global-leaders-tensions", "oil-prices"],
  },

  // ---- BUSINESS ----
  {
    id: "markets-surge",
    category: "Business",
    title: "Global Markets Surge as Inflation Data Eases Fears",
    image:
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=900&q=80",
    author: "Business Desk",
    date: "April 17, 2026",
    readTime: "4 min read",
    body: [
      "Stock markets worldwide climbed sharply after new inflation figures came in lower than expected, boosting investor confidence across all major indices and triggering the biggest single-day rally in three months.",
      "The S&P 500 gained over 2% in early trading while European markets posted their best performance since the start of the year. Analysts say the data significantly reduces the likelihood of further interest rate hikes in the near term.",
      "Central banks in the US and Europe signalled they would take a cautious approach to future rate decisions, citing the improving inflation outlook while noting that underlying price pressures in certain sectors remain stubbornly elevated.",
      "Emerging markets also benefited from the mood shift, with African and Asian exchanges recording strong gains as investors rotated into riskier assets on the back of improved global sentiment.",
      "Commodity prices pulled back from recent highs, with gold retreating as demand for safe-haven assets eased and the dollar strengthened modestly against most major currencies.",
    ],
    related: ["oil-prices", "global-debt", "private-equity"],
  },
  {
    id: "oil-prices",
    category: "Business",
    title: "Oil Prices Surge as Supply Disruptions Continue Worldwide",
    image:
      "https://images.unsplash.com/photo-1543286386-713bdd548da4?w=900&q=80",
    author: "Business Desk",
    date: "April 16, 2026",
    readTime: "3 min read",
    body: [
      "Ongoing global tensions are pushing oil prices sharply higher, with Brent crude breaking above $110 per barrel for the first time in over a year, raising alarm bells among major consuming nations.",
      "Supply disruptions in key producing regions and continued uncertainty around major shipping routes have combined to create significant upward pressure on energy costs that is beginning to feed through to consumers.",
      "Major oil-consuming nations are reportedly considering a coordinated release of strategic petroleum reserves to ease pressure on consumers, though analysts say such a move would provide only temporary relief given the structural nature of the supply problem.",
      "The surge is expected to translate into higher petrol and diesel costs for consumers across Africa, Europe and Asia over the coming weeks, with economists warning of a secondary inflationary effect across multiple sectors.",
      "OPEC+ is scheduled to hold an emergency meeting later this week to assess whether the group should increase production targets, though member states are reportedly divided on the appropriate response.",
    ],
    related: ["markets-surge", "global-debt", "us-iran-deal"],
  },
  {
    id: "ai-boom-investment",
    category: "Business",
    title: "AI Boom Drives Massive Investment in Tech Industry",
    image:
      "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=900&q=80",
    author: "Business Desk",
    date: "April 15, 2026",
    readTime: "5 min read",
    body: [
      "Companies across every sector are pouring unprecedented resources into artificial intelligence infrastructure, with global AI investment exceeding $500 billion in the first quarter of 2026 alone.",
      "Technology giants are racing to build data centres, acquire computing power and attract top AI talent, driving a surge in capital expenditure that is reshaping the investment landscape for the entire industry.",
      "Investors are rewarding companies with credible AI strategies, with technology stocks significantly outperforming the broader market over the past six months as confidence in the sector's long-term growth trajectory remains strong.",
      "Smaller companies and startups are also benefiting from the boom, with venture capital flowing freely to early-stage businesses that can demonstrate a compelling application of AI to real-world problems.",
      "Some analysts, however, are beginning to raise questions about valuations, drawing parallels with the dot-com era and warning that not all AI investments will generate the returns that current market prices imply.",
    ],
    related: ["private-equity", "markets-surge", "global-debt"],
  },
  {
    id: "global-debt",
    category: "Business",
    title: "Global Debt Expected to Hit Record Levels in 2026",
    image:
      "https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?w=900&q=80",
    author: "Business Desk",
    date: "April 13, 2026",
    readTime: "4 min read",
    body: [
      "Total global debt is on course to hit a new all-time record this year, with the combined borrowing of governments, corporations and households expected to exceed $330 trillion according to the latest estimates from the International Monetary Fund.",
      "The surge has been driven primarily by government borrowing in the wake of the pandemic and subsequent economic shocks, with many nations still running large fiscal deficits as they struggle to fund public services while managing rising interest costs.",
      "Emerging market economies are facing particular pressure, with several African and Latin American nations grappling with debt service costs that are consuming an ever-larger share of government revenues and crowding out spending on education, health and infrastructure.",
      "The IMF is calling for a renewed international effort to address the debt overhang, arguing that without coordinated action, the burden of debt will constrain economic growth for years to come.",
      "Some economists argue that the focus on headline debt figures is misleading and that what matters most is whether governments can afford to service their debts — a calculation that looks very different depending on the interest rate environment.",
    ],
    related: ["markets-surge", "oil-prices", "private-equity"],
  },
  {
    id: "companies-restructure",
    category: "Business",
    title: "Major Companies Restructure to Stay Competitive in Shifting Market",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=900&q=80",
    author: "Business Desk",
    date: "April 12, 2026",
    readTime: "4 min read",
    body: [
      "A wave of corporate restructuring is sweeping through global business, with major companies across finance, retail, manufacturing and media announcing significant organisational changes in response to shifting market conditions.",
      "The changes include large-scale redundancies at several high-profile firms, with tens of thousands of jobs being cut as companies seek to reduce costs and redirect resources towards higher-growth areas, particularly those involving artificial intelligence and digital services.",
      "Business leaders are framing the restructuring as essential to long-term competitiveness, arguing that companies that fail to adapt quickly to the changing landscape risk being left behind by more agile rivals.",
      "Trade unions have pushed back strongly against the cuts, arguing that workers are being asked to bear the costs of strategic decisions made at board level, and calling for greater transparency and consultation before redundancies are confirmed.",
      "Analysts expect the restructuring wave to continue for at least another 12 to 18 months as companies work through the implications of higher interest rates, changing consumer behaviour and the ongoing disruption caused by new technologies.",
    ],
    related: ["ai-boom-investment", "global-debt", "private-equity"],
  },
  {
    id: "private-equity",
    category: "Business",
    title: "Private Equity Investments Reach Record Highs Globally",
    image:
      "https://images.unsplash.com/photo-1559526324-593bc073d938?w=900&q=80",
    author: "Business Desk",
    date: "April 11, 2026",
    readTime: "3 min read",
    body: [
      "Private equity firms deployed a record amount of capital in the first quarter of 2026, with deal volumes surging as investors looked to take advantage of lower valuations in certain sectors and strong fundamentals in others.",
      "Technology, healthcare and infrastructure were the most active sectors for dealmaking, reflecting long-term structural trends that private equity investors believe will drive sustainable returns over the next decade.",
      "African markets attracted a growing share of private equity capital, with investors increasingly recognising the continent's demographic advantages, rising consumer spending and improving business environments.",
      "The surge in activity comes despite the challenging macroeconomic backdrop, suggesting that investors with long time horizons and access to large amounts of dry powder are willing to look through short-term volatility.",
    ],
    related: ["markets-surge", "ai-boom-investment", "global-debt"],
  },
  {
    id: "space-business",
    category: "Business",
    title: "Space Industry Emerging as the Next Great Business Frontier",
    image:
      "https://images.unsplash.com/photo-1446941611757-91d2c3bd3d45?w=900&q=80",
    author: "Business Desk",
    date: "April 10, 2026",
    readTime: "4 min read",
    body: [
      "The commercial space industry is experiencing a period of explosive growth, with private companies investing billions of dollars into everything from satellite communications and earth observation to space tourism and asteroid mining.",
      "Launch costs have fallen dramatically over the past decade thanks to reusable rocket technology, opening up the space economy to a much wider range of businesses and use cases than was possible in the era of government-dominated space programmes.",
      "Satellite internet services are already generating significant revenues, with several competing constellations now providing broadband connectivity to remote and underserved areas across Africa, Asia and Latin America.",
      "Investors are pouring money into the sector at an unprecedented rate, with several space startups achieving unicorn valuations as they race to secure contracts and establish market positions ahead of what many believe will be a period of rapid commercialisation.",
    ],
    related: ["private-equity", "ai-boom-investment", "cybersecurity-threats"],
  },
  {
    id: "cybersecurity-biz",
    category: "Business",
    title: "Businesses Face Rising Cybersecurity Threats in 2026",
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=900&q=80",
    author: "Business Desk",
    date: "April 9, 2026",
    readTime: "3 min read",
    body: [
      "Companies around the world are dramatically increasing their cybersecurity spending as the frequency and sophistication of attacks continues to escalate, with ransomware and data theft incidents hitting record levels in the opening months of 2026.",
      "Financial services, healthcare and critical infrastructure operators are among the hardest-hit sectors, with attackers increasingly targeting the systems that underpin essential services rather than individual organisations.",
      "Cybersecurity spending is expected to exceed $300 billion globally this year, up from $250 billion in 2025, as boards and executive teams finally treat digital security as a strategic priority rather than a purely technical concern.",
      "The insurance market for cyber risk is also evolving rapidly, with premiums rising sharply and insurers imposing more stringent conditions on coverage as the true scale of potential losses becomes clearer.",
    ],
    related: ["cybersecurity-threats", "ai-industries", "space-business"],
  },

  // ---- SPORTS ----
  {
    id: "champions-league",
    category: "Sports",
    title: "Champions League Semi-Finals Promise Classic European Clashes",
    image:
      "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=900&q=80",
    author: "Sports Desk",
    date: "April 17, 2026",
    readTime: "3 min read",
    body: [
      "Europe's elite clubs are gearing up for Champions League semi-final matchups that have set the footballing world buzzing, with the draw producing two ties widely described as the most eagerly anticipated in years.",
      "The first tie pits two of the continent's most storied clubs against each other in what promises to be a tactical battle between two managers widely regarded as the finest of their generation.",
      "Ticket demand has been extraordinary, with resale prices reaching record levels as fans scramble to secure seats. Television broadcasters are predicting global audiences in excess of 200 million viewers for each leg.",
      "Both encounters are finely balanced on paper, with analysts divided over who holds the advantage. Injury concerns in each camp add an additional layer of unpredictability ahead of the first legs scheduled for next week.",
      "The winners will face each other in the final, to be held in Istanbul, where a packed stadium and a worldwide audience will witness what many are already billing as a defining moment in the modern era of European club football.",
    ],
    related: ["afcon-qualifiers", "world-record-sprint", "nba-playoffs"],
  },
  {
    id: "olympics-2028",
    category: "Sports",
    title: "Olympic Committee Announces 2028 Los Angeles Programme Changes",
    image:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=900&q=80",
    author: "Sports Desk",
    date: "April 15, 2026",
    readTime: "4 min read",
    body: [
      "The International Olympic Committee has unveiled a series of significant changes to the programme for the 2028 Los Angeles Games, adding several new sports while removing others in a bid to attract younger audiences and broaden the Games' global appeal.",
      "New additions include flag football, cricket in the T20 format, and squash — all of which have large and passionate global followings that the IOC believes will translate into significant new viewership and commercial opportunities.",
      "The inclusion of cricket is particularly notable, given the sport's enormous following across South Asia, the Caribbean and Africa, regions where Olympic viewership has historically lagged behind other major sporting events.",
      "Several traditional sports have been asked to reduce their event quotas to make room for the new additions, a decision that has sparked controversy among national federations and athletes who feel their disciplines are being marginalised.",
      "Organisers in Los Angeles expressed confidence that the updated programme would help make the 2028 Games the most commercially successful in history, with broadcasting rights negotiations already well advanced.",
    ],
    related: ["champions-league", "world-record-sprint", "afcon-qualifiers"],
  },
  {
    id: "afcon-qualifiers",
    category: "Sports",
    title: "Africa Cup of Nations Qualifiers Heat Up Across the Continent",
    image:
      "https://images.unsplash.com/photo-1504016798967-57a5b6a0cd77?w=900&q=80",
    author: "Sports Desk",
    date: "April 14, 2026",
    readTime: "3 min read",
    body: [
      "The race to qualify for the next Africa Cup of Nations is intensifying, with several groups reaching a decisive stage and a number of heavyweight nations facing the prospect of an embarrassing early exit.",
      "Ghana and Nigeria are among the sides under pressure, with both countries collecting fewer points than expected in the opening rounds and now requiring strong results in their remaining games to secure their places at the tournament.",
      "Surprise packages from smaller footballing nations have been among the stories of the qualifying campaign, with several teams causing upsets against more fancied opponents and raising hopes of historic appearances at the continental showpiece.",
      "The competition for places remains fierce, with only the top teams from each group guaranteed qualification and the play-off route offering a lifeline to those who fall just short of automatic berths.",
    ],
    related: ["champions-league", "olympics-2028", "nba-playoffs"],
  },
  {
    id: "world-record-sprint",
    category: "Sports",
    title: "Athletics: Stunning World Record Broken in 100m Sprint Final",
    image:
      "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=900&q=80",
    author: "Sports Desk",
    date: "April 12, 2026",
    readTime: "3 min read",
    body: [
      "A new world record in the 100 metres was set at the Diamond League meeting in Doha last night, shattering the previous mark that had stood for nearly two decades and sending shockwaves through the athletics world.",
      "The record-breaking run came in perfect conditions, with a slight tailwind and a fast track, but observers were unanimous that the performance represented an extraordinary leap forward in human athletic achievement.",
      "The athlete, who had been tipped as a future record-breaker for several years, showed no signs of nerves in the final, producing an almost flawless start and maintaining exceptional form through the finish line.",
      "The governing body World Athletics confirmed the record after reviewing footage and sensor data from multiple cameras positioned along the track, with an official announcement expected within 24 hours.",
      "Social media erupted immediately after the race, with fellow athletes, former champions and sports fans around the world sharing their astonishment at what many are calling the greatest single performance in the history of the sport.",
    ],
    related: ["olympics-2028", "champions-league", "rugby-world-cup"],
  },
  {
    id: "nba-playoffs",
    category: "Sports",
    title: "NBA Playoffs: Bracket Takes Shape After Round of Stunning Upsets",
    image:
      "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=900&q=80",
    author: "Sports Desk",
    date: "April 11, 2026",
    readTime: "4 min read",
    body: [
      "The NBA playoffs have produced a first round for the ages, with three of the four top seeds in the Western Conference eliminated in dramatic fashion and the bracket torn wide open heading into the second round.",
      "The biggest shock came when the defending champions were knocked out in a deciding game seven, their season ending on a missed shot at the buzzer that will be replayed and debated for years to come.",
      "Lower-seeded teams have been the story of the opening round, playing with the freedom and cohesion of sides with nothing to lose and capitalising on the pressure and expectation that weighed heavily on their more fancied opponents.",
      "The Eastern Conference has also provided drama, with two series going the distance and a superstar player delivering one of the great individual playoff performances in recent memory to drag his team through to the next round.",
      "Pundits are struggling to pick a favourite for the title with the bracket so open, and television ratings are soaring as basketball fans sense they may be witnessing a historic and unpredictable postseason.",
    ],
    related: ["champions-league", "world-record-sprint", "afcon-qualifiers"],
  },
  {
    id: "rugby-world-cup",
    category: "Sports",
    title: "Rugby World Cup 2027 Host Confirmed After Lengthy Bid Process",
    image:
      "https://images.unsplash.com/photo-1556056504-5c7696c4c28d?w=900&q=80",
    author: "Sports Desk",
    date: "April 9, 2026",
    readTime: "3 min read",
    body: [
      "World Rugby has confirmed the host nation for the 2027 Rugby World Cup following a lengthy and at times contentious bidding process, with the announcement greeted with enormous celebrations in the winning country.",
      "The successful bid was underpinned by a compelling vision for the tournament, world-class stadium facilities and a strong track record of hosting major international sporting events.",
      "The host nation's rugby federation has pledged to use the tournament to dramatically grow participation in the sport domestically, with a particular focus on youth development and expanding the game's reach beyond its traditional strongholds.",
      "Preparations are already underway, with organisers confident that 2027 will be the biggest and most commercially successful Rugby World Cup in the tournament's history.",
    ],
    related: ["champions-league", "olympics-2028", "world-record-sprint"],
  },

  // ---- TECHNOLOGY ----
  {
    id: "ai-industries",
    category: "Technology",
    title: "AI Breakthroughs Are Reshaping Industries at Record Speed",
    image:
      "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=900&q=80",
    author: "Tech Desk",
    date: "April 17, 2026",
    readTime: "5 min read",
    body: [
      "From healthcare diagnostics to financial modelling, artificial intelligence tools are transforming how businesses operate and make decisions at an unprecedented pace, with experts warning that the pace of change is only accelerating.",
      "Companies that adopted AI tools early are reporting productivity gains of up to 40%, according to a new global survey of over 5,000 enterprises across 30 countries, with the most dramatic improvements seen in data analysis and customer service functions.",
      "The healthcare sector has seen some of the most dramatic changes, with AI systems now capable of detecting certain cancers from medical scans with greater accuracy than experienced clinicians, offering the prospect of earlier diagnoses and better patient outcomes.",
      "However, economists warn that the rapid adoption of AI is also accelerating job displacement in some sectors, calling on governments to invest heavily in reskilling and retraining programmes to help workers whose roles are being automated.",
      "Africa's technology sector is emerging as a key beneficiary of the AI boom, with startups across the continent attracting record levels of international investment and developing solutions tailored to local challenges in agriculture, healthcare and financial services.",
    ],
    related: ["cybersecurity-threats", "africa-tech", "quantum-computing"],
  },
  {
    id: "chip-architecture",
    category: "Technology",
    title: "New Chip Architectures Promise 10x Speed Gains for Developers",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=900&q=80",
    author: "Tech Desk",
    date: "April 15, 2026",
    readTime: "4 min read",
    body: [
      "Silicon manufacturers have unveiled a new generation of processor architectures that promise to deliver performance gains of up to ten times compared with current-generation chips, while simultaneously cutting energy consumption by more than half.",
      "The breakthrough is based on a novel approach to chip design that moves away from the traditional von Neumann architecture and processes data in a fundamentally different way, dramatically reducing the bottleneck between processing and memory.",
      "Early benchmarks from independent testing laboratories have confirmed performance improvements that exceed even the most optimistic projections, with the chips showing particular strength in the AI inference workloads that are becoming central to modern computing.",
      "The implications for data centres could be enormous, with operators potentially able to reduce their energy bills and carbon footprints significantly while delivering substantially more computing power to their customers.",
      "Commercial availability is expected within 18 months, with several major cloud computing providers already signed up as launch partners and device manufacturers said to be retooling their product roadmaps around the new capability.",
    ],
    related: ["ai-industries", "quantum-computing", "cybersecurity-threats"],
  },
  {
    id: "cybersecurity-threats",
    category: "Technology",
    title: "Cybersecurity Threats Grow More Sophisticated Heading Into 2026",
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=900&q=80",
    author: "Tech Desk",
    date: "April 14, 2026",
    readTime: "4 min read",
    body: [
      "Security researchers are warning of a new wave of AI-powered cyberattacks targeting financial institutions, hospitals and government systems worldwide, with several high-profile breaches in recent weeks underlining the severity of the threat.",
      "Unlike previous generations of malware, these new threats can adapt in real time, learning from defensive responses and finding new attack vectors faster than human security teams can respond, making them significantly harder to contain.",
      "Attackers have successfully bypassed multi-factor authentication systems at several organisations that were previously considered to have exemplary security practices, raising fundamental questions about the adequacy of current defensive frameworks.",
      "The most concerning development identified by researchers is the emergence of attack tools that appear to be the product of well-resourced state actors, raising the spectre of cyberwarfare as a routine feature of geopolitical competition.",
      "Governments and regulatory bodies are being urged to act urgently to establish common minimum standards for critical infrastructure security, with voluntary frameworks widely seen as insufficient given the scale and nature of the threat.",
    ],
    related: ["ai-industries", "chip-architecture", "africa-tech"],
  },
  {
    id: "antitrust-tech",
    category: "Technology",
    title: "Tech Giants Face Renewed Antitrust Scrutiny Across Europe and US",
    image:
      "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=900&q=80",
    author: "Tech Desk",
    date: "April 12, 2026",
    readTime: "4 min read",
    body: [
      "The world's largest technology companies are facing simultaneous antitrust investigations in both the United States and the European Union, in what regulators describe as the most coordinated effort to address the concentration of power in the digital economy in history.",
      "The investigations focus on the dominant market positions held by a small number of platforms across search, advertising, cloud computing, app distribution and social media, with regulators arguing that competition has been systematically suppressed.",
      "European regulators have moved furthest and fastest, with significant fines already levied and several companies required to make structural changes to their operations under the Digital Markets Act.",
      "In the United States, the picture is more complex, with several high-profile cases working their way through the courts and the outcome likely to depend heavily on which legal theories judges are prepared to accept.",
      "The technology companies have pushed back vigorously against the regulatory pressure, arguing that their size is a product of genuine innovation and consumer choice rather than anticompetitive behaviour.",
    ],
    related: ["ai-industries", "cybersecurity-threats", "africa-tech"],
  },
  {
    id: "africa-tech",
    category: "Technology",
    title: "Africa's Tech Startup Ecosystem Raises Record Funding This Quarter",
    image:
      "https://images.unsplash.com/photo-1573164713988-8665fc963095?w=900&q=80",
    author: "Tech Desk",
    date: "April 10, 2026",
    readTime: "4 min read",
    body: [
      "Startups from Lagos to Nairobi attracted unprecedented levels of international investment this quarter, as global investors increasingly look to Africa's young, fast-growing markets and its large population of mobile-first consumers.",
      "Total funding raised by African tech startups in Q1 2026 exceeded $4 billion, surpassing the record set in the same period last year by more than 60% and cementing the continent's status as one of the world's most exciting emerging technology markets.",
      "Fintech continues to dominate the investment landscape, with mobile payments, digital lending and insurance technology attracting the largest cheques, but healthtech, edtech and agritech are all drawing growing interest.",
      "Ghana, Nigeria, Kenya and South Africa remain the top destinations for investment, but new ecosystems are emerging rapidly in countries like Ethiopia, Senegal and Rwanda, supported by improving regulatory environments and growing pools of local talent.",
      "Investors point to Africa's demographic advantages — a young, tech-savvy population with rising incomes and a demonstrated willingness to adopt new digital services — as the fundamental driver of their confidence in the continent's long-term potential.",
    ],
    related: ["ai-industries", "ghana-coding", "cybersecurity-threats"],
  },
  {
    id: "quantum-computing",
    category: "Technology",
    title: "Quantum Computing Edges Closer to Practical Commercial Use",
    image:
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=900&q=80",
    author: "Tech Desk",
    date: "April 8, 2026",
    readTime: "5 min read",
    body: [
      "Scientists have achieved a major breakthrough in quantum error correction, dramatically improving the reliability of quantum computations and bringing the prospect of commercially useful quantum computers significantly closer to reality.",
      "The advance, published in the journal Nature and independently verified by three separate research groups, represents the most significant progress in the field since quantum supremacy was first demonstrated several years ago.",
      "Error correction has long been the central challenge in quantum computing, with quantum systems prone to introducing mistakes that accumulate rapidly and render calculations unreliable at any meaningful scale.",
      "The new approach reduces error rates by two orders of magnitude compared with previous techniques, making it theoretically possible to run the kinds of complex, long-duration calculations that would be needed for practical applications in drug discovery, materials science and cryptography.",
      "Commercial quantum computing providers reacted with cautious optimism, noting that significant engineering challenges remain before the theoretical advances can be translated into reliable, scalable hardware products.",
    ],
    related: ["chip-architecture", "ai-industries", "cybersecurity-threats"],
  },

  // ---- HEALTH ----
  {
    id: "who-mental-health",
    category: "Health",
    title: "WHO Issues New Guidelines on Managing Mental Health at Work",
    image:
      "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=900&q=80",
    author: "Health Desk",
    date: "April 16, 2026",
    readTime: "4 min read",
    body: [
      "The World Health Organization has published comprehensive new guidelines urging employers worldwide to take far more active responsibility for the mental well-being of their workers, warning that the current situation represents a public health crisis.",
      "The guidelines highlight that depression and anxiety cost the global economy an estimated $1 trillion per year in lost productivity, a figure that has grown sharply in recent years and which the WHO says is almost certainly an underestimate.",
      "Key recommendations include mandatory mental health training for all managers, easily accessible anonymous reporting systems for employees experiencing distress, flexible working arrangements where operationally possible, and clear pathways to professional support.",
      "The WHO is calling on governments to incorporate the new guidelines into national labour laws, warning that voluntary compliance has proven insufficient and that stronger regulatory frameworks are needed to drive meaningful change.",
      "Employee advocacy groups welcomed the guidelines as an important step forward but cautioned that implementation would be the real test, pointing to a long history of workplace mental health initiatives that have failed to deliver lasting change.",
    ],
    related: ["obesity-crisis", "alzheimers-treatment", "processed-foods"],
  },
  {
    id: "malaria-vaccine",
    category: "Health",
    title: "Malaria Vaccine Rollout Expands to Ten More African Countries",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=900&q=80",
    author: "Health Desk",
    date: "April 14, 2026",
    readTime: "4 min read",
    body: [
      "A highly effective malaria vaccine will be rolled out across ten additional African countries this year, following the success of a pilot programme in several West African nations that showed remarkable results in reducing both infections and deaths.",
      "The vaccine, which was developed over several decades and demonstrated efficacy of over 75% in clinical trials, has already prevented an estimated 50,000 deaths in the countries where it has been deployed since 2023.",
      "Funding for the expanded rollout has been secured from a combination of international donors, African governments and the Global Fund, with logistical support provided by the WHO and UNICEF.",
      "Health ministers from the participating countries expressed deep gratitude for the international support and pledged to invest in the cold-chain infrastructure and community health worker networks needed to reach the most vulnerable populations.",
      "Scientists are also working on a next-generation version of the vaccine that they hope will offer even higher protection levels and a more convenient dosing schedule, with clinical trials expected to begin later this year.",
    ],
    related: ["who-mental-health", "alzheimers-treatment", "obesity-crisis"],
  },
  {
    id: "alzheimers-treatment",
    category: "Health",
    title: "Scientists Identify Promising New Target for Alzheimer's Treatment",
    image:
      "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?w=900&q=80",
    author: "Health Desk",
    date: "April 13, 2026",
    readTime: "4 min read",
    body: [
      "Researchers have identified a new protein pathway that plays a central role in the progression of Alzheimer's disease, opening the door to a new class of therapeutic approaches that could slow or even halt the devastating condition.",
      "The discovery, made by a collaborative team of scientists from universities in the UK, US and South Korea, provides the first plausible biological explanation for why certain individuals develop the disease while others with the same genetic risk factors do not.",
      "Early experiments in animal models using drugs designed to target the newly identified pathway showed a 60% reduction in the accumulation of amyloid plaques, the harmful protein deposits that are a hallmark of Alzheimer's disease.",
      "The researchers are quick to caution that results in animal models do not always translate to humans, and that the road from this laboratory discovery to a clinically approved treatment could take a decade or more.",
      "Nevertheless, Alzheimer's charities and patient advocates described the findings as among the most exciting in years, raising cautious hopes that new treatment options may eventually become available for the millions of people worldwide living with the condition.",
    ],
    related: ["who-mental-health", "malaria-vaccine", "obesity-crisis"],
  },
  {
    id: "obesity-crisis",
    category: "Health",
    title: "Rising Obesity Rates Prompt Global Public Health Emergency Call",
    image:
      "https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=900&q=80",
    author: "Health Desk",
    date: "April 11, 2026",
    readTime: "4 min read",
    body: [
      "Health ministers from over 60 countries meeting in Geneva have issued a joint call for urgent coordinated global action on obesity, warning that rates have reached levels that will impose unsustainable costs on healthcare systems within a generation.",
      "New data presented at the meeting showed that more than one billion people worldwide are now living with obesity, a figure that has roughly doubled since the turn of the century and continues to rise in almost every country regardless of income level.",
      "The ministers agreed on a package of measures including stronger regulation of food marketing to children, clearer mandatory labelling requirements, taxes on sugar-sweetened beverages and greater public investment in environments that support physical activity.",
      "The food industry mounted a vigorous lobbying effort ahead of the meeting, arguing that the proposed regulations were disproportionate and that personal choice and education were more appropriate responses than government intervention.",
      "Public health advocates dismissed the industry's objections as predictable and self-serving, pointing to the evidence from countries that have already implemented similar measures and seen measurable improvements in population health outcomes.",
    ],
    related: ["processed-foods", "who-mental-health", "health-wearables"],
  },
  {
    id: "processed-foods",
    category: "Health",
    title:
      "Ultra-Processed Foods Firmly Linked to Higher Risk of Heart Disease",
    image:
      "https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=900&q=80",
    author: "Health Desk",
    date: "April 9, 2026",
    readTime: "3 min read",
    body: [
      "A major new longitudinal study involving over 200,000 participants across 12 countries has confirmed strong causal links between high consumption of ultra-processed foods and significantly elevated risk of cardiovascular disease, independent of other lifestyle factors.",
      "The study, published in the New England Journal of Medicine, followed participants for an average of 15 years and found that those in the highest quartile of ultra-processed food consumption had a 28% higher risk of a major cardiac event.",
      "Researchers say the findings add to a mounting body of evidence that the health risks associated with ultra-processed foods cannot be explained simply by their high fat, sugar and salt content, suggesting that other aspects of the manufacturing process may also play a harmful role.",
      "The results are likely to intensify pressure on governments to introduce stricter regulations governing the marketing and sale of ultra-processed foods, particularly to children and young people.",
    ],
    related: ["obesity-crisis", "who-mental-health", "health-wearables"],
  },
  {
    id: "health-wearables",
    category: "Health",
    title: "Tech Wearables Now Detecting Early Signs of Chronic Illness",
    image:
      "https://images.unsplash.com/photo-1510017803434-a899398421b3?w=900&q=80",
    author: "Health Desk",
    date: "April 7, 2026",
    readTime: "4 min read",
    body: [
      "The latest generation of consumer health wearables is demonstrating a remarkable ability to detect early warning signs of serious chronic conditions — including diabetes, hypertension and certain heart arrhythmias — well before conventional symptoms appear.",
      "Clinical validation studies have shown that algorithms running on smartwatches and fitness trackers can identify physiological patterns associated with the early stages of these conditions with accuracy that rivals many conventional screening tests.",
      "Healthcare providers are beginning to explore how the data generated by wearables can be integrated into clinical workflows, with several hospital systems piloting programmes that alert physicians when a patient's wearable data suggests a potential health concern.",
      "Privacy advocates have raised important questions about how the sensitive health data generated by millions of wearable devices is being stored, used and shared, calling for clearer regulatory frameworks to protect consumers.",
      "The technology is seen as particularly promising in low-and-middle-income countries where access to conventional diagnostic services is limited, with several African health systems already piloting wearable-based screening programmes in rural communities.",
    ],
    related: ["who-mental-health", "obesity-crisis", "alzheimers-treatment"],
  },

  // ---- EDUCATION ----
  {
    id: "universities-ai",
    category: "Education",
    title: "Universities Embrace AI Tools as Student Demand Grows Rapidly",
    image:
      "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=900&q=80",
    author: "Education Desk",
    date: "April 15, 2026",
    readTime: "4 min read",
    body: [
      "Higher education institutions around the world are accelerating their adoption of AI-powered learning platforms, driven by strong demand from students who have come to expect the kind of personalised, adaptive learning experiences that artificial intelligence can provide.",
      "The most widely adopted tools include AI tutoring systems that can identify gaps in individual students' understanding and tailor explanations accordingly, as well as automated feedback tools that give students detailed guidance on their written work within minutes of submission.",
      "Academics are divided on the implications of the shift, with some embracing AI as a powerful tool for democratising access to high-quality educational support and others warning of risks to academic integrity and the development of critical thinking skills.",
      "Universities are investing heavily in training academic staff to work effectively alongside AI tools, recognising that the technology is most effective when it is integrated thoughtfully into well-designed learning experiences rather than used as a simple substitute for human teaching.",
      "The rapid adoption is also raising important questions about data privacy, algorithmic bias and the risk that AI systems trained predominantly on data from wealthy Western institutions may not serve students from other cultural and educational backgrounds equally well.",
    ],
    related: ["ghana-coding", "global-literacy", "hybrid-learning"],
  },
  {
    id: "global-literacy",
    category: "Education",
    title: "Global Literacy Rates Rise for First Time in Over a Decade",
    image:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=900&q=80",
    author: "Education Desk",
    date: "April 13, 2026",
    readTime: "3 min read",
    body: [
      "New data published by UNESCO shows that global literacy rates have risen for the first time in more than a decade, with the most significant improvements recorded in sub-Saharan Africa and South Asia.",
      "The report attributes the progress to a combination of sustained investment in primary education, the expansion of mobile learning programmes that can reach children in remote areas, and improvements in teacher training and support.",
      "Despite the positive trend, the report warns that over 750 million adults worldwide still lack basic literacy skills, with women and girls disproportionately represented among those who have been left behind.",
      "Authors of the report call for continued and increased investment in foundational literacy programmes, warning that the gains of recent years could easily be reversed if funding is cut or political commitment wavers.",
    ],
    related: ["universities-ai", "ghana-coding", "hybrid-learning"],
  },
  {
    id: "ghana-coding",
    category: "Education",
    title: "Ghana Launches Free Coding Curriculum for All Secondary Schools",
    image:
      "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=900&q=80",
    author: "Education Desk",
    date: "April 11, 2026",
    readTime: "4 min read",
    body: [
      "The Ghanaian government has launched a landmark initiative to introduce free coding and computer science education in all public secondary schools across the country, beginning from the next academic year in one of the most ambitious digital education programmes ever attempted on the African continent.",
      "The programme, developed in partnership with leading technology companies including several African-founded startups, aims to equip over 500,000 students annually with practical digital skills directly relevant to the modern job market.",
      "Teachers will receive dedicated training through a new national certification programme in digital education, with regular ongoing support from a network of technology mentors recruited from Ghana's growing tech industry.",
      "Education officials say the initiative is a central pillar of a broader strategy to position Ghana as a digital economy leader in West Africa and to create clear pathways into the technology sector for young Ghanaians who might otherwise miss out on the opportunities the digital economy offers.",
      "The announcement has been widely praised by technology entrepreneurs, educators and development organisations, though some critics have raised questions about whether sufficient infrastructure — including reliable electricity and internet connectivity — is in place to make the programme a success in rural areas.",
    ],
    related: ["universities-ai", "africa-tech", "global-literacy"],
  },
  {
    id: "hybrid-learning",
    category: "Education",
    title: "Study Finds Students Learn Faster with Hybrid Learning Models",
    image:
      "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?w=900&q=80",
    author: "Education Desk",
    date: "April 9, 2026",
    readTime: "3 min read",
    body: [
      "A comprehensive new study involving over 80,000 students across 15 countries has found that hybrid learning models — combining in-person teaching with structured online components — consistently produce better academic outcomes than either fully face-to-face or fully remote approaches.",
      "The research found that the benefits of hybrid learning were most pronounced in mathematics and science subjects, where the ability to revisit recorded explanations and work at an individual pace appears to provide significant advantages.",
      "Students from lower-income backgrounds showed the largest improvements under hybrid models, suggesting that the approach may have an important role to play in reducing educational inequalities.",
      "However, the study also found that the quality of implementation matters enormously, with poorly designed hybrid programmes performing no better than traditional approaches. The researchers identified clear guidelines for effective hybrid course design.",
    ],
    related: ["universities-ai", "ghana-coding", "global-literacy"],
  },
  {
    id: "international-students",
    category: "Education",
    title: "International Student Enrolment Hits New Records Worldwide in 2026",
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=900&q=80",
    author: "Education Desk",
    date: "April 7, 2026",
    readTime: "3 min read",
    body: [
      "The number of students studying outside their home country has reached a new global record in 2026, with total international enrolment surpassing 8 million for the first time and showing no signs of plateauing.",
      "African and Asian students account for the largest share of internationally mobile students, driven by a combination of aspirations for better educational opportunities, skills shortages that make internationally educated graduates attractive to employers, and improving scholarship availability.",
      "Institutions in the UK, US, Canada and Australia remain the most popular destinations, but universities in mainland Europe, the Gulf states and increasingly within Africa itself are attracting growing numbers of internationally mobile students.",
      "The economic contribution of international students to host countries is substantial, with the sector worth tens of billions of dollars annually in tuition fees, living expenses and associated economic activity.",
    ],
    related: ["universities-ai", "global-literacy", "ghana-coding"],
  },
  {
    id: "teachers-union",
    category: "Education",
    title:
      "Teachers' Unions Call for Better Pay and Improved Classroom Conditions",
    image:
      "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=900&q=80",
    author: "Education Desk",
    date: "April 5, 2026",
    readTime: "3 min read",
    body: [
      "Teachers' unions in over 30 countries have coordinated a global campaign calling for significant improvements in teacher pay, working conditions and professional support, warning that the teaching profession is in crisis and that the consequences for students will be severe if action is not taken.",
      "The campaign highlights persistent pay gaps between teaching and comparable professions, growing administrative burdens that eat into time available for lesson planning and student support, and class sizes that have increased significantly in many countries as budget pressures have mounted.",
      "Recruitment into teacher training programmes has fallen sharply in several countries, with fewer young people choosing teaching as a career path in the face of relatively low pay, high workloads and, in some regions, safety concerns.",
      "Government responses have varied widely, with some administrations announcing multi-year pay deals and investment in school infrastructure while others have dismissed the unions' demands as financially unrealistic given wider public spending constraints.",
    ],
    related: ["universities-ai", "global-literacy", "hybrid-learning"],
  },
];

// ---- Build article lookup map ----
const articleMap = {};
articles.forEach((a) => {
  articleMap[a.id] = a;
});

// ---- Wire up all Read More buttons ----
document.querySelectorAll(".news-card").forEach((card) => {
  const id = card.dataset.articleId;
  if (!id) return;
  const btn = card.querySelector(".read-more");
  if (!btn) return;
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    window.location.href = "article.html?id=" + id;
  });
});

// ---- On article.html: populate from URL ----
if (document.getElementById("articleTitle")) {
  const params = new URLSearchParams(window.location.search);
  const article = articleMap[params.get("id")];

  if (article) {
    document.title = "Xpress News — " + article.title;
    document.getElementById("articleImage").src = article.image;
    document.getElementById("articleImage").alt = article.title;
    document.getElementById("articleCategory").textContent = article.category;
    document.getElementById("articleTitle").textContent = article.title;
    document.getElementById("articleMeta").textContent =
      "By " +
      article.author +
      "  |  " +
      article.date +
      "  |  " +
      article.readTime;

    const contentEl = document.getElementById("articleContent");
    const firstPara = article.body[0] || "";
    const metaDesc = firstPara.substring(0, 160) + "...";

    // Update Meta Tags Dynamically for SEO/Sharing
    const descriptionTag = document.querySelector('meta[name="description"]');
    if (descriptionTag) descriptionTag.content = metaDesc;

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.content = article.title;

    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.content = metaDesc;

    const ogImage = document.querySelector('meta[property="og:image"]');
    if (ogImage) ogImage.content = window.location.origin + "/" + article.image;

    article.body.forEach((para) => {
      const p = document.createElement("p");
      p.textContent = para;
      contentEl.appendChild(p);
    });

    // Back button
    const categoryPageMap = {
      "Top News": "Topnews.html",
      Business: "Bussiness.html",
      Technology: "Technology.html",
      Health: "Health.html",
      Sports: "Sports.html",
      Education: "Education.html",
    };
    document.getElementById("backBtn").href =
      categoryPageMap[article.category] || "Index.html";

    // Related articles
    const relatedGrid = document.getElementById("relatedGrid");
    if (article.related && relatedGrid) {
      article.related.slice(0, 3).forEach((relId) => {
        const rel = articleMap[relId];
        if (!rel) return;
        const div = document.createElement("div");
        div.className = "news-card";
        div.dataset.articleId = rel.id;
        div.innerHTML =
          '<img src="' +
          rel.image +
          '" class="news-image" alt="' +
          rel.title +
          '" />' +
          '<div class="news-card-body">' +
          '<div class="news-category">' +
          rel.category +
          "</div>" +
          "<h3>" +
          rel.title +
          "</h3>" +
          "<p>" +
          rel.body[0].substring(0, 100) +
          "...</p>" +
          '<a href="#" class="read-more">Read More</a>' +
          "</div>";
        relatedGrid.appendChild(div);
        const btn = div.querySelector(".read-more");
        btn.addEventListener("click", (e) => {
          e.preventDefault();
          window.location.href = "article.html?id=" + rel.id;
        });
      });
    }
  } else {
    document.getElementById("articleTitle").textContent = "Article not found";
    document.getElementById("articleContent").innerHTML =
      '<p>Sorry, this article could not be loaded. <a href="Index.html">Go back home</a>.</p>';
    document.getElementById("relatedSection").style.display = "none";
  }
}
