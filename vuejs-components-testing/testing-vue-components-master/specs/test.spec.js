import {mount} from '@vue/test-utils'
import TestComponent from '@/test.vue'

test('mount vue component', () => {
    const wrapper = mount(TestComponent, {
        propsData: {
            value: 'VueSchool'
        }
    })
    expect(wrapper.html()).toMatchSnapshot()
})