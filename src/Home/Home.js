import React from 'react'
import homeStyle from './Home.module.css'
import Product from './Product/Product'

function Home() {
  return (
    <div className={homeStyle.home}>
      <img 
        src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_v2_1x._CB432458380_.jpg" 
        alt=''
        className={homeStyle.home__banner}
      />

      <div className={homeStyle.home__row}>
        <Product id='21332434' title={'SYLVANIA Smart + ZigBee Indoor Starter Kit, Color Changing Light Strip, Works with SmartThings, Wink, and Amazon Echo Plus'}  price={38.15} rating={4} 
          image='https://images-na.ssl-images-amazon.com/images/I/71ysrdV24ML._AC_SL1500_.jpg'
        />
        <Product id='' title={'TOZO T6 True Wireless Earbuds Bluetooth Headphones Touch Control with Wireless Charging'}  price={42.99} rating={5} 
          image='https://images-na.ssl-images-amazon.com/images/I/71CH1MwvxyL._AC_SL1500_.jpg'
        />
      </div>

      <div className={homeStyle.home__row}>
        <Product id='435454' title={'Apple iPad Air (10.5-inch, Wi-Fi, 64GB) - Silver'}  price={499.99} rating={5} 
          image='https://images-na.ssl-images-amazon.com/images/I/61FNYT%2BpT2L._AC_SL1500_.jpg'
        />
        <Product id='543324' title={'New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Space Gray (4th Generation)'}  price={500} rating={5} 
          image='https://images-na.ssl-images-amazon.com/images/I/61GrEskUMAL._AC_SL1500_.jpg'
        />
        <Product id='45154' title={'Samsung Galaxy Tab S6 10.5", 128GB (LTE VERIZON & WiFi) Tablet Mountain Gray - SM-T867VZAAVZW'}  price={773.71} rating={4} 
          image='https://images-na.ssl-images-amazon.com/images/I/71v8Md%2BkzjL._AC_SL1500_.jpg'
        />
      </div>

      <div className={homeStyle.home__row}>
        <Product id='454354353' title={'MSI Full HD Non-Glare 1ms 2560 x 1080 Ultra Wide 200Hz Refresh Rate HDR Ready USB/DP/HDMI Smart Headset Hanger FreeSync 30”Gaming Curved Monitor (Optix MAG301CR) - Black'}  price={349.99} rating={3} 
          image='https://images-na.ssl-images-amazon.com/images/I/610niDdSRML._AC_SL1024_.jpg'
        />
        
      </div>
      
    </div>
  )
}

export default Home;
