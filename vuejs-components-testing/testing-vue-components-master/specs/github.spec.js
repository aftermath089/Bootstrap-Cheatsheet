import GithubCard from '@/github-card'
import { mount } from '@vue/test-utils'

describe('methods', () => {
    test('composeUrl', () => {
        const wrapper = mount(GithubCard)
        expect(wrapper.vm.composeUrl(123)).toBe('https://api.github.com/users/123')
    })

  
    
})
