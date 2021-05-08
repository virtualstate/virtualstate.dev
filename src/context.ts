import { asyncHooks, source, asyncExtendedIterable, ExtendedAsyncIterable } from "iterable";
import { Is } from "io-ts";

export function createContext<T>(defaultValue: T, name?: string, is?: Is<T>, onRetrieveFailure?: (error?: unknown) => void, onStoreFailure?: (value: T, error?: unknown) => void): [() => ExtendedAsyncIterable<T>, (value: T) => void] {
  let currentValue: T = defaultValue;

  // If `name` isn't provided, we aren't using storage
  // If `is` isn't provided, we are write only
  if (name && is) {
    try {
      const storedValue = localStorage.getItem(name);
      if (storedValue) {
        const parsedValue = JSON.parse(storedValue);
        if (is(parsedValue)) {
          currentValue = parsedValue;
        }
      }
    } catch (e) {
      // Silently continue, could not retrieve
      if (onRetrieveFailure) {
        onRetrieveFailure(e);
      }
    }
  }

  const preference = source<T>();
  const preferenceTriggered = new WeakMap();
  const preferenceTrigger = asyncHooks({
    next: async (iterator: AsyncIterator<T>): Promise<IteratorResult<T>> => {
      if (preferenceTriggered.has(iterator)) {
        return iterator.next();
      }
      preferenceTriggered.set(iterator, true);
      return {
        done: false,
        value: currentValue
      };
    }
  });

  return [
    () => {
      return asyncExtendedIterable(preferenceTrigger(preference));
    },
    (value) => {
      currentValue = value;
      preference.push(value);
      if (name) {
        try {
          localStorage.setItem(name, JSON.stringify(value));
        } catch (e) {
          // Silently continue, could not store
          if (onStoreFailure) {
            onStoreFailure(value, e);
          }
        }
      }
    }
  ];
}
