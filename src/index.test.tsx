import React from 'react';
import { act, fireEvent, render } from '@testing-library/react';
import { ScrollMenu, Props } from '.';

import useIntersectionObserver from './hooks/useIntersectionObserver';

import * as constants from './constants';
import { publicApiType } from './createApi';
import { ItemType } from './types';
import { VisibilityContext } from './context';

jest.mock('./hooks/useIntersectionObserver');

const defaultItems = ['test1', 'test2'];
const defaultItemsWithSeparators = ['test1', 'item1-separator', 'test2'];
const scrollContainerClassName = 'scroll-class';
const getContext = (context: publicApiType) => {
  const { items: _1, scrollContainer: _2, ...rest } = context;
  return rest;
};
function Child({ itemId }: { itemId: string }) {
  const context = React.useContext(VisibilityContext);

  const text = getContext(context);
  return (
    <div data-testid={itemId} key={itemId}>
      {JSON.stringify({ itemId, ...text })}
    </div>
  );
}
const defaultChildren = defaultItems.map((itemId) => (
  <Child key={itemId} itemId={itemId} />
));

interface SetupProps extends Omit<Props, 'children'> {
  rerender?: Function;
  children?: ItemType | ItemType[];
}
const setup = ({
  children = defaultChildren,
  rerender,
  ...props
}: SetupProps = {}) => {
  if (rerender) {
    rerender(<ScrollMenu {...props}>{children}</ScrollMenu>);
    return render(<div />);
  }
  return render(<ScrollMenu {...props}>{children}</ScrollMenu>);
};

const options = {
  ratio: 0.9,
  root: null,
  rootMargin: '5px',
  threshold: [0.05, 0.5, 0.75, 0.95],
  throttle: 100,
};

