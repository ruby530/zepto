// import axios from 'axios'
// import React, { useEffect, useState } from 'react'
// import { useNavigate } from 'react-router-dom'
// import { toast } from 'react-toastify'

// const Home = () => {
//     let navigate=useNavigate()
//     let [data,setData]=useState([])
//     let api=async()=>{
//         let response=await axios.get(`http://localhost:4000/products`)
//         setData(response.data)
//         setFilter(response.data)
//     }
//     useEffect(()=>{
//         api()
//     },[])
   
//     let viewDetails=(pid)=>{
//         navigate(`/viewmore/${pid}`)
        
//     }

//     let [filter,setFilter]=useState(data)
//     let categorywisefilter=["All","Chocolate","Grocery","Bakery","Cleaning","Dairy","Beverages","Vegetables","Snacks",]
//     let filterarray=(e)=>{
//         let array=e.target.innerText
//         if(array==="All"){
//             setFilter(data)
//         }
//         else{
//             let filteredarray=data.filter((elem)=>{
//                 return elem.category===array
//             })
//             setFilter(filteredarray)
//         }
//     }
//     useEffect(()=>{
//         setFilter(data)
//     },[])

//   return (
//   <>
//     <div className="homeproducts">
//         <div className="heading">
//             {categorywisefilter.map((elem,index)=>{
//                 return <button key={index} onClick={filterarray}>{elem}</button>
//             })}
//         </div>
      
//         <div className="container">
//             {filter.map((elem)=>{
//                 let {id,image,old_price,new_price,description,ml}=elem
//                 return(
//                     <>
//                         <div className="cards">
//                             <div className="image">
//                                 <img onClick={()=>viewDetails(id)} src={image} alt="no image" />
//                                 <button >ADD</button>
//                             </div>
//                             <div className="price">
//                                 <div className="newprice">{new_price}</div>
//                                 <div className="oldprice">{old_price}</div>
//                             </div>
//                             <div className="desc">{description}</div>
//                             <div className="ml">{ml}</div>
//                         </div>
//                     </>
//                 )
//             })}
//         </div>
//     </div>
//   </>
//   )
// }

// export default Home



import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const Home = () => {
    let navigate = useNavigate()

    let [data, setData] = useState([])
    let [filter, setFilter] = useState([])

    let api = async () => {
        try {
            let response = await axios.get(`http://localhost:4000/products`)
            setData(response.data)
            setFilter(response.data)
        } catch (error) {
            toast.error("Unable to load products")
        }
    }

    useEffect(() => {
        api()
    }, [])

    let viewDetails = (pid) => {
        navigate(`/viewmore/${pid}`)
    }

    // ADD TO CART FUNCTION
    let addToCart = async (product) => {
        try {
            // Get existing cart data from JSON Server
            let response = await axios.get(`http://localhost:4000/cart`)
            let cart = response.data

                let { id, ...productDetails } = product

                await axios.post(`http://localhost:4000/cart`, {
                    ...productDetails,
                    productId: id,
                    quantity: 1
                })

                alert("Product added to cart!")
        } catch (error) {
            console.log(error)
            alert("Something went wrong!")
        }
    }

  

    let categorywisefilter = [
        "All", "Chocolate", "Grocery", "Bakery",
        "Cleaning", "Dairy", "Beverages",
        "Vegetables", "Snacks"
    ]

    let filterarray = (e) => {
        let category = e.target.innerText

        if (category === "All") {
            setFilter(data)
        } else {
            let filteredarray = data.filter((elem) => {
                return elem.category === category
            })

            setFilter(filteredarray)
        }
    }

    return (
        <>
            <div className="homeproducts">

                <div className="heading">
                    {categorywisefilter.map((elem, index) => {
                        return (
                            <button key={index} onClick={filterarray}>
                                {elem}
                            </button>
                        )
                    })}
                </div>

                <div className="container">
                    {filter.map((elem) => {
                        let {
                            id, image, old_price,
                            new_price, description, ml
                        } = elem

                        return (
                            <div className="cards" key={id}>
                                <div className="image">
                                    <img
                                        onClick={() => viewDetails(id)}
                                        src={image}
                                        alt="no image"
                                    />

                                    <button onClick={() => addToCart(elem)}>
                                        ADD
                                    </button>
                                </div>

                                <div className="price">
                                    <div className="newprice">{new_price}</div>
                                    <div className="oldprice">{old_price}</div>
                                </div>

                                <div className="desc">{description}</div>
                                <div className="ml">{ml}</div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default Home
