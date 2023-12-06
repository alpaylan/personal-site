import React from 'react';
import { Close } from '@mui/icons-material';

const shouldShowNewsletter = () => {
    let newsletter = localStorage.getItem('newsletter');
    if (typeof window !== 'undefined' && newsletter !== null && newsletter === 'false') {
        if (new Date().getTime() - localStorage.getItem('newsletterClosedTime') < 1000 * 60 * 60 * 24 * 7) {
            return false;
        } else {
            localStorage.setItem('newsletter', true);
        }
    }
    return true;
};



const NewsLetter = () => {
    const [show, setShow] = React.useState(shouldShowNewsletter());
    const [email, setEmail] = React.useState('');

    if (!show) {
        return null;
    }

    const closeNewsletter = () => {
        setShow(false);
        if (typeof window !== 'undefined') {
            localStorage.setItem('newsletter', false);
            localStorage.setItem('newsletterClosedTime', new Date().getTime());
        }
    }

    const subscribe = () => {
        alert('Thank you for subscribing!');
        console.log(email);
        closeNewsletter();
        fetch('https://alperenkelescom.fly.dev/newsletter', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: email })
    })};

    return (
        <div style={{
            position: 'fixed',
            bottom: 100,
            right: 100,
            backgroundColor: 'white',
            padding: 20,
            borderRadius: 2,
            boxShadow: '0 0 10px rgba(0,0,0,0.2)',
            zIndex: 1000,
        }}>
            <div style={{ float: 'right', cursor: 'pointer' }}>
                <Close onClick={closeNewsletter} />
            </div>
            <h3>Subscribe to my blog posts</h3>

            <input type="email" placeholder="Enter your email" onChange={e => setEmail(e.target.value)} />
            <button style={{ marginTop: 10 }} onClick={() => subscribe(email)}>Subscribe</button>


        </div>
    );
};

export default NewsLetter;
