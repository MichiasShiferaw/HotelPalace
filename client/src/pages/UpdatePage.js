import React from 'react'
import AddRestaurants from '../components/AddRestaurants';
import UpdateRestaurant from '../components/UpdateRestaurant'

const UpdatePage = () => {
  return (
    <section>
      <div>
        <h1 className='text-center'>Update Restuarant</h1>
      </div>
      <UpdateRestaurant/>

    <button className='btn btn-secondary'>
        Hi
    </button>

    </section>
  )
}

export default UpdatePage;