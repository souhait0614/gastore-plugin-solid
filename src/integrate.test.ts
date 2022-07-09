import { createStore } from 'gastore'
import { createSignal } from 'solid-js'
import { describe, it, expect } from 'vitest'
import { integrate } from './integrate'

const str = 'gastore'

describe('createStore', () => {
  it('store set', () => {
    const store = createStore('')
    const [getSignal, setSignal] = createSignal('')
    integrate(store, [getSignal, setSignal])
    store.set(str)
    expect(getSignal()).toEqual(str)
  })
  it('store update', () => {
    const store = createStore(1)
    const [getSignal, setSignal] = createSignal(0)
    integrate(store, [getSignal, setSignal])
    store.update((prev) => prev + 1)
    expect(getSignal()).toEqual(2)
  })
  it('signal set', () => {
    const store = createStore('')
    const [getSignal, setSignal] = createSignal('')
    integrate(store, [getSignal, setSignal])
    setSignal(str)
    expect(store.get()).toEqual(str)
  })
  it('signal update', () => {
    const store = createStore(0)
    const [getSignal, setSignal] = createSignal(1)
    integrate(store, [getSignal, setSignal])
    setSignal((prev) => prev + 1)
    expect(store.get()).toEqual(2)
  })
})
