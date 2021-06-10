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
          <img style={{width:"100%", height:"599.98px"}} src="http://img.netbian.com/file/2021/0516/21ebdef585ced49e8d5a80f85788e2dc.jpg" alt=""></img>
        </h3>
      </div>
      <div className="loop_h3">
        <h3 style={contentStyle}>
        <img style={{width:"100%", height:"599.98px"}} src="http://img.netbian.com/file/2018/1109/57b7194f62679a125592d6362db890ea.jpg" alt=""></img>
        </h3>
      </div>
      <div className="loop_h3">
        <h3 style={contentStyle}>
        <img style={{width:"100%", height:"599.98px"}} src="http://img.netbian.com/file/2018/0902/effd67c9f036033a8c0c7e20e72e2136.jpg" alt=""></img>
        </h3>
      </div>
      <div className="loop_h3">
        <h3 style={contentStyle}>
        <img style={{width:"100%", height:"599.98px"}} src="http://img.netbian.com/file/2017/0911/e06c5e7aaae84fcdea312e1101dcd177.jpg" alt=""></img>
        </h3>
      </div>
    </Carousel>
  )
  
}
export default Shuffling;