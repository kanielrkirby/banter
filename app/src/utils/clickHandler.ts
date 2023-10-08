// the point of this is to avoid having several click listeners and just have one that handles everything

type Subscriber = {
  element: HTMLElement,
  callback: (e: MouseEvent) => void,
  options?: { right?: boolean }
}

export const handler = {
  clickHandler: (e: MouseEvent) => {
    for (let i = 0; i < handler.subscribers.length; i++) {
      const subscriber = handler.subscribers[i]
      if (subscriber.options?.right && e.button !== 2) continue
      if (subscriber.element.contains(e.target as HTMLElement)) {
        subscriber.callback(e)
      }
    }
  },
  subscribers: [] as Subscriber[],
  subscribe: (element: HTMLElement, options?: { right?: boolean }) => {
    const subscriber = {
      element,
      options,
      callback: (e: MouseEvent) => {},
    }
    handler.subscribers.push(subscriber)
    handler.update()
    return {
      destroy: () => {
        handler.subscribers = handler.subscribers.filter(s => s !== subscriber)
      },
      callback: (callback: (e: MouseEvent) => void) => {
        subscriber.callback = callback
      },
    }
  },
  update: () => {
    document.removeEventListener('click', handler.clickHandler)
    document.addEventListener('click', handler.clickHandler)
  },
}
