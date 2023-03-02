// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {details, onImage} = props
  const {id, imageUrl, imageAltText, thumbnailUrl, thumbnailAltText} = details

  const onButton = () => {
    console.log(`clicked on ${id}`)
    onImage(imageUrl, imageAltText)
  }
  return (
    <li className="list-container">
      <button className="thumb" type="button" onClick={onButton}>
        <img src={thumbnailUrl} alt={thumbnailAltText} />
      </button>
    </li>
  )
}
export default ThumbnailItem
