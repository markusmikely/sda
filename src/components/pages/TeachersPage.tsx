import Content from "../shared/Content"
import PageHeader from "../shared/PageHeader"
import Video from './../../assets/video/1084666594-preview.mp4'

const TeachersPage = () => {
    return (
        <div id="teachers-page">
            <PageHeader title="Teaching" video={Video} />
            <Content page="teaching">
                <h2>Page Heading One</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi euismod ex sodales, commodo nunc pulvinar, tincidunt nulla. Quisque sit amet sem eros. Donec sit amet felis dolor. Ut eleifend consequat metus non condimentum. Vestibulum id luctus eros. Etiam sit amet tincidunt diam. Cras feugiat, metus nec fringilla pharetra, nisl mi dapibus mauris, quis commodo massa velit ac dolor. Vivamus eget velit et magna sollicitudin elementum a sit amet neque. Ut pellentesque enim non libero mollis consequat. Curabitur lacinia est sit amet nisl maximus fringilla. Praesent vitae velit quis leo sagittis fringilla non non nunc. Nulla at arcu dictum, vestibulum ante ut, suscipit orci. Nunc a felis suscipit lorem fringilla lobortis sit amet volutpat quam.</p>
                <h2>Page Heading Two</h2>
                <p>Aenean nec orci id lorem aliquet malesuada. Aenean luctus ex vitae neque luctus condimentum. Proin quis nulla quis tellus consectetur rutrum a ut risus. Proin vitae nisl nec sapien venenatis lacinia. Aenean at nibh orci. Integer laoreet ac dui quis sodales. Aenean nibh diam, rutrum ac nisl id, fermentum euismod velit. Nullam scelerisque tempor ultricies. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt pulvinar urna sed hendrerit. Fusce aliquet arcu orci, in pharetra tortor blandit vel.</p>
                <h2>Page Heading Three</h2>
                <p>Sed sed mattis justo, eu sodales lorem. Sed pulvinar sagittis pulvinar. Nulla pulvinar augue et viverra scelerisque. Nunc et mauris quis tortor posuere commodo at a lectus. Proin eu purus non libero commodo vestibulum vitae vitae tellus. Praesent blandit volutpat neque lacinia porta. Sed vulputate vel ex sit amet vestibulum. Cras nec pellentesque tellus. Maecenas bibendum velit tortor, eleifend aliquam elit bibendum et. Mauris tempus massa sed justo auctor venenatis. Nam dui leo, porttitor ut felis in, molestie commodo diam.</p>
                <h2>Page Heading Four</h2>
                <p>Quisque eros risus, convallis a rhoncus sed, iaculis eu dui. Mauris libero dui, consectetur et ante eu, sollicitudin euismod dui. Aenean rhoncus mattis laoreet. Sed scelerisque mauris eu dolor cursus finibus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec iaculis finibus molestie. Quisque neque turpis, tempor sit amet convallis non, convallis eget dolor. Integer feugiat aliquet turpis, ut sodales eros consectetur a. Aenean ac augue nibh. Integer ut ipsum velit. Donec cursus rhoncus diam, sed pharetra lacus. Nunc et porttitor odio. Sed et massa porta, suscipit lectus nec, bibendum nulla.</p>
            </Content>
        </div>
    )
}

export default TeachersPage