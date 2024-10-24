import support1Img1 from './img/support-1_1.jpg';
import support1Img2 from './img/support-1_2.jpg';
import support1Img3 from './img/support-1_3.jpg';
import support2Img1 from './img/support-2_1.jpg';
import support2Img2 from './img/support-2_2.jpg';
import support2Img3 from './img/support-2_3.jpg';
import bankCard from './img/cards.jpg';
import crypto1 from './img/btc.jpg';
import crypto2 from './img/eth.jpg';
import crypto3 from './img/usdt_erc.jpg';
import crypto4 from './img/usdt_trc.jpg';

import './support.css';

function Support() {
    return(
        <main className="main">
            <section className="support-1">
                <div className="container">
                    <div className="support-1__inner">
                        <div className="support-1__inner-head">
                            <h3 className="support-1__inner-title">Help Support Our Cat Shelter!</h3>
                        </div>
                        <div className="support-1__inner-box">
                            <div className="support-1__images">
                                <img className="support-1__image" src={support1Img1} alt="" />
                                <img className="support-1__image" src={support1Img2} alt="" />
                                <img className="support-1__image" src={support1Img3} alt="" />
                            </div>
                            <p className="support-1__inner-text">Your generosity significantly impacts the lives of our feline friends. The amounts below illustrate how donations help us provide food, an essential need for every cat.</p>
                            <p className="support-1__inner-text">1€ - Covers the cost of feeding one cat for a day.
                            <br />
                            7€ - Provides a week's worth of meals for one cat.
                            <br />
                            30€ - Sustains a cat with a month's supply of food.
                            <br />
                            365€ - Ensures we can feed a cat for an entire year.</p>
                            <p className="support-1__inner-text">Annually, the expenditure for cat food alone surpasses the 20,000€ mark in our shelter. </p>
                            <p className="support-1__inner-text">Quality Food Matters. You may wonder why we emphasize the need for quality food for our cats. The reason is simple yet significant: high-quality food leads to healthier cats. When we feed our cats with high-quality, nutritious meals, they are less likely to get sick. These meals are rich in essential nutrients that strengthen their immune system, helping them resist diseases and infections more effectively.</p>
                            <p className="support-1__inner-text">On the other hand, low-quality food often lacks these nutrients and may contain fillers or additives that can adversely affect a cat's health. The result could be more frequent illnesses, which leads to increased veterinary costs and, more importantly, unnecessary suffering for our furry friends. By feeding our cats with high-quality food, we are investing in their health and well-being. And a healthy cat is a happy cat. Your generous donations help us ensure that every cat in our care receives the nutrition they need to thrive.</p>
                            <p className="support-1__inner-text">In addition to food, our shelter incurs various other expenses that your donations assist with:</p>
                            <p className="support-1__inner-text">Heating costs: Keeping our cats warm, especially during the colder months, is vital.
                            <br />
                            Sterilization and Vaccinations: These preventive measures are key to maintaining the health of our shelter population.
                            <br />
                            Emergency Medical Treatments: Many of our feline friends arrive in poor health and need immediate veterinary care.
                            <br />
                            Specialized Diets: Some cats require specific food due to health conditions.
                            <br />
                            Transportation Costs: Bringing cats to our shelter and to veterinary appointments necessitates reliable transportation.
                            <br />
                            Other Expenses: There are many other costs associated with running a shelter, from cleaning supplies to utilities and more.</p>
                            <p className="support-1__inner-text">We are grateful for your generosity and love for our furry friends. Each contribution brings us one step closer to creating a safe and nurturing environment for every cat in our care.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="support-2">
                <div className="container">
                    <div className="support-2__inner">
                        <div className="support-2__inner-head">
                            <h3 className="support-2__inner-title">Direct Aid to Our Shelter: In-kind donation</h3>
                        </div>
                        <div className="support-2__inner-box">
                            <div className="support-2__images">
                                <img className="support-1__image" src={support2Img1} alt="" />
                                <img className="support-1__image" src={support2Img2} alt="" />
                                <img className="support-1__image" src={support2Img3} alt="" />
                            </div>
                            <p className="support-2__inner-text">Dear supporters,</p>
                            <p className="support-2__inner-text">There are countless ways you can assist us in fulfilling our mission, and one of the most essential methods is through direct aid. This can be in the form of dry food or canned food for the animals under our care. Your contribution can help us maintain our stock and ensure that all our furry friends are well-fed and healthy.</p>
                            <p className="support-2__inner-text">If you're currently situated in any European country and are willing to assist us, we would greatly appreciate your help. Please contact our volunteer at <a className="phonenumber" href="tel:+380981972783"><b>+380981972783</b></a>. You can send your contributions to Berlin, Germany, and we will ensure that they are forwarded to Ukraine. </p>
                            <p className="support-2__inner-text">Alternatively, if you need more details or have specific queries about this process, you can reach out to our dedicated team of volunteers. They are always ready and willing to assist.</p>
                            <p className="support-2__inner-text">Remember, every bit of help matters. Your donations of pet food will not only nourish our residents but also warm their hearts, knowing there are people who care. Thank you for your continued support and generosity. Together, we can make a real difference in the lives of these animals.</p>
                            <br />
                            <br />
                            <p className="support-2__inner-text">Шановні підтримувачі,</p>
                            <p className="support-2__inner-text">Існує безліч способів, якими ви можете допомогти нам виконувати нашу місію, і один з найважливіших способів - це безпосередня допомога. Це може бути у формі сухого або консервованого корму для тварин, які перебувають під нашим піклуванням. Ваш внесок допоможе нам підтримувати наш запас і гарантує, що всі наші хутряні друзі добре годуються та є здоровими.</p>
                            <p className="support-2__inner-text">Допомогу ви можете відправляти за адресою: </p>
                            <p className="support-2__inner-text">
                                Нова Пошта,
                                <br />
                                Ірпінь 1 відділення,
                                <br />
                                Єрмакова Ірина Анатоліївна,
                                <br />
                                тел. +380962734547
                            </p>
                            <p className="support-2__inner-text">Якщо ви знаходитесь в будь-якій європейській країні та готові допомогти нам, ми будемо величезно вдячні за вашу допомогу. Зверніться до нашого волонтера за номером <a className="phonenumber" href="tel:+380981972783"><b>+380981972783</b></a></p>
                            <p className="support-2__inner-text">Ви можете відправити свої внески до Берліна, Німеччина, і ми гарантуємо, що вони будуть переслані в Україну.</p>
                            <p className="support-2__inner-text">Крім того, якщо вам потрібно дізнатися більше деталей або у вас є конкретні запитання щодо цього процесу, ви можете звернутися до наших волонтерів. Вони завжди готові і бажають допомогти:
                            <br />
                            В Україні <a className="phonenumber" href="tel:+380981972783"><b>+380981972783</b></a>
                            <br />
                            В Европі <a className="phonenumber" href="tel:+380981972783"><b>+380981972783</b></a></p>
                            <p className="support-2__inner-text">Пам'ятайте, кожна допомога має значення. Ваші пожертвування кормом для домашніх тварин не тільки будуть годувати наших вихованців, але й зігрівають їх серця, знаючи, що є люди, які піклуються.</p>
                            <p className="support-2__inner-text">Дякуємо вам за вашу постійну підтримку та щедрість. Разом ми можемо зробити справжню різницю в житті цих тварин.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="support-3">
                <div className="container">
                    <div className="support-3__inner">
                        <div className="support-3__inner-head">
                            <h3 className="support-3__inner-title">How You Can Help Us: Various Donation Methods</h3>
                        </div>
                        <div className="support-3__inner-box">
                            <p className="support-3__inner-text">Greetings to our esteemed supporters!</p>
                            <p className="support-3__inner-text">We've continuously been working towards our mission, and your support has been a driving force for us. In order to make your contribution process smoother and more efficient, we've compiled a list of various donation methods that you can utilize. Your help is integral to our journey, and we hope to make your giving experience as convenient as possible.</p>
                            <p className="support-3__inner-text">You can support us by transferring funds directly to our PrivatBank card or Mono Bank Card. Every penny counts and we deeply appreciate your support.</p>
                            <div className="support-3__cards">
                                <img className="support-3__cards-img" src={bankCard} alt="" />
                                <div className="support-3__cards-text">
                                    <p id='copy' className="cards-number">Private Bank Card Transfers: <span>5168 7451 0135 8445</span></p>
                                    <p id='copy' className="cards-number">*soon Mono Bank Card Transfers: <span>[#MonoBankCard]</span></p>
                                </div>
                            </div>
                            <p className="support-3__inner-text">Cryptocurrency Transfers: We accept donations in the form of Cryptocurrency. Specifically, we accept:</p>
                            <div className="support-3__crypto">
                                <img className="support-3__crypto-img" src={crypto1} alt="" />
                                <p className="crypto-number">Bitcoin (BTC) <span>bc1qut0hmn53uyf5cdtvx02vnfw57l6e6eg38j7cmq</span></p>
                            </div>
                            <div className="support-3__crypto">
                                <img className="support-3__crypto-img" src={crypto2} alt="" />
                                <p className="crypto-number">Ethereum (ETH) <span>0xcAcb7ba5DE21D7Ead80754c2Bf62B2B38ceE67F6</span></p>
                            </div>
                            <div className="support-3__crypto">
                                <img className="support-3__crypto-img" src={crypto3} alt="" />
                                <p className="crypto-number">USDT (ERC20) <span>0xcAcb7ba5DE21D7Ead80754c2Bf62B2B38ceE67F6</span></p>
                            </div>
                            <div className="support-3__crypto">
                                <img className="support-3__crypto-img" src={crypto4} alt="" />
                                <p className="crypto-number">USDT (TRC20) <span>TBbXHp4gczeeV5tSQXJhEVTZaYVMLKv79o</span></p>
                            </div>
                            <p className="support-3__inner-text">We would like to express our sincere gratitude for your support and trust in us. Every donation we receive plays a significant role in our ongoing efforts. Together, we can make a positive impact.</p>
                            <p className="support-3__inner-text">For more detailed instructions on how to make a donation, feel free to contact us. We're always here to help. Thank you for your unwavering support.</p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Support;