import { shallow } from 'enzyme'
import Loading from '../../components/Loading/Loading'

test('should test Loading component', () => {
 const wrapper = shallow(<Loading />)
 expect(wrapper).toMatchSnapshot()
})