import Content from "../shared/Content"
import PageHeader from "../shared/PageHeader"
import Video from './../../assets/video/1084666594-preview.mp4'

const ErrorPage = () => {
    return (
        <div id="error-page">
            <PageHeader title="Error Page" video={Video} />
            <Content page="error-page">
                Error Page Conten goes here
            </Content>
        </div>
    )
}

export default ErrorPage