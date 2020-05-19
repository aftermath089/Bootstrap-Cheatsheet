import {mount} from '@vue/test-utils'
import TestComponent from '@/test.vue'
import List from '@/list.vue'

test('mount vue component', () => {
    const wrapper = mount(TestComponent, {
        propsData: {
            value: 'VueSchool'
        }
    })
    expect(wrapper.html()).toMatchSnapshot()
})

test("ListComponent", () => {
    const wrapper = mount(List);
    const movies = wrapper.vm.marvelMovies;
    
    wrapper.setData({
        marvelMovies: [...movies, "Endgame"]
    });
    
    wrapper.vm.$nextTick( () => {
        expect(wrapper).toMatchSnapshot();
        done();
    })
})