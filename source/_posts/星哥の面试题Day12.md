---
title: 星哥の面试题Day12
date: 2023-03-04 11:02:49
tags:
  - 面试题
  - 求职	
  - 前端
---
*面试题系列均来自鱼皮的知识星球——[编程导航](https://t.zsxq.com/0b6WUnJog)*

## JS 脚本延迟加载的方式有哪些？

JS 脚本的延迟加载主要有以下几种方式：

- async 属性：该属性可以使脚本异步加载，即在页面加载过程中不会阻塞页面的渲染和其他资源的加载。但是，异步执行的脚本不能保证执行顺序。

  ```js
  <script src="test.js" async></script>
  ```

- defer 属性：该属性也可以使脚本异步加载，但是会在 DOMContentLoaded 事件之前执行，也就是在页面加载完成之后执行，可以保证脚本之间的执行顺序。

  ```js
  <script src="test.js" defer></script>
  ```

- 动态添加 script 标签：可以在页面加载完成后，通过 JavaScript 动态添加 script 标签，实现延迟加载。

  ```js
  var script = document.createElement('script');
  script.src = 'test.js';
  document.body.appendChild(script);
  ```

- 使用 Intersectionobserver API：可以在元素进入视窗时再加载脚本，实现延迟加载。

  ```javascript
  var observer = new IntersectionObserver(function (entries) {
    if (entries[0].isIntersecting) {
      var script = document.createElement('script');
      script.src = 'test.js';
      document.body.appendChild(script);
    }
  }, { threshold: 0.5 });
  var target = document.querySelector('#target');
  observer.observe(target);
  ```

  

- setTimeout也可以实现延迟加载，但它并不是一种专门用来实现脚本延迟加载的方式，它更适用于实现定时任务，原理和Intersectionobserver API相似，并不推荐定时器实现延迟加载。

  ```javascript
  setTimeout(function() {
    var script = document.createElement('script');
    script.src = 'example.js';
    document.body.appendChild(script);
  }, 2000);
  ```

- setTimeout 的时间不能准确控制，如果时间设置过长，会延迟页面的加载速度；如果时间设置过短，可能会在页面还没有完全加载完成时执行脚本，导致错误。

- 无法保证脚本的执行顺序，如果多个脚本使用 setTimeout 加载，可能会导致执行顺序混乱。

注意：async 和 defer 属性只适用于外部脚本，不适用于内联脚本。

## 什么是点击穿透，怎么解决？

点击穿透是指在某些场景下，用户在快速点击页面元素时，由于某些原因（例如网络延迟），在前一个元素上的点击事件还没有完成时，下一个元素的点击事件就已经触发了，导致用户感觉到页面点击无效或者出现异常。



解决点击穿透的方法有以下几种：

1. 使用 debounce 或 throttle 函数。这两种函数可以控制函数的执行频率，减少短时间内函数的执行次数，从而减少点击穿透的可能性。
2. 使用 CSS pointer-events 属性。将当前元素的 pointer-events 属性设为 none，可以禁用当前元素的鼠标事件，从而避免在事件处理函数执行过程中发生点击穿透。
3. 使用 touch 事件代替 click 事件。在移动设备上，click 事件有300ms的延迟，可能会导致点击穿透。使用 touchstart、touchend 等 touch 事件可以避免这个问题。
4. 在 click 事件中使用 preventDefault 函数。在 click 事件的处理函数中调用 preventDefault 函数，可以阻止默认的事件行为，从而避免点击穿透。但是这种方法有可能会影响到一些用户习惯，因此需要慎用。

React为函数组件提供了一些React Hooks，来让函数组件也能拥有类组件的一些特性。

## 你常用的 React Hooks 有哪些?

### 常用Hooks

- useState 在函数中使用state

- useEffect 用于在函数组件中使用生命周期

- useContext 不使用组件嵌套就可以订阅 `React` 的 `Context`

- useRef 返回一个可变的 ref 对象，其 `.current` 属性被初始化为传入的参数（`initialValue`）。返回的 ref 对象在组件的整个生命周期内保持不变。

- useMemo 返回一个`memoized`值。，它仅会在某个依赖项改变时才重新计算，有助于避免在每次渲染时都进行高开销的计算。

- useCallback 返回一个`memoized`回调函数。把内联回调函数及依赖项数组作为参数传入 `useCallback`，它将返回该回调函数的 `memoized` 版本，该回调函数仅在某个依赖项改变时才会更新。

  ## 

### 部分用法示例

#### useState

首先看他在`type.d.ts`中的原型

```typescript
// Unlike the class component setState, the updates are not allowed to be partial
type SetStateAction<S> = S | ((prevState: S) => S);
// this technically does accept a second argument, but it's already under a deprecation warning
// and it's not even released so probably better to not define it.
type Dispatch<A> = (value: A) => void;
/**
* Returns a stateful value, and a function to update it.
*
* @version 16.8.0
* @see https://reactjs.org/docs/hooks-reference.html#usestate
*/
useState<S>(initialState: S | (() => S)): [S, Dispatch<SetStateAction<S>>];
```

可以推测出他的用法为

```
const [var, setVar] = useState(initValue);
```

其中var为变量名，setVar为设置var的回调函数，修改var的值都需要通过该回调函数。

initValue为var的初始值。

#### 示例

```tsx
export const DemoComponent: React.FC = () => {
	const [time, setTime] = useState([new Date().toString()]);
	return <div>{time}</div>;
};
```

测试输出

```html
Fri Mar 03 2023 19:02:05 GMT+0800 (China Standard Time)
```

##### useEffect

还是看他的原型

```typescript
// NOTE: callbacks are _only_ allowed to return either void, or a destructor.
type EffectCallback = () => (void | Destructor);
type DependencyList = ReadonlyArray<unknown>;
/**
 * Accepts a function that contains imperative, possibly effectful code.
 *
 * @param effect Imperative function that can return a cleanup function
 * @param deps If present, effect will only activate if the values in the list change.
 *
 * @version 16.8.0
 * @see https://reactjs.org/docs/hooks-reference.html#useeffect
 */
function useEffect(effect: EffectCallback, deps?: DependencyList): void;
```

#### 示例

```tsx
export const DemoComponent: React.FC = () => {
	const [count, setCount] = useState(0);
	useEffect(() => {
		return () => {
			console.log('unMounted');
		};
	}, []);
	useEffect(() => {
		console.log('count++');
	}, [count]);
	return (
		<div>
			<button onClick={() => setCount(count + 1)}>Count {count}</button>
		</div>
	);
};
```

其中以下代码可以被用作onMount和unMount生命周期函数

```tsx
useEffect(()=>{
  console.log('onMount')
  return ()=>{
		console.log('unMounte')
  }
},[])
```