describe('ScrollMenu', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  test('should render without props', () => {
    (useIntersectionObserver as jest.Mock).mockReturnValue({
      visibleItems: defaultItemsWithSeparators,
    });
    const { container } = setup();

    expect(container.firstChild).toBeTruthy();
  });

  describe('useIntersectionObserver', () => {
    test('should pass props to it', () => {
      (useIntersectionObserver as jest.Mock).mockReturnValue({
        visibleItems: defaultItemsWithSeparators,
      });
      const { container } = setup();

      expect(container.firstChild).toBeTruthy();
      expect(useIntersectionObserver).toHaveBeenCalled();
      const call = (useIntersectionObserver as jest.Mock).mock.calls[0].slice(
        -1
      )[0];
      expect(call).toMatchObject({
        items: expect.any(Object),
        itemsChanged: '',
        options,
        refs: Object.fromEntries(
          defaultItems.map((_, ind: number) => [
            String(ind),
            { current: expect.any(Element) },
          ])
        ),
      });
    });
  });

  describe('onInit', () => {
    beforeEach(() => {
      jest.resetAllMocks();
    });

    // eslint-disable-next-line radar/no-duplicate-string
    test('should fire with publicApi', () => {
      (useIntersectionObserver as jest.Mock).mockReturnValue({
        visibleItems: defaultItemsWithSeparators,
      });
      const onInit = jest.fn();
      const { container } = setup({ onInit });

      expect(container.firstChild).toBeTruthy();

      expect(onInit).toHaveBeenCalledTimes(1);
      const call = onInit.mock.calls[0][0];
      comparePublicApi(call);
    });

    test('should return initComplete false on first render(when visibleItems empty)', () => {
      (useIntersectionObserver as jest.Mock)
        .mockReturnValueOnce({
          visibleItems: [],
        })
        .mockReturnValueOnce({
          visibleItems: [],
        })
        .mockReturnValueOnce({
          visibleItems: defaultItemsWithSeparators,
        })
        .mockReturnValueOnce({
          visibleItems: defaultItemsWithSeparators,
        });
      const onInit = jest.fn();

      const { container, rerender } = setup({ onInit });

      expect(onInit).not.toHaveBeenCalled();
      const textContent1 = container.firstChild!.textContent;
      expect(textContent1!.includes('"initComplete":false')).toBeTruthy();

      setup({ onInit, rerender });

      expect(onInit).toHaveBeenCalledTimes(1);
      const call = onInit.mock.calls[0][0];
      expect(call.initComplete).toEqual(true);
      // console.log(textContent);
      const textContent2 = container.firstChild!.textContent;
      expect(textContent2!.includes('"initComplete":true')).toBeTruthy();
    });
  });

  describe('apiRef', () => {
    beforeEach(() => {
      jest.resetAllMocks();
    });

    test('should fire with publicApi', () => {
      (useIntersectionObserver as jest.Mock).mockReturnValue({
        visibleItems: defaultItemsWithSeparators,
      });
      const apiRef = { current: {} } as React.MutableRefObject<publicApiType>;

      const { container } = setup({ apiRef });

      expect(container.firstChild).toBeTruthy();

      comparePublicApi(apiRef.current);
    });
  });

  describe('onUpdate', () => {
    beforeEach(() => {
      jest.resetAllMocks();
    });

    test('should fire with publicApi', () => {
      (useIntersectionObserver as jest.Mock).mockReturnValue({
        visibleItems: defaultItemsWithSeparators,
      });
      const onInit = jest.fn();
      const onUpdate = jest.fn();

      const { container } = setup({ onInit, onUpdate });

      expect(container.firstChild).toBeTruthy();

      expect(onInit).toHaveBeenCalledTimes(1);
      expect(onUpdate).toHaveBeenCalledTimes(1);
      const call = onUpdate.mock.calls[0][0];
      comparePublicApi(call);
    });

    test('should not fire if init not complete(when visibleItems empty)', () => {
      (useIntersectionObserver as jest.Mock)
        .mockReturnValueOnce({
          visibleItems: [],
        })
        .mockReturnValueOnce({
          visibleItems: [],
        })
        .mockReturnValueOnce({
          visibleItems: defaultItemsWithSeparators,
        })
        .mockReturnValueOnce({
          visibleItems: defaultItemsWithSeparators,
        });
      const onInit = jest.fn();
      const onUpdate = jest.fn();

      const { container, rerender } = setup({ onInit, onUpdate });

      expect(onInit).not.toHaveBeenCalled();
      expect(onUpdate).not.toHaveBeenCalled();
      const textContent1 = container.firstChild!.textContent;
      expect(textContent1!.includes('"initComplete":false')).toBeTruthy();

      setup({ onInit, onUpdate, rerender });

      expect(onInit).toHaveBeenCalledTimes(1);
      expect(onUpdate).toHaveBeenCalledTimes(1);
      const call = onUpdate.mock.calls[0][0];
      comparePublicApi(call);
      expect(call.initComplete).toEqual(true);
      const textContent2 = container.firstChild!.textContent;
      expect(textContent2!.includes('"initComplete":true')).toBeTruthy();
    });
  });

  test('Structure - LeftArrow, ScrollContainer, MenuItems, RightArrow', () => {
    (useIntersectionObserver as jest.Mock).mockReturnValue({
      visibleItems: defaultItemsWithSeparators,
    });
    const LArrow = () => {
      const context = React.useContext(VisibilityContext);
      return (
        <div className="left-arrow">{JSON.stringify(getContext(context))}</div>
      );
    };
    const RArrow = () => {
      const context = React.useContext(VisibilityContext);
      return (
        <div className="right-arrow">{JSON.stringify(getContext(context))}</div>
      );
    };
    const { container } = setup({
      LeftArrow: LArrow,
      RightArrow: RArrow,
      scrollContainerClassName,
    });
    const outerWrapper = container.firstChild;
    expect(outerWrapper).toHaveClass(constants.wrapperClassName);
    const [LeftArrow, ScrollContainer, RightArrow] = Array.prototype.slice.call(
      outerWrapper?.childNodes
    );

    const context = {
      initComplete: true,
      isFirstItemVisible: false,
      isLastItemVisible: false,
      visibleItems: ['test1', 'item1-separator', 'test2'],
      visibleItemsWithoutSeparators: ['test1', 'test2'],
    };

    expect(LeftArrow).toHaveClass('left-arrow');
    expect(JSON.parse(LeftArrow.textContent)).toEqual(context);
    expect(RightArrow).toHaveClass('right-arrow');
    expect(JSON.parse(RightArrow.textContent)).toEqual(context);

    expect(ScrollContainer).toHaveClass(scrollContainerClassName);

    const MenuItems = ScrollContainer.firstChild;

    defaultItems.forEach((item) =>
      expect(MenuItems.textContent).toContain(item)
    );

    expect(container.firstChild).toBeTruthy();
  });

  test('should fire onScroll', () => {
    (useIntersectionObserver as jest.Mock).mockReturnValue({
      visibleItems: defaultItemsWithSeparators,
    });
    const onScroll = jest.fn();
    const { container } = setup({ onScroll });

    act(() => {
      fireEvent.scroll(container.firstChild?.firstChild as Element);
    });

    expect(onScroll).toHaveBeenCalledTimes(1);
    const call = onScroll.mock.calls[0][0];
    comparePublicApi(call);
  });

  test('should fire onWheel', () => {
    (useIntersectionObserver as jest.Mock).mockReturnValue({
      visibleItems: defaultItemsWithSeparators,
    });
    const onWheel = jest.fn();
    const { container } = setup({ onWheel });

    act(() => {
      fireEvent.wheel(container.firstChild as Element);
    });

    expect(onWheel).toHaveBeenCalledTimes(1);
    const call = onWheel.mock.calls[0][0];
    comparePublicApi(call);
  });

  test('should fire onMouseDown', () => {
    (useIntersectionObserver as jest.Mock).mockReturnValue({
      visibleItems: defaultItemsWithSeparators,
    });
    const onMouseDown = jest.fn();
    const { container } = setup({ onMouseDown });

    act(() => {
      fireEvent.mouseDown(container.firstChild as Element);
    });

    expect(onMouseDown).toHaveBeenCalled();
    const call = onMouseDown.mock.calls[0][0];
    comparePublicApi(call);
  });

  test('should fire onMouseUp', () => {
    (useIntersectionObserver as jest.Mock).mockReturnValue({
      visibleItems: defaultItemsWithSeparators,
    });
    const onMouseUp = jest.fn();
    const { container } = setup({ onMouseUp });

    act(() => {
      fireEvent.mouseUp(container.firstChild as Element);
    });

    expect(onMouseUp).toHaveBeenCalled();
    const call = onMouseUp.mock.calls[0][0];
    comparePublicApi(call);
  });

  test('should fire onMouseMove', () => {
    (useIntersectionObserver as jest.Mock).mockReturnValue({
      visibleItems: defaultItemsWithSeparators,
    });
    const onMouseMove = jest.fn();
    const { container } = setup({ onMouseMove });

    act(() => {
      fireEvent.mouseMove(container.firstChild as Element);
    });

    expect(onMouseMove).toHaveBeenCalled();
    const call = onMouseMove.mock.calls[0][0];
    comparePublicApi(call);
  });

  test('should pass classNames', () => {
    (useIntersectionObserver as jest.Mock).mockReturnValue({
      visibleItems: defaultItemsWithSeparators,
    });

    const itemClassName = 'item-class';
    const separatorClassName = 'sep-class';
    const wrapperClassName = 'wrapper-class';

    const { container } = setup({
      itemClassName,
      separatorClassName,
      scrollContainerClassName,
      wrapperClassName,
    });

    const wrapper = container.firstChild as HTMLElement;
    expect(wrapper.getAttribute('class')).toEqual(
      `${constants.wrapperClassName} ${wrapperClassName}`
    );

    const scrollContainer = wrapper.firstChild as HTMLElement;
    expect(scrollContainer.getAttribute('class')).toEqual(
      `${constants.scrollContainerClassName} ${scrollContainerClassName}`
    );

    const item = scrollContainer.firstChild as HTMLElement;
    expect(item.getAttribute('class')).toEqual(
      `${constants.itemClassName} ${itemClassName}`
    );

    const separator = scrollContainer.childNodes[1] as HTMLElement;
    expect(separator.getAttribute('class')).toEqual(
      `${constants.separatorClassName} ${separatorClassName}`
    );
  });
});

