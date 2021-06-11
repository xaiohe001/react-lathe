import './News.css'
import {useState} from 'react'

function News() {
    let [list] = useState([
        {
            title:'沥林数控车床加工日常使用的技巧和注意事项',
            content:'数控车床的出现，对我国的工业发展起着举足轻重的作用。鼎沛五金制品公司是一家具有技术经验丰富，秉承'
        },
        {
            title:'数控车床加工日常使用的技巧和注意事项',
            content:'数控车床的出现，对我国的工业发展起着举足轻重的作用。鼎沛五金制品公司是一家具有技术经验丰富，秉承'
        },
        {
            title:'合适的淡水数控车床加工该如何选择？',
            content:'现在劳动工这么难招，企业要想提高自己的生产效率，不依靠设备技术是没办法完成的。 广泛应用大大提高了'
        },
        {
            title:'望牛墩数控车床加工日常使用的技巧和注意事项',
            content:'数控车床的出现，对我国的工业发展起着举足轻重的作用。鼎沛五金制品公司是一家具有技术经验丰富，秉承'
        },
        {
            title:'沈阳CNC加工的操作流程鼎沛告诉你',
            content:'就是要将原材料，通过铣床、钻床、抛光等机械，再根据所想要的到的效果进行加工，这可以制造出螺丝、钓'
        },
        {
            title:'数控车床加工零件如何对刀',
            content:'数控车床的对刀和普通车床对刀是一样对法的。区别在于对上刀时用手摇对刀要在刀补中输入你想要的输入的数据。'
        },
        {
            title:'你知道CNC数控加工该如何选择刀具吗？',
            content:'刀具的选择是工艺中的重要内容之一，不仅影响机床的加工效率，而且直接影响零件的加工质量。数控刀具是'
        },
        {
            title:'使用淡水数控车床加工的日常技巧和注意事项',
            content:'数控车床的出现，对我国的工业发展起着举足轻重的作用。鼎沛五金制品公司是一家具有技术经验丰富，秉承'
        },
    ])
    return(
        <div className="news">
            <div className="news_center">
                <div className="news_news">
                    <div>新闻中心</div>
                    <div>News center</div>
                </div>
                <div className="news_dates">
                        {
                            list.map((item,index)=>
                                <div key={index} className="news_date">
                                    <div>
                                <span>
                                    <strong>21</strong>
                                    <i>2021-06</i>
                                </span>
                                <i>{item.title}</i>
                                </div>
                                    <div>
                                        {item.content}
                                    </div>
                                </div>
                            )
                        }
                </div>
                    
                   
            </div>
            
        </div>
    )
}

export default News