"use client"

import { useState } from "react"

const SubscribeToNewsletter = ({ }) => {
    const [email, setEmail] = useState("");
    const [hasSignedUp, setHasSignedUp] = useState(false);
    const onChange = (e) => {
        setEmail(e.target.value);
    }

    const onSubmit = (e) => {
        e.preventDefault();

        console.log("pressed")
        if(email.length) {
            setHasSignedUp(true);
        }
    }
    

    return (
        <section className="newsletter">
            {hasSignedUp ? (
                <h4 className="newsletter_thanks">Thank you for signing up</h4>
            ) : (
            <>
                <div className="newsletter__info">
                    <h4>subscribe to our newsletter</h4>
                    <p className="copy">
                    Unlock Exclusive Insights and Stay In the Know – Subscribe to Our Newsletter Today to always stay in touch
                    </p>
                </div>
                <form action="" className="newsletter__form" onSubmit={onSubmit}>
                    <input type="text" 
                    className="newsletter__email input" 
                    placeholder="Enter your email address"
                    value={email}
                    onChange={onChange}/>
                    <button type="submit" className="newsletter__subscribe btn btn--medium btn--turquoise">SUBSCRIBE</button>
                </form>
            </>)
            
            }
        </section>
    )
}

export default SubscribeToNewsletter