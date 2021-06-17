import './Nav.css'
import { Link } from 'react-router-dom'

function Nav() {
    return (
        <div>
            <div className="app">
                <div className="app_nav">
                    <Link to="/">
                        <div className="app_nav_one">车床加工</div>
                    </Link>
                    <div className="app_nav_two">
                        <img src="http://www.hanguan88.cn/style/css/tel.png" alt=""></img>
                        10011011010
                    </div>
                </div>
            </div>
            <div className="image">
                <div className="image_ul">
                    <ul>
                        <Link to="/">
                            <li>网站首页</li>
                        </Link>
                        <Link to="/Jump">
                            <li>关于我们</li>
                        </Link>
                        <Link to="/Serve">
                            <li>服务项目</li>
                        </Link>
                        <Link to="Price">
                            <li>服务价格</li>
                        </Link>
                        <Link to="CorporateNews">
                            <li>企业新闻</li>
                        </Link>
                        <Link to="CommonProblem">
                            <li>常见问题</li>
                        </Link>
                        <Link to="Contactus">
                            <li>联系我们</li>
                        </Link>    
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default Nav