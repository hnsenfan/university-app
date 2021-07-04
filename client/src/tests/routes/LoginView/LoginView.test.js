import { shallow } from 'enzyme'
import LoginView from '../../../routes/Login/LoginView'

const wrapper = shallow(<LoginView.WrappedComponent />)

test('should test LoginView component', () => {
  expect(wrapper).toMatchSnapshot()
 })

 test('should have a username field', () => {
  expect(wrapper.find('#username')).toHaveLength(1)
})

test('should have proper props for password field', () => {
  expect(wrapper.find('input[type="password"]').props()).toEqual({
    id: "password",
    onChange: expect.any(Function),
    type: 'password',
  })
})