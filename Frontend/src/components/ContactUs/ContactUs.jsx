import './ContactUs.css'

function ContactUs() {
    return (
        <div className="get-in-touch-section">
            {/* Left: heading + description */}
            <div className="git-left">
                <h2 className="git-heading">Get in touch</h2>
                <p className="git-description">
                    Connect with us to improve your productivity. We'd love to hear
                    from you and help you get the most out of Folium.
                </p>
            </div>

            {/* Right: contact form */}
            <div className="git-form-wrapper">
                <form className="contact-form">
                    <div className="contact-form-row">
                        <div className="contact-form-group">
                            <label htmlFor="firstName">First Name</label>
                            <input type="text" id="firstName" placeholder="John" />
                        </div>
                        <div className="contact-form-group">
                            <label htmlFor="lastName">Last Name</label>
                            <input type="text" id="lastName" placeholder="Doe" />
                        </div>
                    </div>
                    <div className="contact-form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" placeholder="john@example.com" />
                    </div>
                    <div className="contact-form-group">
                        <label htmlFor="message">Message</label>
                        <textarea id="message" rows={5} placeholder="Tell us how we can help..." />
                    </div>
                    <button type="submit" className="contact-submit-btn">Send Message</button>
                </form>
            </div>
        </div>
    )
}

export default ContactUs
