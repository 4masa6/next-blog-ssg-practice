export const Hero = (props) => {
  const { title, subtitle, imageOn = false } = props;

  return (
    <>
      <div>
        <h1>{title}</h1>
        <p>{subtitle}</p>
        {imageOn && <figure>[画像]</figure>}
      </div>
    </>
  )
}
