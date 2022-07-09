import { Store } from 'gastore'
import { createReaction, Signal } from 'solid-js'

export function integrate<T>(store: Store<T>, getSignal: Signal<T>[0], setSignal: Signal<T>[1]) {
  store.subscribe((value) => {
    console.log('store:' + value)
    if (getSignal() !== value) {
      setSignal(() => value)
    }
  })
  const track = createReaction(() => {
    console.log('signal:' + getSignal())
    if (store.get() !== getSignal()) {
      store.set(getSignal())
    }
  })
  track(() => getSignal())
}
