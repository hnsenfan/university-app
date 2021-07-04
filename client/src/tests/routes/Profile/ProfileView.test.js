import { shallow } from 'enzyme'
import ProfileView from '../../../routes/Profile/ProfileView'

test('should test ProfileView component', () => {
  const wrapper = shallow(<ProfileView />)
  expect(wrapper).toMatchSnapshot()
 })
