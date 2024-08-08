
import React from 'react'
import WeeklyUpdatesContainer from '../components/WeeklyUpdatesContainer'
import Header from '../components/Header'
import { googleLogout } from '@react-oauth/google';
import { useSelector, useDispatch } from 'react-redux';
import { login, logout } from '../slices/UserSlice';
import { useNavigate } from 'react-router-dom';
import AuthGoogle from '../components/authDropDown';


function ProfilePage() {
    const dispatch = useDispatch();
    const navigate=useNavigate()
    const { isLoggedIn, googleToken, userInfo } = useSelector((state) =>state.user)

    const handleLogout = () => {
        googleLogout()
        localStorage.removeItem('token')
        dispatch(logout());
        console.log('Logged Out')
        navigate('/')
        
    };
    
  return (
    <div className=' relative w-screen h-[500px] '>
        <img 
            className=' object-fill'
            src= "/backgroundPro.svg"
            alt='background Image' 
        />
        {/* Header */}
        <div className=' absolute top-0 left-[25%] sm:left-0'>
            <Header bgColor=" " textColor="white" />
        </div>
        {/* Profile Header */}
        {isLoggedIn && userInfo ? <div className=' '>
        <div className=' absolute top-[100px] left-[15%] w-[70%] sm:left-0 flex justify-evenly items-center rounded-3xl h-auto sm:w-full bg-stone-100'>
            <div className=' relative w-[180px] bg-cornflowerblue-500 my-16 h-[180px] flex flex-col justify-start items-center rounded-full sm:w-[100px] sm:h-[100px] sm:rounded-[100px] overflow-hidden md:w-[150px] md:h-[150px] md:rounded-[150px]'>
                <img className=' text-13xl md:text-5xl text-white text-center sm:text-lg w-full h-full object-cover' src={userInfo.picture} alt='Profile Image'></img>
                <button className=' absolute bottom-6 rounded sm:hidden cursor-pointer bg-stone-600 text-sm text-stone-200'>Add Profile Photo</button>
            </div>
            <div className=' mx-10 flex flex-col gap-0'>
                <p className='  font-sans font-bold text-19xl text-stone-900'>
                    {userInfo.name}
                </p>
                <p className=' text-sm font-light text-stone-600'>{userInfo.email}</p>
            </div>
        </div>


        {/* Profile Edit Container */}
        <div className='absolute top-[450px] sm:top-[375px] sm:gap-1 md:gap-4 left-[15%] w-[70%] sm:left-0 pl-10 rounded-3xl h-auto sm:w-full bg-stone-100'>
            <div className=' flex justify-around gap-96 md:gap-72 sm:gap-10'>
                <p className='  text-3xl font-sans text-stone-700 font-semibold text-start'>Personal Information</p>
                <button className=' bg-stone-100 text-3xl text-cornflowerblue-300 cursor-pointer text-end'>
                    Edit
                </button>
            </div>
            
            <table className='w-full table-fixed'>
              <tbody>
              <tr className='border-b'>
                <td className='text-lg text-stone-500 font-serif py-2 w-1/3'>Mobile Number</td>
                <td className='text-lg text-stone-500 py-2'>-</td>
             </tr>
            <tr className='border-b'>
                <td className='text-lg text-stone-500 font-serif sm:hidden py-2'>Email Address</td>
                <td className='text-lg text-stone-500 sm:hidden py-2'>{userInfo.email}</td>
            </tr>
            <tr className='border-b'>
                <td className='text-lg text-stone-500 font-serif py-2'>First Name</td>
                <td className='text-lg text-stone-500 py-2'>{userInfo.given_name}</td>
            </tr>
            <tr className='border-b'>
                <td className='text-lg text-stone-500 font-serif py-2'>Last Name</td>
                <td className='text-lg text-stone-500 py-2'>{userInfo.family_name}</td>
            </tr>
            <tr className='border-b'>
                <td className='text-lg text-stone-500 font-serif py-2'>Gender</td>
                <td className='text-lg text-stone-500 py-2'>-</td>
            </tr>
            <tr className='border-b'>
                <td className='text-lg text-stone-500 font-serif py-2'>Date of Birth</td>
                <td className='text-lg text-stone-500 py-2'>-</td>
            </tr>
           </tbody>
           </table>
        </div>


        {/* Booking History */}
        <div className=' absolute top-[820px] sm:top-[770px] sm:gap-1 md:gap-4 left-[15%] w-[70%] sm:left-0 pl-10 rounded-3xl h-auto sm:w-full bg-stone-100'>
            <p>Rahula</p>
            <p>Rahula</p>
            <p>Rahula</p>
            <p>Rahula</p>
            <p>Rahula</p>
            <p>Rahula</p>
            
        </div>
        <div onClick={handleLogout} className=' cursor-pointer absolute top-[1100px] left-[45%] w-[10%] flex justify-center items-center bg-stone-100 rounded-md h-auto'>
          <div style={{ width: '24px', height: '24px', marginRight: '8px' }}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style={{ width: '100%', height: '100%' }}>
               <path d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 192 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l210.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128zM160 96c17.7 0 32-14.3 32-32s-14.3-32-32-32L96 32C43 32 0 75 0 128L0 384c0 53 43 96 96 96l64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l64 0z" fill="#0099ff" />
            </svg>
          </div>
          <p className='font-roboto text-cornflowerblue-300'>LOGOUT</p>
        </div>

        </div> :
        <div className=' absolute top-[100px] left-[25%] w-[50%] flex flex-col justify-center gap-5 px-10  py-10 items-center sm:left-0 rounded-3xl h-auto sm:w-full bg-stone-100'>
            <span className=' text-stone-800 text-19xl font-roboto'>Welcome, Traveller!</span>
            <p className=' text-stone-700 text-13xl font-roboto'>
            Login to get access to your goCash, profile & bookings, and stay updated on the best travel offers.</p>
            <AuthGoogle />
            </div>}
        {/* Footer */}
        <div className=' absolute top-[1180px]'>
        <WeeklyUpdatesContainer
            imageDimensions="/subscribe-section-background@2x.png"
            imageId="/logo.svg"
            thumbnailDimensions="/social-icons.svg"
        />
        </div>
    </div> 
  )
}

export default ProfilePage