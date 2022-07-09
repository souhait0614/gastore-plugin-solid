import { Store } from 'gastore'
import { createReaction, Signal } from 'solid-js'

export function integrate<T>(store: Store<T>, signal: Signal<T>) {
  store.subscribe((value) => {
    signal[1](() => value)
  })
  const track = createReaction(() => {
    store.set(signal[0]())
    track(() => signal[0]())
  })
  track(() => signal[0]())
}
