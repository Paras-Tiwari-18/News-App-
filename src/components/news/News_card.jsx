import '../../assets/style.css'
export const News_card=({data})=>{
    return (
    <div className="container">
        <div className="first">
            <div className="source">
                <img src={data.source_icon} alt="" />
            </div>
            <div className="content">
                <h2><a href={data.link}>{data.title}</a></h2>
                {data.image_url &&<img src={data.image_url} alt="" />}
                
                
            </div>
            <div className="date">
                <h6>Published:{data.pubDate}</h6>
            </div>

        </div>
    </div>
    )
}
