# React 基础

## 1. React 的核心概念是什么？什么是 JSX？
**答案**：React 的核心概念包括：
1. 组件（Components）
2. Props
3. State
4. 生命周期（Lifecycle）
5. 虚拟 DOM（Virtual DOM）
6. 单向数据流

JSX 是 JavaScript 的语法扩展，它允许你在 JavaScript 文件中编写类似 HTML 的代码。JSX 产生 React "元素"。例如：

```jsx
const element = <h1>Hello, world!</h1>;
```

JSX 不是必需的，但它使得编写 React 应用程序更加方便。

## 2. React 的虚拟 DOM 是如何工作的？
**答案**：虚拟 DOM 是 React 性能优化的关键。它的工作原理如下：

1. 当应用状态改变时，整个 UI 会在虚拟 DOM 中重新渲染。
2. 然后，差异算法（Diffing Algorithm）会找出虚拟 DOM 中的变化。
3. 计算完成后，只有变化的部分会被更新到实际的 DOM 中。

这个过程称为协调（Reconciliation）。通过这种方式，React 可以最小化 DOM 操作，从而提高性能。

## 3. 什么是 React 组件？函数组件和类组件有什么区别？
**答案**：React 组件是 UI 的可重用部分。它们可以接收输入（称为 "props"）并返回描述屏幕上应该显示内容的 React 元素。

函数组件和类组件的主要区别：

1. 语法：
   - 函数组件：是一个返回 JSX 的 JavaScript 函数。
   - 类组件：是一个扩展自 React.Component 的 JavaScript 类。

2. 状态管理：
   - 函数组件：在引入 Hooks 之前不能有状态，现在可以使用 useState Hook 管理状态。
   - 类组件：可以使用 this.state 和 this.setState() 管理状态。

3. 生命周期：
   - 函数组件：使用 useEffect Hook 模拟生命周期。
   - 类组件：有完整的生命周期方法。

4. 性能：
   - 函数组件通常更轻量，性能略好。

示例：

```jsx
// 函数组件
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

// 类组件
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
```

## 4. 什么是 Props？它们是如何在组件间传递的？
**答案**：Props（属性）是 React 组件之间传递数据的方式。它们是只读的，不应该被修改。Props 可以是任何 JavaScript 值，包括函数。

Props 的传递方式：
1. 从父组件到子组件：在 JSX 中，像 HTML 属性一样传递。
2. 从子组件到父组件：通过回调函数。

示例：

```jsx
// 父组件
function Parent() {
  const handleClick = () => console.log('Clicked!');
  return <Child message="Hello" onClick={handleClick} />;
}

// 子组件
function Child(props) {
  return (
    <div>
      <p>{props.message}</p>
      <button onClick={props.onClick}>Click me</button>
    </div>
  );
}
```

## 5. 什么是 State？它与 Props 有什么不同？
**答案**：State 是组件内部管理的数据。与 Props 不同，State 可以被组件自身修改。

State 与 Props 的主要区别：
1. 来源：Props 由父组件传入，State 在组件内部初始化和管理。
2. 可变性：Props 是只读的，State 可以通过 setState（类组件）或 useState（函数组件）更新。
3. 控制：Props 由父组件控制，State 由组件自身控制。

示例（使用 Hooks）：

```jsx
import React, { useState } from 'react';

function Counter() {
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

## 6. React 中的事件处理与原生 JavaScript 有什么不同？
**答案**：React 中的事件处理与原生 JavaScript 有几个主要区别：

1. 命名：React 事件使用驼峰命名（例如 onClick），而不是全小写（onclick）。
2. 传递函数：React 中你传递一个函数作为事件处理器，而不是字符串。
3. 阻止默认行为：在 React 中，你不能通过返回 false 来阻止默认行为，必须明确调用 preventDefault。
4. 合成事件：React 使用合成事件（SyntheticEvent）包装了浏览器的原生事件，提供了一致的属性和方法。

示例：

```jsx
function handleClick(e) {
  e.preventDefault();
  console.log('The link was clicked.');
}

return (
  <a href="#" onClick={handleClick}>
    Click me
  </a>
);
```

## 7. 什么是受控组件和非受控组件？
**答案**：
1. 受控组件：表单数据由 React 组件控制。表单元素的值由 state 控制，每次 state 更新都重新渲染组件。

```jsx
function ControlledInput() {
  const [value, setValue] = useState('');

  return (
    <input
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
}
```

2. 非受控组件：表单数据由 DOM 本身处理。通常使用 ref 来获取表单值。

```jsx
function UncontrolledInput() {
  const inputRef = useRef(null);

  function handleSubmit() {
    console.log(inputRef.current.value);
  }

  return (
    <>
      <input ref={inputRef} />
      <button onClick={handleSubmit}>Submit</button>
    </>
  );
}
```

受控组件更符合 React 的数据流，但有时使用非受控组件可以减少代码量并提高性能。

## 8. 什么是 React 的生命周期方法？在函数组件中如何模拟生命周期？
**答案**：React 的生命周期方法是在组件不同阶段被调用的特殊函数。主要的生命周期方法包括：

1. 挂载阶段：constructor, render, componentDidMount
2. 更新阶段：render, componentDidUpdate
3. 卸载阶段：componentWillUnmount

在函数组件中，我们使用 useEffect Hook 来模拟生命周期：

```jsx
import React, { useEffect, useState } from 'react';

function MyComponent() {
  const [data, setData] = useState(null);

  // 相当于 componentDidMount
  useEffect(() => {
    fetchData();
  }, []);

  // 相当于 componentDidUpdate
  useEffect(() => {
    console.log('data updated', data);
  }, [data]);

  // 相当于 componentWillUnmount
  useEffect(() => {
    return () => {
      console.log('component will unmount');
    };
  }, []);

  function fetchData() {
    // 获取数据的逻辑
  }

  return <div>{/* 组件内容 */}</div>;
}
```

## 9. 什么是高阶组件（HOC）？它们有什么用途？
**答案**：高阶组件（HOC）是一个函数，它接受一个组件作为参数并返回一个新的组件。HOC 是 React 中复用组件逻辑的高级技术。

HOC 的主要用途：
1. 代码复用
2. 渲染劫持
3. State 抽象和操作
4. Props 操作

示例：

```jsx
function withLogging(WrappedComponent) {
  return class extends React.Component {
    componentDidMount() {
      console.log('Component is mounted');
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  };
}

// 使用
const EnhancedComponent = withLogging(MyComponent);
```

## 10. React 中的 key 属性有什么作用？
**答案**：在 React 中，key 是一个特殊的属性，主要用在列表渲染中。key 帮助 React 识别哪些项目被修改、添加或删除。

key 的作用：
1. 提高渲染性能：React 使用 key 来优化元素的比对过程。
2. 维护组件状态：正确的 key 可以帮助 React 在列表重新渲染时保持组件状态。
3. 防止重复渲染：当列表顺序改变时，使用索引作为 key 可能导致不必要的重新渲染。

示例：

```jsx
function List({ items }) {
  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
}
```

注意：不推荐使用数组索引作为 key，除非列表是静态的且不会重新排序。最好使用稳定的、唯一的标识符作为 key。