//props src, alt
//desestruturando a props
const Imagem = ({ src, alt, imgStyle}) => {
    // const src = props.src
    // const alt = props.alt
    // const{ src, alt } = props

  return (  
      <div className={`${imgStyle} flex justify-content-center`}>
          <img src={src} alt={alt} />
      </div>
  )
}

export default Imagem