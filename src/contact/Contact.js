import "./Contact.css";
import linkedIn from '../images/linkedin.png';
import github from '../images/github.png';

function Contact() {
    return(
        <section className="under">
            <section className="contact-section">

                <section className="email-section">
                    <a href="mailto:ericberglund117@gmail.com">Email Me!</a>
                </section>

                {/* <section className="phone-section">
                    <a href="tel:+3033458868">Phone</a>
                </section> */}

                <section className="linkedIn-section">
                    <a href="https://www.linkedin.com/in/eric-berglund117/">
                        <img src={linkedIn} className="linkedInImage" alt="linkedIn icon"></img>
                    </a>
                </section>

                <section className="github-section">
                    <a href="https://github.com/ericberglund117">
                        <img src={github} className="githubImage" alt="github icon"></img>
                    </a>
                </section>

                <section className="turing-section">
                    <a href="https://terminal.turing.edu/profiles/507">Turing Profile</a>
                </section>

            </section>
        </section>
    )
};

export default Contact;