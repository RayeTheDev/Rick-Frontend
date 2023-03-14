import styles from './styles/FirstNews.module.css'
import backgroundImage from '../controllers/assets/image8.jpg'
import image9 from '../controllers/assets/image9.jpg'
import creator from '../controllers/assets/banana.jpeg'
import { useContext, useEffect, useState } from 'react'
import { DataContext } from './context/Data.Provider'
import { Loading } from './loading'
import { client } from '../client/Instance'
import { BsDot } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'

export const FirstNews = () => {
  const Navigate=useNavigate()
  const { menu, data } = useContext(DataContext)
  const [user,setUser]=useState(null)
  useEffect(()=>{
    client.get("/user/"+data[0].creatorId).then((res)=>{setUser(res.data);console.log(res.data)})
  },[data])
  return (
    <div className={menu ? styles.controller : `${styles.controller_none}`}>
      <div className={styles.dark_con}>
        <img className={styles.background_image} src={backgroundImage}></img>
        <div className={styles.gradient}></div>
      </div>
      <div className={styles.content_container}>
        <div className={styles.news_image_con} onClick={()=>{Navigate("/news/"+data[0]._id)}}>
          <img className={styles.news_image} src={data[0].photoUrl}></img>
        </div>
        <div className={styles.no_name_con}>
          <div className={styles.news_image_con2}>
            <img className={styles.news_image2} src={image9}></img>
          </div>
        </div>
        <div className={styles.news_container}>
          <div className={styles.content} onClick={()=>{Navigate("/news/"+data[0]._id)}}> 
            <div className={styles.today}>ӨНӨӨДӨР</div>
            <div className={styles.news_title}>{data[0].category[0].name}</div>
            <div className={styles.news_name}>
              {data[0].title}
            </div>
            <div className={styles.creator}>
              <div className={styles.avatar_con}>
                <img className={styles.avatar} src={creator}></img>
              </div>
              <div className={styles.creater_info}>
                <div className={styles.creator_name}>{user&&user.username.first}</div>
                <div className={styles.creator_post_date}>
                {data[0].createdAt.slice(5,7)+"-р сарын "+data[0].createdAt.slice(8,10)+" - "+data[0].createdAt.slice(0,4)} <BsDot className={styles.dot_icon} /> 2 мин
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
