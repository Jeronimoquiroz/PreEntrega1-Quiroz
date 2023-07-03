

const Tarjetas = ({name,description,img}) => {

    return (
        <div>
            <img src={img} width="170px" height="300px" alt="nombre"/>
            <h3>{name}</h3>
            <p>{description}</p>
        </div>
    )
}

export default Tarjetas;

//hay otra forma de hacer props, (clase 1:00:00)

//  const Tarjetas = (props) => {

//   return (
//       <div>
//          <img src={props.img} width="170px" height="300px" alt="nombre"/>
//           <h3>{props.name}</h3>
//           <p>{props.description}</p>
//      </div>
//      )
//  }

//  export default Tarjetas 
