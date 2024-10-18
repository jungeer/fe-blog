# React Hooks

## 1. 什么是 React Hooks？它们解决了什么问题？
**答案**：React Hooks 是 React 16.8 引入的新特性，它们允许你在不编写 class 的情况下使用 state 以及其他的 React 特性。

Hooks 解决的主要问题：
1. 在组件之间复用状态逻辑很难
2. 复杂组件变得难以理解
3. 难以理解的 class
4. 使用 class 组件会遇到 this 的问题

## 2. 请解释 useState Hook 的作用和用法。
**答案**：useState 是一个 Hook，它让你在函数组件中添加 state。

用法：
```jsx
import React, { useState } from 'react';

function Example() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
```

useState 返回一个数组，第一个元素是当前的 state，第二个元素是更新 state 的函数。

## 3. useEffect Hook 的作用是什么？它如何模拟生命周期方法？
**答案**：useEffect 让你在函数组件中执行副作用操作。它可以看作 componentDidMount，componentDidUpdate 和 componentWillUnmount 这三个生命周期方法的组合。

用法：
```jsx
import React, { useState, useEffect } from 'react';

function Example() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
    // 清理函数
    return () => {
      document.title = 'React App';
    };
  }, [count]); // 仅在 count 更改时更新

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
```

- 不传第二个参数：每次渲染后都会执行
- 传空数组 []：仅在组件挂载和卸载时执行
- 传入依赖项数组：仅在依赖项变化时执行

## 4. useContext Hook 的作用是什么？如何使用？
**答案**：useContext 用于获取 React 上下文（Context）的值。它简化了在函数组件中使用上下文的过程。

用法：
```jsx
import React, { useContext } from 'react';

const ThemeContext = React.createContext('light');

function ThemedButton() {
  const theme = useContext(ThemeContext);
  return <button className={theme}>I am styled by theme context!</button>;
}
```

## 5. useReducer Hook 的作用是什么？它与 Redux 有什么关系？
**答案**：useReducer 是 useState 的替代方案，用于管理复杂的状态逻辑。它接收一个 reducer 函数和初始状态，返回当前状态和 dispatch 方法。

用法：
```jsx
import React, { useReducer } from 'react';

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return {count: state.count + 1};
    case 'decrement':
      return {count: state.count - 1};
    default:
      throw new Error();
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch({type: 'increment'})}>+</button>
      <button onClick={() => dispatch({type: 'decrement'})}>-</button>
    </>
  );
}
```

useReducer 与 Redux 的关系：它们都使用 reducer 的概念来管理状态，但 useReducer 是局部的状态管理，而 Redux 是全局的状态管理。

## 6. 什么是自定义 Hook？如何创建自定义 Hook？
**答案**：自定义 Hook 是一个函数，其名称以 "use" 开头，函数内部可以调用其他的 Hook。自定义 Hook 可以让你在不同的组件之间重用一些状态逻辑。

创建自定义 Hook 的例子：
```jsx
import { useState, useEffect } from 'react';

function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);
  
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return width;
}

// 使用自定义 Hook
function MyComponent() {
  const width = useWindowWidth();
  return <div>Window width is {width}</div>;
}
```

## 7. useMemo 和 useCallback 的区别是什么？
**答案**：
- useMemo 用于缓存计算结果，它接受一个创建函数和一个依赖项数组，仅在某个依赖项改变时才重新计算值。
- useCallback 用于缓存函数，返回一个 memoized 版本的回调函数，仅在某个依赖项改变时才更新。

用法：
```jsx
import React, { useMemo, useCallback } from 'react';

function MyComponent({ data, onSubmit }) {
  // 使用 useMemo 缓存计算结果
  const sortedData = useMemo(() => {
    return data.sort((a, b) => a - b);
  }, [data]);

  // 使用 useCallback 缓存函数
  const handleSubmit = useCallback(() => {
    onSubmit(data);
  }, [onSubmit, data]);

  return (
    // 组件内容
  );
}
```

## 8. useRef Hook 的作用是什么？
**答案**：useRef 返回一个可变的 ref 对象，其 .current 属性被初始化为传入的参数。useRef 的主要作用是存储一个可变的值，这个值在组件的整个生命周期内保持不变。

常见用途：
1. 访问 DOM 节点或 React 元素
2. 保存一个不需要触发重新渲染的可变值

用法：
```jsx
import React, { useRef, useEffect } from 'react';

function TextInputWithFocusButton() {
  const inputEl = useRef(null);
  const onButtonClick = () => {
    // `current` 指向已挂载到 DOM 上的文本输入元素
    inputEl.current.focus();
  };
  return (
    <>
      <input ref={inputEl} type="text" />
      <button onClick={onButtonClick}>Focus the input</button>
    </>
  );
}
```

## 9. 如何使用 Hook 实现 componentDidMount 的效果？
**答案**：可以使用 useEffect Hook 并传入一个空数组作为第二个参数来模拟 componentDidMount。

```jsx
import React, { useEffect } from 'react';

function MyComponent() {
  useEffect(() => {
    console.log('Component did mount');
    // 清理函数（可选）
    return () => {
      console.log('Component will unmount');
    };
  }, []); // 空数组作为第二个参数

  return <div>My Component</div>;
}
```

这个 useEffect 只会在组件挂载时执行一次，而清理函数（如果提供）会在组件卸载时执行。

## 10. Hook 的使用规则是什么？
**答案**：Hook 的使用规则主要有两条：

1. 只在最顶层使用 Hook
   - 不要在循环，条件或嵌套函数中调用 Hook
   - 确保 Hook 在每次渲染时都以相同的顺序被调用

2. 只在 React 函数中调用 Hook
   - 在 React 的函数组件中调用 Hook
   - 在自定义 Hook 中调用其他 Hook

遵循这些规则是为了确保 Hook 在多次渲染之间保持正确的状态。React 依赖于 Hook 的调用顺序来正确地关联内部状态与对应的 Hook。

## 11. 如何使用 Hook 优化性能？
**答案**：可以使用以下 Hook 来优化 React 应用的性能：

1. useMemo：缓存计算结果
2. useCallback：缓存函数引用
3. useRef：避免不必要的重新渲染
4. React.memo：类似于 PureComponent，对函数组件进行浅比较

示例：
```jsx
import React, { useMemo, useCallback } from 'react';

const MyComponent = React.memo(({ data, onItemClick }) => {
  const sortedData = useMemo(() => {
    return [...data].sort((a, b) => a - b);
  }, [data]);

  const handleItemClick = useCallback((item) => {
    onItemClick(item);
  }, [onItemClick]);

  return (
    <ul>
      {sortedData.map(item => (
        <li key={item} onClick={() => handleItemClick(item)}>{item}</li>
      ))}
    </ul>
  );
});
```

在这个例子中，我们使用 useMemo 来缓存排序结果，使用 useCallback 来缓存点击处理函数，并使用 React.memo 来避免不必要的重新渲染。

## 12. 如何使用 Hook 管理异步操作？
**答案**：可以结合 useEffect 和 useState 来管理异步操作。对于更复杂的场景，可以使用 useReducer。

示例：
```jsx
import React, { useState, useEffect } from 'react';

function AsyncComponent() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const response = await fetch('https://api.example.com/data');
      const result = await response.json();
      setData(result);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  return <div>Data: {JSON.stringify(data)}</div>;
}
```

这个例子展示了如何使用 Hook 来处理异步数据获取，包括加载状态和错误处理。
