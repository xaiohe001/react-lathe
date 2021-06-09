import './Nav.css'

function Nav() {
    return (
        <div>
            <div className="app">
                <div className="app_nav">
                    <div className="app_nav_one">车床加工</div>
                    <div className="app_nav_two">
                        <img src="http://www.hanguan88.cn/style/css/tel.png" alt=""></img>
                        10011011010
                    </div>
                </div>
            </div>
            <div className="image">
                <div className="image_ul">
                    <ul>
                        <li>网站首页</li>
                        <li>关于我们</li>
                        <li>服务项目</li>
                        <li>服务价格</li>
                        <li>企业新闻</li>
                        <li>常见问题</li>
                        <li>联系我们</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default Nav