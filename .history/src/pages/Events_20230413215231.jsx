import React from "react";
import subpage from "../css/subpage.module.css";

const Events = () => {
  return (
    <>
      <div className={subpage.section}>
        <div className={subpage.headerImageWrapper}>
          <img
            className={subpage.headerImage}
            src={require("../assets/images/headerImage" + Math.floor(Math.random() * 10 + 1) + ".jpg")}
            alt=""
          />
          <div className={subpage.imageTitle}>Events</div>
        </div>
        <div className={subpage.textContainer}>
          <div className={subpage.title}>ZOO Programs</div>
          <div className={subpage.text}>
            As the sun rose over the lush, green foliage of the zoo, the animals stirred in their habitats, eager for
            another day of adventure and excitement. Little did they know, the zookeepers had something special planned
            for them. First on the agenda was the "Jungle Gymnastics" program. The primates swung from branch to branch,
            performing daring acrobatics and gymnastics stunts, much to the delight of the crowds gathered below. The
            elephants showed off their balance and strength, standing on their hind legs and balancing on large balls.
            Next up was the "Birds of a Feather" program. The aviary came alive with a flurry of colorful feathers as
            exotic birds took to the skies, performing intricate aerial displays that left the audience awestruck. From
            macaws to parrots to cockatoos, each bird had its own unique talent to show off. As the day wore on, the
            "Predator vs. Prey" program began. The lions roared and paced in their enclosures, eager for the challenge.
            Suddenly, a herd of antelope appeared on the scene, and the chase was on. The lions sprinted after their
            prey, but the nimble antelope proved too quick for them, dodging and weaving through the obstacles in their
            path. In the afternoon, it was time for the "Aquatic Adventures" program. The dolphins leaped and spun in
            the air, their sleek bodies glinting in the sunlight. The sea lions showed off their swimming prowess,
            darting through the water with lightning-fast speed. Even the otters got in on the action, playing games and
            performing tricks with their trainers. Finally, as the sun began to set, the "Nocturnal Wonders" program
            began. The nocturnal animals, usually hidden away during the day, emerged from their hiding spots and put on
            a show for the night owls in the audience. The bats swooped and flitted through the air, while the nocturnal
            predators, such as the owls and the big cats, demonstrated their hunting skills in the darkness. As the day
            came to a close, the zookeepers bid their animal friends goodnight, already planning new and exciting
            programs for the next day. The zoo was a magical place, where the animals and the people who loved them
            could come together and experience the wonders of the natural world.
          </div>
        </div>
      </div>
    </>
  );
};

export default Events;
