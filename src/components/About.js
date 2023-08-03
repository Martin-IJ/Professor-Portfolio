import React from "react";
import img from '../assets/20230709_155431.jpg'

const About = () => {
  return (
    <div
      name="about"
      className="relative w-full pt-32 h-screen bg-[#0a192f] text-gray-300"
    >
      <img src={img} alt="" className="about-img" />
      <div className="flex flex-col justify-center px-5 md:px-0 items-center w-full">
        <p className="text-4xl font-bold inline border-b-4 border-pink-600">
          About Me
        </p>
        <div className="max-w-[1010px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4"></div>
          <div></div>
        </div>
        <div className="max-w-[1010px] pb-16 w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>
              Hi. I'm Wisdom Okafor, nice to meet you. Please take a look
              around.
            </p>
          </div>
          <div>
            <p>
              I am passionate about building excellent software that improves
              the lives of those around me. I specialize in creating software
              for clients ranging from individuals and small-businesses all the
              way to large enterprise corporations. Just pitch your idea to me
              and watch it come life. I'd be really glad to talk business with
              you.
            </p>
          </div>
        </div>

        <div className="about-info max-w-[1010px] w-full pb-10">
          <ul className="about-ul">
            <li>
              <h1>Professor Career Summary</h1>
              <p>
                As a visionary problem-solver with a boundless love for
                creativity, I am a highly proficient web designer, equipped with
                exceptional leadership skills and a keen eye for economic
                opportunities. My dedication to excellence has earned me
                esteemed recognition, including the prestigious Awards of Honor
                from A.S.E.S. twice, E.S.A.N., and H.K.H.E. in 2023. I am more
                than a web designer; I am a strategic thinker with a deep
                understanding of media marketing on a mass scale. My years of
                experience as a successful salesman have honed my ability to
                drive impactful results. My insatiable curiosity for politics
                adds a layer of strategic insight to my work. Seeking to channel
                my passion and expertise, I aspire to secure a role in building
                and managing the digital and media aspects of a dynamic company.
                My mission is to create exceptional digital experiences, amplify
                brand presence, and contribute to the organization's growth and
                success.Open to collaboration and embracing fresh challenges, I
                am particularly enthusiastic about working with innovative
                startup companies. My diverse skill set and adaptability make me
                an ideal asset to fuel the growth and development of young
                ventures, bringing creative ideas to life with a touch of
                entrepreneurial spirit. With an unwavering commitment to
                professionalism and an innate ability to thrive in dynamic
                environments, I am poised to make a lasting impact, leveraging
                my skills to usher in a new era of innovation and success for
                any creative endeavor I undertake.
              </p>
            </li>
            <li>
              <h1>Professional Statement</h1>
              <p>
                At the heart of my identity as a web developer and problem
                solver lies a relentless pursuit of excellence and an unyielding
                commitment to making a profound impact on the world. My name is
                Onyedika Chukwu W. Okafor, and my expertise extends beyond
                coding; it encompasses a holistic approach to innovation, always
                driven by a higher purpose. Core Value: Purposeful Innovation:
                Innovation is more than a buzzword—it is a force for
                transformation. Guided by my core value of purposeful
                innovation, I harness the latest technologies to craft solutions
                that serve a meaningful and lasting purpose. I believe that
                every line of code should be purpose-driven, empowering
                businesses, empowering individuals, and elevating communities
                towards a brighter tomorrow.
              </p>
            </li>
            <li>
              <h1>Approach</h1>
              <p>
                Collaboration and Learning as Catalysts: The synergy of
                collaboration and continuous learning is the bedrock of my
                approach to excellence. Recognizing that no great work is
                achieved in isolation, I thrive in diverse teams, where ideas
                flow freely, and creativity blossoms. By fostering open
                communication and embracing diverse perspectives, I cultivate a
                fertile ground for groundbreaking ideas to take root. With an
                insatiable thirst for knowledge, I remain on the cutting edge of
                industry trends and emerging technologies. This unyielding
                commitment to learning not only keeps me relevant in an
                ever-evolving digital landscape but empowers me to pioneer
                innovative solutions that push the boundaries of what is
                possible.
              </p>
            </li>
            <li>
              <h1>Aspirations</h1>
              <p className="">
                Lighting the Path to Progress: Beyond the confines of web
                development, my aspirations soar high—propelled by a vision of a
                world where technology becomes an instrument of positive change.
                From my home country, Nigeria, to the global stage, I dream of
                spearheading projects that enrich lives, bridge gaps, and
                elevate society. I envision a future where every keystroke,
                every line of code, ignites the flame of progress and kindles
                hope in the hearts of many. As I embark on this journey, I seek
                more than employment; I yearn for the opportunity to collaborate
                with visionary leaders and trailblazing organizations. Together,
                we will build a legacy of brilliance, leaving an indelible mark
                on the world through purpose-driven innovation.Professional
                Statement- OnyedikaChukwu W. Okafor: At the heart of my identity
                as a web developer and problem solver lies a relentless pursuit
                of excellence and an unyielding commitment to making a profound
                impact on the world. My name is Onyedika Chukwu W. Okafor, and
                my expertise extends beyond coding; it encompasses a holistic
                approach to innovation, always driven by a higher purpose. Core
                Value: Purposeful Innovation: Innovation is more than a
                buzzword—it is a force for transformation. Guided by my core
                value of purposeful innovation, I harness the latest
                technologies to craft solutions that serve a meaningful and
                lasting purpose. I believe that every line of code should be
                purpose-driven, empowering businesses, empowering individuals,
                and elevating communities towards a brighter tomorrow.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
