import AlertMessage from '@/alert-message'
import { mount } from '@vue/test-utils'

describe('testing lifecycle with spy', () => {
    test('assign interval when mounted', () => {
        const wrapper = mount(AlertMessage)
        expect(wrapper.vm.interval).not.toBe(undefined)
    })
    
})