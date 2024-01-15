
import PropTypes from 'prop-types'

function ShowingTime({readinTime}) {
  return (
    <div className='my-8'>
        <p className='text-purple-800 font-semibold border bg-slate-200 p-4 rounded-lg '>Spent Time on Read : {readinTime} mins</p>
    </div>
  )
}

ShowingTime.propTypes = {

}

ShowingTime.propTypes={
    readinTime:PropTypes.object
}

export default ShowingTime

