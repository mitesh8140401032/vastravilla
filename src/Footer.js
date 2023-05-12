import React from 'react'

export default function Footer() {
    return (
        <div className='color'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 mt-3">FOOTER MENU
                        <ul>
                            <li>Search</li>
                            <li>About Us</li>
                            <li>Blogs</li>
                            <li>Contact Us</li>
                            <li>Privacy Policy</li>
                            <li>Returns & Exchanges Policy</li>
                            <li>Returns Centre</li>
                            <li>Shipping Policy</li>
                            <li>Terms of Service</li>
                            <li>Track your Order</li>


                        </ul>
                    </div>
                    <div className="col-lg-4 mt-3">SIGN UP AND SAVE
                        <p>Subscribe to get special offers, free giveaways, and once-in-a-lifetime deals.</p>
                        <div className="col-lg-2">
                            <input type="email" className='aa' placeholder='Email' />
                            <i class="bi bi-instagram"></i><i class="bi bi-facebook"></i>
                        </div>
                    </div>
                    <div className="col-lg-3 mt-3">CONTACT US
                        <p><b>Customer Care:</b> +91-7383047999</p>
                        <p><b>Bulk Order: </b>+91-7862019776</p>
                        <p><b>WhatsApp Shopping:</b> +91-7383362500</p>
                        <p><b>Email:</b>  hello@labelaarna.com</p>
                        <a href="#" className='anchor'>Click here to fill this form and we will get back to you.</a>

                    </div>
                </div>
            </div>
        </div>
    )
}
