import React from 'react';
import './Home.css';

export default function Home() {
    return (
        <div>
            
            <section id="one">
                <div className='container'>
                    <div className='box-1'>
                        <p>Looking To Savour The</p>
                        <p>Flavours Of The City</p>
                        <h3>Browse through a variety of cuisines</h3>

                        <form>
                            <input type="text" name="search" placeholder='What is your appetite' />&nbsp;&nbsp;
                            <button type="submit">Search</button>
                        </form>
                    </div>
                    
                    <div className='box-2'>
                        <img src='robot.png' alt="A robot chef holding a cake" width="200" height="200" id='robot' />
                    </div>
                </div>
                <h2 align="center" style={{fontFamily:"sans-serif"}}>Categories</h2> 
                <div className="menu">
                    <div className='card'>
                        <h3>Breakfast</h3>
                        <img src='breakfast.png' alt='breakfast' width="50%" />
                    </div>
                    <div className='card'>
                        <h3>Lunch</h3>
                        <img src='biryani.png' alt='lunch' width="50%" />
                    </div>
                    <div className='card'>
                        <h3>Dinner</h3>
                        <img src='dinner.png' alt='dinner' width="50%" />
                    </div>
                </div>
            </section>
            <br/><br/>
            <section id='blog'>
                <h3 align="center">Read Our Blog</h3><br/><br/>
                <div className='blog'>
                    <div className='cards'>
                        <img src='home-made.png' alt='Home' width="50%" />
                        <h4>Five Tips for Delicious Home-Made Meals</h4>
                    </div>
                    <div className='cards'>
                        <img src='foodlovers.png' alt='foodlovers' width="50%" />
                        <h4>Five Must Try Recipes For Food-Lovers</h4>
                    </div>
                    <div className='cards'>
                        <img src='delicious.png' alt='delicious' width="50%" />
                        <h4>Delicious Recipes to Delight your Taste-buds</h4>
                    </div>
                </div>
            </section>

            <section id='end'>
                <div className="bar">
                    <div><h4>FoodBuddy</h4></div>
                    <div><a href='#'>Follow us On Instagram</a></div>
                    <div><a href='#'>FaceBook</a></div>
                    <div><h4><strong>&copy;FoodBuddyLimited</strong></h4></div>
                </div>
            </section>
        </div>
    );
}
