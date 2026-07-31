import { useState } from "react";
import "../styles/Contact.css";

function Contact() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const sendEmail = (e) => {

        e.preventDefault();

        const subject = "Message from Imperial Beverages Website";

        const body = `
        Name: ${name}

        Email: ${email}

        Message:

        ${message}
        `;

        window.location.href =
            `mailto:info@imperial-beverages.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    };

    return (

        <section className="contact" id="contact">

            <div className="contact-overlay">

                <div className="contact-container">

                    {/* LEFT SIDE */}

                    <div className="contact-info">

                        <p className="section-tag">
                            CONTACT US
                        </p>

                        <h2>
                            We'd Love To Hear From You
                        </h2>

                        <p className="contact-text">
                            Whether you have an enquiry, partnership request,
                            distributorship opportunity or simply want to know
                            more about Imperial Beverages Limited, our team is
                            always ready to assist you.
                        </p>

                        <div className="contact-details">

                            <div className="contact-item">

                                <h4>Email</h4>

                                <a href="mailto:info@imperial-beverages.com">
                                    info@imperial-beverages.com
                                </a>

                            </div>

                            <div className="contact-item">

                                <h4>Phone</h4>

                                <a href="tel:+2349166686666">
                                    +234 916 668 6666
                                </a>

                            </div>

                            <div className="contact-item">

                                <h4>Address</h4>

                                <p>
                                    88/90 Airport Road,
                                    <br />
                                    Mafoluku,
                                    <br />
                                    Oshodi,
                                    <br />
                                    Lagos, Nigeria.
                                </p>

                            </div>

                        </div>

                    </div>

                    {/* RIGHT SIDE */}

                    <div className="contact-form">

                        <form onSubmit={sendEmail}>

                            <h3>
                                Send Us A Message
                            </h3>

                            <input
                                type="text"
                                placeholder="Name *"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />

                            <input
                                type="email"
                                placeholder="Email *"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />

                            <textarea
                                placeholder="Message"
                                rows="7"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                required
                            ></textarea>

                            <button type="submit">
                                Send Message
                            </button>

                        </form>

                    </div>

                </div>

            </div>

        </section>

    );

}

export default Contact;