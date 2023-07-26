const { Link } = require('react-router-dom')

const Header = () => {
  return (
    <>
      <Link to="/">Dashboard</Link> <Link to="/alerts">Alerts</Link>{' '}
      <Link to="/alerts/1">Alert Details</Link>
    </>
  )
}

export default Header
