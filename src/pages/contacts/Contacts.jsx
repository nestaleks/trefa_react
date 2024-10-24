import './contacts.css';

function Contacts () {
    return(
        <main class="main">
            <section class="contacts">
                <div class="container">
                    <div class="contacts__inner">
                        <div class="contacts__inner-head">
                            <h3 class="contacts__inner-title">Help Support Our Cat Shelter!</h3>
                        </div>
                        <div class="contacts__inner-box">
                            <form class="contacts__form" action="">
                                <p class="contacts__text">Name</p>
                                <input class="contacts__input" type="text" />
                                <p class="contacts__text">E-mail</p>
                                <input class="contacts__input" type="email" />
                                <p class="contacts__text">Phone Number</p>
                                <input class="contacts__input" type="text" />
                                <p class="contacts__text">Subject</p>
                                <input class="contacts__input" type="text" />
                                <p class="contacts__text">Message</p>
                                <textarea class="contacts__area"></textarea>
                                <input class="contacts__file" type="file" name="files" multiple="" />
                                <button class="contacts__btn" type="submit">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Contacts;