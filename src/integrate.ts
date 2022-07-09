import { Store } from 'gastore'
import { createReaction, Signal } from 'solid-js'

export function integrate<T>(store: Store<T>, signal: Signal<T>) {
  store.subscribe((value) => {
    console.log('store:' + value)
    if (signal[0]() !== value) {
      signal[1](() => value)
    }
  })
  const track = createReaction(() => {
    console.log('signal:' + signal[0]())
    if (store.get() !== signal[0]()) {
      store.set(signal[0]())
    }
  })
  track(() => signal[0]())
}
