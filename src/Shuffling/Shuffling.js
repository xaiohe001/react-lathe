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
          <img style={{width:"100%", height:"599.98px"}} src="/img/shuffling1.jpg" alt=""></img>
        </h3>
      </div>
      <div className="loop_h3">
        <h3 style={contentStyle}>
        <img style={{width:"100%", height:"599.98px"}} src="/img/shuffling2.jpg" alt=""></img>
        </h3>
      </div>
      <div className="loop_h3">
        <h3 style={contentStyle}>
        <img style={{width:"100%", height:"599.98px"}} src="/img/shuffling3.jpg" alt=""></img>
        </h3>
      </div>
      <div className="loop_h3">
        <h3 style={contentStyle}>
        <img style={{width:"100%", height:"599.98px"}} src="/img/shuffling4.jpg" alt=""></img>
        </h3>
      </div>
    </Carousel>
  )
  
}
export default Shuffling;