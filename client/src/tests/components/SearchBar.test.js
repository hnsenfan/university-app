import { shallow } from 'enzyme'
import SearchBar from '../../components/SearchBar/SearchBar'

test('should test SearchBar component', () => {
 const wrapper = shallow(<SearchBar />)
 expect(wrapper).toMatchSnapshot()
})

test('should handle handleSubmitSearch handler', () => {
  const onSubmitMock = jest.fn()
  const wrapper = shallow(<SearchBar handleSubmitSearch={onSubmitMock} />)
  expect(wrapper).toMatchSnapshot()
  wrapper.find('.btn-primary').simulate('click')
  expect(onSubmitMock).toHaveBeenCalled()
 })

 test('should handle handleChangeValue handler', () => {
  const onChangeMock = jest.fn()
  const wrapper = shallow(<SearchBar optionArray={['name', 'country']} handleChangeValue={onChangeMock} />)
  wrapper.find('.name').simulate('change', { preventDefault() {}, target: { value: 'new value' } })
  expect(onChangeMock).toHaveBeenCalled()
 })