    import React from 'react'
    import ChildProps from './ChildProps'

    export default function ParentProps() {

        const name1="Sanjay"
        const city1="Tiruvannamalai"
        const age1=22
        const mobileNumber1=9876543210
        const address1="Anna Nagar, Tiruvannamalai"

        const name2="Ragul"
        const city2="Chennai"
        const age2=23
        const mobileNumber2=9876543211
        const address2="Periyar Nagar, Chennai"

        const name3="Priya"
        const city3="Coimbatore"
        const age3=24
        const mobileNumber3=9876543212
        const address3="Gandhipuram, Coimbatore"

        const name4="Karthik"
        const city4="Madurai"
        const age4=25
        const mobileNumber4=9876543213
        const address4="KK Nagar, Madurai"

        const name5="Divya"
        const city5="Trichy"
        const age5=26
        const mobileNumber5=9876543214
        const address5="Srirangam, Trichy"

    return (
        <div>
            <div>
                <h1><u>UserDetails</u></h1>
            </div>
            <div className='userdetails'>
                <ChildProps name={name1} city={city1} age={age1} mobileNumber={mobileNumber1} address={address1}/>
                <ChildProps name={name2} city={city2} age={age2} mobileNumber={mobileNumber2} address={address2}/>
                <ChildProps name={name3} city={city3} age={age3} mobileNumber={mobileNumber3} address={address3}/>
                <ChildProps name={name4} city={city4} age={age4} mobileNumber={mobileNumber4} address={address4}/>
                <ChildProps name={name5} city={city5} age={age5} mobileNumber={mobileNumber5} address={address5}/>
            </div>
        </div>
    )
    }
