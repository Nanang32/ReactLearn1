import React from "react";
import Card from "./components/Card";

function App() {
    return (
        <div className="py-4">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <Card content={{
                            imgurl:"http://placekitten.com/g/300/200",
                            title:"artikel pertama",
                            published:"06 nov,2021"
                            }}
                        />
                    </div>
                    <div className="col-md-4">
                        <Card content={{
                            imgurl:"http://placekitten.com/g/300/200",
                            title:"artikel kedua",
                            published:"06 nov,1991"
                        }}
                        />
                    </div>
                    <div className="col-md-4">
                        <Card content={{
                            imgurl:"http://placekitten.com/g/300/200",
                            title:"artikel ketiga",
                            published:"06 nov,2020"
                        }}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App;