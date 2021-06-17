import './Introduction.css'
import { Link } from 'react-router-dom'

function Introduction() {
    return(
        <div className="introduction">
            <div className="introduction_back">
                <div className="company">
                    <div>公司简介</div>
                    <div>Company profile</div>
                </div>
                <div className="company_bottom">
                    <div>
                        <img src="/img/introduction.jpg" alt=""></img>
                    </div>
                    <div>
                        沈阳飞跃车床加工厂是专业以日本和台湾进口的自动车床、CNC电脑车床、CNC加工中心、无心磨床等设备生产各种精密五金零件、数控车床加工件、CNC加工件、自动车床加工件。产品有微型电机轴、精密车件、家电铜接头、雾化器铜头、汽车五金零件、电脑电子五金配件、家用电器五金配件、六角铆螺母、LED铝制品外壳和高端通讯设备零件，渔具、玩具和锁具等五金配件。材质包括：铜、铁、铝、POM(塞钢）以及不锈钢。我们拥有精湛的五金制造专业技术人员及经验丰富的管理人员。车床加工、数控车床加工、精密五金加工。 我们的原则：诚信为本；顾客至上！
                        <Link to="Jump">
                            <p>查看详细</p>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Introduction