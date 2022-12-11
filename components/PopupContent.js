import LightBox from "./LightBox"
const PopupContent = ({ content }) => {
    console.log(content)
    const { id, filename, type, desc } = content.properties
    const photoUrlPrefix = 'https://d2qr25zh4rluwu.cloudfront.net/'

    const source = `${photoUrlPrefix}` + encodeURI(`${filename}`) + `.jpg`
    console.log(source)
    const altText = 'Peng Spot Photo'
    return(
     <>
     <div className='popupImage'>
      <LightBox 
      src={source}
      alt={altText}
      >    
        <img src={source} alt={altText} height='200px' />
      </LightBox>
 
     </div>
     <div>ID: {`${id}`}</div>
     <div>Type: {`${type}`}</div>
     <div>Description: {`${desc}`}</div>
    </>
   )
 }

export default PopupContent