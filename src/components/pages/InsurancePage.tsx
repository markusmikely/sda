import Content from "../shared/Content"
import PageHeader from "../shared/PageHeader"
import Video from './../../assets/video/1084666594-preview.mp4'

const InsurancePage = () => {
    return (
        <div id="insurance-page">
            <PageHeader title="Insurance" video={Video} />
            <Content page="insurance">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi euismod ex sodales, commodo nunc pulvinar, tincidunt nulla. Quisque sit amet sem eros. Donec sit amet felis dolor. Ut eleifend consequat metus non condimentum. Vestibulum id luctus eros. Etiam sit amet tincidunt diam. Cras feugiat, metus nec fringilla pharetra, nisl mi dapibus mauris, quis commodo massa velit ac dolor. Vivamus eget velit et magna sollicitudin elementum a sit amet neque. Ut pellentesque enim non libero mollis consequat. Curabitur lacinia est sit amet nisl maximus fringilla. Praesent vitae velit quis leo sagittis fringilla non non nunc. Nulla at arcu dictum, vestibulum ante ut, suscipit orci. Nunc a felis suscipit lorem fringilla lobortis sit amet volutpat quam.</p>
            </Content>
        </div>
    )
}

export default InsurancePage