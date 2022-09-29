const Image = ({ direction, image }: any) => {
    return (
        <div className={"image " + direction}>
            <img src={image} />
        </div>
    )
}

export default Image