function comparePublicApi(call: publicApiType) {
  const {
    getItemById,
    getItemByIndex,
    getNextItem,
    getPrevItem,
    isItemVisible,
    isLastItem,
    scrollNext,
    scrollPrev,
    scrollToItem,
    visibleItems,
    visibleItemsWithoutSeparators,
    initComplete,
    isFirstItemVisible,
    isLastItemVisible,
    items,
    scrollContainer,
  } = call;

  expect(getItemById).toEqual(expect.any(Function));
  expect(getItemByIndex).toEqual(expect.any(Function));
  expect(getNextItem).toEqual(expect.any(Function));
  expect(getPrevItem).toEqual(expect.any(Function));
  expect(isItemVisible).toEqual(expect.any(Function));
  expect(isLastItem).toEqual(expect.any(Function));
  expect(scrollNext).toEqual(expect.any(Function));
  expect(scrollPrev).toEqual(expect.any(Function));
  expect(scrollToItem).toEqual(expect.any(Function));
  expect(visibleItems).toEqual(defaultItemsWithSeparators);
  expect(visibleItemsWithoutSeparators).toEqual(defaultItems);
  expect(initComplete).toEqual(expect.any(Boolean));
  expect(isFirstItemVisible).toEqual(expect.any(Boolean));
  expect(isLastItemVisible).toEqual(expect.any(Boolean));
  expect(items).toEqual(expect.any(Object));
  expect(scrollContainer).toEqual({ current: expect.any(Element) });
}
