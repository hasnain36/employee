import './Employee.css'
function Employee(){
    return(
        <div className="main">
            <div className="header">
            <h3>
                Employee Management App
            </h3>
        </div>
        <h2>
            Employee List
        </h2>
        <div className="section">
        <button className='btn'>
            Add Employee
        </button>
        
        <table className='em'>
            <tr>
                <th>Employee First Name</th>
                <th>Employee Second Name</th>
                <th>Employee Email id</th>
                <th>Actions</th>
            </tr>
            <tr>
                <td>Ramesh</td>
                <td>Fadatare</td>
                <td>ram@gmail.com</td>
                <td className='btn2'>
                    <button className='one'>
                    Update
                    </button>
                    <button className='two'>
                    Delete
                    </button>
                    <button className='three'>
                    View
                    </button>
                 </td>
            </tr>
            <tr>
                <td>John</td>
                <td>Cena</td>
                <td>John@gmail.com</td>
                 <td className='btn2'>
                    <button className='one'>
                    Update
                    </button>
                    <button className='two'>
                    Delete
                    </button>
                    <button className='three'>
                    View
                    </button>
                 </td>
            </tr>
            <tr>
                <td>Tom</td>
                <td>Cruise</td>
                <td>tom@gmail.com</td>
                 <td className='btn2'>
                    <button className='one'>
                    Update
                    </button>
                    <button className='two'>
                    Delete
                    </button>
                    <button className='three'>
                    View
                    </button>
                 </td>
            </tr>
            <tr>
                <td>Admin</td>
                <td>admin</td>
                <td>admin@gmail.com</td>
                 <td className='btn2 last'>
                    <button className='one'>
                    Update
                    </button>
                    <button className='two'>
                    Delete
                    </button>
                    <button className='three'>
                    View
                    </button>
                 </td>
            </tr>
        </table>
        </div>
        <div className="footer">
            <p>All Rights Reserved 2022 @JavaGuides</p>
        </div>
        </div>
    );
}
export default Employee;