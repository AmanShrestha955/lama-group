import ConnecterNode from "../ConnecterNode";

export const MEMBERS = [
  {
    initial: "N",
    name: "Nitesh Lama",
    title: "Founder, Chairman & CEO",
    role: "founder",
    index: "01",
    photo: "/Nitesh_Lama.jpg",
    bio: `I’m Nitesh Lama, a college dropout driven by curiosity and a passion for entrepreneurship. I’m building Lama Group from the ground up with the ambitious vision of one day taking it public. I’m deeply interested in the stock market, investing, AI, and technology, and I enjoy learning about great businesses, innovation, and what shapes the future.

Beyond business, I love playing guitar, reading books, playing chess, and connecting with new people. I’m always looking for opportunities to learn, explore, and challenge myself. Some people may see my goals as unrealistic, but I see them as a reason to keep pushing forward.

I believe that thinking long term, taking calculated risks, and staying consistent are the keys to building something meaningful. My ambition isn’t just to create a successful company but to build something that makes a lasting impact.`,
    linkedin: "#",
    email: "nitesh@lamagroup.com.np",
  },
  {
    initial: "A",
    name: "Aman Shrestha",
    title: "Chief Technology Officer",
    role: "c-suite",
    index: "02",
    bio: `

Aman Shrestha leads technology and digital infrastructure at Lama Group, responsible for the group's technology strategy, product development, and digital presence across its growing portfolio of ventures.

Trained in Computer Science, he brings a builder's instinct to every layer of the group's technology decisions from architecture to execution. His work spans full-stack product development, and the application of modern technology to whatever domain the group moves into next.

As Lama Group expands across finance, technology, media, and insurance, Aman's focus remains consistent build systems and products that are designed not just for today's needs, but for the scale the group intends to reach.`,
    linkedin: "https://www.linkedin.com/in/aman-shrestha-047328321/",
    email: "amanshrestha016@gmail.com",
  },
  {
    initial: "K",
    name: "Karan Lama",
    title: "Chief Financial Officer",
    role: "c-suite",
    index: "03",
    photo: "/Karan_Lama.jpg",
    bio: `My name is Karan Lama. I am a Bachelor of Business Studies (BBS) student at Tribhuvan University with a strong interest in business, entrepreneurship, finance, investing, and personal development. Although my academic journey has included setbacks, I believe that consistent effort, continuous learning, and discipline are more important than past failures. I am committed to building a successful future through knowledge and practical skills.

I enjoy learning beyond the classroom. I have been studying topics such as entrepreneurship, business research methods, financial statement analysis, stock market investing, valuation, Excel, and productivity. I also aspire to earn the CFA designation in the future and develop expertise in investment analysis and wealth creation.

Health and fitness are an important part of my life. I believe that physical fitness strengthens both the body and the mind.

I am also passionate about improving my communication skills, critical thinking, and problem-solving abilities. My long-term goal is to achieve financial independence by building multiple income sources, making sound investments, and creating successful business ventures.

Beyond career and finance, I value discipline, consistency, and lifelong learning. I see every challenge as an opportunity to grow, and I strive to become a knowledgeable, responsible, and successful individual who can make a positive impact on society.`,
    linkedin: "#",
    email: "karan@lamagroup.com.np",
  },
  {
    initial: "B",
    name: "Binamra Bhattarai",
    title: "Executive Advisor — Insurance & Risk",
    role: "c-suite",
    index: "04",
    photo: "/Binamra_Bhattarai.jpg",
    bio: `Hi, I'm Binamra. I'm someone who enjoys learning, solving problems, and taking on challenges that create long-term impact. I'm naturally curious and enjoy thinking about both the technical and strategic sides of a problem.

My main areas of interest are insurance, finance, risk management, sustainability, and business strategy. I believe insurance has the power to improve financial resilience and create meaningful social impact, especially when combined with innovation and data-driven decision making.

My vision is to contribute to building a stronger and more innovative insurance sector by developing practical solutions that make financial protection more accessible and sustainable. I also hope to contribute to Nepal's financial ecosystem by encouraging collaboration, supporting young professionals, and helping bridge the gap between technical expertise and business leadership.

I believe my greatest contribution will come from turning ideas into action and creating solutions that del`,
    linkedin: "#",
    email: "binamra@lamagroup.com.np",
  },
];

const founder = MEMBERS.filter((item) => item.role === "founder");

const cMember = MEMBERS.filter((item) => item.role === "c-suite");

export default function OrgTree() {
  return (
    <section className="flex flex-col w-full px-12 py-30">
      <h1 className="font-body tracking-[0.2rem] text-[0.75rem] text-bronze uppercase">
        Organizational Structure
      </h1>
      <div className=" flex flex-col justify-center items-center w-full">
        {/* node, title and name  */}
        {founder.map((item, index) => (
          <ConnecterNode
            initial={item.initial}
            line="down"
            name={item.name}
            title={item.title}
            key={index}
          />
        ))}
        {/* vertical line */}
        <div className="w-5xl h-0.5 bg-rule"></div>

        <div className="flex flex-row items-start w-5xl">
          {cMember.map((item, index) => (
            <div
              key={index}
              className="flex flex-col flex-1 justify-center items-center"
            >
              <ConnecterNode
                initial={item.initial}
                line="up"
                name={item.name}
                title={item.title}
              />
            </div>
          ))}
        </div>
        <div className="flex flex-row items-start w-5xl">
          {cMember.map((item, index) => (
            <div
              key={index}
              className="flex flex-col flex-1 gap-4 justify-center items-center"
            >
              <ConnecterNode
                initial={item.initial}
                line="up"
                name="Future Role"
                title=" "
                preview={true}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
