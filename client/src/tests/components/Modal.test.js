import { shallow } from 'enzyme'
import Modal from '../../components/Modal/Modal'

test('should test Modal component', () => {
 const wrapper = shallow(<Modal />)
 expect(wrapper).toMatchSnapshot()
})

test('should handle handleClose handler', () => {
  const onSubmitMock = jest.fn()
  const wrapper = shallow(<Modal handleClose={onSubmitMock} />)
  expect(wrapper).toMatchSnapshot()
  wrapper.find('.close-btn').simulate('click')
  expect(onSubmitMock).toHaveBeenCalled()
 })