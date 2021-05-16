import React, { Component } from "react";
import Slider from "react-slick";
import 熱門料理 from "../images/title/熱門料理.png"
import 熱門食材 from "../images/title/熱門食材.png"
export default class MultipleItems extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 5
    };
    return (
      <div className="slick-block">
        <img className="slick-title" src={熱門料理}/>
        <Slider {...settings}>
          <div>
            <img className="slick-img" src="https://imageproxy.icook.network/resize?background=255%2C255%2C255&nocrop=true&stripmeta=true&type=auto&url=http%3A%2F%2Ftokyo-kitchen.icook.tw.s3.amazonaws.com%2Fuploads%2Frecipe%2Fcover%2F161587%2F83ca1ec22fa5895c.jpg&width=1242"/>
          </div>
          <div>
            <img className="slick-img" src="https://tokyo-kitchen.icook.network/uploads/recipe/cover/328980/f591b7fd14dbdf8c.jpg"/>
          </div>
          <div>
            <img className="slick-img" src="https://imageproxy.icook.network/resize?background=255%2C255%2C255&nocrop=true&stripmeta=true&type=auto&url=http%3A%2F%2Ftokyo-kitchen.icook.tw.s3.amazonaws.com%2Fuploads%2Frecipe%2Fcover%2F371280%2F207937109b9ca420.jpg&width=1242"/>
          </div>
          <div>
            <img className="slick-img" src="https://tokyo-kitchen.icook.network/uploads/recipe/cover/328980/f591b7fd14dbdf8c.jpg"/>
          </div>
          <div>
             <img className="slick-img" src="https://imageproxy.icook.network/resize?background=255%2C255%2C255&nocrop=true&stripmeta=true&type=auto&url=http%3A%2F%2Ftokyo-kitchen.icook.tw.s3.amazonaws.com%2Fuploads%2Frecipe%2Fcover%2F370052%2F30fb494b02673f88.jpg&width=443"/>
          </div>
          <div>
             <img className="slick-img" src="https://imageproxy.icook.network/resize?background=255%2C255%2C255&nocrop=true&stripmeta=true&type=auto&url=http%3A%2F%2Ftokyo-kitchen.icook.tw.s3.amazonaws.com%2Fuploads%2Frecipe%2Fcover%2F372449%2F282ef817c78db182.jpg&width=443"/>
          </div>
          <div>
             <img className="slick-img" src="https://imageproxy.icook.network/resize?background=255%2C255%2C255&nocrop=true&stripmeta=true&type=auto&url=http%3A%2F%2Ftokyo-kitchen.icook.tw.s3.amazonaws.com%2Fuploads%2Frecipe%2Fcover%2F303665%2F363059cb1c0abe6b.jpg&width=443"/>
          </div>
          <div>
             <img className="slick-img" src="https://imageproxy.icook.network/resize?background=255%2C255%2C255&nocrop=true&stripmeta=true&type=auto&url=http%3A%2F%2Ftokyo-kitchen.icook.tw.s3.amazonaws.com%2Fuploads%2Frecipe%2Fcover%2F339232%2Fa462dd2889b423b8.jpg&width=443"/>
          </div>
        </Slider>
        <img className="slick-title" src={熱門食材}/>
        <Slider {...settings}>
          <div>
            <img className="slick-img" src="https://s3-ap-southeast-1.amazonaws.com/zhonglingdev/resource/goods/item_M3060-1.jpg"/>
          </div>
          <div>
            <img className="slick-img" src="https://www.lamabeibei.com/uploads/allimg/190125/17-1Z12510434IW.jpg"/>
          </div>
          <div>
            <img className="slick-img" src="https://i.epochtimes.com/assets/uploads/2015/01/1408140542492525-600x400.jpg"/>
          </div>
          <div>
            <img className="slick-img" src="https://www.great-oil.com.tw/webadmin/editor/attached/image/20180519/2018051912480107107.jpg"/>
          </div>
          <div>
             <img className="slick-img" src="https://www.getldi.com/wp-content/uploads/2017/09/bigstock-Bowl-and-scoop-with-white-sand-180259339.jpg"/>
          </div>
          <div>
             <img className="slick-img" src="https://www.hollandshop24.com/media/image/product/1454/lg/kikkoman-soy-sauce.jpg"/>
          </div>
          <div>
             <img className="slick-img" src="https://www.alcohol.com.tw/upload/catalog_list_pic/twl_catalog_20i04_z2ee5qyt6m.png"/>
          </div>
          <div>
             <img className="slick-img" src="https://solidstarts.com/wp-content/uploads/when-can-babies-eat-eggs-480x320.jpg"/>
          </div>
        </Slider>
      </div>
    );
  }
}