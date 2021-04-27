import React from 'react'
import HomeSection from '../../components/home-section'
import Navbar from '../../components/navbar'

const Home = (): React.ReactElement => {
  return (
    <div>
      <Navbar page="home" />
      <HomeSection
        backgroundClass="one"
        picFirst={false}
        heading="Get Access To the best teachers in town"
        text="Making Refined and Qualified Teachers to all Schools in
                    Nigeria is our priority. Our platform creates a link between
                    teachers and schools by providing a medium to vet teachers,
                    and act as a means of communication between both parties."
        imageSrc="/images/teacher.svg"
      />
    </div>
  )
}

export default Home
