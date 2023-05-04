import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table'
import {useNavigate, useParams} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {DLT, ADD, REMOVE} from "../redux/actions/action";

const CardsDetails = () => {

  const [data,setData] = useState([]);
  // console.log(data);

  const {id} = useParams();
  // console.log(id);

  const dispatch = useDispatch();

  const history = useNavigate();

  
  const getdata = useSelector((state)=> state.cartreducer.carts);
  // console.log(getdata);


  const compare = ()=>{
    let comparedata = getdata.filter((e)=>{
      return e.id == id
    });
    setData(comparedata);
  }

  const send=(e)=>{
    dispatch(ADD(e));
  }
const dlt=(id)=>{
    dispatch(DLT(id));
    history("/")
  }
  // Удалить один
  const remove=(item)=>{
    dispatch(REMOVE(item));
  }

  useEffect(()=>{
    compare();
  },[id])

  return (
    <>
      <div className="container mt-2">
        <h2 className='text-center'>Детали заказа
        </h2>

        <section className='container mt-3'>
          <div className="iteamsdetails">
          {
            data.map((ele)=>{
              return (
                <>
                  <div className="items_img">
                    <img src={ele.imgdata} alt="" />
                  </div>

                  <div className="details">
                    <Table>
                      <tr>
                        <td>
                          <p> <strong>Ресторан</strong>  : {ele.rname}</p>
                          <p> <strong>Цена</strong>  : Br{ele.price}</p>
                          <p> <strong>Блюдо</strong>  : {ele.address}</p>
                          <p> <strong>Общая стоимость</strong> : Br {ele.price * ele.qnty}</p>
                          <div className="mt-5 d-flex justify-content-between align-items-center" style={{width: 100, cursor:"pointer", background:"#ddd", color : "#111"}}>
                          <span style={{fontSize :24}} onClick={ele.qnty <=1?()=>dlt(ele.id) : ()=>remove(ele)}>-</span>
                          <span style={{fontSize :22}}>{ele.qnty}</span>
                          <span style={{fontSize :24}} onClick={()=>send(ele)}>+</span>
                          </div>
                        </td>

                        <td>
                          <p><strong>Рейтинг :</strong> <span style={{background:"green",color:"#fff",padding:"2px 5px", borderRadius:"5px"}}>{ele.rating} ★	</span></p>
                          <p><strong>Обзор заказа :</strong> <span >{ele.somedata}	</span></p>
                          <p><strong>Удалить :</strong> <span><i className='fas fa-trash' onClick={()=>dlt(ele.id)} style={{color:"red", fontSize:20, cursor:"pointer"}}></i></span></p>
                        </td>
                      </tr>
                    </Table>
                  </div>
                </>
              )
            })
          }
          </div>
        </section>
      </div>
    </>
  )
}

export default CardsDetails