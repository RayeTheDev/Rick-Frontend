import styles from './styles/Home.module.css'
import { Carousell } from './Carousel'
import { Grid } from './Grid'
import { Article } from './Article'
import { FirstNews } from './FirstNews'
import { Menu } from './Menu'
import { useContext } from 'react'
import { DataContext } from './context/Data.Provider'
import { useNavigate } from 'react-router-dom'
import { Loading } from './loading'
import { Header } from './Header'

export const Home = () => {
  const { data } = useContext(DataContext)
  return (
    (!data && <Loading />) ||
    (data && (
      <div className={styles.controller}>
        <Header />
        <Menu className={styles.menu} />
        <FirstNews className={styles.firstnews} />
        <div className={styles.containerCarousel}>
          <Carousell />
        </div>
        <Article className={styles.article} />
        <Grid className={styles.grid} />
      </div>
    ))
  )
}
