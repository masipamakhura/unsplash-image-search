
import './imagelist.css';
import ImageShow from './ImageShow';
function ImageList({images}){
 
    var imageObj = images.map(image=> <ImageShow image={image}  key={image.id} />)
    return (<div className='image-list'> {imageObj}</div>)
}
export default ImageList;