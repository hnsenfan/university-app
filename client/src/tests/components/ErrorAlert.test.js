import { shallow } from 'enzyme'
import ErrorAlert from '../../components/ErrorAlert/ErrorAlert'

test('should test ErrorAlert component', () => {
 const wrapper = shallow(<ErrorAlert />)
 expect(wrapper).toMatchSnapshot()
})