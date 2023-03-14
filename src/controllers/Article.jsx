import styles from './styles/Article.module.css'
import image7 from './assets/image7.jpeg'
import image10 from './assets/image10.png'
import image11 from './assets/image11.jpg'
import { BsDot } from 'react-icons/bs'
import { useContext, useEffect, useState } from 'react'
import { DataContext } from './context/Data.Provider'
import { client } from '../client/Instance'
import { useNavigate } from 'react-router-dom'

const RightArticle = (props) => {
  const Navigate=useNavigate()
  const [data, setData] = useState(null)
  useEffect(() => {
    // console.log(props.item)
    if (props.item) {
      client.get('/user/' + props.item.creatorId).then((res) => {
        console.log(res.data)
        setData(res.data)
      })
    }
  }, [])
  return ( data&&
    <div className={styles.article_right} onClick={() => Navigate("/news/" + props.item._id)}>
      <div className={styles.content_right}>
        <div className={styles.creator_con}>
          <div className={styles.creator_name}>
            <div className={styles.name}>{data.username.first}</div>
            <div className={styles.date}>
              {props.item.createdAt.slice(5,7)+"-р сарын "+props.item.createdAt.slice(8,10)+" - "+props.item.createdAt.slice(0,4)} <BsDot className={styles.dot_icon} /> 2 мин
            </div>
          </div>
          <div className={styles.creator_avatar}>
            <img className={styles.avatar} src={image11}></img>
          </div>
        </div>
        <div className={styles.article_title}>
          <div className={styles.title}>
            <div className={styles.title_type}>{props.item.category[0].name}</div>
            <div className={styles.title_name}>
              {props.item.title}
            </div>
          </div>
          <img className={styles.article_image} src={props.item.photoUrl}></img>
        </div>
      </div>
    </div>
  )
}
const LeftArticle = (props) => {
  const Navigate=useNavigate()
  const [data, setData] = useState(null)
  useEffect(() => {
    if (props.item) {
      client.get('/user/' + props.item.creatorId).then((res) => {
        console.log(res.data)
        setData(res.data)
      })
    }
  }, [])
  return (
    <div className={styles.article_left} onClick={() => Navigate("/news/" + props.item._id)}>
      <div className={styles.content_right}>
        <div className={styles.creator_con2}>
          <div className={styles.creator_avatar2}>
            <img className={styles.avatar} src={image11}></img>
          </div>
          <div className={styles.creator_name}>
            <div className={styles.name2}>Unread</div>
            <div className={styles.date}>
              {props.item.createdAt.slice(5,7)+"-р сарын "+props.item.createdAt.slice(8,10)+" - "+props.item.createdAt.slice(0,4)} <BsDot className={styles.dot_icon} /> 2 мин
            </div>
          </div>
        </div>
        <div className={styles.article_title2}>
          <div className={styles.title}>
            <div className={styles.title_type}>{props.item.category[0].name}</div>
            <div className={styles.title_name}>
            {props.item.title}
            </div>
          </div>
          <img className={styles.article_image} src={props.item.photoUrl}></img>
        </div>
      </div>
    </div>
  )
}
export const Article = () => {
  const { menu, data } = useContext(DataContext)
  return (
    <div
      className={
        menu ? styles.article_container : `${styles.article_container_none}`
      }
    >
      <div className={styles.articles}>
        <div className={styles.article_left_image}>
          <div className={styles.banner_con}>
            <img className={styles.banner} src={image10}></img>
          </div>
        </div>
        {data &&
          data.map((item, index) => {
            if(index%2==0){
              return <RightArticle item={item} />
            }else return <LeftArticle item ={item}/>
          })}
      </div>
    </div>
  )
}
