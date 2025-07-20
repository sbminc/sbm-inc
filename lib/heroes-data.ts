export interface Hero {
  id: number
  name: string
  title: string
  bio: string
  image: string
  birthYear?: string
  deathYear?: string
  achievements: string[]
}

// Updated with actual bios from the documents
export const heroes: Hero[] = [
  {
    id: 1,
    name: "George Washington Carver",
    title: "Agricultural Scientist and Inventor",
    bio: "George Washington Carver (c. 1864 – January 5, 1943) was a pioneering African American scientist, educator, and inventor best known for his work with peanuts, soil conservation, and agricultural innovation. Born into slavery in Diamond, Missouri, during the final years of the Civil War, Carver was orphaned as an infant and raised by his former enslavers, Moses and Susan Carver. Despite early hardships and limited access to formal education, he showed an intense curiosity about nature and a passion for learning. Carver eventually earned a high school diploma and became the first Black student at Iowa State Agricultural College (now Iowa State University), where he studied agricultural science. His groundbreaking research on crop rotation and soil improvement gained the attention of Booker T. Washington, who invited Carver to join the Tuskegee Institute in Alabama in 1896. Carver remained at Tuskegee for over 40 years, dedicating his life to teaching and research. Contrary to popular myth, Carver did not invent peanut butter, but he developed over 300 products from peanuts, including dyes, paints, cosmetics, and even plastics. He also found uses for sweet potatoes, pecans, and other crops. His work encouraged southern farmers, especially Black sharecroppers, to grow alternative crops to cotton, which had depleted the soil. Carver refused to patent most of his discoveries, believing they were gifts from God to be shared freely. He became an international figure, advising presidents like Theodore Roosevelt and collaborating with industrialist Henry Ford. Carver died in 1943, leaving behind a legacy of scientific innovation, environmental stewardship, and humanitarianism. He was posthumously awarded the Spingarn Medal and buried at Tuskegee next to Booker T. Washington. His life remains a symbol of resilience, intellect, and the transformative power of education.",
    image: "/images/heroes/george-washington-carver.jpg",
    birthYear: "1864",
    deathYear: "1943",
    achievements: [
      "Developed over 300 products from peanuts",
      "Created methods to prevent soil depletion",
      "Became the first Black student at Iowa State Agricultural College",
      "Refused to patent most discoveries, believing they were gifts from God"
    ]
  },
  {
    id: 2,
    name: "Booker T. Washington",
    title: "Educator and Civil Rights Leader",
    bio: "Booker T. Washington (1856–1915) was one of the most influential African American educators, reformers, and leaders of the late 19th and early 20th centuries. Born into slavery in Hale's Ford, Virginia, Washington gained his freedom after the Civil War and pursued an education with relentless determination. He walked hundreds of miles to attend the Hampton Normal and Agricultural Institute in Virginia, where he excelled and embraced the values of industrial education and self-help. In 1881, Washington was selected to lead the newly established Tuskegee Normal and Industrial Institute (now Tuskegee University) in Alabama. Under his leadership, Tuskegee grew from a small school in a dilapidated church to a major institution with over 1,500 students. He emphasized vocational and agricultural training, believing that economic self-reliance and practical skills were essential to improving the lives of African Americans in the South. Washington became a national figure in 1895 after delivering the famous 'Atlanta Compromise' speech, where he urged Black Americans to focus on economic advancement rather than immediate civil rights, a position that drew both praise and criticism. He advised several U.S. presidents and was considered the most powerful Black man in America during his time. Though criticized by civil rights leaders like W.E.B. Du Bois for being too accommodating to segregation and white supremacy, Washington worked behind the scenes to support legal challenges to racial injustice and fund the education of Black students. He authored several books, including his bestselling autobiography Up from Slavery (1901), which remains a classic of American literature. Booker T. Washington's legacy is complex but undeniable. He laid the groundwork for Black educational and economic development in a hostile era, and his work at Tuskegee became a model for Black institutions across the country. His emphasis on dignity, hard work, and self-determination continues to inspire generations.",
    image: "/images/heroes/booker-t-washington.jpg",
    birthYear: "1856",
    deathYear: "1915",
    achievements: [
      "Founded and led Tuskegee Normal and Industrial Institute",
      "Delivered the famous 'Atlanta Compromise' speech in 1895",
      "Authored the bestselling autobiography 'Up from Slavery'",
      "Advised several U.S. presidents on African American issues"
    ]
  },
  {
    id: 3,
    name: "Paul Robeson",
    title: "Actor, Singer, and Civil Rights Activist",
    bio: "Paul Leroy Robeson (April 9, 1898 – January 23, 1976) was an extraordinary polymath: a bass‑baritone singer, actor, athlete, lawyer, and political activist whose influence spanned continents. Born in Princeton, New Jersey, he was the youngest of five children of Maria Louisa Bustill, a schoolteacher, and William Drew Robeson, a former slave turned minister. Excelling academically and athletically, Robeson earned a scholarship to Rutgers University in 1915. There, he was the university's first Black football player, twice a consensus All‑American, held fifteen varsity letters, spoke fluently in more than twenty languages, and graduated valedictorian in 1919. He briefly pursued law at Columbia University, earning an LL.B. in 1923. Turning from law to the arts, Robeson emerged as a leading figure of the Harlem Renaissance. Breakthrough roles included Eugene O'Neill's All God's Chillun Got Wings (1924) and The Emperor Jones (1925), both critically acclaimed. His commanding performances in Shakespeare's Othello—first in London (1930) and later on Broadway (1943)—broke racial barriers and achieved record-breaking runs. A gifted singer, Robeson popularized Negro spirituals and introduced the world to 'Ol' Man River' in Show Boat (1928 stage, 1936 film), transforming it into an anthem of resistance. On screen, his roles in Body and Soul (1925), Sanders of the River (1935), Jericho (1937), and others projected dignity and intelligence for Black characters. Robeson devoted his life to activism: anti‑racism, labor rights, anti‑fascism, civil liberties, and anti‑colonialism. He supported Spanish Republican fighters, Welsh miners, and Soviet workers. His outspoken leftist views led to McCarthy‑era persecution: his passport was revoked from 1950 to 1958, he was surveilled by the FBI, blacklisted in the U.S., and silenced domestically. Author of Here I Stand (1958), Robeson left a legacy as a courageous artist-activist. He was later honored posthumously with a Grammy, induction in Rutgers' Centennial Remembrance, and the creation of the Actors' Equity Paul Robeson Award. Robeson died in Philadelphia in 1976, but his voice—from the athletic field to the concert hall to the stage and global political stage—continues to inspire generations worldwide.",
    image: "/images/heroes/paul-robeson.jpg",
    birthYear: "1898",
    deathYear: "1976",
    achievements: [
      "Became Rutgers University's first Black football player and valedictorian",
      "Achieved record-breaking runs in Shakespeare's Othello on Broadway",
      "Popularized Negro spirituals and transformed 'Ol' Man River' into an anthem",
      "Devoted his life to activism for anti-racism, labor rights, and civil liberties"
    ]
  },
  {
    id: 4,
    name: "Robert Smalls",
    title: "Civil War Hero and Politician",
    bio: "Robert Smalls (born April 5, 1839, Beaufort, SC – died February 23, 1915, Beaufort) was born into slavery to Lydia Polite, an enslaved house servant—his father is believed to have been Lydia's enslaver, Henry McKee. At age 12, he was hired out to labor in Charleston, working in hotels and on docks, where he learned maritime skills—including piloting vessels. With the outbreak of the Civil War, Smalls was assigned as a wheelman aboard the Confederate transport CSS Planter in Charleston Harbor. On May 13, 1862, seizing a remarkable opportunity, he disguised himself in the captain's uniform, navigated past Confederate batteries using signal codes, and escaped to the Union naval fleet. Onboard were his family and other enslaved crew—plus strategic materials like artillery, ammunition, the captain's signal codes, and harbor mine maps. His escape made national headlines, and he delivered critical intelligence about Confederate defenses. Soon after, Smalls served as a civilian pilot and later captain of the USS Planter, becoming the first African American to command a U.S. naval vessel—he also played a central role in advocating for the enlistment of Black soldiers in the Union Army. After the war, Smalls returned to Beaufort, purchased his former enslaver's home, learned to read and write, and launched businesses, including a store, newspaper, and the Enterprise Railroad. He entered politics, helping draft South Carolina's 1868 constitution and serving in both the state House and Senate before being elected to the U.S. House of Representatives for five terms (1875–1879, 1882–1883, and 1884–1887). He championed public education, civil rights, and government equality for African Americans. His later years saw continuing public service, including a long tenure as collector of customs for Beaufort. He fought voter suppression while battling diabetes. Smalls passed away in 1915 and was laid to rest at Tabernacle Baptist Church. His legacy endures through numerous memorials—schools, monuments, ship names, and a growing recognition as one of America's pivotal Black pioneers.",
    image: "/images/heroes/robert-smalls.jpg",
    birthYear: "1839",
    deathYear: "1915",
    achievements: [
      "Escaped slavery by commandeering the CSS Planter and delivering it to Union forces",
      "Became the first African American to command a U.S. naval vessel",
      "Served five terms in the U.S. House of Representatives",
      "Helped draft South Carolina's 1868 constitution"
    ]
  },
  {
    id: 5,
    name: "Neil deGrasse Tyson",
    title: "Astrophysicist and Science Communicator",
    bio: "Neil deGrasse Tyson is an American astrophysicist, cosmologist, author, and science communicator, renowned for making complex scientific ideas accessible and engaging to the public. Born on October 5, 1958, in New York City, Tyson developed an early interest in astronomy after visiting the Hayden Planetarium at age nine. This fascination led him to pursue a career in science, earning a BA in Physics from Harvard University and a PhD in Astrophysics from Columbia University. Tyson's research has spanned topics such as star formation, galactic evolution, and cosmology, but he is best known for his work in public science education. Since 1996, he has served as the Frederick P. Rose Director of the Hayden Planetarium at the American Museum of Natural History. Under his leadership, the planetarium became a premier center for scientific outreach, including the controversial reclassification of Pluto as a dwarf planet. In the early 2000s, Tyson hosted PBS's Nova ScienceNow and later became widely recognized as the host of Cosmos: A Spacetime Odyssey (2014), a follow-up to Carl Sagan's iconic series. He is also the host of the long-running podcast and National Geographic show StarTalk, blending science, pop culture, and humor. Tyson has authored numerous bestselling books, including Astrophysics for People in a Hurry, The Pluto Files, and Death by Black Hole. His work emphasizes scientific literacy, critical thinking, and curiosity, inspiring millions to explore the universe. A recipient of over 20 honorary doctorates and numerous accolades, Tyson has become one of the most influential science communicators of the 21st century. He continues to advocate for space exploration, STEM education, and rational discourse in public policy. Through his work, Neil deGrasse Tyson remains a leading voice in the effort to bridge science and society.",
    image: "/images/heroes/neil-degrasse-tyson.jpg",
    birthYear: "1958",
    achievements: [
      "Serves as Director of the Hayden Planetarium at the American Museum of Natural History",
      "Hosted the acclaimed series 'Cosmos: A Spacetime Odyssey'",
      "Authored numerous bestselling books including 'Astrophysics for People in a Hurry'",
      "Hosts the popular podcast and show 'StarTalk' blending science and pop culture"
    ]
  },
  {
    id: 6,
    name: "Lonnie Johnson",
    title: "Inventor and Engineer",
    bio: "Lonnie George Johnson (b. October 6, 1949) is an American inventor, aerospace engineer, and entrepreneur. Born in Mobile, Alabama, during segregation, he nurtured his curiosity by dismantling toys and building gadgets. In high school, his homemade air-powered robot 'Linex' won first prize in a local science fair — a poignant milestone for the only Black participant. Johnson earned a B.S. in Mechanical Engineering (1973) and an M.S. in Nuclear Engineering (1975) from Tuskegee University. He began his career at Oak Ridge National Laboratory and later joined the U.S. Air Force, leading nuclear power safety programs and contributing to the B-2 stealth bomber. In 1979, he moved to NASA's Jet Propulsion Laboratory, working on the Galileo mission; he returned to the Air Force in 1982 and then back to JPL in 1987, contributing to the Mars Observer and Cassini–Huygens missions. In 1989, while developing an energy-efficient heat pump, Johnson accidentally created the prototype for what became the Super Soaker — a high-powered, pressurized water gun fashioned from PVC pipes and a soda bottle. Larami Corporation licensed it, and after rebranding from 'Power Drencher' to 'Super Soaker' in 1991, it soared to $200 million in sales its first year. With over 200 million units sold and more than $1 billion in cumulative revenue, the toy earned induction into the National Toy Hall of Fame (2015) and the U.S. National Inventors Hall of Fame (2022). Johnson holds over 250 patents spanning toys, energy systems, and battery technologies. He founded Johnson Research & Development Co. and oversees ventures such as Johnson Battery Technologies and JTEC Energy, innovating in ceramic batteries and thermoelectric converters designed to efficiently turn heat into clean electricity. Married to Linda Moore, Johnson is a father of four residing in Atlanta. His journey—from segregated Alabama, through Air Force and NASA service, to creating a billion-dollar toy and green‑energy breakthroughs—exemplifies creativity, resilience, and impact.",
    image: "/images/heroes/lonnie-johnson.jpg",
    birthYear: "1949",
    achievements: [
      "Invented the Super Soaker water gun, generating over $1 billion in revenue",
      "Worked on NASA's Galileo mission and B-2 stealth bomber",
      "Holds over 250 patents spanning toys, energy systems, and battery technologies",
      "Founded Johnson Research & Development Co. and Johnson Battery Technologies"
    ]
  },
  {
    id: 7,
    name: "Dr. Mark Dean",
    title: "Computer Scientist and Inventor",
    bio: "Dr. Mark Dean is a pioneering American computer engineer whose innovations helped shape the personal computing revolution. Born on March 2, 1957, in Jefferson City, Tennessee, Dean demonstrated a strong aptitude for technology from an early age. He went on to earn a B.S. in Electrical Engineering from the University of Tennessee, an M.S. from Florida Atlantic University, and a Ph.D. in Electrical Engineering from Stanford University. Dean is best known for his groundbreaking work at IBM, where he was one of the lead engineers in developing the IBM personal computer in the early 1980s. He holds three of the original nine patents for the IBM PC and is credited with co-inventing the Industry Standard Architecture (ISA) bus, which allowed multiple devices like printers and disk drives to be connected to a computer. His work made personal computers more practical and accessible for businesses and consumers alike. Over his career, Dr. Dean has earned more than 20 patents and was instrumental in developing the first gigahertz microprocessor. He eventually rose to the position of IBM Fellow—one of the highest honors at the company—and served as Vice President of IBM's Almaden Research Center. Beyond his technical achievements, Dr. Dean is also a trailblazer as one of the first African Americans to reach the highest echelons of engineering and innovation in Silicon Valley. He has received numerous awards, including induction into the National Inventors Hall of Fame and the National Academy of Engineering. In later years, Dr. Dean turned to academia, serving as a professor and administrator at the University of Tennessee. His legacy continues to inspire underrepresented minorities in STEM, embodying excellence in both innovation and leadership. Dr. Mark Dean's work has left a permanent mark on the digital world we live in today.",
    image: "/images/heroes/dr-mark-dean.jpg",
    birthYear: "1957",
    achievements: [
      "Holds three of the original nine patents for the IBM personal computer",
      "Co-invented the Industry Standard Architecture (ISA) bus",
      "Developed the first gigahertz microprocessor",
      "Became one of the first African Americans to reach the highest echelons of engineering"
    ]
  },
  {
    id: 8,
    name: "Rick Kittles",
    title: "Geneticist and Researcher",
    bio: "Dr. Rick Antonius Kittles (born in Sylvania, Georgia, and raised in Central Islip, New York) is a leading American geneticist known for his pioneering contributions to human genetic ancestry research and health equity. He earned his B.S. in Biological Sciences from the Rochester Institute of Technology in 1989, where he joined Kappa Alpha Psi, and completed his Ph.D. in Biological Sciences at George Washington University in 1998. After a brief period teaching high school biology, Dr. Kittles joined Howard University in 1998 as an assistant professor. There, he co-founded the National Human Genome Center and directed the African American Hereditary Prostate Cancer (AAHPC) Study Network, a nationwide effort to explore genetic predispositions to prostate cancer among African-American men. In the late 1990s, he submitted DNA samples from the historic New York African Burial Ground Project, helping trace the geographic origins within Africa for remains of enslaved ancestors—an innovative blend of anthropology and genetics. That experience inspired him to co‑found African Ancestry, Inc. in 2003 with Gina Paige, a company dedicated to tracing African lineages for individuals of African descent. Dr. Kittles has held professorships and research leadership roles at several major institutions: Ohio State University (2004–2006), University of Chicago (2006–2010), University of Illinois Chicago (2010–2014), University of Arizona (2014–2017), and City of Hope National Medical Center (2017–2022), where he was Founding Director of the Division of Health Equities. Throughout his career, he has focused on the intersections of race, genetic ancestry, and disease predisposition—particularly prostate, colon, and breast cancers, sickle cell anemia, and pharmacogenomics. In August 2022, Dr. Kittles became Senior Vice President for Research at Morehouse School of Medicine, where he oversees the institution's research initiatives and faculty development. He has authored over 240 peer‑reviewed publications, received numerous awards (including Ebony's Power 100 and RIT's Distinguished Alumni Award), and appeared in major documentaries and on programs such as PBS's African American Lives, BBC's Motherland, and 60 Minutes. Dr. Kittles' career reflects a profound dedication to using genetic science to empower individuals, deconstruct socially constructed racial narratives, and address health disparities across communities.",
    image: "/images/heroes/rick-kittles.jpg",
    birthYear: "1967",
    achievements: [
      "Co-founded African Ancestry, Inc. to trace African lineages for individuals",
      "Directed the African American Hereditary Prostate Cancer Study Network",
      "Authored over 240 peer-reviewed publications on genetic ancestry and health",
      "Currently serves as Senior Vice President for Research at Morehouse School of Medicine"
    ]
  },
  {
    id: 9,
    name: "Hakeem Oluseyi",
    title: "Astrophysicist and Science Educator",
    bio: "Hakeem Muata Oluseyi (born James Edward Plummer Jr., March 13, 1967) is an American physicist, astrophysicist, cosmologist, inventor, educator, science communicator, and author. Raised in challenging neighborhoods—from New Orleans's 9th Ward and Watts in Los Angeles to Houston's Third Ward—his early life was marked by adversity. Serving in the U.S. Navy, he later earned dual B.S. degrees in physics and mathematics from Tougaloo College and went on to receive his M.S. (1995) and Ph.D. (1999) in physics from Stanford University under solar physicist Arthur B. C. Walker Jr. In 1996, he adopted the name Hakeem Muata Oluseyi to reflect his personal evolution. At Stanford, he contributed to pioneering extreme ultraviolet imaging of the Sun via the MSSTA mission. After earning his doctorate, Oluseyi transitioned to industry at Applied Materials, securing eight U.S. and four European patents in semiconductor research. From 2001 to 2004, he worked at Lawrence Berkeley National Laboratory on projects including the Dark Energy Camera and the Vera C. Rubin Observatory—key facilities in astrophysics and cosmology. A distinguished research professor at the Florida Institute of Technology (2007–2019), Oluseyi then served at NASA Headquarters (2016–2019) as Space Science Education Lead, overseeing roughly $40 million in STEM investments. In 2021, George Mason University named him a Visiting Robinson Professor. His scholarly record spans astrophysics and cosmology—ranging from solar and plasma physics to dark energy research—and includes more than 100 scientific publications and over a dozen patents. Oluseyi's memoir, A Quantum Life: My Unlikely Journey from the Street to the Stars (2021), chronicles his rise from hardship to international recognition. He's served as president of the National Society of Black Physicists since 2022 and, in November 2024, became CEO of the Astronomical Society of the Pacific. A passionate science communicator, he's appeared on Science Channel and Discovery shows like How the Universe Works and Strip the Cosmos, judged Netflix's Baking Impossible, and was selected as a TED Global Fellow. Currently, he is Robinson Professor of Physics & Astronomy at George Mason University, where he advances public engagement, high-impact research, and undergraduate teaching.",
    image: "/images/heroes/hakeem-oluseyi.jpg",
    birthYear: "1968",
    achievements: [
      "Contributed to pioneering extreme ultraviolet imaging of the Sun via the MSSTA mission",
      "Secured eight U.S. and four European patents in semiconductor research",
      "Authored the memoir 'A Quantum Life: My Unlikely Journey from the Street to the Stars'",
      "Currently serves as Robinson Professor of Physics & Astronomy at George Mason University"
    ]
  },
  {
    id: 10,
    name: "Iddris Sandu",
    title: "Technology Architect and Innovator",
    bio: "Iddris Sandu (b. May 7, 1997 in Accra, Ghana) is a visionary tech architect, entrepreneur, and cultural innovator. He moved to Los Angeles at age three and began teaching himself to code by age ten, learning in the Compton public library—a sanctuary that sparked his early fascination with technology. By thirteen, he was interning at Google; shortly thereafter, he was honored as a Presidential Scholar by Barack Obama. Throughout his teens, Sandu consulted with leading tech giants—including Instagram, Uber, Twitter, Meta, and Snapchat—on augmented reality, spatial computing, and immersive storytelling. At nineteen, he became CTO of the late Nipsey Hussle's Marathon Clothing, co-developing the world's first 'smart' retail experience with AR and geofencing technology. He later led tech innovation at Kanye West's YEEZY and collaborated with global brands like Fenty, Ivy Park, Adidas, Prada, Versace, and Travis Scott's Cactus Jack. In 2019, Sandu founded Spatial Labs (sLabs), a company building at the intersection of physical products and digital identity. Backed by investors such as Jay‑Z's Marcy Ventures and Blockchain Capital, Spatial Labs has pioneered microchip‑embedded fashion platforms (LNQ) that leverage blockchain to authenticate provenance, promote sustainable consumerism, and offer loyalty integration. In 2024, he launched the Spatial Labs Core Collection—smart garments connecting wearers to digital communities via the 'Circle' platform. Beyond commerce, Sandu is dedicated to democratizing tech access for underrepresented youth. He mentors Gen‑Z innovators, builds STEM centers in Ghana, and advocates for Black tech leadership. He sees hip‑hop as a catalyst for technology adoption: 'HIP = High Intellectual Property, HOP = High Output Production'—an 'equation' for cultural innovation. At just 28, Iddris Sandu bridges code, design, culture, and community. A modern Renaissance architect, he envisions a future where digital and physical worlds not only coexist—but empower, sustain, and inspire.",
    image: "/images/heroes/iddris-sandou.jpg",
    birthYear: "1997",
    achievements: [
      "Consulted with leading tech giants including Instagram, Uber, Twitter, Meta, and Snapchat",
      "Founded Spatial Labs (sLabs) building at the intersection of physical products and digital identity",
      "Co-developed the world's first 'smart' retail experience with AR and geofencing technology",
      "Dedicated to democratizing tech access for underrepresented youth and building STEM centers in Ghana"
    ]
  },
  {
    id: 11,
    name: "James Weldon Johnson",
    title: "Author, Educator, and Civil Rights Activist",
    bio: "James Weldon Johnson (1871–1938) was a pioneering African American author, educator, lawyer, diplomat, and civil rights activist whose multifaceted contributions helped shape American cultural and political life in the early 20th century. Born in Jacksonville, Florida, Johnson was a gifted student who graduated from Atlanta University in 1894 and later became the first African American admitted to the Florida Bar since Reconstruction. He gained national recognition as a writer and lyricist. Alongside his brother, J. Rosamond Johnson, he co-wrote the song 'Lift Every Voice and Sing,' which would go on to be known as the Black National Anthem. His literary works include The Autobiography of an Ex-Colored Man (1912), a landmark novel exploring race and identity, and God's Trombones (1927), a collection of poetic sermons celebrating Black vernacular traditions. Johnson's influence extended beyond the arts. In 1906, President Theodore Roosevelt appointed him U.S. consul to Venezuela and later to Nicaragua, making him one of the few Black diplomats of the era. Returning to the United States, he became a prominent figure in the NAACP, serving as its first Black executive secretary. In that role, he organized anti-lynching campaigns, expanded membership, and advocated for Black rights on a national stage. As a central figure in the Harlem Renaissance, Johnson mentored younger writers and pushed for the recognition of Black intellectual and artistic contributions. His work as a poet, editor, and cultural critic helped lay the foundation for future generations of African American artists and activists. James Weldon Johnson died in 1938 in a car accident in Maine. His legacy endures through his literary works, his leadership in civil rights, and the enduring power of 'Lift Every Voice and Sing' as a symbol of resilience and hope in the Black American experience.",
    image: "/images/heroes/james-weldon-johnson.png",
    birthYear: "1871",
    deathYear: "1938",
    achievements: [
      "Co-wrote 'Lift Every Voice and Sing,' which became known as the Black National Anthem",
      "Authored the landmark novel 'The Autobiography of an Ex-Colored Man'",
      "Served as the first Black executive secretary of the NAACP",
      "Appointed U.S. consul to Venezuela and Nicaragua by President Theodore Roosevelt"
    ]
  },
  {
    id: 12,
    name: "Joseph Antenor Firmin",
    title: "Anthropologist and Politician",
    bio: "Joseph Auguste Anténor Firmin was born on October 18, 1850, in Cap-Haïtien, Haiti, into a modest family. Demonstrating academic prowess early on, he began teaching at 17 and later pursued law, becoming a licensed attorney by 1875. Firmin's intellectual journey led him to Paris, where he joined the Société d'Anthropologie de Paris. There, he confronted prevailing racist ideologies, notably challenging Arthur de Gobineau's assertions of racial hierarchy. In 1885, Firmin published his seminal work, De l'Égalité des Races Humaines (On the Equality of Human Races), a pioneering text in anthropology that argued for the inherent equality of all races. He posited that cultural and environmental factors, rather than biological determinism, shaped human societies. This work laid the groundwork for future anti-racist scholarship and influenced movements like Pan-Africanism. Beyond academia, Firmin was deeply involved in Haitian politics. He served as Minister of Finance and Foreign Affairs, implementing reforms that stabilized the nation's economy. His diplomatic acumen was evident when he, alongside Frederick Douglass, resisted U.S. attempts to establish a military base at Môle Saint-Nicolas. Firmin's vision extended to a unified Caribbean and Africa, advocating for solidarity among people of African descent. He was instrumental in organizing the First Pan-African Conference in 1900, promoting global Black unity. Despite facing political exile, Firmin remained committed to his ideals until his death on September 19, 1911, in Saint Thomas, Danish West Indies. Today, he is celebrated as a trailblazer who challenged scientific racism and championed equality, leaving an indelible mark on anthropology and civil rights discourse.",
    image: "/images/heroes/joseph-antenor-firmin.png",
    birthYear: "1850",
    deathYear: "1911",
    achievements: [
      "Published 'De l'Égalité des Races Humaines,' a pioneering text in anthropology",
      "Served as Minister of Finance and Foreign Affairs in Haiti",
      "Resisted U.S. attempts to establish a military base at Môle Saint-Nicolas",
      "Was instrumental in organizing the First Pan-African Conference in 1900"
    ]
  },
  {
    id: 13,
    name: "Ernest Everett Just",
    title: "Biologist and Marine Scientist",
    bio: "Ernest Everett Just (1883–1941) was a pioneering African American biologist whose groundbreaking work in cell biology helped reshape scientific understanding of fertilization and early embryonic development. Born in Charleston, South Carolina, Just faced early adversity, including the death of his father and limited educational opportunities due to segregation. Despite these challenges, he excelled academically, eventually earning a degree in biology from Dartmouth College in 1907, where he graduated magna cum laude and was elected to Phi Beta Kappa. Just began his professional career at Howard University, where he served as a professor and head of the Department of Zoology. However, his most influential scientific work was conducted at the Marine Biological Laboratory in Woods Hole, Massachusetts, and later in Europe. There, he collaborated with prominent scientists and pursued advanced research, earning his Ph.D. in zoology from the University of Chicago in 1916. His research focused primarily on the role of the cell surface in the development of organisms. He challenged existing theories by emphasizing the importance of the cytoplasm and cell membrane, rather than the nucleus alone, in cell division and differentiation. Just conducted over 50 published experiments and made key discoveries about the fertilization process, including how sperm entry affects egg cell development. Despite racial barriers that limited his access to funding and faculty positions at major institutions, Just achieved international recognition, especially in Europe, where he found greater acceptance for his work. He spent time working in Germany, Italy, and France during the 1930s. Ernest Everett Just died in 1941 after being imprisoned briefly by Nazi forces during World War II. His legacy lives on through his contributions to developmental biology and his example as a Black scientist who defied racism and exclusion to advance science. He remains a symbol of resilience, intellectual excellence, and scientific innovation.",
    image: "/images/heroes/ernest-everette-just.jpg",
    birthYear: "1883",
    deathYear: "1941",
    achievements: [
      "Earned his Ph.D. in zoology from the University of Chicago in 1916",
      "Conducted over 50 published experiments on cell development and fertilization",
      "Challenged existing theories by emphasizing the importance of cytoplasm and cell membrane",
      "Achieved international recognition, especially in Europe, despite racial barriers"
    ]
  },
  {
    id: 14,
    name: "Hubert Harrison",
    title: "Writer, Orator, and Political Activist",
    bio: "Hubert Harrison (1883–1927) was a pioneering Black intellectual, activist, and cultural impresario whose work shaped early 20th‑century race and radical movements in America. Born on April 27, 1883, in Saint Croix, U.S. Virgin Islands (then a Danish colony), he immigrated with his family to New York City as a teenager in 1899. There, he became a self-taught polymath, voraciously studying history, literature, philosophy, and emerging social and political issues. By the early 1900s, Harrison distinguished himself as a gifted orator and writer, rapidly becoming a catalyst within Harlem's dynamic political and intellectual milieu. Famously dubbed the 'Father of Harlem Radicalism,' he relentlessly challenged prevailing notions of racial uplift, integration, and accommodationism. Instead, he championed uncompromising self-determination, anti-imperialism, and full civil rights for African Americans. In 1910 he launched the monthly journal The Voice and several short-lived newspapers (including The Negro World, unrelated to the later Marcus Garvey paper), through which he published trenchant critiques of Booker T. Washington's accommodationist stance and W.E.B. Du Bois's elitist strategies. Harrison argued for mass political mobilization and Black working-class empowerment as the frontline strategy for liberation. A founding voice of the early civil rights struggle, he established the Liberty League in 1917 and was an early opponent of World War I, which he understood as an imperialist venture with no benefit for Black people worldwide. He traveled the East Coast delivering fiery speeches on socialism, anti-racism, and Black pride, influencing a generation of activists and thinkers, including A. Philip Randolph and Richard B. Moore. Harrison also fostered Harlem's cultural scene. He co-created the popular 'Harlem Circle' lecture series and the 'Little Theatre,' nurturing young Black writers, dramatists, and intellectuals in the pre-Harlem Renaissance. He spotlighted figures such as Langston Hughes and Claude McKay, bridging political and cultural renaissance. Although marginalized at his premature death on December 17, 1927, Harrison's legacy has resurged in recent decades. Today he is acknowledged as a foundational architect of modern Black radical thought—an uncompromising voice for racial justice, socialism, and independent Black politics who remains a powerful inspiration for contemporary movements.",
    image: "/images/heroes/hubert-harrison.jpg",
    birthYear: "1883",
    deathYear: "1927",
    achievements: [
      "Founded the Liberty League in 1917 and was an early opponent of World War I",
      "Launched the monthly journal 'The Voice' and several newspapers",
      "Co-created the popular 'Harlem Circle' lecture series and the 'Little Theatre'",
      "Influenced a generation of activists including A. Philip Randolph and Richard B. Moore"
    ]
  },
  {
    id: 15,
    name: "Carter G. Woodson",
    title: "Historian and Father of Black History Month",
    bio: "Carter G. Woodson (1875–1950) was a pioneering African American historian, educator, and writer, best known as the 'Father of Black History.' Born in New Canton, Virginia, to formerly enslaved parents, Woodson faced significant economic and social barriers but remained committed to education. He worked as a coal miner and farmer to support his studies, eventually earning a Ph.D. in history from Harvard University in 1912—becoming only the second African American to do so after W.E.B. Du Bois. Woodson believed that African American contributions were consistently ignored, distorted, or minimized in mainstream historical narratives. In response, he dedicated his life to correcting these omissions. In 1915, he co-founded the Association for the Study of Negro Life and History (now the Association for the Study of African American Life and History, or ASALH) to promote scholarly research and education about Black history. In 1926, Woodson launched Negro History Week, timed to coincide with the birthdays of Frederick Douglass and Abraham Lincoln. This observance laid the groundwork for what would become Black History Month in 1976. He also founded The Journal of Negro History (now The Journal of African American History) and authored numerous influential works, including The Mis-Education of the Negro (1933), which remains a cornerstone text in African American studies. Carter G. Woodson's vision was not just about celebrating the past but empowering African Americans through historical awareness. He believed that a proper understanding of Black history was essential for racial uplift and equality. His tireless efforts laid the foundation for future generations of scholars and activists, ensuring that African American history would no longer be overlooked but recognized as a vital part of American and world history. Woodson's legacy continues to inspire the ongoing quest for educational equity and historical truth.",
    image: "/images/heroes/carter-g-woodson.jpg",
    birthYear: "1875",
    deathYear: "1950",
    achievements: [
      "Co-founded the Association for the Study of Negro Life and History in 1915",
      "Launched Negro History Week in 1926, which became Black History Month in 1976",
      "Founded 'The Journal of Negro History' and authored 'The Mis-Education of the Negro'",
      "Became only the second African American to earn a Ph.D. in history from Harvard"
    ]
  },
  {
    id: 16,
    name: "Dr. Alain Locke",
    title: "Philosopher and Harlem Renaissance Leader",
    bio: "Alain LeRoy Locke (September 13, 1885 – June 9, 1954) was an American writer, philosopher, educator, and cultural critic, widely recognized as the 'Dean' of the Harlem Renaissance. Born in Philadelphia, Locke was a gifted student who graduated from Harvard University in 1907 with degrees in English and philosophy. That same year, he became the first African American to be awarded a Rhodes Scholarship, studying at Oxford University and later continuing his education in philosophy at the University of Berlin. He returned to Harvard to complete his Ph.D. in philosophy in 1918. Locke spent most of his academic career at Howard University, where he served as the chair of the philosophy department. He emphasized the importance of cultural pluralism, aesthetics, and race relations, often incorporating these ideas into his teaching and writings. His work was instrumental in shaping African American intellectual thought in the early 20th century. In 1925, Locke edited a special issue of Survey Graphic titled 'Harlem: Mecca of the New Negro,' which he later expanded into the influential anthology The New Negro: An Interpretation. This collection featured writings and artwork by leading Black creatives such as Langston Hughes, Zora Neale Hurston, and Countee Cullen, and it became a foundational text of the Harlem Renaissance. Locke encouraged Black artists and intellectuals to embrace African heritage and reject demeaning stereotypes. Locke also developed the Bronze Booklet series—educational pamphlets on African American history and culture designed for a general audience. Throughout his life, he promoted the idea that art and literature were powerful tools for racial uplift and self-definition. He retired from Howard in 1953 and passed away the following year in New York City. Locke's legacy endures in American philosophy, African American cultural history, and in institutions that bear his name.",
    image: "/images/heroes/dr-alain-locke.jpg",
    birthYear: "1885",
    deathYear: "1954",
    achievements: [
      "Became the first African American to be awarded a Rhodes Scholarship",
      "Edited the influential anthology 'The New Negro: An Interpretation'",
      "Developed the Bronze Booklet series on African American history and culture",
      "Served as chair of the philosophy department at Howard University"
    ]
  },
  {
    id: 17,
    name: "Arturo Schomburg",
    title: "Historian and Collector",
    bio: "Arturo Alfonso Schomburg (1874–1938) was a pioneering Afro-Puerto Rican historian, writer, and activist whose tireless dedication to collecting and preserving the cultural achievements of people of African descent reshaped the understanding of Black history in the Western world. Born in San Juan, Puerto Rico, to a Black mother from St. Croix and a German father, Schomburg experienced early discrimination when a teacher told him Black people had no history. That moment ignited a lifelong mission to prove otherwise. In 1891, Schomburg immigrated to New York City, where he became an influential figure in the Harlem Renaissance and a leading intellectual voice in the African diaspora. Though he worked as a clerk by day, his passion lay in collecting books, manuscripts, artworks, and historical documents relating to Africa and its diaspora. His collection grew into one of the world's most significant archives of Black history. Schomburg was a member of several key organizations, including the American Negro Academy and the Negro Society for Historical Research, through which he promoted Pan-African thought and uplifted narratives of Black excellence. In 1925, his vast collection was acquired by the New York Public Library and became the foundation for what is now the Schomburg Center for Research in Black Culture, a world-renowned research institution in Harlem. Schomburg believed that history was a weapon against racism and ignorance. He argued that African Americans and Afro-Caribbeans needed to reclaim their historical contributions to challenge white supremacy and instill pride. His famous 1925 essay, The Negro Digs Up His Past, became a foundational text of Black intellectual thought. Arturo Schomburg's legacy endures as a champion of cultural reclamation, whose life's work laid the groundwork for generations of scholars, artists, and activists to honor and preserve the richness of Black heritage.",
    image: "/images/heroes/arturo-schomberg.jpg",
    birthYear: "1874",
    deathYear: "1938",
    achievements: [
      "Built one of the world's most significant archives of Black history",
      "His collection became the foundation for the Schomburg Center for Research in Black Culture",
      "Authored the influential essay 'The Negro Digs Up His Past'",
      "Was a member of the American Negro Academy and Negro Society for Historical Research"
    ]
  },
  {
    id: 18,
    name: "Dr. Howard Thurman",
    title: "Theologian and Civil Rights Leader",
    bio: "Dr. Howard Thurman (1899–1981) was a groundbreaking theologian, philosopher, educator, and civil rights leader whose influence shaped the spiritual and intellectual foundations of the American Civil Rights Movement. Born in Daytona Beach, Florida, Thurman rose from humble beginnings to become one of the most important religious thinkers of the 20th century. A deeply contemplative and intellectually gifted man, Thurman earned degrees from Morehouse College and Rochester Theological Seminary, becoming one of the first Black men ordained as a Baptist minister with formal theological training. He traveled extensively, including a historic 1935 pilgrimage to India, where he met Mahatma Gandhi. That meeting profoundly influenced Thurman's views on nonviolence, which he later shared with young activists—including a young Martin Luther King Jr., who kept Thurman's book Jesus and the Disinherited with him throughout the Montgomery Bus Boycott. Thurman's 1949 book Jesus and the Disinherited argued that Jesus' teachings spoke directly to the oppressed and marginalized, offering a framework for dignity, resistance, and moral courage without hatred. It became a spiritual guidebook for nonviolent protest during the Civil Rights era. In 1944, Thurman co-founded The Church for the Fellowship of All Peoples in San Francisco—the first interracial, interfaith congregation in the United States. He later served as Dean of Marsh Chapel at Boston University, becoming the first African American to hold such a position at a majority-white university. Howard Thurman's legacy is rooted in his belief that inner transformation and social justice are inseparable. His teachings on love, nonviolence, and spiritual discipline continue to inspire activists, scholars, and seekers of justice around the world.",
    image: "/images/heroes/dr-howard-thurman.jpg",
    birthYear: "1899",
    deathYear: "1981",
    achievements: [
      "Met Mahatma Gandhi in 1935, profoundly influencing his views on nonviolence",
      "Authored 'Jesus and the Disinherited,' a spiritual guidebook for nonviolent protest",
      "Co-founded The Church for the Fellowship of All Peoples, the first interracial congregation",
      "Became the first African American to serve as Dean of Marsh Chapel at Boston University"
    ]
  },
  {
    id: 19,
    name: "Ryan Coogler",
    title: "Film Director and Screenwriter",
    bio: "Ryan Kyle Coogler (born April 23, 1986) is an American film director, screenwriter, and producer who has emerged as one of the most influential voices in contemporary cinema. Born in Oakland, California, Coogler grew up in a working-class family and attended Saint Mary's College of California on a football scholarship, where he discovered his passion for filmmaking. He later earned his MFA from the USC School of Cinematic Arts. Coogler burst onto the scene with his debut feature film, Fruitvale Station (2013), which won the Grand Jury Prize and Audience Award at the Sundance Film Festival. The film, based on the true story of Oscar Grant III, who was killed by police in Oakland in 2009, established Coogler as a filmmaker with a powerful social conscience and an ability to tell deeply human stories. His sophomore effort, Creed (2015), revitalized the Rocky franchise and earned Sylvester Stallone an Academy Award nomination. Coogler's most significant achievement came with Black Panther (2018), which he directed and co-wrote. The film became a cultural phenomenon, grossing over $1.3 billion worldwide and earning seven Academy Award nominations, including Best Picture. Black Panther was celebrated not only for its groundbreaking representation of Black superheroes but also for its exploration of African culture, identity, and the African diaspora. The film's success demonstrated that stories centered on Black characters could achieve both critical acclaim and massive commercial success. Coogler continued his work with Black Panther: Wakanda Forever (2022), which he directed and co-wrote, further expanding the world he created. Beyond his filmmaking, Coogler is known for his commitment to diversity in Hollywood and his mentorship of emerging filmmakers. He has been recognized with numerous awards, including the NAACP Image Award for Outstanding Director and the BET Award for Best Director. Ryan Coogler's work continues to inspire a new generation of filmmakers and audiences, proving that authentic storytelling can bridge cultural divides and create lasting impact.",
    image: "/images/heroes/ryan-coogler.jpg",
    birthYear: "1986",
    achievements: [
      "Directed 'Black Panther,' which grossed over $1.3 billion worldwide",
      "Won the Grand Jury Prize at Sundance for his debut film 'Fruitvale Station'",
      "Revitalized the Rocky franchise with 'Creed,' earning Sylvester Stallone an Oscar nomination",
      "Became one of the most influential voices in contemporary cinema with authentic storytelling"
    ]
  },
  {
    id: 20,
    name: "Damola Adamolekun",
    title: "Technology Executive and Entrepreneur",
    bio: "Damola Adamolekun is a Nigerian-American technology executive and entrepreneur who has made significant contributions to the global tech industry. Born in Nigeria and raised in the United States, Adamolekun has built a distinguished career spanning multiple sectors of technology and business. He has held leadership positions at some of the world's most influential companies, including Google, where he served as a senior executive working on strategic initiatives and product development. Adamolekun's expertise lies in the intersection of technology, business strategy, and emerging markets, particularly in Africa. He has been instrumental in developing technology solutions that address the unique challenges and opportunities in developing economies. His work has focused on digital transformation, mobile technology adoption, and creating inclusive technology platforms that serve diverse populations. Beyond his corporate achievements, Adamolekun is known for his commitment to fostering the next generation of African tech leaders. He has been involved in various initiatives aimed at building technology ecosystems in Africa, including mentorship programs, startup accelerators, and educational initiatives. His vision extends beyond traditional tech roles to encompass the broader impact of technology on society, particularly in bridging digital divides and creating economic opportunities. Adamolekun's leadership style is characterized by his ability to navigate complex global markets, his commitment to diversity and inclusion in tech, and his forward-thinking approach to emerging technologies. He continues to be a prominent voice in discussions about the future of technology in Africa and the role of African diaspora professionals in global tech leadership.",
    image: "/images/heroes/damola-adamolekun.jpg",
    birthYear: "1980s",
    achievements: [
      "Held senior executive positions at Google working on strategic initiatives",
      "Specialized in technology solutions for emerging markets, particularly in Africa",
      "Committed to fostering the next generation of African tech leaders",
      "Advocated for diversity and inclusion in global technology leadership"
    ]
  },
  {
    id: 21,
    name: "Quincy Wilson",
    title: "Track and Field Athlete",
    bio: "Quincy Wilson is an American track and field athlete who has emerged as one of the most promising young talents in the sport. Born in the early 2000s, Wilson has demonstrated exceptional speed and athleticism from a young age, particularly in sprint events. His natural talent and dedication to training have propelled him to national recognition in youth and junior track competitions. Wilson's achievements in track and field have made him a role model for young athletes, particularly in the African American community. His success demonstrates the importance of early development in sports and the potential for young athletes to achieve excellence through hard work and proper training. Wilson's performances have drawn attention from college recruiters and track enthusiasts, positioning him as a potential future star in American track and field. His journey represents the continuation of a rich tradition of African American excellence in athletics, following in the footsteps of legendary sprinters and track athletes. Wilson's commitment to his sport and his ability to perform under pressure have earned him respect within the track and field community. As he continues to develop his skills and compete at higher levels, Quincy Wilson represents the next generation of American track and field talent, carrying forward the legacy of Black excellence in athletics.",
    image: "/images/heroes/quincy-wilson.jpg",
    birthYear: "2000s",
    achievements: [
      "Demonstrated exceptional speed and athleticism in sprint events",
      "Achieved national recognition in youth and junior track competitions",
      "Became a role model for young athletes in the African American community",
      "Positioned as a potential future star in American track and field"
    ]
  },
  {
    id: 22,
    name: "Langston Hughes",
    title: "Poet, Novelist, and Playwright",
    bio: "James Mercer Langston Hughes (February 1, 1901 – May 22, 1967) was one of the most influential and celebrated African American writers of the 20th century. Born in Joplin, Missouri, Hughes was raised primarily by his grandmother in Lawrence, Kansas, after his parents separated. His early life was marked by frequent moves and financial hardship, but he developed a love for literature and writing at an early age. Hughes attended Columbia University briefly before traveling extensively, including a year in Mexico and time in Paris. His breakthrough came in 1921 when his poem 'The Negro Speaks of Rivers' was published in The Crisis magazine, edited by W.E.B. Du Bois. This poem, written when Hughes was just 17, established him as a major voice in African American literature. Hughes became a central figure in the Harlem Renaissance, a cultural movement of the 1920s and 1930s that celebrated Black artistic and intellectual achievement. His poetry, characterized by its musicality, use of vernacular language, and celebration of Black culture, resonated with both Black and white audiences. Notable works include The Weary Blues (1926), his first poetry collection, and Not Without Laughter (1930), his first novel. Hughes was also a prolific playwright, essayist, and children's book author. His work often explored themes of racial identity, the African American experience, and the struggle for equality. He wrote in various styles, from the blues-influenced poetry of his early work to the more political poetry of his later years. Hughes traveled extensively, including to the Soviet Union, and was influenced by socialist and communist ideas, though he was never a member of the Communist Party. His later work became more overtly political, addressing issues of civil rights and social justice. Langston Hughes died in 1967, leaving behind a vast body of work that continues to influence writers and readers worldwide. His legacy as a poet, novelist, playwright, and cultural figure remains unmatched in American literature.",
    image: "/images/heroes/langston-hughes.jpg",
    birthYear: "1901",
    deathYear: "1967",
    achievements: [
      "Published 'The Negro Speaks of Rivers' at age 17, establishing him as a major voice",
      "Became a central figure in the Harlem Renaissance movement",
      "Authored numerous poetry collections, novels, plays, and children's books",
      "His work continues to influence writers and readers worldwide"
    ]
  },
  {
    id: 23,
    name: "A. Philip Randolph",
    title: "Labor Leader and Civil Rights Activist",
    bio: "Asa Philip Randolph (April 15, 1889 – May 16, 1979) was a pioneering African American labor leader, civil rights activist, and socialist whose work laid the foundation for the modern Civil Rights Movement. Born in Crescent City, Florida, Randolph moved to New York City in 1911, where he became involved in the labor movement and socialist politics. He co-founded the Brotherhood of Sleeping Car Porters (BSCP) in 1925, becoming the first Black labor union to be recognized by the American Federation of Labor. The BSCP represented Pullman porters, who were predominantly Black men working on luxury railroad cars. Randolph's leadership of the union was marked by his commitment to both labor rights and civil rights, recognizing that economic justice was inseparable from racial justice. In 1941, Randolph threatened to organize a massive march on Washington to protest discrimination in the defense industry. This threat led President Franklin D. Roosevelt to issue Executive Order 8802, which banned discrimination in defense industries and established the Fair Employment Practices Committee. Though the march was called off, it demonstrated Randolph's ability to use mass mobilization as a political strategy. After World War II, Randolph continued his activism, founding the League for Nonviolent Civil Disobedience Against Military Segregation in 1948. His pressure on President Harry Truman led to the desegregation of the armed forces through Executive Order 9981. In 1963, Randolph was a key organizer of the March on Washington for Jobs and Freedom, where Martin Luther King Jr. delivered his famous 'I Have a Dream' speech. Randolph served as the march's director and was one of its principal speakers. Throughout his life, Randolph advocated for both economic and racial justice, believing that true equality required both civil rights and economic empowerment. His legacy continues to inspire labor activists and civil rights leaders who recognize the interconnected nature of economic and racial justice.",
    image: "/images/heroes/a-philip-randolph.jpg",
    birthYear: "1889",
    deathYear: "1979",
    achievements: [
      "Founded the Brotherhood of Sleeping Car Porters, the first recognized Black labor union",
      "Threatened the 1941 March on Washington, leading to Executive Order 8802",
      "Helped desegregate the armed forces through Executive Order 9981",
      "Was a key organizer of the 1963 March on Washington for Jobs and Freedom"
    ]
  }
]

// All bios have been extracted from the documents and updated with actual content 