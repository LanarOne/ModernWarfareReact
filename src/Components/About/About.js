import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import mc from "./about.module.scss";
import Stars from "../smallElt/stars/stars";
import submarine from "../../public/img/substation2.png";
import wm2_6 from "../../public/img/WM2_6.png";
import spacestation from "../../public/img/spaceStation2.png";
import spaceship from "../../public/img/flyingFortress5.png";
import ceo from "../../public/img/CEO.png";
import cfo from "../../public/img/CFO.png";
import pr from "../../public/img/PR.png";
import jrceo from "../../public/img/jrCEO.png";
const About = () => {
  return (
    <div className={`${mc.container}`}>
      <Header />
      <main>
        <section className="history">
          <Stars />
          <h2>Our History</h2>
          <article>
            <div className={`${mc.blocHistory}`}>
              <div className={`${mc.blocImg}`}>
                <img
                  loading="lazy"
                  src={submarine}
                  alt="a submarine station deep in the ocean, generated by MidJourney (https://midjourney.com/home/?callbackUrl=%2Fapp%2F)"
                />
              </div>
              <div className={`${mc.historyArt}`}>
                <h3>The first submarine station</h3>
                <p>
                  The Future Warfare Corporation started as a business
                  specialized in submarines armored vehicles. From excellents
                  alloys and technologies our beloved founder draw the first
                  design of a submarine station capable of harboring 500 men,
                  two kilometers down sea level.
                </p>
                <p>
                  Used in the first international Water War, it was one of many
                  assets that allowed the Nation to overcome its ennemies.
                  Capable of launching numerous nuclear heads from deep below
                  without getting spotted, it was also able to defend itself
                  from submarines and was too deep in the water for any other
                  form of weaponry to get at it. Hell! Some of them were not
                  even found after the wars!
                </p>
              </div>
            </div>
          </article>
          <article>
            <div className={`${mc.blocHistory}`}>
              <div className={`${mc.historyArt}`}>
                <h3>The war mecas</h3>
                <p>
                  After dominating the seas, FWC started to manufacture war
                  mecas. These machines only existed in science fiction but we
                  made it a reality! It is said that the CEO himself draw the
                  first blueprints of this first war meca.
                </p>
                <p>
                  The WM#2.6, the first prototype that was ever able to be
                  deployed on a battlefield. While AI could have drove this
                  technological beauty, two men inside the bot would operate it
                  for strategic purposes.
                </p>
                <p>
                  Since then, most of the ancient war mecas have been bought by
                  the construction business, inventing new uses that were later
                  inplemented in the new versions.
                </p>
              </div>
              <div className={`${mc.blocImg}`}>
                <img
                  loading="lazy"
                  src={wm2_6}
                  alt="giant war robot, generated by MidJourney (https://midjourney.com/home/?callbackUrl=%2Fapp%2F)"
                />
              </div>
            </div>
          </article>
          <article>
            <div className={`${mc.blocHistory}`}>
              <div className={`${mc.blocImg}`}>
                <img
                  loading="lazy"
                  src={spaceship}
                  alt="futuristic spaceship parked in the desert, generated by MidJourney (https://midjourney.com/home/?callbackUrl=%2Fapp%2F)"
                />
              </div>
              <div className={`${mc.historyArt}`}>
                <h3>Space conquer</h3>
                <p>
                  Space vehicles were the logic choice after our terrestrial
                  venture. Warfare is everywhere and at the time of the first
                  encounters with non-human species, it was needed for the
                  Nation to defend itself. That is what FWC provided.
                </p>
                <p>
                  This space shuttle was our first to fly to Mars, land there
                  and came back on earth. It was used to establish the first
                  Martian base and was the ultimate experience to upgrade our
                  technologies to the next level.
                </p>
                <p>
                  The SS#3.4 is fully armored and equipped with a range of
                  weapons that can shoot in open space. With its closed water
                  loop and growing space, Humans could survive almost for ever
                  in outterspace.
                </p>
              </div>
            </div>
          </article>
          <article>
            <div className={`${mc.blocHistory}`}>
              <div className={`${mc.historyArt}`}>
                <h3>Space Stations</h3>
                <p>
                  The journey of armored technologies brought us up into space,
                  it was only logical that we would engineer the first floating
                  station ever inhabited. It was for a long time the legal and
                  official base for our corporation.
                </p>
                <p>
                  This precise unit is still in Terra's orbit, although
                  originally built for ten thousand people to live in, it has
                  been upgraded since and can now shelter almost half a million
                  souls.
                </p>
                <p>
                  It is true that the condition on most of our planet makes it
                  impossible for us to survive down there, but with the
                  intelligence and resilience of humanity, we now offer
                  prosperous way of living in outter space!
                </p>
              </div>
              <div className={`${mc.blocImg}`}>
                <img
                  loading="lazy"
                  src={spacestation}
                  alt="giant space station, generated by MidJourney (https://midjourney.com/home/?callbackUrl=%2Fapp%2F)"
                />
              </div>
            </div>
          </article>
        </section>
        <section>
          <Stars />
          <h2>Our family</h2>
          <div className={`${mc.family}`}>
            <article className={`${mc.familyMember}`}>
              <img
                loading="lazy"
                src={ceo}
                alt="portrait of an old man with black and red face paintings, a black hood and a beard, looking severe, generated by MidJourney (https://midjourney.com/home/?callbackUrl=%2Fapp%2F)"
              />
              <div className={`${mc.familyMemberText}`}>
                <h3>Magnus Kriegmeister - CEO</h3>
                <p>
                  Our beloved and honorable CEO, decorated by the President
                  himself with the highest medals for service rendered to
                  humanity. A genius with a vision that sees way beyond, he
                  himself designed most of the best-selling products around the
                  universe.{" "}
                  <strong>An exemple for us all to look up to!</strong>
                </p>
              </div>
            </article>
            <article className={`${mc.familyMember}`}>
              <img
                loading="lazy"
                src={cfo}
                alt="portrait of a young man with a redish beard and metal parts underneath blue eyes and on the cheeks, looking severe, generated by MidJourney (https://midjourney.com/home/?callbackUrl=%2Fapp%2F)"
              />
              <div className={`${mc.familyMemberText}`}>
                <h3>Wolfgang Kriegmeister - CFO</h3>
                <p>
                  Our strong and powerful CFO, son of CEO and founder Magnus
                  Kriegmeister. He was one of the best meca pilot during the
                  thirst wars and is accountable for many of the Nation's
                  victory. He later became a man of business, taking his legacy
                  in the Future Warfare Corporation.
                </p>
              </div>
            </article>
            <article className={`${mc.familyMember}`}>
              <img
                loading="lazy"
                src={pr}
                alt="portrait of a man with robotic parts, red face paint and red eyes, generated by MidJourney (https://midjourney.com/home/?callbackUrl=%2Fapp%2F)"
              />
              <div className={`${mc.familyMemberText}`}>
                <h3>Floki Jäeger - PR</h3>
                <p>
                  Our PR was Wolfgang Kriegmeister's brother in arms until he
                  perished in battle. Technology and a bit of luck brought him
                  back to life and he was the first human being that was partly
                  machine. He is the living example of what our company does.
                </p>
              </div>
            </article>
            <article className={`${mc.familyMember}`}>
              <img
                loading="lazy"
                src={jrceo}
                alt="portrait of a young black woman with dreadlocks, robotic parts and red eyes, generated by MidJourney (https://midjourney.com/home/?callbackUrl=%2Fapp%2F)"
              />
              <div className={`${mc.familyMemberText}`}>
                <h3>Lagertha Kriegmeister - Jr CEO</h3>
                <p>
                  Lagertha is a very talented and cunning young woman.Daughter
                  of CFO Wolfgang Kriegmeister, she's used to non-human
                  interference and has lived almost her whole life in
                  outterspace. She really is the future of FWC.
                </p>
              </div>
            </article>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
