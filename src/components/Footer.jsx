import React from 'react'

const Footer = () => {
  return (
    <div className="row bg text-light bg-success">
                <div className="col-md-4">
                    <h4 className="text-center">About us</h4>
                    <p> Warm & Trust-Focused

                        We are a family-run farm dedicated to growing fresh, healthy produce the natural way. From seed
                        to harvest, we care for our land using sustainable farming practices that protect the soil,
                        conserve water, and respect nature. Our goal is simple: to deliver farm-fresh quality you can
                        trust, straight from our fields to your tabl</p>
                    <p> Simple & Clean

                        Rooted in nature, grown with care.
                        Our farm combines traditional farming wisdom with modern sustainable practices to produce
                        high-quality crops year after year. We believe good food starts with healthy soil, honest work,
                        and respect for the land.</p>


                </div>

                <div class="col-md-4">
                    <h4 class="text-center">Contact us</h4>
                    <form action="">
                        <input type="email" placeholder="enter your e-mail" class="form-control" required/> <br>
                        <input type="tel" placeholder="enter your phone number" class="form-control"/><br><br>
                        <textarea name="" id="" cols="30" rows="6" placeholder="leave a comment"
                            class="form-control"/></textarea><br>
                        <input type="submit" value="send a message" class="btn btn-danger"/><br>
                    </form>

                </div>

                <div class="col-md-4 text-center">
                    <h4>Stay connected</h4>
                    <a href="https://www.facebook.com"><img src="images/in.png" alt=""/></a>
                    <a href="http://www.instagram.com"><img src="images/fb.png" alt=""/></a>
                    <a href="http://www.x.com"><img src="images/x.png" alt=""/></a>

                    <p>follow us o out social pages at @upendo farms </p>
                    <p>contact us at 0794738304</p>

                </div>

            </div>
           
  )
}

export default Footer