import React, { useState } from 'react'

export const Countries = () => {
    let [cities, setcities] = useState("")
    const countries = [
        { name: 'India', value: 'IN', cities: ['Delhi', 'Chennai'] },
        { name: 'Bangladesh', value: 'BD', cities: ['Dhaka', 'Chittagong'] },
        { name: 'United Kingdom', Value: 'UK', cities: ['Liverpool', 'Manchester'] }
    ]

    let showCities = (name) => {

        countries.map((citi) => {
            if (citi.name == name) {
                setcities(citi.cities)
            }
        });


    }
    return (
        <div className='relative top-32 left-1/4'>
            <div className='text-center bg-black text-white w-32 mx-5 p-4'> Countries</div>
            {countries.map((coun, index) => {
                return <div key={index} onClick={() => { showCities(coun.name) }}>

                    <div className='text-start mx-10 my-4'> {coun.name}</div>
                    <div className="absolute top-0 left-1/4 ">
                        <div className='text-center bg-black text-white w-32 p-4'>Cities</div>
                        <div className='w-52 mx-10 my-4'> <div>{cities[0]}</div>
                            <div>{cities[1]}</div>
                        </div>
                    </div>
                </div>
            })}

        </div>

    )
}
