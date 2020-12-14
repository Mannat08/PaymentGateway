import React, {useState, useEffect} from 'react';
import {useHistory} from "react-router-dom";
import Axios from 'axios'
import "./style.css";

export default function UserDetails() {
    // const link="{{accountInfo.phoneNumber}}"
    const [cardNumber, setcardNumber] = useState();
    const [expirationDate, setexpirationDate] = useState();
    const [cvv, setcvv] = useState();
    const [ownerName, setownerName] = useState();
    const submit = async (e) =>{
        e.preventDefault();
        console.log("Submitted successfully");
        try{
            const loginUser = { cardNumber,expirationDate,cvv,ownerName };
            
            const loginRes = await Axios.post(
                "http://localhost:5000/api/userModel",loginUser);
               console.log(loginRes);
        } catch(err) {
           console.error(err);
        }
    };
   
    return (
        <div>
            <div className="parent-div">
               <div className="container">
                <p className="top">Credit Card Payment Gateway</p><br/><hr/>
                    <div className="child-div">
                            <div className="heading">
                                Payment Details
                            </div>
                            <div className="image-section">
                                <div className="one"><img src="https://entrackr.com/wp-content/uploads/2019/04/Mastercard-1200x600.jpg" alt="master-card img"  height ="56px"></img></div>
                                <div className="two"><img src="https://cdn.prodstatic.com/shared/images/cards/500x315/discover-it-chrome-012518.png" alt="discover-card img" ></img></div>
                                <div className="three"><img src="https://newsroom.mastercard.com/eu/files/2019/06/NewCard2-90x57.png" alt="paypal-card img" ></img></div>
                                <div className="four"><img src="https://icm.aexp-static.com/Internet/internationalcardshop/en_in/images/cards/en_in-smart-earn-credit-card.png" alt="american-express-card img" ></img></div>
                            </div>
                    </div>
                    
                        <form onSubmit={submit}>
                            {/* CARD NUMBER */}

                            <div className="action-space"> 
                                <div className="cardNum-input-area">
                                    CARD NUMBER <input type="tel" placeholder="  Valid Card Number" pattern="[0-9]{16}"></input>
                                </div>
                                {/* EXPIRATION DATE AND CVV */}
                            <div className="mid">
                                <div className="expDate-input-area">
                                    EXPIRATION DATE <input type="MM/YY" placeholder="  MM/YY" ></input>
                                </div>

                                <div className="cvv-input-area">
                                    CVV CODE<input type="tel" placeholder="  CVV" pattern="[0-9]{3}"></input>
                                </div> 
                            </div>
                            {/* CARD OWNER */}
                            <div className="cardOwner-input-area">
                                    CARD OWNER <input type="text" placeholder="  Card Owner Name" ></input>
                                </div>
                                <div className="btn"><input type="submit" className="btnn" value="Confirm Payment"/></div>
                            </div>  
                            
                            
                        </form>
                    
                </div>
            </div>
        </div>
    )
}

