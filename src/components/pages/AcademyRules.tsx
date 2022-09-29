import Content from "../shared/Content"
import PageHeader from "../shared/PageHeader"
import Video from './../../assets/video/1084666594-preview.mp4'

const AcademyRulesPage = () => {

    const items: string[] = [
        "Sed sed mattis justo, eu sodales lorem. Sed pulvinar sagittis pulvinar. Nulla pulvinar augue et viverra scelerisque. Nunc et mauris quis tortor posuere commodo at a lectus. Proin eu purus non libero commodo vestibulum vitae vitae tellus. ",
        "Sed sed mattis justo, eu sodales lorem. Sed pulvinar sagittis pulvinar. Nulla pulvinar augue et viverra scelerisque. Nunc et mauris quis tortor posuere commodo at a lectus. Proin eu purus non libero commodo vestibulum vitae vitae tellus. ",
        "Sed sed mattis justo, eu sodales lorem. Sed pulvinar sagittis pulvinar. Nulla pulvinar augue et viverra scelerisque. Nunc et mauris quis tortor posuere commodo at a lectus. Proin eu purus non libero commodo vestibulum vitae vitae tellus. ",
        "Sed sed mattis justo, eu sodales lorem. Sed pulvinar sagittis pulvinar. Nulla pulvinar augue et viverra scelerisque. Nunc et mauris quis tortor posuere commodo at a lectus. Proin eu purus non libero commodo vestibulum vitae vitae tellus. ",
        "Sed sed mattis justo, eu sodales lorem. Sed pulvinar sagittis pulvinar. Nulla pulvinar augue et viverra scelerisque. Nunc et mauris quis tortor posuere commodo at a lectus. Proin eu purus non libero commodo vestibulum vitae vitae tellus. ",
        "Sed sed mattis justo, eu sodales lorem. Sed pulvinar sagittis pulvinar. Nulla pulvinar augue et viverra scelerisque. Nunc et mauris quis tortor posuere commodo at a lectus. Proin eu purus non libero commodo vestibulum vitae vitae tellus. ",
        "Sed sed mattis justo, eu sodales lorem. Sed pulvinar sagittis pulvinar. Nulla pulvinar augue et viverra scelerisque. Nunc et mauris quis tortor posuere commodo at a lectus. Proin eu purus non libero commodo vestibulum vitae vitae tellus. ",
        "Sed sed mattis justo, eu sodales lorem. Sed pulvinar sagittis pulvinar. Nulla pulvinar augue et viverra scelerisque. Nunc et mauris quis tortor posuere commodo at a lectus. Proin eu purus non libero commodo vestibulum vitae vitae tellus. ",
        "Sed sed mattis justo, eu sodales lorem. Sed pulvinar sagittis pulvinar. Nulla pulvinar augue et viverra scelerisque. Nunc et mauris quis tortor posuere commodo at a lectus. Proin eu purus non libero commodo vestibulum vitae vitae tellus. ",
        "Sed sed mattis justo, eu sodales lorem. Sed pulvinar sagittis pulvinar. Nulla pulvinar augue et viverra scelerisque. Nunc et mauris quis tortor posuere commodo at a lectus. Proin eu purus non libero commodo vestibulum vitae vitae tellus. "   
    ]

    const rules = items.map((item: string, index: number) => {
        return (
            <li key={index}>
                <p>
                    {item}
                </p>
            </li>
        )
    })

    return (
        <div id="academy-rules-page">
            <PageHeader title="Academy Rules" video={Video} />
            <Content page="our-rules">
                <ol>
                    {rules}
                </ol>
            </Content>
        </div>
    )
}

export default AcademyRulesPage