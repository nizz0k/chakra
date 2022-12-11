
 const GeoJSONPopupContent = ({ content }) => {
    console.log(content)
    return content.features.map((feature) => {
    const { id, filename, type, desc } = feature.properties   
    }
    )
    return(
     <>
     <div className='popupImage'>
     <img src={`https://d2qr25zh4rluwu.cloudfront.net/` + encodeURI(`${filename}`) + `.jpg`} alt='peng spot photo' height='200px' />
     </div>
     <div>Type: {`${type}`}</div>
     <div>Description: {`${desc}`}</div>
    </>
   )
 }

export default GeoJSONPopupContent