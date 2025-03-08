import React from 'react' 
import img1 from '../assets/1.jpg'  
import './Home.css'
function Home() {
  return (
    <div className='text-center'>
        <h1 className="display-2 text-secondary">Home</h1>
        <img  src={img1} width="500px" className='rounded-5 py-5' alt="" />
        <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis quisquam delectus earum deleniti velit cupiditate quidem placeat, omnis laborum, molestias nobis sequi, vel distinctio blanditiis explicabo dolore quia quibusdam dolorum! Itaque, commodi pariatur. Quod, temporibus esse illo minus quam consequatur dolore. Fugiat molestias omnis libero quasi, officiis adipisci ipsam obcaecati.</p>
    </div>
  )
}

export default Home