import './Categories.scss';

const CategoryItem = () => {
    const categories = [
        {
          id:1,
          title:'Hats',
          href:"http://youtube.com",
          imgsrc:"https://img.freepik.com/free-photo/assortment-stylish-fedora-hats_23-2150711533.jpg?size=626&ext=jpg&ga=GA1.1.1852846683.1689413396&semt=ais"
        },
        {
          id:2,
          title:'jackets',
          href:"http://youtube.com",
          imgsrc:"https://media.istockphoto.com/id/1404654875/photo/various-vintage-jackets-on-clothing-rack-in-second-hand-store.webp?b=1&s=170667a&w=0&k=20&c=Z2QzjG00NPoQHYmdLVxL0DUVK49lBBb_TfWcPxmH9Js="
        },
        {
          id:3,
          title:'Sneakers',
          href:"http://youtube.com",
          imgsrc:"https://images.unsplash.com/photo-1560769629-975ec94e6a86?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c2hvZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
        },
        {
          id:4,
          title:'Women',
          href:"http://youtube.com",
          imgsrc:"https://img.freepik.com/free-photo/young-woman-business-suit-wearing-hat_1303-17697.jpg?size=626&ext=jpg&ga=GA1.1.1852846683.1689413396&semt=ais"
        },
        {
          id:5,
          title:'Men',
          href:"http://youtube.com",
          imgsrc:"https://img.freepik.com/premium-photo/smiling-man-wearing-demi-season-clothes-street_1139-1391.jpg?size=626&ext=jpg&ga=GA1.1.1852846683.1689413396&semt=ais"
        }
       ]
      
        return (
        <div className='categories-container'>
          {categories.map(({title,href,id,imgsrc})=>{
            return(
              <div className='category-container' key={id}  >
              {/*<img  src={imgsrc}/>*/} <div className='background-image' style={{backgroundImage:`url(${imgsrc})`}}/>
             <div className='category-body-container'>
               <h2>{title}</h2>
               <a href={href}>shop now</a>
              </div>      
            </div>
              )
          })}
          </div>
      
        );
      }

export default CategoryItem
