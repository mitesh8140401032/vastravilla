import React, { useState } from 'react'

export default function Test() {

    const data = [{
        "name": "Lenovo Thinkpad 41A4298",
        "Price": 200
    }, {
        "name": "Lenovo Thinkpad 41A2222",
        "Price": 200
    }, {
        "name": "Lenovo Thinkpad 41Awww33",
        "Price": 6700
    }, {
        "name": "Lenovo Thinkpad 41A424448",
        "Price": 600
    }, {
        "name": "Lenovo Thinkpad 41A429rr8",
        "Price": 4200
    }, {
        "name": "Lenovo Thinkpad 41A429ff8",
        "Price": 2200
    }, {
        "name": "Lenovo Thinkpad 41A429ss8",
        "Price": 200
    }, {
        "name": "Lenovo Thinkpad 41A429sg8",
        "Price": 500
    }];

    const lowtohigh = () => {
        data.sort((a, b) => (a.Price >
            
            
            b.Price ? 1 : -1));
        console.log(data)
        setFinal(data)
    }

    const [final, setFinal] = useState([])

    return (
        <>

            {
                final.length == "0" ?

                    data.map((i) => {
                        return (
                            <>

                                <h1>{i.name}</h1>
                                <h1>{i.Price}</h1>
                            </>
                        )
                    }) : final.map((i) => {
                        return (
                            <>

                                <h1>{i.name}</h1>
                                <h1>{i.Price}</h1>
                            </>
                        )
                    })
            }
            <button onClick={lowtohigh}> Low to high</button>


        </>
    )
}
