import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({title}) => {
  const onClick=()=>{
    console.log('Click')
  }
  return (
    <header className='header'>
      <h1>{title}</h1>
      <Button color='green' text='Add' onClick={onClick}/>
      {/* <Button color='yellow' text='Enter'/>
      <Button color='green' text='Save'/> */}
    </header>
  )
}

Header.defaultProps = {
  title: 'Task Tracker',
}

Header.propTypes={
  title: PropTypes.string.isRequired,
}

// ------> CSS in JS<------
// const headingStyle = {
//   color: 'green', 
//   backgroundColor: 'grey'
// }

export default Header
