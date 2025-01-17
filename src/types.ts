export type visibleItems = string[];

export interface IOItem {
  index: string;
  key: string;
  entry: IntersectionObserverEntry;
  visible: boolean;
}
export type Item = [itemId: string, observerEntry: IOItem];

export interface Refs {
  [key: string]: React.MutableRefObject<HTMLElement | null>;
}

export type ItemType = React.ReactElement<{
  /**
    Required. id for every item, should be unique
   */
  itemId: string;
}>;
