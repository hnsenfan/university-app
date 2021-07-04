import { shallow } from 'enzyme'
import DashboardView from '../../../routes/Dashboard/DashboardView'

test('should test DashboardView component', () => {
  const wrapper = shallow(<DashboardView />)
  expect(wrapper).toMatchSnapshot()
 })
