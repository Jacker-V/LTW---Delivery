import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/assets'
const ExploreMenu = ({category,setCategory}) => {
  return (
    <div className='explore-menu' id='explore-menu'>
        <h1>Explore our menu</h1>
        <p className='explore-menu-text'>Explore a diverse and delicious menu crafted to satisfy every taste and craving. From timeless classics to bold new flavors, every dish is prepared with the finest ingredients and a passion for quality. Whether you're in the mood for something comforting or feeling adventurous, our menu offers something for everyone. Join us and experience a culinary journey that delights the senses and brings people together.</p>
        <div className="explore-menu-list">
            {menu_list.map((item,index)=>{
                return(
                    <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index} className="explore-menu-list-item">
                        <img className={category===item.menu_name?"active":""} src={item.menu_image} alt="" />
                        <p>{item.menu_name}</p>

                    </div>

                )
            })}
        </div>
        <hr />
    </div>
  )
}

export default ExploreMenu
