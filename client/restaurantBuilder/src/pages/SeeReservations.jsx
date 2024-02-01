function SeeReservations({ reservations }) {
  // Safely access foundReservations with chaining
  const reservationsArray = reservations?.foundReservations || [];

  return (
    <div>
      <h1>Reservations</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Reservation</th>
            <th>Contact</th>
          </tr>
        </thead>
        <tbody>
          {reservationsArray.map((reservation, index) => (
            <tr key={index}>
              <td>{reservation.firstName} {reservation.lastName}</td>
              <td>{reservation.date} {reservation.time}</td>
              <td>{reservation.phoneNum} {reservation.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default SeeReservations;
 // function SeeReservations({reservations}) {
  //   const reservationsArray = Object.values(reservations);
  //   console.log(typeof reservations)
  //   return (
  //     <div>
  //       <h1>Reservations</h1>
  //       <table>
  //         <thead>
  //           <tr>
  //             <th>Name</th>
  //             <th>Reservation</th>
  //             <th>Contact</th>
  //           </tr>
  //         </thead>
  //         <tbody>
  //           {reservations.foundReservations.map((reservation, index) => (
  //             <tr key={index}>
  //               <td>{`${reservation.firstName} ${reservation.lastName}`}</td>
  //               <td>{`${reservation.date} ${reservation.time}`}</td>
  //               <td>{`${reservation.phoneNum} ${reservation.email}`}</td>

  //             </tr>
  //           ))}
  //         </tbody>
  //       </table>
  //     </div>
  //   );
  // }
  
  // export default SeeReservations;

    
     // const [ress, setReservations] = useState([]);
   
     // useEffect(() => {
     //   // Fetch reservations data from the server
     //   const fetchReservations = async () => {
     //     try {
     //       const response = await axios.get("/api/reservations/seereservations");
     //       setReservations(response.data);
     //     } catch (error) {
     //       console.error("Error fetching reservations:", error);
     //     }
     //   };
   
     //   fetchReservations();
     // }, []);