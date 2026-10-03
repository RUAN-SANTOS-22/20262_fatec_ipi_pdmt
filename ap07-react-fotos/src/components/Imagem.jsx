//props src, alt
//desestruturando a props
const Imagem = ({ src, alt }) => {
    // const src = props.src
    // const alt = props.alt
    // const{ src, alt } = props

  return (
    <div>
        <img src={src} alt={alt} />
    </div>
  )
}

export default Imagem