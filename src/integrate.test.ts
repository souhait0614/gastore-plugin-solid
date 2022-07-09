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
  it('store and signal set', () => {
    const str2 = "Integrated!"
    const str3 = "Integrated!!"
    const str4 = "Integrated!!!"
    const results = []
    const store = createStore('')
    const [getSignal, setSignal] = createSignal('')
    integrate(store, [getSignal, setSignal])
    store.set(str)
    results.push(getSignal())
    store.set(str2)
    results.push(getSignal())
    setSignal(str3)
    results.push(store.get())
    setSignal(str4)
    results.push(store.get())
    expect(results).toEqual([str, str2, str3, str4])
  })
  it('store and signal update', () => {
    const results = []
    const store = createStore(0)
    const [getSignal, setSignal] = createSignal(0)
    integrate(store, [getSignal, setSignal])
    store.update((prev) => prev + 1)
    results.push(getSignal())
    store.update((prev) => prev + 1)
    results.push(getSignal())
    setSignal((prev) => prev + 1)
    results.push(store.get())
    setSignal((prev) => prev + 1)
    results.push(store.get())
    expect(results).toEqual([1, 2, 3, 4])
  })
})
