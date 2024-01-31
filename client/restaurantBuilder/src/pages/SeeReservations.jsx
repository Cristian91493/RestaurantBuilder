const SeeReservations = () => {
  return (
    <div>
      <table>
        <tr>
          <th>{`Name: ${firstName} ${lastName}`}</th>
          <th>{`Reservation: ${date} ${time}`}</th>
          <th>{`Contact: ${phoneNum} ${email}`}</th>

        </tr>
      </table>

      {/* <h1>{`${firstName} ${lastName}`}</h1>
      <h2>{`${date} ${time}`}</h2>
      <h3>{`${phoneNum} ${email}`}</h3> */}
    </div>
  )
}

export default SeeReservations


