// @flow strict-local
import { useEffect, useState } from 'react'

export function useDidMount (fn: () => void | (() => void)) {
  useEffect(fn, [])
}

export function useBoolean (defaultValue: boolean): [boolean, () => void] {
  const [value, update] = useState<boolean>(defaultValue)

  return [value, () => void update(!value)]
}

export function useToggle<A, B> (a: A, b: B, defaultValue: A | B | null = null): [A | B, () => void] {
  const [value, update] = useBoolean((defaultValue || a) === a)

  return [value ? a : b, update]
}
