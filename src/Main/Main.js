import './Main.css'
import {useState} from 'react'

function Main() {
    let [list,setList]=useState([
        {
            image:'http://www.hanguan88.cn/uploads/allimg/c180520/152D2VV3F-13257.jpg',
            title:'自动车床件6'
        },
        {
            image:'http://www.hanguan88.cn/uploads/allimg/c180520/152D2V94260-14B1.jpg',
            title:'自动车床件5'
        },
        {
            image:'http://www.hanguan88.cn/uploads/allimg/c180520/152D2V91M0-56462.jpg',
            title:'自动车床件4'
        },
        {
            image:'http://www.hanguan88.cn/uploads/allimg/c180520/152D2V91M0-56462.jpg',
            title:'自动车床件3'
        },
        {
            image:'http://www.hanguan88.cn/uploads/allimg/c180520/152D2VY140-34U2.jpg',
            title:'自动车床件2'
        },
        {
            image:'http://www.hanguan88.cn/uploads/allimg/c180520/152D2VWI0-29546.jpg',
            title:'自动车床件1'
        },
        {
            image:'http://www.hanguan88.cn/uploads/allimg/c180520/152D2V50b0-15364.jpg',
            title:'数控车床件6'
        },
        {
            image:'http://www.hanguan88.cn/uploads/allimg/c180520/152D2V4UP-51c5.jpg',
            title:'自动车床件5'
        }
    ])
    return (
        <div className="main">
            <div className="main_center">
                <div className="main_server">
                    <div className="main_item">
                        <h2>服务项目</h2>
                        <p>Server Items</p>
                    </div>
                    <div className="btn">
                        <button>冲压</button>
                        <button>车床加工</button>
                        <button>数控机床加工</button>
                        <button>精密五金加工</button>
                    </div>
                    <div className="lists">
                        <div className="lists_img">
                            {
                                list.map((item,index)=>
                                    <div key={index} className="lists_picture">
                                        <div className="picture"><img src={item.image} alt=""></img></div>
                                        <div className="tit">{item.title}</div>
                                    </div>
                                )
                            }
                            
                        </div>
                    </div>





                </div>
            </div>
        </div>
    )
  }
  export default Main;