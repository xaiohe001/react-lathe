import { Carousel } from 'antd';

const contentStyle = {
  height: '591.812px',
  color: '#fff',
  lineHeight: '591.812px',
  textAlign: 'center',
  background: '#364d79',
};


function Shuffling(){
  return(
    <Carousel autoplay>
      <div className="loop_h3">
        <h3 style={contentStyle}>
          <img src="http://www.hanguan88.cn/uploads/allimg/180520/1-1P520212T70-L.jpg" alt=""></img>
        </h3>
      </div>
      <div className="loop_h3">
        <h3 style={contentStyle}>
        <img src="http://www.hanguan88.cn/uploads/180520/1-1P52021333C25.jpg" alt=""></img>
        </h3>
      </div>
      <div className="loop_h3">
        <h3 style={contentStyle}>
        <img src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic.90sjimg.com%2Fdesign%2F00%2F60%2F47%2F97%2F573d2fe0b2d68.jpg&refer=http%3A%2F%2Fpic.90sjimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1625820012&t=a81e183885a6acaec5941697815ec546" alt=""></img>
        </h3>
      </div>
      <div className="loop_h3">
        <h3 style={contentStyle}>
        <img src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01449657fddbe4a84a0e282b8b3b2d.jpg&refer=http%3A%2F%2Fimg.zcool.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1625820129&t=4213381b80fad388b0fe4a0a8fcb4238" alt=""></img>
        </h3>
      </div>
    </Carousel>
  )
  
}
export default Shuffling;