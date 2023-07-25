import Header from 'components/header'
import Footer from 'components/footer'
import PropsTypes from 'prop-types'

const CommonLayout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}
CommonLayout.propTypes = {
  children: PropsTypes.element
}

export default CommonLayout
