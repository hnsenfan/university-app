import { shallow } from 'enzyme'
import Header from '../../components/Header/Header'

test('should test Header component', () => {
 const wrapper = shallow(<Header.WrappedComponent />)
 expect(wrapper).toMatchSnapshot()
})