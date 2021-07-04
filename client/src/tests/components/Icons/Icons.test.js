import { shallow } from 'enzyme'
import ChevronRight from '../../../components/Icons/General/ChevronRight'
import Close from '../../../components/Icons/General/Close'
import Error from '../../../components/Icons/General/Error'
import Logo from '../../../components/Icons/General/Logo'
import MiniSearch from '../../../components/Icons/General/MiniSearch'
import Star from '../../../components/Icons/General/Star'

test('should test Icons component', () => {
 const wrapperChevronRight = shallow(<ChevronRight />)
 expect(wrapperChevronRight).toMatchSnapshot()

 const wrapperClose = shallow(<Close />)
 expect(wrapperClose).toMatchSnapshot()

 const wrapperError = shallow(<Error />)
 expect(wrapperError).toMatchSnapshot()

 const wrapperLogo = shallow(<Logo />)
 expect(wrapperLogo).toMatchSnapshot()

 const wrapperMiniSearch = shallow(<MiniSearch />)
 expect(wrapperMiniSearch).toMatchSnapshot()

 const wrapperStar = shallow(<Star />)
 expect(wrapperStar).toMatchSnapshot()
})