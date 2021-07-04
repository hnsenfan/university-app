import { shallow } from 'enzyme'
import UniversityCard from '../../../routes/Universities/UniversityCard'

test('should test UniversityCard component with default state of empty object', () => {
  const wrapper = shallow(<UniversityCard uniObject={{}} />)
  expect(wrapper).toMatchSnapshot()
 })

 test('should test to render UniversityCard component with sample response', () => {
  const wrapper = shallow(
    <UniversityCard
      uniObject={{
      "domains": ["usmf.md"],
      "web_pages": ["http://www.usmf.md/"],
      "name": "Moldova State University of Medicine and Pharmacy \"N. Testemitsanu\"",
      "alpha_two_code": "MD",
      "state-province": null,
      "country": "Moldova, Republic of"
    }} />
  )
  expect(wrapper).toMatchSnapshot()
 })