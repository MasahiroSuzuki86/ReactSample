import { useState } from 'react'

type CounterProps = {
  initialValue: number
}

// propsのinitialValueに初期値をセットすること
// <Counter initialValue={0} />
const Counter = (props: CounterProps) => {
  const { initialValue } = props
  // カウントを保持する1つの状態をuseState()で宣言。引数は初期値
  //countが現在の状態、setCountが状態を更新する関数
  const [count, setCount] = useState(initialValue)

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count - 1)}>-</button>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>+</button>
    </div>
  )
}

export default Counter
