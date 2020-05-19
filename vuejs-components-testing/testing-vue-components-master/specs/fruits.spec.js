import  FruitBasket from '@/fruit-basket'
import { mount } from '@vue/test-utils'

test('add fruit to basket via DOM on click', () => {
    const wrapper = mount(FruitBasket)

    const input = wrapper.find('input')
    const button = wrapper.find('button')

    //make sure its empty when first initiated
    expect(wrapper.findAll('li').length).toBe(0)

    //test input
    input.element.value = 'apple'
    input.trigger('input')
    expect(wrapper.vm.fruit).toBe('apple')

    //test button click
    button.trigger('click')
    expect(wrapper.vm.fruit).toBe('')
    expect(wrapper.vm.basket).toEqual(expect.arrayContaining(['apple']))
    
    //check if item succesfuly added
    wrapper.vm.$nextTick(() =>{
        expect(wrapper.findAll('li').length).toBe(1)
    })
})
