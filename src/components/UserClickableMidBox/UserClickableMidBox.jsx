import '../../img/img1.webp'

export default function UserClickableMidBox(props){
    const {title, content, date, rate, count, author} = props

    return (
        <div className="UserClickableMidBox">
            <img className='image-item' src={require("../../img/img1.webp")} alt="" />
            <div className="main-box-data">
                <h2 className="title-item">{title}</h2>
                <p className="rate-item">(⭐️{rate})</p>
                <p className="count-item">(✨{count})</p>
            </div>
                <p className="date-item">{date}</p>
            <p className="hide-content content-item">{content}</p>
            <p className="author-item">By: {author}</p>
        </div>
    )
}
