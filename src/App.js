import React, {useEffect, useState} from "react";
import axios from 'axios';


function App(props) {
    const [user, setUser] = useState([]);
    const getUser = async ()=>{
        try {
            let response = await axios.get('https://jsonplaceholder.typicode.com/users/1')
            setUser(response.data)
        } catch (e){
            console.log(e.message);
        }
    }
    useEffect(()=>{
        getUser();
    },[])
    return (
        <div className="py-4">
            <div className="container">
               <div className="row justify-content-center">
                   <div className="col-md-8">
                       <table className="table">
                           <thead>
                                <tr>
                                   <th>Name</th>
                                   <th>Username</th>
                                   <th>Email</th>
                                   <th>Website</th>
                                   <th>phone</th>
                                </tr>
                           </thead>
                           <tbody>
                               <tr >
                                   <td>{user.name}</td>
                                   <td>{user.username}</td>
                                   <td>{user.email}</td>
                                   <td>{user.website}</td>
                                   <td>{user.phone}</td>
                               </tr>
                               {/*{*/}
                               {/*    users.map((user,index)=>{*/}
                               {/*        return(*/}
                               {/*            <tr key={index}>*/}
                               {/*                <td>{user.name}</td>*/}
                               {/*                <td>{user.username}</td>*/}
                               {/*                <td>{user.email}</td>*/}
                               {/*                <td>{user.website}</td>*/}
                               {/*                <td>{user.phone}</td>*/}
                               {/*            </tr>*/}
                               {/*        )*/}
                               {/*    })*/}
                               {/*}*/}
                           </tbody>
                       </table>
                   </div>
               </div>
            </div>
        </div>
    )
}

export default App;