import Profile from '../../src/assets/images/profile.png'

function Header() {
    return (
        <div className='flex justify-between px-10 items-center my-6 '>
            <h1 className='  text-3xl  font-bold '>Knowledge cafe </h1>
            <img src={Profile} alt=""  className='w-16 h-16 '/>
        </div>
    )
}

export default Header
