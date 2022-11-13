import styles from './styles/hero.module.css'
import Image from 'next/image'
// import cube from '../../img/cube.jpg'

const cube = {
  src: 'https://images.microcms-assets.io/assets/b7f0191ed70a4637b8c20570346ae5e4/4f9453d71d0d4773a52939d0887b509a/cube.jpg',
  height: 1300,
  width: 1500,
  blurDataURL: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAADCAIAAAA7ljmRAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAMklEQVR4nAEnANj/ANLa41p4klh2jsjQ2gC9xtAAFDEACCe6ws0A+Pv7TWB1TmF17vDzkwUU12ZA1QMAAAAASUVORK5CYII='
}

export const Hero = (props) => {
  const { title, subtitle, imageOn = false } = props;

  return (
    <div className={styles.flexContainer}>
      <div className={styles.text}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.subtitle}>{subtitle}</p>
      </div>
      {imageOn && (
        <figure className={styles.image}>
          <Image
            src={cube}
            layout="responsive"
            sizes="(min-width: 1152px) 576px, (min-width: 768px) 50vw, 100vw"
            priority
            placeholder="blur"
          />
        </figure>
      )}
    </div>
  )
}
