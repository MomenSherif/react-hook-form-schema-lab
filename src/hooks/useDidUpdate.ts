import { useEffect, useRef } from 'react';
import type { EffectCallback, DependencyList } from 'react';

export default function useDidUpdate(
  effect: EffectCallback,
  deps: DependencyList,
) {
  const isMountedRef = useRef(false);

  const effectRef = useRef(effect);
  effectRef.current = effect;

  useEffect(() => {
    if (!isMountedRef.current) {
      isMountedRef.current = true;
      return undefined;
    }

    return effectRef.current();
  }, deps);
}
