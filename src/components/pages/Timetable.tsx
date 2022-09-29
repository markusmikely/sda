import Content from "../shared/Content"
import PageHeader from "../shared/PageHeader"
import Video from './../../assets/video/1084666594-preview.mp4'

const TimetablePage = () => {
    return (
        <div id="timetable-page">
            <PageHeader title="Timetable" video={Video} />
            <Content page="timetable">
                Timetable content goes here
            </Content>
        </div>
    )
}

export default TimetablePage