import ContactForm from "../forms/ContactForm"
import PageHeader from "../shared/PageHeader"
import Video from './../../assets/video/1084666594-preview.mp4'
import Map from "../sections/contact/Map"
import ContactHeader from "../sections/contact/ContactHeader"

const ContactPage = () => {
    return (
        <div id="contact-page">
            <PageHeader title="Contact Us" video={Video} />
            <ContactHeader />
            <ContactForm />
            <Map />
        </div>
    )
}

export default ContactPage