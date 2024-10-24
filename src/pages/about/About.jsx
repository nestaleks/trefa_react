import './about.css';
import SliderBasement from '../../components/sliderBasement/sliderBasement';
import SliderFounding from '../../components/sliderFounding/sliderFounding';
import SliderStories from '../../components/sliderStories/sliderStories';



function About() {
    return (
        <>
        <main className="main">
        <section className="founding">
            <div className="container">
                <div className="founding__inner">
                    <div className="founding__inner-head">
                        <h3 className="founding__inner-title">Founding of Trefa Cats Shelter</h3>
                    </div>
                    <div className="founding__inner-box">
                        <SliderFounding/>
                        <p className="founding__inner-text">Our love for cats traces back to our childhood. We always felt an innate calling to save those we found wandering the streets, lost and alone. Our journey officially began in the summer of 2006 in Crimea. That's when we found our first two cats - a tomcat in Sudak and a she-cat in Dzhankoy.</p>
                        <p className="founding__inner-text">We found an excellent and loving home for the she-cat, and she blossomed under her new owner's care. The tomcat, who we grew incredibly attached to, lived with us for an impressive 17 years, showing us an unparalleled level of affection and loyalty.</p>
                        <p className="founding__inner-text">When we moved to the countryside, we saw an opportunity to extend our help to more street animals. The vast expanse of our new home provided the space and solitude these animals desperately needed. In January 2014, we made a significant leap forward in our mission. We built a separate, heated house from gas blocks on our property, solely dedicated to housing the animals we rescued.</p>
                        <p className="founding__inner-text">This haven was our sanctuary and theirs, but we didn't stop there. In time, we designated a room in our main house for our feline guests, providing a space where they could feel the warmth of a true home. After a while, we decided to open up all our living areas to them, breaking down the final barriers. Our home became a true sanctuary, not just a shelter, where each cat could roam free, experiencing a sense of normalcy and belonging.</p>
                        <p className="founding__inner-text">Our story is a testament to our belief in compassion, second chances, and the joy of watching our furry foundingSliderfriends regain their spirit. It's a tale of countless sleepless nights, heartfelt smiles, and teary goodbyes. But above all, it is the story of a home that grew into a haven, a haven that turned into a community, and a community that stands as a beacon of hope for every lost soul we find on the streets.</p>
                        <p className="founding__inner-text">Today, our sanctuary resonates with the purrs and paw-steps of countless cats that have found safety, love, and a new lease on life within its warm embrace. Each purr is a note in the symphony of our journey, each paw-step a milestone in our mission. We started with two hearts full of compassion and a dream. Now, we have a family that extends beyond species, united by the bonds of love and the shared belief in a world where no animal is left to fend for themselves.</p>
                    </div>
                </div>
            </div>
        </section>
        <section className="basement">
            <div className="container">
                <div className="basement__inner">
                    <div className="basement__inner-head">
                        <h3 className="basement__inner-title">Over 30 Days in a Basement</h3>
                    </div>
                    <div className="basement__inner-box">
                        <SliderBasement/>
                        <p className="basement__inner-text">On the dawn of February 24, 2022, our lives were indelibly marked by a devastating turn of events. Russia's unprovoked attack on Ukraine rippled through every corner of our nation. We, as Ukrainians, found ourselves in the eye of a storm that demanded an unprecedented level of resilience and adaptability.</p>
                        <p className="basement__inner-text">Our home, once a safe haven of tranquility, transformed overnight into a makeshift bunker as we took refuge in our basement. It was here, in this subterranean sanctuary, that we spent more than a month huddled together with our pets. The chaotic echoes from the world outside were a relentless reminder of the turmoil unfolding just beyond our walls, as we clung to each other for warmth and reassurance.</p>
                        <p className="basement__inner-text">Moreover, we had to grapple with the absence of basic amenities: electricity, gas, and heating. The unforgiving winter cold seemed to permeate the very air we breathed. Outside, the temperature plunged to -20 degrees Celsius on several nights, adding to the arduous conditions we faced.</p>
                        <p className="basement__inner-text">During this time, our care was not limited to our own pets. We found ourselves as reluctant custodians of around 30 cats from the Irpin Animal Shelter, which had been mercilessly bombed during the Russian siege of Irpin. We welcomed these terrified felines into our cramped refuge, providing them with what little comfort and security we could afford.</p>
                        <p className="basement__inner-text">Each day posed a grueling test of endurance and hope, punctuated by periods of despair and a sense of helplessness. But amid the turmoil, we saw the resilience of the human spirit and experienced the profound bond between humans and their animal companions. Despite the scarcity of food, water, and space, we persevered, fueled by a hope that transcended our bleak circumstances.</p>
                        <p className="basement__inner-text">As we recount these experiences, we aim to shed light on the reality many Ukrainians have had to confront during this tumultuous time. Our narrative is a testament to the resilience of the human spirit, the unyielding will to survive, and the power of companionship in crisis. By sharing our story, we hope to illuminate countless untold tales of courage buried beneath the din of war.</p>
                    </div>
                </div>
            </div>
        </section>
        <section className="stories">
            <div className="container">
                <div className="stories__inner">
                    <div className="stories__inner-head">
                        <h3 className="stories__inner-title">More Happy Stories From Our Shelter</h3>
                    </div>
                    <div className="stories__inner-box">
                        <SliderStories/>
                        <p className="stories__inner-text">Dive into heartwarming tales of our adorable residents in the cat shelter. Experience the world through the playful antics of our curious kittens and the peaceful days of our mature companions. These stories unfold tales of hope, transformation, and the gift of second chances. With every tale, we celebrate the journey of love and companionship. Join us in this continuous adventure of creating happier lives for our feline friends.</p>
                    </div>
                </div>
            </div>
        </section>
    </main>
        </>
    );
}

export default About;

