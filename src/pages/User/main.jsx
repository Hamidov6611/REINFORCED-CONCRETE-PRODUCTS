import React from 'react'
import UserLayout from './layout/UserLayout'
import MyButton from './components/MyButton'
import MyRedButton from './components/MyRedButton'
import Hero from './components/Hero'

const Main = () => {
  return (
    <UserLayout title={"ЖЕЛЕЗОБЕТОННЫЕ ИЗДЕЛИЯ"}>
       <Hero />
    </UserLayout>
  )
}

export default Main