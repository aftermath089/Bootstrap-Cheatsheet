import Temprature from '@/temprature'
import { mount } from '@vue/test-utils'

describe('computed properties test', () => {
    test('celcius', () => {
        const wrapper = mount(Temprature)
        expect(wrapper.vm.celsius).toBe(0)
        
        //wrapper.setData({degrees: 23})
        wrapper.vm.degrees = 23 //because computed properties is reactive we can just change via vm 
        expect(wrapper.vm.celsius).toBe(23)
    })

    test('fahrenheit', () => {
        const wrapper = mount(Temprature)
        expect(wrapper.vm.fahrenheit).toBe(32)
        
        wrapper.vm.degrees = 16
        expect(wrapper.vm.fahrenheit).toBe(60.8)
    })
})