
 const PopupContent = ({ content }) => {
    console.log(content)
    const { id, filename, type, desc } = content.properties
    return(
     <>
     <div className='popupImage'>
     <img src={`https://d2qr25zh4rluwu.cloudfront.net/` + encodeURI(`${filename}`) + `.jpg`} alt='peng spot photo' height='200px' />
     </div>
     <div>ID: {`${id}`}</div>
     <div>Type: {`${type}`}</div>
     <div>Description: {`${desc}`}</div>
    </>
   )
 }

export default PopupContent