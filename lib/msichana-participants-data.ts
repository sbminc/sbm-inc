// Msichana Young Women's Summit Featured Women Data
// This file contains information about notable women being highlighted in the yearbook-style presentation

export interface FeaturedWoman {
  id: number;
  name: string;
  age?: number;
  school?: string;
  grade?: string;
  hometown?: string;
  image: string;
  bio: string;
  achievements?: string[];
  goals?: string[];
  favoriteQuote?: string;
  interests?: string[];
}

// Msichana Young Women's Summit 2025 - Featured Notable Women
export const participants: FeaturedWoman[] = [
  // Financial Literacy & Empowerment
  {
    id: 1,
    name: "Mellody Hobson",
    image: "/images/msichana-presentation-2025/financial-literacy/mellody-hobson.jpg",
    bio: "Co-CEO & President of Ariel Investments, one of the largest Black-owned investment firms in the U.S. She emphasizes financial literacy, inclusion, and diversity in corporate governance.",
    favoriteQuote: "Investing is a pathway to empowerment.",
    achievements: [
      "Co-CEO & President of Ariel Investments",
      "Serves on numerous boards and commissions",
      "Champion of financial inclusion and diversity"
    ],
    interests: ["Financial Literacy", "Corporate Governance", "Diversity & Inclusion"]
  },
  {
    id: 2,
    name: "Thasunda Brown Duckett",
    image: "/images/msichana-presentation-2025/financial-literacy/thasunda-brown-duckett.jpg",
    bio: "CEO of TIAA, a financial services firm serving academics, researchers, and governmental institutions. Earlier, she led large-scale operations in consumer banking.",
    achievements: [
      "CEO of TIAA",
      "One of only a few Black women to lead a Fortune 500 company",
      "Former leader in consumer banking operations"
    ],
    interests: ["Financial Services", "Leadership", "Corporate Strategy"]
  },
  {
    id: 3,
    name: "Suzanne Shank",
    image: "/images/msichana-presentation-2025/financial-literacy/suzanne-shank.JPG",
    bio: "CEO & President of Siebert Williams Shank & Co, one of the largest Black-owned investment banking firms in the U.S. She began her career as an engineer before moving into finance.",
    favoriteQuote: "The most important thing we can do right now is give a hand up and provide mentorship for other women.",
    achievements: [
      "CEO & President of Siebert Williams Shank & Co",
      "Started career as an engineer",
      "Leader in investment banking"
    ],
    interests: ["Investment Banking", "Mentorship", "Engineering"]
  },
  {
    id: 4,
    name: "Tonya Rapley",
    image: "/images/msichana-presentation-2025/financial-literacy/tonya-rapley.jpg",
    bio: "Founder of My Fab Finance, a financial education platform for women, especially women of color. Creator of the '#BanishTheBalance' challenge to help people reduce debt.",
    achievements: [
      "Founder of My Fab Finance",
      "Creator of '#BanishTheBalance' challenge",
      "Helps thousands improve their finances"
    ],
    interests: ["Financial Education", "Debt Reduction", "Women's Empowerment"]
  },
  {
    id: 5,
    name: "Carla Harris",
    image: "/images/msichana-presentation-2025/financial-literacy/carla-harris.JPG",
    bio: "Vice Chairman, Wealth Management at Morgan Stanley. Known for speaking and writing on leadership, networking, and navigating the corporate world.",
    favoriteQuote: "Invest not just in money, but in relationships and reputation.",
    achievements: [
      "Vice Chairman, Wealth Management at Morgan Stanley",
      "Renowned speaker and author on leadership",
      "Expert in corporate navigation and networking"
    ],
    interests: ["Wealth Management", "Leadership", "Professional Development"]
  },

  // Mental Health & Wellness
  {
    id: 6,
    name: "Dr. Joy Harden Bradford",
    image: "/images/msichana-presentation-2025/mental-health/dr-joy-harden-bradford.jpg",
    bio: "Founder of Therapy for Black Girls, a widely known platform centering mental wellness for Black women and girls.",
    achievements: [
      "Founder of Therapy for Black Girls",
      "Mental health advocate and therapist",
      "Platform serving thousands of Black women and girls"
    ],
    interests: ["Mental Health", "Therapy", "Community Wellness"]
  },
  {
    id: 7,
    name: "Nedra Glover Tawwab",
    image: "/images/msichana-presentation-2025/mental-health/nedra-glover-tawwab.PNG",
    bio: "Licensed therapist known for her work on boundaries, healthy relationships, and mental wellness.",
    achievements: [
      "Licensed therapist and author",
      "Expert in boundaries and relationships",
      "Mental wellness advocate"
    ],
    interests: ["Therapy", "Healthy Relationships", "Boundaries"]
  },
  {
    id: 8,
    name: "Leslie Short",
    image: "/images/msichana-presentation-2025/mental-health/leslie-short.JPG",
    bio: "Mediator, coach, and speaker bridging activism, organizational conflict, and personal growth.",
    achievements: [
      "Professional mediator and coach",
      "Expert in conflict resolution",
      "Speaker on activism and personal growth"
    ],
    interests: ["Conflict Resolution", "Coaching", "Activism"]
  },
  {
    id: 9,
    name: "N. Damali Peterman, Esq.",
    image: "/images/msichana-presentation-2025/mental-health/n-damali-peterman-esq.JPG",
    bio: "Author of 'Negotiating While Black,' focusing on bias, conflict, and communication in professional settings.",
    achievements: [
      "Author of 'Negotiating While Black'",
      "Expert in professional communication",
      "Specialist in bias and conflict resolution"
    ],
    interests: ["Negotiation", "Professional Communication", "Bias Training"]
  },
  {
    id: 10,
    name: "Dr. Tema Bryant",
    image: "/images/msichana-presentation-2025/mental-health/dr-tema-bryant.JPG",
    bio: "Clinical psychologist, author, and speaker addressing trauma, faith, and culturally responsive therapy.",
    achievements: [
      "Clinical psychologist and author",
      "Expert in trauma and faith-based therapy",
      "Advocate for culturally responsive treatment"
    ],
    interests: ["Clinical Psychology", "Trauma Therapy", "Faith & Healing"]
  },
  {
    id: 11,
    name: "Minda Harts",
    image: "/images/msichana-presentation-2025/mental-health/minda-harts.JPG",
    bio: "Author and advocate helping women of color in career navigation, leadership, and advancement.",
    achievements: [
      "Author and career advocate",
      "Expert in career navigation for women of color",
      "Leadership and advancement specialist"
    ],
    interests: ["Career Coaching", "Leadership Development", "Women's Advancement"]
  },
  {
    id: 12,
    name: "Dr. Angela Byars-Winston",
    image: "/images/msichana-presentation-2025/mental-health/dr-angela-byars‑winston.jpg",
    bio: "Researcher specializing in mentorship, career development, and equity in STEM.",
    achievements: [
      "STEM mentorship researcher",
      "Expert in career development",
      "Advocate for equity in STEM fields"
    ],
    interests: ["STEM Mentoring", "Career Development", "Educational Equity"]
  },

  // Politics & Leadership
  {
    id: 13,
    name: "Shirley Chisholm",
    image: "/images/msichana-presentation-2025/politics-leadership/shirley-chisholm.JPG",
    bio: "The first Black woman elected to the United States Congress (1968) and the first Black woman to run for U.S. President with a major party (1972). A fearless advocate for civil rights, education, and women's rights.",
    favoriteQuote: "If they don't give you a seat at the table, bring a folding chair.",
    achievements: [
      "First Black woman elected to U.S. Congress",
      "First Black woman to run for U.S. President",
      "Champion of civil rights and women's rights"
    ],
    interests: ["Civil Rights", "Education", "Women's Rights"]
  },
  {
    id: 14,
    name: "Stacey Abrams",
    image: "/images/msichana-presentation-2025/politics-leadership/stacey-abrams.JPG",
    bio: "Political leader, voting rights activist, and founder of Fair Fight Action, which works to combat voter suppression. Her organizing is widely credited with increasing voter turnout in Georgia and helping flip key elections.",
    achievements: [
      "Founder of Fair Fight Action",
      "Voting rights activist and political leader",
      "Best-selling author and former Georgia gubernatorial candidate"
    ],
    interests: ["Voting Rights", "Political Organizing", "Writing"]
  },
  {
    id: 15,
    name: "Kamala Harris",
    image: "/images/msichana-presentation-2025/politics-leadership/kamala-harris.PNG",
    bio: "The first Black and South Asian woman to serve as Vice President of the United States. She previously served as U.S. Senator and California's Attorney General, with a strong focus on criminal justice reform, economic equity, and public health.",
    favoriteQuote: "My mother would look at me and she'd say, 'Kamala, you may be the first to do many things, but make sure you're not the last.'",
    achievements: [
      "First Black and South Asian woman Vice President",
      "Former U.S. Senator and California Attorney General",
      "Champion of criminal justice reform"
    ],
    interests: ["Criminal Justice Reform", "Economic Equity", "Public Health"]
  },
  {
    id: 16,
    name: "Angela Davis",
    image: "/images/msichana-presentation-2025/politics-leadership/angela-davis.JPG",
    bio: "Scholar, activist, and former political prisoner known for her work in civil rights, prison abolition, and racial justice. A lifelong political activist who has inspired generations through her teaching and organizing.",
    achievements: [
      "Scholar and civil rights activist",
      "Prison abolition advocate",
      "Symbol of resistance and social justice"
    ],
    interests: ["Civil Rights", "Prison Abolition", "Social Justice"]
  },
  {
    id: 17,
    name: "Ayanna Pressley",
    image: "/images/msichana-presentation-2025/politics-leadership/ayanna-pressley.JPG",
    bio: "U.S. Representative from Massachusetts and the first Black woman elected to Congress from her state. A member of 'The Squad,' she's known for championing criminal justice reform, reproductive rights, and student debt relief.",
    favoriteQuote: "I'm not here just to occupy space—I'm here to create it.",
    achievements: [
      "First Black woman elected to Congress from Massachusetts",
      "Member of 'The Squad'",
      "Champion of criminal justice reform"
    ],
    interests: ["Criminal Justice Reform", "Reproductive Rights", "Student Debt Relief"]
  },

  // STEM & Innovation
  {
    id: 18,
    name: "Talitha Washington",
    image: "/images/msichana-presentation-2025/stem/talitha-washington.jpg",
    bio: "Mathematician and academic specializing in applied mathematics and STEM education policy. In 2023 she became president of the Association for Women in Mathematics.",
    achievements: [
      "President of Association for Women in Mathematics",
      "Applied mathematics specialist",
      "STEM education policy expert"
    ],
    interests: ["Applied Mathematics", "Educational Systems Design", "Women in STEM"]
  },
  {
    id: 19,
    name: "Novella Bridges",
    image: "/images/msichana-presentation-2025/stem/novella-bridges.JPG",
    bio: "Chemical engineer and researcher in radiochemistry, advocate for underrepresented groups in STEM. She worked in national labs and on nuclear research.",
    favoriteQuote: "High-impact research and representation go hand in hand.",
    achievements: [
      "Chemical engineer and radiochemistry researcher",
      "Worked in national labs on nuclear research",
      "Advocate for underrepresented groups in STEM"
    ],
    interests: ["Chemical Engineering", "Radiochemistry", "Nuclear Research"]
  },
  {
    id: 20,
    name: "Tanya Moore",
    image: "/images/msichana-presentation-2025/stem/tanya-moore.JPG",
    bio: "Biostatistician, mathematics educator, and advocate for women of color in math and science. She co-founded the Infinite Possibilities Conference to support minority representation in math.",
    achievements: [
      "Biostatistician and mathematics educator",
      "Co-founder of Infinite Possibilities Conference",
      "Recognized as 'STEM Woman of the Year'"
    ],
    interests: ["Biostatistics", "Mathematics Education", "Minority Representation"]
  },
  {
    id: 21,
    name: "K. Renee Horton",
    image: "/images/msichana-presentation-2025/stem/k-renee-horton2.JPG",
    bio: "Physicist and materials scientist, working with NASA as an Airworthiness Deputy. She was the first Black person to receive a PhD in material science + engineering with emphasis in physics at the University of Alabama.",
    achievements: [
      "NASA Airworthiness Deputy",
      "First Black PhD in material science + engineering at University of Alabama",
      "Champion of STEM access for people with disabilities"
    ],
    interests: ["Physics", "Materials Science", "Aerospace Engineering"]
  },
  {
    id: 22,
    name: "Hadiyah-Nicole Green",
    image: "/images/msichana-presentation-2025/stem/hadiyah‑nicole-green.JPG",
    bio: "Medical physicist and researcher developing cancer therapies using laser-activated nanoparticles. She is one of very few Black women in the U.S. with a PhD in physics.",
    favoriteQuote: "Her work combines physics, medicine, and innovation to combat cancer.",
    achievements: [
      "Medical physicist and cancer researcher",
      "One of very few Black women with PhD in physics",
      "Developer of laser-activated nanoparticle cancer therapy"
    ],
    interests: ["Medical Physics", "Cancer Research", "Nanotechnology"]
  },
  {
    id: 23,
    name: "Donna Auguste",
    image: "/images/msichana-presentation-2025/stem/donna-auguste.JPG",
    bio: "Engineer, entrepreneur, and inventor. She contributed to early Apple technologies and later founded her own ventures. Her background combines hardware, software, and social impact.",
    achievements: [
      "Engineer and entrepreneur",
      "Contributor to early Apple technologies",
      "Patent holder and STEM access investor"
    ],
    interests: ["Engineering", "Entrepreneurship", "Technology Innovation"]
  },
  {
    id: 24,
    name: "Dr. Patricia Bath",
    image: "/images/msichana-presentation-2025/stem/dr-patricia-bath.JPG",
    bio: "Ophthalmologist, inventor, and pioneer. She invented the laserphaco probe for cataract removal, earning one of the first medical patents by a Black woman. She also made history as the first Black woman faculty member in ophthalmology at UCLA.",
    favoriteQuote: "Her invention improved outcomes for millions with vision loss.",
    achievements: [
      "Inventor of the laserphaco probe for cataract removal",
      "First medical patent by a Black woman",
      "First Black woman faculty member in ophthalmology at UCLA"
    ],
    interests: ["Ophthalmology", "Medical Innovation", "Vision Health"]
  },
  {
    id: 25,
    name: "Dr. Nia Imara",
    image: "/images/msichana-presentation-2025/stem/dr-nia-imara.PNG",
    bio: "Astrophysicist, artist, and educator who integrates science and art to reach underrepresented students. She founded Onaketa, a nonprofit providing STEM tutoring for youth of color.",
    favoriteQuote: "She uses cosmic imagery and art to inspire new perspectives on science.",
    achievements: [
      "Astrophysicist, artist, and educator",
      "Founder of Onaketa nonprofit",
      "Integrates science and art for underrepresented students"
    ],
    interests: ["Astrophysics", "Art & Science Integration", "STEM Education"]
  }
];

// Helper function to get featured woman by ID
export function getParticipantById(id: number): FeaturedWoman | undefined {
  return participants.find(participant => participant.id === id);
}

// Helper function to get all featured women
export function getAllParticipants(): FeaturedWoman[] {
  return participants;
}

// Statistics for the presentation
export const summitStats = {
  totalFeaturedWomen: participants.length,
  categories: ["Financial Literacy & Empowerment", "Mental Health & Wellness", "Politics & Leadership", "STEM & Innovation"]
};
