import './detailed-view.css';

interface Props {
    fccid : number;
    callsign: string;
    full_name?: string;
    first?: string;
    middle?: string;
    last?: string;
    address1?: string;
    city?:string;
    state?:string;
    zip?:string;
}

const DetailedView = ({fccid, callsign, full_name, first, middle, last, address1, city, state, zip}: Props) => {
  return (
    <div className='table'>
      <table>
        <tbody>
             <tr>
            <td>FCCID</td>
            <td>{fccid}</td>
        </tr>
        <tr>
            <td>Callsign</td>
            <td>{callsign}</td>
        </tr>
        <tr>
            <td>Fullname</td>
            <td>{full_name || "N/A"}</td>
        </tr>
         <tr>
            <td>Firstname</td>
            <td>{first || "N/A"}</td>
        </tr>
         <tr>
            <td>Middlename</td>
            <td>{middle || "N/A"}</td>
        </tr>
        <tr>
            <td>Lastname</td>
            <td>{last || "N/A"}</td>
        </tr>
        <tr>
            <td>Address1</td>
            <td>{address1 || "N/A"}</td>
        </tr>
         <tr>
            <td>City</td>
            <td>{city || "N/A"}</td>
        </tr>
         <tr>
            <td>State</td>
            <td>{state || "N/A"}</td>
        </tr>
         <tr>
            <td>Zip</td>
            <td>{zip || "N/A"}</td>
        </tr>
        </tbody>
      </table>
    </div>
  )
}

export default DetailedView;
