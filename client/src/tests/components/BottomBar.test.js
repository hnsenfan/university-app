import { BrowserRouter as Router } from 'react-router-dom'
import { mount } from 'enzyme'
import BottomBar from '../../components/BottomBar/BottomBar'

test('should test BottomBar component', () => {
 const wrapper = mount(<Router><BottomBar /></Router>)
 expect(wrapper).toMatchSnapshot()
})