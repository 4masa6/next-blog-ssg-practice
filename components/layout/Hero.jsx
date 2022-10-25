import style from '../../styles/hero.module.css'

export const Hero = (props) => {
  const { title, subtitle, imageOn = false } = props;
  console.log(style);
  return (
    <>
      <div className="style.text">
        <h1 className="style.title">{title}</h1>
        <p className="style.subtitle">{subtitle}</p>
        {imageOn && <figure>[画像]</figure>}
      </div>
    </>
  )
}
