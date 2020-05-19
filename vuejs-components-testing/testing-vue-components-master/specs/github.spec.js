import GithubCard from '@/github-card'
import { mount } from '@vue/test-utils'

describe('methods', () => {
    test('composeUrl', () => {
        const wrapper = mount(GithubCard)
        expect(wrapper.vm.composeUrl(123)).toBe('https://api.github.com/users/123')
    })


    test('fetchData', async () => { //make sure its async
        //mock the data
        const jsonMock = jest.fn().mockResolvedValue('GITHUB DATA')
        window.fetch = jest.fn().mockResolvedValue({
          json: jsonMock
        })
    
        const wrapper = mount(GithubCard, {
          methods: {
            composeUrl: () => 'url'
          }
        })
    
        await wrapper.vm.fetchData() //call the async method
    
        expect(window.fetch).toHaveBeenCalledWith('url')
        expect(jsonMock).toHaveBeenCalled()
        expect(wrapper.vm.data).toBe('GITHUB DATA')
      })
})
