import AlertMessage from '@/alert-message'
import { mount } from '@vue/test-utils'

describe('testing lifecycle with spy', () => {
    test('assign interval when mounted', () => {
        const wrapper = mount(AlertMessage)
        expect(wrapper.vm.interval).not.toBe(undefined)
    })
  
    test('check counter works', () => {
        jest.useFakeTimers()
        const wrapper = mount(AlertMessage)
        
        expect(wrapper.vm.counter).toBe(0)
        jest.advanceTimersByTime(5000)
        expect(wrapper.vm.counter).toBe(5)
    }) 

    test('destroy instance', () => {
        jest.useFakeTimers()

        const beforeDestroyedSpy = jest.spyOn(AlertMessage, 'beforeDestroy') //this first and then the wrapper
        const wrapper = mount(AlertMessage)

        wrapper.vm.counter = wrapper.vm.timer-1 //1 sec before destroyed
        jest.advanceTimersByTime(1000)

        expect(beforeDestroyedSpy).toHaveBeenCalled()
    })
})