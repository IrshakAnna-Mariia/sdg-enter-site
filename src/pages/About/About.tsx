import SectionHeader from 'components/SectionHeader';
import GameField from './GameField';

const About = () => {
  return (
    <div className="w-full">
      <SectionHeader title="ABOUT GAME" />
      <p className="mx-auto w-3/4 py-4 text-justify indent-8 text-white">
        Embark on an intellectually stimulating adventure with our captivating game focused on the realms of physics,
        electronics, and programming. In this immersive study-based experience, players take on the role of aspiring
        scientists, engineers, and programmers, eager to expand their understanding and skills in these interconnected
        fields.
      </p>
      <p className="mx-auto w-3/4 py-4 text-justify indent-8 text-white">
        The gameplay seamlessly blends education and entertainment, offering a unique and engaging learning experience.
        Players find themselves in a virtual world teeming with scientific puzzles, engineering challenges, and coding
        conundrums, all designed to enhance their knowledge and problem-solving abilities.
      </p>
      <p className="mx-auto w-3/4 py-4 text-justify indent-8 text-white">
        As players progress through the game, they encounter a diverse range of interactive environments, each
        presenting intricate scientific concepts, engineering principles, and coding techniques. From the realm of
        classical mechanics to the depths of quantum physics, from basic electronic circuits to advanced programming
        languages, every challenge provides an opportunity to delve deeper into these fascinating subjects. <br />
      </p>
      <p className="mx-auto w-3/4 py-4 text-justify indent-8 text-white">
        To unlock new levels and advance in the game, players must actively engage with the knowledge presented. They
        solve complex physics problems, design and build electronic circuits, and write elegant lines of code. By
        successfully completing these tasks, they acquire new tools, technologies, and theoretical frameworks that
        empower their scientific and technical endeavors.
      </p>
      <p className="mx-auto w-3/4 py-4 text-justify indent-8 text-white">
        The game's captivating visuals, immersive sound design, and realistic simulations create an atmosphere that
        mirrors the real-world applications of physics, electronics, and programming. Whether it's observing the motion
        of objects under various forces, simulating electronic circuits and analyzing their behavior, or debugging
        intricate lines of code, players will feel like genuine scientists and engineers, honing their skills and
        gaining practical experience.
      </p>
      <p className="mx-auto w-3/4 py-4 text-justify indent-8 text-white">
        With its focus on physics, electronics, and programming, this game provides an enthralling and immersive
        experience that combines the excitement of problem-solving with the pursuit of knowledge in these vital
        disciplines. The user-friendly interface, comprehensive tutorials, and adaptable difficulty levels make it
        suitable for players of all ages and levels of expertise, fostering a love for learning and inspiring them to
        become lifelong learners and innovative thinkers in the fields of physics, electronics, and programming.
      </p>
      <p className="mx-auto w-1/2 py-4 text-center text-white">
        Go on an adventure with SDG-game and as a nice bonus learn electronics, programming and much more with us and
        the main character of your spaceship!
      </p>
      <GameField />
    </div>
  );
};

export default About;
