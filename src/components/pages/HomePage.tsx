import AboutSection from "../sections/home/AboutSection"
import BecomeATeacherSection from "../sections/home/BecomeATeacherSection"
import ClassPackagesSection from "../sections/home/ClassPackagesSection"
import HeroSection from "../sections/home/HeroSection"
import PrivateClassesSection from "../sections/home/PrivateClassesSection"
import TimetableSection from "../sections/home/TimetableSection"

const HomePage = () => {
    return (
        <>
            <HeroSection />
            <AboutSection />
            <TimetableSection />
            <ClassPackagesSection />
            <BecomeATeacherSection />
            <PrivateClassesSection />
        </>
    )
}

export default HomePage