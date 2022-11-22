// import { createTheme, ThemeProvider } from '@mui/material/styles';
// import Header from './../../Component/Header';
// import  Box  from '@mui/material/Box';
// import prototypes from '@mui/material/'
// import useCallback from '@mui/material/'
// import useState from 

// <div>
//     {prototypes.map((prototype) => {
//     	const { id, thumbnail, title, price, desc, picUrl } = prototype;
//     	const onAdd = () => {addToOrder(id)} //** 이 부분에서 클릭이벤트로 해당 id 보내줌
    	
//        return (
//    		 <div key={id}>
//    		   <a href={picUrl} target="_BLANK" rel="noreferrer">
//    		 	<div>
//                <video
//                 autoPlay
//                 loop
//                 playsInline
//                 style={{ objectFit: "contain" }}
//                 src={thumbnail}
//               />
//       		</div>
//           </a>
//        <div>
//         <div>
//          <div onClick={onAdd}> 
//            <i className="icon" />
//          </div>
//          {title}
//         </div>
//         <p>$ {price}</p>
//         <p>{desc}</p>
//        </div>
//      </div>
//      );
//     })}
//  </div>

// const [orders, setOrders] = useState([]); //주문 상품

// //[{id: x, quanity: x}]
// const addToOrder = useCallback((id) => {
//   setOrders(orders => { //기존의 orders를 받아서 새로운 orders return             
//     const find = orders.find(one => one.id === id) //id가 첫번째 요소, 없을시 undefined
//     if (find === undefined) { //처음 add시
//       return [...orders, {
//         id: id,
//         quantity: 1
//       }] //새로운 요소 추가
//     } else { //기존 added된게 있을때
//       return orders.map(one => {
//         if (one.id === id) { //개수 부분 수정
//           return {
//             id,
//             quantity: one.quantity + 1
//           }
//         } else {
//           return one;
//         }
//       })
//     }
//   });
// }, []);


//   export default function Orders() {
//     const totalPrice = useMemo(() => { //장바구니 담긴 상품 최종 가격
//       return orders
//         .map((order) => {
//           const { id, quantity } = order;
//           const prototype = prototypes.find((p) => p.id === id); //가격을 찾기위해 해당 id의 prototypes에 접근
//           if (prototype) {
//             return prototype.price * quantity;
//           } else { return false }
  
//         })
//         .reduce((l, r) => l + r, 0); //map으로 return된 값들 전부 더함
//     }, [orders, prototypes]); //orders가 변할때마다 렌더링
  
//     if (orders.length === 0) { //주문 내역이 없을시 보여주는 화면
//       return (
//         <aside>
//             <div>장바구니가 비어있습니다.</div>
//         </aside>
//       )
//     }
  
//     return (
//     <Box>
//       <aside>
//         <div>
//             {orders.map((order) => {
//               const { id } = order;
//               //해당 order의 자료를 prototypes 데이터에서 찾아서 접근
//               const prototype = prototypes.find((p) => p.id === id); 
              
//               return (
//                 prototype && <>
//                   <div key={id}>
//                       <video src={prototype.thumbnail} />
//                   </div>
//                   <div>{prototype.title} x {order.quantity}</div>
//                   <div className="action">$ {prototype.price * order.quantity}
//                     <button onClick={() => remove(id)}>
//                       <i className="icon" />
//                     </button>
//                   </div>
//                 </>
//               );
//             })}
//           </div>
//           <div className="total">
//             <div className="item">
//               <div>Total</div>
//               <div>$ {totalPrice}</div>
//               <button className="btn" onClick={removeAll}>
//                 <i className="icon" />
//               </button>
//             </div>
//         </div>
//       </aside>
//     </Box>
//     );
//   }

//   const remove = useCallback((id) => { //선택 상품 삭제
//     setOrders(orders => {
//       return orders.filter(one => one.id !== id);
//     })
  
//   }, []);
//   const removeAll = useCallback((id) => { //전체 삭제 
//     setOrders([]); //빈 배열로 만들어줌
//   }, []);