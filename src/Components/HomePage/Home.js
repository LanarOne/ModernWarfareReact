import React, { useState } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { NavLink } from "react-router-dom";
import IcomoonReact, { iconList } from "icomoon-react";
import iconSet from "../../Styles/icomoon/selection.json";
import mc from "./home.module.scss";
import Stars from "../smallElt/stars/stars";
import helmet from "../../img/helmet.png";
import fa142_3 from "../../img/FA142_3.png";
import wm17_9 from "../../img/WM17_9.png";
import ca162_4 from "../../img/CA162_4.png";
import wm1_6 from "../../img/WM1_6.png";
import ca10_3 from "../../img/CA10_3.png";
import fa102_6 from "../../img/FA102_6.png";
import fv24_2 from "../../img/FV24_2.png";
const Home = () => {
  return (
    <div>
      <Header />
      <main>
        <section className={`${mc.container}`}>
          <article className={`${mc.spaceStation}`}>
            <div className={`${mc.window}`}></div>
            <div className={`${mc.article}`}>
              <Stars />
              <div className="blocText">
                <h2>
                  <NavLink to={"/shop"}>Our Shop</NavLink>
                </h2>
                <p>Buy Future Warfare products in our shop</p>
                <p>Any model from the most recent to the all-time favorites</p>
                <p>
                  All our prices are displayed in Bitcoin (
                  <IcomoonReact
                    iconSet={iconSet}
                    color={"#ff6600"}
                    size={20}
                    icon="bitcoin"
                  />
                  ) but we can arrange any type of payment and transaction,
                  including stocks, gold, silver and property titles. Payable at
                  our space station on Terra's orbit.
                </p>
                <p>
                  Your products will be delivered at the location of your choice
                  in an estimated time of 1 TerraWeek{" "}
                  <em>
                    (may charge extra for non-peaceful and regulated
                    space-zones, 1 TerraWeek = 52 space-hours)
                  </em>
                </p>
              </div>
            </div>
          </article>
          <article className={`${mc.submarineStation}`}>
            <div className={`${mc.article}`}>
              <Stars />
              <div className={`${mc.blocText}`}>
                <h2>
                  <NavLink to={"/about"}>Our story</NavLink>
                </h2>
                <p>
                  From the first submarine station built by our immortal founder
                  and CEO Lord Magnus Kriegmeister to the heads of the FWC of
                  today, learn everything there is to know about us.
                </p>
                <p>
                  If you want to join our company in a new adventure, we offer
                  several positions. Discover the mines of Centaurus#001526 or
                  join our communication team and be part of a marvelous
                  enterprise.
                </p>
                <p>
                  For any private matter the appropriate channel would be
                  through our head of PR whom you can find the contact details
                  at <a href="about.html">this page</a>
                </p>
              </div>
            </div>
            <div className={`${mc.window}`}></div>
          </article>
        </section>

        <section className={`${mc.latest}`}>
          <Stars />
          <h2>Our latest realeases</h2>
          <div className={`${mc.blocArticle}`}>
            <article>
              <img
                src={helmet}
                alt="picture of a futuristic realistic war helmet, generated by MidJourney (https://midjourney.com/home/?callbackUrl=%2Fapp%2F)"
              />
              <div className={`${mc.bloctext}`}>
                <h3>Helmet #016052</h3>
                <p className={`${mc.spoiler}`}>/!\ Spoiler Alert /!\</p>
                <p>
                  <strong>
                    This brand new item is not available in our shop yet.
                  </strong>{" "}
                  Newborn of the armor section, this stylish yet tough helmet is
                  equipped with the latest technologies in air filtering,
                  already fully tested in the toxic gaz-planet #014965 of the
                  Lynx constellation
                </p>
                <p>
                  Made out with our rarest components, including the unbreakbale
                  alloy from Houndog#004872 that made us famous across all
                  galaxies.
                </p>
              </div>
            </article>
            <article>
              <img
                src={fa142_3}
                alt="picture of a realistic laser blaster, generated by MidJourney (https://midjourney.com/home/?callbackUrl=%2Fapp%2F)"
              />
              <div className={`${mc.bloctext}`}>
                <h3>Blaster #142.3</h3>
                <p className={`${mc.spoiler}`}>
                  3{" "}
                  <IcomoonReact
                    iconSet={iconSet}
                    color={"#ff6600"}
                    size={20}
                    icon="bitcoin"
                  />
                  / 100 Units
                </p>
                <p>
                  This powerful blaster straight out of our very best gun
                  factory has a blast potential of 5k joules on impact. It would
                  damage almost any kind of armor.
                </p>
                <p>
                  Easy to take in hand with a reduce weight of 22.5 kilos, the
                  weakest exo-skeleton would blast this beauty at will. With a
                  maximum of 17 rounds magazine, it's also possible to load
                  several ammunition for one shot while keep pulling the
                  trigger. One of the most powerfull guns that a person can use.
                </p>
              </div>
            </article>
            <article>
              <img
                src={wm17_9}
                alt="picture of a futuristic giant war armor, generated by MidJourney (https://midjourney.com/home/?callbackUrl=%2Fapp%2F)"
              />
              <div className={`${mc.bloctext}`}>
                <h3>WarMeca #17.9</h3>
                <p className={`${mc.spoiler}`}>
                  100{" "}
                  <IcomoonReact
                    iconSet={iconSet}
                    color={"#ff6600"}
                    size={20}
                    icon="bitcoin"
                  />{" "}
                  / Unit{" "}
                </p>
                <p>
                  Latest meca of our engeneering department, the #17.9 will be
                  of any use you can think of. Fully armored, it is equipped
                  with repair-bots that deploy immediately in the rare cases of
                  damages
                </p>
                <p>
                  Any meca-pilot would be able to operate this masterpiece after
                  a quick training of half a day, it comes with the usual
                  abilities a war mechanical robot requires.
                </p>
              </div>
            </article>
            <article>
              <img
                src={ca162_4}
                alt="picture of a futuristic realistic war helmet, generated by MidJourney (https://midjourney.com/home/?callbackUrl=%2Fapp%2F)"
              />
              <div className={`${mc.bloctext}`}>
                <h3>Armor #162.4</h3>
                <p className={`${mc.spoiler}`}>
                  50{" "}
                  <IcomoonReact
                    iconSet={iconSet}
                    color={"#ff6600"}
                    size={20}
                    icon="bitcoin"
                  />{" "}
                  / 100 Units
                </p>
                <p>
                  This re-edition of our finest combat flying armor will satisfy
                  all your needs.
                </p>
                <p>
                  With it's delicate style the #165.4 is an almost unbreakable
                  piece of armor. Its lightness of barely 32 kilos will carry
                  your soldiers fast and safe.
                </p>
                <p>
                  Bullet and blaster-proof, any user will feel immortal flying
                  above the battlefield. Provided with an autonomous AI that can
                  carry a wounded unconscious soldier in a safe area.
                </p>
              </div>
            </article>
          </div>
        </section>
        <section className={`${mc.classics}`}>
          <Stars />
          <h2>Our all-time best sellers</h2>
          <div className={`${mc.blocArticle}`}>
            <article>
              <img
                src={`${wm1_6}`}
                alt="giant futuristic war armored robot holding a sword, generated by MidJourney (https://midjourney.com/home/?callbackUrl=%2Fapp%2F)"
              />
              <div className={`${mc.bloctext}`}>
                <h3>War Meca #1.6</h3>
                <p className={`${mc.spoiler}`}>
                  15{" "}
                  <IcomoonReact
                    iconSet={iconSet}
                    color={"#ff6600"}
                    size={20}
                    icon="bitcoin"
                  />{" "}
                  / Unit
                </p>
                <p>
                  One of our first yet most resistant armored meca. It has been
                  proved one of the most efficient war machine on every
                  battlefield since its creation.
                </p>
                <p>
                  Its size and weight make the #1.6 a less agile but almost
                  indestructible meca. Made out with the toughest alloy ever
                  made by our corporation, it also is efficient for
                  non-destructive purposes.
                </p>
              </div>
            </article>
            <article>
              <img
                src={`${ca10_3}`}
                alt="futuristic battle flying armor, generated by MidJourney (https://midjourney.com/home/?callbackUrl=%2Fapp%2F)"
              />
              <div className={`${mc.bloctext}`}>
                <h3>Armor #10.3</h3>
                <p className={`${mc.spoiler}`}>
                  10{" "}
                  <IcomoonReact
                    iconSet={iconSet}
                    color={"#ff6600"}
                    size={20}
                    icon="bitcoin"
                  />{" "}
                  / 100 Units
                </p>
                <p>
                  Which galactic warrior has never seen this flying armor over a
                  battlefield? The now legendary #10.2 is present across each
                  and every galaxy.
                </p>
                <p>
                  Very light, adaptable to any morphology, can flight up to .5
                  soundspeed, solar panels on the wings provide for an unlimited
                  daytime flight.
                </p>
              </div>
            </article>
            <article>
              <img
                src={`${fa102_6}`}
                alt="futuristic warhammer 40k like blaster, generated by MidJourney (https://midjourney.com/home/?callbackUrl=%2Fapp%2F)"
              />
              <div className={`${mc.bloctext}`}>
                <h3>Blaster #102.6</h3>
                <p className={`${mc.spoiler}`}>
                  30{" "}
                  <IcomoonReact
                    iconSet={iconSet}
                    color={"#ff6600"}
                    size={20}
                    icon="bitcoin"
                  />{" "}
                  / 100 Units
                </p>
                <p>
                  This classic blaster has already proven itself in numerous
                  conflicts around the universe. Every shooter appreciates its
                  precision and its elegance.
                </p>
                <p>
                  With almost 1k joules on impact, it may not be the most
                  powerful weapon, but it sure is the most reliable.
                </p>
              </div>
            </article>
            <article>
              <img
                src={`${fv24_2}`}
                alt="futuristic helicopter with two rotors, generated by MidJourney (https://midjourney.com/home/?callbackUrl=%2Fapp%2F)"
              />
              <div className={`${mc.bloctext}`}>
                <h3>Helicopter #24.2</h3>
                <p className={`${mc.spoiler}`}>
                  20{" "}
                  <IcomoonReact
                    iconSet={iconSet}
                    color={"#ff6600"}
                    size={20}
                    icon="bitcoin"
                  />{" "}
                  / Unit
                </p>
                <p>
                  To this day, the #24.2 has been the most used air vehicle
                  across several galaxies. Its nuclear battery provide an entire
                  space-hour time flight.
                </p>
                <p>
                  Suitable for any type of mission, rescue in hostile nature or
                  quickly penetrate enemies line while shooting in all
                  directions. It is armored and part of its energy can be
                  switched between fuel and fire power.
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

export default Home;
