
function ImageShow({image}){
    return (<div>
         <figure>
            <img src={image.urls.small}  alt={image.alt_description}/>
            <figcaption>{image.alt_description}</figcaption>
         </figure>
    </div>)
}
export default ImageShow