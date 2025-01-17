import {
  filterSeparators,
  scrollToItem,
  getItemElementById,
  getItemElementByIndex,
} from './helpers';
import ItemsMap from './ItemsMap';

import type { visibleItems } from './types';

export default function createApi(
  items: ItemsMap,
  visibleItems: visibleItems = []
) {
  const visibleItemsWithoutSeparators = filterSeparators(visibleItems);

  const isFirstItemVisible = !!items.first()?.visible;
  const isLastItemVisible = !!items.last()?.visible;

  const getItemById = (id: string) =>
    items.find((value) => value[1].key === String(id))?.[1];

  const getItemByIndex = (index: number | string) =>
    items.find((el) => String(el[1].index) === String(index))?.[1];

  const isItemVisible = (id: string) => visibleItems.includes(id);

  const getPrevItem = () => items.prev(items.getVisible()?.[0]?.[1]);

  const getNextItem = () =>
    items.next(items.getVisible()?.slice?.(-1)?.[0]?.[1]);

  const isLastItem = (id: string) => items.last() === getItemById(id);

  const scrollPrev = (
    behavior: ScrollBehavior = 'smooth',
    inline: ScrollLogicalPosition = 'end',
    block: ScrollLogicalPosition = 'nearest'
  ): void => scrollToItem(getPrevItem(), behavior, inline, block);

  const scrollNext = (
    behavior: ScrollBehavior = 'smooth',
    inline: ScrollLogicalPosition = 'start',
    block: ScrollLogicalPosition = 'nearest'
  ): void => scrollToItem(getNextItem(), behavior, inline, block);

  return {
    getItemById,
    getItemElementById,
    getItemByIndex,
    getItemElementByIndex,
    getNextItem,
    getPrevItem,
    isFirstItemVisible,
    isItemVisible,
    isLastItem,
    isLastItemVisible,
    scrollNext,
    scrollPrev,
    scrollToItem,
    visibleItems,
    visibleItemsWithoutSeparators,
  };
}

export interface publicApiType extends ReturnType<typeof createApi> {
  initComplete: boolean;
  items: ItemsMap;
  scrollContainer: React.RefObject<HTMLElement | null>;
  visibleItems: visibleItems;
}
