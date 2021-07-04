import { shallow } from 'enzyme'
import App from '../App'

test('should test render initial layout ', () => {
 const wrapper = shallow(<App location={{ "pathname": "/app" }} />)
 expect(wrapper).toMatchSnapshot()
})