import GithubCard from '@/github-card'
import { mount } from '@vue/test-utils'

describe('methods', () => {
    test('composeUrl', () => {
        const {composeUrl} = GithubCard.methods
        expect(composeUrl(123)).toBe('https://api.github.com/users/123')
    })
})
