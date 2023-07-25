import CommonLayout from 'components/layouts'
import { useSelector } from 'react-redux'

const Dashboard = () => {
  const data = useSelector((state) => state.test.data)
  console.log(data)
  return (
    <CommonLayout>
      <>Dashboard</>
    </CommonLayout>
  )
}

export default Dashboard
