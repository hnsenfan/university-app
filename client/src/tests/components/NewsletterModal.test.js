import { shallow } from 'enzyme'
import NewsletterModal from '../../components/NewsletterModal/NewsletterModal'

const wrapper = shallow(<NewsletterModal />)

test('should test NewsletterModal component', () => {
 expect(wrapper).toMatchSnapshot()
})

test('should have a subscribe button', () => {
  expect(wrapper.find('.btn-primary')).toHaveLength(1)
})
